import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { WestPalmBeachClient } from '../locations/west-palm-beach/components/WestPalmBeachClient';
import { westPalmBeachData } from '@/data/locations/westPalmBeachData';

export const metadata: Metadata = {
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

export default function WestPalmBeachVanityPage() {
  return <WestPalmBeachClient />;
}
