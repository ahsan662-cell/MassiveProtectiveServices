import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { ManalapanClient } from '../locations/manalapan/components/ManalapanClient';
import { manalapanData } from '@/data/locations/manalapanData';

export const metadata: Metadata = {
  title: manalapanData.metaTitle,
  description: manalapanData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/manalapan'),
  },
};

export default function ManalapanAliasPage() {
  return <ManalapanClient />;
}
