'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationPlanningScenariosData } from './types';

interface Props {
  data: LocationPlanningScenariosData;
}

export const LocationPlanningScenarios: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isLight = data.theme !== 'dark';

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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className={`relative w-full ${
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0B1324] text-white'
      } pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="max-w-4xl space-y-3">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal leading-tight tracking-tight ${
              isLight ? 'text-[#151D2A]' : 'text-white'
            }`}
          >
            {data.headline}
          </motion.h2>

          {data.subtitle && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-3xl ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.subtitle}
            </motion.p>
          )}
        </div>

        {/* 3 Gold Framed Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`relative border border-[#0E2445]/70 ${
                isLight ? 'bg-white/60 hover:bg-white' : 'bg-[#111C2E]/60 hover:bg-[#111C2E]'
              } p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 shadow-sm hover:shadow-md rounded-none`}
            >
              {/* Badge */}
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#93C5FD] font-semibold block mb-4">
                {card.tag || 'ILLUSTRATIVE PLANNING SCENARIO'}
              </span>

              {/* Title */}
              <h3
                className={`text-2xl sm:text-[26px] font-serif font-normal ${
                  isLight ? 'text-[#151D2A]' : 'text-white'
                } mb-4 leading-snug`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                  isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                }`}
              >
                {card.description}
              </p>

              {/* Optional Footer Tag/Note */}
              {card.footerNote && (
                <div className="mt-6 pt-4 border-t border-[#0E2445]/30">
                  <p className="text-[11px] sm:text-xs font-mono tracking-wider text-[#8C7A6B]">
                    {card.footerNote}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
