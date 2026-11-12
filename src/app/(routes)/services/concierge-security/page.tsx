import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import {
  ConciergeHeroSection,
  ConciergePhilosophySection,
  ConciergeScopeSection,
  ConciergeWhereRoleFitsSection,
  ConciergeShapedPresenceSection,
  ConciergeProcessSection,
  ConciergeHeadquartersSection,
  ConciergeConsultationFormSection,
  ConciergeFAQSection,
  ConciergeRelatedServicesSection,
  ConciergeCTASection,
} from './components';

export const metadata: Metadata = {
  keywords: [
    "concierge security South Florida",
    "luxury front of house security",
    "residential concierge security Miami",
    "hospitality security guards",
    "luxury condominium security",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/concierge-security'),
  },
  title: 'Concierge Security in South Florida | Massive Protective Services',
  description:
    'Discreet front-of-house security for luxury residential, hospitality, and commercial properties across Palm Beach, Broward and Miami-Dade. FDACS License B1400200.',
  openGraph: {
    title: 'Concierge Security in South Florida | Massive Protective Services',
    description:
      'Discreet front-of-house security. A considered welcome, with a watchful presence behind every arrival.',
    url: getCanonicalUrl('/services/concierge-security'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ConciergeSecurityPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      <JsonLd data={getServiceSchema({
  name: "Concierge Security Services",
  serviceType: "Concierge Security",
  description: "Discreet front-of-house security for luxury residential, hospitality, and commercial properties across Palm Beach, Broward and Miami-Dade. FDACS License B1400200.",
  slug: "concierge-security"
})} />
      {/* 1. Hero with Breadcrumbs & Dual Action Buttons */}
      <ConciergeHeroSection />

      {/* 2. Philosophy: Effortless First Impression with Purpose (Light Alabaster) */}
      <ConciergePhilosophySection />

      {/* 3. Proposed Service Scope: 8 Front-of-House Roles (Dark) */}
      <ConciergeScopeSection />

      {/* 4. Where the Role Fits: Residential, Hospitality, Commercial (Light Alabaster) */}
      <ConciergeWhereRoleFitsSection />

      {/* 5. Shaped Around Your Building: 3 Presence Pillars (Light Alabaster) */}
      <ConciergeShapedPresenceSection />

      {/* 6. A Property-Led Process: 4-Step Onboarding Roadmap (Dark) */}
      <ConciergeProcessSection />

      {/* 7. Delray Beach Headquarters: South Florida Perspective (Dark Banner) */}
      <ConciergeHeadquartersSection />

      {/* 8. Dedicated Consultation Form: Request a Confidential Consultation (Dark) */}
      <ConciergeConsultationFormSection />

      {/* 9. Concierge Security FAQ: 6 Questions & Answers (Light Alabaster) */}
      <ConciergeFAQSection />

      {/* 10. Explore Further: A Complete Circle of Protection (Light Alabaster) */}
      <ConciergeRelatedServicesSection />

      {/* 11. Closing Direct Consultation CTA (Dark) */}
      <ConciergeCTASection />
    </div>
  );
}
