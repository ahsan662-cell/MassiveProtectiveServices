import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLocalBusinessSchema } from '@/utils/schema';
import { ServicesOverviewClient } from './components/ServicesOverviewClient';

export const metadata: Metadata = {
  keywords: [
    "Massive Protective Services",
    "private security services South Florida",
    "armed security services Florida",
    "executive protection services Miami Palm Beach",
    "estate security services",
    "Class G armed guards Florida",
    "corporate security services",
  ],
  title: 'Private Security & Executive Protection Services | Massive Protective Services',
  description:
    'Comprehensive directory of licensed private security, executive protection, estate defense, event details, and corporate security disciplines across South Florida. FL License B1400200.',
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
  openGraph: {
    title: 'Private Security & Executive Protection Services | Massive Protective Services',
    description:
      'Explore our full spectrum of 12 licensed security disciplines across South Florida. Armed executive protection, estate defense, and corporate security. FL License B1400200.',
    url: getCanonicalUrl('/services'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Security & Executive Protection Services | Massive Protective Services',
    description:
      'Explore our 12 licensed security disciplines across South Florida. FL License B1400200.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={getLocalBusinessSchema({
          name: 'Massive Protective Services — Security Services Directory',
          description:
            'Licensed armed security, executive protection, estate defense, corporate security, and mobile patrol across South Florida.',
          path: '/services',
        })}
      />
      <ServicesOverviewClient />
    </>
  );
}

