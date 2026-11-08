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

export interface SarasotaPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  barrierIslands: LocationSplitSectionData;
  culturalSeason: LocationSplitSectionData;
  understandingSarasota: LocationSplitSectionData;
  corridorCoverage: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const sarasotaData: SarasotaPageData = {
  metaTitle: 'Estate Protection & Security Sarasota | MPS',
  metaDescription:
    "Armed security and executive protection for Sarasota's barrier island estates, arts season events and Gulf Coast residences — a licensed South Florida agency that travels for the right client.",

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Sarasota' },
    ],
    locationName: 'Sarasota',
    eyebrow: '— SARASOTA, FLORIDA',
    headline: 'Private Security & Estate Protection in Sarasota, FL',
    subtitle:
      "Armed security and executive protection for Sarasota's barrier island estates, arts season events and Gulf Coast residences — a licensed South Florida agency that travels for the right client.",
    bgImage: '/images/mps_location_sarasota_hero.jpg',
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
        label: 'SERVING FLORIDA STATEWIDE',
      },
      {
        icon: 'waves',
        label: 'LONGBOAT KEY · CASEY KEY · GULF COAST ESTATES',
      },
    ],
  },

  // Screen 2: Philosophy Section
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Sarasota has the Ringling Museum, the Van Wezel and some of the most private barrier islands in Florida. Most security firms have not found any of them.',
    paragraph:
      "Sarasota sits on Florida's Gulf Coast — a city of arts institutions, barrier island estates and a resident profile built around retiring executives, arts patrons and seasonal families from Chicago, Detroit and the Midwest who have been coming here for generations. Casey Key, Longboat Key and Bird Key are among the most exclusive residential addresses in the state. The cultural season — October through April — fills the Van Wezel, the Ringling and dozens of private galas with the same concentration of high-net-worth individuals that Palm Beach sees in its Season. Massive Protective Services is headquartered in Delray Beach on Florida's east coast. We are a statewide firm. We travel to Sarasota for clients who require the standard we provide — armed, licensed, professional and completely discreet.",
  },

  // Screen 3: Services Grid (What We Offer Here)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Sarasota Estates, Events & Gulf Coast Residences',
    cardVariant: 'left-gold-border',
    columns: 3,
    cards: [
      {
        icon: 'home',
        title: 'Barrier Island Estate Security',
        description:
          'Armed overnight officers and perimeter coverage for Casey Key, Longboat Key and Bird Key estates — Gulf of Mexico-side and Sarasota Bay-side exposure planned as one coordinated security arrangement.',
      },
      {
        icon: 'calendar',
        title: 'Seasonal Residence Protection',
        description:
          "Estate coverage for Sarasota's October-through-April seasonal residents — arrival coordination, household access protocols, event-period heightened coverage and off-season property monitoring for estates left unoccupied during summer.",
      },
      {
        icon: 'sparkles',
        title: 'Cultural Season Event Security',
        description:
          'Licensed armed officers for Ringling Museum galas, Van Wezel Performing Arts events, Sarasota Opera season, art auction previews and private estate entertaining during the arts season. Discreet, professional and appropriate for the occasion.',
      },
      {
        icon: 'user',
        title: 'Executive & Principal Protection',
        description:
          'Close protection for Sarasota-based executives, retiring principals and visiting UHNW clients — consistent officer teams, advance work and armed coverage for Gulf Coast movements and travel to and from Tampa, Fort Myers and Miami.',
      },
      {
        icon: 'file-text',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for any Sarasota assignment — overnight residential, event-based or executive. Licensed, vetted and deployable across the Gulf Coast.',
      },
      {
        icon: 'key',
        title: 'Absentee & Off-Season Property Coverage',
        description:
          'Regular scheduled patrols, property monitoring and written documentation for Sarasota-area estates during the summer off-season. Many Sarasota clients leave from April to October — the properties that remain deserve consistent professional coverage.',
      },
    ],
  },

  // Screen 4: Casey Key & Longboat Key
  barrierIslands: {
    eyebrow: 'CASEY KEY & LONGBOAT KEY',
    headline:
      "Two of Florida's Most Private Barrier Islands. Most Security Firms Have Never Heard of Either.",
    paragraphs: [
      'Casey Key is a narrow barrier island south of Sarasota — roughly 8 miles long, accessible by a single drawbridge at each end, with fewer than 100 residential properties along its entire length. There is no commercial development on Casey Key. No hotels, no restaurants, no foot traffic. The residents here include some of the most low-profile, most security-conscious UHNW families in Florida — people who chose this island precisely because it does not appear in the kinds of publications that mention barrier island estates.',
      'Longboat Key sits north of Sarasota — a longer, more developed barrier island, but still predominantly residential with very limited commercial presence. The northern half of Longboat Key is among the most exclusive residential addresses on Florida\'s Gulf Coast, with large estate lots, Gulf-facing properties and Sarasota Bay views that attract the same Midwest and Northern money that built Sarasota\'s cultural institutions.',
      'Bird Key is a small island community in Sarasota Bay — gated, residential and within minutes of downtown Sarasota — popular with the kind of executive who wants bay-front estate living and walkable access to the city\'s cultural institutions.',
      'Security planning for these islands requires understanding that the geography itself defines the access profile. Single-bridge access points. No through traffic. Quiet residential character that makes unusual activity visible — but also makes response times longer than in a denser urban environment. We plan for that.',
    ],
    variant: 'cards',
    itemTitleColor: 'gold',
    items: [
      {
        icon: 'palmtree',
        title: 'Casey Key',
        description:
          'Fewer than 100 homes. One drawbridge at each end. No commercial presence. One of the most genuinely private residential addresses in the state of Florida.',
      },
      {
        icon: 'waves',
        title: 'Longboat Key',
        description:
          '8+ miles of Gulf Coast barrier island. Northern end estates among the most valuable in Sarasota County. Gulf-side and Bay-side perimeter planning required.',
      },
      {
        icon: 'home',
        title: 'Bird Key',
        description:
          'Gated island community in Sarasota Bay — bay-front estates, immediate downtown access and a quiet residential character that suits the arts patron profile of Sarasota\'s UHNW community.',
      },
    ],
  },

  // Screen 5: The Cultural Season
  culturalSeason: {
    eyebrow: 'THE CULTURAL SEASON',
    headline:
      "October Through April. Sarasota's Arts Calendar Brings the Same Concentration of High-Net-Worth Clients That Palm Beach's Galas Do — With Less Security Coverage.",
    paragraphs: [
      'Sarasota is called the Cultural Capital of Florida — and the title holds. The John & Mable Ringling Museum of Art hosts some of the most prestigious private galas in the state. The Van Wezel Performing Arts Hall draws international artists and a donor base that reads like a roster of retiring Fortune 500 executives. The Sarasota Opera, the Sarasota Film Festival and a constellation of private collector events and art auction previews from October through April create a cultural calendar that concentrates significant wealth in a relatively small geographic area.',
      'Unlike Palm Beach — where major security firms have at least some presence during The Season — Sarasota\'s cultural events are almost entirely unserved by professional armed security at the principal level. Event staff, venue security and local police cover the doors. Nobody is protecting the collector who brought $40,000 in jewelry to the Ringling gala. Nobody is running advance work for the Chicago family that flies in for opening night. That gap is exactly where Massive Protective Services operates.',
    ],
    variant: 'divided-list',
    itemTitleColor: 'gold',
    items: [
      {
        icon: 'landmark',
        title: 'Ringling Museum Galas',
        description:
          "Principal protection and event security for the John & Mable Ringling Museum of Art's private events — among the most prestigious in Sarasota's cultural calendar.",
      },
      {
        icon: 'sparkles',
        title: 'Van Wezel & Performing Arts',
        description:
          'Armed officer coverage for opening nights, donor events and high-profile performing arts season engagements at the Van Wezel and surrounding private entertainment.',
      },
      {
        icon: 'crosshair',
        title: 'Art Auctions & Collector Events',
        description:
          'Discreet armed coverage for private art auction previews, collector dinners and cultural philanthropy events where high-value art and significant jewelry are present.',
      },
    ],
  },

  // Screen 6: Understanding Sarasota
  understandingSarasota: {
    eyebrow: 'UNDERSTANDING SARASOTA',
    headline:
      'A Gulf Coast City With a Midwest Soul and a Security Market That Has Not Caught Up',
    paragraphs: [
      "Sarasota's UHNW resident profile is different from Palm Beach or Miami Beach. The money here is older, quieter and more privacy-focused. Retiring CEOs from Chicago and Detroit who have summered on Casey Key for 20 years. Arts patrons who endowed a theater and don't want their name on the building. Families from Milwaukee and Cleveland who bought a Longboat Key estate decades ago and have watched the Gulf from the same dock every January since.",
      'This client base does not advertise itself. It does not appear in the same social pages as Palm Beach. And it has been chronically underserved by professional security because most firms — even the good ones — have focused their Gulf Coast presence on Tampa and Naples, not the Sarasota corridor.',
      'The result is a security market where the wealth is real, the risk is present and the professional options are genuinely limited. Massive Protective Services serves Sarasota as a statewide engagement — we travel here for the right client, we plan well in advance and we bring the same licensed, armed, discreet standard that we maintain across our South Florida coverage areas.',
    ],
    variant: 'cards',
    itemTitleColor: 'gold',
    items: [
      {
        icon: 'landmark',
        title: 'Midwest Old Money',
        description:
          "Sarasota's UHNW resident profile is anchored by retiring executives and arts patrons from the Midwest — Chicago, Detroit, Milwaukee. Private, low-profile and chronically underserved by professional security.",
      },
      {
        icon: 'waves',
        title: 'Gulf Coast Geography',
        description:
          'Sarasota Bay, the Gulf of Mexico and a chain of barrier islands create a waterfront security profile that requires island-specific planning — same as the east coast, different water.',
      },
      {
        icon: 'route',
        title: 'Statewide Engagement',
        description:
          'We are headquartered in Delray Beach. Sarasota is a statewide engagement. We travel here for planned, ongoing and event-based assignments — and we plan accordingly, not reactively.',
      },
    ],
  },

  // Screen 7: Coverage Area (Corridor)
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Sarasota and the Gulf Coast Barrier Island Corridor',
    noDividers: true,
    column1: [
      'Casey Key',
      'Longboat Key (North & South)',
      'Bird Key',
      'Siesta Key (estate residences)',
      'Lido Key / St. Armands Circle',
      'Downtown Sarasota',
    ],
    column2: [
      'Gulf Gate / South Sarasota',
      'Osprey (adjacent south — Casey Key access)',
      'Venice (adjacent south)',
      'Bradenton / Anna Maria Island (adjacent north)',
      'Tampa / St. Pete (60 min north — same engagement corridor)',
      'Naples / Fort Myers (90 min south — same engagement corridor)',
    ],
    footnote:
      'Sarasota engagements are planned in advance from our Delray Beach headquarters. We are available for ongoing seasonal retainers, event-specific deployments and executive protection assignments throughout the Gulf Coast corridor.',
    footnotePlacement: 'outside',
  },

  // Screen 8: How We Work for Sarasota Clients (Process)
  process: {
    eyebrow: 'HOW WE WORK FOR SARASOTA CLIENTS',
    headline: 'Planned in Advance. Executed at the Same Standard as Every Engagement.',
    steps: [
      {
        number: '1',
        title: 'Consultation',
        description:
          'A direct conversation with our team — by phone or email. Describe your Sarasota property, your seasonal schedule or your event. We assess the engagement and respond with a plan. Distance is not a barrier to planning — it is a reason to plan earlier.',
      },
      {
        number: '2',
        title: 'Pre-Deployment Planning',
        description:
          'For estate assignments: remote property review and advance walkthrough. For seasonal coverage: arrival date, household access protocols, event windows and off-season monitoring plan established in advance. For events: venue coordination and principal briefing before the first officer arrives.',
      },
      {
        number: '3',
        title: 'Officer Deployment',
        description:
          'Vetted, licensed officers deployed to Sarasota for your assignment — briefed on your specific property or event before arrival. Armed or plain-clothes. Overnight or event-based. The same vetted standard as every MPS engagement regardless of geography.',
      },
      {
        number: '4',
        title: 'Documented Coverage',
        description:
          'Written shift reports. Consistent officer assignments where possible. NDA covering every team member. Sarasota clients receive exactly the same professional standard as our Delray Beach clients — the only difference is the drive.',
      },
    ],
  },

  // Screen 9: Why Massive Protective
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'Florida Licensed. Statewide. The Standard the Gulf Coast Has Been Missing.',
    variant: 'column-top-borders',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Florida Licensed, Not Local-Only',
        description:
          'FL Agency License B1400200 is a statewide license. We are not limited to Palm Beach County or Broward. We serve Sarasota, Naples, Tampa and any other Florida market where the right client requires the standard we provide. Licensed, accountable and deployable.',
      },
      {
        icon: 'file-text',
        title: 'Armed, Vetted, Professional',
        description:
          'Class G licensed armed officers. Every officer vetted and licensed under Chapter 493, Florida Statutes, verifiable on FDACS. No staffing agency fills, no subcontracting. The same people, the same standard, whether the engagement is in Delray Beach or on Casey Key.',
      },
      {
        icon: 'lock',
        title: 'The Gap in This Market Is Real',
        description:
          'Sarasota is one of the wealthiest Gulf Coast cities in Florida. Its barrier islands are among the most private residential addresses in the state. Its arts season brings a concentrated UHNW audience every year. And professional armed security at the principal level has never been properly served here. That is the gap. That is why we are here.',
      },
    ],
  },

  // Screen 10: Nearby Coverage
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Gulf Coast Florida and Beyond',
    cards: [
      {
        title: 'Naples',
        description:
          '90 min south — Gulf Coast estates, arts season and UHNW residential.',
        href: '/locations/naples',
      },
      {
        title: 'Tampa',
        description:
          '60 min north — corporate, events and Bay Area executives.',
        href: '/contact',
      },
      {
        title: 'Fort Myers',
        description:
          'Adjacent south — Gulf Coast estate and seasonal coverage.',
        href: '/contact',
      },
      {
        title: 'Delray Beach',
        description:
          'Our headquarters — East Coast Florida operations.',
        href: '/locations/delray-beach',
      },
    ],
  },

  // Screen 11 (Batch 3 Image 2): FAQ Section
  faq: {
    eyebrow: 'SARASOTA SECURITY FAQ',
    headline: 'Your questions, answered.',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Does Massive Protective Services serve Sarasota, FL?',
        answer:
          'Yes. Sarasota is part of our statewide Florida coverage. We are headquartered in Delray Beach and travel to Sarasota for estate security retainers, seasonal assignments, cultural season event security and executive protection engagements. Sarasota clients should plan engagements in advance — we are not a walk-in service for this market, but we are fully available for the right planned engagement.',
      },
      {
        question: 'Do you provide security for Casey Key and Longboat Key estates?',
        answer:
          'Yes. Barrier island estate security — accounting for single-bridge access, Gulf-side and Bay-side perimeter exposure and the low-traffic, high-value residential character of both islands — is one of our primary Sarasota service offerings. Casey Key and Longboat Key both require island-specific planning that most security firms in this market have not developed.',
      },
      {
        question: 'Do you cover Sarasota cultural events, including Ringling Museum galas?',
        answer:
          "Yes. Armed security for Sarasota's cultural season — Ringling Museum events, Van Wezel Performing Arts, Sarasota Opera season and private collector events — is available for principals, estate hosts and attending UHNW clients. Cultural season bookings should be made well in advance of the October–April window.",
      },
      {
        question: 'How do you handle security engagements that far from your Delray Beach headquarters?',
        answer:
          'Honestly and in advance. Sarasota is a planned market for us — not a reactive one. Officers are deployed with full briefings and proper preparation. We do not send someone to Sarasota on short notice and call it professional security. Engagements here are planned, coordinated and executed at the same standard as every MPS assignment regardless of geography.',
      },
      {
        question: 'Do you sign NDAs for Sarasota clients?',
        answer:
          "Yes. Non-disclosure agreements covering our entire team, the client's identity and all engagement details are standard on every MPS engagement — including Sarasota. We do not publicly reference any clients or any Gulf Coast engagements without explicit written consent.",
      },
    ],
  },

  // Screen 12 (Batch 3 Image 3): Related Locations
  nearbyLocations: {
    eyebrow: 'RELATED LOCATIONS',
    places: [
      {
        title: 'Naples',
        description: 'Gulf Coast estate and arts season security — 90 minutes south.',
        href: '/locations/naples',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Tampa',
        description: 'Bay Area corporate and event security — 60 minutes north.',
        href: '/contact',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Palm Beach',
        description: 'Our flagship east coast estate market — The Season and barrier island coverage.',
        href: '/locations/palm-beach',
        linkLabel: 'View Coverage',
      },
    ],
  },
};


