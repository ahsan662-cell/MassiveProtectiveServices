'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PRESENCE_PILLARS = [
  {
    title: 'Hours of coverage',
    description:
      "Discuss daytime, evening, overnight or extended coverage around your building's arrival patterns and management requirements.",
  },
  {
    title: 'Presentation & post duties',
    description:
      'Agree a suited or uniformed appearance, front-desk responsibilities and the boundary between concierge assistance and security duties.',
  },
  {
    title: 'Ongoing or defined-term',
    description:
      'Explore an ongoing, seasonal or time-limited requirement. Scope, scheduling and availability must be confirmed before engagement.',
  },
];

export const ConciergeShapedPresenceSection: React.FC = () => {
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
      aria-label="The right presence for your property"
      className="relative w-full bg-[#FAF9F6] text-[#111827] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 1 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              SHAPED AROUND YOUR BUILDING
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#111827] leading-[1.15] tracking-tight"
          >
            The right presence for your property.
          </motion.h2>
        </div>

        {/* 3 Pillars Grid matching Screenshot 1 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {PRESENCE_PILLARS.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-sm bg-white border border-black/10 p-7 sm:p-9 space-y-4 shadow-sm transition-all duration-300 hover:border-[#0E2445] hover:shadow-md min-h-[220px]"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-[#111827] font-normal leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout Footnote with Gold Vertical Line matching Screenshot 1 */}
        <div className="border-l-2 border-l-[#0E2445] pl-4 sm:pl-6 text-xs text-zinc-500 font-sans font-light leading-relaxed">
          Coverage hours, personnel, start dates and any armed or unarmed requirements are agreed
          individually. No staffing or start-date guarantee is implied.
        </div>
      </div>
    </section>
  );
};

export default ConciergeShapedPresenceSection;
