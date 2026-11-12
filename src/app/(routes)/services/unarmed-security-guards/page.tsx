import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { UnarmedSecurityClient } from './components/UnarmedSecurityClient';

export const metadata: Metadata = {
  keywords: [
    "unarmed security guards South Florida",
    "front desk access control",
    "residential property security",
    "commercial building guards",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/unarmed-security-guards'),
  },
  title: 'Unarmed Security Guards in South Florida | Massive Protective Services',
  description:
    'A reassuring presence. Attentive access control, property patrols, and professional front-of-house security — without firearms. Serving Miami-Dade, Broward, and Palm Beach. State License B1400200.',
  openGraph: {
    title: 'Unarmed Security Guards in South Florida | Massive Protective Services',
    description:
      'Quiet authority. Clear responsibilities. Professional unarmed security guard services for commercial properties, residential communities, luxury retail, and corporate workplaces in South Florida.',
    url: getCanonicalUrl('/services/unarmed-security-guards'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function UnarmedSecurityGuardsPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Unarmed Security Guards",
  serviceType: "Unarmed Security",
  description: "Professional unarmed security guard services for commercial properties, residential communities, luxury retail, and corporate workplaces in South Florida. State License B1400200.",
  slug: "unarmed-security-guards"
})} />
      <UnarmedSecurityClient />
    </>
  );
}
