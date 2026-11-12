'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  {
    step: '1',
    title: 'Situation Brief',
    description:
      'Tell us the environment, the risk level, the timeline and any known threats. We assess whether armed coverage is the right fit and what level of deployment is appropriate.',
  },
  {
    step: '2',
    title: 'Officer Matching',
    description:
      'We assign officers based on your environment — uniformed for deterrence, plain-clothes for discretion, armed escort for movement. Every officer briefed on your specific situation.',
  },
  {
    step: '3',
    title: 'Deployment',
    description:
      'Licensed Class G officers on-site, on time. Coordinated communication chain, incident protocols and escalation procedures in place before arrival.',
  },
  {
    step: '4',
    title: 'Post-Engagement Report',
    description:
      'Every armed engagement closes with a written report — incidents, observations and recommendations. Documentation you can rely on.',
  },
];

export const ArmedSecurityProcessSection: React.FC = () => {
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
      aria-label="From Consultation to Officer On-Site Process"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 3 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              HOW WE DEPLOY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            From Consultation to Officer On-Site
          </motion.h2>
        </div>

        {/* Horizontal Gold Line Accent matching Screenshot 3 */}
        <div className="w-full h-[1px] bg-[#0E2445]/50" />

        {/* 4 Steps Grid matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4"
        >
          {STEPS.map((step) => (
            <motion.div key={step.step} variants={itemVariants} className="space-y-4">
              <span className="text-3xl sm:text-4xl font-serif text-[#93C5FD] block font-normal select-none">
                {step.step}
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

export default ArmedSecurityProcessSection;
