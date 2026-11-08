import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { BoyntonBeachClient } from '../locations/boynton-beach/components/BoyntonBeachClient';
import { boyntonBeachData } from '@/data/locations/boyntonBeachData';

export const metadata: Metadata = {
  title: boyntonBeachData.metaTitle,
  description: boyntonBeachData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/boynton-beach'),
  },
};

export default function BoyntonBeachAliasPage() {
  return <BoyntonBeachClient />;
}
