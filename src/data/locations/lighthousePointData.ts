import {
  LocationHeroData,
  LocationSplitSectionData,
  LocationCorridorCoverageData,
  LocationNearbyCoverageData,
  LocationNearbyLocationsData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceProcessData,
  ServiceWhyMassiveData,
  ServiceFAQData,
} from '@/components/services/types';

export interface LighthousePointPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  localKnowledge: LocationSplitSectionData;
  coverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const lighthousePointData: LighthousePointPageData = {
  metaTitle: 'Private Security & Bodyguards Lighthouse Point | MPS',
  metaDescription:
    "Estate security, armed officers and close protection for Lighthouse Point's waterfront homes, private docks and residents — from a licensed Broward County agency.",

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Lighthouse Point' },
    ],
    locationName: 'Lighthouse Point',
    eyebrow: 'LIGHTHOUSE POINT / BROWARD COUNTY',
    headline: 'Private Security & Bodyguards in Lighthouse Point, FL',
    subtitle:
      "Estate security, armed officers and close protection for Lighthouse Point's waterfront homes, private docks and residents — from a licensed Broward County agency.",
    bgImage: '/images/mps_location_lighthouse_point_hero.jpg',
    primaryCta: {
      label: 'TALK TO OUR TEAM',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      { icon: 'file-text', label: 'FL LICENSE B1400200' },
      { icon: 'map-pin', label: 'BROWARD COUNTY COVERAGE' },
      { icon: 'anchor', label: 'WATERFRONT · ESTATE · RESIDENTIAL' },
    ],
  },

  // Screen 2: Philosophy / Statement Section
  philosophy: {
    variant: 'centered-gold-line',
    theme: 'dark',
    headline:
      'Lighthouse Point has one of the highest concentrations of waterfront homes in all of Broward County. Most of them have no security plan.',
    paragraph:
      "Lighthouse Point is not a city that draws attention to itself — and that's exactly what its residents prefer. The canal-front homes, private docks and quiet residential streets create a specific security environment: low visibility from the street, high value behind the gate, and limited response options if something goes wrong. Massive Protective provides discreet, licensed estate security and armed coverage for Lighthouse Point residents who understand that privacy isn't the same as protection.",
  },

  // Screen 3: Services Grid (WHAT WE DO HERE)
  servicesGrid: {
    eyebrow: 'WHAT WE DO HERE',
    headline: 'Private Security Services for Lighthouse Point Residents',
    cardVariant: 'gold-title',
    columns: 3,
    cards: [
      {
        icon: 'home',
        title: 'Estate & Waterfront Security',
        description:
          "Armed overnight officers, perimeter patrols and access control for Lighthouse Point's canal-front homes and private waterfront estates. Coverage that accounts for both street and water access.",
      },
      {
        icon: 'shield',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for residential coverage, elevated-risk periods, domestic situations and any circumstance requiring a licensed armed presence on your property.',
      },
      {
        icon: 'anchor',
        title: 'Dock & Vessel Security',
        description:
          'Security for private docks, vessel watch and waterside access points. Coordinated with residential coverage for full perimeter protection on waterfront properties.',
      },
      {
        icon: 'user-check',
        title: 'Executive Protection',
        description:
          'Close protection for Lighthouse Point residents who require personal security — daily detail, travel coverage or specific-event protection from a consistent, vetted team.',
      },
      {
        icon: 'calendar',
        title: 'Private Event Security',
        description:
          'Discreet security for private home events, dinner parties and gatherings. Guest management, perimeter coverage and VIP protection without disrupting the atmosphere.',
      },
      {
        icon: 'key',
        title: 'Seasonal & Absentee Coverage',
        description:
          'Patrol checks, property monitoring and alarm response coordination for seasonal residents and owners who are away for extended periods. Your home watched while you’re not there.',
      },
    ],
  },

  // Screen 4: Local Knowledge (Split Section)
  localKnowledge: {
    eyebrow: 'LOCAL KNOWLEDGE',
    headline: 'Lighthouse Point Has a Unique Security Profile. We Understand It.',
    paragraphs: [
      "Lighthouse Point is entirely residential — there's no commercial corridor, no hotel strip, no venue district. Every security need here is personal: a homeowner, a family, a property. The canal network that makes these homes so desirable also creates perimeter complexity that a standard residential alarm system doesn't address. Water access, dock security and the quiet that comes with a small city of 11,000 — it's a different brief than Boca or Fort Lauderdale. We've worked in this environment and we build security plans that reflect how Lighthouse Point actually works.",
    ],
    items: [
      {
        icon: 'anchor',
        title: 'Canal-Front Homes',
        description:
          'Water access on three sides changes the perimeter equation. Our plans account for dock, street and interior access points.',
      },
      {
        icon: 'home',
        title: 'All-Residential City',
        description:
          'No commercial anchor means security needs here are entirely personal — home, family, property and peace of mind.',
      },
      {
        icon: 'map-pin',
        title: 'Broward County Location',
        description:
          'Between Pompano Beach and Fort Lauderdale. Our team covers this corridor consistently with no added travel time.',
      },
    ],
  },

  // Screen 5: Coverage Across Lighthouse Point & Surrounding Area (Boxed Corridor)
  coverage: {
    eyebrow: 'WHERE WE WORK',
    headline: 'Full Coverage Across Lighthouse Point & the Surrounding Area',
    variant: 'boxed',
    footnotePlacement: 'inside',
    column1: [
      'NE 24th Street Corridor',
      'Intracoastal Waterway Frontage',
      'Sample Road Boundary',
      'North Federal Highway Edge',
    ],
    column2: [
      'Pompano Beach (adjacent north)',
      'Fort Lauderdale (adjacent south)',
      'Deerfield Beach (nearby)',
      'Hillsboro Beach (coastal, nearby)',
    ],
    footnote:
      'Lighthouse Point is a small city — we cover every street in it. Contact us to discuss your property specifically.',
  },

  // Screen 6 (Image 1): How It Works / Process Grid
  process: {
    eyebrow: 'HOW IT WORKS',
    headline: 'From First Call to Officer On-Site in Lighthouse Point',
    steps: [
      {
        number: '1',
        title: 'Call or Request',
        description:
          "Reach us 24/7 by phone or form. You'll speak with our team directly — we know Lighthouse Point's layout and will understand your property situation immediately.",
      },
      {
        number: '2',
        title: 'Property Assessment',
        description:
          'We review your property — canal frontage, access points, street exposure and any existing security — and recommend the right coverage within hours.',
      },
      {
        number: '3',
        title: 'Officer Assignment',
        description:
          'A licensed, vetted officer matched to your environment and briefed on your property before they arrive. Armed or unarmed, uniformed or plain-clothes — your call.',
      },
      {
        number: '4',
        title: 'Deployment',
        description:
          'On-site, on schedule. Whether tonight or a planned engagement, every detail confirmed before the first shift begins.',
      },
    ],
  },

  // Screen 7 (Image 2): Why Massive Protective
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'A Broward County Agency That Knows This Market',
    theme: 'dark',
    variant: 'column-top-borders',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Close, Not Regional',
        description:
          "Our coverage of Lighthouse Point comes from our Fort Lauderdale and Delray Beach operations — not a distant regional dispatch. We're in this corridor regularly.",
      },
      {
        icon: 'file-text',
        title: 'Licensed Across the Board',
        description:
          'FL Agency License B1400200. Every officer holds a valid Florida Class D or Class G license — verifiable on FDACS. No unlicensed subcontractors, no exceptions.',
      },
      {
        icon: 'home',
        title: 'Residential Specialists',
        description:
          'Lighthouse Point is an all-residential city. Every engagement here is personal — a family, a home, a property. We build security plans for people, not premises.',
      },
    ],
  },

  // Screen 8 (Image 3): Also Serving Nearby / Regional Coverage
  nearbyCoverage: {
    eyebrow: 'ALSO SERVING NEARBY',
    headline: 'Lighthouse Point Is Part of Our Broward County Coverage',
    cards: [
      {
        title: 'Pompano Beach',
        description: 'Directly adjacent. Same team, same response time.',
        href: '#consultation-form',
      },
      {
        title: 'Fort Lauderdale',
        description: "Broward's primary market — estates, marinas, corporate.",
        href: '/locations/fort-lauderdale',
      },
      {
        title: 'Deerfield Beach',
        description: 'Northern Broward coverage.',
        href: '#consultation-form',
      },
      {
        title: 'Boca Raton',
        description: 'Palm Beach County border, 15 minutes north.',
        href: '/locations/boca-raton',
      },
    ],
  },

  // Screen 10 (Image 5): FAQ Section
  faq: {
    eyebrow: 'LIGHTHOUSE POINT SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you provide security for canal-front homes in Lighthouse Point?',
        answer:
          'Yes. Waterfront and canal-front properties are one of our specialties in Lighthouse Point. Our security plans account for dock access, water-side perimeter and street-side entry points — the full picture, not just a front door.',
      },
      {
        question: 'How quickly can you deploy in Lighthouse Point?',
        answer:
          'Lighthouse Point sits between our Pompano Beach and Fort Lauderdale coverage areas. For most engagements we can confirm and deploy within 24 hours. For urgent situations, call us directly — 24/7.',
      },
      {
        question: 'Can you provide overnight security for a residential property?',
        answer:
          'Yes. Overnight armed officers are one of our most requested residential services. We deploy licensed Class G officers who are briefed on your property and on-site through the night — no handoff to a monitoring center.',
      },
      {
        question: "Do you cover seasonal residents who aren't there year-round?",
        answer:
          "Yes. Scheduled patrol checks, property monitoring coordination and alarm response for owners who aren't in Lighthouse Point full-time. Contact us to discuss a seasonal retainer.",
      },
      {
        question: 'Is Lighthouse Point in your regular service area?',
        answer:
          'Yes. Lighthouse Point falls within our Broward County coverage corridor between Pompano Beach and Fort Lauderdale. We serve it as a regular part of our South Florida operations.',
      },
    ],
  },

  // Screen 11: Nearby Locations (Screen from screenshot)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving Broward & Palm Beach County',
    places: [
      {
        title: 'Pompano Beach',
        description: 'Security services just north of Lighthouse Point.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Fort Lauderdale',
        description: "Executive protection, yacht and estate security in Broward's largest city.",
        href: '/locations/fort-lauderdale',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Boca Raton',
        description: 'Palm Beach County coverage, bodyguards and estate security.',
        href: '/locations/boca-raton',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
