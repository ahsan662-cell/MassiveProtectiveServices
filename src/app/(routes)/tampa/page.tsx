import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { TampaClient } from '../locations/tampa/components/TampaClient';
import { tampaData } from '@/data/locations/tampaData';

export const metadata: Metadata = {
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

export default function TampaVanityPage() {
  return <TampaClient />;
}
