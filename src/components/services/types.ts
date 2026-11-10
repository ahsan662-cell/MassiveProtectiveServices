import React from 'react';
import { ServiceIconName } from './ServiceIcon';

export interface ServiceHeroBadgeItem {
  icon?: ServiceIconName | string;
  label: string;
}

export interface ServiceHeroData {
  eyebrow?: string;
  serviceName: string;
  breadcrumbTitle?: string;
  headline: string;
  subtitle: string;
  bgImage: string;
  alignment?: 'center' | 'left';
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    icon?: string;
  };
  badges: (string | ServiceHeroBadgeItem)[];
  disclaimer?: string;
  footnote?: string;
}

export interface ServicePhilosophyData {
  eyebrow?: string;
  headline: string;
  paragraph?: string;
  variant?:
    | 'left-gold-bar'
    | 'centered-gold-line'
    | 'two-column-prose'
    | 'split-highlight'
    | 'split-features';
  theme?: 'light' | 'dark';
  column1Paragraphs?: string[];
  column2Paragraphs?: string[];
  featuresList?: {
    icon?: ServiceIconName | string;
    title: string;
    description: string;
  }[];
  highlightBox?: {
    title: string;
    description: string;
  };
  highlightItems?: string[];
  notice?: {
    title: string;
    subtitle?: string;
  };
  hideTopBar?: boolean;
  hideBottomDivider?: boolean;
}

export interface ServiceScopeItem {
  icon?: ServiceIconName | string;
  title: string;
  description: string;
  note?: string;
}

export interface ServiceScopeData {
  eyebrow?: string;
  subtitle?: string;
  headline: string;
  columns?: 2 | 3 | 4;
  cardVariant?: 'default' | 'minimal-gold' | 'gold-title' | 'white-title' | 'top-gold-line-arrow' | 'left-gold-border';
  footerNote?: string;
  cards: ServiceScopeItem[];
}

export interface ServiceAudienceItem {
  icon?: ServiceIconName | string;
  title: string;
  description: string;
}

export interface ServiceAudienceData {
  variant?: 'cards' | 'split-list' | 'bordered-cards' | 'dark-cards';
  cardVariant?: 'gold-title' | 'white-title';
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline: string;
  subtitle?: string;
  footerNote?: string;
  pillars?: ServiceAudienceItem[];
  cards?: {
    icon?: ServiceIconName | string;
    title: string;
    description: string;
  }[];
  cardsPerRow?: 2 | 3 | 4;
  paragraphs?: string[];
  listTitle?: string;
  listItems?: string[];
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessData {
  eyebrow?: string;
  headline: string;
  steps: ServiceProcessStep[];
}

export interface ServiceWhyMassivePillar {
  icon?: ServiceIconName | string;
  eyebrow?: string;
  title: string;
  description: string;
}

export interface ServiceWhyMassiveData {
  variant?: 'grid' | 'vertical-bars' | 'bordered-cards' | 'column-top-borders';
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline?: string;
  footerNote?: string;
  verifyLink?: {
    label: string;
    href: string;
  };
  footerBox?: {
    title: string;
    description: string;
  };
  credentialBadges?: string[];
  pillars?: ServiceWhyMassivePillar[];
}

export interface ServiceCredentialsItem {
  icon?: ServiceIconName | string;
  label?: string;
  value?: string;
  title?: string;
  description?: string;
}

export interface ServiceCredentialsData {
  variant?: 'grid-4' | 'cards-3';
  theme?: 'dark' | 'light';
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  infoLink?: {
    label: string;
    href: string;
  };
  cards: ServiceCredentialsItem[];
  footerNote?: string;
  showBottomDivider?: boolean;
  verifyLink?: {
    label: string;
    href: string;
  };
}

export interface ServiceAreaData {
  variant?: 'map' | 'city-cards';
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  hqBadge?: string;
  description?: string;
  countyBadge?: string;
  cities?: string[];
  citiesColumn1?: string[];
  citiesColumn2?: string[];
  footerNote?: string;
}

export interface ServiceFormData {
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  serviceCategory?: string;
  needTypes: string[];
  defaultNeed?: string;
  secondFieldLabel?: string;
  secondFieldPlaceholder?: string;
  secondFieldIcon?: string;
  dropdown1Label?: string;
  dropdown1Placeholder?: string;
  dropdown2Label?: string;
  dropdown2Placeholder?: string;
  dropdown2Options?: string[];
  coverageStartOptions?: string[];
  defaultCoverageStart?: string;
  propertyLocationLabel?: string;
  propertyLocationPlaceholder?: string;
  locationLabel?: string;
  locationPlaceholder?: string;
  locationOptions?: string[];
  messagePlaceholder?: string;
  submitButtonText?: string;
  footerNote?: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQData {
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline?: string;
  defaultAllOpen?: boolean;
  hideToggleIcons?: boolean;
  faqs: ServiceFAQItem[];
}

export interface ServiceRelatedItem {
  title: string;
  description?: string;
  href: string;
  linkLabel?: string;
}

export interface ServiceRelatedData {
  theme?: 'light' | 'dark';
  eyebrow?: string;
  headline?: string;
  footerNote?: string;
  services: ServiceRelatedItem[];
}

export interface ServiceClosingCTAData {
  headline?: string;
  subtitle?: string;
  disclaimer?: string;
  hideAccentLine?: boolean;
  hideTopGoldBorder?: boolean;
  bgClassName?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export interface ServicePageConfig {
  slug: string;
  hero: ServiceHeroData;
  philosophy: ServicePhilosophyData;
  scope: ServiceScopeData;
  audience: ServiceAudienceData;
  corridor?: ServicePhilosophyData;
  privacy?: ServicePhilosophyData;
  process?: ServiceProcessData;
  whyMassive?: ServiceWhyMassiveData;
  credentials?: ServiceCredentialsData;
  reporting?: ServicePhilosophyData;
  serviceArea?: ServiceAreaData;
  consultationForm?: ServiceFormData;
  faq?: ServiceFAQData;
  relatedServices?: ServiceRelatedData;
  closingCta?: ServiceClosingCTAData;
}
