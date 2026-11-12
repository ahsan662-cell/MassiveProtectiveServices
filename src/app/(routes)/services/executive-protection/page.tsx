import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { ExecutiveProtectionClient } from './components/ExecutiveProtectionClient';

export const metadata: Metadata = {
  keywords: [
    "executive protection South Florida",
    "armed bodyguard Palm Beach",
    "Class G executive protection Florida",
    "VIP close protection Miami",
    "corporate principal protection",
  ],
  alternates: {
    canonical: getCanonicalUrl('/executive-protection'),
  },
  title: 'Executive Protection Services in South Florida | Massive Protective Services',
  description:
    'Armed Class G executive protection, threat assessment, advance reconnaissance, and secure transportation for corporate principals, family offices, and VIPs across South Florida. FL License B1400200.',
  openGraph: {
    title: 'Executive Protection Services in South Florida | Massive Protective Services',
    description:
      'Armed executive protection for principals who require more than a presence. Licensed, vetted, discreet close protection across South Florida and beyond.',
    url: getCanonicalUrl('/executive-protection'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ExecutiveProtectionPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Executive Protection Services",
  serviceType: "Executive Protection",
  description: "Armed Class G executive protection, threat assessment, advance reconnaissance, and secure transportation for corporate principals, family offices, and VIPs across South Florida. FL License B1400200.",
  slug: "executive-protection"
})} />
      <ExecutiveProtectionClient />
    </>
  );
}
