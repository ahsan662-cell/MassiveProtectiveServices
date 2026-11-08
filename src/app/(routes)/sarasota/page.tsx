import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { SarasotaClient } from '../locations/sarasota/components/SarasotaClient';
import { sarasotaData } from '@/data/locations/sarasotaData';

export const metadata: Metadata = {
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

export default function SarasotaVanityPage() {
  return <SarasotaClient />;
}
