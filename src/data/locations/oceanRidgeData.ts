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

export interface OceanRidgePageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  scopeGrid: ServiceScopeData;
  barrierIslandProfile: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const oceanRidgeData: OceanRidgePageData = {
  metaTitle: 'Estate Protection & Security Ocean Ridge | MPS',
  metaDescription:
    "Discreet, licensed security for Ocean Ridge's oceanfront and Intracoastal estates — from a Palm Beach County agency headquartered minutes away in Delray Beach.",

  // Screen 1: Hero Section (Image 1)
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Ocean Ridge' },
    ],
    eyebrow: 'OCEAN RIDGE / PALM BEACH COUNTY',
    locationName: 'Ocean Ridge',
    headline: 'Private Security & Estate Protection in Ocean Ridge, FL',
    subtitle:
      "Discreet, licensed security for Ocean Ridge's oceanfront and Intracoastal estates — from a Palm Beach County agency that understands this level of client.",
    bgImage: '/images/mps_location_ocean_ridge_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'map-pin',
        label: 'PALM BEACH COUNTY HQ',
      },
      {
        icon: 'waves',
        label: 'OCEANFRONT · INTRACOASTAL · ESTATE',
      },
    ],
  },

  // Screen 2: Philosophy Section (Image 2)
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      "Ocean Ridge is not a city that appears on most security firms' service lists. That's exactly why it should be on ours.",
    paragraph:
      'Ocean Ridge sits on a barrier island between the Atlantic and the Intracoastal, south of Boynton Beach. It has no commercial district, no hotel, no traffic. What it has is roughly 1,700 residents — many of them among the most private, most discerning and most security-conscious families in Palm Beach County. Massive Protective Services is headquartered in Delray Beach, minutes away. We serve Ocean Ridge because the clients who live here deserve a security partner who actually knows where it is.',
  },

  // Screen 3: Scope Grid (Image 3 - What We Offer Here)
  scopeGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Ocean Ridge Estates & Residences',
    cardVariant: 'gold-title',
    columns: 3,
    cards: [
      {
        icon: 'home',
        title: 'Oceanfront & Intracoastal Estate Security',
        description:
          "Armed overnight officers, perimeter patrol and access control for Ocean Ridge's barrier island properties — covering both ocean-side and Intracoastal-side access points.",
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for residential coverage, elevated-risk windows and any situation on your property requiring a licensed, armed presence.',
      },
      {
        icon: 'user',
        title: 'Executive & Principal Protection',
        description:
          'Close protection for Ocean Ridge residents and their visiting principals. Consistent teams, advance work and armed coverage that travels with your family.',
      },
      {
        icon: 'key',
        title: 'Seasonal & Absentee Property Protection',
        description:
          "Scheduled patrol checks and property monitoring for seasonal residents and owners who are away. Your Ocean Ridge estate protected year-round, whether you're there or not.",
      },
      {
        icon: 'wine',
        title: 'Private Event Security at Home',
        description:
          'Intimate dinner parties, estate galas and private gatherings secured by discreet, licensed officers. Guest management and perimeter coverage that never breaks the atmosphere.',
      },
      {
        icon: 'book',
        title: 'Household & Staff Security Protocols',
        description:
          'Vendor screening, household staff access protocols and domestic security procedures for estates with rotating household teams, contractors and service providers.',
      },
    ],
  },

  // Screen 4: Split Section (Image 4 - Why Ocean Ridge is Different)
  barrierIslandProfile: {
    eyebrow: 'WHY OCEAN RIDGE IS DIFFERENT',
    headline: 'A Barrier Island Enclave With a Security Profile All Its Own',
    paragraphs: [
      "Ocean Ridge occupies a narrow strip of land between A1A and the Intracoastal — less than a mile wide at most points. The properties here are large, the lots are private and the streets are quiet. That quiet is a double edge: it's exactly what residents value, and it's also what makes unusual activity harder to catch before it becomes a problem. Ocean Ridge has no commercial buffer, no foot traffic and limited police presence relative to its property values. A proactive security plan isn't paranoia here — it's arithmetic.",
    ],
    items: [
      {
        icon: 'waves',
        title: 'Dual-Access Properties',
        description:
          'Oceanfront and Intracoastal homes have exposure on two sides. Our estate plans cover both perimeters.',
      },
      {
        icon: 'palmtree',
        title: 'Barrier Island Isolation',
        description:
          'One road in, one road out. We know the access points, the patrol routes and what out-of-place looks like here.',
      },
      {
        icon: 'lock',
        title: 'Ultra-Private Clientele',
        description:
          'Ocean Ridge residents value discretion above everything. Our officers operate quietly — no presence that draws attention to your property.',
      },
    ],
  },

  // Screen 5A: Coverage Area (Image 5 Top)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Ocean Ridge and the Southern Palm Beach Barrier Island',
    column1: [
      'Ocean Ridge (A1A Corridor)',
      'Oceanfront Estates (East Side)',
      'Intracoastal Estates (West Side)',
      'Briny Breezes (adjacent north)',
    ],
    column2: [
      'Boynton Beach (adjacent mainland)',
      'Manalapan (adjacent south)',
      'Gulf Stream (nearby)',
      'Delray Beach (5 minutes south — our HQ)',
    ],
    footnote:
      'Ocean Ridge is one of our closest coverage areas to our Delray Beach headquarters. Response times here are among the fastest we offer anywhere in South Florida.',
    footnotePlacement: 'inside',
  },

  // Screen 5B: How We Work Process (Image 5 Bottom)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'A Quiet Process for Clients Who Value Quiet',
    steps: [
      {
        number: '1',
        title: 'Confidential Consultation',
        description:
          'One call or a brief form submission. No sales process, no call center. You speak with our team, describe your property and your situation, and we respond with a plan — not a pitch.',
      },
      {
        number: '2',
        title: 'Estate Assessment',
        description:
          'We review your Ocean Ridge property: access points, perimeter, household activity and any existing security. Written assessment within 48 hours.',
      },
      {
        number: '3',
        title: 'Officer Placement',
        description:
          'A vetted, licensed officer briefed on your property before they arrive. Armed or plain-clothes, overnight or ongoing — matched exactly to what you actually need.',
      },
      {
        number: '4',
        title: 'Ongoing Coverage',
        description:
          'Consistent team. Monthly check-ins. Written reports after every shift. The same officers, the same standards, no surprises.',
      },
    ],
  },

  // Screen 6: Why Massive Protective (Screenshot 1 Bottom)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'Minutes Away. Years of Experience. Zero Compromise.',
    variant: 'column-top-borders',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Delray Beach Is Our Home',
        description:
          "Our headquarters is in Delray Beach — five minutes from Ocean Ridge. We don't dispatch from Broward or Miami-Dade. We're already here.",
      },
      {
        icon: 'file-text',
        title: 'Licensed, Verifiable, Accountable',
        description:
          'FL Agency License B1400200, publicly verifiable on FDACS. Every officer licensed under Chapter 493, Florida Statutes. Nothing is subcontracted, nothing is improvised.',
      },
      {
        icon: 'lock',
        title: 'This Client. This Standard.',
        description:
          "Ocean Ridge clients are not a volume play. They're the reason Massive Protective exists. Discreet, permanent, professional — the only standard we operate to.",
      },
    ],
  },

  // Screen 7: Nearby Coverage (Screenshot 2)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Serving the Southern Palm Beach Barrier Island Corridor',
    cards: [
      {
        title: 'Manalapan',
        description: 'The most exclusive town in Palm Beach County — adjacent south.',
        href: '/locations/manalapan',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters city — 5 minutes south.',
        href: '/locations/delray-beach',
      },
      {
        title: 'Boynton Beach',
        description: 'Adjacent mainland coverage.',
        href: '/locations/boynton-beach',
      },
      {
        title: 'Boca Raton',
        description: '15 minutes south — estates, executives, events.',
        href: '/locations/boca-raton',
      },
    ],
  },

  // Screen 8: Security FAQ (Screenshot 4)
  faq: {
    eyebrow: 'OCEAN RIDGE SECURITY FAQ',
    headline: 'Your questions, answered.',
    faqs: [
      {
        question: 'Do you serve Ocean Ridge, FL?',
        answer:
          'Yes. Ocean Ridge is one of our closest coverage areas — our Delray Beach headquarters is approximately five minutes south. We serve Ocean Ridge residents with estate security, armed officers, executive protection and seasonal property coverage.',
      },
      {
        question: "What makes Ocean Ridge's security needs different from other cities?",
        answer:
          'Ocean Ridge is a barrier island enclave with dual-perimeter exposure — oceanfront on the east, Intracoastal on the west. Properties here are large, private and high-value, with limited surrounding commercial activity and quiet residential streets. Security plans here need to account for both sides of the island, the seasonal nature of some residences and a clientele that places an absolute premium on discretion.',
      },
      {
        question: 'Do you offer overnight armed security for Ocean Ridge homes?',
        answer:
          'Yes. Licensed Class G armed officers deployed overnight is one of our primary services in this area. Officers are briefed on your specific property and on-site for the full shift — no remote monitoring substitution.',
      },
      {
        question: "Can you cover my Ocean Ridge property while I'm away?",
        answer:
          'Yes. Seasonal and absentee property protection — scheduled patrols, monitoring coordination and emergency response — is available as an ongoing retainer. Contact us to discuss your property and schedule.',
      },
      {
        question: 'Do you sign NDAs for Ocean Ridge clients?',
        answer:
          "Yes. Non-disclosure agreements are available for every engagement — covering our entire team, the client's identity and all security arrangements. Many Ocean Ridge clients request them as a matter of course.",
      },
    ],
  },

  // Screen 9: Nearby Locations (Screenshot 5)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving the Palm Beach Barrier Island — North to South',
    places: [
      {
        title: 'Manalapan',
        description: 'The most private barrier island town in Palm Beach County.',
        href: '/locations/manalapan',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters city — estate security, executive protection, events.',
        href: '/locations/delray-beach',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Boca Raton',
        description: 'Southern Palm Beach County estates, executives and private events.',
        href: '/locations/boca-raton',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
