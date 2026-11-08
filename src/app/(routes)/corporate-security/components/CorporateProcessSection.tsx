'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Situation Brief',
    description:
      'We learn your company, your people, and the specific scenario before we assign a single officer.',
  },
  {
    number: '02',
    title: 'Risk Assessment',
    description:
      'We identify exposure points — personnel, locations, timing — and build a coverage plan around your operational calendar.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Class D and Class G licensed officers, background-checked and Florida-credentialed, deployed on your schedule.',
  },
  {
    number: '04',
    title: 'Ongoing Review',
    description:
      "Security needs shift. We review and adjust coverage as your business evolves — no locked-in contracts that don't fit reality.",
  },
];

export const CorporateProcessSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Our Process"
      className="relative w-full bg-[#070D18] py-14 sm:py-18 lg:py-20 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 5 */}
        <div className="max-w-3xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Our process
          </motion.h2>
        </div>

        {/* 4 Process Cards matching Screenshot 5 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#111A2C]/80 hover:bg-[#152238] border border-white/[0.07] hover:border-[#C5A880]/40 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 min-h-[260px]"
            >
              {/* Subtle top gold accent on card hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/0 group-hover:via-[#C5A880] to-transparent transition-all duration-500" />

              <div className="space-y-4">
                {/* Step Number matching Screenshot 5 in elegant gold */}
                <span className="block text-2xl sm:text-3xl font-serif font-light text-[#C5A880] tracking-wider">
                  {step.number}
                </span>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
