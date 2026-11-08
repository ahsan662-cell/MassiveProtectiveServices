'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceRelatedData } from '../types';

interface Props {
  data?: ServiceRelatedData;
}

export const ServiceRelatedServices: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isLight = data?.theme === 'light';
  const eyebrow = data?.eyebrow;
  const headline = data?.headline || 'Related services';
  const services = data?.services || [];

  if (!services || services.length === 0) return null;

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
      aria-label="Related Services"
      className={`relative w-full ${
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0A111F] text-white'
      } py-16 sm:py-20 lg:py-24 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`text-3xl sm:text-5xl font-serif font-normal leading-tight tracking-tight ${
              isLight ? 'text-[#151D2A]' : 'text-white'
            }`}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Related Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={service.href}
                className={`group relative flex flex-col justify-between h-full ${
                  isLight
                    ? 'border border-[#C5A880] hover:border-[#D4AF37] bg-white/70 hover:bg-white rounded-none p-7 sm:p-9 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(197,168,128,0.18)]'
                    : 'bg-[#121D38] hover:bg-[#152344] border border-white/[0.08] hover:border-[#C5A880]/50 rounded-lg p-8 sm:p-10 shadow-[0_6px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
                } transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <h3
                    className={`text-2xl sm:text-[26px] font-serif font-normal leading-snug transition-colors ${
                      isLight
                        ? 'text-[#151D2A] group-hover:text-[#0A111F]'
                        : 'text-white group-hover:text-[#F3E5D0]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {service.description && (
                    <p
                      className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                        isLight ? 'text-[#4A5568]' : 'text-slate-300'
                      }`}
                    >
                      {service.description}
                    </p>
                  )}
                </div>

                {service.linkLabel !== 'none' && (
                  <div className="pt-6 sm:pt-8 flex items-center gap-1.5 text-xs sm:text-[13px] font-sans text-[#C5A880] group-hover:text-[#D4AF37] transition-colors font-medium">
                    <span>{service.linkLabel || 'Learn More'}</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      →
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Footnote (School Security Screen 9 Reference) */}
        {data?.footerNote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className={`text-xs sm:text-[13px] font-sans font-light leading-relaxed max-w-5xl pt-2 ${
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
