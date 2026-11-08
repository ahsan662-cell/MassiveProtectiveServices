import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { OrlandoClient } from '../locations/orlando/components/OrlandoClient';
import { orlandoData } from '@/data/locations/orlandoData';

export const metadata: Metadata = {
  title: orlandoData.metaTitle,
  description: orlandoData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/orlando'),
  },
};

export default function OrlandoAliasPage() {
  return <OrlandoClient />;
}
