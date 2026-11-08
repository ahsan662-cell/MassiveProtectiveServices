import { Metadata } from 'next';
import { GulfStreamClient } from './components/GulfStreamClient';
import { gulfStreamData } from '@/data/locations/gulfStreamData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Gulf Stream estate security",
    "private security Gulf Stream FL",
    "armed residential protection Gulf Stream",
  ],
  title: gulfStreamData.metaTitle,
  description: gulfStreamData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/gulf-stream'),
  },
  openGraph: {
    title: gulfStreamData.metaTitle,
    description: gulfStreamData.metaDescription,
    url: getCanonicalUrl('/locations/gulf-stream'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: '/images/mps_location_gulfstream_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gulf Stream Oceanfront & Intracoastal Estate Security',
      },
    ],
  },
};

export default function GulfStreamLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Gulf Stream',
          description: gulfStreamData.metaDescription,
          path: '/locations/gulf-stream',
          areaServed: 'Gulf Stream, FL',
        })}
      />
      <GulfStreamClient />
    </>
  );
}
