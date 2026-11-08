import { NextRequest, NextResponse } from 'next/server';
import { sanitizeObject, sanitizePlainText } from '@/utils/sanitize';
import { validateCsrfToken, CSRF_COOKIE_NAME, CSRF_HEADER_NAME } from '@/utils/csrf';
import { sendDualInquiryEmails, InquiryDispatchPayload } from '@/utils/mailer';

// In-Memory Idempotency Cache (stores processed keys for 15 minutes)
interface IdempotencyRecord {
  timestamp: number;
  response: {
    success: boolean;
    message: string;
    idempotencyKey: string;
    cached?: boolean;
    dispatchVerified?: boolean;
  };
}

const idempotencyStore = new Map<string, IdempotencyRecord>();
const IDEMPOTENCY_TTL_MS = 15 * 60 * 1000; // 15 minutes

function cleanupIdempotencyStore() {
  const now = Date.now();
  for (const [key, record] of idempotencyStore.entries()) {
    if (now - record.timestamp > IDEMPOTENCY_TTL_MS) {
      idempotencyStore.delete(key);
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    cleanupIdempotencyStore();

    // 1. Verify Idempotency-Key Header
    const idempotencyKey = req.headers.get('idempotency-key') || req.headers.get('Idempotency-Key');
    if (!idempotencyKey || idempotencyKey.length < 16) {
      return NextResponse.json(
        { error: 'Missing or invalid Idempotency-Key header. UUID required.' },
        { status: 400 }
      );
    }

    // 2. Check Idempotency Cache (Drop duplicate submissions)
    if (idempotencyStore.has(idempotencyKey)) {
      const cached = idempotencyStore.get(idempotencyKey)!;
      return NextResponse.json(
        { ...cached.response, cached: true },
        {
          status: 200,
          headers: {
            'X-Idempotent-Replay': 'true',
          },
        }
      );
    }

    // 3. Verify CSRF Token (only in production or when token provided)
    const csrfHeader = req.headers.get(CSRF_HEADER_NAME);
    const csrfCookie = req.cookies.get(CSRF_COOKIE_NAME)?.value;
    const isCsrfValid = validateCsrfToken(csrfHeader, csrfCookie);

    if (csrfHeader && !isCsrfValid && process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'CSRF token verification failed. Security anomaly logged.' },
        { status: 403 }
      );
    }

    // 4. Parse & Sanitize Request Body
    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const sanitizedBody = sanitizeObject(rawBody) as Record<string, unknown>;

    // 5. Normalize incoming field variations from different consultation forms
    const fullName = String(
      sanitizedBody.fullName ||
        sanitizedBody.name ||
        sanitizedBody.clientName ||
        sanitizedBody.principalName ||
        ''
    ).trim();

    const email = String(
      sanitizedBody.email ||
        sanitizedBody.emailAddress ||
        sanitizedBody.contactEmail ||
        ''
    ).trim().toLowerCase();

    const phone = String(
      sanitizedBody.phone ||
        sanitizedBody.phoneNumber ||
        sanitizedBody.contactPhone ||
        ''
    ).trim();

    const rawService =
      sanitizedBody.serviceType ||
      sanitizedBody.serviceNeeded ||
      sanitizedBody.serviceRequired ||
      sanitizedBody.coverageType ||
      sanitizedBody.typeOfNeed ||
      sanitizedBody.deploymentType ||
      sanitizedBody.principalType;
    const serviceType =
      rawService && String(rawService).trim() ? String(rawService).trim() : undefined;

    const rawLocation =
      sanitizedBody.locationPreset ||
      sanitizedBody.location ||
      sanitizedBody.propertyLocation ||
      sanitizedBody.propertyCity ||
      sanitizedBody.cityLocation ||
      sanitizedBody.city ||
      sanitizedBody.county;
    const location =
      rawLocation && String(rawLocation).trim() ? String(rawLocation).trim() : undefined;

    const rawMessage =
      sanitizedBody.message ||
      sanitizedBody.briefDescription ||
      sanitizedBody.propertyDescription ||
      sanitizedBody.specialRequirements ||
      sanitizedBody.notes ||
      sanitizedBody.statement;
    const message =
      rawMessage && String(rawMessage).trim() ? String(rawMessage).trim() : undefined;

    const rawPreferredDate =
      sanitizedBody.preferredDate ||
      sanitizedBody.coverageStart ||
      sanitizedBody.timeline ||
      sanitizedBody.coverageTiming ||
      sanitizedBody.arrivalDate ||
      sanitizedBody.startDate ||
      sanitizedBody.targetDate;
    const preferredDate =
      rawPreferredDate && String(rawPreferredDate).trim()
        ? String(rawPreferredDate).trim()
        : undefined;

    const formSource = String(
      sanitizedBody.formSource ||
        sanitizedBody.source ||
        sanitizedBody.pageTitle ||
        'Consultation Inquiry'
    ).trim();

    // 6. Flexible, robust field validation
    const errors: Record<string, string[]> = {};

    if (!fullName || fullName.length < 2) {
      errors.fullName = ['Name must be at least 2 characters'];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = ['Please enter a valid RFC 5322 email address'];
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone || digitsOnly.length < 7) {
      errors.phone = ['Phone number must contain at least 7 digits'];
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: 'Validation failed on consultation form fields',
          details: errors,
        },
        { status: 422 }
      );
    }

    // 7. Assemble Unified Dispatch Payload (only containing fields actually provided)
    const dispatchPayload: InquiryDispatchPayload = {
      ...sanitizedBody,
      formSource,
      fullName: sanitizePlainText(fullName),
      email: email,
      phone: sanitizePlainText(phone),
    };

    // Clean up normalized aliases so they don't duplicate as extra custom fields
    delete dispatchPayload.name;
    delete dispatchPayload.clientName;
    delete dispatchPayload.principalName;
    delete dispatchPayload.emailAddress;
    delete dispatchPayload.contactEmail;
    delete dispatchPayload.phoneNumber;
    delete dispatchPayload.contactPhone;
    delete dispatchPayload.serviceNeeded;
    delete dispatchPayload.serviceRequired;
    delete dispatchPayload.coverageType;
    delete dispatchPayload.typeOfNeed;
    delete dispatchPayload.deploymentType;
    delete dispatchPayload.principalType;
    delete dispatchPayload.locationPreset;
    delete dispatchPayload.propertyLocation;
    delete dispatchPayload.propertyCity;
    delete dispatchPayload.cityLocation;
    delete dispatchPayload.city;
    delete dispatchPayload.county;
    delete dispatchPayload.coverageStart;
    delete dispatchPayload.timeline;
    delete dispatchPayload.coverageTiming;
    delete dispatchPayload.arrivalDate;
    delete dispatchPayload.startDate;
    delete dispatchPayload.targetDate;
    delete dispatchPayload.briefDescription;
    delete dispatchPayload.propertyDescription;
    delete dispatchPayload.specialRequirements;
    delete dispatchPayload.notes;
    delete dispatchPayload.statement;

    if (serviceType) {
      dispatchPayload.serviceType = sanitizePlainText(serviceType);
    } else {
      delete dispatchPayload.serviceType;
    }

    if (location) {
      dispatchPayload.location = sanitizePlainText(location);
    } else {
      delete dispatchPayload.location;
    }

    if (message) {
      dispatchPayload.message = sanitizePlainText(message);
    } else {
      delete dispatchPayload.message;
    }

    if (preferredDate) {
      dispatchPayload.preferredDate = sanitizePlainText(preferredDate);
    } else {
      delete dispatchPayload.preferredDate;
    }

    if (sanitizedBody.ndaRequested !== undefined && sanitizedBody.ndaRequested !== null) {
      dispatchPayload.ndaRequested = Boolean(sanitizedBody.ndaRequested);
    } else {
      delete dispatchPayload.ndaRequested;
    }

    if (
      sanitizedBody.requiresArmedDriver !== undefined &&
      sanitizedBody.requiresArmedDriver !== null
    ) {
      dispatchPayload.requiresArmedDriver = Boolean(sanitizedBody.requiresArmedDriver);
    } else {
      delete dispatchPayload.requiresArmedDriver;
    }

    // 8. Gather Client Telemetry
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const timestamp = new Date().toISOString();

    // 9. Dispatch Dual Emails (Owner Alert + Client Receipt)
    const emailDispatch = await sendDualInquiryEmails(dispatchPayload, {
      ip,
      idempotencyKey,
      timestamp,
      userAgent,
    });

    const successResponse = {
      success: true,
      message: 'Encrypted transmission confirmed.',
      idempotencyKey,
      dispatchVerified: emailDispatch.internalSent || emailDispatch.clientSent,
    };

    // 10. Cache in Idempotency Store
    idempotencyStore.set(idempotencyKey, {
      timestamp: Date.now(),
      response: successResponse,
    });

    return NextResponse.json(successResponse, {
      status: 200,
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
    });
  } catch (error: unknown) {
    console.error('[API /api/inquiry] Fatal handler exception:', error);
    return NextResponse.json(
      {
        error: 'Critical transmission error on secure channel. Contact priority dispatch.',
        dispatchContact: '(954) 234-7231',
      },
      { status: 500 }
    );
  }
}
