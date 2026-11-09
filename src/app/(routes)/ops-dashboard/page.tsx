import React from 'react';
import type { Metadata } from 'next';
import { OpsDashboardClient } from './components/OpsDashboardClient';

export const metadata: Metadata = {
  title: 'Operations Command Terminal | Private Dispatch Intake',
  description: 'Private administrative dispatch dashboard for monitoring client inquiries and form delivery telemetry.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpsDashboardPage() {
  return <OpsDashboardClient />;
}

