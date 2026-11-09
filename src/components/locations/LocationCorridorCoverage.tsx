'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationCorridorCoverageData } from './types';

interface Props {
  data: LocationCorridorCoverageData;
}

export const LocationCorridorCoverage: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const isClean = data.variant === 'clean';

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
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
        </div>

        {/* 2-Column Corridor Grid Container */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className={
            isClean
              ? 'pt-2'
              : 'bg-[#121D38] border border-white/[0.08] rounded-lg p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Column 1 */}
            <div className={data.noDividers ? 'space-y-4 sm:space-y-5' : 'divide-y divide-white/10'}>
              {data.column1.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    data.noDividers ? 'py-1' : 'py-4 sm:py-4.5'
                  } flex items-center gap-3 text-sm sm:text-base text-zinc-200 font-sans group hover:text-white transition-colors`}
                >
                  <span className="text-[#93C5FD] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div
              className={
                data.noDividers
                  ? 'space-y-4 sm:space-y-5 mt-4 md:mt-0'
                  : 'divide-y divide-white/10 border-t md:border-t-0 border-white/10'
              }
            >
              {data.column2.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    data.noDividers ? 'py-1' : 'py-4 sm:py-4.5'
                  } flex items-center gap-3 text-sm sm:text-base text-zinc-200 font-sans group hover:text-white transition-colors`}
                >
                  <span className="text-[#93C5FD] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Optional Inside Footnote */}
            {data.footnote && data.footnotePlacement === 'inside' && (
              <div className="col-span-1 md:col-span-2 pt-6 sm:pt-8 mt-2 sm:mt-4 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed border-t border-white/10">
                {data.footnote}
              </div>
            )}
          </div>
        </motion.div>

        {/* Outside Footnote */}
        {data.footnote && data.footnotePlacement !== 'inside' && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-4xl pt-1"
          >
            {data.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
};
