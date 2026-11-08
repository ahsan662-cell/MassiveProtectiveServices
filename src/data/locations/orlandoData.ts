import {
  LocationHeroData,
  LocationPlanningScenariosData,
  LocationSettingDetailData,
  LocationPlanningBeyondData,
} from '@/components/locations/types';
import {
  ServicePhilosophyData,
  ServiceScopeData,
  ServiceFAQData,
  ServiceClosingCTAData,
} from '@/components/services/types';

export interface OrlandoPageData {
  metaTitle: string;
  metaDescription: string;
  hero: LocationHeroData;
  philosophy: ServicePhilosophyData;
  scopeGrid: ServiceScopeData;
  planningScenarios: LocationPlanningScenariosData;
  settingDetail: LocationSettingDetailData;
  faq: ServiceFAQData;
  planningBeyond: LocationPlanningBeyondData;
  closingCta: ServiceClosingCTAData;
}

export const orlandoData: OrlandoPageData = {
  metaTitle: 'Private Security & Protection in Orlando | MPS',
  metaDescription:
    'Plan executive, event and property protection in Orlando. Discuss availability and deployment with our licensed team at Delray Beach headquarters.',

  // Screen 1: Hero Section (Image 1)
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: 'Orlando' },
    ],
    locationName: 'Orlando',
    align: 'center',
    headline: 'Private Security & Protection in Orlando',
    subtitle:
      'Plan executive, event and property protection in Orlando. Discuss availability and deployment with our licensed team.',
    notice: 'Proposed location — service availability and deployment arrangements subject to confirmation',
    bgImage: '/images/mps_location_orlando_hero.jpg',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL (954) 234-7231',
      href: 'tel:9542347231',
    },
    singleLineBadge: 'LIC. B1400200 · LICENSED & INSURED · DELRAY BEACH HEADQUARTERS',
  },

  // Screen 2: Philosophy Section (Image 2)
  philosophy: {
    variant: 'two-column-prose',
    theme: 'light',
    hideTopBar: true,
    hideBottomDivider: true,
    headline: 'Considered planning. Exceptional discretion.',
    column1Paragraphs: [
      "Orlando brings together convention schedules, resort hospitality and business travel. A delegate's day may connect exhibition halls, hotel meetings and an evening function. Changes in guest access, traffic and venue rules make careful advance planning an important part of a protection brief.",
    ],
    column2Paragraphs: [
      'For a proposed Orlando assignment, start with your itinerary, locations and priorities. Our Delray Beach-based team can discuss the scope, venue coordination and deployment arrangements needed to assess feasibility. This page does not represent an Orlando office or a confirmed local staffing presence.',
    ],
  },

  // Screen 3: Scope Grid (Image 3)
  scopeGrid: {
    headline: 'Protection for every part of your life.',
    subtitle:
      'Explore the scope of a proposed assignment. All Orlando services require confirmation of availability and deployment arrangements.',
    cardVariant: 'top-gold-line-arrow',
    columns: 3,
    cards: [
      {
        title: 'Executive Protection',
        description:
          "Advance planning, itinerary review and discreet close protection, scoped to the principal's needs.",
      },
      {
        title: 'Event Security',
        description:
          'Guest access, arrival procedures and protection planning for private and corporate functions.',
      },
      {
        title: 'Corporate Security',
        description:
          'Workplace risk review and security planning for business visits, meetings and corporate gatherings.',
      },
      {
        title: 'Secure Transportation',
        description:
          'Route review, pickup planning and security driver arrangements, subject to availability.',
      },
      {
        title: 'Residential Security',
        description:
          'Property access and protective measures for private residences and temporary stays, by arrangement.',
      },
      {
        title: 'Risk Assessment',
        description:
          'A considered review of locations, schedules and exposure to inform an appropriate protection plan.',
      },
    ],
  },

  // Screen 4: Planning Scenarios (Image 4)
  planningScenarios: {
    headline: 'Planning for the realities of Orlando.',
    subtitle:
      'The examples below illustrate possible planning needs. They are not completed assignments, client outcomes or venue affiliations.',
    theme: 'light',
    cards: [
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Convention delegate itinerary',
        description:
          'A delegate plans to move between a convention, hotel meetings and an evening reception. A proposed brief would review arrival points, credentials, schedule changes and transport handoffs.',
        footerNote: 'Itinerary review · Access requirements',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Visiting executive movements',
        description:
          "An executive's hotel-to-meeting schedule calls for discretion and continuity. Planning could include route options, pickup locations and liaison with authorised hotel and meeting contacts.",
        footerNote: 'Route planning · Principal privacy',
      },
      {
        tag: 'ILLUSTRATIVE PLANNING SCENARIO',
        title: 'Private resort function access',
        description:
          "A host is planning a private function at a resort. An access plan could address invited guests, supplier arrivals and escalation procedures, subject to the property's rules and approval.",
        footerNote: 'Guest access · Venue coordination',
      },
    ],
  },

  // Screen 5: Setting Detail 2x2 Boxed Grid (Image 5)
  settingDetail: {
    headline: 'Your locations. A considered plan.',
    subtitle:
      'These Orlando-area locations can form part of an initial planning conversation. They are requested planning areas, not a statement of established coverage. Feasibility, staffing and travel arrangements must be confirmed for each assignment.',
    theme: 'light',
    variant: 'boxed-grid',
    categoryTag: 'ORLANDO & SURROUNDING COMMUNITIES',
    columns: [
      {
        title: 'Convention district',
        description:
          'Discuss exhibition schedules, delegate arrival points and organiser or venue permissions.',
      },
      {
        title: 'International Drive',
        description:
          'Review hotel-to-function movements, pickup arrangements and the timing of busy visitor corridors.',
      },
      {
        title: 'Lake Nona',
        description:
          'Share business meeting locations and travel requirements so the proposed scope can be assessed.',
      },
      {
        title: 'Winter Park',
        description:
          'Discuss private property access, meeting itineraries and host coordination for a tailored plan.',
      },
    ],
    footnote:
      'No Orlando office or permanent local team is represented. Contact our Delray Beach headquarters to discuss a proposed deployment.',
  },

  // Screen 6: FAQ (Screen 6 from earlier user uploads)
  faq: {
    headline: 'Your questions, answered.',
    theme: 'light',
    defaultAllOpen: true,
    hideToggleIcons: true,
    faqs: [
      {
        question: 'Is security service currently available in Orlando?',
        answer:
          'Orlando is a proposed location beyond our documented South Florida footprint. Contact our licensed team to discuss your dates and requirements. Service availability and deployment arrangements must be confirmed before any assignment is agreed.',
      },
      {
        question: 'How far in advance should I plan?',
        answer:
          'Share your dates and itinerary as early as possible. The planning lead time depends on the scope, travel, team availability and venue requirements. We do not guarantee response or deployment times for Orlando.',
      },
      {
        question: 'Can you coordinate with my hotel or event venue?',
        answer:
          "Venue coordination can be discussed as part of the brief, with your authorisation. Access, credentials and procedures remain subject to the property's approval. No relationship with any Orlando hotel, resort or convention venue is implied.",
      },
      {
        question: 'Can secure transportation be included?',
        answer:
          'Discuss pickup points, destinations, passengers and timing with our team. Driver, vehicle and route arrangements are assessed for the proposed itinerary and confirmed separately; transport availability is not guaranteed.',
      },
      {
        question: 'How do I obtain a tailored quote?',
        answer:
          'Provide your dates, locations, schedule and protection priorities. A quote can be tailored to the agreed scope, risk review, personnel and travel requirements once feasibility is assessed. Rates and availability are subject to confirmation.',
      },
    ],
  },

  // Screen 7: Looking Beyond Orlando (Screen 7 from earlier user uploads)
  planningBeyond: {
    headline: 'Looking beyond Orlando.',
    subtitle:
      'Tampa and Sarasota are further proposed location-page designs only. Their inclusion does not establish service coverage or a local operating presence.',
    theme: 'light',
    cards: [
      {
        tag: 'FURTHER PROPOSED DESIGN',
        title: 'Tampa',
        description:
          'A proposed location page, not confirmed coverage. Discuss any travel requirements directly with our team.',
        href: '/locations/tampa',
      },
      {
        tag: 'FURTHER PROPOSED DESIGN',
        title: 'Sarasota',
        description:
          'A proposed location page, not confirmed coverage. Discuss any travel requirements directly with our team.',
        href: '/locations/sarasota',
      },
    ],
  },

  // Screen 8: Closing CTA Banner (Screen 8 from earlier user uploads)
  closingCta: {
    headline: 'Discreet protection, planned around you.',
    subtitle:
      'Tell us your dates, itinerary and priorities. Speak with our licensed team about a proposed Orlando assignment.',
    hideAccentLine: true,
    hideTopGoldBorder: true,
    bgClassName: 'bg-[#111C30]',
    disclaimer:
      'Proposed location — service availability and deployment arrangements subject to confirmation',
    primaryCta: {
      label: 'REQUEST A CONFIDENTIAL CONSULTATION',
      href: '#consultation-form',
    },
    secondaryCta: {
      label: 'CALL (954) 234-7231',
      href: 'tel:9542347231',
    },
  },
};
