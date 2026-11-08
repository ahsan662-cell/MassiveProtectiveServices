import { Metadata } from 'next';
import { TampaClient } from './components/TampaClient';
import { tampaData } from '@/data/locations/tampaData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Tampa armed security",
    "Tampa executive protection",
    "private security guards Tampa Bay",
    "corporate security Tampa",
  ],
  title: tampaData.metaTitle,
  description: tampaData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/tampa'),
  },
  openGraph: {
    title: tampaData.metaTitle,
    description: tampaData.metaDescription,
    url: getCanonicalUrl('/locations/tampa'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: tampaData.metaTitle,
    description: tampaData.metaDescription,
  },
};

export default function TampaPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Tampa',
          description: tampaData.metaDescription,
          path: '/locations/tampa',
          areaServed: 'Tampa, FL',
        })}
      />
      <TampaClient />
    </>
  );
}
