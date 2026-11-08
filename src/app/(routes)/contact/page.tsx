import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import { ContactFormSection } from './components/ContactFormSection';
import { ResponseTimeBanner } from './components/ResponseTimeBanner';
import { PrimaryServiceAreaSection } from './components/PrimaryServiceAreaSection';

interface ContactPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  props: ContactPageProps
): Promise<Metadata> {
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  const hasInquiry = searchParams && Object.keys(searchParams).length > 0;

  return {
    title: 'Contact Massive Protective Services | Start a Confidential Conversation',
    description:
      'Start a confidential conversation with Massive Protective Services. Direct response within hours. No sales process. Delray Beach HQ serving Palm Beach, Broward, and Miami-Dade.',
    alternates: {
      canonical: getCanonicalUrl('/contact'),
    },
    robots: hasInquiry
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: 'Contact Massive Protective Services | Start a Confidential Conversation',
      description:
        'Start a confidential conversation with Massive Protective Services. Direct response within hours. No sales process. Delray Beach HQ serving Palm Beach, Broward, and Miami-Dade.',
      url: getCanonicalUrl('/contact'),
      siteName: 'Massive Protective Services',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#0A111F]">
      {/* 1. Main Confidential Consultation Form & Contact Cards (Screenshot Image 1) */}
      <ContactFormSection />

      {/* 2. Direct Response Time Banner (Screenshot Image 2) */}
      <ResponseTimeBanner />

      {/* 3. Primary Service Area Pill Tags (Screenshot Image 2) */}
      <PrimaryServiceAreaSection />
    </div>
  );
}
