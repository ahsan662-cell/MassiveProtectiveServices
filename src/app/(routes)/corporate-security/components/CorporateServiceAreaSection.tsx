'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CorporateServiceAreaSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Corporate Security Service Area"
      className="relative w-full bg-[#0B1324] py-14 sm:py-18 lg:py-20 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                SERVICE AREA
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.12] tracking-tight">
                Corporate Security across South Florida
              </h2>
            </div>

            <div className="pt-2 sm:pt-4">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
                DELRAY BEACH, FLORIDA - HEADQUARTERS
              </span>
            </div>
          </motion.div>

          {/* Right Column matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 sm:space-y-8 flex flex-col justify-between lg:pt-10"
          >
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-light leading-relaxed">
              Serving companies headquartered and operating in Delray Beach, Boca Raton, Fort
              Lauderdale, Miami, Palm Beach, Manalapan, Lighthouse Point, Ocean Ridge, Gulfstream,
              Hillsboro Mile, Aventura, and Miami Beach.
            </p>

            <div className="pt-2 sm:pt-4">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
                PALM BEACH · BROWARD · MIAMI-DADE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
