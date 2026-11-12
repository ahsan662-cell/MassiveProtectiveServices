
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
  lossPreventionData,
} from '@/components/services';
import { LossPreventionConsultationForm } from './LossPreventionConsultationForm';

export const LossPreventionClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screen 1) */}
      <ServiceHero data={lossPreventionData.hero} />

      {/* 2. Philosophy & Core Statement (Screen 2) */}
      <ServicePhilosophy data={lossPreventionData.philosophy} />

      {/* 3. Scope Grid: What Your Loss Prevention Plan Can Cover (Screen 3) */}
      <ServiceScopeGrid data={lossPreventionData.scope} />

      {/* 4. Target Audience: For retailers with more at stake (Screen 4) */}
      <ServiceAudienceGrid data={lossPreventionData.audience} />

      {/* 5. Process Roadmap: An exacting process. A practical plan (Screen 5) */}
      <ServiceProcessGrid data={lossPreventionData.process} />

      {/* 6. Retail Environment Presence: The right presence for your retail environment (Screen 6) */}
      {lossPreventionData.whyMassive && (
        <ServiceWhyMassive data={lossPreventionData.whyMassive} />
      )}

      {/* 7. Coverage Area: Local understanding. South Florida coverage (Screen 7) */}
      {lossPreventionData.serviceArea && (
        <ServiceCoverageArea data={lossPreventionData.serviceArea} />
      )}

      {/* 8. Dedicated Retail Consultation Form (Screen 8) */}
      <LossPreventionConsultationForm id="consultation-form" />

      {/* 9. Frequently Asked Questions: Your questions, answered (Screen 9) */}
      {lossPreventionData.faq && <ServiceFAQ data={lossPreventionData.faq} />}

      {/* 10. Related Services: A complete circle of protection (Screen 10) */}
      {lossPreventionData.relatedServices && (
        <ServiceRelatedServices data={lossPreventionData.relatedServices} />
      )}

      {/* 11. Closing CTA: Discreet protection, planned around you (Screen 11) */}
      {lossPreventionData.closingCta && (
        <ServiceClosingCTA data={lossPreventionData.closingCta} />
      )}
    </div>
  );
};
