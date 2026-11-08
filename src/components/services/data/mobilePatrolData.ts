import { ServicePageConfig } from '../types';

export const mobilePatrolData: ServicePageConfig = {
  slug: 'mobile-patrol',
  hero: {
    serviceName: 'Mobile Patrol',
    breadcrumbTitle: 'Mobile Patrol',
    headline: 'Mobile Patrol Security Services in South Florida',
    subtitle:
      'A visible presence. A deliberate plan. Explore property patrols, access checks, and documented observations tailored to your site.',
    bgImage: '/images/mps_service_mobile_patrol.jpg',
    alignment: 'center',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
      icon: 'none',
    },
    badges: [
      'LIC. B1400200',
      'LICENSED & INSURED',
      'MIAMI-DADE - BROWARD - PALM BEACH',
    ],
    disclaimer: 'Proposed service content — confirm availability and operating details',
    footnote: "Illustrative photographic placeholder - Not the company's actual fleet",
  },

  philosophy: {
    theme: 'light',
    variant: 'split-highlight',
    eyebrow: 'A PROPERTY-FIRST APPROACH',
    headline: 'Your property has its own rhythm. Your patrol plan should, too.',
    paragraph:
      'Mobile patrol is a periodic security presence, rather than an officer stationed continuously on site. A proposed plan can combine vehicle visits, targeted walkthroughs, and agreed checks around your property’s access points, operating hours, and particular concerns. The starting point is a clear brief—not a standard route imposed on every site.',
    highlightBox: {
      title: 'Visible presence. Clear accountability.',
      description:
        'Agree what is checked, what is recorded, and who is contacted if a concern is observed.',
    },
  },

  scope: {
    eyebrow: 'PROPOSED SCOPE · SUBJECT TO CONFIRMATION',
    headline: 'What your patrol plan can include',
    columns: 2,
    cardVariant: 'minimal-gold',
    cards: [
      {
        icon: 'route',
        title: 'Scheduled & Varied Patrols',
        description:
          'Plan visits within agreed service windows. Discuss a mix of scheduled checks and varied patrol timing appropriate to the property.',
      },
      {
        icon: 'scan',
        title: 'Perimeter & Access Checks',
        description:
          'Review designated gates, doors, fence lines, and access points for visible irregularities, subject to authorised access and site instructions.',
      },
      {
        icon: 'key',
        title: 'Opening & Closing Checks',
        description:
          'Define a practical checklist for the start or end of business, including agreed entrance checks and observations of accessible common areas.',
      },
      {
        icon: 'file-text',
        title: 'Incident Documentation',
        description:
          'Record observations, exceptions, and actions in an agreed report format. Confirm reporting channels and delivery expectations before service begins.',
      },
      {
        icon: 'footprints',
        title: 'Property Walkthroughs',
        description:
          'Identify areas for on-foot checks alongside vehicle patrols, such as parking areas, shared spaces, and accessible building exteriors.',
      },
      {
        icon: 'phone',
        title: 'Escalation Coordination',
        description:
          'Set a contact hierarchy for concerns, with instructions for notifying property management, designated contacts, or emergency services when appropriate.',
      },
    ],
    footerNote:
      'Patrol frequency, access permissions, reporting, and escalation responsibilities must be agreed in writing. Periodic visits do not provide continuous observation or guarantee prevention of incidents.',
  },

  audience: {
    theme: 'light',
    variant: 'bordered-cards',
    headline: 'For properties that need a considered presence.',
    subtitle:
      'Potential applications to discuss during consultation. Suitability depends on the property, its risks, and confirmed service availability.',
    cardsPerRow: 4,
    cards: [
      {
        title: 'Commercial Properties',
        description:
          'Office buildings, business parks, and shared parking areas with defined after-hours priorities.',
      },
      {
        title: 'Residential Communities',
        description:
          'Condominium and community common areas, with access and resident considerations agreed in advance.',
      },
      {
        title: 'Retail & Mixed-Use',
        description:
          'Storefront exteriors, service entrances, and common spaces around opening and closing periods.',
      },
      {
        title: 'Unoccupied Properties',
        description:
          'Vacant buildings or properties between occupancies where periodic observations may be appropriate.',
      },
    ],
  },

  process: {
    eyebrow: 'HOW A PROGRAMME IS PLANNED',
    headline: 'An exacting process. A practical patrol plan.',
    steps: [
      {
        number: '01',
        title: 'Property Brief',
        description:
          'Discuss the site, operating hours, access arrangements, and the concerns that matter most to you.',
      },
      {
        number: '02',
        title: 'Site Review',
        description:
          'Identify priority areas, practical checkpoints, and whether periodic patrols fit the property’s needs.',
      },
      {
        number: '03',
        title: 'Patrol Plan',
        description:
          'Confirm availability, visit windows, authorised tasks, reporting, and escalation contacts in writing.',
      },
      {
        number: '04',
        title: 'Review & Refine',
        description:
          'Agree how observations will be reviewed and how changes to the property or its needs will be addressed.',
      },
    ],
  },

  whyMassive: {
    theme: 'light',
    variant: 'bordered-cards',
    eyebrow: 'OPTIONS TO DISCUSS',
    headline: 'The right pattern for your property.',
    pillars: [
      {
        title: 'Visit Pattern',
        description:
          'Discuss scheduled visits, varied timing within agreed windows, or a combination. Frequency and duration require confirmation.',
      },
      {
        title: 'Vehicle & On-Foot Checks',
        description:
          'Consider exterior vehicle patrols with selected walkthroughs where access, site conditions, and the agreed scope permit.',
      },
      {
        title: 'Focused Checkpoints',
        description:
          'Prioritise after-hours entrances, opening and closing checks, parking areas, or other designated points of concern.',
      },
    ],
    footerNote:
      'A consultation should establish whether mobile patrol is suitable on its own or whether a dedicated on-site security presence should be considered. No standard rate, visit frequency, or response time is represented here; scope and commercial terms require individual confirmation.',
  },

  credentials: {
    variant: 'cards-3',
    theme: 'dark',
    headline: 'Licensed. Confidential. Accountable.',
    cards: [
      {
        title: 'Licence B1400200',
        description:
          'Licensed Florida Security Agency. The agency licence remains part of every conversation about your security requirements.',
      },
      {
        title: 'Licensed & Insured',
        description:
          'Established firm credentials. Assignment-specific scope and operating details are confirmed before an engagement is agreed.',
      },
      {
        title: 'Confidential Engagements',
        description:
          'NDA standard on all engagements. Share sensitive property information through the agreed consultation process.',
      },
    ],
  },

  reporting: {
    theme: 'light',
    variant: 'split-highlight',
    eyebrow: 'CLARITY BEFORE THE FIRST VISIT',
    headline: 'A useful record. Not just a visit.',
    paragraph:
      'A proposed reporting brief should identify the agreed checkpoints, observations to record, exceptions to flag, and the people authorised to receive information. Reporting format and timing should be confirmed as part of the patrol plan, not assumed from a generic service description.',
    highlightItems: [
      'Defined checkpoints and permitted access',
      'Agreed reporting format and recipients',
      'Named contacts and escalation instructions',
    ],
  },

  serviceArea: {
    theme: 'light',
    variant: 'city-cards',
    eyebrow: "THE FIRM'S EXISTING SERVICE AREA",
    headline: 'Rooted in South Florida.',
    subtitle:
      "Massive Protective Services serves Miami-Dade, Broward, and Palm Beach. The locations below reflect the firm's existing South Florida footprint—not confirmed mobile patrol deployment coverage. Please ask about availability for your specific property.",
    cities: [
      'Miami',
      'Miami Beach',
      'Fort Lauderdale',
      'Palm Beach',
      'West Palm Beach',
      'Boca Raton',
      'Delray Beach',
      'Aventura',
      'Sunny Isles Beach',
      'Jupiter',
    ],
  },

  consultationForm: {
    serviceCategory: 'Mobile Patrol',
    eyebrow: 'PROPOSED SERVICE · DISCUSS SPECIFIC SCOPE',
    headline: 'Request a Confidential Consultation',
    subtitle:
      'Tell us about your property, hours of operation, and patrol requirements. Our team will review your site details and prepare a tailored patrol proposal.',
    secondFieldLabel: 'Property City / Location *',
    secondFieldPlaceholder: 'e.g. Miami, Fort Lauderdale, Boca Raton',
    dropdown1Label: 'Service Required',
    dropdown1Placeholder: 'Mobile Patrol',
    needTypes: [
      'Mobile Patrol',
      'Perimeter & Access Checks',
      'Opening & Closing Sweeps',
      'Parking Lot & Common Area Walkthroughs',
      'Vacant Property Observation',
      'Mixed-Use Commercial Patrol',
    ],
    defaultNeed: 'Mobile Patrol',
    dropdown2Label: 'Anticipated Schedule / Start',
    dropdown2Placeholder: 'Select timing',
    dropdown2Options: [
      'Immediate (Within 24–48 Hours)',
      'Within 1–2 Weeks',
      'Overnight / Weekend Shift Only',
      'Recurring Monthly Contract',
      'Planning / Exploratory Phase',
    ],
    defaultCoverageStart: 'Immediate (Within 24–48 Hours)',
    messagePlaceholder:
      'Share details about property type, access gates, frequency of sweeps required per shift, and any specific incident history.',
    submitButtonText: 'SEND MY REQUEST — CONFIDENTIALLY',
    footerNote:
      'LIC. B1400200 · Licensed & Insured · Miami-Dade · Broward · Palm Beach · All inquiries strictly confidential',
  },

  faq: {
    theme: 'light',
    headline: 'Your questions, answered.',
    faqs: [
      {
        question: 'Is mobile patrol available for my property?',
        answer:
          'This page presents proposed service content. Contact Massive Protective Services to confirm whether mobile patrol can be arranged for your location and requirements. The firm’s South Florida footprint does not by itself confirm patrol availability, visit frequency, or deployment coverage.',
      },
      {
        question: 'How much would a mobile patrol plan cost?',
        answer:
          'Pricing reflects visit frequency, time on site, access complexity, and whether specialized tasks such as lockups or property walkthroughs are included. Each engagement is quoted individually after a site consultation.',
      },
      {
        question: 'Can patrol visits be scheduled or varied?',
        answer:
          'Yes. Engagements can combine scheduled checks at defined critical times (such as opening and closing hours) with randomized patrols within agreed service windows to avoid predictable patterns.',
      },
      {
        question: 'Does mobile patrol replace an on-site officer?',
        answer:
          'No. Mobile patrol provides periodic deterrence and observation, rather than constant surveillance. If continuous physical presence or immediate emergency intervention is required, dedicated on-site security is recommended.',
      },
      {
        question: 'What happens if a concern is observed?',
        answer:
          'Our officers follow the agreed escalation hierarchy immediately: documenting findings, notifying property management or designated keyholders, and coordinating with emergency services if an active incident or breach is detected.',
      },
      {
        question: 'What reports and property checks can be agreed?',
        answer:
          'Agreed checklists can include gate inspections, perimeter fence lines, exterior door checks, common area walkthroughs, and timestamped digital incident reports delivered following each shift.',
      },
    ],
  },

  relatedServices: {
    theme: 'light',
    headline: 'A complete circle of protection.',
    services: [
      {
        title: 'Estate & Residential Security',
        description:
          'Explore security planning for residences, estates, and the people who call them home.',
        href: '/estate-security',
        linkLabel: 'EXPLORE SERVICE',
      },
      {
        title: 'Armed Security Officers',
        description:
          'Discuss a dedicated security presence where your site and risk assessment call for it.',
        href: '/armed-officers',
        linkLabel: 'EXPLORE SERVICE',
      },
      {
        title: 'Risk Assessment & Consulting',
        description:
          'Start with a clearer understanding of your property’s vulnerabilities and security priorities.',
        href: '/corporate-security',
        linkLabel: 'EXPLORE SERVICE',
      },
    ],
  },

  closingCta: {
    headline: 'Discreet protection, planned around you.',
    subtitle: 'Tell us what you need protected. Discuss your property with a licensed specialist.',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
    },
  },
};
