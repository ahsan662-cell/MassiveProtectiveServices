import { Metadata } from 'next';
import { LighthousePointClient } from './components/LighthousePointClient';
import { lighthousePointData } from '@/data/locations/lighthousePointData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Lighthouse Point security guards",
    "waterfront estate security Lighthouse Point",
    "armed security Lighthouse Point FL",
  ],
  title: lighthousePointData.metaTitle,
  description: lighthousePointData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/lighthouse-point'),
  },
  openGraph: {
    title: lighthousePointData.metaTitle,
    description: lighthousePointData.metaDescription,
    url: getCanonicalUrl('/locations/lighthouse-point'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_lighthouse_point_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse Point Waterfront Estate and Bodyguard Security',
      },
    ],
  },
};

export default function LighthousePointLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Lighthouse Point',
          description: lighthousePointData.metaDescription,
          path: '/locations/lighthouse-point',
          areaServed: 'Lighthouse Point, FL',
        })}
      />
      <LighthousePointClient />
    </>
  );
}
