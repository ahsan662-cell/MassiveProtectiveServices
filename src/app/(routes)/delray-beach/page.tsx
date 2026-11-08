import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { DelrayBeachClient } from '../locations/delray-beach/components/DelrayBeachClient';
import { delrayBeachData } from '@/data/locations/delrayBeachData';

export const metadata: Metadata = {
  title: delrayBeachData.metaTitle,
  description: delrayBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/delray-beach'),
  },
};

export default function DelrayBeachAliasPage() {
  return <DelrayBeachClient />;
}
