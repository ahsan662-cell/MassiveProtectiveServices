'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export const ConciergeCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Discreet protection, planned around you"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7">
        {/* Headline matching user screenshot */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.15] tracking-tight"
        >
          Discreet protection, planned around you.
        </motion.h2>

        {/* Subtitle matching user screenshot */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl mx-auto leading-relaxed"
        >
          Tell us about your property. Let&apos;s discuss the right front-of-house presence.
        </motion.p>

        {/* Dual Action Buttons matching user screenshot */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] cursor-pointer"
          >
            REQUEST A CONFIDENTIAL CONSULTATION
          </Link>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/20 hover:border-[#0E2445] text-zinc-200 hover:text-white bg-transparent font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
          >
            CALL 24/7: (954) 234-7231
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeCTASection;
