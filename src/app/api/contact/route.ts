import { NextRequest, NextResponse } from 'next/server';
import { sanitizeObject, sanitizePlainText } from '@/utils/sanitize';
import { sendDualInquiryEmails, InquiryDispatchPayload } from '@/utils/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const sanitized = sanitizeObject(body) as Record<string, unknown>;

    const fullName = sanitizePlainText(String(sanitized.name || sanitized.fullName || ''));
    const email = sanitizePlainText(String(sanitized.email || ''));
    const phone = sanitizePlainText(String(sanitized.phone || ''));
    const message = sanitizePlainText(String(sanitized.message || sanitized.details || ''));
    const service = sanitizePlainText(String(sanitized.service || sanitized.serviceType || 'General Inquiry'));

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const idempotencyKey =
      req.headers.get('idempotency-key') ||
      `contact-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const dispatchPayload: InquiryDispatchPayload = {
      formSource: 'Website Direct Contact',
      fullName,
      email,
      phone,
      serviceType: service,
      message,
    };

    const emailDispatch = await sendDualInquiryEmails(dispatchPayload, {
      ip,
      idempotencyKey,
      timestamp: new Date().toISOString(),
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. A protection commander will review and respond within hours.',
      dispatchVerified: emailDispatch.internalSent,
    });
  } catch (error) {
    console.error('Contact API dispatch error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry submission.' },
      { status: 500 }
    );
  }
}
