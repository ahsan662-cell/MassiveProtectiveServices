import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { VIPProtectionClient } from './components/VIPProtectionClient';

export const metadata: Metadata = {
  keywords: [
    "celebrity protection Miami",
    "VIP bodyguard Florida",
    "Art Basel security detail",
    "touring artist protection",
    "high profile personal security",
  ],
  alternates: {
    canonical: getCanonicalUrl('/vip-celebrity-protection'),
  },
  title: 'VIP & Celebrity Protection in Miami & South Florida | Massive Protective Services',
  description:
    'Discreet close protection for public figures, touring artists, visiting athletes, and UHNW principals across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'VIP & Celebrity Protection in Miami & South Florida | Massive Protective Services',
    description:
      'From hotel arrivals to nightlife, events, and private travel. Licensed armed close protection with strict non-disclosure agreements.',
    url: getCanonicalUrl('/vip-celebrity-protection'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function VIPProtectionPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "VIP & Celebrity Protection",
  serviceType: "VIP Protection",
  description: "Discreet close protection for public figures, touring artists, visiting athletes, and UHNW principals across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.",
  slug: "vip-celebrity-protection"
})} />
      <VIPProtectionClient />
    </>
  );
}
