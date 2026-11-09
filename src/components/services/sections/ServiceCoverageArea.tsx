'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceAreaData } from '../types';

interface Props {
  data?: ServiceAreaData;
}

export const ServiceCoverageArea: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const eyebrow = data?.eyebrow || 'SERVICE AREA';
  const headline =
    data?.headline || 'Residential Security Across Palm Beach, Broward & Miami-Dade';
  const citiesCol1 = data?.citiesColumn1 || [
    'Palm Beach',
    'Delray Beach',
    'Boca Raton',
    'Pompano Beach',
    'Fort Lauderdale',
    'Deerfield Beach',
  ];
  const citiesCol2 = data?.citiesColumn2 || [
    'Highland Beach',
    'Boynton Beach',
    'West Palm Beach',
    'Manalapan',
    'Miami',
  ];
  const footerNote =
    data?.footerNote ||
    "We serve South Florida's most exclusive coastal communities. Contact us for coverage beyond these areas or for multi-property programmes.";

  const isLight = data?.theme === 'light';
  const isCityCards = data?.variant === 'city-cards';
  const citiesList =
    data?.cities || [
      'Miami',
      'Miami Beach',
      'Fort Lauderdale',
      'Palm Beach',
      'West Palm Beach',
      'Boca Raton',
      'Delray Beach',
      'Aventura',
      'Sunny Isles Beach',
      'Jupiter',
    ];

  const hasCities = (data?.citiesColumn1 && data.citiesColumn1.length > 0) || !data?.description;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Service Area Coverage"
      className={`relative w-full ${
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0B1324] text-white'
      } py-16 sm:py-20 lg:py-24 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          {data?.eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal leading-[1.12] tracking-tight ${
              isLight ? 'text-[#151D2A]' : 'text-white'
            }`}
          >
            {headline}
          </motion.h2>

          {data?.subtitle && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-4xl pt-1 ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.subtitle}
            </motion.p>
          )}
        </div>

        {isCityCards ? (
          /* 10 City Cards in 5-Column Grid (Screen 7 Reference) */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {citiesList.map((city, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative border border-[#0E2445] hover:border-[#93C5FD] bg-white/70 hover:bg-white rounded-none p-6 sm:p-7 min-h-[110px] sm:min-h-[130px] flex flex-col justify-start transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(14, 36, 69, 0.18)] hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl font-serif font-normal text-[#151D2A] group-hover:text-[#0A111F] transition-colors leading-snug">
                  {city}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        ) : hasCities ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Coastal Map Visualization */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative w-full h-[420px] sm:h-[480px] bg-[#070D18] border border-white/10 rounded-sm overflow-hidden p-6 flex flex-col justify-between shadow-2xl"
            >
              {/* Top Compass & Radar */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col items-center space-y-0.5 text-zinc-400 font-mono text-[10px]">
                  <span>↑</span>
                  <span className="tracking-widest font-bold">N</span>
                </div>
                {/* Subtle radar circle */}
                <div className="w-16 h-16 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-white/10" />
                </div>
              </div>

              {/* Coastal Map SVG Graphic */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg
                  viewBox="0 0 400 480"
                  className="w-full h-full object-cover"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Subtle Grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Landmass Contour (South Florida Coastline) */}
                  <path
                    d="M 40,0 L 140,0 C 145,60 135,110 142,160 C 145,210 135,260 130,310 C 125,350 115,390 100,420 C 85,450 70,470 50,480 L 0,480 L 0,0 Z"
                    fill="#0F172A"
                    stroke="#1E293B"
                    strokeWidth="1.5"
                  />

                  {/* Outer Coastline Accent Line */}
                  <path
                    d="M 140,0 C 145,60 135,110 142,160 C 145,210 135,260 130,310 C 125,350 115,390 100,420 C 85,450 70,470 50,480"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  {/* County Boundary 1 (Palm Beach / Broward) */}
                  <line
                    x1="20"
                    y1="230"
                    x2="137"
                    y2="230"
                    stroke="rgba(255,255,255,0.12)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  {/* County Boundary 2 (Broward / Miami-Dade) */}
                  <line
                    x1="20"
                    y1="340"
                    x2="124"
                    y2="340"
                    stroke="rgba(255,255,255,0.12)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />

                  {/* Region Labels */}
                  <text x="50" y="150" fill="#64748B" fontSize="10" fontFamily="monospace" letterSpacing="2">
                    PALM BEACH
                  </text>
                  <text x="50" y="285" fill="#64748B" fontSize="10" fontFamily="monospace" letterSpacing="2">
                    BROWARD
                  </text>
                  <text x="45" y="390" fill="#64748B" fontSize="10" fontFamily="monospace" letterSpacing="2">
                    MIAMI-DADE
                  </text>

                  {/* Atlantic Ocean Label (Vertical) */}
                  <text
                    x="300"
                    y="240"
                    transform="rotate(90 300 240)"
                    fill="#334155"
                    fontSize="11"
                    fontFamily="serif"
                    fontStyle="italic"
                    letterSpacing="3"
                  >
                    Atlantic Ocean
                  </text>

                  {/* Coastal City Pins with Glow & Pulsing Ring */}
                  {/* Palm Beach */}
                  <circle cx="140" cy="90" r="3" fill="#0E2445" />
                  <circle cx="140" cy="90" r="7" fill="none" stroke="#0E2445" strokeWidth="0.75" opacity="0.4" />
                  <text x="155" y="94" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">Palm Beach</text>

                  {/* Delray / Boca */}
                  <circle cx="138" cy="140" r="2.5" fill="#0E2445" />
                  <circle cx="136" cy="180" r="2.5" fill="#0E2445" />
                  <circle cx="137" cy="210" r="2.5" fill="#0E2445" />

                  {/* Fort Lauderdale */}
                  <circle cx="134" cy="270" r="3" fill="#0E2445" />
                  <circle cx="134" cy="270" r="6" fill="none" stroke="#0E2445" strokeWidth="0.75" opacity="0.4" />

                  {/* Hollywood / Aventura */}
                  <circle cx="128" cy="315" r="2.5" fill="#0E2445" />

                  {/* Miami */}
                  <circle cx="112" cy="380" r="3" fill="#0E2445" />
                  <circle cx="112" cy="380" r="7" fill="none" stroke="#0E2445" strokeWidth="0.75" opacity="0.4" />
                  <text x="126" y="384" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">Miami</text>
                </svg>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="tracking-widest">COASTAL CORRIDOR</span>
                <span className="text-[#93C5FD]">24/7 ACTIVE DETAIL</span>
              </div>
            </motion.div>

            {/* Right: 2-Column City Directory & Description */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 space-y-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {/* Column 1 */}
                <div className="space-y-4">
                  {citiesCol1.map((city, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center space-x-2 text-[15px] sm:text-base text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="text-[#93C5FD] group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                      <span className="font-sans font-light">{city}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {citiesCol2.map((city, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center space-x-2 text-[15px] sm:text-base text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="text-[#93C5FD] group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                      <span className="font-sans font-light">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm sm:text-[15px] text-zinc-400 font-sans font-light leading-relaxed">
                  {footerNote}
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Fallback layout for pages without specific city lists */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
                {data?.hqBadge || 'DELRAY BEACH, FLORIDA - HEADQUARTERS'}
              </span>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed">
                {data?.description}
              </p>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
                {data?.countyBadge || 'PALM BEACH · BROWARD · MIAMI-DADE'}
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
