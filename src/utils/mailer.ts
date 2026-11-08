import nodemailer from 'nodemailer';

export interface InquiryDispatchPayload {
  formSource?: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  company?: string;
  organization?: string;
  county?: string;
  location?: string;
  locationPreset?: string;
  serviceType?: string;
  preferredDate?: string;
  message?: string;
  ndaRequested?: boolean;
  requiresArmedDriver?: boolean;
  details?: Record<string, unknown>;
  [key: string]: unknown;
}

interface DispatchMetadata {
  ip: string;
  idempotencyKey: string;
  timestamp: string;
  userAgent?: string;
}

/**
 * Formats ISO timestamp into an executive, human-readable date/time string.
 */
function formatHumanDateTime(isoStr?: string): string {
  try {
    const d = isoStr ? new Date(isoStr) : new Date();
    return (
      d.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }) + ' EST'
    );
  } catch {
    return isoStr || 'Recently';
  }
}

/**
 * Creates the Nodemailer transport based on environment variables.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465 || process.env.SMTP_SECURE === 'true',
      auth: {
        user,
        pass,
      },
    });
  }

  // Fallback to json transport for development/testing when SMTP credentials are unset
  return nodemailer.createTransport({
    jsonTransport: true,
  });
}

/**
 * Helper to escape HTML characters in dynamic values
 */
function escapeHtml(str: unknown): string {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sends both Internal Operations Intake (to owner) and Client Confirmation (to client).
 * Fully responsive across all mobile, tablet, and desktop screens with high-contrast text.
 */
export async function sendDualInquiryEmails(
  inquiry: InquiryDispatchPayload,
  meta: DispatchMetadata
): Promise<{ internalSent: boolean; clientSent: boolean; internalId?: string; clientId?: string }> {
  const transporter = createTransporter();

  const userEmail = process.env.SMTP_USER || 'dispatch@massiveprotectiveservices.com';
  const fromAddress =
    process.env.FROM_EMAIL || `"Massive Protective Services" <${userEmail}>`;
  const ownerEmail =
    process.env.OWNER_EMAIL ||
    process.env.DISPATCH_EMAIL ||
    process.env.SMTP_USER ||
    'smb6925@gmail.com';

  const formSource = inquiry.formSource || 'Consultation Inquiry';

  // Extract location strictly if provided (no fallback to fake defaults)
  const rawLocation =
    inquiry.location ||
    inquiry.locationPreset ||
    inquiry.propertyLocation ||
    inquiry.propertyCity ||
    inquiry.cityLocation ||
    inquiry.city ||
    inquiry.county;
  const locationValue =
    typeof rawLocation === 'string' &&
    rawLocation.trim() &&
    rawLocation.trim() !== 'Florida Territory' &&
    rawLocation.trim() !== 'Florida Jurisdiction'
      ? rawLocation.trim()
      : undefined;

  // Extract service strictly if provided
  const rawService = inquiry.serviceType;
  const serviceValue =
    typeof rawService === 'string' &&
    rawService.trim() &&
    rawService.trim() !== 'Specialized Protective Security'
      ? rawService.trim()
      : undefined;

  // Extract company name if provided
  const rawCompany = inquiry.companyName || inquiry.company || inquiry.organization;
  const companyValue =
    typeof rawCompany === 'string' && rawCompany.trim() ? rawCompany.trim() : undefined;

  // Extract message if provided
  const rawMessage = inquiry.message;
  const messageValue =
    typeof rawMessage === 'string' && rawMessage.trim() ? rawMessage.trim() : undefined;

  const humanTime = formatHumanDateTime(meta.timestamp);

  // Extract all extra custom fields dynamically
  const extraFields: Array<{ label: string; value: string }> = [];
  const knownKeys = new Set([
    'formSource',
    'source',
    'pageTitle',
    'fullName',
    'name',
    'clientName',
    'principalName',
    'email',
    'emailAddress',
    'contactEmail',
    'phone',
    'phoneNumber',
    'contactPhone',
    'county',
    'location',
    'locationPreset',
    'propertyLocation',
    'propertyCity',
    'cityLocation',
    'city',
    'serviceType',
    'serviceNeeded',
    'serviceRequired',
    'coverageType',
    'typeOfNeed',
    'deploymentType',
    'principalType',
    'preferredDate',
    'coverageStart',
    'timeline',
    'coverageTiming',
    'arrivalDate',
    'startDate',
    'targetDate',
    'message',
    'briefDescription',
    'propertyDescription',
    'specialRequirements',
    'notes',
    'statement',
    'ndaRequested',
    'requiresArmedDriver',
    'companyName',
    'company',
    'organization',
    'details',
  ]);

  if (inquiry.details && typeof inquiry.details === 'object') {
    for (const [k, v] of Object.entries(inquiry.details)) {
      if (v !== undefined && v !== null && v !== '') {
        const readableLabel = k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
        extraFields.push({ label: readableLabel, value: String(v) });
      }
    }
  }

  for (const [k, v] of Object.entries(inquiry)) {
    if (!knownKeys.has(k) && v !== undefined && v !== null && v !== '') {
      const readableLabel = k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
      extraFields.push({ label: readableLabel, value: String(v) });
    }
  }

  // Determine responsive title based on inquiry nature
  const headerHeading =
    formSource.toLowerCase().includes('career') || formSource.toLowerCase().includes('application')
      ? 'New Application Submission'
      : 'New Consultation Inquiry';

  // 1. Email to Owner / Operations Desk (Ultra-Clean, High Contrast, Mobile First)
  const internalHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New Intake: ${escapeHtml(inquiry.fullName)}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .outer-wrap { padding: 12px 6px !important; }
      .main-card { width: 100% !important; border-radius: 6px !important; }
      .section-padding { padding: 20px 16px !important; }
      .header-title { font-size: 22px !important; line-height: 1.3 !important; }
      .phone-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; margin-bottom: 12px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="outer-wrap" style="background-color: #080D1A; padding: 28px 12px; margin: 0 auto;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" class="main-card" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%; margin: 0 auto; background-color: #0E1628; border: 1px solid #23334E; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">
          
          <!-- Top Gold Accent Bar -->
          <tr>
            <td height="5" style="background-color: #C5A880; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="section-padding" style="padding: 26px 28px 20px; border-bottom: 1px solid #1E2D47; background-color: #0B1220; text-align: left;" align="left">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left" style="text-align: left;">
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #C5A880; text-transform: uppercase; margin-bottom: 6px; text-align: left;" align="left">
                      MASSIVE PROTECTIVE SERVICES
                    </div>
                    <h1 class="header-title" style="margin: 0; font-size: 23px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.3; text-align: left;" align="left">
                      ${escapeHtml(headerHeading)}
                    </h1>
                    <div style="font-size: 13px; color: #CBD5E1; margin-top: 6px; text-align: left;" align="left">
                      Received from <strong>${escapeHtml(formSource)}</strong> &bull; ${escapeHtml(humanTime)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary Contact Card (Instant Tap-to-Call) -->
          <tr>
            <td class="section-padding" style="padding: 22px 28px; background-color: #121C31; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #C5A880; text-transform: uppercase; margin-bottom: 8px; text-align: left;" align="left">
                Client Contact Information
              </div>
              <div style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin-bottom: ${companyValue ? '4px' : '14px'}; text-align: left;" align="left">
                ${escapeHtml(inquiry.fullName)}
              </div>
              ${
                companyValue
                  ? `
              <div style="font-size: 14.5px; font-weight: 600; color: #C5A880; margin-bottom: 14px; text-align: left;" align="left">
                ${escapeHtml(companyValue)}
              </div>`
                  : ''
              }

              <!-- Quick Action Row -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-bottom: 10px; text-align: left;" align="left">
                    <a href="tel:${escapeHtml(inquiry.phone)}" class="phone-btn" style="display: inline-block; background-color: #C5A880; color: #080D1A; font-weight: 700; font-size: 15px; text-decoration: none; padding: 11px 22px; border-radius: 4px; letter-spacing: 0.03em;">
                      &#128222;&nbsp; Call ${escapeHtml(inquiry.phone)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #CBD5E1; text-align: left;" align="left">
                    Direct Email: <a href="mailto:${escapeHtml(inquiry.email)}" style="color: #60A5FA; font-weight: 600; text-decoration: underline;">${escapeHtml(inquiry.email)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Request Details (Only relevant fields present in the form) -->
          <tr>
            <td class="section-padding" style="padding: 24px 28px; text-align: left;" align="left">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #C5A880; text-transform: uppercase; margin-bottom: 16px; text-align: left;" align="left">
                Intake &amp; Operational Requirements
              </div>

              ${
                companyValue
                  ? `
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Company / Organization
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">
                  ${escapeHtml(companyValue)}
                </div>
              </div>`
                  : ''
              }

              ${
                serviceValue
                  ? `
              <!-- Service Field -->
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Service Requested
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">
                  ${escapeHtml(serviceValue)}
                </div>
              </div>`
                  : ''
              }

              ${
                locationValue
                  ? `
              <!-- Location Field (Only shown when location is provided) -->
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Location / Territory
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">
                  ${escapeHtml(locationValue)}
                </div>
              </div>`
                  : ''
              }

              ${
                inquiry.preferredDate && String(inquiry.preferredDate).trim()
                  ? `
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Timeline / Expected Start
                </div>
                <div style="font-size: 15.5px; font-weight: 600; color: #FFFFFF;">
                  ${escapeHtml(String(inquiry.preferredDate).trim())}
                </div>
              </div>`
                  : ''
              }

              ${
                inquiry.ndaRequested !== undefined && inquiry.ndaRequested !== null
                  ? `
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Confidential Non-Disclosure Agreement
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #FFFFFF;">
                  ${inquiry.ndaRequested ? '&#10003; Mutual NDA Requested Prior to Consultation' : 'Standard Discretion Protocol'}
                </div>
              </div>`
                  : ''
              }

              ${
                inquiry.requiresArmedDriver !== undefined && inquiry.requiresArmedDriver !== null
                  ? `
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Armed Driver / Transportation
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #FFFFFF;">
                  ${inquiry.requiresArmedDriver ? '&#10003; Armed Driver & Escort Vehicle Requested' : 'Not Requested'}
                </div>
              </div>`
                  : ''
              }

              ${extraFields
                .map(
                  (f) => `
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47; text-align: left;" align="left">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  ${escapeHtml(f.label)}
                </div>
                <div style="font-size: 15.5px; font-weight: 600; color: #FFFFFF;">
                  ${escapeHtml(f.value)}
                </div>
              </div>`
                )
                .join('')}

              ${
                messageValue
                  ? `
              <div align="left" style="margin-top: 18px; padding: 16px; background-color: #0B1220; border-left: 3px solid #C5A880; border-radius: 4px; text-align: left;">
                <div align="left" style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #C5A880; text-transform: uppercase; margin-bottom: 8px; text-align: left;">
                  Client Message / Operational Scope:
                </div>
                <div align="left" style="font-size: 14.5px; line-height: 1.6; color: #F1F5F9; white-space: pre-wrap; text-align: left; word-break: break-word;">
                  ${escapeHtml(messageValue)}
                </div>
              </div>`
                  : ''
              }
            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #090E1A; padding: 20px 24px; border-top: 1px solid #1E2D47; text-align: center;">
              <div style="font-size: 12px; color: #CBD5E1; line-height: 1.6;">
                <strong>Massive Protective Services Inc.</strong> &bull; Delray Beach, Florida<br>
                FL Agency License #B1400200 &bull; Chapter 493, Florida Statutes<br>
                24/7 Priority Dispatch: <a href="tel:9542347231" style="color: #D4AF37; text-decoration: none; font-weight: 700;">(954) 234-7231</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // 2. Email to Client / Requester (Natural, Dignified, High Contrast, Human Tone)
  let clientIntroScope = '';
  if (serviceValue && locationValue) {
    clientIntroScope = ` regarding <strong>${escapeHtml(serviceValue)}</strong> in <strong>${escapeHtml(locationValue)}</strong>`;
  } else if (serviceValue) {
    clientIntroScope = ` regarding <strong>${escapeHtml(serviceValue)}</strong>`;
  } else if (locationValue) {
    clientIntroScope = ` for <strong>${escapeHtml(locationValue)}</strong>`;
  }

  const clientHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Security Consultation Request Received — Massive Protective Services</title>
  <style>
    body { margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .outer-wrap { padding: 12px 6px !important; }
      .main-card { width: 100% !important; border-radius: 6px !important; }
      .section-padding { padding: 22px 18px !important; }
      .header-title { font-size: 22px !important; line-height: 1.3 !important; }
      .hotline-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="outer-wrap" style="background-color: #080D1A; padding: 28px 12px; margin: 0 auto;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" class="main-card" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%; margin: 0 auto; background-color: #0E1628; border: 1px solid #23334E; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">
          
          <!-- Top Gold Accent Bar -->
          <tr>
            <td height="5" style="background-color: #C5A880; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="section-padding" style="padding: 28px 30px 22px; border-bottom: 1px solid #1E2D47; background-color: #0B1220;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #C5A880; text-transform: uppercase; margin-bottom: 6px;">
                MASSIVE PROTECTIVE SERVICES
              </div>
              <h1 class="header-title" style="margin: 0; font-size: 23px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.3;">
                Consultation Request Received
              </h1>
              <div style="font-size: 13px; color: #CBD5E1; margin-top: 6px;">
                Florida Agency License #B1400200 &bull; Delray Beach, Florida
              </div>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td class="section-padding" style="padding: 26px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #FFFFFF; margin: 0 0 16px 0;">
                Dear ${escapeHtml(inquiry.fullName)},
              </p>
              
              <p style="font-size: 15px; line-height: 1.7; color: #F1F5F9; margin: 0 0 18px 0;">
                Thank you for contacting Massive Protective Services. We have safely received your inquiry${clientIntroScope}.
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #F1F5F9; margin: 0 0 22px 0;">
                A senior protective coordinator is reviewing your operational requirements and will reach out to you directly within two hours for a private, confidential consultation.
              </p>

              <!-- Request Summary Box (Clean, High Contrast, Only relevant fields) -->
              <div style="background-color: #121C31; border: 1px solid #1E2D47; border-left: 3px solid #C5A880; border-radius: 4px; padding: 18px 20px; margin: 0 0 24px 0;">
                <div style="font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em; color: #C5A880; text-transform: uppercase; margin-bottom: 12px;">
                  Summary of Your Request
                </div>

                ${
                  serviceValue
                    ? `
                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Service:</span><br>
                  <strong style="font-size: 15.5px; color: #FFFFFF;">${escapeHtml(serviceValue)}</strong>
                </div>`
                    : ''
                }

                ${
                  locationValue
                    ? `
                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Territory / Location:</span><br>
                  <strong style="font-size: 15.5px; color: #FFFFFF;">${escapeHtml(locationValue)}</strong>
                </div>`
                    : ''
                }

                ${
                  inquiry.preferredDate && String(inquiry.preferredDate).trim()
                    ? `
                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Preferred Start Date:</span><br>
                  <strong style="font-size: 15px; color: #FFFFFF;">${escapeHtml(String(inquiry.preferredDate).trim())}</strong>
                </div>`
                    : ''
                }

                <div>
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Inquiry Date:</span><br>
                  <span style="font-size: 14px; color: #FFFFFF;">${escapeHtml(humanTime)}</span>
                </div>
              </div>

              <!-- Immediate Assistance Card -->
              <div style="background-color: #0B1220; border: 1px solid #2A3B57; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
                <div style="font-size: 13.5px; font-weight: 700; color: #C5A880; margin-bottom: 6px;">
                  Need Immediate Assistance or Same-Day Deployment?
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #E2E8F0; margin-bottom: 14px;">
                  If your inquiry requires urgent coordination or same-day protection, please reach our watch commander directly at our 24/7 Priority Dispatch desk:
                </div>
                <a href="tel:9542347231" class="hotline-btn" style="display: inline-block; background-color: #C5A880; color: #080D1A; font-weight: 700; font-size: 15px; text-decoration: none; padding: 11px 22px; border-radius: 4px; letter-spacing: 0.03em;">
                  &#128222;&nbsp; Call (954) 234-7231
                </a>
              </div>

              <!-- Confidentiality Notice -->
              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 20px 0;">
                <strong>Strict Confidentiality:</strong> Massive Protective Services is a licensed Florida security agency (License #B1400200) operating under Florida Statutes Chapter 493. All client discussions, identities, and itineraries remain strictly confidential under Florida law. Mutual non-disclosure agreements are available prior to operational review.
              </p>

              <!-- Sign-off -->
              <div style="border-top: 1px solid #1E2D47; padding-top: 18px; font-size: 14px; line-height: 1.6; color: #FFFFFF;">
                Sincerely,<br>
                <strong style="color: #C5A880;">Operations Command Desk</strong><br>
                Massive Protective Services Inc.<br>
                Delray Beach Headquarters
              </div>
            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #090E1A; padding: 20px 24px; border-top: 1px solid #1E2D47; text-align: center;">
              <div style="font-size: 12px; color: #CBD5E1; line-height: 1.6;">
                <strong>Massive Protective Services Inc.</strong> &bull; Delray Beach, Florida<br>
                FL Agency License #B1400200 &bull; Florida Statutes Chapter 493<br>
                24/7 Priority Dispatch: <a href="tel:9542347231" style="color: #D4AF37; text-decoration: none; font-weight: 700;">(954) 234-7231</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  let internalSent = false;
  let clientSent = false;
  let internalId: string | undefined;
  let clientId: string | undefined;

  // Build clean dynamic subject for owner
  const subjectDescriptor = serviceValue || formSource;
  const locationTag = locationValue ? ` (${locationValue})` : '';
  const internalSubject = `New Inquiry: ${inquiry.fullName} — ${subjectDescriptor}${locationTag}`;

  // Build clean plain text for owner with only relevant fields
  const internalTextLines = [
    `New Consultation Inquiry`,
    `----------------------------------------`,
    `Form Source: ${formSource}`,
    `Received: ${humanTime}`,
    ``,
    `Principal: ${inquiry.fullName}`,
    companyValue ? `Company: ${companyValue}` : null,
    inquiry.phone ? `Phone: ${inquiry.phone}` : null,
    inquiry.email ? `Email: ${inquiry.email}` : null,
    serviceValue ? `Service: ${serviceValue}` : null,
    locationValue ? `Location: ${locationValue}` : null,
    inquiry.preferredDate ? `Preferred Date: ${inquiry.preferredDate}` : null,
    inquiry.ndaRequested !== undefined ? `Mutual NDA: ${inquiry.ndaRequested ? 'Requested' : 'Standard'}` : null,
    inquiry.requiresArmedDriver !== undefined ? `Armed Driver: ${inquiry.requiresArmedDriver ? 'Yes' : 'No'}` : null,
    ...extraFields.map((f) => `${f.label}: ${f.value}`),
    messageValue ? `Message: ${messageValue}` : null,
    ``,
    `Massive Protective Services — FL License #B1400200`,
  ]
    .filter((line): line is string => line !== null)
    .join('\n');

  // 1. Send to Owner / Operations
  try {
    const internalResult = await transporter.sendMail({
      from: fromAddress,
      to: ownerEmail,
      subject: internalSubject,
      html: internalHtml,
      text: internalTextLines,
    });
    internalSent = true;
    internalId = internalResult.messageId;
    console.log('[MPS Mailer] Internal inquiry sent to owner:', ownerEmail, 'MessageId:', internalId);
  } catch (err) {
    console.error('[MPS Mailer] Failed to dispatch internal email to owner:', err);
  }

  // 2. Send Confirmation to Client (the user who fills the form)
  if (inquiry.email && inquiry.email.includes('@')) {
    const clientSummaryLines = [
      serviceValue ? `- Service: ${serviceValue}` : null,
      locationValue ? `- Location: ${locationValue}` : null,
      inquiry.preferredDate ? `- Preferred Start Date: ${inquiry.preferredDate}` : null,
      `- Inquiry Date: ${humanTime}`,
    ]
      .filter((l): l is string => l !== null)
      .join('\n');

    const clientPlainIntro = clientIntroScope ? clientIntroScope.replace(/<[^>]+>/g, '') : '';

    try {
      const clientResult = await transporter.sendMail({
        from: fromAddress,
        to: inquiry.email,
        subject: `Consultation Request Received — Massive Protective Services`,
        html: clientHtml,
        text: `Dear ${inquiry.fullName},\n\nThank you for contacting Massive Protective Services. We have received your inquiry${clientPlainIntro}.\n\nA senior protective coordinator is reviewing your operational requirements and will reach out to you directly within two hours for a private consultation.\n\nSummary of your request:\n${clientSummaryLines}\n\nNeed immediate assistance or same-day active deployment?\nCall 24/7 Priority Dispatch directly at (954) 234-7231.\n\nSincerely,\nOperations Command Desk\nMassive Protective Services Inc.\nDelray Beach Headquarters\nFL Agency License #B1400200`,
      });
      clientSent = true;
      clientId = clientResult.messageId;
      console.log('[MPS Mailer] Client confirmation receipt sent to:', inquiry.email, 'MessageId:', clientId);
    } catch (err) {
      console.error('[MPS Mailer] Failed to dispatch client confirmation email:', err);
    }
  }

  return { internalSent, clientSent, internalId, clientId };
}
