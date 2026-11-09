'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceCredentialsData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceCredentialsData;
}

export const ServiceCredentials: React.FC<Props> = ({ data }) => {
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

  const hasHeader = Boolean(
    data.eyebrow ||
    data.headline ||
    (data.paragraphs && data.paragraphs.length > 0) ||
    data.infoLink
  );

  return (
    <section
      aria-label={data.headline || 'Licensed, Armed and Verifiable'}
      className={`relative w-full bg-[#0B1324] ${
        hasHeader ? 'py-16 sm:py-20 lg:py-24' : 'py-12 sm:py-16 lg:py-20'
      } text-white overflow-hidden border-t border-white/5`}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${hasHeader ? 'space-y-10 sm:space-y-12' : ''}`}>
        {/* Section Header */}
        {hasHeader && (
          <div className="max-w-4xl space-y-4">
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
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-tight tracking-tight"
            >
              {data.headline}
            </motion.h2>
          )}

          {data.paragraphs && data.paragraphs.length > 0 && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-sm sm:text-base font-sans font-light leading-relaxed text-zinc-300 max-w-4xl pt-2"
            >
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>
          )}

          {data.infoLink && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="pt-2"
            >
              <a
                href={data.infoLink.href}
                target={data.infoLink.href.startsWith('http') ? '_blank' : undefined}
                rel={data.infoLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-sans text-[#93C5FD] hover:text-[#93C5FD] transition-colors group"
              >
                <span>{data.infoLink.label}</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </motion.div>
          )}
        </div>
        )}

        {/* Cards Grid: 3-column statement cards (Screen 7 Reference) OR 4-card badge grid */}
        {data.variant === 'cards-3' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {data.cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-[#121E36]/90 hover:bg-[#15233E] border-t-2 border-[#0E2445] rounded-none p-7 sm:p-9 space-y-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
              >
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                  {card.title || card.value}
                </h3>
                <p className="text-sm sm:text-[15px] font-sans font-light text-zinc-300 leading-relaxed">
                  {card.description || card.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {data.cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#121D38] border border-white/[0.08] hover:border-[#0E2445]/50 rounded-lg p-7 sm:p-8 flex flex-col items-center text-center justify-center space-y-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                {/* Gold Icon */}
                {card.icon && (
                  <div className="text-[#93C5FD] mb-1">
                    <ServiceIcon name={card.icon} className="w-7 h-7 stroke-[1.6]" />
                  </div>
                )}

                {/* Card Label */}
                {card.label && (
                  <span className="text-xs sm:text-[13px] text-zinc-400 font-sans font-light">
                    {card.label}
                  </span>
                )}

                {/* Card Value */}
                <span className="text-sm sm:text-base font-sans font-medium text-white tracking-wide">
                  {card.value || card.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Optional Footnote (Screen 7 Reference) */}
        {data.footerNote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-[13px] font-sans font-light text-zinc-400 max-w-5xl leading-relaxed pt-2"
          >
            {data.footerNote}
          </motion.p>
        )}

        {/* Verify Link */}
        {data.verifyLink && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pt-2"
          >
            <a
              href={data.verifyLink.href}
              target={data.verifyLink.href.startsWith('http') ? '_blank' : undefined}
              rel={data.verifyLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors group"
            >
              <span>{data.verifyLink.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}

        {/* Bottom Subtle Gold Divider Line */}
        {data.showBottomDivider !== false && (
          <div className="w-full h-px bg-[#0E2445]/30 pt-0 mt-12 sm:mt-16" />
        )}
      </div>
    </section>
  );
};
