import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { PrivacyHeroSection, PrivacyContentSection } from './components';

export const metadata: Metadata = {
  keywords: [
    "privacy policy Massive Protective Services",
    "client confidentiality security firm",
  ],
  title: 'Privacy Policy | Massive Protective Services — Delray Beach, FL',
  description:
    'Privacy Policy for Massive Protective Services Inc. (FL License B1400200). Delray Beach, Palm Beach County, FL. Learn how we safeguard client and inquiry information.',
  alternates: {
    canonical: getCanonicalUrl('/privacy'),
  },
  openGraph: {
    title: 'Privacy Policy | Massive Protective Services — Delray Beach, FL',
    description:
      'Privacy Policy for Massive Protective Services Inc. (FL License B1400200). Delray Beach, Palm Beach County, FL. Learn how we safeguard client and inquiry information.',
    url: getCanonicalUrl('/privacy'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Privacy Hero Header with Statutory Ribbon (Screenshot) */}
      <PrivacyHeroSection />

      {/* 2. Full 10 Privacy Policy Sections */}
      <PrivacyContentSection />
    </div>
  );
}
