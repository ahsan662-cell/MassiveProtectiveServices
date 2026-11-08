import { Metadata } from 'next';
import { JacksonvilleClient } from './components/JacksonvilleClient';
import { jacksonvilleData } from '@/data/locations/jacksonvilleData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Jacksonville armed security",
    "Jacksonville executive protection",
    "corporate security Jacksonville FL",
  ],
  title: jacksonvilleData.metaTitle,
  description: jacksonvilleData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/jacksonville'),
  },
  openGraph: {
    title: jacksonvilleData.metaTitle,
    description: jacksonvilleData.metaDescription,
    url: getCanonicalUrl('/locations/jacksonville'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_jacksonville_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacksonville Private Security and Protection Services',
      },
    ],
  },
};

export default function JacksonvilleLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Jacksonville',
          description: jacksonvilleData.metaDescription,
          path: '/locations/jacksonville',
          areaServed: 'Jacksonville, FL',
        })}
      />
      <JacksonvilleClient />
    </>
  );
}
