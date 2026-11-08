import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';
import {
  AboutHeroSection,
  FounderBioSection,
  WhyWeExistSection,
  StandardsSection,
  WhoWeServeSection,
  AboutServiceAreaSection,
  FDACSLicenseSection,
  AboutFinalCTASection,
} from './components';
import GoogleReviews from '@/components/GoogleReviews';

export const metadata: Metadata = {
  keywords: [
    "Massive Protective Services founder",
    "Marc Tardalo security firm",
    "Florida Class B security agency",
    "Delray Beach private security",
    "FDACS License B1400200",
  ],
  title: 'About Massive Protective Services | Founded in Delray Beach, FL',
  description:
    'Founded in Delray Beach. Built on a Different Standard. Marc A. Tardalo founded Massive Protective Services to fill the gap between unarmed guard companies and the elite protection serious clients actually need.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'About Massive Protective Services | Founded in Delray Beach, FL',
    description:
      'Founded in Delray Beach. Built on a Different Standard. Marc A. Tardalo founded Massive Protective Services to fill the gap between unarmed guard companies and the elite protection serious clients actually need.',
    url: getCanonicalUrl('/about'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      <JsonLd data={getLocalBusinessSchema({ path: '/about' })} />
      {/* 1. About Hero Section */}
      <AboutHeroSection />

      {/* 2. The Founder & CEO Bio Section */}
      <FounderBioSection />

      {/* 3. Why We Exist Section */}
      <WhyWeExistSection />

      {/* 4. Standards That Govern Every Engagement */}
      <StandardsSection />

      {/* 5. Who We Serve Section */}
      <WhoWeServeSection />

      {/* 6. Our Service Area Section */}
      <AboutServiceAreaSection />

      {/* 7. Licensed & Verifiable FDACS Section */}
      <FDACSLicenseSection />

      {/* Verified Google Business Reviews */}
      <GoogleReviews />

      {/* 8. Final Call to Action Section */}
      <AboutFinalCTASection />
    </div>
  );
}
