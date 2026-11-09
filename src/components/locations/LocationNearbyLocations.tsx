'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationNearbyLocationsData, LocationNearbyPlaceItem } from './types';

interface Props {
  data: LocationNearbyLocationsData;
}

export const LocationNearbyLocations: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const places = data.places || [];

  if (places.length === 0) return null;

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
      aria-label={data.eyebrow || 'Nearby Locations'}
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5 border-b border-[#0E2445]/30"
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

          {data.headline && (
            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
            >
              {data.headline}
            </motion.h2>
          )}
        </div>

        {/* 3 Places Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {places.map((place, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={place.href}
                className="group relative flex flex-col justify-between h-full bg-[#121D38] hover:bg-[#152344] border border-white/[0.08] hover:border-[#0E2445]/50 rounded-lg p-8 sm:p-9 shadow-[0_6px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-[26px] font-serif font-normal text-[#93C5FD] group-hover:text-[#93C5FD] leading-snug transition-colors">
                    {place.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-zinc-300">
                    {place.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 flex items-center gap-1.5 text-xs sm:text-[13px] font-sans text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors font-medium">
                  <span>{place.linkLabel || 'View Coverage'}</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
