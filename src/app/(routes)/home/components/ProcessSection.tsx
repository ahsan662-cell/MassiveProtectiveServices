'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  {
    step: '1',
    title: 'Confidential Consultation',
    description:
      'One call or a brief form submission. No sales team, no intake process. You reach our team directly, describe what you need and receive a thoughtful response — not a quote sheet.',
  },
  {
    step: '2',
    title: 'Written Security Plan',
    description:
      'A property assessment or event brief followed by a written security plan — covering officer placement, access protocols, coverage hours and any situation-specific considerations. Delivered within 48 hours.',
  },
  {
    step: '3',
    title: 'Officer Assignment',
    description:
      'A vetted, licensed officer matched to your assignment and briefed on your property, your client profile and your expectations before the first shift begins. Armed or plain-clothes as required.',
  },
  {
    step: '4',
    title: 'Consistent, Documented Coverage',
    description:
      'Written shift reports after every deployment. Consistent officer assignment where possible. Monthly client check-ins. NDAs signed at every level. The same professional standard every shift.',
  },
];

export const ProcessSection: React.FC = () => {
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
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="how-it-works"
      aria-label="How It Works - Operational Process"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-5xl"
          >
            From First Contact to First Shift — A Process Built for Serious Clients
          </motion.h2>
        </div>

        {/* Full-Width Horizontal Gold Divider matching Screenshot 9 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full h-px bg-[#C5A880]/40 origin-left mb-8 sm:mb-10"
        />

        {/* 4 Process Steps (4 columns across) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Step Number in Large Serif Gold */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#C5A880] select-none leading-none">
                {step.step}
              </div>

              {/* Title in Serif White */}
              <h3 className="text-xl sm:text-[22px] font-serif font-normal text-white leading-snug">
                {step.title}
              </h3>

              {/* Description */}
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

export default ProcessSection;
