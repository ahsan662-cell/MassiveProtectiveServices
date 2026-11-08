import { Metadata } from 'next';
import { LocationsOverviewClient } from './components/LocationsOverviewClient';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';

export const metadata: Metadata = {
  keywords: [
    "Massive Protective Services locations",
    "Florida armed security service areas",
    "executive protection locations Florida",
    "Palm Beach Broward Miami-Dade security footprint",
  ],
  title: 'Florida Locations & Deployment Grid | Massive Protective Services',
  description:
    'Explore licensed armed security and executive protection across 19+ Florida jurisdictions. Serving Palm Beach County, Broward, Miami-Dade, and regional Florida markets. FL License B1400200.',
  alternates: {
    canonical: getCanonicalUrl('/locations'),
  },
  openGraph: {
    title: 'Florida Locations & Deployment Grid | Massive Protective Services',
    description:
      'Licensed armed executive protection, residential estate security, and airport escort across 19+ Florida jurisdictions. FL License B1400200.',
    url: getCanonicalUrl('/locations'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Locations & Deployment Grid | Massive Protective Services',
    description:
      'Explore licensed armed security and executive protection across 19+ Florida jurisdictions.',
  },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Florida Deployment Grid',
          description:
            'Licensed armed security and executive protection across 19+ Florida jurisdictions. Serving Palm Beach County, Broward, Miami-Dade, and regional Florida markets.',
          path: '/locations',
        })}
      />
      <LocationsOverviewClient />
    </>
  );
}
