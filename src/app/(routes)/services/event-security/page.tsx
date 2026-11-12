import { getServiceSchema } from '@/utils/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { getCanonicalUrl } from '@/utils/seo';
import React from 'react';
import type { Metadata } from 'next';
import { EventSecurityClient } from './components/EventSecurityClient';

export const metadata: Metadata = {
  keywords: [
    "event security Miami",
    "gala security South Florida",
    "private party armed security",
    "art exhibition security",
    "VIP event security Florida",
  ],
  alternates: {
    canonical: getCanonicalUrl('/services/event-security'),
  },
  title: 'Event Security Services in Miami & South Florida | Massive Protective Services',
  description:
    'Armed and plain-clothes protection for galas, private parties, VIP appearances and corporate events — from Palm Beach to Boca to Miami. FDACS License B1400200.',
  openGraph: {
    title: 'Event Security Services in Miami & South Florida | Massive Protective Services',
    description:
      'Your guests should never know security is there. Your principal should never be without it. Licensed, discreet event security across South Florida.',
    url: getCanonicalUrl('/services/event-security'),
    siteName: 'Massive Protective Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EventSecurityPage() {
  return (
    <>
      <JsonLd data={getServiceSchema({
  name: "Special Event Security Services",
  serviceType: "Event Security",
  description: "Discreet armed security for galas, art exhibitions, private parties, corporate functions and high-profile gatherings across South Florida. FL License B1400200.",
  slug: "event-security"
})} />
      <EventSecurityClient />
    </>
  );
}
