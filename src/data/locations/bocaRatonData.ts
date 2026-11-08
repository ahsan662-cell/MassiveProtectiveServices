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

export interface BocaRatonPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  servicesGrid: ServiceScopeData;
  localKnowledge: LocationSplitSectionData;
  coverageCommunities: LocationCorridorCoverageData;
  process: ServiceProcessData;
  whyMassive: ServiceWhyMassiveData;
  nearbyCoverage: LocationNearbyCoverageData;
  faq: ServiceFAQData;
  nearbyLocations: LocationNearbyLocationsData;
}

export const bocaRatonData: BocaRatonPageConfig = {
  metaTitle: 'Private Security & Executive Protection Boca Raton | MPS',
  metaDescription:
    'Licensed Palm Beach County armed security and executive protection for Boca Raton estates, Royal Palm Yacht Club, Woodfield, Mizner Park & corporate corridors.',

  // Screen 1: Hero Section
  hero: {
    locationName: 'Boca Raton',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Boca Raton' },
    ],
    eyebrow: '— BOCA RATON / PALM BEACH COUNTY',
    headline: 'Bodyguards & Executive Protection in Boca Raton, FL',
    subtitle:
      "Private security for Boca Raton's estates, gated communities, executives and private events — from a licensed Palm Beach County agency headquartered minutes away in Delray Beach.",
    bgImage: '/images/mps_location_boca_raton_hero.jpg',
    primaryCta: {
      label: 'TALK TO OUR BOCA RATON TEAM',
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
        label: 'HQ: DELRAY BEACH (10 MIN AWAY)',
      },
      {
        icon: 'clock',
        label: 'PALM BEACH COUNTY · 24/7',
      },
    ],
  },

  // Screen 2: Wealth & Security Statement
  philosophy: {
    variant: 'centered-gold-line',
    headline:
      'Boca Raton has more wealth per square mile than most cities in Florida. The security landscape here hasn’t kept up with that.',
    paragraph:
      "Most Boca Raton security searches return HOA guard companies, alarm monitoring services and staffing agencies. None of them do what Massive Protective does — licensed executive protection, armed estate security and close protection for the families, executives and visiting principals who actually live and entertain here. We're based in Delray Beach, ten minutes north. When Boca calls, we answer.",
  },

  // Screen 3: Services Grid
  servicesGrid: {
    eyebrow: 'WHAT WE DO IN BOCA RATON',
    headline: 'Private Security Services Available in Boca Raton',
    cardVariant: 'gold-title',
    cards: [
      {
        icon: 'executive',
        title: 'Executive Protection',
        description:
          'Close protection for Boca Raton executives, family office principals and visiting C-suite guests. Armed detail with advance work available from our Palm Beach County team.',
      },
      {
        icon: 'home',
        title: 'Estate & Gated Community Security',
        description:
          'Armed overnight officers, access control and perimeter patrols for estates in Woodfield, St. Andrews, Royal Palm Yacht Club and the barrier island communities along A1A.',
      },
      {
        icon: 'calendar',
        title: 'Event Security — Mizner Park & Private Venues',
        description:
          'Security for private galas, charity events, corporate dinners and Mizner Park-area functions. Discreet officers, guest screening and VIP coverage matched to the environment.',
      },
      {
        icon: 'shield-check',
        title: 'Armed Security Officers',
        description:
          'Florida Class G licensed armed officers for Boca Raton law firms, medical offices, jewelry businesses and any commercial premise requiring a licensed armed presence.',
      },
      {
        icon: 'users',
        title: 'VIP & Celebrity Protection',
        description:
          'Discreet close protection for high-profile visitors, athletes and public figures staying at Boca Raton Resort or private residences in the area. One-night to extended details.',
      },
      {
        icon: 'building',
        title: 'Corporate Security',
        description:
          "Security assessments and officer deployment for Boca Raton's corporate corridors — Glades Road, Military Trail and the Arvida Parkway business districts.",
      },
    ],
  },

  // Screen 4: Local Knowledge Split Section with Photo
  localKnowledge: {
    eyebrow: 'LOCAL KNOWLEDGE',
    headline: "Boca Raton Isn't One Market. It's Several.",
    variant: 'cards',
    paragraphs: [
      'The security needs of a waterfront estate in Royal Palm Yacht Club are different from a corporate office on Glades Road. A private dinner at Palazzo Ristorante in Mizner Park has different access requirements than a weekend gala at the Boca Raton Resort. We know the difference — because we work across all of it. Palm Beach County is our primary market, Boca Raton is one of its most active cities, and our Delray Beach base means response times that a Miami agency can’t match.',
    ],
    image: {
      src: '/images/mps_location_boca_intracoastal.jpg',
      alt: 'The Intracoastal Boca Raton',
      caption: 'THE INTRACOASTAL · BOCA RATON',
    },
    items: [
      {
        icon: 'home',
        title: 'East Boca & The Barrier Island',
        description:
          'Waterfront estates, seasonal families and visiting principals. Overnight armed coverage and residential security are the primary ask.',
      },
      {
        icon: 'sparkles',
        title: 'Mizner Park & Downtown Boca',
        description:
          'Private dining, gallery events, charity galas. Discreet plain-clothes coverage for hosts and their guests.',
      },
      {
        icon: 'building',
        title: 'West Boca Corporate Corridor',
        description:
          'Law firms, financial advisors, medical practices and executives who need licensed security without the overhead of a full-time hire.',
      },
    ],
  },

  // Screen 5: Coverage Area / Gated Communities
  coverageCommunities: {
    eyebrow: 'WHERE WE WORK IN BOCA',
    headline: 'From the Barrier Island to West Boca — We Cover It All',
    column1: [
      'Royal Palm Yacht & Country Club',
      'Woodfield Country Club',
      'St. Andrews Country Club',
      'The Sanctuary',
      'Boca Grove',
      'Le Lac',
    ],
    column2: [
      'Mizner Park & Downtown Boca',
      'East Boca / Barrier Island (A1A)',
      'Boca Raton Resort & Club area',
      'Spanish River area',
      'Town Center corridor',
      'West Boca / Glades Road',
    ],
    footnote:
      'Don’t see your community? Call us — we cover all of Boca Raton and the surrounding area.',
  },

  // Screen 6: Process Roadmap (Screen 1 in remaining screens)
  process: {
    eyebrow: 'HOW IT WORKS',
    headline: 'Fast, Local, Licensed — Here’s How We Deploy in Boca Raton',
    steps: [
      {
        number: 'I',
        title: 'First Contact',
        description:
          "Call or submit a request. You'll speak with someone on our team — not a call center. We serve Boca Raton regularly and will know your area immediately.",
      },
      {
        number: '2',
        title: 'Situation Brief',
        description:
          'Tell us what you need: estate coverage, an event, a visiting principal, an executive starting Monday. We assess and recommend within hours.',
      },
      {
        number: '3',
        title: 'Officer Assignment',
        description:
          'We match a licensed, vetted officer to your specific environment — armed or unarmed, plain-clothes or suited. Briefed on your location and situation before arrival.',
      },
      {
        number: '4',
        title: 'On-Site, On Time',
        description:
          "Your officer at your door. Whether it's tonight or planned three weeks out, we confirm every detail before the first shift.",
      },
    ],
  },

  // Screen 7: Why Massive Protective (Screen 2 in remaining screens)
  whyMassive: {
    eyebrow: 'WHY MASSIVE PROTECTIVE',
    headline: 'A Palm Beach County Agency. Not a Miami Firm Working North.',
    theme: 'dark',
    pillars: [
      {
        icon: 'map-pin',
        title: 'Ten Minutes Away',
        description:
          'Our Delray Beach headquarters is ten minutes north of Boca Raton. Response times, local knowledge and team continuity that a regional firm dispatching from Miami cannot replicate.',
      },
      {
        icon: 'shield-check',
        title: 'Licensed, Not Just Trained',
        description:
          'FL Agency License B1400200. Every officer holds a current Class D or Class G Florida license — verifiable on the FDACS public registry. No unlicensed subcontractors.',
      },
      {
        icon: 'user-check',
        title: 'Built for This Market',
        description:
          "Boca Raton clients expect discretion, professionalism and officers who look like they belong in the environment. That's exactly what we deploy — not generic guard service.",
      },
    ],
  },

  // Screen 8: Nearby Coverage Area (Screen 3 in remaining screens)
  nearbyCoverage: {
    eyebrow: 'ALSO SERVING NEARBY',
    headline: 'Boca Raton Is Part of Our Core Coverage Area',
    cards: [
      {
        title: 'Delray Beach',
        description: 'Our headquarters — 10 minutes north.',
        href: '#consultation-form',
      },
      {
        title: 'Deerfield Beach',
        description: 'Broward border coverage, same team.',
        href: '#consultation-form',
      },
      {
        title: 'West Palm Beach',
        description: 'Business district and county seat.',
        href: '#consultation-form',
      },
      {
        title: 'Palm Beach',
        description: "The island's estates and seasonal residents.",
        href: '#consultation-form',
      },
    ],
  },

  // Screen 10: FAQ (Screen 5 in remaining screens)
  faq: {
    eyebrow: 'BOCA RATON SECURITY FAQ',
    headline: 'Your questions, answered.',
    theme: 'dark',
    defaultAllOpen: true,
    faqs: [
      {
        question: 'What are some reputable security companies in Palm Beach County?',
        answer:
          'Massive Protective Services is a licensed Palm Beach County security agency (FL License B1400200) headquartered in Delray Beach, serving Boca Raton, Boynton Beach, Delray Beach, West Palm Beach and surrounding areas. We specialize in executive protection, estate security and private event security — not generic guard staffing.',
      },
      {
        question: 'Do you provide security for gated communities in Boca Raton?',
        answer:
          "Yes. We work in Boca Raton's gated communities including Woodfield, St. Andrews, Royal Palm Yacht Club and barrier island properties along A1A. Services include armed overnight officers, access control, perimeter patrols and residential security programmes for seasonal and year-round residents.",
      },
      {
        question: 'How quickly can you deploy in Boca Raton?',
        answer:
          'Our Delray Beach headquarters is ten minutes from central Boca Raton. For most engagements we can confirm and deploy within 24 hours. For urgent situations, call us directly — 24/7.',
      },
      {
        question: 'Do you provide security for events at Mizner Park or the Boca Resort?',
        answer:
          'Yes. We regularly provide private event security for Mizner Park-area functions, charity galas and private venue events throughout Boca Raton. Discreet armed or unarmed officers, guest screening and VIP coverage available.',
      },
      {
        question: 'Is Boca Raton part of your regular service area?',
        answer:
          'Yes — Boca Raton is one of our primary markets. As a Palm Beach County agency based in Delray Beach, we serve Boca Raton as consistently as any city in our coverage area.',
      },
    ],
  },

  // Screen 11: Nearby Locations (Screen 6 in second batch / Final screen)
  nearbyLocations: {
    eyebrow: 'NEARBY LOCATIONS',
    headline: 'Serving All of Palm Beach & Broward County',
    places: [
      {
        title: 'Delray Beach',
        description: 'Our HQ city. Private security, bodyguards and estate coverage.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'Deerfield Beach',
        description: 'Northern Broward coverage just south of Boca.',
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
      {
        title: 'West Palm Beach',
        description: "Corporate and residential security in Palm Beach County's largest city.",
        href: '#consultation-form',
        linkLabel: 'View Coverage',
      },
    ],
  },
};
