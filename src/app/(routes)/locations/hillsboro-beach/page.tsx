import { Metadata } from 'next';
import { HillsboroBeachClient } from './components/HillsboroBeachClient';
import { hillsboroBeachData } from '@/data/locations/hillsboroBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Hillsboro Beach estate security",
    "Millionaires Mile security Hillsboro",
    "private security Hillsboro Beach",
  ],
  title: hillsboroBeachData.metaTitle,
  description: hillsboroBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/hillsboro-beach'),
  },
  openGraph: {
    title: hillsboroBeachData.metaTitle,
    description: hillsboroBeachData.metaDescription,
    url: getCanonicalUrl('/locations/hillsboro-beach'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_hillsboro_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hillsboro Beach Estate & Inlet Security',
      },
    ],
  },
};

export default function HillsboroBeachLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Hillsboro Beach',
          description: hillsboroBeachData.metaDescription,
          path: '/locations/hillsboro-beach',
          areaServed: 'Hillsboro Beach, FL',
        })}
      />
      <HillsboroBeachClient />
    </>
  );
}
