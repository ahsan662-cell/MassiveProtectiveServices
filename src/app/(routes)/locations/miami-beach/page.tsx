import type { Metadata } from 'next';
import { MiamiBeachClient } from './components/MiamiBeachClient';
import { miamiBeachData } from '@/data/locations/miamiBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Miami Beach security guards",
    "South Beach VIP protection",
    "Star Island estate security",
    "Art Basel Miami Beach security",
  ],
  title: miamiBeachData.metaTitle,
  description: miamiBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/miami-beach'),
  },
  openGraph: {
    title: miamiBeachData.metaTitle,
    description: miamiBeachData.metaDescription,
    url: getCanonicalUrl('/locations/miami-beach'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: miamiBeachData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Celebrity Protection Miami Beach FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: miamiBeachData.metaTitle,
    description: miamiBeachData.metaDescription,
    images: [miamiBeachData.hero.bgImage],
  },
};

export default function MiamiBeachPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Miami Beach',
          description: miamiBeachData.metaDescription,
          path: '/locations/miami-beach',
          areaServed: 'Miami Beach, FL',
        })}
      />
      <MiamiBeachClient />
    </>
  );
}
