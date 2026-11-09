'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, ShieldCheck, Building } from 'lucide-react';

const LICENSE_STACK = [
  {
    icon: FileText,
    title: 'Class D License',
    description: '40-hour security officer training. Required baseline for all FL security personnel.',
  },
  {
    icon: ShieldCheck,
    title: 'Class G License',
    description: "28-hour armed officer certification. Florida's requirement to legally carry on duty.",
  },
  {
    icon: Building,
    title: 'Agency License B1400200',
    description: "Massive Protective's Class B agency license — verify it on FDACS anytime.",
  },
];

export const ClassGLicenseMeaningSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="What a Class G License Actually Means"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              THE FLORIDA STANDARD
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            What a Class G License Actually Means
          </motion.h2>
        </div>

        {/* 2-Column Layout matching Screenshot 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column Narrative */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.8]"
          >
            <p>
              In Florida, an armed security officer must hold a Class G Statewide Firearm License —
              issued by the Florida Department of Agriculture and Consumer Services (FDACS) under
              Chapter 493, Florida Statutes. This requires 28 hours of specialized firearms and legal
              training on top of the 40-hour Class D security officer license. Every Massive Protective
              armed officer holds both. We operate under Agency License B1400200 — verifiable on the
              FDACS public registry.
            </p>
          </motion.div>

          {/* Right Column: 3 Stacked Cards */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-6 space-y-4"
          >
            {LICENSE_STACK.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-sm bg-[#0B1220] border border-white/[0.06] p-6 sm:p-7 flex items-start gap-5 shadow-xl transition-all duration-300 hover:border-[#0E2445]/40"
                >
                  <div className="shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#93C5FD] stroke-[1.6]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-sans font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClassGLicenseMeaningSection;
