'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceScopeData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceScopeData;
}

export const ServiceScopeGrid: React.FC<Props> = ({ data }) => {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111C33]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
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
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            {data.headline}
          </motion.h2>

          {data.subtitle && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl pt-1"
            >
              {data.subtitle}
            </motion.p>
          )}
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            data.columns === 4
              ? 'lg:grid-cols-4'
              : data.columns === 2
              ? 'lg:grid-cols-2'
              : 'lg:grid-cols-3'
          } gap-6 sm:gap-8`}
        >
          {data.cards.map((card, idx) => {
            const isMinimalGold = data.cardVariant === 'minimal-gold';
            const isGoldTitle = data.cardVariant === 'gold-title';
            const isWhiteTitle = data.cardVariant === 'white-title';
            const isTopGoldArrow = data.cardVariant === 'top-gold-line-arrow';
            const isLeftGoldBorder = data.cardVariant === 'left-gold-border';

            if (isTopGoldArrow) {
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-[#131E30]/90 hover:bg-[#18263D] border border-white/[0.08] hover:border-[#0E2445]/40 rounded-sm p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
                >
                  {/* Top Solid Gold Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0E2445]" />

                  <div>
                    {/* Optional Card Icon */}
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

                    {card.note && (
                      <p className="mt-5 pt-3 border-t border-white/10 text-xs text-zinc-400 font-sans leading-relaxed">
                        {card.note}
                      </p>
                    )}
                  </div>

                  {/* Bottom Right Arrow */}
                  <div className="mt-8 flex justify-end">
                    <span className="text-[#93C5FD] text-xl font-light leading-none group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative ${
                  isLeftGoldBorder
                    ? 'bg-[#111C2E]/90 hover:bg-[#152238] border-l-2 border-[#0E2445] border-t border-r border-b border-white/[0.06] rounded-none'
                    : isGoldTitle || isWhiteTitle
                    ? 'bg-[#121D38] hover:bg-[#162548] border border-white/[0.08] hover:border-[#0E2445]/50 rounded-lg'
                    : isMinimalGold
                    ? 'bg-[#0E1728]/70 hover:bg-[#121E35] border border-[#0E2445]/30 hover:border-[#0E2445]/70 rounded-sm'
                    : 'bg-[#111A2C]/80 hover:bg-[#152238] border border-white/[0.07] hover:border-[#0E2445]/40 rounded-sm'
                } p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1`}
              >
                {/* Top gold accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E2445]/30 group-hover:via-[#0E2445] to-transparent transition-all duration-500" />

                {/* Card Icon */}
                {card.icon && (
                  isMinimalGold || isGoldTitle || isWhiteTitle || isLeftGoldBorder ? (
                    <div className="w-8 h-8 flex items-center justify-start mb-5 text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                      <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-sm bg-[#1A263D] border border-white/10 group-hover:border-[#0E2445]/50 flex items-center justify-center mb-6 text-[#93C5FD] transition-colors duration-300">
                      <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
                    </div>
                  )
                )}

                {/* Card Title */}
                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal ${
                    isGoldTitle || isLeftGoldBorder
                      ? 'text-[#93C5FD] group-hover:text-[#93C5FD]'
                      : 'text-white group-hover:text-[#F3E5D0]'
                  } transition-colors mb-3 leading-snug`}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                  {card.description}
                </p>

                {/* Card Optional Footnote */}
                {card.note && (
                  <p className="mt-5 pt-3 border-t border-white/10 text-xs text-zinc-400 font-sans leading-relaxed">
                    {card.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Optional Scope Footnote (Mobile Patrol Screen 3 Reference) */}
        {data.footerNote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-[13px] font-sans font-light text-zinc-400 pt-4 max-w-5xl"
          >
            {data.footerNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};
