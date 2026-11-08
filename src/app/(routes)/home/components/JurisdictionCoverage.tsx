'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Navigation, ShieldCheck, Clock, ArrowRight, Radio } from 'lucide-react';
import { TacticalCard } from '@/components/ui/TacticalCard';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { PillTag } from '@/components/ui/PillTag';

const COUNTIES = [
  {
    name: 'Palm Beach County',
    href: '/locations/palm-beach',
    tag: 'Headquarters & Estates',
    responseTime: '< 15 Mins Rapid Corridors',
    hqNote: 'Central Command: Delray Beach, FL',
    keyZones: [
      'Palm Beach Island & Ocean Blvd Estates',
      'Boca Raton Royal Palm Yacht & Country Club',
      'Delray Beach Seaside Enclaves',
      'Wellington International Equestrian Compound',
      'Jupiter Island & Admirals Cove',
    ],
    tacticalNote:
      'Direct armed coverage for luxury private estates, golf compounds, and equestrian facilities with static posts and mobile perimeter patrols.',
  },
  {
    name: 'Broward County',
    href: '/locations/broward',
    tag: 'Maritime & Executive',
    responseTime: '< 20 Mins Dispatch',
    hqNote: 'Tactical Substation: Fort Lauderdale',
    keyZones: [
      'Fort Lauderdale Intracoastal Waterway Estates',
      'Las Olas Isles Waterfront Compounds',
      'Weston Private Gated Communities',
      'Bahia Mar Yachting Basins & Marinas',
      'Hollywood Beach Coastal High-Rises',
    ],
    tacticalNote:
      'Seamless water-to-land armed transitions, superyacht security boarding protocols, and executive motorcade escorts along the I-95/Turnpike artery.',
  },
  {
    name: 'Miami-Dade County',
    href: '/locations/miami-dade',
    tag: 'VIP, Private Islands & Galas',
    responseTime: '< 25 Mins Core Corridor',
    hqNote: 'Tactical Substation: Brickell / Miami Beach',
    keyZones: [
      'Star Island, Palm & Hibiscus Islands',
      'Indian Creek Village ("Billionaire Bunker")',
      'Fisher Island Private Ferry Checkpoints',
      'Brickell Financial District & Downtown',
      'Art Basel Miami Beach Convention Corridor',
    ],
    tacticalNote:
      'High-profile close protection, secure private island checkpoint coordination, red carpet event perimeters, and multi-vehicle armed convoys.',
  },
];

export const JurisdictionCoverage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="territory"
      aria-label="Jurisdiction and Operational Coverage"
      className="relative w-full py-14 sm:py-18 lg:py-20 bg-[#0D121D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle radial tactical background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5A880]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <SectionBadge label="TRI-COUNTY OPERATIONAL GRID" icon={MapPin} />

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight"
          >
            Tactical Armed Response Across
            <br />
            <span className="italic text-[#C5A880]">South Florida’s Elite Corridors.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed"
          >
            Headquartered in Delray Beach, MPS deploys dedicated armed operators and tactical convoys throughout Palm Beach, Broward, and Miami-Dade under statutory Florida Chapter 493 jurisdiction.
          </motion.p>
        </div>

        {/* 3 County Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COUNTIES.map((county, index) => (
            <TacticalCard
              key={county.name}
              cornerTicks
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: prefersReducedMotion ? 0 : index * 0.12,
              }}
              className="p-6 sm:p-8 flex flex-col justify-between bg-[#111A2E]/80 border-white/[0.08]"
            >
              <div className="space-y-5">
                {/* Top Status Header */}
                <div className="flex items-center justify-between">
                  <PillTag variant="gold">{county.tag}</PillTag>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* County Name & HQ */}
                <div>
                  <h3 className="text-2xl font-bold text-white font-sans tracking-wide">
                    {county.name}
                  </h3>
                  <div className="text-xs font-mono text-[#C5A880] mt-1 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{county.hqNote}</span>
                  </div>
                </div>

                {/* Tactical Note */}
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {county.tacticalNote}
                </p>

                {/* Key Protected Enclaves */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                    Key Protected Enclaves:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                    {county.keyZones.map((zone) => (
                      <li key={zone} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{zone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.07] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{county.responseTime}</span>
                </div>

                <Link
                  href={county.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>SECTOR BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </TacticalCard>
          ))}
        </div>

        {/* Global Jurisdiction Overview Link */}
        <div className="mt-12 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#162035] hover:bg-[#1E2D4A] border border-[#C5A880]/30 hover:border-[#D4AF37] text-xs font-mono uppercase tracking-widest text-[#F5F5F7] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <span>Explore Complete Tri-County Tactical Corridor Map</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JurisdictionCoverage;
