import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { MobilePatrolClient } from './components/MobilePatrolClient';

export const metadata: Metadata = {
  keywords: [
    "mobile patrol security South Florida",
    "marked vehicle property patrol",
    "overnight perimeter security checks",
    "commercial mobile patrol Palm Beach",
    "scheduled security visits Miami",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/mobile-patrol'),
  },
  title: 'Mobile Patrol Services in South Florida | Massive Protective Services',
  description:
    'A visible presence. A deliberate plan. Explore vehicle property patrols, perimeter checks, gate verification, and documented observations across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.',
  openGraph: {
    title: 'Mobile Patrol Services in South Florida | Massive Protective Services',
    description:
      'Scheduled & varied vehicle visits, access checks, common area walkthroughs, and real-time electronic reporting. Professional security patrol across South Florida.',
    url: getCanonicalUrl('/services/mobile-patrol'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function MobilePatrolPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Mobile Patrol Services",
  serviceType: "Mobile Patrol",
  description: "Scheduled and varied vehicle property patrols, perimeter checks, gate verification, and documented observations across Miami-Dade, Broward, and Palm Beach. FDACS License B1400200.",
  slug: "mobile-patrol"
})} />
      <MobilePatrolClient />
    </>
  );
}
