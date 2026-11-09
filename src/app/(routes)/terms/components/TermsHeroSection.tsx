'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Shield, Clock } from 'lucide-react';

export const TermsHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Terms of Service Header"
      className="relative w-full bg-[#070D35] text-white pt-22 sm:pt-27 pb-12 sm:pb-16 overflow-hidden border-b border-white/[0.08]"
    >
      {/* Top Credential Ribbon Bar matching Screenshot 1 */}
      <div className="w-full bg-[#070D18] border-y border-white/[0.06] py-3 sm:py-0 px-4 sm:px-6 lg:px-8 sm:mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-6 sm:gap-10 text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="tracking-wider uppercase">DELRAY BEACH HQ</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="tracking-wider uppercase">FL LICENSE B1400200</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="tracking-wider uppercase">SERVING PALM BEACH COUNTY 24/7</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        {/* Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
            LEGAL
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-tight tracking-tight"
        >
          Terms of Service
        </motion.h1>

        {/* Meta details */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-xs sm:text-sm text-zinc-400 font-sans font-light"
        >
          Massive Protective Services Inc. — Effective Date: [DATE] ·{' '}
          <span className="text-[#93C5FD]">Last Updated: [DATE]</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TermsHeroSection;
