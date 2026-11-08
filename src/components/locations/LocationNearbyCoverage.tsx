'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationNearbyCard, LocationNearbyCoverageData } from './types';

interface Props {
  data: LocationNearbyCoverageData;
}

export const LocationNearbyCoverage: React.FC<Props> = ({ data }) => {
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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5"
    >
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
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
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
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.cards.map((card, idx) => {
            const cardContent = (
              <div className="group relative h-full bg-[#121D38] hover:bg-[#162548] border border-white/[0.08] hover:border-[#C5A880]/50 rounded-lg p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <span className="text-[#C5A880] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-sm">
                      ↗
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div key={idx} variants={itemVariants}>
                {card.href ? (
                  <Link href={card.href} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
