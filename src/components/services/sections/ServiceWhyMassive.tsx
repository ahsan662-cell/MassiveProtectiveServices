'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceWhyMassiveData, ServiceWhyMassivePillar } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data?: ServiceWhyMassiveData;
}

const DEFAULT_PILLARS: ServiceWhyMassivePillar[] = [
  {
    icon: 'check-circle',
    title: 'Florida Licensed Agency',
    description:
      'FL Agency License B1400200. Class D and Class G certified officers. FDACS Division of Licensing — Chapter 493 Florida Statutes compliant.',
  },
  {
    icon: 'lock',
    title: 'Discretion as Standard',
    description:
      'Our officers operate at the level of confidentiality your clients, board, and employees expect. No visible escalation. No drama.',
  },
  {
    icon: 'map-pin',
    title: 'South Florida expertise',
    description:
      'Palm Beach County, Broward, Miami-Dade. We know the terrain, the venues, and the specific dynamics of doing business in South Florida.',
  },
];

export const ServiceWhyMassive: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const theme = data?.theme || 'dark';
  const isDark = theme === 'dark';
  const eyebrow = data?.eyebrow || 'WHY MASSIVE PROTECTIVE';
  const headline = data?.headline || 'The right presence. The right credentials.';
  const pillars = data?.pillars || DEFAULT_PILLARS;

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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Why Massive Protective Services"
      className={`relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-t ${
        isDark
          ? 'bg-[#0B1324] text-[#F5F5F7] border-white/5'
          : 'bg-[#FAF9F6] text-[#0A111F] border-black/5'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          {data?.eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] ${
                  isDark ? 'text-[#93C5FD]' : 'text-[#93C5FD]'
                }`}
              >
                {data.eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal leading-tight tracking-tight ${
              isDark ? 'text-white' : 'text-[#151D2A]'
            }`}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Content: Bordered Cards (Screen 6 Reference) OR Vertical Bars OR 3 Columns Grid */}
        {data?.variant === 'bordered-cards' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative ${
                  isDark
                    ? 'border border-white/[0.08] hover:border-[#0E2445]/40 bg-[#0E1728]/80 hover:bg-[#121E35] rounded-sm'
                    : 'border border-[#0E2445] hover:border-[#93C5FD] bg-white/70 hover:bg-white rounded-none'
                } p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(14, 36, 69, 0.18)] hover:-translate-y-1`}
              >
                {pillar.eyebrow && (
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD] mb-3 block">
                    {pillar.eyebrow}
                  </span>
                )}
                {pillar.icon && (
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors mb-4">
                    <ServiceIcon name={pillar.icon} className="w-6 h-6 stroke-[1.6]" />
                  </div>
                )}
                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal ${
                    isDark
                      ? 'text-white group-hover:text-[#F3E5D0]'
                      : 'text-[#151D2A] group-hover:text-[#0A111F]'
                  } transition-colors mb-4 leading-snug`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                    isDark ? 'text-zinc-300' : 'text-[#4A5568]'
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : data?.variant === 'vertical-bars' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8 sm:space-y-10 pt-2"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-l-2 border-[#0E2445] pl-6 sm:pl-8 space-y-2 py-1"
              >
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-zinc-300 max-w-4xl">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : data?.variant === 'column-top-borders' ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group relative flex flex-col items-start space-y-4 border-t ${
                  isDark ? 'border-white/15' : 'border-black/15'
                } pt-6 sm:pt-8`}
              >
                {pillar.icon && (
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                    <ServiceIcon name={pillar.icon} className="w-6 h-6 stroke-[1.4]" />
                  </div>
                )}

                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal group-hover:text-[#93C5FD] transition-colors leading-snug ${
                    isDark ? 'text-white' : 'text-[#0A111F]'
                  }`}
                >
                  {pillar.title}
                </h3>

                <p
                  className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                    isDark ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <>
            <div className={`w-full h-px ${isDark ? 'bg-white/10' : 'bg-zinc-200'}`} />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-2"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex flex-col items-start space-y-4"
                >
                {pillar.icon && (
                  <div className="w-10 h-10 flex items-center justify-start text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                    <ServiceIcon name={pillar.icon} className="w-6 h-6 stroke-[1.6]" />
                  </div>
                )}

                <h3
                  className={`text-xl sm:text-2xl font-serif font-normal group-hover:text-[#93C5FD] transition-colors leading-snug ${
                    isDark ? 'text-white' : 'text-[#0A111F]'
                  }`}
                >
                  {pillar.title}
                </h3>

                <p
                  className={`text-sm sm:text-[15px] font-sans font-light leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

        {/* Optional Verify Link (Screen 6 Reference) */}
        {data?.verifyLink && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className="pt-2"
          >
            <a
              href={data.verifyLink.href}
              target={data.verifyLink.href.startsWith('http') ? '_blank' : undefined}
              rel={data.verifyLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-sans text-[#93C5FD] hover:text-[#93C5FD] transition-colors group"
            >
              <span>{data.verifyLink.label}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        )}

        {/* Optional Footnote (Screen 6 Reference) */}
        {data?.footerNote && (
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`text-xs sm:text-[13px] font-sans font-light leading-relaxed max-w-5xl pt-1 ${
              isDark ? 'text-zinc-400' : 'text-[#64748B]'
            }`}
          >
            {data.footerNote}
          </motion.p>
        )}

        {/* Optional Footer Box (Screen 6 School Security Reference) */}
        {data?.footerBox && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className={`border rounded-none p-7 sm:p-9 space-y-3 ${
              isDark
                ? 'border-white/10 bg-[#111A2C]/60'
                : 'border-[#0E2445]/40 bg-white/60'
            }`}
          >
            <h4
              className={`text-lg sm:text-xl font-serif font-normal leading-snug ${
                isDark ? 'text-white' : 'text-[#151D2A]'
              }`}
            >
              {data.footerBox.title}
            </h4>
            <p
              className={`text-xs sm:text-[13.5px] font-sans font-light leading-relaxed ${
                isDark ? 'text-zinc-300' : 'text-[#64748B]'
              }`}
            >
              {data.footerBox.description}
            </p>
          </motion.div>
        )}

        {/* Optional Credential Badges Grid (Screen 6 Miami Reference) */}
        {data?.credentialBadges && data.credentialBadges.length > 0 && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="pt-10 sm:pt-14 border-t border-white/[0.06]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {data.credentialBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-[#080E1B] border border-white/[0.08] hover:border-[#0E2445]/40 rounded-none p-5 sm:p-6 text-center flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <span className="text-xs sm:text-[13px] font-sans text-zinc-300 font-light tracking-wide">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
