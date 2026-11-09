import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';
import {
  HeroSection,
  WhoWeAreSection,
  ServicesGrid,
  WhoWeProtectSection,
  WhyMassiveProtectiveSection,
  WhereWeOperateSection,
  AboutMPSSection,
  TestimonialsSection,
  ProcessSection,
  FinalCTASection,
} from './components';
import GoogleReviews from '@/components/GoogleReviews';

export const metadata: Metadata = {
  keywords: [
    "Armed Security South Florida",
    "Executive Protection Delray Beach",
    "Private Security Palm Beach",
    "Class G Armed Guards Miami-Dade",
    "Estate Security Broward",
    "FDACS License B1400200",
  ],
  title: 'Massive Protective Services | Armed Security & Executive Protection South Florida',
  description:
    'A licensed private security firm headquartered in Delray Beach — serving estates, executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties. FDACS License B1400200.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    title: 'Massive Protective Services | Armed Security & Executive Protection South Florida',
    description:
      'A licensed private security firm headquartered in Delray Beach — serving estates, executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties. FDACS License B1400200.',
    url: getCanonicalUrl('/'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A0A0A]">
      <JsonLd data={getLocalBusinessSchema({ path: '/' })} />
      {/* 1. Hero Section (Screenshot 1) */}
      <HeroSection />

      {/* 2. WHO WE ARE (Screenshot 2) */}
      <WhoWeAreSection />

      {/* 3. WHAT WE DO (Screenshot 3) */}
      <ServicesGrid />

      {/* Verified Google Business Reviews */}
      {/* <GoogleReviews /> */}

      {/* 4. WHO WE PROTECT & Credential Stat Bar (Screenshot 4) */}
      <WhoWeProtectSection />

      {/* 5. WHY MASSIVE PROTECTIVE (Screenshot 5) */}
      <WhyMassiveProtectiveSection />

      {/* 6. WHERE WE OPERATE & Coastal Tactical Map (Screenshot 6) */}
      <WhereWeOperateSection />

      {/* 7. ABOUT MASSIVE PROTECTIVE SERVICES & Company Essentials (Screenshot 7) */}
      <AboutMPSSection />

      {/* 8. WHAT OUR CLIENTS SAY (Screenshot 8) */}
      <TestimonialsSection />

      {/* 9. HOW IT WORKS (Screenshot 9) */}
      <ProcessSection />

      {/* 10. READY TO DISCUSS YOUR SECURITY? (Screenshot 10) */}
      <FinalCTASection />
    </div>
  );
}
