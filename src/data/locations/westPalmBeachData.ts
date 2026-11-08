import {
  LocationHeroData,
  LocationProximityAdvantageData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceWhyMassiveData,
  ServiceCredentialsData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface WestPalmBeachPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  countySeat: ServicePhilosophyData;
  airportSecurity: LocationProximityAdvantageData;
  servicesScope: ServiceScopeData;
  professionalMarket: ServicePhilosophyData;
  whatWeBring: ServiceWhyMassiveData;
  credentials: ServiceCredentialsData;
  faq: ServiceFAQData;
  closingCta: ServiceClosingCTAData;
}

export const westPalmBeachData: WestPalmBeachPageData = {
  metaTitle: 'West Palm Beach Executive Protection & Security | MPS',
  metaDescription:
    "Licensed armed executive protection, corporate security and PBI airport arrival coverage for West Palm Beach's executive, legal and financial community. FL License B1400200.",

  // Screen 1: Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'West Palm Beach' },
    ],
    locationName: 'West Palm Beach',
    eyebrow: 'ARMED SECURITY · WEST PALM BEACH, FLORIDA',
    headline: 'West Palm Beach Executive Protection — From PBI Arrivals to Downtown Towers',
    subtitle:
      "West Palm Beach is where Palm Beach County's professional class works — and a gateway for high-profile visitors to the region. Massive Protective Services provides licensed armed executive protection, corporate security and airport arrival coverage for West Palm Beach's executive, legal and financial community. FL License B1400200.",
    bgImage: '/images/mps_location_wpb_hero.jpg',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW SERVICES →',
      href: '#services',
    },
    badges: [
      {
        icon: 'file-text',
        label: 'FL LICENSE B1400200',
      },
      {
        icon: 'shield-check',
        label: 'ARMED OFFICERS — CLASS G LICENSED',
      },
      {
        icon: 'map-pin',
        label: 'PBI AIRPORT & DOWNTOWN WPB',
      },
      {
        icon: 'clock',
        label: '24/7 AVAILABILITY',
      },
    ],
  },

  // Screen 2: The County Seat, the Business District and the Airport Gateway
  countySeat: {
    variant: 'two-column-prose',
    theme: 'dark',
    headline: 'The County Seat, the Business District and the Airport Gateway',
    column1Paragraphs: [
      "West Palm Beach is the largest city in Palm Beach County and its governmental and professional center. The downtown corridor along Flagler Drive and Clematis Street houses the county courthouse, major law firms, financial institutions, family offices and corporate headquarters that serve Palm Beach County's high-net-worth community.",
      "The executives, attorneys, wealth managers and principals who work in West Palm Beach's towers support the island wealth visible across the Intracoastal — but their own security needs are distinct. They move between downtown offices, client meetings in Palm Beach, residential properties in Wellington, Ibis or the historic neighborhoods of El Cid and Flamingo Park, and they travel frequently through Palm Beach International Airport.",
    ],
    column2Paragraphs: [
      'Palm Beach International Airport, serving West Palm Beach and Palm Beach County, is a major arrival and departure point for executives and high-profile visitors. Commercial arrivals, charter flights and private aviation facilities create distinct transfer requirements.',
      'Secure airport arrivals and departures require advance planning. The transition between an authorized meeting point and the vehicle is a scheduled movement that should be coordinated before arrival — not improvised by a driver after the flight lands.',
      'Massive Protective Services plans airport handoffs, secure ground transportation from PBI and executive protection for the West Palm Beach corporate and residential market. Armed coverage is provided only where permitted, with airport and facility requirements incorporated into the protection plan.',
    ],
  },

  // Screen 3: PBI Airport Security
  airportSecurity: {
    eyebrow: 'AIRPORT ARRIVAL & DEPARTURE SECURITY',
    headline: 'Palm Beach International Airport — The Most Exposed Moment of Any Trip Is the Transfer.',
    paragraphs: [
      "Arrivals and departures are among the highest-exposure moments in any principal's day. The transition from aircraft to ground transport — at a terminal, a private FBO or a charter facility — is a scheduled movement with identifiable meeting points and timing.",
      'For executives, VIPs and high-profile families traveling through Palm Beach International Airport, that transition requires more than a car and a driver. It requires advance route planning, confirmed vehicle positioning, coordination with authorized facility contacts and a clearly agreed handoff point before the principal arrives.',
      'Massive Protective Services provides planned arrival and departure coverage at PBI, manages the transfer from authorized meeting points to the vehicle and provides secure ground escort to destinations in Palm Beach, Broward and Miami-Dade counties. Armed coverage is arranged only where law and facility authorization permit it. The same planning applies in reverse for departures, including schedule-sensitive engagements.',
    ],
    cards: [
      {
        icon: 'plane',
        title: 'Advance Airport Coordination',
        description:
          'Route confirmed, vehicle positioned and officer at an authorized meeting point before the principal arrives. Airport access and handoff requirements agreed in advance — no improvised transfers.',
      },
      {
        icon: 'car',
        title: 'Armed Transfer from PBI',
        description:
          'Secure ground escort from PBI to Palm Beach County estates, hotels, corporate offices and private residences. Vehicle, driver and armed officer coverage are planned for locations and routes where permitted.',
      },
      {
        icon: 'clock',
        title: 'Departure Coverage',
        description:
          "Secure transportation from the principal's location to PBI, with arrival timing coordinated around the flight schedule and coverage through an authorized terminal handoff.",
      },
    ],
    footnote:
      'Airport and courthouse coverage is planned around applicable law, facility authorization and weapons restrictions. A Class G license does not itself establish access authorization.',
  },

  // Screen 4: Our Services in West Palm Beach
  servicesScope: {
    eyebrow: 'OUR SERVICES IN WEST PALM BEACH',
    headline: 'Armed Security and Executive Protection Across West Palm Beach',
    cardVariant: 'left-gold-border',
    columns: 4,
    cards: [
      {
        icon: 'user',
        title: 'Executive Protection',
        description:
          'Armed principal protection for West Palm Beach executives, corporate officers, attorneys and financial professionals. Advance work, threat assessment and written protection plans. Covers downtown towers, courthouse-related movements and inter-county travel, with armed coverage subject to venue requirements.',
      },
      {
        icon: 'plane',
        title: 'Airport Arrival & Departure',
        description:
          'Planned arrival coverage and secure transportation at Palm Beach International Airport. Pre-arranged authorized handoffs, confirmed vehicle positioning and armed ground escort where permitted.',
      },
      {
        icon: 'building',
        title: 'Corporate & Legal Security',
        description:
          'Protection planning and authorized coverage for high-profile legal proceedings, corporate board meetings and sensitive business negotiations. Armed coverage is scoped to applicable law and venue restrictions, with courthouse requirements confirmed before deployment.',
      },
      {
        icon: 'home',
        title: 'Residential & Estate Security',
        description:
          'Armed security for West Palm Beach residential properties — historic neighborhoods, waterfront homes and executive residences. Consistent officer assignment and written security plans.',
      },
    ],
  },

  // Screen 5: The West Palm Beach Professional Market
  professionalMarket: {
    variant: 'two-column-prose',
    theme: 'dark',
    eyebrow: 'THE WEST PALM BEACH PROFESSIONAL MARKET',
    headline: "Where Palm Beach County's Professional Infrastructure Operates",
    hideTopBar: true,
    column1Paragraphs: [
      "West Palm Beach's downtown corridor is home to the law firms, family offices, wealth management firms and financial institutions that serve Palm Beach County's ultra-high-net-worth community. These professionals operate in a high-visibility, high-value environment — managing assets, handling litigation and advising clients whose security needs are well-documented.",
      "The attorneys representing high-profile clients in Palm Beach County's courthouse. The wealth managers whose client lists read like a Palm Beach social register. The hedge fund principals whose downtown offices are a short drive from their island estates. These are West Palm Beach's professional security clients — and their needs are distinct from residential estate security.",
    ],
    column2Paragraphs: [
      "Palm Beach County's courthouse complex — located in downtown West Palm Beach — handles a significant volume of high-profile litigation: estate disputes, corporate matters and proceedings involving public figures and high-net-worth principals. Protection planning for attorneys, witnesses and principals in sensitive matters requires coordination with courthouse security and clear boundaries on access and armed coverage.",
      'Massive Protective Services plans secure movement, permitted-location coverage and coordination for courthouse appearances, legal proceedings and West Palm Beach corporate engagements. We work directly with attorneys, family offices and corporate security directors — not through intermediaries. Courtroom or restricted-area armed access is not implied.',
    ],
  },

  // Screen 6 (Remaining Screen 1): Why Massive Protective Services / What We Bring
  whatWeBring: {
    eyebrow: 'WHY MASSIVE PROTECTIVE SERVICES',
    headline: 'What We Bring to the West Palm Beach Market',
    variant: 'vertical-bars',
    theme: 'dark',
    pillars: [
      {
        title: 'Armed Officers Only — Class G Licensed',
        description:
          'Every officer deployed by Massive Protective Services holds a Florida Class G Statewide Firearm License. We do not offer unarmed security. FL License B1400200, verifiable on FDACS.',
      },
      {
        title: 'Airport Arrivals Planned, Not Improvised',
        description:
          'PBI arrival and departure coverage is a planned operation — advance coordination, confirmed vehicle position and officer coverage at authorized handoff points before the principal arrives. Not a driver with a sign.',
      },
      {
        title: 'Corporate and Legal Environment Experience',
        description:
          "We operate in West Palm Beach's professional environment — law firms, financial institutions, courthouse corridors. Our officers are trained for professional settings where discretion and controlled presence matter as much as response capability.",
      },
      {
        title: 'Written Plans for Every Engagement',
        description:
          'No officer arrives at a West Palm Beach assignment without a written security plan. Coverage of a courthouse appearance, a corporate meeting or an airport arrival each has its own written protocol.',
      },
      {
        title: 'Palm Beach County Base — No Cross-County Travel Premium',
        description:
          'Headquartered in Delray Beach, we serve West Palm Beach within our home county. There is no cross-county surcharge or out-of-area travel premium for this market.',
      },
    ],
    verifyLink: {
      label: 'Verify agency licence on FDACS',
      href: 'https://www.fdacs.gov/Business-Services/Private-Security-Licenses',
    },
    footerNote:
      'All officers assigned to an executive protection engagement sign non-disclosure agreements covering the principal’s identity, schedule, locations and all engagement details.',
  },

  // Screen 7 (Remaining Screen 2): Credentials Strip
  credentials: {
    theme: 'dark',
    showBottomDivider: false,
    cards: [
      {
        icon: 'file-text',
        label: 'FL Agency License:',
        value: 'B1400200',
      },
      {
        icon: 'shield-check',
        label: 'Armed Officers:',
        value: 'Class G Statewide Firearm',
      },
      {
        icon: 'book-open',
        label: 'Governing Law:',
        value: 'Chapter 493, FL Statutes',
      },
      {
        icon: 'map-pin',
        label: 'HQ:',
        value: 'Delray Beach — Palm Beach County',
      },
    ],
  },

  // Screen 8 (Remaining Screen 3): West Palm Beach Security FAQ
  faq: {
    eyebrow: 'WEST PALM BEACH SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    faqs: [
      {
        question: 'Do you provide armed security for PBI airport arrivals and departures?',
        answer:
          'Yes. We plan airport arrival and departure coverage at Palm Beach International Airport, coordinate authorized meeting points, position the vehicle in advance and provide secure ground escort to Palm Beach County destinations. Armed coverage is subject to applicable law, airport and facility authorization, and weapons restrictions.',
      },
      {
        question: 'Can you provide security for high-profile legal proceedings at the Palm Beach County courthouse?',
        answer:
          'Yes. We plan protection for courthouse-related movements, witness and principal arrivals, and permitted-location coverage, working directly with attorneys, principals or family offices. Courthouse access and any armed coverage must be confirmed with the responsible authorities and comply with applicable restrictions. Contact us to discuss the specific situation.',
      },
      {
        question: 'Do you serve the downtown West Palm Beach corporate corridor?',
        answer:
          "Yes. We provide executive protection and armed security for principals, executives and professionals operating in West Palm Beach's downtown office district — including Phillips Point, Esperanté and the broader Flagler Drive corporate corridor.",
      },
      {
        question: 'How close is your headquarters to West Palm Beach?',
        answer:
          'Massive Protective Services is headquartered in Delray Beach, south of downtown West Palm Beach within Palm Beach County. West Palm Beach is part of our primary county market, with no cross-county travel considerations.',
      },
      {
        question: 'Do you serve residential areas in West Palm Beach?',
        answer:
          'Yes. We provide residential armed security and estate protection for West Palm Beach neighborhoods including El Cid, Flamingo Park, South End and waterfront residential properties along the Intracoastal.',
      },
    ],
  },

  // Screen 9 (Remaining Screen 4): Closing CTA
  closingCta: {
    headline: 'West Palm Beach Executive Security — Confidential Consultation',
    subtitle:
      'From PBI arrivals to downtown engagements to residential security — direct conversation with Marc Tardalo. No sales process.',
    primaryCta: {
      label: 'REQUEST CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'VIEW ALL LOCATIONS →',
      href: '/locations',
    },
    disclaimer:
      'FL License B1400200 · Delray Beach HQ · West Palm Beach & Palm Beach County · Chapter 493, FL Statutes · 24/7',
  },
};
