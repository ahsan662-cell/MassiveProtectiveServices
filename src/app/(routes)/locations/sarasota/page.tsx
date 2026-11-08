import { Metadata } from 'next';
import { SarasotaClient } from './components/SarasotaClient';
import { sarasotaData } from '@/data/locations/sarasotaData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Sarasota estate security",
    "Sarasota armed security",
    "Bird Key private protection",
    "Sarasota executive protection",
  ],
  title: sarasotaData.metaTitle,
  description: sarasotaData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/sarasota'),
  },
  openGraph: {
    title: sarasotaData.metaTitle,
    description: sarasotaData.metaDescription,
    url: getCanonicalUrl('/locations/sarasota'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: sarasotaData.metaTitle,
    description: sarasotaData.metaDescription,
  },
};

export default function SarasotaPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Sarasota',
          description: sarasotaData.metaDescription,
          path: '/locations/sarasota',
          areaServed: 'Sarasota, FL',
        })}
      />
      <SarasotaClient />
    </>
  );
}
