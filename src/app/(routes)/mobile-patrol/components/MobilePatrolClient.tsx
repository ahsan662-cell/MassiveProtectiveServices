
import React from 'react';
import {
  ServiceHero,
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceAudienceGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceCredentials,
  ServiceCoverageArea,
  ServiceFAQ,
  ServiceRelatedServices,
  ServiceClosingCTA,
  mobilePatrolData,
} from '@/components/services';
import { MobilePatrolConsultationForm } from './MobilePatrolConsultationForm';

export const MobilePatrolClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screen 1) */}
      <ServiceHero data={mobilePatrolData.hero} />

      {/* 2. Philosophy & Core Statement (Screen 2) */}
      <ServicePhilosophy data={mobilePatrolData.philosophy} />

      {/* 3. Scope Grid: What your patrol plan can include (Screen 3) */}
      <ServiceScopeGrid data={mobilePatrolData.scope} />

      {/* 4. Target Audience: For properties that need a considered presence (Screen 4) */}
      <ServiceAudienceGrid data={mobilePatrolData.audience} />

      {/* 5. Process Roadmap: An exacting process. A practical patrol plan (Screen 5) */}
      <ServiceProcessGrid data={mobilePatrolData.process} />

      {/* 6. Options to Discuss: The right pattern for your property (Screen 6) */}
      {mobilePatrolData.whyMassive && (
        <ServiceWhyMassive data={mobilePatrolData.whyMassive} />
      )}

      {/* 7. Credentials: Licensed. Confidential. Accountable (Screen 7) */}
      {mobilePatrolData.credentials && (
        <ServiceCredentials data={mobilePatrolData.credentials} />
      )}

      {/* 8. Reporting Clarity: A useful record. Not just a visit (Screen 8) */}
      {mobilePatrolData.reporting && (
        <ServicePhilosophy data={mobilePatrolData.reporting} />
      )}

      {/* 9. Existing Footprint: Rooted in South Florida (Screen 9) */}
      {mobilePatrolData.serviceArea && (
        <ServiceCoverageArea data={mobilePatrolData.serviceArea} />
      )}

      {/* 10. Dedicated Consultation Form: Request a Confidential Consultation (Screen 10) */}
      <MobilePatrolConsultationForm id="consultation-form" />

      {/* 11. Frequently Asked Questions */}
      {mobilePatrolData.faq && <ServiceFAQ data={mobilePatrolData.faq} />}

      {/* 12. Related Services */}
      {mobilePatrolData.relatedServices && (
        <ServiceRelatedServices data={mobilePatrolData.relatedServices} />
      )}

      {/* 13. Closing Direct CTA */}
      {mobilePatrolData.closingCta && (
        <ServiceClosingCTA data={mobilePatrolData.closingCta} />
      )}
    </div>
  );
};
