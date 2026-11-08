import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { NaplesClient } from '../locations/naples/components/NaplesClient';
import { naplesData } from '@/data/locations/naplesData';

export const metadata: Metadata = {
  title: naplesData.metaTitle,
  description: naplesData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/naples'),
  },
};

export default function NaplesAliasPage() {
  return <NaplesClient />;
}
