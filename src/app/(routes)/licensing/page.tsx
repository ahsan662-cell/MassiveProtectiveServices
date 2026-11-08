import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import {
  LicensingHeroSection,
  ThreeLicensesSection,
  Chapter493StatutesSection,
  VerifyLicenseStepsSection,
  QuestionsToAskSection,
  LicensingStandardsComparisonSection,
  LicensingFAQSection,
  LicensingReadyToTalkCTASection,
} from './components';

export const metadata: Metadata = {
  keywords: [
    "Florida Class B security agency license",
    "Florida Class G armed license",
    "FDACS license verification B1400200",
    "Chapter 493 Florida Statutes compliance",
  ],
  alternates: {
    canonical: getCanonicalUrl('/licensing'),
  },
  title: 'Florida Licensing & Credentials | Massive Protective Services — FL License B1400200',
  description:
    'Florida-Licensed. Armed. Verifiable. Class B Security Agency License B1400200, Chapter 493 Florida Statutes compliance, Class G armed officers, and instant FDACS verification guide.',
  openGraph: {
    title: 'Florida Licensing & Credentials | Massive Protective Services',
    description:
      'Every claim on this page is a public record. FL Agency License B1400200, Chapter 493 compliance, and Class G armed credentials.',
    url: getCanonicalUrl('/licensing'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LicensingPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero & Statutory Ribbon */}
      <LicensingHeroSection />

      {/* 2. Three Licenses: Class B, Class G, Class D */}
      <ThreeLicensesSection />

      {/* 3. Chapter 493 Statutes & At A Glance Sidebar */}
      <Chapter493StatutesSection />

      {/* 4. How to Verify on FDACS in 4 Steps */}
      <VerifyLicenseStepsSection />

      {/* 5. 6 Questions Every Client Should Ask Before Signing */}
      <QuestionsToAskSection />

      {/* 6. What Licensing Requires and What We Add to It (Standards Comparison) */}
      <LicensingStandardsComparisonSection />

      {/* 7. Common Questions About Florida Security Licensing (FAQ Accordion) */}
      <LicensingFAQSection />

      {/* 8. Closing Private Conversation CTA */}
      <LicensingReadyToTalkCTASection />
    </div>
  );
}
