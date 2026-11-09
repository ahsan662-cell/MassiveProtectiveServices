'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CLIENT_TYPES = [
  'Estate & Residential Properties',
  'Corporate Executives & Principals',
  'VIP & Celebrity Clients',
  'High-Net-Worth Families',
  'Private Events & Functions',
  'Legal & Witness Protection Scenarios',
];

export const WhoWeServeSection: React.FC = () => {
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
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Who We Serve"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              WHO WE SERVE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            A Specific Kind of Client. Not Every Kind.
          </motion.h2>
        </div>

        {/* Two-Column Grid: Narrative on Left, Stacked List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative with Gold Left Accent Border */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-6 border-l-2 border-[#0E2445] pl-6 sm:pl-8 space-y-6"
          >
            <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.85]">
              Massive Protective Services does not compete for every security contract. We are not the
              right choice for office building lobby coverage, mall security or parking enforcement.
              That work exists — it simply is not what we do.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.85]">
              Our clients share a few things in common. They have something to protect — a property, a
              family, a reputation, or all three. They have dealt with security firms before and found
              them lacking. They understand that real protection costs more than a guard company&apos;s
              shift rate, and they understand why.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.85]">
              We serve estate owners and family offices across Palm Beach County. We serve executives
              and corporate principals who travel with or without notice. We serve high-profile
              individuals and public figures who need protection that is both capable and invisible. We
              serve event hosts who need security that does not look or feel like security.
            </p>

            <p className="text-sm sm:text-base text-zinc-100 font-sans font-medium pt-2">
              If this is you, we should talk.
            </p>
          </motion.div>

          {/* Right Column: Stacked List with Horizontal Dividers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 divide-y divide-white/[0.12] border-y border-white/[0.12]"
          >
            {CLIENT_TYPES.map((type) => (
              <motion.div
                key={type}
                variants={itemVariants}
                className="py-5 sm:py-6 flex items-center text-lg sm:text-xl lg:text-2xl font-serif text-zinc-200 hover:text-white transition-colors group cursor-default"
              >
                <span className="text-[#93C5FD] mr-4 text-base sm:text-lg leading-none select-none">
                  •
                </span>
                <span className="tracking-wide group-hover:translate-x-1 transition-transform duration-200">
                  {type}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
