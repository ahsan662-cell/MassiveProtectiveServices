/**
 * WhatsApp Integration Utilities for Massive Protective Services (MPS)
 * Formats inquiries and generates direct WhatsApp messaging links.
 *
 * Active Destination: +1 (954) 234-7231 → 19542347231
 * Client Headquarters Desk: +1 (954) 234-7231
 * FDACS License B1400200
 */

// Active destination for WhatsApp form submissions
export const MPS_WHATSAPP_NUMBER = '19542347231';
export const CLIENT_PHONE_NUMBER = '+1 (954) 234-7231';
export const MPS_PHONE_DISPLAY = '+1 (954) 234-7231';

/**
 * Returns clean international phone digits for WhatsApp URL.
 */
export const getTargetWhatsAppNumber = (customNumber?: string): string => {
  const source = customNumber || MPS_WHATSAPP_NUMBER;
  const num = source.replace(/\D/g, '');
  return num;
};

export interface FormSubmissionPayload {
  fullName?: string;
  name?: string;
  clientName?: string;
  principalName?: string;
  phone?: string;
  phoneNumber?: string;
  contactPhone?: string;
  email?: string;
  emailAddress?: string;
  contactEmail?: string;
  companyName?: string;
  company?: string;
  organization?: string;
  schoolName?: string;
  buildingName?: string;
  jobTitle?: string;
  role?: string;
  position?: string;
  clientType?: string;
  propertyLocation?: string;
  location?: string;
  locationPreset?: string;
  propertyType?: string;
  propertyProfile?: string;
  venueProfile?: string;
  propertySetting?: string;
  settingArea?: string;
  principalType?: string;
  locationProfile?: string;
  county?: string;
  jurisdiction?: string;
  address?: string;
  city?: string;
  cityLocation?: string;
  propertyCity?: string;
  engagementLocation?: string;
  locationCommunity?: string;
  coverageType?: string;
  serviceNeeded?: string;
  serviceType?: string;
  serviceRequired?: string;
  typeOfNeed?: string;
  deploymentType?: string;
  serviceOfInterest?: string;
  coverageOption?: string;
  coverageNeeded?: string;
  securityScope?: string;
  inquiryType?: string;
  coverageStart?: string;
  startDate?: string;
  timeframe?: string;
  timeline?: string;
  preferredDate?: string;
  targetDate?: string;
  dates?: string;
  travelDates?: string;
  arrivalDate?: string;
  datesOrSeason?: string;
  coverageWindow?: string;
  eventWindow?: string;
  seasonTiming?: string;
  coverageTiming?: string;
  preferredStartDate?: string;
  proposedDatesHours?: string;
  schedule?: string;
  preferredCoverage?: string;
  contactMethod?: string;
  preferredContactMethod?: string;
  classD?: string;
  classG?: string;
  employmentStatus?: string;
  yearsExp?: string;
  serviceAreas?: string;
  message?: string;
  details?: string;
  specialRequirements?: string;
  statement?: string;
  briefDescription?: string;
  propertyDescription?: string;
  notes?: string;
  resumeFileName?: string;
  ndaRequested?: boolean;
  requiresArmedDriver?: boolean;
  [key: string]: unknown;
}

/**
 * Format any form payload into an executive, clean WhatsApp text message.
 * Formatted without unnecessary icons or emojis for maximum clarity and professionalism.
 */
export function formatWhatsAppMessage(
  payload: FormSubmissionPayload,
  formSource = 'Website Consultation'
): string {
  const name = (
    payload.fullName ||
    payload.name ||
    payload.clientName ||
    payload.principalName ||
    ''
  ).toString().trim();

  const phone = (
    payload.phone ||
    payload.phoneNumber ||
    payload.contactPhone ||
    ''
  ).toString().trim();

  const email = (
    payload.email ||
    payload.emailAddress ||
    payload.contactEmail ||
    ''
  ).toString().trim();

  const company = (
    payload.companyName ||
    payload.company ||
    payload.organization ||
    payload.schoolName ||
    payload.buildingName ||
    ''
  ).toString().trim();

  const role = (
    payload.jobTitle ||
    payload.role ||
    payload.position ||
    payload.clientType ||
    ''
  ).toString().trim();

  const service = (
    payload.serviceType ||
    payload.serviceNeeded ||
    payload.serviceRequired ||
    payload.coverageType ||
    payload.typeOfNeed ||
    payload.deploymentType ||
    payload.serviceOfInterest ||
    payload.coverageOption ||
    payload.coverageNeeded ||
    payload.securityScope ||
    payload.inquiryType ||
    ''
  ).toString().trim();

  const location = (
    payload.location ||
    payload.propertyLocation ||
    payload.propertyCity ||
    payload.cityLocation ||
    payload.city ||
    payload.county ||
    payload.jurisdiction ||
    payload.address ||
    payload.engagementLocation ||
    payload.locationCommunity ||
    ''
  ).toString().trim();

  const propertyProfile = (
    payload.propertyType ||
    payload.propertyProfile ||
    payload.venueProfile ||
    payload.propertySetting ||
    payload.settingArea ||
    payload.principalType ||
    payload.locationProfile ||
    ''
  ).toString().trim();

  const timeline = (
    payload.preferredDate ||
    payload.coverageStart ||
    payload.startDate ||
    payload.timeline ||
    payload.timeframe ||
    payload.targetDate ||
    payload.dates ||
    payload.travelDates ||
    payload.arrivalDate ||
    payload.datesOrSeason ||
    payload.coverageWindow ||
    payload.eventWindow ||
    payload.seasonTiming ||
    payload.coverageTiming ||
    payload.preferredStartDate ||
    payload.proposedDatesHours ||
    ''
  ).toString().trim();

  const schedule = (
    payload.schedule ||
    payload.preferredCoverage ||
    ''
  ).toString().trim();

  const contactMethod = (
    payload.contactMethod ||
    payload.preferredContactMethod ||
    ''
  ).toString().trim();

  // Careers-specific fields
  const classD = (payload.classD || '').toString().trim();
  const classG = (payload.classG || '').toString().trim();
  const employmentStatus = (payload.employmentStatus || '').toString().trim();
  const yearsExp = (payload.yearsExp || '').toString().trim();
  const serviceAreas = (payload.serviceAreas || '').toString().trim();

  const message = (
    payload.message ||
    payload.details ||
    payload.statement ||
    payload.briefDescription ||
    payload.propertyDescription ||
    payload.specialRequirements ||
    payload.notes ||
    ''
  ).toString().trim();

  const resumeFileName = (payload.resumeFileName || '').toString().trim();

  const isCareer =
    formSource.toLowerCase().includes('career') ||
    formSource.toLowerCase().includes('application') ||
    Boolean(classD || classG);

  const lines: string[] = [
    '*MASSIVE PROTECTIVE SERVICES*',
    isCareer ? 'Confidential Career Application' : 'Confidential Client Inquiry',
    '────────────────────────────',
    `*Form:* ${formSource}`,
  ];

  if (name) lines.push(`*Name:* ${name}`);
  if (phone) lines.push(`*Phone:* ${phone}`);
  if (email) lines.push(`*Email:* ${email}`);

  if (company || role) {
    const compParts = [role, company].filter(Boolean).join(' · ');
    lines.push(`*Organization / Title:* ${compParts}`);
  }

  if (service) lines.push(`*Service Required:* ${service}`);
  if (location) lines.push(`*Location / Jurisdiction:* ${location}`);
  if (propertyProfile) lines.push(`*Property / Venue Profile:* ${propertyProfile}`);
  if (timeline) lines.push(`*Timeline / Dates:* ${timeline}`);
  if (schedule) lines.push(`*Coverage Schedule:* ${schedule}`);
  if (contactMethod) lines.push(`*Preferred Contact:* ${contactMethod}`);

  // Licensing / Careers Details
  if (classD || classG || yearsExp || employmentStatus || serviceAreas) {
    lines.push('────────────────────────────', '*APPLICANT CREDENTIALS*');
    if (classD) lines.push(`- Florida Class D License: ${classD}`);
    if (classG) lines.push(`- Florida Class G License: ${classG}`);
    if (yearsExp) lines.push(`- Security Experience: ${yearsExp}`);
    if (employmentStatus) lines.push(`- Employment Status: ${employmentStatus}`);
    if (serviceAreas) lines.push(`- Available Counties: ${serviceAreas}`);
  }

  // Tactical Flags
  if (payload.ndaRequested) {
    lines.push('*Mutual NDA:* Requested prior to consultation');
  }
  if (payload.requiresArmedDriver) {
    lines.push('*Armed Escort / Driver:* Requested');
  }

  // Resume Document
  if (resumeFileName && resumeFileName !== 'No file selected' && resumeFileName !== 'Not provided') {
    lines.push(`*Attached Resume:* ${resumeFileName}`);
  }

  // Message / Notes
  if (message) {
    lines.push('', '*Scope & Requirements:*', message);
  }

  // Catch any unmapped custom keys
  const standardHandledKeys = new Set([
    'fullName', 'name', 'clientName', 'principalName',
    'phone', 'phoneNumber', 'contactPhone',
    'email', 'emailAddress', 'contactEmail',
    'companyName', 'company', 'organization', 'schoolName', 'buildingName',
    'jobTitle', 'role', 'position', 'clientType',
    'serviceType', 'serviceNeeded', 'serviceRequired', 'coverageType', 'typeOfNeed', 'deploymentType', 'serviceOfInterest', 'coverageOption', 'coverageNeeded', 'securityScope', 'inquiryType',
    'location', 'propertyLocation', 'propertyCity', 'cityLocation', 'city', 'county', 'jurisdiction', 'address', 'engagementLocation', 'locationCommunity', 'locationPreset',
    'propertyType', 'propertyProfile', 'venueProfile', 'propertySetting', 'settingArea', 'principalType', 'locationProfile',
    'preferredDate', 'coverageStart', 'startDate', 'timeline', 'timeframe', 'targetDate', 'dates', 'travelDates', 'arrivalDate', 'datesOrSeason', 'coverageWindow', 'eventWindow', 'seasonTiming', 'coverageTiming', 'preferredStartDate', 'proposedDatesHours',
    'schedule', 'preferredCoverage',
    'contactMethod', 'preferredContactMethod',
    'classD', 'classG', 'employmentStatus', 'yearsExp', 'serviceAreas',
    'message', 'details', 'statement', 'briefDescription', 'propertyDescription', 'specialRequirements', 'notes',
    'resumeFileName', 'resumeFile', 'ndaRequested', 'requiresArmedDriver',
    'agreedToPolicy', 'agreedToPrivacy', 'formSource', 'source',
  ]);

  const extraEntries: string[] = [];
  for (const [k, v] of Object.entries(payload)) {
    if (
      !standardHandledKeys.has(k) &&
      v !== undefined &&
      v !== null &&
      v !== '' &&
      typeof v !== 'object'
    ) {
      const readableKey = k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
      extraEntries.push(`- *${readableKey}:* ${String(v)}`);
    }
  }

  if (extraEntries.length > 0) {
    lines.push('', '*Additional Details:*', ...extraEntries);
  }

  lines.push(
    '────────────────────────────',
    'Massive Protective Services Inc.',
    `Client Desk: ${CLIENT_PHONE_NUMBER}`,
    'FL Agency License #B1400200 · Delray Beach HQ'
  );

  return lines.join('\n');
}

/**
 * Generate the direct WhatsApp click-to-chat URL targeting the active destination number.
 */
export function getWhatsAppUrl(
  payload: FormSubmissionPayload,
  formSource = 'Website Consultation',
  overrideNumber?: string
): string {
  const targetNumber = getTargetWhatsAppNumber(overrideNumber);
  const text = formatWhatsAppMessage(payload, formSource);
  return `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp directly in a new tab/window or native app.
 */
export function openWhatsApp(
  payload: FormSubmissionPayload,
  formSource = 'Website Consultation',
  overrideNumber?: string
): void {
  if (typeof window === 'undefined') return;
  const url = getWhatsAppUrl(payload, formSource, overrideNumber);
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.assign(url);
  }
}
