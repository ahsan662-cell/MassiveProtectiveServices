'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHERE WE OPERATE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-5xl"
          >
            South Florida — From Palm Beach to Miami-Dade
            <br className="hidden sm:inline" /> and the Gulf Coast
          </motion.h2>
        </div>

        {/* Two-Column Grid: Map Panel on Left, City Directory on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Tactical Coastal Map Visualization matching Screenshot 6 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full rounded-sm bg-[#111C33] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-2xl overflow-hidden"
          >
            {/* Ambient Coastal Vector Map */}
            <div className="relative w-full h-[360px] flex flex-col justify-between">
              {/* Top header on map */}
              <div className="flex items-start justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A880]" />
                  <span>← GULF COAST</span>
                  <span className="text-zinc-500 text-[11px] block">Sarasota</span>
                </div>
                <div className="text-zinc-400 font-mono tracking-wider">N ↑</div>
              </div>

              {/* Graphical Coastline Representation */}
              <div className="absolute inset-0 top-12 bottom-6 pointer-events-none">
                {/* SVG Coastline & Sector Dividers */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 320 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Landmass polygon */}
                  <path
                    d="M0 0 H235 C230 40 240 80 230 110 C220 145 200 190 180 240 C170 260 160 280 150 280 H0 V0 Z"
                    fill="#152340"
                    opacity="0.9"
                  />

                  {/* Horizontal sector division lines */}
                  <line x1="0" y1="88" x2="235" y2="88" stroke="#ffffff" strokeOpacity="0.1" />
                  <line x1="0" y1="170" x2="208" y2="170" stroke="#ffffff" strokeOpacity="0.1" />

                  {/* Sector Name labels */}
                  <text x="14" y="45" fill="#889BB5" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
                    PALM BEACH
                  </text>
                  <text x="14" y="130" fill="#889BB5" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
                    BROWARD
                  </text>
                  <text x="14" y="210" fill="#889BB5" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
                    MIAMI-DADE
                  </text>

                  {/* Atlantic Ocean Label in elegant serif italics */}
                  <text x="245" y="150" fill="#4B6382" fontSize="15" fontStyle="italic" fontFamily="serif">
                    Atlantic
                  </text>
                  <text x="248" y="170" fill="#4B6382" fontSize="15" fontStyle="italic" fontFamily="serif">
                    Ocean
                  </text>

                  {/* Coastal Coverage Dots (Gold/Amber) */}
                  <circle cx="238" cy="28" r="2.5" fill="#D4AF37" />
                  <circle cx="236" cy="52" r="2.5" fill="#D4AF37" />
                  <circle cx="232" cy="74" r="2.5" fill="#D4AF37" />
                  <circle cx="234" cy="98" r="2.5" fill="#D4AF37" />
                  <circle cx="228" cy="118" r="2.5" fill="#D4AF37" />
                  <circle cx="223" cy="126" r="2.5" fill="#D4AF37" />
                  <circle cx="218" cy="138" r="2.5" fill="#D4AF37" />
                  <circle cx="212" cy="152" r="2.5" fill="#D4AF37" />
                  <circle cx="205" cy="180" r="2.5" fill="#D4AF37" />
                  <circle cx="198" cy="202" r="2.5" fill="#D4AF37" />
                  <circle cx="188" cy="225" r="2.5" fill="#D4AF37" />
                  <circle cx="178" cy="245" r="2.5" fill="#D4AF37" />

                  {/* Delray Beach HQ Target Marker */}
                  <circle cx="230" cy="98" r="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                  <circle cx="230" cy="98" r="2" fill="#D4AF37" />
                </svg>

                {/* HQ Callout Text */}
                <div className="absolute top-[88px] right-[75px] text-[10px] font-mono text-zinc-200">
                  Delray Beach HQ
                </div>
              </div>

              {/* Bottom Map Legend matching Screenshot 6 */}
              <div className="flex items-center gap-4 text-[10px] sm:text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.05]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white inline-block" />
                  <span>Coastal coverage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#D4AF37] flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  </span>
                  <span>Delray Beach headquarters</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: City Directory Sub-Columns matching Screenshot 6 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {/* Palm Beach County Cities */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
                  Palm Beach County
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
                  {PALM_BEACH_CITIES.map((city) => (
                    <li key={city} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                      <span className="text-[#C5A880] text-xs">→</span>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Broward & Miami-Dade Cities */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
                  Broward &amp; Miami-Dade
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
                  {BROWARD_MIAMI_CITIES.map((city) => (
                    <li key={city} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                      <span className="text-[#C5A880] text-xs">→</span>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-Text Note for Gulf Coast */}
            <p className="text-xs sm:text-[13px] text-[#C5A880]/85 font-sans leading-relaxed pt-2">
              Gulf Coast coverage available for planned engagements — Sarasota, Naples and the Gulf barrier island corridor.
            </p>
          </div>
        </div>

        {/* View All Locations Centered Bottom Link matching Screenshot 6 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-18 text-center"
        >
          <a
            href="#where-we-operate"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeOperateSection;
