import { Metadata } from 'next';
import { WestPalmBeachClient } from './components/WestPalmBeachClient';
import { westPalmBeachData } from '@/data/locations/westPalmBeachData';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "West Palm Beach armed security",
    "West Palm Beach executive protection",
    "downtown West Palm Beach security",
    "corporate security West Palm Beach",
  ],
  title: westPalmBeachData.metaTitle,
  description: westPalmBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/west-palm-beach'),
  },
  openGraph: {
    title: westPalmBeachData.metaTitle,
    description: westPalmBeachData.metaDescription,
    url: getCanonicalUrl('/locations/west-palm-beach'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: westPalmBeachData.metaTitle,
    description: westPalmBeachData.metaDescription,
  },
};

export default function WestPalmBeachPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — West Palm Beach',
          description: westPalmBeachData.metaDescription,
          path: '/locations/west-palm-beach',
          areaServed: 'West Palm Beach, FL',
        })}
      />
      <WestPalmBeachClient />
    </>
  );
}
