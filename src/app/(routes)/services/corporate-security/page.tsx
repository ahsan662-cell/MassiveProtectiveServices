import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import {
  CorporateHeroSection,
  CorporatePhilosophySection,
  CorporateScopeGridSection,
  WhoWeWorkWithCorporateSection,
  CorporateProcessSection,
  WhyMassiveCorporateSection,
  CorporateServiceAreaSection,
  CorporateConsultationFormSection,
  CorporateFAQSection,
  CorporateRelatedServicesSection,
  CorporateCTASection,
} from './components';

export const metadata: Metadata = {
  keywords: [
    "corporate security South Florida",
    "workplace violence prevention Florida",
    "high-risk termination security",
    "executive boardroom protection",
    "corporate campus armed security",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/corporate-security'),
  },
  title: 'Corporate Security Services in South Florida | Massive Protective Services',
  description:
    'Executive protection, high-risk terminations, workplace violence prevention, and on-site officers across Palm Beach, Broward, and Miami-Dade. FDACS License B1400200.',
  openGraph: {
    title: 'Corporate Security Services in South Florida | Massive Protective Services',
    description:
      'Your boardroom should be your safest room. We make sure it is. Executive protection, high-risk terminations, workplace violence prevention, and corporate security officers.',
    url: getCanonicalUrl('/services/corporate-security'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CorporateSecurityPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      <JsonLd data={getServiceSchema({
  name: "Corporate Security Services",
  serviceType: "Corporate Security",
  description: "Executive protection, high-risk terminations, workplace violence prevention, and on-site officers across Palm Beach, Broward, and Miami-Dade. FDACS License B1400200.",
  slug: "corporate-security"
})} />
      {/* 1. Hero with Boardroom Skyline, Breadcrumbs & Dual Action Buttons (Screenshot 1) */}
      <CorporateHeroSection />

      {/* 2. Philosophy & Boardroom Statement (Screenshot 2) */}
      <CorporatePhilosophySection />

      {/* 3. What Corporate Security Covers: 6 Scope Cards (Screenshot 3) */}
      <CorporateScopeGridSection />

      {/* 4. Who We Work With: Law Firms, Campuses, HR & Legal Teams (Screenshot 4) */}
      <WhoWeWorkWithCorporateSection />

      {/* 5. Our Process: 4 Operational Steps (Screenshot 5) */}
      <CorporateProcessSection />

      {/* 6. Why Massive: The Right Presence. The Right Credentials (Screenshot 6) */}
      <WhyMassiveCorporateSection />

      {/* 7. Service Area: Delray Beach HQ & Tri-County Corridor (Screenshot 7) */}
      <CorporateServiceAreaSection />

      {/* 8. Confidential Corporate Consultation Form (Screenshot 8) */}
      <CorporateConsultationFormSection />

      {/* 9. Corporate Security FAQ: Your Questions, Answered (Screenshot 9) */}
      <CorporateFAQSection />

      {/* 10. Related Services: Executive, Event, Residential (Screenshot 10) */}
      <CorporateRelatedServicesSection />

      {/* 11. Closing Direct Consultation & 24/7 Priority Hotline */}
      <CorporateCTASection />
    </div>
  );
}
