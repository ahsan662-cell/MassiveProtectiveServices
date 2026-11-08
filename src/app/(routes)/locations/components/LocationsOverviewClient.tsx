'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, MapPin, ArrowRight, ShieldCheck, Check, Clock, ChevronRight } from 'lucide-react';
import { ALL_LOCATIONS, REGIONS, LocationOverviewItem } from '@/data/locationsOverviewData';
import { ServiceClosingCTA } from '@/components/services';

export const LocationsOverviewClient: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeRegion, setActiveRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter locations based on active region tab and search query
  const filteredLocations = useMemo(() => {
    return ALL_LOCATIONS.filter((item) => {
      const matchesRegion = activeRegion === 'all' || item.region === activeRegion;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesRegion;

      const matchesQuery =
        item.name.toLowerCase().includes(q) ||
        item.regionLabel.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, searchQuery]);

  return (
    <div className="w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18] text-white">
      {/* 1. Hero Section */}
      <section
        aria-label="Florida Coverage Grid"
        className="relative w-full pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden border-b border-white/[0.08]"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#162548]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumbs */}
          <motion.nav
            aria-label="Breadcrumbs"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest"
          >
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#C5A880]">Locations</span>
          </motion.nav>

          {/* Section Header */}
          <div className="max-w-4xl space-y-4">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                FLORIDA DEPLOYMENT GRID · CHAPTER 493 STATUTORY JURISDICTION
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-4xl lg:text-[46px] font-serif font-normal text-white leading-[1.12] tracking-tight"
            >
              Where We Operate — Statewide Armed Security &amp; Executive Protection
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
            >
              Massive Protective Services deploys licensed Florida Class G armed officers and executive close protection details throughout South Florida&apos;s tri-county corridor and Florida&apos;s premier commercial centers. Headquartered in Delray Beach, Palm Beach County. FL License B1400200.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/[0.08]"
          >
            <div className="bg-[#0E1729]/80 border border-white/[0.06] rounded-sm p-4 flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-serif text-[#C5A880]">19</span>
              <span className="text-xs text-zinc-400 font-sans font-light mt-0.5">Primary Jurisdictions</span>
            </div>
            <div className="bg-[#0E1729]/80 border border-white/[0.06] rounded-sm p-4 flex flex-col justify-center">
              <span className="text-base sm:text-lg font-serif text-white">Tri-County Core</span>
              <span className="text-xs text-zinc-400 font-sans font-light mt-0.5">Palm Beach · Broward · Miami-Dade</span>
            </div>
            <div className="bg-[#0E1729]/80 border border-white/[0.06] rounded-sm p-4 flex flex-col justify-center">
              <span className="text-base sm:text-lg font-serif text-white">Class G Licensed</span>
              <span className="text-xs text-zinc-400 font-sans font-light mt-0.5">Statewide Firearm Certified</span>
            </div>
            <div className="bg-[#0E1729]/80 border border-white/[0.06] rounded-sm p-4 flex flex-col justify-center">
              <span className="text-base sm:text-lg font-serif text-[#C5A880]">24/7 Command</span>
              <span className="text-xs text-zinc-400 font-sans font-light mt-0.5">Direct Dispatch Available</span>
            </div>
          </motion.div>

          {/* Search Input Bar */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="pt-2"
          >
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search locations by city, county, airport, or estate enclave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F1A30]/90 border border-white/[0.12] focus:border-[#C5A880] rounded-sm pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono uppercase text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Region Filter Tabs */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2"
          >
            {REGIONS.map((region) => {
              const isActive = activeRegion === region.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2 rounded-sm text-xs sm:text-[13px] font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#C5A880] text-[#0A0A0A] shadow-[0_2px_12px_rgba(197,168,128,0.35)] font-semibold'
                      : 'bg-[#101B2E] text-zinc-300 hover:text-white hover:bg-[#162540] border border-white/[0.08]'
                  }`}
                >
                  <span>{region.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-black/20 text-[#0A0A0A]' : 'bg-white/10 text-zinc-400'
                    }`}
                  >
                    {region.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 2. Locations Cards Grid */}
      <section
        aria-label="All Florida Locations"
        className="relative w-full py-16 sm:py-24 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
            <span>
              Showing {filteredLocations.length} of {ALL_LOCATIONS.length} Florida Locations
            </span>
            {searchQuery && (
              <span className="text-[#C5A880]">
                Filtered by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {filteredLocations.length === 0 ? (
            <div className="bg-[#0E1729] border border-white/[0.08] rounded-sm p-12 text-center space-y-4 max-w-xl mx-auto">
              <p className="text-lg font-serif text-white">No locations matched your search.</p>
              <p className="text-xs text-zinc-400 font-sans">
                Try searching for another county, city, or reset the filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveRegion('all');
                }}
                className="px-5 py-2.5 rounded-sm bg-[#C5A880] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              <AnimatePresence>
                {filteredLocations.map((item: LocationOverviewItem, idx: number) => (
                  <motion.div
                    key={item.slug}
                    layout={!prefersReducedMotion}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className="group relative bg-[#0E182D]/90 hover:bg-[#13203C] border border-white/[0.08] hover:border-[#C5A880]/50 rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                  >
                    {/* Top gold accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/0 group-hover:via-[#C5A880] to-transparent transition-all duration-500" />

                    <div>
                      {/* County Tag & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-mono text-[#C5A880] uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 stroke-[1.8]" />
                          <span>{item.regionLabel}</span>
                        </span>

                        <span className="text-[9.5px] font-mono uppercase px-2 py-0.5 rounded bg-[#C5A880]/15 text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                          {item.badge}
                        </span>
                      </div>

                      {/* City Name */}
                      <Link href={item.href} className="block group-hover:text-[#D4AF37] transition-colors">
                        <h2 className="text-2xl sm:text-[26px] font-serif font-normal text-white group-hover:text-[#D4AF37] leading-snug tracking-tight mb-2">
                          {item.name}
                        </h2>
                      </Link>

                      {/* Tagline */}
                      <p className="text-xs sm:text-[13px] font-sans font-medium text-zinc-300 mb-3 leading-snug">
                        {item.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] font-sans font-light text-zinc-400 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 mb-6 border-t border-white/[0.06] pt-4">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-zinc-300 font-sans flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5 stroke-[2.2]" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-2 border-t border-white/[0.06]">
                      <Link
                        href={item.href}
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-sm bg-[#16233B] group-hover:bg-[#C5A880] text-zinc-200 group-hover:text-[#0A0A0A] font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300"
                      >
                        <span>Explore {item.name} Detail</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* 3. The Tri-County Response Architecture Section */}
      <section
        aria-label="Dispatch Corridor Architecture"
        className="relative w-full py-14 sm:py-18 lg:py-20 bg-[#09101E] border-t border-white/[0.08]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              RAPID DEPLOYMENT CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-tight">
              A Delray Beach Command Hub — Serving South Florida Without Delay
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed">
              Our central Delray Beach headquarters anchors immediate access to Florida&apos;s Turnpike, Interstate 95, and State Road A1A. We deploy with verified Class G firearms credentials, written advance plans, and zero cross-county transit surcharges in our home market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0E1729] border border-white/[0.08] p-7 sm:p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-white">Sub-15 Minute County Reach</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                Direct deployment to Palm Beach, West Palm Beach, Boca Raton, Gulf Stream, and Manalapan barrier islands. Immediate on-site response for alarms, client calls, and schedule alterations.
              </p>
            </div>

            <div className="bg-[#0E1729] border border-white/[0.08] p-7 sm:p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-white">Tri-County Inter-Operability</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                Seamless executive motorcade escorts bridging Palm Beach County estates to Fort Lauderdale superyacht slips and Brickell financial penthouses with continuous close protection.
              </p>
            </div>

            <div className="bg-[#0E1729] border border-white/[0.08] p-7 sm:p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-white">Statewide Aviation Coverage</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                Confirmed vehicle positioning and authorized tarmac transfers at PBI, FLL, MIA, TPA, MCO, and APF private FBOs. Handoffs coordinated prior to touchdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <ServiceClosingCTA
        data={{
          headline: 'Plan Your Protection in Any Florida Market',
          subtitle:
            'From PBI to Brickell to Port Royal — speak directly with agency director Marc Tardalo to coordinate custom armed coverage for your residence, travel, or corporate engagement.',
          primaryCta: {
            label: 'REQUEST CONFIDENTIAL CONSULTATION',
            href: '/contact',
          },
          secondaryCta: {
            label: 'CALL DISPATCH (954) 234-7231',
            href: 'tel:9542347231',
          },
          disclaimer:
            'FL Agency License B1400200 · Class G Licensed Armed Officers · Chapter 493, Florida Statutes · Strictly Private & NDA Standard',
        }}
      />
    </div>
  );
};
