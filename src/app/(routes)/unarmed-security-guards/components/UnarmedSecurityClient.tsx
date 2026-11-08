
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
  unarmedSecurityData,
} from '@/components/services';
import { UnarmedSecurityConsultationForm } from './UnarmedSecurityConsultationForm';

export const UnarmedSecurityClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screen 1) */}
      <ServiceHero data={unarmedSecurityData.hero} />

      {/* 2. Philosophy & Approach (Screen 2) */}
      <ServicePhilosophy data={unarmedSecurityData.philosophy} />

      {/* 3. Scope Grid: What Your Unarmed Security Covers (Screen 3) */}
      <ServiceScopeGrid data={unarmedSecurityData.scope} />

      {/* 4. Target Places: For places where presence matters (Screen 4) */}
      <ServiceAudienceGrid data={unarmedSecurityData.audience} />

      {/* 5. Process Roadmap: A clear brief. A purposeful presence (Screen 5) */}
      <ServiceProcessGrid data={unarmedSecurityData.process} />

      {/* 6. Presence Options: The right presence for your property (Screen 6) */}
      {unarmedSecurityData.whyMassive && (
        <ServiceWhyMassive data={unarmedSecurityData.whyMassive} />
      )}

      {/* 7. Licensing & Accountability: Licensed. Clear in scope. Accountable (Screen 7) */}
      {unarmedSecurityData.credentials && (
        <ServiceCredentials data={unarmedSecurityData.credentials} />
      )}

      {/* 8. Regional Coverage: A South Florida presence (Screen 8) */}
      {unarmedSecurityData.serviceArea && (
        <ServiceCoverageArea data={unarmedSecurityData.serviceArea} />
      )}

      {/* 9. Dedicated Consultation Form: Request a Confidential Consultation (Screen 9) */}
      <UnarmedSecurityConsultationForm id="consultation-form" />

      {/* 10. Frequently Asked Questions: Your questions, answered (Screen 10) */}
      {unarmedSecurityData.faq && <ServiceFAQ data={unarmedSecurityData.faq} />}

      {/* 11. Related Services Exploration */}
      {unarmedSecurityData.relatedServices && (
        <ServiceRelatedServices data={unarmedSecurityData.relatedServices} />
      )}

      {/* 12. Closing Direct CTA */}
      {unarmedSecurityData.closingCta && (
        <ServiceClosingCTA data={unarmedSecurityData.closingCta} />
      )}
    </div>
  );
};
