import { Metadata } from 'next';
import { FortLauderdaleClient } from './components/FortLauderdaleClient';
import { fortLauderdaleData } from '@/data/locations/fortLauderdaleData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Fort Lauderdale armed security",
    "Fort Lauderdale executive protection",
    "Las Olas security guards",
    "yacht security Fort Lauderdale",
  ],
  title: fortLauderdaleData.metaTitle,
  description: fortLauderdaleData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/fort-lauderdale'),
  },
  openGraph: {
    title: fortLauderdaleData.metaTitle,
    description: fortLauderdaleData.metaDescription,
    url: getCanonicalUrl('/locations/fort-lauderdale'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_ftl_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Fort Lauderdale Maritime & Estate Security',
      },
    ],
  },
};

export default function FortLauderdaleLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Fort Lauderdale',
          description: fortLauderdaleData.metaDescription,
          path: '/locations/fort-lauderdale',
          areaServed: 'Fort Lauderdale, FL',
        })}
      />
      <FortLauderdaleClient />
    </>
  );
}
