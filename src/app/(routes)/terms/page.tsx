import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { TermsHeroSection, TermsContentSection } from './components';

export const metadata: Metadata = {
  keywords: [
    "terms of service Massive Protective Services",
    "security services agreement Florida",
  ],
  title: 'Terms of Service | Massive Protective Services — Delray Beach, FL',
  description:
    'Terms of Service for Massive Protective Services Inc. Governed by the laws of the State of Florida. Delray Beach, Palm Beach County, FL.',
  alternates: {
    canonical: getCanonicalUrl('/terms'),
  },
  openGraph: {
    title: 'Terms of Service | Massive Protective Services — Delray Beach, FL',
    description:
      'Terms of Service for Massive Protective Services Inc. Governed by the laws of the State of Florida. Delray Beach, Palm Beach County, FL.',
    url: getCanonicalUrl('/terms'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Terms Hero Header with Statutory Ribbon (Screenshot 1) */}
      <TermsHeroSection />

      {/* 2. Full 10 Legal Sections (Screenshot 2) */}
      <TermsContentSection />
    </div>
  );
}
