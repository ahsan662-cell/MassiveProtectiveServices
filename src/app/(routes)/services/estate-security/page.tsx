import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { EstateSecurityClient } from './components/EstateSecurityClient';

export const metadata: Metadata = {
  keywords: [
    "estate security Palm Beach",
    "residential armed security Florida",
    "oceanfront estate protection",
    "gated community armed guards",
    "private residence security South Florida",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/estate-security'),
  },
  title: 'Estate & Residential Security Services in South Florida | Massive Protective Services',
  description:
    'Armed officers, access control, overnight coverage and private event protection for Palm Beach, Boca Raton, Manalapan and the South Florida coast. FDACS License B1400200.',
  openGraph: {
    title: 'Estate & Residential Security Services in South Florida | Massive Protective Services',
    description:
      'Your home is your most private space. Who’s protecting it while you sleep — and while you’re away? Licensed residential and estate security across South Florida.',
    url: getCanonicalUrl('/services/estate-security'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EstateSecurityPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Estate & Residential Security",
  serviceType: "Estate Security",
  description: "Armed officers, access control, overnight coverage and private event protection for Palm Beach, Boca Raton, Manalapan and the South Florida coast. FDACS License B1400200.",
  slug: "estate-security"
})} />
      <EstateSecurityClient />
    </>
  );
}
// Force cache revalidation

