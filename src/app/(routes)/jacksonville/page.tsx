import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import { JacksonvilleClient } from '../locations/jacksonville/components/JacksonvilleClient';
import { jacksonvilleData } from '@/data/locations/jacksonvilleData';

export const metadata: Metadata = {
  title: jacksonvilleData.metaTitle,
  description: jacksonvilleData.metaDescription,
  alternates: {
    canonical: getCanonicalUrl('/locations/jacksonville'),
  },
};

export default function JacksonvilleAliasPage() {
  return <JacksonvilleClient />;
}
