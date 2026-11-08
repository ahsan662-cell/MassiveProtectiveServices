import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { OceanRidgeClient } from '../locations/ocean-ridge/components/OceanRidgeClient';
import { oceanRidgeData } from '@/data/locations/oceanRidgeData';

export const metadata: Metadata = {
  title: oceanRidgeData.metaTitle,
  description: oceanRidgeData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/ocean-ridge'),
  },
};

export default function OceanRidgeAliasPage() {
  return <OceanRidgeClient />;
}
