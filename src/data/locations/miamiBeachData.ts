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

export interface MiamiBeachPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  privateIslands: LocationSplitSectionData;
  artBasel: LocationSplitSectionData;
  understanding: LocationSplitSectionData;
  coverageCorridor: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  relatedLocations: LocationNearbyLocationsData;
}

export const miamiBeachData: MiamiBeachPageData = {
  metaTitle: 'Private Security & Celebrity Protection Miami Beach | MPS',
  metaDescription:
    "Armed security, VIP protection and estate services for Miami Beach's private island residences, luxury hotel clientele and Art Basel event season. FL License B1400200.",

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Miami Beach' },
    ],
    locationName: 'Miami Beach',
    eyebrow: 'MIAMI BEACH / SOUTH FLORIDA',
    headline: 'Private Security & Celebrity Protection in Miami Beach, FL',
    subtitle:
      "Armed security, VIP protection and estate services for Miami Beach's private island residences, luxury hotel clientele and Art Basel event season — from a licensed South Florida agency.",
    bgImage: '/images/mps_location_miami_beach_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL 24/7',
      href: 'tel:9542347231',
    },
    badges: [
      { icon: 'file-text', label: 'FL LICENSE B1400200' },
      { icon: 'shield-check', label: 'ARMED & LICENSED — CLASS G OFFICERS' },
      { icon: 'lock', label: 'STAR ISLAND · ART BASEL · CELEBRITY PROTECTION' },
    ],
  },

  // Screen 2: Statement / Philosophy Section
  philosophy: {
    variant: 'centered-gold-line',
    theme: 'dark',
    headline:
      "Star Island. Art Basel. The Setai. Faena. Miami Beach doesn’t need to be explained — it needs to be secured properly.",
    paragraph:
      'Miami Beach is one of the most recognizable addresses in the world — and one of the most complex security environments in South Florida. Private island estates on Star Island, Palm Island and Hibiscus Island sit behind gates that face some of the highest-profile foot and boat traffic in Florida. Art Basel Miami Beach brings 80,000 visitors and the most concentrated gathering of UHNW clients in the hemisphere every December. Hotel arrivals at The Setai, Faena and Fontainebleau happen in front of cameras, crowds and paparazzi. Massive Protective Services is a licensed, armed security firm based in Delray Beach, one hour north. We serve Miami Beach clients who need a firm that is equipped for this environment — armed, discreet, experienced with celebrity and VIP protection, and already operating in South Florida at this level.',
  },

  // Screen 3: Scope Grid (WHAT WE OFFER HERE)
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Miami Beach Estates, Events & VIP Clientele',
    cardVariant: 'gold-title',
    columns: 3,
    cards: [
      {
        icon: 'home',
        title: 'Private Island Estate Security',
        description:
          'Armed overnight officers and perimeter coverage for Star Island, Palm Island, Hibiscus Island and La Gorce Island estates — including gate security, waterside exposure planning and access control for properties surrounded on multiple sides by water.',
      },
      {
        icon: 'user-check',
        title: 'Celebrity & VIP Protection',
        description:
          'Close protection for Miami Beach’s celebrity residents, visiting A-list clients and high-profile principals. Consistent armed officer teams, hotel arrival coordination, advance work and media management — discreet by design.',
      },
      {
        icon: 'building',
        title: 'Hotel Arrival & Departure Security',
        description:
          'Armed escort and arrival/departure coordination for clients staying at The Setai, Faena Hotel, Fontainebleau, Eden Roc, 1 Hotel South Beach and W South Beach. Lobby coordination, vehicle staging and media presence management.',
      },
      {
        icon: 'sparkles',
        title: 'Art Basel & Event Season Security',
        description:
          'Armed security for Art Basel Miami Beach, private collector dinners, gallery events and satellite fairs. Principal protection for high-value collectors, gallerists and UHNW attendees during the December event window and beyond.',
      },
      {
        icon: 'briefcase',
        title: 'Executive Protection',
        description:
          'Close protection for Miami Beach-based executives, international principals and high-net-worth residents with South Florida schedules — including secure driving, advance work and consistent officer assignment from arrival to departure.',
      },
      {
        icon: 'users',
        title: 'Private Event Security at Estates & Venues',
        description:
          'Residential galas, private dinners and high-profile events on Star Island and throughout Miami Beach — secured by licensed, discreet officers. Guest management, perimeter coverage and a presence that protects without disrupting.',
      },
    ],
  },

  // Screen 4: Private Island Security (Top-Full Image + Split 4 Paragraphs & 3 Cards)
  privateIslands: {
    eyebrow: 'PRIVATE ISLAND SECURITY',
    headline:
      'Star Island. Palm Island. Hibiscus Island. A Security Environment Unlike Any Other in Florida.',
    image: {
      src: '/images/mps_location_miami_beach_islands.jpg',
      alt: 'Star Island Palm Island Biscayne Bay private island estate in Miami Beach at twilight',
      caption: 'Private-island atmosphere · Imagined setting, not a protected client property.',
    },
    imagePosition: 'top-full',
    paragraphs: [
      'Star Island is a 34-acre private gated island connected to Miami Beach by a single causeway. Its 34 estate lots have housed some of the most recognizable names in entertainment, sports and business. Access is controlled at a single guard gate — but the water surrounding the island is open, and Biscayne Bay offers boat access at every property.',
      'Palm Island and Hibiscus Island sit adjacent — two more private islands with estate-level residences, Biscayne Bay exposure on all sides and the same single-point road access that makes vehicle screening critical but waterside access unpoliceable by the gate alone.',
      'La Gorce Island rounds out Miami Beach’s private island residential community. Each island has a distinct layout, a different mix of seasonal and permanent residents, and a security profile that changes with the time of year — quiet during summer months, high-intensity during Art Basel, boat show and event season.',
      'Massive Protective Services builds island estate security plans that account for all of this — not just the gatehouse, but the dock, the waterline and the quiet hours after midnight when Miami Beach is loud and the islands are supposed to be private.',
    ],
    items: [
      {
        icon: 'compass',
        title: 'Star Island',
        description:
          '34 estate lots, single causeway access, Biscayne Bay on all sides. Gate coverage alone is not a security plan here.',
      },
      {
        icon: 'waves',
        title: 'Water Perimeter',
        description:
          'Palm Island, Hibiscus Island and Star Island all have open water exposure. Armed perimeter coverage accounts for dock access, not just road access.',
      },
      {
        icon: 'lock',
        title: 'Seasonal & Year-Round Coverage',
        description:
          'Event season (Art Basel, boat show, Ultra) brings significant elevated risk. Our island security plans account for the calendar, not just the property.',
      },
    ],
  },

  // Screen 5: Art Basel & Event Season (3 Paragraphs + Stats on Left, Right Image + 3 Cards)
  artBasel: {
    eyebrow: 'ART BASEL & EVENT SEASON',
    headline:
      'The Most Concentrated UHNW Gathering in the Western Hemisphere Happens Every December in Miami Beach.',
    image: {
      src: '/images/mps_location_miami_beach_basel.jpg',
      alt: 'Art Basel private collector dinner atmosphere with fine art and candlelit dining',
      caption: 'Art Basel private collector dinner atmosphere · Complete privacy and discretion.',
    },
    imagePosition: 'right',
    paragraphs: [
      'Art Basel Miami Beach brings 80,000 visitors, 250+ galleries and billions of dollars in artwork to Miami Beach Convention Center and a constellation of satellite events, collector dinners and private parties across South Beach and Mid-Beach every December. The week attracts more high-net-worth collectors, gallerists, celebrities and international buyers in one concentrated geography than nearly any other event in the world.',
      'For clients attending or hosting during Art Basel week, the security profile changes significantly. Hotel arrivals at The Setai and Faena involve media and crowds. Private collector dinners require discreet armed officer presence. Satellite fairs and gallery events draw high-profile attendees who may not have advance security in place. Estate parties on Star Island require full perimeter management for guest lists of 50–500.',
      'Massive Protective Services books Art Basel engagements months in advance. If you have a December presence in Miami Beach, this is the conversation to start now.',
    ],
    stats: [
      {
        value: '80,000+',
        label: 'Art Basel Miami Beach annual attendance',
      },
      {
        value: '250+',
        label: 'Galleries represented',
      },
      {
        value: 'December',
        label: 'Primary event window — advance booking required.',
      },
    ],
    items: [
      {
        icon: 'user-check',
        title: 'Principal Protection at Basel',
        description:
          'Armed close protection for collectors, gallerists and UHNW attendees during Art Basel week — hotel to fair to private dinner and back.',
      },
      {
        icon: 'wine',
        title: 'Private Collector Dinners',
        description:
          'Estate-level dinner security for Art Basel satellite events — discreet armed officers, guest management, perimeter coverage.',
      },
      {
        icon: 'map-pin',
        title: 'Star Island Event Security',
        description:
          'Full perimeter and access control for Art Basel parties and private events on Star Island and throughout Miami Beach.',
      },
    ],
  },

  // Screen 6: Understanding Miami Beach (Image 1)
  understanding: {
    eyebrow: 'UNDERSTANDING MIAMI BEACH',
    headline:
      'South Beach, Mid-Beach, the Islands — Each Zone Has a Different Security Profile',
    paragraphs: [
      'Miami Beach is not one security environment. South Beach — Ocean Drive, Collins, Washington Avenue — is one of the most visited urban corridors in the country. Security here is about crowd management, media exposure and high-profile hotel logistics. It is loud, public and uncontrollable from a perimeter standpoint.',
      'Mid-Beach is quieter — Faena District, the Surfside edge, the Fontainebleau corridor. A mix of luxury hotels, residential towers and cultural venues. A different pace, a different client profile, a slightly more controllable environment.',
      'The private islands — Star, Palm, Hibiscus, La Gorce — are entirely residential and entirely different from either zone above. These are the estate clients. Gate, waterline, dock, grounds — managed like an ultra-high-value property in a location that happens to be surrounded by water.',
      'North Beach, Bal Harbour adjacent and the quieter residential neighborhoods above 63rd Street represent a growing year-round residential market where the security need is more traditional estate coverage and less event-driven.',
    ],
    items: [
      {
        icon: 'building',
        title: 'South Beach',
        description:
          'Ocean Drive, Collins, Washington. High foot traffic, hotel-heavy, celebrity arrivals and media-saturated. Security plans here are about control in a public environment.',
      },
      {
        icon: 'building',
        title: 'Mid-Beach / Faena',
        description:
          'Faena Hotel, Eden Roc, Fontainebleau corridor. Quieter luxury, easier perimeter management, premium hotel clientele.',
      },
      {
        icon: 'palmtree',
        title: 'The Private Islands',
        description:
          'Star Island, Palm Island, Hibiscus Island, La Gorce. Pure residential, gate and waterline. The most security-intensive residential addresses in South Florida.',
      },
    ],
  },

  // Screen 7: Coverage Area (Image 2)
  coverageCorridor: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Miami Beach and the Biscayne Bay Corridor',
    column1: [
      'Star Island',
      'Palm Island',
      'Hibiscus Island',
      'La Gorce Island',
      'South Beach (SoBe)',
      'Mid-Beach / Faena District',
    ],
    column2: [
      'North Beach',
      'Surfside (adjacent north)',
      'Bal Harbour (adjacent north)',
      'Miami Beach Convention Center area',
      'Fontainebleau / Eden Roc Corridor',
      'Aventura (20 min north)',
    ],
    footnote:
      'We serve Miami Beach from our Delray Beach headquarters — one hour north via I-95. For Art Basel and event season, advance booking is required and available from months prior.',
    footnotePlacement: 'outside',
    variant: 'boxed',
  },

  // Screen 8: How We Work (Image 3 Top)
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'Planned. Professional. Completely Confidential.',
    steps: [
      {
        number: '01',
        title: 'Confidential Consultation',
        description:
          'Direct contact with our team — no call center, no intake process. Describe your Miami Beach situation, whether it’s a Star Island estate, an Art Basel week, a hotel arrival or ongoing executive coverage. We respond with a plan.',
      },
      {
        number: '02',
        title: 'Advance Planning',
        description:
          'For events: advance work begins weeks ahead. For estate security: property walkthrough, water perimeter assessment and access control review. For hotel arrivals: venue coordination, vehicle staging and lobby briefing.',
      },
      {
        number: '03',
        title: 'Officer Deployment',
        description:
          'Vetted, licensed officers matched to your assignment and briefed before arrival. Armed or plain-clothes. Close protection or perimeter. Consistent team, not a rotation.',
      },
      {
        number: '04',
        title: 'Documented, Discreet Coverage',
        description:
          'Written reports. NDA covering every person involved. No social media. No public references. The same professional standard whether it is a quiet Tuesday night on Star Island or the first night of Art Basel.',
      },
    ],
  },

  // Screen 9: Why Massive Protective (Image 3 Bottom)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'South Florida Licensed. Celebrity-Ready. Event-Season Experienced.',
    theme: 'dark',
    pillars: [
      {
        icon: 'file-text',
        title: 'South Florida Licensed & Based',
        description:
          'FL Agency License B1400200. Every officer licensed under Chapter 493, Florida Statutes. Headquartered in Delray Beach — already operating in this market, not dispatching from outside it.',
      },
      {
        icon: 'user-check',
        title: 'VIP & Celebrity Protection Experience',
        description:
          'Close protection, hotel arrival coordination, media management and advance work for high-profile clients is a core MPS service — not an add-on. Our VIP protection team is built for exactly this environment.',
      },
      {
        icon: 'calendar',
        title: 'Event-Season Ready',
        description:
          'Art Basel, boat show season, Ultra, South Beach Wine & Food — Miami Beach’s event calendar requires advance booking and dedicated capacity. We plan for these windows months ahead. Availability during peak season is not guaranteed without advance engagement.',
      },
    ],
  },

  // Screen 10: Nearby Coverage (Image 4)
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Miami-Dade and Broward — Full South Florida Coverage',
    cards: [
      {
        title: 'Aventura',
        description: '20 min north — international clientele, luxury towers, executive protection.',
        href: '/locations/aventura',
      },
      {
        title: 'Miami',
        description: 'Adjacent mainland — estates, corporate security and major events.',
        href: '/locations/miami',
      },
      {
        title: 'Bal Harbour',
        description: 'Adjacent north — ultra-luxury oceanfront community.',
        href: '/locations/bal-harbour',
      },
      {
        title: 'Fort Lauderdale',
        description: 'Broward County — yacht security, estates and corporate coverage.',
        href: '/locations/fort-lauderdale',
      },
    ],
  },

  // Screen 12: Miami Beach Security FAQ (Uploaded Image 1)
  faq: {
    eyebrow: 'MIAMI BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Does Massive Protective Services operate in Miami Beach?',
        answer:
          'Yes. Miami Beach is one of our primary Miami-Dade service areas. We provide celebrity and VIP protection, private island estate security, hotel arrival coverage, Art Basel security and executive protection for Miami Beach clients — including Star Island, Palm Island, Hibiscus Island, South Beach, Mid-Beach and the Faena District.',
      },
      {
        question: "Do you provide security for Star Island and Miami Beach's private islands?",
        answer:
          'Yes. Private island estate security — accounting for gate access, water perimeter, dock exposure and residential coverage — is a specialized service we provide for Star Island, Palm Island, Hibiscus Island and La Gorce Island clients. The security profile of these properties is materially different from mainland estates and we plan accordingly.',
      },
      {
        question: 'Do you cover Art Basel Miami Beach?',
        answer:
          'Yes. We provide security during Art Basel Miami Beach for collectors, gallerists and UHNW attendees — including principal protection, private collector dinner security, estate event coverage and hotel arrival coordination. Art Basel engagements require advance booking. Contact us as early as possible for December availability.',
      },
      {
        question: 'Do you offer celebrity and VIP protection in Miami Beach?',
        answer:
          'Yes. Close protection for celebrities, entertainers, athletes and high-profile principals — including hotel arrivals at The Setai, Faena, Fontainebleau and other Miami Beach properties — is one of our core services. Our VIP protection team operates with strict NDAs, no public client lists and no social media presence around any engagement.',
      },
      {
        question: 'How far is your headquarters from Miami Beach?',
        answer:
          'Our Delray Beach headquarters is approximately one hour from Miami Beach via I-95. For planned engagements — estate retainers, Art Basel coverage, executive protection — distance has no bearing on service quality. For time-sensitive situations, we respond as quickly as possible and maintain Miami-Dade area capacity during peak season.',
      },
    ],
  },

  // Screen 13: Related Locations (Uploaded Image 2)
  relatedLocations: {
    eyebrow: 'RELATED LOCATIONS',
    places: [
      {
        title: 'Miami',
        description: 'Adjacent mainland — estates, corporate offices and major events.',
        href: '/locations/miami',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Aventura',
        description: 'International clientele, luxury towers and executive protection.',
        href: '/locations/aventura',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Bal Harbour',
        description: 'Ultra-luxury oceanfront community adjacent north.',
        href: '/locations/bal-harbour',
        linkLabel: 'View Coverage',
      },
    ],
  },
};


