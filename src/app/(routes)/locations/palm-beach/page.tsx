import { Metadata } from 'next';
import { PalmBeachClient } from './components/PalmBeachClient';
import { palmBeachData } from '@/data/locations/palmBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Palm Beach estate security",
    "oceanfront security Palm Beach",
    "private club security Palm Beach",
    "Class G armed guards Palm Beach",
    "Palm Beach executive protection",
  ],
  title: palmBeachData.metaTitle,
  description: palmBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/palm-beach'),
  },
  openGraph: {
    title: palmBeachData.metaTitle,
    description: palmBeachData.metaDescription,
    url: getCanonicalUrl('/locations/palm-beach'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: palmBeachData.metaTitle,
    description: palmBeachData.metaDescription,
  },
};

export default function PalmBeachPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Palm Beach',
          description: palmBeachData.metaDescription,
          path: '/locations/palm-beach',
          areaServed: 'Palm Beach, FL',
        })}
      />
      <PalmBeachClient />
    </>
  );
}
