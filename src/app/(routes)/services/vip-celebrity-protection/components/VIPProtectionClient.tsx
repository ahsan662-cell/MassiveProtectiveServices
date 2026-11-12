
import React from 'react';
import {
  ServiceHero,
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceAudienceGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceCoverageArea,
  ServiceFAQ,
  ServiceRelatedServices,
  ServiceClosingCTA,
  vipProtectionData,
} from '@/components/services';
import { VIPProtectionConsultationForm } from './VIPProtectionConsultationForm';

export const VIPProtectionClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screen 1) */}
      <ServiceHero data={vipProtectionData.hero} />

      {/* 2. South Florida Privacy Statement (Screen 2) */}
      <ServicePhilosophy data={vipProtectionData.philosophy} />

      {/* 3. Scope Grid: Full-Spectrum VIP & Celebrity Security (Screen 3) */}
      <ServiceScopeGrid data={vipProtectionData.scope} />

      {/* 4. Target Audience: Trusted by the Most Recognized Names (Screen 4) */}
      <ServiceAudienceGrid data={vipProtectionData.audience} />

      {/* 5. How We Protect Privacy: Discretion Isn't a Feature (Screen 5) */}
      {vipProtectionData.privacy && (
        <ServicePhilosophy data={vipProtectionData.privacy} />
      )}

      {/* 6. Process Roadmap: From First Contact to Final Departure (Screen 6 / Image 1) */}
      {vipProtectionData.process && (
        <ServiceProcessGrid data={vipProtectionData.process} />
      )}

      {/* 7. Why Massive Protective: South Florida VIP Security That Matches the Environment (Screen 7 / Image 2) */}
      {vipProtectionData.whyMassive && (
        <ServiceWhyMassive data={vipProtectionData.whyMassive} />
      )}

      {/* 8. Regional Operational Footprint: VIP Protection Across South Florida's Highest-Profile Destinations (Screen 8 / Image 3) */}
      {vipProtectionData.serviceArea && (
        <ServiceCoverageArea data={vipProtectionData.serviceArea} />
      )}

      {/* 9. Dedicated VIP Consultation Form (Screen 9 / Image 4) */}
      <VIPProtectionConsultationForm id="consultation-form" />

      {/* 10. Frequently Asked Questions (Screen 10 / Image 5) */}
      {vipProtectionData.faq && <ServiceFAQ data={vipProtectionData.faq} />}

      {/* 11. Related Services Exploration */}
      {vipProtectionData.relatedServices && (
        <ServiceRelatedServices data={vipProtectionData.relatedServices} />
      )}

      {/* 12. Closing Direct CTA */}
      {vipProtectionData.closingCta && (
        <ServiceClosingCTA data={vipProtectionData.closingCta} />
      )}
    </div>
  );
};
