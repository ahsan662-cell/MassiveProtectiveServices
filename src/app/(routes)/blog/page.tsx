import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { BlogPageClient } from './components/BlogPageClient';

export const metadata: Metadata = {
  keywords: [
    "security intelligence South Florida",
    "executive protection guide",
    "private security cost Florida",
    "estate security protocols",
  ],
  title: 'Security Intelligence & Guides | Massive Protective Services — Delray Beach, FL',
  description:
    'Security Guides for Executives, Families and Estate Owners. Practical guidance on executive protection, armed security, Florida licensing and private security costs.',
  alternates: {
    canonical: getCanonicalUrl('/blog'),
  },
  openGraph: {
    title: 'Security Intelligence & Guides | Massive Protective Services — Delray Beach, FL',
    description:
      'Security Guides for Executives, Families and Estate Owners. Practical guidance on executive protection, armed security, Florida licensing and private security costs.',
    url: getCanonicalUrl('/blog'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
