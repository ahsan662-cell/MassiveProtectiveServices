export interface LocationOverviewItem {
  name: string;
  slug: string;
  href: string;
  region: 'palm-beach' | 'broward' | 'miami-dade' | 'regional';
  regionLabel: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface RegionFilter {
  id: 'all' | 'palm-beach' | 'broward' | 'miami-dade' | 'regional';
  label: string;
  count: number;
}

export const REGIONS: RegionFilter[] = [
  { id: 'all', label: 'All Jurisdictions', count: 19 },
  { id: 'palm-beach', label: 'Palm Beach County', count: 8 },
  { id: 'broward', label: 'Broward County', count: 3 },
  { id: 'miami-dade', label: 'Miami-Dade County', count: 3 },
  { id: 'regional', label: 'Central & Gulf Coast', count: 5 },
];

export const ALL_LOCATIONS: LocationOverviewItem[] = [
  // --- Palm Beach County ---
  {
    name: 'West Palm Beach',
    slug: 'west-palm-beach',
    href: '/locations/west-palm-beach',
    image: '/images/mps_location_wpb_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Executive Protection',
    tagline: 'PBI Arrivals, Downtown Towers & Courthouse Coverage',
    description:
      'Licensed armed executive protection, corporate security and PBI airport arrival coverage for West Palm Beach’s executive, legal and financial community.',
    highlights: ['PBI Airport Tarmac & Terminal Escort', 'Courthouse Security Coordination', 'Downtown Corporate Towers'],
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    href: '/locations/palm-beach',
    image: '/images/mps_location_palm_beach_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Island Estates',
    tagline: 'Oceanfront & Lakefront Estates, Worth Ave & The Season',
    description:
      'Uncompromising estate protection and discreet personal security for Palm Beach’s premier oceanfront properties, seasonal residents and private galas.',
    highlights: ['Oceanfront Perimeter Defense', 'The Season Gala & Event Security', 'Worth Avenue Detail'],
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    href: '/locations/delray-beach',
    image: '/images/mps_location_delray_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Headquarters',
    tagline: 'Agency Command Center & Rapid Dispatch Corridor',
    description:
      'Massive Protective Services state headquarters. Rapid dispatch across Palm Beach County, Atlantic Avenue commercial protection and waterfront estate coverage.',
    highlights: ['24/7 Agency Command Dispatch', 'Atlantic Avenue Patrols', 'Intracoastal Waterfront Posts'],
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    href: '/locations/boca-raton',
    image: '/images/mps_location_boca_raton_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Private Estates',
    tagline: 'Royal Palm, Woodfield, Mizner Park & Corporate Campuses',
    description:
      'High-tier residential security details, gated enclave defense and C-suite armed protection throughout Boca Raton’s premier communities.',
    highlights: ['Royal Palm Yacht Club Coverage', 'Woodfield Country Club Details', 'Corporate C-Suite Security'],
  },
  {
    name: 'Boynton Beach',
    slug: 'boynton-beach',
    href: '/locations/boynton-beach',
    image: '/images/mps_location_boynton_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'HQ Adjacent',
    tagline: 'Intracoastal Estates & Executive Business Parks',
    description:
      'Immediate proximity to our Delray Beach headquarters ensures rapid deployment for Boynton Beach waterfront estates and executive commercial corridors.',
    highlights: ['Sub-15 Minute Dispatch Time', 'Waterfront Property Defense', 'Executive Facility Patrols'],
  },
  {
    name: 'Gulf Stream',
    slug: 'gulf-stream',
    href: '/locations/gulf-stream',
    image: '/images/mps_location_gulfstream_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Barrier Island',
    tagline: 'A1A Coastal Enclaves & Ultra-High-Net-Worth Seclusion',
    description:
      'Discreet, low-profile estate surveillance and perimeter monitoring for private barrier island estates situated between the Atlantic and Intracoastal.',
    highlights: ['A1A Oceanfront Monitoring', 'Strict Non-Disclosure Operations', 'Low-Profile Tactical Presence'],
  },
  {
    name: 'Manalapan',
    slug: 'manalapan',
    href: '/locations/manalapan',
    image: '/images/mps_location_manalapan_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Private Island',
    tagline: 'Ocean-to-Intracoastal Compound Defense',
    description:
      'Customized armed security protocols for multi-acre ocean-to-lake compound estates requiring dual-waterfront perimeter defense.',
    highlights: ['Dual-Waterfront Perimeter Checks', 'Off-Season Estate Sweeps', 'Private Beach Access Defense'],
  },
  {
    name: 'Ocean Ridge',
    slug: 'ocean-ridge',
    href: '/locations/ocean-ridge',
    image: '/images/mps_location_ocean_ridge_hero.jpg',
    region: 'palm-beach',
    regionLabel: 'Palm Beach County',
    badge: 'Coastal Enclave',
    tagline: 'Quiet Barrier Island & Intracoastal Protection',
    description:
      'Dedicated residential security details protecting Ocean Ridge’s secluded private island estates and canal-front residences.',
    highlights: ['Canal & Dockline Sweeps', 'Dedicated Shift Operators', 'Residential Gate Defense'],
  },

  // --- Broward County ---
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    href: '/locations/fort-lauderdale',
    image: '/images/mps_location_ftl_hero.jpg',
    region: 'broward',
    regionLabel: 'Broward County',
    badge: 'Maritime & Executive',
    tagline: 'Las Olas Isles, Superyacht Defense & Downtown Corporate',
    description:
      'Specialized maritime security details for mega-yachts, FLIBS coverage, Las Olas canal-front estates, and downtown corporate executive protection.',
    highlights: ['Superyacht Dockage Security', 'FLIBS VIP Motorcade Escorts', 'Las Olas Isles Static Guarding'],
  },
  {
    name: 'Hillsboro Beach',
    slug: 'hillsboro-beach',
    href: '/locations/hillsboro-beach',
    image: '/images/mps_location_hillsboro_hero.jpg',
    region: 'broward',
    regionLabel: 'Broward County',
    badge: 'Hillsboro Mile',
    tagline: 'Millionaires Mile Ocean-to-Intracoastal Compounds',
    description:
      'Round-the-clock armed gate and perimeter security along the exclusive Hillsboro Mile, protecting high-exposure oceanfront estates.',
    highlights: ['Hillsboro Mile Gate Posts', 'Inlet Waterway Patrols', 'Class G Armed Operators'],
  },
  {
    name: 'Lighthouse Point',
    slug: 'lighthouse-point',
    href: '/locations/lighthouse-point',
    image: '/images/mps_location_lighthouse_point_hero.jpg',
    region: 'broward',
    regionLabel: 'Broward County',
    badge: 'Waterfront Estates',
    tagline: 'Canal-Front Properties, Private Docks & Maritime Patrol',
    description:
      'Waterfront residential security and dockline access surveillance tailored for Lighthouse Point boaters, yachts, and luxury private residences.',
    highlights: ['Private Dock & Vessel Watch', 'Neighborhood Patrol Sweeps', 'Electronic Access Monitoring'],
  },

  // --- Miami-Dade County ---
  {
    name: 'Miami',
    slug: 'miami',
    href: '/locations/miami',
    image: '/images/mps_location_miami_hero.jpg',
    region: 'miami-dade',
    regionLabel: 'Miami-Dade County',
    badge: 'Financial District',
    tagline: 'Brickell Financial Towers, Coral Gables & Key Biscayne',
    description:
      'High-threat close protection, armed motorcades, and board-level corporate security across Brickell Avenue, Coral Gables, and Coconut Grove.',
    highlights: ['Brickell High-Rise Executive Security', 'Armed Convoy & Airport Transit', 'Coral Gables Estate Details'],
  },
  {
    name: 'Miami Beach',
    slug: 'miami-beach',
    href: '/locations/miami-beach',
    image: '/images/mps_location_miami_beach_hero.jpg',
    region: 'miami-dade',
    regionLabel: 'Miami-Dade County',
    badge: 'VIP & Celebrity',
    tagline: 'Star Island, Palm Island, Art Basel & Luxury Hospitality',
    description:
      'Elite celebrity and dignitary close protection, luxury hotel arrivals, and barrier island estate defense across Star Island, Palm Island, and South Beach.',
    highlights: ['Star Island & Palm Island Security', 'Art Basel VIP Close Protection', 'Luxury Resort Detail'],
  },
  {
    name: 'Aventura',
    slug: 'aventura',
    href: '/locations/aventura',
    image: '/images/mps_location_aventura_hero.jpg',
    region: 'miami-dade',
    regionLabel: 'Miami-Dade County',
    badge: 'Luxury High-Rise',
    tagline: 'Williams Island, Turnberry Isle & Penthouse Security',
    description:
      'Tailored close protection and penthouse access control for international executives, family offices, and residents of Williams Island and Turnberry Isle.',
    highlights: ['Penthouse Concierge Access', 'Williams Island Security Details', 'International Principal Travel'],
  },

  // --- Central & Gulf Coast ---
  {
    name: 'Tampa',
    slug: 'tampa',
    href: '/locations/tampa',
    image: '/images/mps_location_tampa_hero.jpg',
    region: 'regional',
    regionLabel: 'Hillsborough County',
    badge: 'Gulf Coast Metro',
    tagline: 'Riverwalk, Westshore District, Hyde Park & Davis Islands',
    description:
      'Executive protection and armed corporate security for Tampa’s thriving business centers, private aviation arrivals at TPA/Peter O. Knight, and Davis Islands estates.',
    highlights: ['Davis Islands Estate Coverage', 'Westshore Corporate Defense', 'TPA Private Aviation Escort'],
  },
  {
    name: 'Sarasota',
    slug: 'sarasota',
    href: '/locations/sarasota',
    image: '/images/mps_location_sarasota_hero.jpg',
    region: 'regional',
    regionLabel: 'Sarasota County',
    badge: 'Gulf Coast Estates',
    tagline: 'Casey Key, Longboat Key, Bird Key & Arts District',
    description:
      'Unarmed and armed protective details for Sarasota’s gulf-front barrier island estates, winter arts season galas, and private executive retreats.',
    highlights: ['Casey Key & Longboat Key Estates', 'Winter Arts Season Security', 'SRQ Airport Transit Details'],
  },
  {
    name: 'Orlando',
    slug: 'orlando',
    href: '/locations/orlando',
    image: '/images/mps_location_orlando_hero.jpg',
    region: 'regional',
    regionLabel: 'Orange County',
    badge: 'Central Florida',
    tagline: 'Convention District, Lake Nona & International Transit',
    description:
      'Executive escort, keynote speaker protection, and secure transportation for high-profile business summits, convention centers, and Lake Nona executives.',
    highlights: ['Convention Center VIP Protection', 'Lake Nona Medical City Details', 'MCO Airport Transfers'],
  },
  {
    name: 'Naples',
    slug: 'naples',
    href: '/locations/naples',
    image: '/images/mps_location_naples_hero.jpg',
    region: 'regional',
    regionLabel: 'Collier County',
    badge: 'Gulf Coast Luxury',
    tagline: 'Port Royal, Old Naples & Seasonal Gulf Mansions',
    description:
      'Discreet close protection and static armed guards for ultra-wealthy principals residing in Port Royal, Pelican Bay, and private beachfront estates.',
    highlights: ['Port Royal Oceanfront Compounds', 'Seasonal Resident Surveillance', 'Private APF Airfield Escort'],
  },
  {
    name: 'Jacksonville',
    slug: 'jacksonville',
    href: '/locations/jacksonville',
    image: '/images/mps_location_jacksonville_hero.jpg',
    region: 'regional',
    regionLabel: 'Duval County',
    badge: 'First Coast',
    tagline: 'Downtown, Southbank, Riverside & St. Johns River',
    description:
      'Corporate risk mitigation, executive transport, and facility security for North Florida’s major logistics and banking headquarters.',
    highlights: ['Downtown Banking District Defense', 'St. Johns Riverfront Details', 'Interstate Transit Operations'],
  },
];
