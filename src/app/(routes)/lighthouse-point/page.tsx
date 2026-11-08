import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { LighthousePointClient } from '../locations/lighthouse-point/components/LighthousePointClient';
import { lighthousePointData } from '@/data/locations/lighthousePointData';

export const metadata: Metadata = {
  title: lighthousePointData.metaTitle,
  description: lighthousePointData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/lighthouse-point'),
  },
};

export default function LighthousePointAliasPage() {
  return <LighthousePointClient />;
}
