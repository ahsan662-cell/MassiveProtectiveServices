import { Metadata } from 'next';
import { BocaRatonClient } from './components/BocaRatonClient';
import { bocaRatonData } from '@/data/locations/bocaRatonData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Boca Raton armed security",
    "Boca Raton executive protection",
    "gated community security Boca Raton",
    "private estate protection Boca Raton",
    "Royal Palm Yacht Club security",
  ],
  title: bocaRatonData.metaTitle,
  description: bocaRatonData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/boca-raton'),
  },
  openGraph: {
    title: bocaRatonData.metaTitle,
    description: bocaRatonData.metaDescription,
    url: getCanonicalUrl('/locations/boca-raton'),
    siteName: 'Massive Protective Services',
    type: 'website',
  },
};

export default function BocaRatonLocationPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Boca Raton',
          description: bocaRatonData.metaDescription,
          path: '/locations/boca-raton',
          areaServed: 'Boca Raton, FL',
        })}
      />
      <BocaRatonClient />
    </>
  );
}
