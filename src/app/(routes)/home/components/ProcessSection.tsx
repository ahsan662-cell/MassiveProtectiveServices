'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  {
    step: '01',
    title: 'Confidential Consultation',
    description:
      'One direct call or secure message. No call center, no sales intake. You reach our operational leadership directly, detail your risk requirements and receive a tactical response within hours.',
  },
  {
    step: '02',
    title: 'Written Security Plan',
    description:
      'A thorough physical site reconnaissance or movement advance followed by a comprehensive security plan — covering Class G armed officer placement, access perimeters, and contingency protocols.',
  },
  {
    step: '03',
    title: 'Operator Assignment',
    description:
      'A vetted, state-licensed Class G armed officer matched specifically to your operational environment and fully briefed on your profile, estate rules, and expectations before first shift arrival.',
  },
  {
    step: '04',
    title: 'Documented Execution',
    description:
      'Digital shift reports delivered after every deployment. Continuous command communication, consistent officer rotation, and strict non-disclosure compliance at every rank.',
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
      className="relative w-full bg-[#FFFFFF] text-[#0F172A] py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 space-y-4 max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#0A0A0A] leading-[1.12] tracking-tight"
          >
            From First Contact to First Shift — A Process Built for Serious Clients
          </motion.h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            Zero friction, zero bureaucratics. Direct access to security planners who assess risks and mobilize armed details swiftly.
          </p>

          <div className="pt-2">
            <div className="w-20 h-1 bg-[#0E2445] rounded-full shadow-sm" />
          </div>
        </div>

        {/* 4 Process Steps (4 columns across) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="group relative rounded-xl bg-[#F8FAFC] p-7 border border-slate-200/90 hover:border-[#0E2445]/40 hover:bg-white shadow-sm hover:shadow-[0_12px_32px_rgba(14, 36, 69,0.08)] transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Step Number in Brand Blue Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0E2445] text-white font-mono font-bold text-lg flex items-center justify-center shadow-md shadow-[#0E2445]/25 group-hover:scale-105 transition-transform">
                  {step.step}
                </div>

                {/* Title in Sans Bold */}
                <h3 className="text-xl font-sans font-bold text-slate-900 group-hover:text-[#0E2445] leading-snug transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-[#0E2445] font-semibold">
                <span>Phase {step.step} Protocol</span>
                <span className="text-slate-400 group-hover:text-[#0E2445] transition-colors">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
