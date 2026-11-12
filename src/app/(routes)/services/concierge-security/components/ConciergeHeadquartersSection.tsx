'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ConciergeHeadquartersSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Delray Beach Headquarters — South Florida"
      className="relative w-full bg-[#080E1A] text-white py-16 sm:py-24 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-3"
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              DELRAY BEACH HEADQUARTERS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight">
              South Florida. A local perspective.
            </h2>
          </motion.div>

          {/* Right Column matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.8]">
              Based in Delray Beach, Massive Protective Services serves South Florida across Palm
              Beach, Broward and Miami-Dade. Tell us where your property is located so concierge
              service availability can be confirmed.
            </p>

            <div className="text-xs sm:text-[13px] font-mono text-[#93C5FD] tracking-wider uppercase font-medium">
              PALM BEACH · BROWARD · MIAMI-DADE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeHeadquartersSection;
