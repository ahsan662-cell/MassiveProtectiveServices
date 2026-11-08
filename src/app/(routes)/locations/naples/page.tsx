import type { Metadata } from 'next';
import { NaplesClient } from './components/NaplesClient';
import { naplesData } from '@/data/locations/naplesData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Naples private security",
    "Port Royal estate security Naples",
    "Naples executive protection",
    "armed officers Naples Florida",
  ],
  title: naplesData.metaTitle,
  description: naplesData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/naples'),
  },
  openGraph: {
    title: naplesData.metaTitle,
    description: naplesData.metaDescription,
    url: getCanonicalUrl('/locations/naples'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: naplesData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Protection in Naples | Massive Protective Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: naplesData.metaTitle,
    description: naplesData.metaDescription,
    images: [naplesData.hero.bgImage],
  },
};

export default function NaplesLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Naples',
          description: naplesData.metaDescription,
          path: '/locations/naples',
          areaServed: 'Naples, FL',
        })}
      />
      <NaplesClient />
    </>
  );
}
