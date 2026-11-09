'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationSettingDetailData } from './types';

interface Props {
  data: LocationSettingDetailData;
}

export const LocationSettingDetail: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isLight = data.theme !== 'dark';

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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label={data.headline}
      className={`relative w-full ${
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0B1324] text-white'
      } pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
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
              className={`text-sm sm:text-base font-sans font-light leading-relaxed max-w-4xl ${
                isLight ? 'text-[#4A5568]' : 'text-zinc-300'
              }`}
            >
              {data.subtitle}
            </motion.p>
          )}
        </div>

        {data.variant === 'boxed-grid' ? (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="bg-[#EBE7DF] rounded-sm p-8 sm:p-12 lg:p-14 space-y-8 shadow-sm"
          >
            {data.categoryTag && (
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#151D2A] font-semibold block">
                {data.categoryTag}
              </span>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {data.columns.map((col, idx) => (
                <div key={idx} className="flex flex-col space-y-3 group">
                  <div className="w-full h-[1.5px] bg-[#0E2445]/80 mb-2 group-hover:bg-[#0E2445] transition-colors" />
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#151D2A] leading-snug">
                    {col.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-[#4A5568]">
                    {col.description}
                  </p>
                </div>
              ))}
            </div>

            {data.footnote && (
              <p className="text-xs sm:text-[13px] font-sans text-[#718096] pt-4">
                {data.footnote}
              </p>
            )}
          </motion.div>
        ) : (
          <>
            {/* 4 Columns Grid with Top Gold Bar */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4"
            >
              {data.columns.map((col, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex flex-col space-y-3 group"
                >
                  {/* Top Solid Gold Accent Bar */}
                  <div className="w-full h-[2px] bg-[#0E2445] mb-2 group-hover:h-[2.5px] group-hover:bg-[#0E2445] transition-all" />

                  {/* Column Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-serif font-normal ${
                      isLight ? 'text-[#151D2A]' : 'text-white'
                    } leading-snug`}
                  >
                    {col.title}
                  </h3>

                  {/* Column Description */}
                  <p
                    className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                      isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                    }`}
                  >
                    {col.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Footnote */}
            {data.footnote && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-6"
              >
                <p className="text-xs sm:text-[13px] font-sans italic text-[#718096]">
                  {data.footnote}
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
