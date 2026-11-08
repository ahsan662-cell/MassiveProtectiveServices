import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import {
  CareersHeroSection,
  WhoWeHireSection,
  WhatThisRoleIsSection,
  WhyThisIsDifferentSection,
  OfficerExpectationsSection,
  OpenPositionsSection,
  ApplicationProcessSection,
  CareersApplicationFormSection,
  CareersQuestionsCTASection,
} from './components';

export const metadata: Metadata = {
  keywords: [
    "armed security jobs Florida",
    "Class G security guard hiring",
    "executive protection careers Florida",
    "Massive Protective Services careers",
  ],
  title: 'Careers | Massive Protective Services — Delray Beach, FL',
  description:
    'We Are Not a Staffing Agency. Massive Protective Services hires Florida Class G licensed armed professionals who take protection seriously. Explore opportunities in South Florida.',
  alternates: {
    canonical: getCanonicalUrl('/careers'),
  },
  openGraph: {
    title: 'Careers | Massive Protective Services — Delray Beach, FL',
    description:
      'We Are Not a Staffing Agency. Massive Protective Services hires Florida Class G licensed armed professionals who take protection seriously. Explore opportunities in South Florida.',
    url: getCanonicalUrl('/careers'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Careers Hero Section */}
      <CareersHeroSection />

      {/* 2. Who We Hire — Minimum Requirements & Evaluation Standard */}
      <WhoWeHireSection />

      {/* 3. What This Role Is — 4 Core Standards */}
      <WhatThisRoleIsSection />

      {/* 4. Why This Is Different — Guard Industry Critique */}
      <WhyThisIsDifferentSection />

      {/* 5. What MPS Expects From Every Officer */}
      <OfficerExpectationsSection />

      {/* 6. Open Positions / Opportunities Box */}
      <OpenPositionsSection />

      {/* 7. The Application Process — Simple and Direct */}
      <ApplicationProcessSection />

      {/* 8. Submit Your Application Form */}
      <CareersApplicationFormSection />

      {/* 9. Questions Before You Apply? Direct CTA */}
      <CareersQuestionsCTASection />
    </div>
  );
}
