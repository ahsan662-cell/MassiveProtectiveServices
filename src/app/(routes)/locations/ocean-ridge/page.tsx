import type { Metadata } from 'next';
import { OceanRidgeClient } from './components/OceanRidgeClient';
import { oceanRidgeData } from '@/data/locations/oceanRidgeData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Ocean Ridge estate security",
    "oceanfront compound protection Ocean Ridge",
    "private security Ocean Ridge FL",
  ],
  title: oceanRidgeData.metaTitle,
  description: oceanRidgeData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/ocean-ridge'),
  },
  openGraph: {
    title: oceanRidgeData.metaTitle,
    description: oceanRidgeData.metaDescription,
    url: getCanonicalUrl('/locations/ocean-ridge'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: oceanRidgeData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Estate Protection in Ocean Ridge, FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: oceanRidgeData.metaTitle,
    description: oceanRidgeData.metaDescription,
    images: [oceanRidgeData.hero.bgImage],
  },
};

export default function OceanRidgeLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Ocean Ridge',
          description: oceanRidgeData.metaDescription,
          path: '/locations/ocean-ridge',
          areaServed: 'Ocean Ridge, FL',
        })}
      />
      <OceanRidgeClient />
    </>
  );
}
