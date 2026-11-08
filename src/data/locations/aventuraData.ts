import { LocationPageConfig } from '@/components/locations/types';

export const aventuraData: LocationPageConfig = {
  metaTitle: 'Private Security & Executive Protection Aventura | MPS',
  metaDescription:
    'Licensed Florida armed security and executive protection for Aventura luxury high-rises, Williams Island, Turnberry Isle, international executives & waterfront estates.',

  // Screen 1: Hero Section
  hero: {
    locationName: 'Aventura',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Aventura' },
    ],
    eyebrow: '— AVENTURA / SOUTH FLORIDA',
    headline: 'Private Security & Executive Protection in Aventura, FL',
    subtitle:
      "Armed security and executive protection for Aventura's luxury residences, international executives and Intracoastal waterfront communities — licensed, discreet, South Florida-based.",
    bgImage: '/images/mps_location_aventura_hero.jpg',
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
        icon: 'shield-check',
        label: 'ARMED & LICENSED — CLASS G OFFICERS',
      },
      {
        icon: 'globe',
        label: 'INTERNATIONAL CLIENTELE · ESTATES · EXECUTIVE PROTECTION',
      },
    ],
  },

  // Screen 2: High-Net-Worth Profile & Philosophy Statement
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Aventura has one of the highest concentrations of international high-net-worth residents in South Florida. Most security firms here have never left the lobby.',
    paragraph:
      "Aventura sits at the northern edge of Miami-Dade County — a city of luxury towers, Intracoastal waterfront communities and a resident population that includes South American business executives, international investors, cruise industry principals and seasonal UHNW residents from across the world. Williams Island, Porto Vita, Turnberry Isle and The Waterways are not estate neighborhoods in the traditional sense — they're vertical communities where security requirements look entirely different from a single-family home. Massive Protective Services is a licensed, armed security firm based in Delray Beach, 45 minutes north. We serve Aventura clients who need a firm that understands the specific profile of this city — international, private and working at a level that demands real professional security, not a guard service.",
  },

  // Screen 3: What We Offer Here Grid
  servicesGrid: {
    eyebrow: 'WHAT WE OFFER HERE',
    headline: 'Security Services for Aventura Residences, Executives & Communities',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'building',
        title: 'Luxury Residence & High-Rise Security',
        description:
          "Armed officer coverage for Aventura's luxury condominiums, penthouse residences and Intracoastal tower communities — including Williams Island, Porto Vita, Turnberry Isle and The Waterways. Floor-specific, building-aware and completely discreet.",
      },
      {
        icon: 'executive',
        title: 'Executive Protection',
        description:
          'Close protection for Aventura-based executives, international principals and high-net-worth residents. Consistent armed officer teams, advance work and secure driving — for daily routines and elevated-risk travel within South Florida.',
      },
      {
        icon: 'globe',
        title: 'International Client Protection',
        description:
          'Specialized security for international clients — South American executives, Israeli snowbirds, European investors and visiting principals with complex itineraries across Miami-Dade and Broward. Multilingual coordination available. NDAs as standard.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for any Aventura assignment — residential, corporate or event. Deployable on short notice, fully vetted and accountable at the agency license level.',
      },
      {
        icon: 'briefcase',
        title: 'Corporate & Executive Office Security',
        description:
          'On-site armed security for Aventura-area corporate offices, executive suites and business facilities — including high-risk terminations, sensitive meetings and any situation requiring a professional, licensed armed presence.',
      },
      {
        icon: 'calendar',
        title: 'Private Event Security',
        description:
          'Waterfront dinners, penthouse events, residential galas and private gatherings secured by discreet, licensed officers. Guest management, access control and perimeter coverage that matches the standard of the venue.',
      },
    ],
  },

  // Screen 4: International Client Protection
  internationalProtection: {
    eyebrow: 'INTERNATIONAL CLIENT PROTECTION',
    headline: 'Aventura Has a Global Client Base. Security Should Match.',
    variant: 'cards',
    paragraphs: [
      "Aventura's resident profile is unlike any other city in South Florida. A significant portion of the city's luxury community consists of international principals — South American business executives who maintain Aventura residences alongside operations in Bogotá, São Paulo or Mexico City; Israeli investors with second homes in Williams Island; European families with seasonal Intracoastal apartments; and visiting UHNW clients transiting through Miami-Dade on business or for events.",
      'International clients have security profiles that differ materially from domestic residential clients. Travel patterns are more complex. Threat assessments may involve multiple countries. Itineraries cross Aventura, downtown Miami, Miami Beach, the airport and private aviation terminals at Opa-locka or Tamiami. Coordination with foreign security teams is sometimes required.',
      'Massive Protective Services is experienced with this client profile. We operate with full discretion — no public client lists, NDAs as standard, no social media presence around engagements — and we build security plans that account for the full South Florida itinerary, not just the Aventura residence.',
    ],
    items: [
      {
        icon: 'globe',
        title: 'South American Executive Protection',
        description:
          'Armed officer teams and secure driving for South American executives with Aventura residences and South Florida business operations.',
      },
      {
        icon: 'lock',
        title: 'Discreet Itinerary Coverage',
        description:
          'Security that travels with the client — from the Aventura tower to the Miami meeting to FLL, MIA or OPF. No gaps between the condo lobby and the aircraft door.',
      },
      {
        icon: 'file-text',
        title: 'NDA-First Engagements',
        description:
          'Every member of our team signs an NDA. No public references, no social media, no exceptions. International clients at this level should never have to ask.',
      },
    ],
  },

  // Screen 5: Communities We Serve
  communities: {
    eyebrow: 'AVENTURA COMMUNITIES WE SERVE',
    headline: "From Williams Island to the Waterways — Aventura's Luxury Residential Landscape",
    variant: 'divided-list',
    paragraphs: [
      "Aventura's residential security market is concentrated in a handful of gated and waterfront communities, each with its own access profile, tower layout and client type.",
      "Williams Island is the city's most recognizable gated island community — a private island with luxury high-rises, a marina and its own internal road network. Porto Vita and Turnberry Isle attract the international corporate set. The Waterways and Mystic Pointe are Intracoastal tower communities popular with South American and Israeli buyers. Yacht Club at Aventura is exactly what it sounds like — waterfront residential with marina access.",
      'For estate and high-rise security, each community has different entry points, elevator access considerations and perimeter exposures. We assess at that level of detail — not by property value alone.',
    ],
    items: [
      {
        icon: 'map-pin',
        title: 'Williams Island',
        description:
          'Private gated island within Aventura. Marina access, luxury high-rises and one of the highest per-unit values in Broward/Miami-Dade.',
      },
      {
        icon: 'building',
        title: 'Porto Vita & Turnberry Isle',
        description:
          'Premier Intracoastal waterfront communities popular with international buyers and South Florida corporate executives.',
      },
      {
        icon: 'waves',
        title: 'The Waterways & Mystic Pointe',
        description:
          'Intracoastal tower communities with strong South American and Israeli buyer communities — and distinct access and perimeter profiles.',
      },
    ],
  },

  // Screen 6: Coverage Area & Corridor
  corridorCoverage: {
    eyebrow: 'COVERAGE AREA',
    headline: 'Aventura and the Miami-Dade / Broward Corridor',
    column1: [
      'Williams Island',
      'Porto Vita',
      'Turnberry Isle',
      'The Waterways',
      'Mystic Pointe',
      'Yacht Club at Aventura',
    ],
    column2: [
      'Harbor Cove',
      'The Point',
      'Country Club Drive Corridor',
      'Biscayne Boulevard Corridor',
      'Hallandale Beach (adjacent north)',
      'Sunny Isles Beach (adjacent south)',
    ],
    footnote:
      'We serve Aventura as part of our continuous Miami-Dade / Broward coverage corridor — from Delray Beach south through Fort Lauderdale and into northeastern Miami-Dade.',
  },

  // Screen 7: How We Work Process Roadmap
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'Professional, Confidential, Ready',
    steps: [
      {
        number: 'I',
        title: 'Confidential Consultation',
        description:
          'Direct contact with our team — no call center, no intake form that routes to a sales rep. Describe your situation, your property and what you need. We respond with a plan within 24 hours.',
      },
      {
        number: '2',
        title: 'Assessment',
        description:
          'For Aventura residences: building access review, elevator and lobby considerations, community gate coordination. For executive clients: schedule review, threat assessment and route planning. For events: venue walkthrough and guest list review.',
      },
      {
        number: '3',
        title: 'Officer Deployment',
        description:
          'A vetted, licensed officer briefed on your specific assignment before arrival. Armed or plain-clothes. Overnight residential or mobile executive. Consistent across every engagement.',
      },
      {
        number: '4',
        title: 'Ongoing, Documented Coverage',
        description:
          'Written reports after every shift. Consistent team assignments. Monthly client reviews. NDA covering every person involved. The same professional standard whether you are watching or not.',
      },
    ],
  },

  // Screen 8: Why Massive Protective
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'South Florida Licensed. International-Client Ready. Absolutely Discreet.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'South Florida Based',
        description:
          'Our headquarters is in Delray Beach — 45 minutes north of Aventura. We are a South Florida firm serving South Florida clients. No national call center, no regional representative, no chain of command between you and the people responsible for your security.',
      },
      {
        icon: 'file-text',
        title: 'Armed and Licensed',
        description:
          'FL Agency License B1400200. Class G licensed armed officers. Every officer licensed under Chapter 493, Florida Statutes. Publicly verifiable on FDACS. No staffing agency fills. No unlicensed personnel on any MPS engagement.',
      },
      {
        icon: 'lock',
        title: 'International Standard Discretion',
        description:
          'We do not maintain public client lists. We do not discuss engagements. NDAs are signed by every member of our team on every international client engagement. Aventura clients, in particular, should never have to ask whether their privacy is protected — it always is.',
      },
    ],
  },

  // Screen 9: Nearby Coverage
  nearbyCoverage: {
    eyebrow: 'NEARBY COVERAGE',
    headline: 'Broward and Miami-Dade — Continuous Corridor Coverage',
    cards: [
      {
        title: 'Sunny Isles Beach',
        description: 'Luxury oceanfront towers — adjacent south.',
        href: '/locations',
      },
      {
        title: 'Hallandale Beach',
        description: 'Adjacent north — waterfront and residential coverage.',
        href: '/locations',
      },
      {
        title: 'Fort Lauderdale',
        description: '30 minutes north — estates, yachts and corporate security.',
        href: '/locations/broward',
      },
      {
        title: 'Miami',
        description: 'Full Miami coverage — estates, events, executive protection, VIP.',
        href: '/locations/miami-dade',
      },
    ],
  },

  // Screen 10: Aventura Security FAQ
  faq: {
    eyebrow: 'AVENTURA SECURITY FAQ',
    headline: 'Your questions, answered.',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Does Massive Protective Services serve Aventura, FL?',
        answer:
          "Yes. Aventura is one of our primary Miami-Dade coverage areas. We provide armed security officers, executive protection, international client security and residential coverage for Aventura's luxury communities including Williams Island, Porto Vita, Turnberry Isle and The Waterways.",
      },
      {
        question: 'Do you provide security for international clients based in Aventura?',
        answer:
          'Yes. A significant portion of our Aventura work involves international principals — South American executives, Israeli investors, European residents and visiting UHNW clients with complex South Florida itineraries. We provide armed officer coverage, executive protection and full-itinerary security from the Aventura residence through Miami-Dade and Broward County. NDAs are signed as standard on every international engagement.',
      },
      {
        question: 'Can you provide security for luxury high-rise and condo residences in Aventura?',
        answer:
          "Yes. Luxury high-rise and condo tower security — including floor-specific coverage, building access coordination and penthouse-level residential security — is a service we provide specifically for Aventura's tower communities. Our approach accounts for the access profile of each building, not just the residence itself.",
      },
      {
        question: 'Do you offer executive protection for Aventura-based corporate executives?',
        answer:
          'Yes. Close protection, armed driving and advance work for executives based in Aventura — including those with South Florida corporate operations in the cruise industry, real estate and finance sectors — is available on retainer or per-engagement basis.',
      },
      {
        question: 'How quickly can you deploy to Aventura from your headquarters?',
        answer:
          'Our Delray Beach headquarters is approximately 45 minutes from Aventura via I-95. For planned engagements, officers are pre-briefed and on-site from the agreed start time. For urgent situations, we respond as quickly as road conditions allow and maintain availability for same-day consultation and rapid deployment.',
      },
    ],
  },

  // Screen 11: Nearby Locations
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    places: [
      {
        title: 'Miami',
        description: 'Full Miami coverage — estates, events, executive protection, VIP.',
        href: '/locations/miami-dade',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Fort Lauderdale',
        description: 'Broward’s major city — estate, yacht and corporate security.',
        href: '/locations/broward',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Sunny Isles Beach',
        description: 'Luxury oceanfront towers adjacent south.',
        href: '/locations',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
