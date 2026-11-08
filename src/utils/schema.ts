import { SITE_URL } from './seo';

export interface LocalBusinessSchemaOptions {
  name?: string;
  description?: string;
  path?: string;
  areaServed?: string | string[];
}

export function getLocalBusinessSchema(options: LocalBusinessSchemaOptions = {}) {
  const url = options.path ? `${SITE_URL}${options.path.startsWith('/') ? options.path : `/${options.path}`}` : SITE_URL;
  const areaServed = options.areaServed || [
    'Palm Beach County, FL',
    'Broward County, FL',
    'Miami-Dade County, FL',
    'South Florida',
    'State of Florida',
  ];

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SecurityService'],
    '@id': `${SITE_URL}/#business`,
    name: options.name || 'Massive Protective Services',
    legalName: 'Massive Protective Services Inc.',
    url: url,
    logo: `${SITE_URL}/images/new_logo.png`,
    image: `${SITE_URL}/images/mps_hero_estate.jpg`,
    description:
      options.description ||
      'Licensed private security firm serving estates, executives, events, and organizations across Palm Beach, Broward, and Miami-Dade Counties. FDACS License B1400200. Zero unarmed guards.',
    telephone: '+1-954-234-7231',
    email: 'dispatch@massiveprotectiveservices.com',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Delray Beach Headquarters',
      addressLocality: 'Delray Beach',
      addressRegion: 'FL',
      postalCode: '33444',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.4615',
      longitude: '-80.0728',
    },
    areaServed: areaServed,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'FDACS License B1400200',
      credentialCategory: 'Florida Class B Security Agency License',
      recognizedBy: {
        '@type': 'AdministrativeArea',
        name: 'Florida Department of Agriculture and Consumer Services (FDACS)',
      },
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.linkedin.com/company/massive-protective-services',
    ],
  };
}

export interface ServiceSchemaOptions {
  name: string;
  serviceType: string;
  description: string;
  slug: string;
  areaServed?: string;
}

export function getServiceSchema(options: ServiceSchemaOptions) {
  const url = `${SITE_URL}/${options.slug.replace(/^\/+/, '')}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name: options.name,
    serviceType: options.serviceType,
    url: url,
    provider: {
      '@type': ['LocalBusiness', 'SecurityService'],
      '@id': `${SITE_URL}/#business`,
      name: 'Massive Protective Services',
      telephone: '+1-954-234-7231',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: options.areaServed || 'South Florida',
    },
    description: options.description,
  };
}

