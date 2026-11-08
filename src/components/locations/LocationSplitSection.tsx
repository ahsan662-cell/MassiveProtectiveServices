'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { LocationSplitSectionData } from './types';
import { ServiceIcon } from '@/components/services/ServiceIcon';

interface Props {
  data: LocationSplitSectionData;
}

export const LocationSplitSection: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isDividedList = data.variant === 'divided-list';

  return (
    <section
      aria-label={data.headline}
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

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
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                {data.eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            {data.headline}
          </motion.h2>
        </div>

        {/* Top-Full Featured Image (Screen 4 Private Island Security Reference) */}
        {data.image && data.imagePosition === 'top-full' && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-2.5 w-full"
          >
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
            {data.image.caption && (
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C5A880]/80 uppercase block">
                {data.image.caption}
              </span>
            )}
          </motion.div>
        )}

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-2 items-start">
          {/* Left Column: Narrative Copy & Optional Image */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="lg:col-span-6 space-y-6 text-sm sm:text-base md:text-[17px] text-zinc-300 font-sans font-light leading-relaxed"
          >
            <div className="space-y-5">
              {data.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Default Left Column Image */}
            {data.image && (!data.imagePosition || data.imagePosition === 'left') && (
              <div className="space-y-2 pt-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                {data.image.caption && (
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    {data.image.caption}
                  </span>
                )}
              </div>
            )}

            {data.stats && data.stats.length > 0 && (
              <div className="pt-4 sm:pt-6 space-y-6">
                <div className="w-full h-px bg-[#C5A880]/35" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                  {data.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#C5A880] tracking-tight">
                        {stat.value}
                      </div>
                      <p className="text-xs sm:text-[13px] text-zinc-300 font-sans font-light leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Cards or Divided List */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`lg:col-span-6 ${
              isDividedList
                ? 'divide-y divide-white/10 border-y border-white/10'
                : 'space-y-5 sm:space-y-6'
            }`}
          >
            {/* Right Column Image (Screen 5 Art Basel Reference) */}
            {data.image && data.imagePosition === 'right' && (
              <div className="space-y-2 pb-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                {data.image.caption && (
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#C5A880] uppercase block">
                    {data.image.caption}
                  </span>
                )}
              </div>
            )}

            {data.items.map((item, idx) => (
              <div
                key={idx}
                className={
                  isDividedList
                    ? 'py-6 sm:py-7 flex items-start gap-4 sm:gap-5 group'
                    : 'group bg-[#121D38] hover:bg-[#162548] border border-white/[0.08] hover:border-[#C5A880]/50 rounded-lg p-6 sm:p-7 flex items-start gap-4 sm:gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300'
                }
              >
                {item.icon && (
                  <div className="text-[#C5A880] group-hover:text-[#D4AF37] transition-colors shrink-0 mt-1">
                    <ServiceIcon name={item.icon} className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
                  </div>
                )}
                <div className="space-y-1.5 flex-1">
                  <h3
                    className={`text-xl sm:text-2xl font-serif font-normal ${
                      data.itemTitleColor === 'white'
                        ? 'text-white group-hover:text-[#C5A880]'
                        : 'text-[#C5A880] group-hover:text-[#D4AF37]'
                    } transition-colors leading-snug`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
