'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationProximityAdvantageData } from './types';
import { ServiceIcon } from '@/components/services/ServiceIcon';

interface Props {
  data: LocationProximityAdvantageData;
}

export const LocationProximityAdvantage: React.FC<Props> = ({ data }) => {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0E2445]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header & Narrative (Centered Layout matching Image 3) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {data.eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                {data.eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            {data.headline}
          </motion.h2>

          {/* Narrative paragraphs */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="space-y-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed pt-2 max-w-3xl mx-auto text-center"
          >
            {data.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </motion.div>
        </div>

        {/* 3 Proximity Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4"
        >
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#121D38] hover:bg-[#162548] border border-white/[0.08] hover:border-[#0E2445]/50 rounded-lg p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
            >
              {/* Card Icon */}
              {card.icon && (
                <div className="w-8 h-8 flex items-center justify-start mb-5 text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                  <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
                </div>
              )}

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Footnote */}
        {data.footnote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-[13px] text-zinc-400 font-sans font-light text-center max-w-4xl mx-auto pt-4 leading-relaxed"
          >
            {data.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
};
