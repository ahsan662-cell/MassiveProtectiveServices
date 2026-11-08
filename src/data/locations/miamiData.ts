import {
  LocationHeroData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceAudienceData,
  ServiceScopeData,
  ServiceWhyMassiveData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface MiamiPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  environmentPhilosophy: ServicePhilosophyData;
  internationalProtection: ServiceAudienceData;
  operatingAreas: ServiceScopeData;
  servicesGrid: ServiceScopeData;
  whyMassive: ServiceWhyMassiveData;
  faq: ServiceFAQData;
  closingCta: ServiceClosingCTAData;
}

export const miamiData: MiamiPageData = {
  metaTitle: 'Miami Executive Protection & Armed Security | MPS',
  metaDescription:
    'Licensed armed executive protection for Miami corporate, financial and residential principals in Brickell, Coral Gables, Coconut Grove and Key Biscayne. FL License B1400200.',

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Miami' },
    ],
    locationName: 'Miami',
    eyebrow: 'EXECUTIVE PROTECTION · MIAMI, FLORIDA',
    headline: 'Miami Executive Protection — Armed Security for an International City',
    subtitle:
      'Miami is where Latin American business meets US markets — and where the threat profiles that travel with international executives require a different level of protection than domestic EP. Massive Protective Services provides licensed armed executive protection for Miami’s corporate, financial and residential principals. FL License B1400200.',
    bgImage: '/images/mps_location_miami_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW SERVICES →',
      href: '#services',
    },
    badges: [
      { icon: 'file-text', label: 'FL License B1400200' },
      { icon: 'shield-check', label: 'Armed Officers — Class G Licensed' },
      { icon: 'map-pin', label: 'Miami · Brickell · Coral Gables · Key Biscayne' },
      { icon: 'clock', label: '24/7 Availability' },
    ],
  },

  // Screen 2: Security Environment 2-Column Prose
  environmentPhilosophy: {
    variant: 'two-column-prose',
    theme: 'dark',
    hideTopBar: true,
    headline: 'Miami’s Security Environment Is Not the Same as the Rest of Florida',
    column1Paragraphs: [
      'Miami is the most internationally complex security environment in Florida — and one of the most complex in the United States. The Brickell financial district is home to the US operations of Latin American private banks, family offices, private equity firms and corporate headquarters. The principals who operate from these offices — or who travel to Miami regularly for business — bring with them threat profiles that are different in kind from those of domestic US executives.',
      'Kidnapping-for-ransom risk, targeted financial crime, surveillance by foreign actors and elevated personal threat levels from home-country business disputes are not hypothetical for executives from certain Latin American markets. Miami’s EP professionals know this. Most security firms in Florida do not — and their domestic guard-company approach is not what these clients require.',
    ],
    column2Paragraphs: [
      'Beyond the international corporate market, Miami has one of the most complex operational environments for executive protection in the country. The geography — barrier islands, causeways, dense urban corridors, major international airport, Port of Miami — creates movement and route planning challenges that require specific local knowledge.',
      'Coconut Grove and Coral Gables are home to the diplomatic community, international consulates and the residential properties of South Florida’s most established international families. Key Biscayne is an exclusive residential island with limited access and a distinct security profile. The Wynwood and Design District corridors host major cultural events that bring high-profile principals into crowded, uncontrolled environments.',
      'Massive Protective Services provides executive protection for Miami’s full complexity — the Brickell towers, the Coral Gables estates, the Key Biscayne residences and the event environments in between.',
    ],
  },

  // Screen 3: International Principal Protection (Split Prose + 3 Cards)
  internationalProtection: {
    eyebrow: 'INTERNATIONAL PRINCIPAL PROTECTION',
    headline: 'Miami Is Latin America’s Business Capital. The Threat Profiles Reflect That.',
    variant: 'dark-cards',
    cardVariant: 'gold-title',
    cardsPerRow: 3,
    paragraphs: [
      'The executives who travel to Miami from Brazil, Colombia, Mexico, Venezuela and Argentina are not visiting a domestic US city. They are operating in the one US market where their home-country risk environment follows them — because Miami’s business community is deeply integrated with Latin American markets, and the people who target high-net-worth principals in those markets know where those principals go.',
      'This is not speculation. Miami has one of the highest rates of targeted financial crime against high-net-worth individuals in the United States. Kidnapping-for-ransom advisory notices for Latin American travel are issued by the US State Department annually. The executives of major Brazilian, Colombian and Venezuelan business families who maintain Miami residences or conduct regular business travel here are aware of this exposure.',
      'The appropriate response is not an unarmed escort service. It is an armed executive protection program that begins with a threat assessment, includes advance work on every venue, provides armed escort during all principal movement and maintains operational security discipline throughout the engagement.',
      'Massive Protective Services provides this level of protection for international principals operating in Miami. We do not treat Miami like Palm Beach. It is a different operating environment — and we plan accordingly.',
    ],
    cards: [
      {
        icon: 'globe',
        title: 'International Threat Assessment',
        description:
          'Structured assessment of the principal’s home-country threat profile, Miami-specific exposure and the specific risks that travel with international executives. Assessment informs every deployment decision.',
      },
      {
        icon: 'lock',
        title: 'Operational Security Discipline',
        description:
          'Schedule confidentiality, route variation, counter-surveillance protocols and NDA coverage for all personnel. Operational security is not an add-on for international principals — it is the baseline.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Escort Throughout',
        description:
          'Class G licensed armed officers on every principal movement. No unarmed transitions, no coverage gaps between the hotel and the meeting. Armed presence from departure to return.',
      },
    ],
  },

  // Screen 4: Where We Operate in Miami (6-card 3-column Scope Grid)
  operatingAreas: {
    eyebrow: 'WHERE WE OPERATE IN MIAMI',
    headline: 'From Brickell to Key Biscayne — The Full Miami Market',
    cardVariant: 'gold-title',
    columns: 3,
    cards: [
      {
        icon: 'building',
        title: 'Brickell Financial District',
        description:
          'Armed security and executive protection for corporate principals, financial professionals and international executives operating in Brickell’s financial tower corridor. The highest concentration of international corporate EP demand in South Florida.',
      },
      {
        icon: 'home',
        title: 'Coconut Grove',
        description:
          'Residential armed security and EP for Coconut Grove’s established estates and waterfront properties. One of Miami’s oldest and most affluent neighborhoods — with a distinct security profile from Brickell.',
      },
      {
        icon: 'landmark',
        title: 'Coral Gables',
        description:
          'Security for Coral Gables’ diplomatic community, international consulate corridor and residential estates. Armed escort for principals visiting the Coral Gables business district and residential neighborhoods.',
      },
      {
        icon: 'map-pin',
        title: 'Key Biscayne',
        description:
          'Armed security for Key Biscayne’s exclusive residential island community. Limited road access, high-value residential concentration and a distinct security profile — residential estate security and EP for island-based principals.',
      },
      {
        icon: 'building',
        title: 'Downtown Miami & Wynwood',
        description:
          'Armed security for principals attending events, business meetings and cultural engagements in Downtown Miami, the Design District and Wynwood. Crowd management, perimeter coverage and close protection in high-density environments.',
      },
      {
        icon: 'plane',
        title: 'Miami International Airport',
        description:
          'Secure arrival and departure coverage at Miami International Airport — one of the busiest international airports in the US. Armed handoff from terminal to vehicle, route coordination and full escort to any Miami or South Florida destination.',
      },
    ],
  },

  // Screen 5: Our Services in Miami (4-column Scope Grid)
  servicesGrid: {
    eyebrow: 'OUR SERVICES IN MIAMI',
    headline: 'Armed Security and Executive Protection for Miami’s Complex Environment',
    cardVariant: 'gold-title',
    columns: 4,
    cards: [
      {
        icon: 'user-check',
        title: 'Executive Protection',
        description:
          'Full-spectrum EP for Miami principals — threat assessment, advance work, armed close protection, secure transportation and written protection plans. Configured for Miami’s international operating environment.',
      },
      {
        icon: 'globe',
        title: 'International Principal Protection',
        description:
          'Specialized EP for Latin American executives, family office principals and international visitors with elevated threat profiles. Operational security discipline, armed escort and counter-surveillance protocols throughout.',
      },
      {
        icon: 'home',
        title: 'Residential & Estate Security',
        description:
          'Armed security for Miami residential estates — Coconut Grove, Coral Gables, Key Biscayne and waterfront properties. Consistent officer assignment, written plans and shift reports.',
      },
      {
        icon: 'calendar',
        title: 'Event & Venue Security',
        description:
          'Armed security for private events, corporate functions and high-profile gatherings in Miami. Art Basel, Design District events, private estate functions — armed and plain-clothes officer configurations.',
      },
    ],
  },

  // Screen 6: What Makes Us the Right Firm for Miami (Image 1)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE SERVICES',
    headline: 'What Makes Us the Right Firm for Miami’s Security Environment',
    variant: 'vertical-bars',
    theme: 'dark',
    pillars: [
      {
        title: 'We Understand the International Threat Environment',
        description:
          'Miami’s EP market is shaped by Latin American business travel and the threat profiles that accompany it. We assess these situations honestly — not with domestic guard-company assumptions.',
      },
      {
        title: 'Armed Officers Only — Class G Licensed',
        description:
          'Every officer holds a Florida Class G Statewide Firearm License. No unarmed Miami deployments. FL License B1400200, verifiable on FDACS.',
      },
      {
        title: 'Advance Work on Every Miami Engagement',
        description:
          'Miami’s geography — causeways, dense corridors, major event venues — requires specific advance planning. No officer arrives at a Miami assignment without a written plan and a surveyed route.',
      },
      {
        title: 'Operational Security as Standard',
        description:
          'Schedule confidentiality, route variation and NDA coverage on every engagement. For international principals, operational security is not optional — it is the first line of protection.',
      },
      {
        title: 'Palm Beach County Base — No Miami Surcharge',
        description:
          'Headquartered in Delray Beach, we serve Miami as part of our primary South Florida market. No cross-county surcharges, no out-of-area premiums.',
      },
    ],
    credentialBadges: [
      'FL Agency License: B1400200',
      'Armed Officers: Class G Statewide Firearm',
      'Governing Law: Chapter 493, FL Statutes',
      'HQ: Delray Beach — South Florida',
    ],
  },

  // Screen 7: Miami Security FAQ (Image 2)
  faq: {
    eyebrow: 'MIAMI SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'Do you provide executive protection for international executives visiting Miami?',
        answer:
          'Yes. International principal protection — including executives from Latin American markets with elevated threat profiles — is a specific service we provide in Miami. We begin with a threat assessment that addresses the principal’s home-country exposure, not just the Miami environment.',
      },
      {
        question: 'Do you serve the Brickell financial district?',
        answer:
          'Yes. Armed security and executive protection for corporate principals and financial professionals operating in Brickell is part of our Miami service offering. We work directly with principals, family offices and corporate security directors.',
      },
      {
        question: 'Can you provide airport security coverage at Miami International Airport?',
        answer:
          'Yes. Secure arrival and departure coverage at MIA — armed escort from terminal to vehicle, route coordination and transfer to any Miami or South Florida destination.',
      },
      {
        question: 'Do you serve Key Biscayne residential properties?',
        answer:
          'Yes. Key Biscayne’s island geography and high-value residential concentration require specific planning for both access control and response. We provide estate security and EP for Key Biscayne principals.',
      },
      {
        question: 'How far is your headquarters from Miami?',
        answer:
          'Massive Protective Services is headquartered in Delray Beach — approximately 45 miles north of downtown Miami via I-95. Miami is part of our primary South Florida service area with no out-of-area surcharges.',
      },
    ],
  },

  // Screen 8: Confidential Consultation Closing CTA Banner (Image 3)
  closingCta: {
    headline: 'Miami Executive Protection — Confidential Consultation',
    subtitle:
      'Direct conversation with Marc Tardalo. No sales process. International and domestic principals welcome.',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW ALL LOCATIONS →',
      href: '/locations',
    },
    disclaimer:
      'FL License B1400200 · Delray Beach HQ · Miami · Brickell · Coral Gables · Key Biscayne · Chapter 493, FL Statutes · 24/7',
  },
};

