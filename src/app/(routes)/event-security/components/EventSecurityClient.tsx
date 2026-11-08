
import React from 'react';
import { ServicePageTemplate } from '@/components/services';
import { eventSecurityData } from '@/components/services/data/eventSecurityData';

export const EventSecurityClient: React.FC = () => {
  return <ServicePageTemplate config={eventSecurityData} />;
};
