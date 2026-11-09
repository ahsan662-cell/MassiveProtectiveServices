import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import {
  TestimonialsHeroSection,
  TestimonialsGridSection,
  VerifiableCredentialsSection,
  DirectReferencesNDASection,
  TestimonialsFinalCTASection,
} from './components';

export const metadata: Metadata = {
  keywords: [
    "private security testimonials",
    "executive protection reviews South Florida",
    "confidential security client references",
  ],
  alternates: {
    canonical: getCanonicalUrl('/testimonials'),
  },
  title: 'Client Testimonials & Confidential References | Massive Protective Services',
  description:
    'What clients say without saying who they are. Discretion-first private security testimonials, verifiable credentials (FL License B1400200), and NDA references across Palm Beach, Broward, and Miami-Dade Counties.',
  openGraph: {
    title: 'Client Testimonials | Massive Protective Services',
    description:
      'What clients say without saying who they are. Verifiable credentials and mutual NDA references for qualified prospective clients.',
    url: getCanonicalUrl('/testimonials'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A0A0A]">
      {/* 1. Hero & Confidentiality Cards (Screenshot 1) */}
      <TestimonialsHeroSection />

      {/* 2. Client Quotes & Reviews Grid (Screenshot 2) */}
      <TestimonialsGridSection />

      {/* 3. Verifiable Credentials Grid (Screenshot 3 Top) */}
      <VerifiableCredentialsSection />

      {/* 4. Direct References Under NDA (Screenshot 3 Bottom) */}
      <DirectReferencesNDASection />

      {/* 5. Final CTA Conversation & Statutory Footer (Screenshot 4) */}
      <TestimonialsFinalCTASection />
    </div>
  );
}
