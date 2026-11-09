'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceAudienceData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceAudienceData;
}

export const ServiceAudienceGrid: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isLight = data.theme === 'light';
  const isBorderedCards = data.variant === 'bordered-cards';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
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
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0B1322] text-white'
      } py-16 sm:py-20 lg:py-24 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      {!isLight && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0E2445]/5 rounded-full blur-[140px] pointer-events-none" />
      )}

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
            className={`text-3xl sm:text-5xl font-serif font-normal ${
              isLight ? 'text-[#151D2A]' : 'text-white'
            } leading-tight tracking-tight`}
          >
            {data.headline}
          </motion.h2>

          {data.subtitle && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-4xl pt-1 ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.subtitle}
            </motion.p>
          )}

          {data.paragraphs && data.paragraphs.length > 0 && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className={`space-y-4 text-sm sm:text-base font-sans font-light leading-relaxed max-w-4xl pt-2 ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>
          )}
        </div>

        {/* Bordered Cards (Loss Prevention Screen 4 Reference) */}
        {isBorderedCards ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              data.cardsPerRow === 2
                ? 'lg:grid-cols-2'
                : data.cardsPerRow === 3
                ? 'lg:grid-cols-3'
                : 'lg:grid-cols-4'
            } gap-6 sm:gap-8`}
          >
            {(data.cards || data.pillars)?.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative border border-[#0E2445] hover:border-[#93C5FD] bg-white/70 hover:bg-white rounded-none p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(14, 36, 69, 0.18)] hover:-translate-y-1"
              >
                {/* Optional icon if present */}
                {'icon' in card && typeof card.icon === 'string' && card.icon ? (
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD] mb-4">
                    <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
                  </div>
                ) : null}

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#151D2A] group-hover:text-[#0A111F] transition-colors mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-[#4A5568] font-sans font-light leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : data.variant === 'split-list' ? (
          /* Split-List Variant (Executive Security Screen 4 Reference) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-2 items-start">
            {/* Left Column: Explanatory Copy */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
            >
              {data.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>

            {/* Right Column: Principals List with Gold Left Accent */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 border-l-2 border-[#0E2445] pl-6 sm:pl-8 space-y-4"
            >
              {data.listTitle && (
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD] block mb-5">
                  {data.listTitle}
                </span>
              )}
              <ul className="space-y-3.5">
                {data.listItems?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-[15px] text-zinc-200 font-sans font-normal"
                  >
                    <span className="text-[#93C5FD] text-xs select-none">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ) : data.variant === 'dark-cards' || (!isLight && Boolean(data.cards?.length)) ? (
          /* Dark Cards Grid (VIP Screen 4 Reference) */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`grid grid-cols-1 md:grid-cols-${data.cardsPerRow || 3} gap-6 sm:gap-8`}
          >
            {(data.cards || data.pillars)?.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative ${
                  data.cardVariant === 'gold-title'
                    ? 'bg-[#121D38] hover:bg-[#162548] border border-white/[0.08] hover:border-[#0E2445]/50 rounded-lg'
                    : 'bg-[#101828]/85 hover:bg-[#142036] border border-white/[0.08] hover:border-[#0E2445]/40 rounded-sm'
                } p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 space-y-4`}
              >
                {'icon' in card && typeof card.icon === 'string' && card.icon && (
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors mb-1">
                    <ServiceIcon name={card.icon} className="w-6 h-6 stroke-[1.6]" />
                  </div>
                )}
                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal ${
                    data.cardVariant === 'gold-title'
                      ? 'text-[#93C5FD] group-hover:text-[#93C5FD]'
                      : 'text-white group-hover:text-[#F3E5D0]'
                  } transition-colors leading-snug`}
                >
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-zinc-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* 3 Pillars Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
          >
            {data.pillars?.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-start space-y-4 pt-2 border-l border-white/15 pl-6 sm:pl-8"
              >
                {/* Gold Icon */}
                <div className="w-12 h-12 flex items-center justify-start text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                  <ServiceIcon name={pillar.icon || 'shield-check'} className="w-8 h-8 stroke-[1.6]" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Optional Footnote (Screen 4 Reference) */}
        {data.footerNote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className={`text-xs sm:text-[13px] font-sans font-light leading-relaxed max-w-5xl pt-4 ${
              isLight ? 'text-[#64748B]' : 'text-zinc-400'
            }`}
          >
            {data.footerNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};
