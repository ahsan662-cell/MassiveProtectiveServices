export interface ServiceOverviewItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  discipline: 'executive-vip' | 'residential-estate' | 'commercial-corporate' | 'tactical-patrol';
  disciplineLabel: string;
  badge: string;
  image: string;
  href: string;
  iconName: 'Shield' | 'Home' | 'Calendar' | 'ShieldAlert' | 'Star' | 'Key' | 'Building2' | 'Eye' | 'Car' | 'GraduationCap' | 'Users' | 'Anchor';
  tagline: string;
  description: string;
  capabilities: string[];
}

export interface DisciplineFilter {
  id: 'all' | 'executive-vip' | 'residential-estate' | 'commercial-corporate' | 'tactical-patrol';
  label: string;
  count: number;
}

export const SERVICE_DISCIPLINES: DisciplineFilter[] = [
  { id: 'all', label: 'All Services', count: 12 },
  { id: 'executive-vip', label: 'Executive & VIP', count: 3 },
  { id: 'residential-estate', label: 'Residential & Estate', count: 2 },
  { id: 'commercial-corporate', label: 'Commercial & Corporate', count: 4 },
  { id: 'tactical-patrol', label: 'Tactical, Patrol & Events', count: 3 },
];

export const ALL_SERVICES_OVERVIEW: ServiceOverviewItem[] = [
  {
    id: 'executive-protection',
    slug: 'executive-protection',
    title: 'Executive Protection',
    category: 'Close Protection',
    discipline: 'executive-vip',
    disciplineLabel: 'Executive & Close Protection',
    badge: 'Florida Class G',
    image: '/images/mps_service_executive.jpg',
    href: '/executive-protection',
    iconName: 'Shield',
    tagline: 'Tactical Close Protection & Secure Motorcade Transport',
    description:
      'Armed close protection, advance venue reconnaissance, written threat assessments, and secure driving for corporate principals, family offices, and VIPs across South Florida.',
    capabilities: [
      'Threat Assessment & Advance Route Reconnaissance',
      'Armed Motorcade & Secure Tarmac Transit',
      'Written Protection Plans & Contingency Protocols',
    ],
  },
  {
    id: 'estate-security',
    slug: 'estate-security',
    title: 'Estate & Residential Security',
    category: 'Property Defense',
    discipline: 'residential-estate',
    disciplineLabel: 'Residential & Estate Defense',
    badge: '24/7 Gate & Perimeter',
    image: '/images/mps_service_estate.jpg',
    href: '/estate-security',
    iconName: 'Home',
    tagline: 'Perimeter Defense & Static Guarding for Luxury Compounds',
    description:
      'Armed overnight officers, gate access screening, dockline sweeps, and perimeter defense for Palm Beach, Boca Raton, Manalapan, and coastal barrier island luxury estates.',
    capabilities: [
      'Dual Ocean-to-Intracoastal Perimeter Sweeps',
      'Biometric & Visitor Gate Verification',
      'Off-Season Residence & Asset Surveillance',
    ],
  },
  {
    id: 'event-security',
    slug: 'event-security',
    title: 'Event Security',
    category: 'Special Operations',
    discipline: 'tactical-patrol',
    disciplineLabel: 'Armed Tactical & Event Operations',
    badge: 'Art Basel & Galas',
    image: '/images/mps_hero_event.jpg',
    href: '/event-security',
    iconName: 'Calendar',
    tagline: 'High-Stakes Galas, Art Basel & Private Summits',
    description:
      'Licensed armed event security for private galas, charity events, luxury summits, and high-profile gatherings across Palm Beach, Broward, and Miami-Dade.',
    capabilities: [
      'Red Carpet Screening & Access Control',
      'Crowd Profile Evaluation & Perimeter Hardening',
      'VIP Greenroom & Motorcade Escort Teams',
    ],
  },
  {
    id: 'armed-officers',
    slug: 'armed-officers',
    title: 'Armed Security Officers',
    category: 'Armed Tactical',
    discipline: 'tactical-patrol',
    disciplineLabel: 'Armed Tactical & Event Operations',
    badge: 'Class G Licensed',
    image: '/images/mps_hero_executive.jpg',
    href: '/armed-officers',
    iconName: 'ShieldAlert',
    tagline: 'Florida Class G Licensed Armed Tactical Operators',
    description:
      '100% Class G licensed armed operators for residential, corporate, retail, and event assignments. Deployed individually or as a coordinated tactical unit. Zero unarmed guards.',
    capabilities: [
      'Annual FDACS Firearms Qualification Standards',
      'Tactical De-escalation & Threat Neutralization',
      'Coordinated Shift Reports & Direct Command Dispatch',
    ],
  },
  {
    id: 'vip-celebrity-protection',
    slug: 'vip-celebrity-protection',
    title: 'VIP & Celebrity Protection',
    category: 'High-Profile Escort',
    discipline: 'executive-vip',
    disciplineLabel: 'Executive & Close Protection',
    badge: 'Discreet VIP Detail',
    image: '/images/mps_service_vip_protection.jpg',
    href: '/vip-celebrity-protection',
    iconName: 'Star',
    tagline: 'Discreet Close Protection, Hotel Arrivals & Private Travel',
    description:
      'Low-profile, highly trained protection details for celebrities, athletes, public figures, and international visitors moving through South Florida venues and private airports.',
    capabilities: [
      'Discreet Tarmac, Hotel & Backstage Movements',
      'Paparazzi & Fan Crowd Buffer Management',
      'Strict Non-Disclosure & Confidentiality Enforcement',
    ],
  },
  {
    id: 'concierge-security',
    slug: 'concierge-security',
    title: 'Concierge Security',
    category: 'High-Touch Access',
    discipline: 'residential-estate',
    disciplineLabel: 'Residential & Estate Defense',
    badge: 'Luxury High-Rise',
    image: '/images/mps_service_estate.jpg',
    href: '/concierge-security',
    iconName: 'Key',
    tagline: 'High-Touch Lobby Surveillance & Executive Reception',
    description:
      'Polished residential building and penthouse lobby access control — the visible, courteous, and professional face of security for high-end properties.',
    capabilities: [
      'Guest Verification & Vendor Credentialing',
      'CCTV & Package Intake Management',
      'Polished Business Attire with Tactical Readiness',
    ],
  },
  {
    id: 'corporate-security',
    slug: 'corporate-security',
    title: 'Corporate Security',
    category: 'Enterprise Defense',
    discipline: 'commercial-corporate',
    disciplineLabel: 'Commercial & Enterprise Security',
    badge: 'C-Suite Defense',
    image: '/images/mps_service_corporate.jpg',
    href: '/corporate-security',
    iconName: 'Building2',
    tagline: 'Boardroom Defense, Terminations & Shareholder Summits',
    description:
      'Boardroom defense, high-risk executive terminations, shareholder meeting protection, and asset defense for corporate headquarters and financial institutions across Florida.',
    capabilities: [
      'High-Risk Employment Termination Escorts',
      'Executive Suite & Boardroom Access Sweeps',
      'Litigation & Hostile Takeover Detail Support',
    ],
  },
  {
    id: 'loss-prevention',
    slug: 'loss-prevention',
    title: 'Loss Prevention',
    category: 'Asset Protection',
    discipline: 'commercial-corporate',
    disciplineLabel: 'Commercial & Enterprise Security',
    badge: 'Luxury Retail',
    image: '/images/mps_service_loss_prevention.jpg',
    href: '/loss-prevention',
    iconName: 'Eye',
    tagline: 'Observant Surveillance & Asset Protection',
    description:
      'Observant retail surveillance, discreet camera monitoring, inventory loss mitigation, and uniformed deterrent presence for luxury retailers and flagship stores.',
    capabilities: [
      'Discreet Floor Surveillance & Theft Deterrence',
      'Camera Monitoring & Incident Evidence Logging',
      'Front-of-House Polished Deterrent Presence',
    ],
  },
  {
    id: 'mobile-patrol',
    slug: 'mobile-patrol',
    title: 'Mobile Patrol',
    category: 'Tactical Fleet',
    discipline: 'tactical-patrol',
    disciplineLabel: 'Armed Tactical & Event Operations',
    badge: 'Tactical Fleet',
    image: '/images/mps_service_mobile_patrol.jpg',
    href: '/mobile-patrol',
    iconName: 'Car',
    tagline: 'Marked Tactical Sweeps & Scheduled Perimeter Checks',
    description:
      'High-visibility vehicle sweeps, perimeter inspections, and scheduled gate checks for commercial parks, gated communities, construction sites, and private estates.',
    capabilities: [
      'GPS-Tracked Marked Patrol Cruisers',
      'Scheduled & Randomized Property Sweeps',
      'Immediate Incident Response & Law Enforcement Liaison',
    ],
  },
  {
    id: 'school-security',
    slug: 'school-security',
    title: 'School & Campus Security',
    category: 'Campus Safety',
    discipline: 'commercial-corporate',
    disciplineLabel: 'Commercial & Enterprise Security',
    badge: 'Campus Safety',
    image: '/images/mps_service_school_security.jpg',
    href: '/school-security',
    iconName: 'GraduationCap',
    tagline: 'Perimeter Verification & Welcoming Campus Defense',
    description:
      'Perimeter monitoring, visitor verification, and welcoming yet vigilant presence for private academies, faith-based schools, and educational campuses.',
    capabilities: [
      'Strict Single-Point-of-Entry Verification',
      'Active Threat Response & Emergency Drills',
      'Child-Friendly, Welcoming Uniformed Officers',
    ],
  },
  {
    id: 'unarmed-security-guards',
    slug: 'unarmed-security-guards',
    title: 'Unarmed Security Guards',
    category: 'Access Control',
    discipline: 'commercial-corporate',
    disciplineLabel: 'Commercial & Enterprise Security',
    badge: 'Florida Class D',
    image: '/images/mps_service_unarmed_security.jpg',
    href: '/unarmed-security-guards',
    iconName: 'Users',
    tagline: 'Attentive Access Control & Front-of-House Presence',
    description:
      'Attentive access management, perimeter walks, front-of-house presence, and guest service for residential communities and commercial venues.',
    capabilities: [
      'Visitor Logging & Access Card Issuance',
      'Foot Patrols & Facility Rule Enforcement',
      'Customer-Service Oriented Presence',
    ],
  },
  {
    id: 'maritime-security',
    slug: 'maritime-security',
    title: 'Superyacht & Maritime Security',
    category: 'Marine Defense',
    discipline: 'executive-vip',
    disciplineLabel: 'Executive & Close Protection',
    badge: 'Waterfront & Marinas',
    image: '/images/mps_location_ftl_hero.jpg',
    href: '/locations/fort-lauderdale',
    iconName: 'Anchor',
    tagline: 'Vessel Perimeter Defense & Marina Surveillance',
    description:
      'Vessel perimeter security, private slip surveillance, FLIBS escort, and dockside boarding defense across Fort Lauderdale and South Florida marinas.',
    capabilities: [
      'Gangway & Boarding Access Verification',
      'Tender & Marina Perimeter Surveillance',
      'International Marine Crew & Owner Protection',
    ],
  },
];

