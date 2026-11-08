import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { MiamiBeachClient } from '../locations/miami-beach/components/MiamiBeachClient';
import { miamiBeachData } from '@/data/locations/miamiBeachData';

export const metadata: Metadata = {
  title: miamiBeachData.metaTitle,
  description: miamiBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/miami-beach'),
  },
};

export default function MiamiBeachAliasPage() {
  return <MiamiBeachClient />;
}
