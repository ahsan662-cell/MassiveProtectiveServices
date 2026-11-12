
import React from 'react';
import { ServicePageTemplate } from '@/components/services';
import { executiveProtectionData } from '@/components/services/data/executiveProtectionData';

export const ExecutiveProtectionClient: React.FC = () => {
  return <ServicePageTemplate config={executiveProtectionData} />;
};
