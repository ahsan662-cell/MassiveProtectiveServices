'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationPlanningBeyondData } from './types';

interface Props {
  data: LocationPlanningBeyondData;
}

export const LocationPlanningBeyond: React.FC<Props> = ({ data }) => {
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
      } py-14 sm:py-18 lg:py-20 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Section Header */}
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
              className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-4xl ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.subtitle}
            </motion.p>
          )}
        </div>

        {/* Gold Framed Cards Grid (2 or 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className={`grid grid-cols-1 ${
            data.cards.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 'md:grid-cols-3'
          } gap-6 sm:gap-8`}
        >
          {data.cards.map((card, idx) => {
            const innerContent = (
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Optional Tag */}
                  {card.tag && (
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#C5A880] font-semibold block mb-4">
                      {card.tag}
                    </span>
                  )}

                  {/* Card Title */}
                  <h3
                    className={`text-2xl sm:text-[26px] font-serif font-normal ${
                      isLight ? 'text-[#151D2A]' : 'text-white'
                    } group-hover:text-[#C5A880] transition-colors mb-3 leading-snug`}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                      card.linkLabel && card.href ? 'mb-6' : ''
                    } ${isLight ? 'text-[#4A5568]' : 'text-zinc-300'}`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Action Link / Bottom Right Arrow */}
                {card.href && (
                  <div className={`pt-6 ${card.linkLabel ? 'flex items-center justify-between' : 'flex justify-end'}`}>
                    {card.linkLabel && (
                      <span
                        className={`text-xs sm:text-[13px] font-sans font-medium ${
                          isLight ? 'text-[#151D2A]' : 'text-white'
                        } group-hover:text-[#C5A880] transition-colors`}
                      >
                        {card.linkLabel}
                      </span>
                    )}
                    <span className="text-[#C5A880] group-hover:text-[#D4AF37] text-xl font-light leading-none group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                )}
              </div>
            );

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`group relative border border-[#C5A880]/70 ${
                  isLight ? 'bg-white/60 hover:bg-white' : 'bg-[#111C2E]/60 hover:bg-[#111C2E]'
                } p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md rounded-none`}
              >
                {card.href ? (
                  <Link href={card.href} className="block h-full">
                    {innerContent}
                  </Link>
                ) : (
                  innerContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
