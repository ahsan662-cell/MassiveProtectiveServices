import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { AventuraClient } from '../locations/aventura/components/AventuraClient';
import { aventuraData } from '@/data/locations/aventuraData';

export const metadata: Metadata = {
  title: aventuraData.metaTitle,
  description: aventuraData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/aventura'),
  },
};

export default function AventuraAliasPage() {
  return <AventuraClient />;
}
