import React from 'react';
import { ServicePageConfig } from './types';
import { ServiceHero } from './sections/ServiceHero';
import { ServicePhilosophy } from './sections/ServicePhilosophy';
import { ServiceScopeGrid } from './sections/ServiceScopeGrid';
import { ServiceAudienceGrid } from './sections/ServiceAudienceGrid';
import { ServiceProcessGrid } from './sections/ServiceProcessGrid';
import { ServiceWhyMassive } from './sections/ServiceWhyMassive';
import { ServiceCredentials } from './sections/ServiceCredentials';
import { ServiceCoverageArea } from './sections/ServiceCoverageArea';
import { ServiceConsultationForm } from './sections/ServiceConsultationForm';
import { ServiceFAQ } from './sections/ServiceFAQ';
import { ServiceRelatedServices } from './sections/ServiceRelatedServices';
import { ServiceClosingCTA } from './sections/ServiceClosingCTA';

interface Props {
  config: ServicePageConfig;
}

export const ServicePageTemplate: React.FC<Props> = ({ config }) => {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Hero Section */}
      <ServiceHero data={config.hero} />

      {/* 2. Philosophy & Core Statement */}
      <ServicePhilosophy data={config.philosophy} />

      {/* 3. Scope Grid (What We Cover / 6 Cards) */}
      <ServiceScopeGrid data={config.scope} />

      {/* 4. Target Audience (Who Hires Us / Who We Work With) */}
      <ServiceAudienceGrid data={config.audience} />

      {/* 5. Regional Knowledge / Corridor Expertise (if configured) */}
      {config.corridor && <ServicePhilosophy data={config.corridor} />}

      {/* 5b. Privacy / Discretion Protocol (Screen 5 Reference) */}
      {config.privacy && <ServicePhilosophy data={config.privacy} />}

      {/* 6. Process Roadmap (Our Process / 4 Steps, if configured) */}
      {config.process && <ServiceProcessGrid data={config.process} />}

      {/* 7. Why Massive (What Separates Us) */}
      {config.whyMassive && <ServiceWhyMassive data={config.whyMassive} />}

      {/* 8. Verifiable Credentials & Licensing (if configured) */}
      {config.credentials && <ServiceCredentials data={config.credentials} />}

      {/* 9. Reporting Brief / Clarity Before First Visit (if configured) */}
      {config.reporting && <ServicePhilosophy data={config.reporting} />}

      {/* 10. Coverage Area & Footprint */}
      {config.serviceArea && <ServiceCoverageArea data={config.serviceArea} />}

      {/* 8. Dedicated Consultation Form */}
      {config.consultationForm && <ServiceConsultationForm data={config.consultationForm} />}

      {/* 9. Frequently Asked Questions */}
      {config.faq && <ServiceFAQ data={config.faq} />}

      {/* 10. Related Services Exploration */}
      {config.relatedServices && <ServiceRelatedServices data={config.relatedServices} />}

      {/* 11. Closing Direct Consultation & 24/7 Priority Hotline */}
      {config.closingCta && <ServiceClosingCTA data={config.closingCta} />}
    </div>
  );
};
