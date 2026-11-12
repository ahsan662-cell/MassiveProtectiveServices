'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CorporateCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Discreet Corporate Protection"
      className="relative w-full bg-[#0E1728] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t-2 border-[#0E2445]"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Headline matching Screenshot: Discreet protection, planned around you. */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight max-w-3xl mx-auto"
        >
          Discreet protection, planned around you.
        </motion.h2>

        {/* Narrative Subtitle matching Screenshot */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto"
        >
          Tell us what you&apos;re dealing with. We&apos;ll respond within 4 business hours — discreetly.
        </motion.p>

        {/* Dual Actions matching Screenshot */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#consultation-form"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] hover:scale-[1.02] cursor-pointer"
          >
            REQUEST A CONFIDENTIAL CONSULTATION
          </a>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-[#111B2C]/70 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
          >
            CALL (954) 234-7231
          </a>
        </motion.div>
      </div>
    </section>
  );
};
