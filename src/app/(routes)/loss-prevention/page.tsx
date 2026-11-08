import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { LossPreventionClient } from './components/LossPreventionClient';

export const metadata: Metadata = {
  keywords: [
    "retail loss prevention South Florida",
    "luxury boutique security Miami",
    "retail armed security Palm Beach",
    "inventory protection services",
    "commercial asset protection",
  ],
  alternates: {
    canonical: getCanonicalUrl('/loss-prevention'),
  },
  title: 'Loss Prevention & Retail Security in South Florida | Massive Protective Services',
  description:
    'Observant retail security. Clear reporting. A considered approach to protecting your inventory, people, and customer experience across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'Loss Prevention & Retail Security in South Florida | Massive Protective Services',
    description:
      'Protect what you have built. Respect the way you do business. Observant retail security, camera observation, stockroom controls, and visible deterrence.',
    url: getCanonicalUrl('/loss-prevention'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LossPreventionPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Loss Prevention & Retail Security",
  serviceType: "Loss Prevention",
  description: "Discreet, observant retail security, camera observation, stockroom controls, and visible deterrence for luxury retail and commercial properties across South Florida. FL License B1400200.",
  slug: "loss-prevention"
})} />
      <LossPreventionClient />
    </>
  );
}
