'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, Bell, Briefcase } from 'lucide-react';

const CONTEXTS = [
  {
    icon: Building2,
    title: 'Luxury residential',
    description:
      'Condominium and managed residential lobbies where resident privacy, visitor flow and a polished arrival experience matter.',
  },
  {
    icon: Bell,
    title: 'Hospitality settings',
    description:
      "Hotel and serviced-residence front-of-house environments, with responsibilities aligned to the hospitality team's own procedures.",
  },
  {
    icon: Briefcase,
    title: 'Commercial properties',
    description:
      'Office and mixed-use reception areas that need a professional welcome and a controlled approach to visitor access.',
  },
];

export const ConciergeWhereRoleFitsSection: React.FC = () => {
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
      aria-label="Where the Concierge Role Fits"
      className="relative w-full bg-[#FAF9F6] text-[#111827] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 4 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHERE THE ROLE FITS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#111827] leading-[1.15] tracking-tight"
          >
            For buildings where the welcome matters.
          </motion.h2>
        </div>

        {/* 3 Context Cards Grid matching Screenshot 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {CONTEXTS.map((item) => {
            const Icon = item.icon;
            return (
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
                className="group rounded-sm bg-white border border-black/10 p-7 sm:p-9 space-y-5 shadow-sm transition-all duration-300 hover:border-[#C5A880] hover:shadow-md min-h-[240px] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 flex items-center justify-start text-[#C5A880]">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#111827] font-normal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote matching Screenshot 4 */}
        <div className="pt-2 text-xs text-zinc-500 font-sans font-light leading-relaxed">
          These are suitable service contexts, not a list of existing clients. Property suitability
          and the precise front-of-house role would be confirmed during consultation.
        </div>
      </div>
    </section>
  );
};

export default ConciergeWhereRoleFitsSection;
