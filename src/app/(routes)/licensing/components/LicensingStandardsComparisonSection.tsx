'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CHAPTER_493_REQUIRES = [
  'Class B Agency License for the firm',
  'Class D License for all officers',
  'Class G License for all armed officers',
  'FDACS registration and renewal compliance',
  'Background checks for all licensed personnel',
  'Designated manager on record',
];

const MASSIVE_PROTECTIVE_ADDS = [
  'Written security plan for every engagement',
  'Consistent officer assignment (not rotating pools)',
  'Pre-deployment property briefing for every officer',
  'Written shift reports after every deployment',
  'NDA signed by all personnel on every engagement',
  'No staffing agency fills — ever',
  'Monthly client check-ins on ongoing engagements',
  '24/7 availability for the duration of every retainer',
];

export const LicensingStandardsComparisonSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="What Licensing Requires and What We Add to It"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              OUR STANDARDS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            What Licensing Requires and What We Add to It
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C5A880]/60 -translate-x-1/2" />

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pr-8"
          >
            <h3 className="text-xs sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-[#C5A880]">
              WHAT CHAPTER 493 REQUIRES
            </h3>

            <ul className="space-y-5">
              {CHAPTER_493_REQUIRES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:pl-8 border-t border-[#C5A880]/30 pt-8 lg:border-t-0 lg:pt-0"
          >
            <h3 className="text-xs sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-[#C5A880]">
              WHAT MASSIVE PROTECTIVE ADDS
            </h3>

            <ul className="space-y-5">
              {MASSIVE_PROTECTIVE_ADDS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LicensingStandardsComparisonSection;
