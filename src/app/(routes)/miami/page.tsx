import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { MiamiClient } from '../locations/miami/components/MiamiClient';
import { miamiData } from '@/data/locations/miamiData';

export const metadata: Metadata = {
  title: miamiData.metaTitle,
  description: miamiData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/miami'),
  },
};

export default function MiamiAliasPage() {
  return <MiamiClient />;
}
