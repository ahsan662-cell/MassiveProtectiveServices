import {
  LocationHeroData,
  LocationPlanningScenariosData,
  LocationSettingDetailData,
  LocationPlanningBeyondData,
  LocationNearbyLocationsData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface JacksonvillePageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  scenarios: LocationPlanningScenariosData;
  settingDetail: LocationSettingDetailData;
  planningBeyond: LocationPlanningBeyondData;
  faq: ServiceFAQData;
  closingCTA: ServiceClosingCTAData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const jacksonvilleData: JacksonvillePageData = {
  metaTitle: 'Private Security & Executive Protection Jacksonville | MPS',
  metaDescription:
    'Plan executive visits, private functions, and property security in Jacksonville. Speak with Massive to confirm licensed-team availability and deployment arrangements.',

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'HOME', href: '/' },
      { label: 'LOCATIONS', href: '/locations' },
      { label: 'JACKSONVILLE' },
    ],
    locationName: 'Jacksonville',
    headline: 'Private Security & Protection in Jacksonville',
    subtitle:
      'Plan executive visits, private functions, and property security in Jacksonville. Speak with Massive to confirm licensed-team availability and deployment arrangements.',
    notice: 'Proposed location — service availability and deployment arrangements subject to confirmation',
    align: 'center',
    bgImage: '/images/mps_location_jacksonville_hero.jpg',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
    },
    singleLineBadge:
      'LIC. B1400200 · LICENSED & INSURED · 24/7 RESPONSE · SERVING MIAMI-DADE, BROWARD & PALM BEACH',
  },

  // Screen 2: Thoughtful planning. Exceptional discretion. (Light theme 2-column prose)
  philosophy: {
    variant: 'two-column-prose',
    theme: 'light',
    hideTopBar: true,
    hideBottomDivider: true,
    headline: 'Thoughtful planning. Exceptional discretion.',
    column1Paragraphs: [
      "Jacksonville's downtown business and hospitality settings meet along the St Johns River. An executive visit may combine office meetings, hotel arrivals, and a private dinner on opposite banks. Planning should account for bridge crossings, arrival points, changing schedules, and the balance between visible reassurance and personal discretion.",
    ],
    column2Paragraphs: [
      "Private functions and residential properties raise different questions: who needs access, how guests arrive, and which responsibilities sit with the host or property manager. Massive's headquarters remains in Delray Beach. Jacksonville enquiries begin with a confidential review of your needs; team availability, travel, and any deployment must be confirmed before an engagement is agreed.",
    ],
  },

  // Screen 3: Scope Grid (Dark Navy - Protection for every part of your life)
  servicesGrid: {
    headline: 'Protection for every part of your life.',
    subtitle:
      'Discuss the right scope for your visit, function, or property. All Jacksonville services are proposed and subject to licensed-team availability, agreed scope, and deployment confirmation.',
    cardVariant: 'top-gold-line-arrow',
    columns: 3,
    cards: [
      {
        title: 'Executive Protection',
        description:
          'Advance planning, itinerary review, and discreet protection options for executive visits.',
      },
      {
        title: 'Corporate Security',
        description:
          'Workplace access, visitor procedures, and risk-led planning for business settings.',
      },
      {
        title: 'Event Security',
        description:
          'Guest access, arrival planning, and security requirements for private functions.',
      },
      {
        title: 'Residential Security',
        description:
          'Property access, household routines, and residential protection planning.',
      },
      {
        title: 'Secure Transportation',
        description:
          'Route planning, pickup arrangements, and security-driver requirements for review.',
      },
      {
        title: 'Risk Assessment',
        description:
          'A considered review of threats, vulnerabilities, and appropriate safeguards.',
      },
    ],
  },

  // Screen 4 (Top): Planning for the realities of Jacksonville. (Light theme 3 gold-bordered cards)
  scenarios: {
    theme: 'light',
    headline: 'Planning for the realities of Jacksonville.',
    subtitle:
      'Illustrative planning scenarios only — not verified client engagements, venue affiliations, or commitments to provide service.',
    cards: [
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Corporate itinerary',
        description:
          'An executive planning meetings downtown and a Southbank hotel stay could request an itinerary review, arrival protocols, and transport planning. Any protection detail would depend on confirmed personnel and travel arrangements.',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Riverfront function',
        description:
          'A host considering a private reception by the St Johns River could review guest lists, entry points, and arrival flow. Venue permissions, existing security responsibilities, and staffing would need to be agreed in advance.',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Residential access review',
        description:
          'A property owner in the Riverside or San Marco area could discuss visitor access, deliveries, and household routines. A site review would require owner consent, an agreed brief, and confirmed assessment availability.',
      },
    ],
  },

  // Screen 4 (Bottom): Understand the setting. Plan the detail. (Light theme 4-column detail)
  settingDetail: {
    theme: 'light',
    headline: 'Understand the setting. Plan the detail.',
    subtitle:
      'Downtown, Southbank, Riverside, and San Marco offer different business, hospitality, and residential settings. Share the exact addresses and schedule so river crossings, access rules, and travel time can be reviewed. These are planning areas, not a statement of local presence or guaranteed coverage.',
    columns: [
      {
        title: 'Downtown',
        description: 'Business meetings, hotel access, and visitor arrival points.',
      },
      {
        title: 'Southbank',
        description: 'Riverfront hospitality, bridge crossings, and coordinated pickups.',
      },
      {
        title: 'Riverside',
        description: 'Private functions, residential access, and neighbourhood arrival routes.',
      },
      {
        title: 'San Marco',
        description: 'Private appointments, property access, and discreet guest movement.',
      },
    ],
    footnote:
      'Proposed location — service availability and deployment arrangements subject to confirmation',
  },

  // Screen: Planning beyond Jacksonville. (Light theme 3 gold-bordered regional links)
  planningBeyond: {
    theme: 'light',
    headline: 'Planning beyond Jacksonville.',
    subtitle:
      'Explore related planning enquiries for Orlando and Tampa, or speak directly with our South Florida consultation team. These links do not confirm offices, local teams, or service availability.',
    cards: [
      {
        title: 'Orlando',
        description:
          'Planning a wider Florida itinerary? Discuss Orlando dates and travel requirements; service arrangements require confirmation.',
        linkLabel: 'Discuss Orlando planning',
        href: '#consultation-form',
      },
      {
        title: 'Tampa',
        description:
          'Include Tampa in your planning enquiry so schedules, travel, and possible support can be reviewed together.',
        linkLabel: 'Discuss Tampa planning',
        href: '#consultation-form',
      },
      {
        title: 'South Florida consultation',
        description:
          "Your primary contact is Massive's South Florida team. Headquarters: Delray Beach, FL. Call (954) 234-7231 to discuss your needs.",
        linkLabel: 'Contact our consultation team',
        href: '#consultation-form',
      },
    ],
  },

  // Screen 5: FAQ Section (Light theme accordions, all expanded by default)
  faq: {
    theme: 'light',
    headline: 'Your questions, answered.',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Is private security available in Jacksonville?',
        answer:
          'Jacksonville is a proposed location. Contact Massive to review your dates, needs, and licensed-team availability. We do not claim a Jacksonville office or locally based officers. Service availability and deployment arrangements must be confirmed before any engagement is agreed.',
      },
      {
        question: 'How should I plan security for travel to Jacksonville?',
        answer:
          'Share your itinerary, meeting addresses, arrival details, and any specific concerns as early as possible. We can discuss advance planning and transport requirements. Travel from our Delray Beach headquarters, staffing, lead time, and related costs require review; immediate deployment is not promised.',
      },
      {
        question: 'Can you coordinate with a Jacksonville venue?',
        answer:
          'With your authorisation, venue requirements and points of contact can be reviewed as part of planning. Access permissions, house security responsibilities, and any proposed staffing must be agreed with the venue. No affiliation with, or automatic access to, a Jacksonville venue is implied.',
      },
      {
        question: 'Can I request a Jacksonville property assessment?',
        answer:
          'You may enquire about a residential or commercial property review. Provide the address, your authority to arrange access, and the concerns you want assessed. The assessment format, scope, schedule, travel, and specialist availability will need confirmation before a visit is booked.',
      },
      {
        question: 'How do I obtain a quote for Jacksonville security?',
        answer:
          'Call (954) 234-7231 or request a confidential consultation with our South Florida team. Include dates, locations, duration, and the type of support you are considering. A tailored proposal can follow a needs review and availability check; pricing and deployment are not confirmed until agreed in writing.',
      },
    ],
  },

  // Screen: Closing CTA (Dark Navy Theme - Discreet protection, planned around you.)
  closingCTA: {
    headline: 'Discreet protection, planned around you.',
    subtitle:
      'Tell us what you need protected. A licensed specialist responds within 24 hours, 24/7.',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7: (954) 234-7231',
      href: 'tel:9542347231',
    },
    disclaimer:
      'Proposed location — service availability and deployment arrangements subject to confirmation',
  },

  // Regional Network & South Florida Command
  nearbyLocations: {
    eyebrow: 'FLORIDA PROTECTION NETWORK',
    headline: 'Headquartered in Delray Beach, Deploying Across Florida',
    places: [
      {
        title: 'Delray Beach Headquarters',
        description:
          'Primary command center delivering 24/7 rapid dispatch and executive protection coordination.',
        href: '/locations/delray-beach',
        linkLabel: 'View Headquarters',
      },
      {
        title: 'Boca Raton',
        description:
          'Comprehensive executive protection, private aviation escort, and estate security.',
        href: '/locations/boca-raton',
        linkLabel: 'View Location',
      },
      {
        title: 'Fort Lauderdale',
        description:
          'Superyacht security, downtown corporate suites, and Las Olas private escorts.',
        href: '/locations/fort-lauderdale',
        linkLabel: 'View Location',
      },
      {
        title: 'Aventura',
        description:
          'Private island security, residential penthouse protection, and luxury retail security.',
        href: '/locations/aventura',
        linkLabel: 'View Location',
      },
    ],
  },
};
