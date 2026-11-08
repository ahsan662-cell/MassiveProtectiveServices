import { Metadata } from 'next';
import { DelrayBeachClient } from './components/DelrayBeachClient';
import { delrayBeachData } from '@/data/locations/delrayBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Delray Beach armed security",
    "Delray Beach headquarters security firm",
    "Atlantic Avenue private security",
    "Delray Beach executive protection",
  ],
  title: delrayBeachData.metaTitle,
  description: delrayBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/delray-beach'),
  },
  openGraph: {
    title: delrayBeachData.metaTitle,
    description: delrayBeachData.metaDescription,
    url: getCanonicalUrl('/locations/delray-beach'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_delray_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Delray Beach Private Security & Bodyguards Headquarters',
      },
    ],
  },
};

export default function DelrayBeachLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Delray Beach Headquarters',
          description: delrayBeachData.metaDescription,
          path: '/locations/delray-beach',
          areaServed: 'Delray Beach, FL',
        })}
      />
      <DelrayBeachClient />
    </>
  );
}
