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

export interface PalmBeachPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  theSeason: LocationSplitSectionData;
  understandingPalmBeach: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const palmBeachData: PalmBeachPageData = {
  metaTitle: 'Estate Protection & Security Palm Beach | MPS',
  metaDescription:
    'Discreet, licensed security for Palm Beach oceanfront and lakefront estates, private clubs and seasonal residences — from an agency headquartered 25 minutes south in Delray Beach.',

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Palm Beach' },
    ],
    locationName: 'Palm Beach',
    eyebrow: '— PALM BEACH, FLORIDA',
    headline: 'Private Security & Estate Protection in Palm Beach, FL',
    subtitle:
      "Discreet, licensed security for Palm Beach's oceanfront and lakefront estates, private clubs and seasonal residences — from an agency headquartered 25 minutes south in Delray Beach.",
    bgImage: '/images/mps_location_palm_beach_hero.jpg',
    primaryCta: {
      label: 'Request Confidential Consultation',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'Call 24/7',
      href: 'tel:9542347231',
      icon: 'phone',
    },
    badges: [
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'map-pin',
        label: 'DELRAY BEACH HQ — 25 MIN SOUTH',
      },
      {
        icon: 'key',
        label: 'ESTATE · SEASON · DISCRETION',
      },
    ],
  },

  // Screen 2: Philosophy Section
  philosophy: {
    variant: 'centered-gold-line',
    headline: 'Palm Beach does not need to be introduced. It needs to be served correctly.',
    paragraph:
      'Palm Beach is a barrier island town of roughly 10,000 permanent residents, a six-month Season of social obligations and some of the most valuable residential estates in the United States. Worth Avenue, The Breakers, The Everglades Club and a private club culture older than most American cities create a social calendar — November through April — that concentrates more high-net-worth individuals, more significant jewelry and art and more high-profile events in one square mile than nearly any other place in the country. Massive Protective Services is headquartered in Delray Beach, 25 minutes south. We serve Palm Beach because the clients who live here deserve a security firm that is already on this end of the county — not dispatching from Broward or deploying from a call center.',
  },

  // Screen 3: Services Grid (What We Offer Here)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Palm Beach Estates, Clubs & Seasonal Residences',
    cardVariant: 'left-gold-border',
    columns: 3,
    cards: [
      {
        icon: 'home',
        title: 'Oceanfront & Lakefront Estate Security',
        description:
          "Armed overnight officers, perimeter patrol and access control for Palm Beach's South Ocean Boulevard and North Lake Way estates — accounting for Atlantic-side and Lake Worth Lagoon-side exposure as a coordinated plan.",
      },
      {
        icon: 'calendar',
        title: 'Seasonal Residence Protection',
        description:
          "Estate protection for Palm Beach's seasonal residents — from arrival in November through departure in April, and quiet coverage for the off-season months when the island empties and properties are most vulnerable.",
      },
      {
        icon: 'sparkles',
        title: 'Private Club & Gala Event Security',
        description:
          "Licensed armed officers for charity galas, private club events and The Season's social calendar — The Breakers, The Everglades Club, Bath & Tennis and private estate entertaining. Discreet, professional, entirely in keeping with the occasion.",
      },
      {
        icon: 'user',
        title: 'Executive & Principal Protection',
        description:
          'Close protection for Palm Beach residents, visiting principals and high-net-worth guests — consistent officer teams, advance work and armed coverage for estate-to-event movements throughout The Season.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for any Palm Beach assignment — overnight residential, event-based or executive. Vetted, licensed and accountable at the agency level.',
      },
      {
        icon: 'key',
        title: 'Absentee & Off-Season Property Coverage',
        description:
          'Scheduled patrol checks, property monitoring and written documentation for Palm Beach estates during the off-season. The island quiets in summer. The properties that remain unoccupied deserve the same standard of coverage.',
      },
    ],
  },

  // Screen 4: The Season
  theSeason: {
    eyebrow: 'THE SEASON',
    headline:
      'November Through April. The Social Calendar That Defines This Island — and Its Security Requirements.',
    paragraphs: [
      "Palm Beach's Season runs from the first charity galas of November through the last of the spring balls in April. In those six months, the island transforms from a quiet residential enclave into one of the most active social environments in the country.",
      'The Red Cross Ball at The Breakers. Private dinners at The Everglades Club. Worth Avenue launches. Art auction previews. Estate parties. Visiting family and security details from out of state. Household staff cycling. Service vendors coming on and off property. The number of people with legitimate access to a Palm Beach estate during The Season is significantly higher than in any other six-month period — and the value of what is on those properties is at its peak.',
      'Seasonal security planning starts before November. We work with Palm Beach estate clients to establish officer coverage, visitor access protocols and event security arrangements ahead of the social calendar — not in response to it. If your Palm Beach engagement is for The Season, the time to contact us is before it begins.',
    ],
    variant: 'cards',
    itemTitleColor: 'white',
    items: [
      {
        icon: 'sparkles',
        title: 'Gala & Charity Event Coverage',
        description:
          "Red Cross Ball, Everglades Club galas, estate entertaining. Licensed officers for every tier of The Season's social calendar.",
      },
      {
        icon: 'home',
        title: 'Heightened Household Access',
        description:
          'More vendors, more staff, more guests — The Season is when estate access complexity peaks. We plan for it, not around it.',
      },
      {
        icon: 'calendar',
        title: 'Advance Seasonal Booking',
        description:
          'Palm Beach Season engagements are planned months ahead. Contact us before November to confirm availability and begin planning.',
      },
    ],
  },

  // Screen 5: Understanding Palm Beach
  understandingPalmBeach: {
    eyebrow: 'UNDERSTANDING PALM BEACH',
    headline: 'An Island With Three Bridges, One Social Season and a Security Profile All Its Own',
    paragraphs: [
      'Palm Beach is connected to the mainland by three bridges — Royal Park Bridge at the center, the Southern Bridge and the Northern Bridge. The island is roughly 14 miles long and less than a mile wide at most points. South Ocean Boulevard runs the eastern oceanfront. North Lake Trail and South Lake Trail run the western Intracoastal side. The residential streets between them carry almost no through traffic and almost no commercial presence.',
      'The security implications of this geography are specific. There are three vehicle entry points onto the island — all of them on roads that can be observed. The residential interior is quiet, private and largely without pedestrian foot traffic. Properties here are rarely visible from the street, which is a deliberate product of the architectural standards Addison Mizner established a century ago.',
      'What makes Palm Beach security planning different from most other markets is the seasonal concentration of risk. The same estate that sits quietly through the summer becomes the site of multiple catered events, visiting guests and rotating household teams between November and April. Coverage that works for July does not work for December — and the firms that treat them the same are the ones that create the gaps.',
    ],
    variant: 'divided-list',
    itemTitleColor: 'white',
    items: [
      {
        icon: 'route',
        title: 'Three-Bridge Island',
        description:
          'Three vehicle access points. Quiet residential interior. Predictable traffic patterns that make both observation and planning more precise than most South Florida markets.',
      },
      {
        icon: 'landmark',
        title: 'Addison Mizner Architecture',
        description:
          'Mediterranean villas, walled estates and setbacks designed for privacy. Security plans that match the character of what is being protected.',
      },
      {
        icon: 'calendar',
        title: 'The Off-Season Opportunity',
        description:
          'May through October, Palm Beach is quiet and largely unoccupied. Absentee property coverage during these months is one of the most-requested services from our island clients.',
      },
    ],
  },

  // Screen 6: Corridor Coverage (Batch 2 Image 1)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Palm Beach Island and the Central Palm Beach Corridor',
    noDividers: true,
    column1: [
      'Palm Beach (North End)',
      'Palm Beach (Midtown / Worth Avenue)',
      'Palm Beach (South End)',
      'South Ocean Boulevard (Oceanfront Estates)',
      'North & South Lake Trail (Lakefront Estates)',
      'Royal Poinciana Way Corridor',
    ],
    column2: [
      'West Palm Beach (adjacent — Royal Park Bridge)',
      'Manalapan (south — adjacent barrier island)',
      'Gulf Stream (south — barrier island corridor)',
      'Ocean Ridge (south)',
      'Delray Beach (25 min south — our HQ)',
      'Palm Beach Island via all three bridge access points',
    ],
    footnote:
      'Palm Beach is 25 minutes from our Delray Beach headquarters. We cover the island and all adjacent barrier island communities as a continuous service area.',
  },

  // Screen 7: How We Work (Batch 2 Image 2)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'A Process That Matches the Standard of This Address',
    steps: [
      {
        number: '1',
        title: 'Private Consultation',
        description:
          'A direct conversation with our team — no sales process, no intake system. You describe your Palm Beach property, your seasonal schedule and what you need. We respond with a written plan, not a quote sheet.',
      },
      {
        number: '2',
        title: 'Estate Assessment',
        description:
          'A property walkthrough of your Palm Beach estate — oceanfront or lakefront, North End or South. Access points, perimeter, seasonal access complexity and household patterns assessed in writing within 48 hours.',
      },
      {
        number: '3',
        title: 'Officer Assignment',
        description:
          'A vetted, licensed officer assigned to your estate and briefed on your property, your household and your expectations before the first shift. Armed or plain-clothes. Overnight or event-based. The same officer, consistently.',
      },
      {
        number: '4',
        title: 'Seasonal Planning & Ongoing Coverage',
        description:
          'A coverage plan built around your Palm Beach calendar — arrival date, event schedule, departure and off-season monitoring. Written reports. Consistent team. NDAs. The same standard from the first November night through the last April morning.',
      },
    ],
  },

  // Screen 8: Why Massive Protective (Batch 2 Image 3)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: '25 Minutes South. Fully Licensed. Built for This Client.',
    variant: 'column-top-borders',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Headquartered in Palm Beach County',
        description:
          'Our Delray Beach headquarters is 25 minutes south of Palm Beach — on the same barrier island corridor. We are a Palm Beach County firm. We do not dispatch from Broward, we do not route through a national call center, and we are already operating in this market every day.',
      },
      {
        icon: 'file-text',
        title: 'Licensed, Verifiable, Armed',
        description:
          'FL Agency License B1400200, verifiable on FDACS. Class G licensed armed officers. Every officer licensed under Chapter 493, Florida Statutes. No subcontracting, no staffing agency fills, no unlicensed personnel on any engagement.',
      },
      {
        icon: 'lock',
        title: 'The Standard This Island Expects',
        description:
          'Palm Beach clients do not need to be sold to. They need to be served correctly. We do not maintain public client lists. We do not discuss engagements. NDAs are signed by every team member. Confidentiality is not a feature — it is the minimum.',
      },
    ],
  },

  // Screen 9: Nearby Coverage (Batch 2 Image 4)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Serving the Palm Beach Barrier Island — North to South',
    cards: [
      {
        title: 'West Palm Beach',
        description:
          'Across the Royal Park Bridge — corporate, residential and events.',
        href: '/locations/west-palm-beach',
      },
      {
        title: 'Manalapan',
        description:
          "Adjacent south — one of Palm Beach County's most private estates towns.",
        href: '/locations/manalapan',
      },
      {
        title: 'Gulf Stream',
        description:
          'Barrier island corridor south — understated, ultra-exclusive.',
        href: '/locations/gulf-stream',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters — 25 minutes south.',
        href: '/locations/delray-beach',
      },
    ],
  },

  // Screen 10: FAQ (Batch 3 Image 1)
  faq: {
    theme: 'dark',
    eyebrow: 'PALM BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Does Massive Protective Services provide security in Palm Beach?',
        answer:
          'Yes. Palm Beach is one of our primary service areas — our Delray Beach headquarters is 25 minutes south, and we treat the island as a core part of our Palm Beach County coverage. We provide estate security, armed officers, seasonal residence coverage, private club event security and executive protection for Palm Beach clients.',
      },
      {
        question: 'Do you provide seasonal security for Palm Beach estates during The Season?',
        answer:
          'Yes. Seasonal estate coverage — from November arrival through April departure, with off-season absentee monitoring — is one of our most common Palm Beach engagements. We build coverage plans around the Palm Beach social calendar, the increased household activity of The Season and the quiet off-season period when properties are most vulnerable. Seasonal engagement planning begins before November.',
      },
      {
        question: 'Can you provide security for charity galas and private club events in Palm Beach?',
        answer:
          "Yes. Licensed event security for The Breakers, private estate entertaining, charity galas and club events is a service we provide specifically for Palm Beach's Season calendar. We deploy discreet, licensed officers who are appropriate for the occasion — not uniformed guard staff. Early engagement is recommended for high-profile December and January events.",
      },
      {
        question: "Do you provide absentee property coverage during Palm Beach's off-season?",
        answer:
          'Yes. Scheduled property patrols, monitoring coordination and written visit documentation for Palm Beach estates during May through October is available as an ongoing service. Many of our Palm Beach clients retain us year-round precisely because the off-season is when properties are most at risk.',
      },
      {
        question: 'Do you sign NDAs for Palm Beach clients?',
        answer:
          'Yes. Non-disclosure agreements — covering every member of our team, the client\'s identity and all engagement details — are available as standard and signed before any engagement begins. We maintain no public client lists. Palm Beach clients are never referenced in any context without explicit written consent.',
      },
    ],
  },

  // Screen 11: Related Locations (Batch 3 Image 2)
  nearbyLocations: {
    eyebrow: 'RELATED LOCATIONS',
    places: [
      {
        title: 'Manalapan',
        description: 'The most private estate town adjacent south on the barrier island.',
        href: '/locations/manalapan',
        linkLabel: 'View Coverage',
      },
      {
        title: 'West Palm Beach',
        description: 'Across the bridge — corporate, residential and event security.',
        href: '/locations/west-palm-beach',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Delray Beach',
        description: 'Our headquarters city — the full suite of MPS services.',
        href: '/locations/delray-beach',
        linkLabel: 'View Coverage',
      },
    ],
  },
};

