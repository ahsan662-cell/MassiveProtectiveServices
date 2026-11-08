import type { Metadata } from 'next';
import { ManalapanClient } from './components/ManalapanClient';
import { manalapanData } from '@/data/locations/manalapanData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Manalapan estate security",
    "ocean-to-lake compound security Manalapan",
    "private security Manalapan Florida",
  ],
  title: manalapanData.metaTitle,
  description: manalapanData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/manalapan'),
  },
  openGraph: {
    title: manalapanData.metaTitle,
    description: manalapanData.metaDescription,
    url: getCanonicalUrl('/locations/manalapan'),
    siteName: 'Massive Protective Services',
    images: [
      {
        url: manalapanData.hero.bgImage,
        width: 1200,
        height: 630,
        alt: 'Manalapan Estate Security & Armed Officers FL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: manalapanData.metaTitle,
    description: manalapanData.metaDescription,
    images: [manalapanData.hero.bgImage],
  },
};

export default function ManalapanPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Manalapan',
          description: manalapanData.metaDescription,
          path: '/locations/manalapan',
          areaServed: 'Manalapan, FL',
        })}
      />
      <ManalapanClient />
    </>
  );
}
