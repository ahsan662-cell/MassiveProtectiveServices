'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { LocationsSlider } from './LocationsSlider';

const PALM_BEACH_CITIES = [
  'Palm Beach',
  'Manalapan',
  'Delray Beach (HQ)',
  'Gulf Stream',
  'Ocean Ridge',
  'Highland Beach',
  'Boynton Beach',
  'Boca Raton',
];

const BROWARD_MIAMI_CITIES = [
  'Hillsboro Beach',
  'Lighthouse Point',
  'Deerfield Beach',
  'Pompano Beach',
  'Fort Lauderdale',
  'Aventura',
  'Miami Beach',
  'Miami',
];

export const WhereWeOperateSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="where-we-operate"
      aria-label="Where We Operate - Tactical Regional Coverage"
      className="relative w-full bg-[#FFFFFF] text-[#0F172A] py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 space-y-4 max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
              WHERE WE OPERATE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#0A0A0A] leading-[1.12] tracking-tight"
          >
            South Florida — From Palm Beach to Miami-Dade
            <br className="hidden sm:inline" /> and the Gulf Coast
          </motion.h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Headquartered in Delray Beach with active Class G armed patrol units and executive protection details deployed throughout the South Florida coastal corridor.
          </p>
        </div>

        {/* Two-Column Grid: Map Panel on Left, City Directory on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: High-Contrast Tactical Coastal Map */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full rounded-xl bg-[#0D0D15] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-xl overflow-hidden text-white"
          >
            {/* Ambient Coastal Vector Map */}
            <div className="relative w-full h-[360px] flex flex-col justify-between">
              {/* Top header on map */}
              <div className="flex items-start justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#3B82F6]" />
                  <span>← GULF COAST</span>
                  <span className="text-zinc-500 text-[11px] block">Sarasota</span>
                </div>
                <div className="text-[#60A5FA] font-mono tracking-wider">N ↑</div>
              </div>

              {/* Graphical Coastline Representation */}
              <div className="absolute inset-0 top-12 bottom-6 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 320 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0 H235 C230 40 240 80 230 110 C220 145 200 190 180 240 C170 260 160 280 150 280 H0 V0 Z"
                    fill="#151522"
                  />
                  <path
                    d="M235 0 C230 40 240 80 230 110 C220 145 200 190 180 240 C170 260 160 280 150 280"
                    stroke="#0E2445"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  <line x1="0" y1="95" x2="232" y2="95" stroke="#FFFFFF" strokeOpacity="0.08" strokeDasharray="2 2" />
                  <line x1="0" y1="180" x2="202" y2="180" stroke="#FFFFFF" strokeOpacity="0.08" strokeDasharray="2 2" />
                </svg>

                {/* Key Territorial Hotspots */}
                <div className="absolute top-[8%] right-[22%] flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#0E2445] ring-4 ring-[#0E2445]/20" />
                  <span>Palm Beach</span>
                </div>

                <div className="absolute top-[38%] right-[24%] flex items-center gap-1.5 text-[10px] font-mono text-[#93C5FD] font-bold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0E2445]" />
                  </span>
                  <span>Delray Beach (HQ)</span>
                </div>

                <div className="absolute top-[52%] right-[28%] flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span>Boca Raton</span>
                </div>

                <div className="absolute top-[66%] right-[32%] flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span>Fort Lauderdale</span>
                </div>

                <div className="absolute top-[82%] right-[38%] flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-[#0E2445]" />
                  <span>Miami Beach</span>
                </div>
              </div>

              {/* Bottom Map Legend */}
              <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white inline-block" />
                  <span>Coastal coverage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#3B82F6] flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                  </span>
                  <span className="text-[#93C5FD] font-semibold">Delray Beach headquarters</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean White Directory Panel */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {/* Palm Beach County Cities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0E2445]" />
                  <h3 className="text-xl font-sans font-bold text-slate-900">
                    Palm Beach County
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                  {PALM_BEACH_CITIES.map((city) => (
                    <li key={city} className="flex items-center gap-2 hover:text-[#0E2445] transition-colors cursor-default">
                      <span className="text-[#0E2445] text-xs font-bold">→</span>
                      <span className="font-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Broward & Miami-Dade Cities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0E2445]" />
                  <h3 className="text-xl font-sans font-bold text-slate-900">
                    Broward &amp; Miami-Dade
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                  {BROWARD_MIAMI_CITIES.map((city) => (
                    <li key={city} className="flex items-center gap-2 hover:text-[#0E2445] transition-colors cursor-default">
                      <span className="text-[#0E2445] text-xs font-bold">→</span>
                      <span className="font-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-Text Note for Gulf Coast */}
            <p className="text-xs sm:text-[13px] text-slate-700 font-sans leading-relaxed pt-4 border-t border-slate-200/90 font-medium">
              Gulf Coast coverage available for planned engagements — Sarasota, Naples and the Gulf barrier island corridor.
            </p>
          </div>
        </div>

        {/* Interactive Florida Service Locations Slider */}
        <LocationsSlider />

        {/* View All Locations Centered Bottom Button */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link
            href="/locations"
            className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-sans font-semibold text-white bg-[#0E2445] hover:bg-[#173A6E] px-8 py-3.5 rounded-lg shadow-lg shadow-[#0E2445]/30 transition-all group cursor-pointer"
          >
            <span>View All 19 Florida Location Guides</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeOperateSection;
