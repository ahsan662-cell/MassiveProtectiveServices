'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Building brief',
    description:
      'Discuss the property, arrival patterns, operating hours and the experience you want residents and visitors to have.',
  },
  {
    number: '02',
    title: 'Site review',
    description:
      'Review the lobby, access points, existing procedures and how security would work alongside the building team.',
  },
  {
    number: '03',
    title: 'Service plan',
    description:
      'Define post duties, presentation, coverage hours, communication and reporting before any assignment is agreed.',
  },
  {
    number: '04',
    title: 'Assignment & review',
    description:
      'Confirm availability and assignment details, brief the agreed role and establish a review process with management.',
  },
];

export const ConciergeProcessSection: React.FC = () => {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="A Property-Led Process"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 5 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              A PROPERTY-LED PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            An exacting process. A natural fit.
          </motion.h2>
        </div>

        {/* Horizontal Gold Line Accent matching Screenshot 5 */}
        <div className="w-full h-[1px] bg-[#C5A880]/50" />

        {/* 4 Steps Grid matching Screenshot 5 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4"
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={itemVariants} className="space-y-4">
              <span className="text-3xl sm:text-4xl font-serif text-[#C5A880] block font-normal select-none">
                {step.number}
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeProcessSection;
