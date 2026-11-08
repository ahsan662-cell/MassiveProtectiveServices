
import React from 'react';
import { ServicePageTemplate } from '@/components/services';
import { estateSecurityData } from '@/components/services/data/estateSecurityData';

export const EstateSecurityClient: React.FC = () => {
  return <ServicePageTemplate config={estateSecurityData} />;
};
