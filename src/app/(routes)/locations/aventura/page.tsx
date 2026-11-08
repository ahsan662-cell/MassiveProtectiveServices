import { Metadata } from 'next';
import { AventuraClient } from './components/AventuraClient';
import { aventuraData } from '@/data/locations/aventuraData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Aventura executive protection",
    "Aventura armed security",
    "luxury condominium security Aventura",
    "Williams Island private security",
  ],
  title: aventuraData.metaTitle,
  description: aventuraData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/aventura'),
  },
  openGraph: {
    title: aventuraData.metaTitle,
    description: aventuraData.metaDescription,
    url: getCanonicalUrl('/locations/aventura'),
    siteName: 'Massive Protective Services',
    type: 'website',
  },
};

export default function AventuraLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Aventura',
          description: aventuraData.metaDescription,
          path: '/locations/aventura',
          areaServed: 'Aventura, FL',
        })}
      />
      <AventuraClient />
    </>
  );
}
