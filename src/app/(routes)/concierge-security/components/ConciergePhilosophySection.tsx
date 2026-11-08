'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ConciergePhilosophySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="A Welcome with Purpose"
      className="relative w-full bg-[#FAF9F6] text-[#111827] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Eyebrow & Headline matching Screenshot 2 */}
        <div className="max-w-4xl space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              A WELCOME WITH PURPOSE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#111827] leading-[1.15] tracking-tight"
          >
            The first impression should feel effortless. The security behind it
            should not be.
          </motion.h2>
        </div>

        {/* 2-Column Layout matching Screenshot 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column Narrative */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-sm sm:text-base text-zinc-600 font-sans font-light leading-[1.8]"
          >
            <p>
              A busy lobby is both a place of welcome and a point of access. Concierge security brings
              those responsibilities together: a composed, helpful presence for residents and guests,
              supported by clear building procedures. The proposed approach starts with your
              property&apos;s routines, visitor expectations and management structure — not a
              one-size-fits-all front-desk post.
            </p>
          </motion.div>

          {/* Right Column Callout Card with Gold Vertical Border matching Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-5 border-l-2 border-l-[#C5A880] pl-6 sm:pl-8 space-y-3"
          >
            <h3 className="text-xl sm:text-2xl font-serif text-[#111827] font-normal leading-snug">
              Hospitality in manner.
              <br />
              Security in mindset.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
              A defined role, discreet communication and a professional presence shaped around your
              building.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConciergePhilosophySection;
