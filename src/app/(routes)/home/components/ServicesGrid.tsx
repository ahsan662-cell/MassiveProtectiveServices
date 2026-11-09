'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Shield,
  Home,
  Calendar,
  ShieldAlert,
  Star,
  Key,
  Building2,
  Eye,
  Car,
  GraduationCap,
  Users,
  Anchor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  href: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'executive-protection',
    title: 'Executive Protection',
    category: 'Close Protection',
    badge: 'Florida Class G',
    image: '/images/mps_service_executive.jpg',
    href: '/executive-protection',
    icon: Shield,
    description:
      'Close protection for South Florida executives, principals, and high-net-worth individuals. Advance route reconnaissance, threat assessment, and armed motorcade escort.',
  },
  {
    id: 'estate-security',
    title: 'Estate & Residential Security',
    category: 'Property Defense',
    badge: '24/7 Gate & Perimeter',
    image: '/images/mps_service_estate.jpg',
    href: '/estate-security',
    icon: Home,
    description:
      'Armed overnight officers, perimeter surveillance, and access control for Palm Beach, Boca Raton, Manalapan, and barrier island luxury estates across South Florida.',
  },
  {
    id: 'event-security',
    title: 'Event Security',
    category: 'Special Operations',
    badge: 'Art Basel & Galas',
    image: '/images/mps_hero_event.jpg',
    href: '/event-security',
    icon: Calendar,
    description:
      'Licensed event security for private galas, charity events, luxury summits, and high-profile gatherings — Art Basel, boat show season, and The Season included.',
  },
  {
    id: 'armed-officers',
    title: 'Armed Security Officers',
    category: 'Armed Tactical',
    badge: 'Class G Licensed',
    image: '/images/mps_hero_executive.jpg',
    href: '/armed-officers',
    icon: ShieldAlert,
    description:
      'Florida Class G licensed armed tactical operators for residential, corporate, retail, and event assignments. Deployed individually or as a coordinated team.',
  },
  {
    id: 'vip-celebrity-protection',
    title: 'VIP & Celebrity Protection',
    category: 'High-Profile Escort',
    badge: 'Discreet VIP Detail',
    image: '/images/mps_service_vip_protection.jpg',
    href: '/vip-celebrity-protection',
    icon: Star,
    description:
      'Discreet close protection for celebrities, entertainers, athletes, and public figures — hotel arrivals, venue movements, private air transit, and red carpets.',
  },
  {
    id: 'concierge-security',
    title: 'Concierge Security',
    category: 'High-Touch Access',
    badge: 'Luxury Residential',
    image: '/images/mps_service_estate.jpg',
    href: '/concierge-security',
    icon: Key,
    description:
      'Polished residential building and penthouse lobby access control — the visible, courteous, and professional face of security for high-end properties.',
  },
  {
    id: 'corporate-security',
    title: 'Corporate Security',
    category: 'Enterprise Defense',
    badge: 'C-Suite & Boardroom',
    image: '/images/mps_service_corporate.jpg',
    href: '/corporate-security',
    icon: Building2,
    description:
      'Boardroom defense, high-risk executive terminations, shareholder meeting protection, and asset defense for corporate headquarters across Florida.',
  },
  {
    id: 'loss-prevention',
    title: 'Loss Prevention',
    category: 'Asset Protection',
    badge: 'Luxury Retail',
    image: '/images/mps_service_loss_prevention.jpg',
    href: '/loss-prevention',
    icon: Eye,
    description:
      'Observant retail surveillance, discreet camera monitoring, inventory loss mitigation, and uniformed deterrent presence for luxury boutiques and flagships.',
  },
  {
    id: 'mobile-patrol',
    title: 'Mobile Patrol',
    category: 'Tactical Fleet',
    badge: 'Rapid Response',
    image: '/images/mps_service_mobile_patrol.jpg',
    href: '/mobile-patrol',
    icon: Car,
    description:
      'High-visibility marked vehicle sweeps, perimeter inspections, and scheduled gate checks for commercial parks, gated communities, and private estates.',
  },
  {
    id: 'school-security',
    title: 'School & Campus Security',
    category: 'Campus Safety',
    badge: 'Vetted Officers',
    image: '/images/mps_service_school_security.jpg',
    href: '/school-security',
    icon: GraduationCap,
    description:
      'Perimeter monitoring, visitor verification, and welcoming yet vigilant presence for private academies, faith-based schools, and educational campuses.',
  },
  {
    id: 'unarmed-security-guards',
    title: 'Unarmed Security Guards',
    category: 'Access Control',
    badge: 'Florida Class D',
    image: '/images/mps_service_unarmed_security.jpg',
    href: '/unarmed-security-guards',
    icon: Users,
    description:
      'Attentive access management, perimeter walks, front-of-house presence, and guest service for residential communities and commercial venues.',
  },
  {
    id: 'maritime-security',
    title: 'Superyacht & Maritime Security',
    category: 'Marine Defense',
    badge: 'Waterfront & Marinas',
    image: '/images/mps_location_ftl_hero.jpg',
    href: '/locations/fort-lauderdale',
    icon: Anchor,
    description:
      'Vessel perimeter security, private slip surveillance, FLIBS escort, and dockside boarding defense across Fort Lauderdale and South Florida marinas.',
  },
];

export const ServicesGrid: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const touchStartXRef = useRef<number | null>(null);

  // Responsive items-per-view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, ALL_SERVICES.length - visibleCount);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Autoplay functionality (pauses when hovered or touched)
  useEffect(() => {
    if (isPaused || viewMode !== 'slider') return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [handleNext, isPaused, viewMode]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      id="services"
      aria-label="What We Do - 12 Core Security Services"
      className="relative w-full bg-[#0B0B10] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/[0.08]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0E2445]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3.5 max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                <span>WHAT WE DO · 12 CORE SERVICES</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-sans font-bold text-white leading-[1.15] tracking-tight"
            >
              Private Security Services for South Florida’s Most Discerning Clients
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed"
            >
              From close protection and residential compound defense to corporate headquarters and marine security, explore our complete licensed offerings.
            </motion.p>
          </div>

          {/* Slider Controls & Grid Toggle Bar */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            {/* View Mode Toggle Button */}
            <div className="inline-flex items-center p-1 rounded-lg bg-white/[0.04] border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  viewMode === 'slider'
                    ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Slider View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#0E2445] text-white font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid View (All 12)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All 12</span>
              </button>
            </div>

            {/* Slider Arrows (shown when in slider view) */}
            {viewMode === 'slider' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-[#0E2445] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="Previous Service Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-[#0E2445] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="Next Service Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Mode 1: Interactive Slider */}
        {viewMode === 'slider' ? (
          <div className="relative">
            {/* Slider Track Viewport */}
            <div
              className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex gap-6 sm:gap-7"
                animate={{
                  x: `-${currentIndex * (100 / visibleCount)}%`,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {ALL_SERVICES.map((service, index) => {
                  const Icon = service.icon;
                  const itemWidthPercentage = 100 / visibleCount;
                  return (
                    <div
                      key={service.id}
                      style={{
                        flex: `0 0 calc(${itemWidthPercentage}% - ${
                          ((visibleCount - 1) * (visibleCount === 1 ? 0 : visibleCount === 2 ? 24 : 28)) /
                          visibleCount
                        }px)`,
                      }}
                      className="group relative rounded-xl bg-[#12121A] border border-white/[0.08] hover:border-[#0E2445]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.7),0_0_24px_rgba(14, 36, 69,0.25)] hover:-translate-y-1.5"
                    >
                      {/* Image Preview Container */}
                      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0A0A0E]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/50 to-transparent" />

                        {/* Top Category & Badge */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A0A0E]/85 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-zinc-300">
                            {service.category}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0E2445] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {service.badge}
                          </span>
                        </div>

                        {/* Floating Service Icon */}
                        <div className="absolute bottom-3 left-4 z-10 w-10 h-10 rounded-lg bg-[#0A1E40]/90 border border-[#0E2445]/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:border-[#0E2445] transition-colors">
                          <Icon className="w-5 h-5 text-[#60A5FA] group-hover:text-blue-300 transition-colors" />
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          <h3 className="text-xl sm:text-[22px] font-sans font-bold text-white group-hover:text-[#93C5FD] leading-snug transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-zinc-300 font-sans font-normal leading-relaxed line-clamp-3">
                            {service.description}
                          </p>
                        </div>

                        {/* Card Footer Link */}
                        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#60A5FA] group-hover:text-blue-300 transition-colors"
                          >
                            <span>Explore Service Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                          </Link>
                          <span className="text-[11px] font-mono text-zinc-500">
                            {String(index + 1).padStart(2, '0')}/12
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Slider Bottom Progress Indicator */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-[#0E2445]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide page ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-[#60A5FA] font-semibold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span>/</span>
                <span>{String(ALL_SERVICES.length).padStart(2, '0')} Services</span>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Full 12-Card Responsive Grid */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {ALL_SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative rounded-xl bg-[#12121A] border border-white/[0.08] hover:border-[#0E2445]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.7),0_0_24px_rgba(14, 36, 69,0.25)] hover:-translate-y-1"
                >
                  {/* Image Preview Container */}
                  <div className="relative w-full h-48 overflow-hidden bg-[#0A0A0E]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/50 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0A0A0E]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                        {service.category}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0E2445] text-white text-[10px] font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 z-10 w-9 h-9 rounded-lg bg-[#0A1E40]/90 border border-[#0E2445]/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <Icon className="w-4 h-4 text-[#60A5FA] group-hover:text-blue-300 transition-colors" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#93C5FD] leading-snug transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-zinc-300 font-sans font-normal leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#60A5FA] group-hover:text-blue-300 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {String(index + 1).padStart(2, '0')}/12
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* View All Services Centered Bottom Link */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center border-t border-white/[0.08] pt-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold text-white hover:text-white px-7 py-3 rounded-lg bg-[#0E2445] hover:bg-[#173A6E] transition-all group cursor-pointer shadow-lg shadow-[#0E2445]/30"
          >
            <span>Explore All 12 Security Services Directory</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>

  );
};

export default ServicesGrid;
