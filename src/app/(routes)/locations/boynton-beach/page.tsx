import { Metadata } from 'next';
import { BoyntonBeachClient } from './components/BoyntonBeachClient';
import { boyntonBeachData } from '@/data/locations/boyntonBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Boynton Beach armed security",
    "Boynton Beach security guards",
    "private security Boynton Beach FL",
  ],
  title: boyntonBeachData.metaTitle,
  description: boyntonBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/boynton-beach'),
  },
  openGraph: {
    title: boyntonBeachData.metaTitle,
    description: boyntonBeachData.metaDescription,
    url: getCanonicalUrl('/locations/boynton-beach'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_boynton_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Boynton Beach Armed Security & Executive Protection',
      },
    ],
  },
};

export default function BoyntonBeachLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Boynton Beach',
          description: boyntonBeachData.metaDescription,
          path: '/locations/boynton-beach',
          areaServed: 'Boynton Beach, FL',
        })}
      />
      <BoyntonBeachClient />
    </>
  );
}
