'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SERVICE_AREAS = [
  'Palm Beach County',
  'Broward County',
  'Miami-Dade County',
  'Treasure Coast',
  'Gulf Coast',
  'Statewide Travel',
];

export const PrimaryServiceAreaSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Primary Service Area - Where We Operate"
      className="relative w-full bg-[#101A2D] text-white py-16 sm:py-24 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Eyebrow */}
          <div>
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              WHERE WE OPERATE
            </span>
          </div>

          {/* Headline matching Image 2 */}
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-serif font-normal text-white leading-tight tracking-tight">
            Primary Service Area — South Florida
          </h2>

          {/* Row of Pill Tags matching Image 2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            {SERVICE_AREAS.map((area) => (
              <motion.div
                key={area}
                variants={itemVariants}
                className="px-5 py-2.5 rounded-full border border-[#0E2445]/40 text-xs sm:text-sm font-sans text-zinc-200 hover:text-white hover:border-[#93C5FD] hover:bg-[#0E2445]/10 transition-all duration-200 cursor-default select-none shadow-[0_0_12px_rgba(14, 36, 69, 0.06)]"
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryServiceAreaSection;
