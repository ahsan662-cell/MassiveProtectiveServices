'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceClosingCTAData } from '../types';

interface Props {
  data?: ServiceClosingCTAData;
}

export const ServiceClosingCTA: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const headline = data?.headline || 'Discreet protection, planned around you.';
  const subtitle =
    data?.subtitle ||
    "Tell us what you're dealing with. We'll respond within 4 business hours — discreetly.";
  const primaryCta = data?.primaryCta || {
    label: 'REQUEST A CONFIDENTIAL CONSULTATION',
    href: '#consultation-form',
  };
  const secondaryCta = data?.secondaryCta || {
    label: 'CALL (954) 234-7231',
    href: 'tel:9542347231',
  };

  const hideAccentLine = data?.hideAccentLine;
  const hideTopGoldBorder = data?.hideTopGoldBorder;
  const bgClass = data?.bgClassName || 'bg-[#0E1728]';

  return (
    <section
      aria-label="Discreet Security Consultation"
      className={`relative w-full ${bgClass} text-white py-16 sm:py-20 lg:py-24 overflow-hidden ${
        hideTopGoldBorder ? 'border-t border-white/5' : 'border-t-2 border-[#0E2445]'
      }`}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Centered Gold Accent Line */}
        {!hideAccentLine && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-12 h-[2px] bg-[#0E2445] mx-auto mb-4"
          />
        )}

        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight max-w-3xl mx-auto"
        >
          {headline}
        </motion.h2>

        {/* Narrative Subtitle */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] hover:scale-[1.02] cursor-pointer"
          >
            {primaryCta.label}
          </a>

          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-[#111B2C]/70 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
          >
            {secondaryCta.label}
          </a>
        </motion.div>

        {/* Optional Disclaimer (Screen 10 School Security Reference) */}
        {data?.disclaimer && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 text-xs text-zinc-400 font-sans font-light"
          >
            {data.disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
};
