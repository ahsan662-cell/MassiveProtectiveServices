'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CITIES_COL_1 = [
  'Palm Beach',
  'Delray Beach',
  'Boca Raton',
  'Pompano Beach',
  'Fort Lauderdale',
  'Deerfield Beach',
];

const CITIES_COL_2 = [
  'Highland Beach',
  'Boynton Beach',
  'West Palm Beach',
  'Manalapan',
  'Miami',
];

export const ArmedSecurityServiceAreaSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Armed Security Officers Across South Florida"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 5 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              SERVICE AREA
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Armed Security Officers Across South Florida
          </motion.h2>
        </div>

        {/* 2-Column Layout: Stylized Tri-County Map on Left, City Checklist on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stylized Tri-County Operational Map */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative w-full aspect-[4/3] rounded-sm bg-[#0B1424] border border-white/[0.08] p-6 overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            {/* North Indicator */}
            <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
              <span className="text-[#93C5FD]">↑</span>
              <span>N</span>
            </div>

            {/* Stylized Coastal Terrain SVG */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                viewBox="0 0 400 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
              >
                {/* Landmass outline */}
                <path
                  d="M 20 20 L 150 20 C 170 80 180 140 180 200 C 180 250 170 290 140 320 L 20 320 Z"
                  fill="#111B30"
                  stroke="#1E2E4E"
                  strokeWidth="1.5"
                />
                {/* Coastline */}
                <path
                  d="M 150 20 C 170 80 180 140 180 200 C 180 250 170 290 140 320"
                  stroke="#0E2445"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                />
                {/* Atlantic Ocean Label */}
                <text
                  x="230"
                  y="160"
                  fill="#475569"
                  fontSize="11"
                  fontFamily="monospace"
                  letterSpacing="0.2em"
                  className="italic select-none"
                >
                  Atlantic Ocean
                </text>
                {/* County Boundaries */}
                <line x1="20" y1="120" x2="175" y2="120" stroke="#1E2E4E" strokeDasharray="3 3" />
                <line x1="20" y1="220" x2="175" y2="220" stroke="#1E2E4E" strokeDasharray="3 3" />

                {/* County Labels */}
                <text x="50" y="75" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">
                  PALM BEACH
                </text>
                <text x="60" y="175" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">
                  BROWARD
                </text>
                <text x="55" y="275" fill="#64748B" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">
                  MIAMI-DADE
                </text>

                {/* Coastal Deployment Hotspots (Gold Pulse Dots) */}
                {[
                  { cx: 168, cy: 50, label: 'Palm Beach' },
                  { cx: 172, cy: 90, label: '' },
                  { cx: 175, cy: 125, label: '' },
                  { cx: 177, cy: 155, label: '' },
                  { cx: 178, cy: 185, label: '' },
                  { cx: 177, cy: 215, label: '' },
                  { cx: 174, cy: 245, label: '' },
                  { cx: 168, cy: 275, label: '' },
                  { cx: 155, cy: 300, label: 'Miami' },
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="3" fill="#0E2445" />
                    <circle cx={pt.cx} cy={pt.cy} r="6" fill="#0E2445" opacity="0.25" />
                    {pt.label && (
                      <text x={pt.cx + 8} y={pt.cy + 3} fill="#E2E8F0" fontSize="9" fontFamily="sans-serif">
                        {pt.label}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Right Column: 2-Column City Checklist */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {/* Column 1 */}
              <div className="space-y-4">
                {CITIES_COL_1.map((city) => (
                  <div key={city} className="flex items-center gap-2.5 text-sm sm:text-base text-zinc-200 font-sans">
                    <span className="text-[#93C5FD] font-mono text-sm">→</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {CITIES_COL_2.map((city) => (
                  <div key={city} className="flex items-center gap-2.5 text-sm sm:text-base text-zinc-200 font-sans">
                    <span className="text-[#93C5FD] font-mono text-sm">→</span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Coverage Note */}
            <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed pt-2">
              Available for deployments outside these areas on request. Contact us to discuss coverage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArmedSecurityServiceAreaSection;
