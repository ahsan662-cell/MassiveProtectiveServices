import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { GulfStreamClient } from '../locations/gulf-stream/components/GulfStreamClient';
import { gulfStreamData } from '@/data/locations/gulfStreamData';

export const metadata: Metadata = {
  title: gulfStreamData.metaTitle,
  description: gulfStreamData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/gulf-stream'),
  },
};

export default function GulfStreamAliasPage() {
  return <GulfStreamClient />;
}
