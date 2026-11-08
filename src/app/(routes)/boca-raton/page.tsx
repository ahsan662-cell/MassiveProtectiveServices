import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { BocaRatonClient } from '../locations/boca-raton/components/BocaRatonClient';
import { bocaRatonData } from '@/data/locations/bocaRatonData';

export const metadata: Metadata = {
  title: bocaRatonData.metaTitle,
  description: bocaRatonData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/boca-raton'),
  },
};

export default function BocaRatonAliasPage() {
  return <BocaRatonClient />;
}
