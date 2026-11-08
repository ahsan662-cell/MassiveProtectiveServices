'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MINIMUM_REQUIREMENTS = [
  'Florida Class G Statewide Firearm License (current, valid)',
  'Florida Class D Security Officer License (current, valid)',
  'Clean background — no disqualifying criminal history',
  'Valid Florida driver’s license',
  'Reliable personal transportation',
  'Legal authorization to work in the United States',
  'Ability to pass a drug screen',
];

export const WhoWeHireSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Who We Hire - Minimum Standards and Evaluation"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHO WE HIRE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            The Standard We Hold — Before the First Interview
          </motion.h2>
        </div>

        {/* Two-Column Grid: Requirements Card on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Requirements Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-sm bg-[#0B1220] border-t-2 border-t-[#C5A880] border-x border-b border-white/[0.08] p-7 sm:p-9 space-y-6 shadow-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block font-semibold">
              MINIMUM REQUIREMENTS
            </span>

            <ul className="space-y-3.5">
              {MINIMUM_REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-start text-xs sm:text-[13px] text-zinc-300 font-sans font-light leading-relaxed">
                  <span className="text-[#C5A880] font-bold mr-3 select-none leading-none mt-0.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/[0.08] text-xs font-sans text-zinc-400 leading-relaxed">
              If you do not hold a current Class G license, we are not the right firm right now. Class D
              alone does not meet our deployment standard.
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy verbatim from Screenshot 2 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.85]"
          >
            <p className="text-zinc-200 font-medium text-base sm:text-[17px]">
              Licensing gets you in the door. What we actually evaluate is different.
            </p>

            <p>
              We look for officers who treat the work like a profession, not a shift. Who write clear
              reports. Who show up early and in condition. Who understand that a client&apos;s security is
              not an abstract responsibility — it is a real one, with real consequences if they miss
              something.
            </p>

            <p>
              We look for people who can be present in a room without drawing attention, who can escalate
              when the situation requires it and stand down when it does not, and who understand the
              difference between authority and aggression.
            </p>

            <p>
              We look for people who are comfortable with silence — the kind that comes from doing the
              job correctly, not from doing nothing.
            </p>

            <p className="text-zinc-100 font-medium pt-2">
              If this describes how you approach the work, we want to talk.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHireSection;
