export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  href?: string;
  items?: DropdownItem[];
}

export const NAV_STRUCTURE: NavCategory[] = [
  {
    title: 'SERVICES',
    items: [
      {
        name: 'Executive Protection',
        href: '/executive-protection',
        description: 'Tactical close protection & armed motorcade escort',
        badge: 'Class G',
      },
      {
        name: 'Estate Security',
        href: '/estate-security',
        description: 'Perimeter defense & static residential posts',
        badge: '24/7 Gate',
      },
      {
        name: 'Event Security',
        href: '/event-security',
        description: 'High-stakes galas, Art Basel & private summits',
        badge: 'Rapid Escort',
      },
      {
        name: 'Armed Security Officers',
        href: '/armed-officers',
        description: 'Florida Class G licensed armed tactical operators',
        badge: 'Zero Unarmed',
      },
      {
        name: 'Concierge Security',
        href: '/concierge-security',
        description: 'Luxury residential & penthouse lobby surveillance',
        badge: 'High-Touch',
      },
      {
        name: 'Corporate Security',
        href: '/corporate-security',
        description: 'Boardroom defense, high-risk terminations & C-suite security',
        badge: 'Discreet',
      },
      {
        name: 'Loss Prevention',
        href: '/loss-prevention',
        description: 'Observant retail security, camera watch & inventory protection',
        badge: 'Retail',
      },
      {
        name: 'Mobile Patrol',
        href: '/mobile-patrol',
        description: 'Vehicle visits, perimeter checks & scheduled property sweeps',
        badge: 'Patrol',
      },
      {
        name: 'School Security',
        href: '/school-security',
        description: 'Campus access, visitor flow & welcoming community protection',
        badge: 'Campus',
      },
      {
        name: 'Unarmed Security Guards',
        href: '/unarmed-security-guards',
        description: 'Attentive access control, property patrols & front-of-house presence',
        badge: 'Class D',
      },
      {
        name: 'VIP & Celebrity Protection',
        href: '/vip-celebrity-protection',
        description: 'Discreet close protection, hotel arrivals & private travel',
        badge: 'Discreet VIP',
      },
    ],
  },
  {
    title: 'LOCATIONS',
    items: [
      {
        name: 'Palm Beach',
        href: '/locations/palm-beach',
        description: 'Oceanfront & lakefront estates, private clubs, The Season & Worth Ave',
        badge: 'Island Estates',
      },
      {
        name: 'West Palm Beach',
        href: '/locations/west-palm-beach',
        description: 'PBI arrivals, downtown financial towers, courthouse & executive protection',
        badge: 'Executive',
      },
      {
        name: 'Delray Beach',
        href: '/locations/delray-beach',
        description: 'Agency headquarters, Atlantic Avenue & waterfront estates',
        badge: 'Headquarters',
      },
      {
        name: 'Boca Raton',
        href: '/locations/boca-raton',
        description: 'Royal Palm Yacht Club, Woodfield, Mizner Park & private estates',
        badge: 'Estates',
      },
      {
        name: 'Boynton Beach',
        href: '/locations/boynton-beach',
        description: 'Delray Beach HQ adjacent, Intracoastal estates & corporate campuses',
        badge: 'HQ Adjacent',
      },
      {
        name: 'Gulf Stream',
        href: '/locations/gulf-stream',
        description: 'Private barrier island estates, A1A oceanfront & Intracoastal security',
        badge: 'Private Island',
      },
      {
        name: 'Manalapan',
        href: '/locations/manalapan',
        description: 'Exclusive barrier island, ocean-to-Intracoastal estates & seasonal security',
        badge: 'Private Island',
      },
      {
        name: 'Ocean Ridge',
        href: '/locations/ocean-ridge',
        description: 'A1A oceanfront & Intracoastal barrier island estates, quiet enclave protection',
        badge: 'Private Island',
      },
      {
        name: 'Hillsboro Beach',
        href: '/locations/hillsboro-beach',
        description: 'Hillsboro Mile oceanfront estates, inlet security & barrier island protection',
        badge: 'Hillsboro Mile',
      },
      {
        name: 'Lighthouse Point',
        href: '/locations/lighthouse-point',
        description: 'Canal-front homes, private docks & waterfront residential protection',
        badge: 'Waterfront',
      },
      {
        name: 'Fort Lauderdale',
        href: '/locations/fort-lauderdale',
        description: 'Superyacht security, Las Olas Isles, FLIBS & waterfront estates',
        badge: 'Maritime',
      },
      {
        name: 'Aventura',
        href: '/locations/aventura',
        description: 'Williams Island, Turnberry Isle, luxury high-rises & Intracoastal estates',
        badge: 'Waterfront',
      },
      {
        name: 'Miami',
        href: '/locations/miami',
        description: 'Brickell financial towers, Coral Gables estates, Key Biscayne & international EP',
        badge: 'Executive',
      },
      {
        name: 'Miami Beach',
        href: '/locations/miami-beach',
        description: 'Star Island, Palm Island, Art Basel, luxury hotels & celebrity VIP protection',
        badge: 'Private Island',
      },
      {
        name: 'Jacksonville',
        href: '/locations/jacksonville',
        description: 'Downtown, Southbank, Riverside & San Marco executive visits and security',
        badge: 'Regional',
      },
      {
        name: 'Naples',
        href: '/locations/naples',
        description: 'Port Royal, Old Naples, Gulf Coast seasonal residence & visiting executive security',
        badge: 'Gulf Coast',
      },
      {
        name: 'Orlando',
        href: '/locations/orlando',
        description: 'Convention district, International Drive, Lake Nona & executive protection',
        badge: 'Central FL',
      },
      {
        name: 'Sarasota',
        href: '/locations/sarasota',
        description: 'Casey Key, Longboat Key, Bird Key & Gulf Coast arts season estate protection',
        badge: 'Gulf Coast',
      },
      {
        name: 'Tampa',
        href: '/locations/tampa',
        description: 'Downtown Riverwalk, Westshore business district, Hyde Park & Davis Islands',
        badge: 'Gulf Coast',
      },
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      {
        name: 'About Massive Protective',
        href: '/about',
        description: 'Delray Beach HQ, agency pedigree & command staff',
      },
      {
        name: 'Careers & Recruitment',
        href: '/careers',
        description: 'Class G armed officer standards & selective hiring',
      },
      {
        name: 'Testimonials',
        href: '/testimonials',
        description: 'What clients say — verifiable credentials & NDA references',
      },
      {
        name: 'Terms of Services',
        href: '/terms',
        description: 'Terms of Services for Massive Protective Services Inc.',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
        description: 'Client confidentiality & information security safeguards',
      },
      {
        name: 'Licensing & Credentials',
        href: '/licensing',
        description: 'Meet the licensed professionals behind Massive Protective Services Inc.',
      },
      // {
      //   name: 'Security Intelligence & Blog',
      //   href: '/blog',
      //   description: 'Guides on executive protection, armed security & bodyguard pricing',
      // },
    ],
  },
  {
    title: 'BLOGS',
    href: '/blog',
  },
  {
    title: 'CONTACT',
    href: '/contact',
  },
];

export const SERVICES_NAV: DropdownItem[] =
  NAV_STRUCTURE.find((c) => c.title === 'SERVICES')?.items || [];

export const LOCATIONS_NAV: DropdownItem[] =
  NAV_STRUCTURE.find((c) => c.title === 'LOCATIONS')?.items || [];

export const PORTFOLIO_NAV: DropdownItem[] =
  NAV_STRUCTURE.find((c) => c.title === 'PORTFOLIO')?.items || [];

export const RESOURCES_NAV: DropdownItem[] = [
  ...(NAV_STRUCTURE.find((c) => c.title === 'RESOURCES')?.items || []),
  {
    name: 'Contact Us',
    href: '/contact',
    description: '24/7 direct response & confidential consultation',
  },
];
