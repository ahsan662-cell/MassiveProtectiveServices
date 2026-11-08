import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { BlogPageClient } from '../blog/components/BlogPageClient';

export const metadata: Metadata = {
  keywords: [
    "Florida security resources",
    "executive protection guide South Florida",
    "private security legal statutory standards",
  ],
  title: 'Resources & Security Guides | Massive Protective Services',
  description: 'Practical security intelligence and guides for South Florida.',
  alternates: {
    canonical: getCanonicalUrl('/resources'),
  },
  openGraph: {
    title: 'Resources & Security Guides | Massive Protective Services',
    description: 'Practical security intelligence and guides for South Florida.',
    url: getCanonicalUrl('/resources'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return <BlogPageClient />;
}
