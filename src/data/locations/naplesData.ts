import {
  LocationHeroData,
  LocationPlanningScenariosData,
  LocationSettingDetailData,
  LocationPlanningBeyondData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface NaplesPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  scopeGrid: ServiceScopeData;
  planningScenarios: LocationPlanningScenariosData;
  settingDetail: LocationSettingDetailData;
  faq: ServiceFAQData;
  planningBeyond: LocationPlanningBeyondData;
  closingCta: ServiceClosingCTAData;
}

export const naplesData: NaplesPageData = {
  metaTitle: 'Private Security & Protection in Naples | MPS',
  metaDescription:
    'Consult with us on executive, property, and private-event security planning in Naples. Service availability and deployment confirmed individually from Delray Beach headquarters.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Naples' },
    ],
    locationName: 'Naples',
    align: 'center',
    headline: 'Private Security & Protection in Naples',
    subtitle:
      'Consult with us on executive, property, and private-event security planning in Naples. Service availability and deployment are confirmed individually.',
    notice: 'Proposed location — service availability and deployment arrangements subject to confirmation',
    bgImage: '/images/mps_location_naples_hero.jpg',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
    },
    singleLineBadge: 'LIC. B1400200 · LICENSED & INSURED · DELRAY BEACH HEADQUARTERS',
  },

  // Screen 2: Thoughtful Planning (Image 2 - Light Theme)
  philosophy: {
    variant: 'two-column-prose',
    theme: 'light',
    hideTopBar: true,
    hideBottomDivider: true,
    headline: 'Thoughtful planning. Exceptional discretion.',
    column1Paragraphs: [
      'Naples brings together Gulf Coast private residences, seasonal travel, and philanthropic-event schedules. A return to a winter home, a visiting executive’s itinerary, or an intimate evening by the water each calls for a brief shaped around privacy, household routines, and the practical details of arrival and departure.',
    ],
    column2Paragraphs: [
      'Our proposed Naples location begins with a confidential conversation, not an assumption of coverage. Discuss your property, dates, movements, and preferred level of visibility with our Delray Beach headquarters. Any security plan, staffing, and deployment arrangements would be assessed and confirmed before an engagement is agreed.',
    ],
  },

  // Screen 3: Scope Grid (Image 3 - Dark Theme)
  scopeGrid: {
    headline: 'Protection for every part of your life.',
    subtitle:
      'Planning options for discussion. All Naples services, including concierge security, are proposed and subject to availability confirmation.',
    cardVariant: 'top-gold-line-arrow',
    columns: 3,
    cards: [
      {
        title: 'Residential Security',
        description: 'Discuss property access, household routines, and seasonal residence planning.',
      },
      {
        title: 'Executive Protection',
        description: 'Explore advance planning, itinerary review, and discreet personal protection.',
      },
      {
        title: 'Concierge Security',
        description: 'Proposed guest-facing security coordination, scoped to your household or property.',
      },
      {
        title: 'Event Security',
        description: 'Plan guest access, supplier arrivals, and privacy for a private gathering.',
      },
      {
        title: 'Secure Transportation',
        description: 'Discuss journey planning, transfer requirements, and security-driver arrangements.',
      },
      {
        title: 'Risk Assessment',
        description: 'Review property, travel, and event risks to inform a tailored security brief.',
      },
    ],
  },

  // Screen 4 Top: Planned for the rhythms of Naples (Image 4 Top - Light Theme)
  planningScenarios: {
    headline: 'Planned for the rhythms of Naples.',
    subtitle:
      'Illustrative planning scenarios only — not actual client engagements, testimonials, or confirmed deployments.',
    theme: 'light',
    cards: [
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Seasonal residence arrival',
        description:
          'A household preparing to return to Naples could discuss an access review, staff and supplier coordination, and arrival-day arrangements before the family travels.',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Visiting principal schedule',
        description:
          'A principal combining meetings with philanthropic engagements could explore itinerary privacy, venue-access considerations, and coordinated transfers between appointments.',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Private waterfront dinner',
        description:
          'A host planning an intimate evening could discuss the guest list, catering access, waterside boundaries, and discreet arrival and departure procedures.',
      },
    ],
  },

  // Screen 4 Bottom: Start with the details of your address (Image 4 Bottom - Light Theme)
  settingDetail: {
    headline: 'Start with the details of your address.',
    subtitle:
      'Old Naples, Port Royal, Park Shore, and Pelican Bay can be referenced in a planning discussion. These areas are not a statement of established coverage, a local office, or a dedicated Naples team. Share the exact property and dates so feasibility can be reviewed.',
    theme: 'light',
    columns: [
      {
        title: 'Old Naples',
        description: 'For planning discussion',
      },
      {
        title: 'Port Royal',
        description: 'For planning discussion',
      },
      {
        title: 'Park Shore',
        description: 'For planning discussion',
      },
      {
        title: 'Pelican Bay',
        description: 'For planning discussion',
      },
    ],
  },

  // Screen 5 Top: Your questions, answered FAQ (Image 5 Top - Light Theme)
  faq: {
    headline: 'Your questions, answered.',
    theme: 'light',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Is security service currently available in Naples?',
        answer:
          'Naples is a proposed location. Service availability, staffing, and deployment arrangements must be confirmed for each enquiry through our Delray Beach headquarters. This page does not represent a Naples office or an established local officer team.',
      },
      {
        question: 'How should we plan for a seasonal stay?',
        answer:
          'Share your anticipated arrival and departure dates, occupancy pattern, property details, and travel schedule as early as practical. We can discuss a seasonal brief; any scope and deployment would remain subject to review and confirmation.',
      },
      {
        question: 'Can planning include our household staff?',
        answer:
          'Your brief can include coordination with an estate manager, household staff, and approved suppliers. Discuss access permissions, communication preferences, and confidentiality expectations so responsibilities can be defined before any proposed engagement.',
      },
      {
        question: 'What is needed for a private-event brief?',
        answer:
          'Provide the date, private address, guest count, event schedule, supplier access, and any privacy concerns. A planning conversation can explore guest arrival and departure arrangements. No venue affiliation or event deployment is implied; feasibility must be confirmed.',
      },
      {
        question: 'How do we receive a tailored quote for Naples?',
        answer:
          'Contact (954) 234-7231 with your dates, location, schedule, and protection priorities. A tailored quote would reflect the agreed scope, staffing requirements, and deployment arrangements, subject to availability. No standard rate or response time is promised.',
      },
    ],
  },

  // Screen 5 Bottom: Planning beyond the city (Image 5 Bottom - Light Theme)
  planningBeyond: {
    headline: 'Planning beyond the city.',
    subtitle: '',
    theme: 'light',
    cards: [
      {
        title: 'Sarasota',
        description:
          'Discuss a Sarasota stop as part of your Gulf Coast itinerary. Service and deployment arrangements require separate confirmation.',
        linkLabel: 'Discuss Sarasota planning',
        href: '/locations/sarasota',
      },
      {
        title: 'Tampa',
        description:
          'Include onward Tampa travel in your planning enquiry. Availability is reviewed for the requested dates and scope.',
        linkLabel: 'Discuss Tampa planning',
        href: '/locations/tampa',
      },
      {
        title: 'Delray Beach headquarters',
        description:
          'Contact Massive Protective Services Inc. for your Naples planning enquiry.\n\n(954) 234-7231 · Lic. B1400200',
        linkLabel: 'Contact headquarters',
        href: '/contact',
      },
    ],
  },

  // Screen 6: Closing CTA Banner (Remaining Screen)
  closingCta: {
    headline: 'Discreet protection, planned around you.',
    subtitle:
      'Tell us what you need protected. Contact our Delray Beach headquarters to discuss your Naples brief and confirm availability.',
    hideAccentLine: true,
    hideTopGoldBorder: true,
    bgClassName: 'bg-[#111C30]',
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
