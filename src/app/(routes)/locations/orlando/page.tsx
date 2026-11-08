import type { Metadata } from 'next';
import { OrlandoClient } from './components/OrlandoClient';
import { orlandoData } from '@/data/locations/orlandoData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Orlando armed security",
    "Orlando executive protection",
    "corporate event security Orlando",
    "private security guards Orlando",
  ],
  title: orlandoData.metaTitle,
  description: orlandoData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/orlando'),
  },
  openGraph: {
    title: orlandoData.metaTitle,
    description: orlandoData.metaDescription,
    url: getCanonicalUrl('/locations/orlando'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: orlandoData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Private Security & Protection in Orlando | Massive Protective Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: orlandoData.metaTitle,
    description: orlandoData.metaDescription,
    images: [orlandoData.hero.bgImage],
  },
};

export default function OrlandoLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Orlando',
          description: orlandoData.metaDescription,
          path: '/locations/orlando',
          areaServed: 'Orlando, FL',
        })}
      />
      <OrlandoClient />
    </>
  );
}
