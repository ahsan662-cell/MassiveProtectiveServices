import type { Metadata } from 'next';
import { MiamiClient } from './components/MiamiClient';
import { miamiData } from '@/data/locations/miamiData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Miami executive protection",
    "armed security Brickell",
    "Coral Gables security guards",
    "Coconut Grove private security",
    "Key Biscayne bodyguard",
  ],
  title: miamiData.metaTitle,
  description: miamiData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/miami'),
  },
  openGraph: {
    title: miamiData.metaTitle,
    description: miamiData.metaDescription,
    url: getCanonicalUrl('/locations/miami'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: miamiData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Miami Executive Protection — Armed Security for an International City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: miamiData.metaTitle,
    description: miamiData.metaDescription,
    images: [miamiData.hero.bgImage],
  },
};

export default function MiamiLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Miami',
          description: miamiData.metaDescription,
          path: '/locations/miami',
          areaServed: 'Miami, FL',
        })}
      />
      <MiamiClient />
    </>
  );
}
