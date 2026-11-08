'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CorporatePhilosophySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Corporate Security Philosophy"
      className="relative w-full bg-[#0B1220] py-14 sm:py-18 lg:py-20 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Eyebrow matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              CORPORATE SECURITY
            </span>
          </motion.div>

          {/* Statement with Left Gold Border matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-2 sm:border-l-[3px] border-[#C5A880] pl-6 sm:pl-10 space-y-5 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight">
              Your boardroom should be your safest room. We make sure it is.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-light leading-relaxed max-w-3xl">
              Massive Protective Services provides corporate security across Palm Beach, Broward,
              and Miami-Dade counties — tailored to executive teams, legal and HR departments, and
              companies managing sensitive situations that require absolute discretion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
