
import React from 'react';
import {
  ServiceHero,
  ServicePhilosophy,
  ServiceScopeGrid,
  ServiceAudienceGrid,
  ServiceProcessGrid,
  ServiceWhyMassive,
  ServiceFAQ,
  ServiceRelatedServices,
  ServiceClosingCTA,
  schoolSecurityData,
} from '@/components/services';
import { SchoolSecurityConsultationForm } from './SchoolSecurityConsultationForm';

export const SchoolSecurityClient: React.FC = () => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section (Screen 1) */}
      <ServiceHero data={schoolSecurityData.hero} />

      {/* 2. Philosophy & School Culture (Screen 2) */}
      <ServicePhilosophy data={schoolSecurityData.philosophy} />

      {/* 3. Scope Grid: What School Security Could Support (Screen 3) */}
      <ServiceScopeGrid data={schoolSecurityData.scope} />

      {/* 4. Target Audience: For the people responsible for the school day (Screen 4) */}
      <ServiceAudienceGrid data={schoolSecurityData.audience} />

      {/* 5. Process Roadmap: A careful review. A clearly defined role (Screen 5) */}
      <ServiceProcessGrid data={schoolSecurityData.process} />

      {/* 6. Options to Discuss: The right scope for your school's routines (Screen 6) */}
      {schoolSecurityData.whyMassive && (
        <ServiceWhyMassive data={schoolSecurityData.whyMassive} />
      )}

      {/* 7. Dedicated School Consultation Form (Screen 7) */}
      <SchoolSecurityConsultationForm id="consultation-form" />

      {/* 8. Frequently Asked Questions: Your questions, answered (Screen 8) */}
      {schoolSecurityData.faq && <ServiceFAQ data={schoolSecurityData.faq} />}

      {/* 9. Related Services: A considered approach to every setting (Screen 9) */}
      {schoolSecurityData.relatedServices && (
        <ServiceRelatedServices data={schoolSecurityData.relatedServices} />
      )}

      {/* 10. Closing Direct CTA: A thoughtful first conversation for your school (Screen 10) */}
      {schoolSecurityData.closingCta && (
        <ServiceClosingCTA data={schoolSecurityData.closingCta} />
      )}
    </div>
  );
};
