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

export interface TampaPageData {
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

export const tampaData: TampaPageData = {
  metaTitle: 'Private Security & Protection in Tampa | MPS',
  metaDescription:
    'Plan executive, property, and event security in Tampa. Discuss your itinerary, requirements, and availability with our licensed Delray Beach headquarters.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    breadcrumbs: [
      { label: 'HOME', href: '/' },
      { label: 'LOCATIONS', href: '/locations' },
      { label: 'TAMPA' },
    ],
    locationName: 'Tampa',
    align: 'center',
    breadcrumbsAlign: 'left',
    headline: 'Private Security & Protection in Tampa',
    subtitle:
      'Plan executive, property, and event security in Tampa. Discuss your itinerary, requirements, and availability with our licensed team.',
    notice: 'Proposed location — service availability and deployment arrangements subject to confirmation',
    bgImage: '/images/mps_location_tampa_hero.jpg',
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

  // Screen 2: Considered planning. Exceptional discretion. (Image 2 - Light Theme)
  philosophy: {
    variant: 'two-column-prose',
    theme: 'light',
    hideTopBar: true,
    hideBottomDivider: true,
    headline: 'Considered planning. Exceptional discretion.',
    column1Paragraphs: [
      "Tampa's waterfront, downtown business district, and Westshore corporate and hospitality settings can bring meetings, private functions, and visitor itineraries into one schedule. Thoughtful security planning considers arrival points, public-facing spaces, venue access, and movements between appointments without disrupting the purpose of a visit.",
    ],
    column2Paragraphs: [
      'Massive Protective Services is headquartered in Delray Beach, with a documented South Florida footprint. Tampa is a proposed location, not an established local office or deployment network. Our licensed team can discuss your dates, property or event requirements, and the feasibility of arrangements before any service is confirmed.',
    ],
  },

  // Screen 3: Protection for every part of your life. (Image 3 - Dark Theme)
  scopeGrid: {
    headline: 'Protection for every part of your life.',
    subtitle:
      'Explore the requirements for your Tampa plans. All services remain subject to availability, scope review, and confirmed deployment arrangements.',
    cardVariant: 'top-gold-line-arrow',
    columns: 3,
    cards: [
      {
        title: 'Executive Protection',
        description: 'Advance planning and close-protection requirements for visiting principals.',
      },
      {
        title: 'Corporate Security',
        description: 'Workplace access, executive movements, and business-specific risk planning.',
      },
      {
        title: 'Event Security',
        description: 'Guest access and private-function planning in coordination with the venue.',
      },
      {
        title: 'Residential Security',
        description: 'Property access reviews and discreet residential protection planning.',
      },
      {
        title: 'Secure Transportation',
        description: 'Journey planning and security-driver requirements for your itinerary.',
      },
      {
        title: 'Risk Assessment',
        description: 'Threat, site, and itinerary reviews to inform a proportionate security plan.',
      },
    ],
  },

  // Screen 4: Planning for the realities of Tampa. (Image 4 - Light Theme)
  planningScenarios: {
    headline: 'Planning for the realities of Tampa.',
    subtitle:
      'Illustrative planning scenarios only — not client engagements, confirmed assignments, or evidence of outcomes in Tampa.',
    theme: 'light',
    cards: [
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Visiting business principal downtown',
        description:
          'A proposed itinerary could combine hotel arrivals, downtown meetings, and evening engagements. Planning would review journey timings, access permissions, and discreet accompaniment, subject to team availability.',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Waterfront private function',
        description:
          "An illustrative waterfront gathering may call for guest-list checks, arrival coordination, and a review of public-facing access. Any plan would depend on the host's brief, venue consent, and confirmed arrangements.",
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Property access review',
        description:
          'A proposed residential review could examine visitor entry, contractor access, and household routines. Recommendations would follow a scoped assessment and owner approval, rather than assume an existing security detail.',
      },
    ],
  },

  // Screen 5: Your itinerary. A considered plan. (Image 5 - Light Theme)
  settingDetail: {
    headline: 'Your itinerary. A considered plan.',
    subtitle:
      'Riverwalk, Westshore, Hyde Park, and Davis Islands may be discussed as planning areas. These references describe local context, not an existing deployment network or venue affiliation. Feasibility must be reviewed for each request.',
    theme: 'light',
    columns: [
      {
        title: 'Riverwalk',
        description: 'Waterfront walks, public-space transitions, and downtown meeting itineraries.',
      },
      {
        title: 'Westshore',
        description: 'Corporate visits, hospitality arrivals, and movements between appointments.',
      },
      {
        title: 'Hyde Park',
        description: 'Residential access considerations and private social engagements.',
      },
      {
        title: 'Davis Islands',
        description: 'Property visits, guest entry, and waterfront itinerary planning.',
      },
    ],
  },

  // Screen 6: FAQ Section (Image 6 - Light Theme)
  faq: {
    theme: 'light',
    headline: 'Your questions, answered.',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Is private security currently available in Tampa?',
        answer:
          'Tampa is a proposed location beyond our documented South Florida footprint. Contact our licensed team in Delray Beach to discuss feasibility. Service availability and deployment arrangements must be confirmed; this page does not represent a Tampa office or local team.',
      },
      {
        question: 'How far in advance should I discuss my plans?',
        answer:
          'Please share your dates and requirements as early as possible so there is time to review staffing, travel, and advance work. Lead time depends on the assignment. Short-notice availability and response times cannot be guaranteed.',
      },
      {
        question: 'Can you coordinate with my Tampa venue?',
        answer:
          "Venue requirements, permissions, and existing security procedures would be reviewed as part of planning. Any coordination is subject to the venue's cooperation and approval. No affiliation with a Tampa venue is implied.",
      },
      {
        question: "Can a visitor's itinerary include several Tampa areas?",
        answer:
          'Share your arrival and departure details, meeting locations, hotel, and private engagements. The team can discuss journey planning across areas such as downtown and Westshore, subject to scope, availability, and agreed arrangements.',
      },
      {
        question: 'How is a tailored security proposal costed?',
        answer:
          'Costing depends on the risk review, schedule, personnel, transport, travel, and advance-planning requirements. Request a confidential consultation for an individual proposal after feasibility is reviewed. No standard Tampa rates are published.',
      },
    ],
  },

  // Screen 7: Planning beyond the city (Image 7 - Light Theme)
  planningBeyond: {
    theme: 'light',
    headline: 'Planning beyond the city.',
    subtitle:
      'Explore other proposed location pages for planning only. These links do not confirm service coverage, local offices, or deployment availability.',
    cards: [
      {
        tag: 'PROPOSED LOCATION · PLANNING LINK',
        title: 'Orlando',
        description:
          'Discuss itinerary requirements and feasibility with our licensed team before making arrangements.',
        href: '/locations/orlando',
      },
      {
        tag: 'PROPOSED LOCATION · PLANNING LINK',
        title: 'Sarasota',
        description:
          'Discuss itinerary requirements and feasibility with our licensed team before making arrangements.',
        href: '/locations/sarasota',
      },
      {
        tag: 'PROPOSED LOCATION · PLANNING LINK',
        title: 'Naples',
        description:
          'Discuss itinerary requirements and feasibility with our licensed team before making arrangements.',
        href: '/locations/naples',
      },
    ],
  },

  // Screen 8: Closing CTA (Image 8 - Dark Theme)
  closingCta: {
    hideAccentLine: true,
    bgClassName: 'bg-[#070D18]',
    headline: 'Discreet protection, planned around you.',
    subtitle:
      'Tell us what you need protected. Discuss your Tampa plans and service feasibility with our licensed team in Delray Beach.',
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
};

