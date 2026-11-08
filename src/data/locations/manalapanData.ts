import {
  LocationHeroData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceAudienceData,
  ServiceWhyMassiveData,
  ServiceCredentialsData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface ManalapanPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  townUnderstanding: ServicePhilosophyData;
  seasonalSecurity: ServiceAudienceData;
  servicesGrid: ServiceScopeData;
  whyMassive: ServiceWhyMassiveData;
  aboutManalapan: ServiceCredentialsData;
  faq: ServiceFAQData;
  closingCta: ServiceClosingCTAData;
}

export const manalapanData: ManalapanPageData = {
  metaTitle: 'Manalapan Estate Security & Armed Officers | MPS',
  metaDescription:
    'Licensed armed protection, documented perimeter patrols, and ocean-to-Intracoastal estate security for the Town of Manalapan, FL. Florida Agency License B1400200.',

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Manalapan' },
    ],
    locationName: 'Manalapan',
    eyebrow: 'ARMED SECURITY · MANALAPAN, FLORIDA',
    headline:
      "Manalapan Estate Security — Armed Protection for One of Florida's Most Exclusive Communities",
    subtitle:
      "The Town of Manalapan is a coastal and island community with roughly 400 permanent residents, ocean-to-Intracoastal estate properties, and some of the highest property values in the United States. Massive Protective Services provides licensed armed security for Manalapan's residential estates, seasonal properties and private waterfront compounds. FL License B1400200.",
    bgImage: '/images/mps_location_manalapan_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW SERVICES →',
      href: '#services',
    },
    badges: [
      { icon: 'file-text', label: 'FL LICENSE B1400200' },
      { icon: 'shield-check', label: 'ARMED OFFICERS — CLASS G LICENSED' },
      { icon: 'map-pin', label: 'MANALAPAN & PALM BEACH COUNTY' },
      { icon: 'clock', label: '24/7 AVAILABILITY' },
    ],
  },

  // Screen 2: Security in Manalapan Requires a Specific Understanding of the Town
  townUnderstanding: {
    variant: 'two-column-prose',
    theme: 'dark',
    headline: 'Security in Manalapan Requires a Specific Understanding of the Town',
    column1Paragraphs: [
      'The Town of Manalapan comprises two areas connected by water: the A1A coastal strip between Lantana Public Beach and South Lake Worth Inlet, commonly called Boynton Inlet, and the southern portion of Hypoluxo Island. Along the coastal strip, oceanfront estates can extend from the Atlantic to the Intracoastal, with private docks, boat access and deep setbacks from the road.',
      'Manalapan is predominantly a low-density residential community, with limited club, resort and commercial uses, including the Eau Palm Beach Resort & Spa and Plaza del Mar. Its quiet estate setting creates specific security requirements — especially at properties with both road and water access.',
    ],
    column2Paragraphs: [
      'Many Manalapan properties serve as seasonal residences. Owners arrive in season, staff the estate, and depart for extended periods. An unoccupied oceanfront estate has a different exposure profile from an occupied home, particularly where private docks and multiple access points require attention.',
      'Massive Protective Services provides armed security for Manalapan estates during occupancy, during transition periods and during extended seasonal vacancies. We understand the geography, the access patterns and the specific exposure profile of barrier island properties. We are not a guard company filling shifts — we are a licensed armed security firm that plans before we deploy.',
    ],
  },

  // Screen 3: Seasonal & Vacant Estate Security (Paragraphs + 3 Cards)
  seasonalSecurity: {
    eyebrow: 'SEASONAL & VACANT ESTATE SECURITY',
    headline: 'Most Manalapan Estates Spend Months Unoccupied. That Is When Risk Is Highest.',
    variant: 'dark-cards',
    cardVariant: 'gold-title',
    paragraphs: [
      'Vacant properties are not neutral. An oceanfront estate with no activity, no staff, no visible presence and no response capability is a different kind of target than an occupied one. For ultra-high-value properties in a small, well-known enclave like Manalapan, absence is visible — to neighbors, to staff networks and to those who pay attention to which homes are dark.',
      'The most common security failures on vacant estates are not dramatic. They are quiet: a perimeter door left unlocked, a gate that wasn’t engaged, a dock that was accessed unobserved, a caretaker who walked the property once a week and documented nothing. By the time anything is noticed, weeks may have passed.',
      'Massive Protective Services provides scheduled armed patrol, documented perimeter checks and written shift reports for Manalapan properties during seasonal absence. Every visit is logged. Every anomaly is reported. Every access point is confirmed. Owners receive reports remotely — wherever they are.',
    ],
    cardsPerRow: 3,
    cards: [
      {
        icon: 'route',
        title: 'Documented Perimeter Patrol',
        description:
          'Scheduled armed officer visits during vacancy periods — ocean-side, Intracoastal-side and all access points documented in writing after every patrol. Reports delivered remotely.',
      },
      {
        icon: 'key',
        title: 'Transition Security',
        description:
          'The highest-risk window for estate properties is the transition period — arrival, departure and staff changeover. We provide active armed coverage during arrivals and departures on request.',
      },
      {
        icon: 'anchor',
        title: 'Dual-Water Access Coverage',
        description:
          'Manalapan properties with Intracoastal docking present a second access vector that road-focused security misses. Our patrol protocols address both the street side and the water side of every estate we cover.',
      },
    ],
  },

  // Screen 4: Our Services in Manalapan (4 Columns)
  servicesGrid: {
    eyebrow: 'OUR SERVICES IN MANALAPAN',
    headline: 'Armed Security Services for Manalapan Residential Estates',
    cardVariant: 'gold-title',
    columns: 4,
    cards: [
      {
        icon: 'home',
        title: 'Estate Security',
        description:
          'Residential armed security for occupied Manalapan estates. Consistent officer assignment, written security plan, shift reports and direct client contact on every engagement.',
      },
      {
        icon: 'route',
        title: 'Armed Mobile Patrol',
        description:
          'Scheduled armed patrol for Manalapan properties during vacancy or between staff-coverage hours. Every visit documented. Remote reporting for owners not on-site.',
      },
      {
        icon: 'user-check',
        title: 'Executive Protection',
        description:
          'Armed escort and principal protection for Manalapan residents, guests and family members traveling within Palm Beach County or beyond. Discreet, professional, Class G licensed.',
      },
      {
        icon: 'calendar',
        title: 'Private Event Security',
        description:
          'Armed security for private events held at Manalapan estate properties. Access control, perimeter coverage and executive protection integrated into a single written plan.',
      },
    ],
  },

  // Screen 5: What Makes Us the Right Firm for Manalapan (Vertical Bars)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE SERVICES',
    headline: 'What Makes Us the Right Firm for Manalapan',
    variant: 'vertical-bars',
    theme: 'dark',
    pillars: [
      {
        title: 'We Only Deploy Armed Officers',
        description:
          'Every officer we deploy holds a Florida Class G Statewide Firearm License. We do not offer unarmed services. For Manalapan estate clients, this is not a premium add-on — it is the baseline.',
      },
      {
        title: 'Written Security Plans for Every Engagement',
        description:
          'Before any officer arrives at a Manalapan property, we produce a written security plan covering the estate layout, access points, protocols and client-specific instructions. If a firm does not do this, it is a staffing operation.',
      },
      {
        title: 'Consistent Officer Assignment',
        description:
          'Your Manalapan estate is not a shift to fill. We assign specific officers to specific properties and clients. The same person returns for every deployment — they know your property because they have been there.',
      },
      {
        title: 'Remote Reporting for Absent Owners',
        description:
          'Written shift reports are standard on every engagement. For vacant and seasonal properties, reports are delivered remotely after every patrol visit — so you always know what happened at the property, wherever you are.',
      },
      {
        title: 'FL License B1400200 — Publicly Verifiable',
        description:
          'Massive Protective Services is a licensed Florida security agency under Chapter 493, Florida Statutes. License B1400200 is publicly verifiable through FDACS. Every armed officer is individually licensed. Nothing here requires you to take our word for it.',
      },
    ],
    verifyLink: {
      label: 'Verify agency licence on FDACS',
      href: 'https://www.fdacs.gov/Business-Services/Licensing/Division-of-Licensing',
    },
  },

  // Screen 6 (Image 1): About Manalapan & Verified Licensing Credentials
  aboutManalapan: {
    eyebrow: 'ABOUT MANALAPAN, FLORIDA',
    headline: "One of Palm Beach County's Most Exclusive Barrier Island Communities",
    theme: 'dark',
    showBottomDivider: false,
    paragraphs: [
      'The Town of Manalapan is an incorporated municipality in Palm Beach County, Florida, comprising an Atlantic coastal strip along A1A and the southern portion of Hypoluxo Island. The coastal strip lies between the Atlantic Ocean and the Intracoastal Waterway. With a permanent population of approximately 400 residents, Manalapan is a small, predominantly low-density residential community.',
      'Its estates range from oceanfront properties with private beach access to Intracoastal residences with private docking. The town also includes limited resort, club and commercial uses, notably the Eau Palm Beach Resort & Spa and Plaza del Mar near Ocean Avenue.',
      'The coastal portion extends from Lantana Public Beach to Boynton Inlet, with Ocean Ridge, Briny Breezes, Gulf Stream and Highland Beach farther south along the Palm Beach County coastal corridor. Massive Protective Services serves this corridor with estate-specific planning that addresses road access, waterfront exposure and seasonal occupancy.',
    ],
    infoLink: {
      label: 'Town geography: Town of Manalapan',
      href: 'https://www.manalapan.org',
    },
    cards: [
      {
        icon: 'file-text',
        label: 'FL Agency License:',
        value: 'B1400200',
      },
      {
        icon: 'shield-check',
        label: 'Officer License:',
        value: 'Class G Statewide Firearm',
      },
      {
        icon: 'book-open',
        label: 'Governing Law:',
        value: 'Chapter 493, FL Statutes',
      },
      {
        icon: 'search',
        label: 'Licensing Authority:',
        value: 'FDACS — Verifiable',
      },
    ],
  },

  // Screen 7 (Image 2): Common Questions from Manalapan Estate Owners (FAQ)
  faq: {
    eyebrow: 'MANALAPAN SECURITY FAQ',
    headline: 'Common Questions from Manalapan Estate Owners',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you provide security for Manalapan estates during seasonal vacancy?',
        answer:
          'Yes. Scheduled armed patrol for vacant or seasonally unoccupied properties is one of our core services in Manalapan. We provide documented patrol visits, written reports and remote delivery to owners — wherever they are during the off-season.',
      },
      {
        question: "What is the access control situation on Manalapan's barrier island?",
        answer:
          "Manalapan's barrier island geography limits road entry points, which creates both an advantage and a specific vulnerability: fewer entry points to control, but also a more isolated response environment. Our protocols address both street-side and Intracoastal-side access for properties with dock or water access.",
      },
      {
        question: 'Are your officers licensed to carry firearms in Florida?',
        answer:
          'Yes. Every officer deployed by Massive Protective Services holds a Florida Class G Statewide Firearm License — the state-required credential for armed security officers under Chapter 493, Florida Statutes. License numbers are available on request and verifiable through FDACS.',
      },
      {
        question: 'Can you provide security during estate transition periods — arrival and departure?',
        answer:
          'Yes. Arrival and departure are among the highest-risk periods for estate properties. We provide armed coverage during ownership transitions, staff changeovers and any period of elevated activity at the property.',
      },
      {
        question: 'Do you serve other barrier island communities near Manalapan?',
        answer:
          'Yes. Massive Protective Services serves the Palm Beach County coastal corridor — including Gulf Stream, Ocean Ridge, Highland Beach and Briny Breezes — as well as mainland Palm Beach County communities and Hillsboro Beach in neighboring Broward County.',
      },
    ],
  },

  // Screen 8 (Image 3): Closing CTA (Confidential Consultation)
  closingCta: {
    headline: 'Manalapan Estate Security — Confidential Consultation',
    subtitle:
      'Every engagement begins with a confidential conversation. No sales process. No obligation. Direct discussion of your property, your situation and whether we are the right firm.',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW ALL LOCATIONS →',
      href: '/locations',
    },
    disclaimer:
      'FL License B1400200 · Manalapan & Palm Beach County · Chapter 493, FL Statutes · Armed Officers · 24/7',
  },
};
