'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { ServiceHeroData, ServiceHeroBadgeItem } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServiceHeroData;
}

export const ServiceHero: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isLeftAligned = data.alignment === 'left';

  const getBadgeInfo = (badge: string | ServiceHeroBadgeItem) => {
    if (typeof badge === 'string') {
      return { icon: undefined, label: badge };
    }
    return badge;
  };

  return (
    <section
      aria-label={data.headline}
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 text-white overflow-hidden bg-[#070D18]"
    >
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={data.bgImage}
          alt={data.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.49] contrast-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-[#070D18]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/50 via-transparent to-[#070D18]/40" />
      </div>

      {isLeftAligned ? (
        /* Left-Aligned Layout (Screen 1 Reference) */
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
          <div className="space-y-6 sm:space-y-8 max-w-4xl text-left my-auto pt-6 pb-12">
            {/* Breadcrumb Navigation */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-zinc-300"
            >
              <Link href="/" className="hover:text-[#93C5FD] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[#93C5FD]" />
              <Link href="/#services" className="hover:text-[#93C5FD] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3 text-[#93C5FD]" />
              <span className="text-[#93C5FD] font-medium">
                {data.breadcrumbTitle || data.serviceName}
              </span>
            </motion.nav>

            {/* Optional Eyebrow */}
            {data.eyebrow && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04 }}
              >
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                  {data.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-normal text-white leading-[1.1] tracking-tight max-w-5xl"
            >
              {data.headline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light leading-relaxed max-w-3xl"
            >
              {data.subtitle}
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
            >
              <a
                href={data.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] hover:scale-[1.02] cursor-pointer"
              >
                {data.primaryCta.label}
              </a>

              <a
                href={data.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
              >
                {data.secondaryCta.href.startsWith('tel:') && (
                  <Phone className="w-4 h-4 text-[#93C5FD]" />
                )}
                <span>{data.secondaryCta.label}</span>
                {data.secondaryCta.icon === 'arrow-right' && (
                  <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
                )}
              </a>
            </motion.div>
          </div>

          {/* Bottom Ribbon with Gold Line Divider */}
          {data.badges && data.badges.length > 0 && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="w-full border-t border-[#0E2445]/35 pt-6 pb-2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {data.badges.map((badge, idx) => {
                  const info = getBadgeInfo(badge);
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-[13px] font-mono text-zinc-300"
                    >
                      {info.icon && (
                        <span className="text-[#93C5FD] shrink-0">
                          <ServiceIcon name={info.icon} className="w-4 h-4 stroke-[1.8]" />
                        </span>
                      )}
                      <span>{info.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        /* Centered Layout (Default / Estate & Event Style) */
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8">
          {/* Breadcrumb Navigation */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-zinc-300"
          >
            <Link href="/" className="hover:text-[#93C5FD] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#93C5FD]" />
            <Link href="/#services" className="hover:text-[#93C5FD] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-[#93C5FD]" />
            <span className="text-[#93C5FD] font-medium">
              {data.breadcrumbTitle || data.serviceName}
            </span>
          </motion.nav>

          {/* Headline */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-normal text-white leading-[1.1] tracking-tight max-w-5xl"
          >
            {data.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light leading-relaxed max-w-3xl"
          >
            {data.subtitle}
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={data.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] hover:scale-[1.02] cursor-pointer"
            >
              {data.primaryCta.label}
            </a>

            <a
              href={data.secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
            >
              {data.secondaryCta.href.startsWith('tel:') && data.secondaryCta.icon !== 'none' && (
                <Phone className="w-4 h-4 text-[#93C5FD]" />
              )}
              <span>{data.secondaryCta.label}</span>
              {data.secondaryCta.icon === 'arrow-right' && (
                <ArrowRight className="w-4 h-4 text-[#93C5FD]" />
              )}
            </a>
          </motion.div>

          {/* Badges / Ribbon */}
          {data.badges && data.badges.length > 0 && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="pt-4 flex flex-wrap items-center justify-center gap-y-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-300/80"
            >
              {data.badges.map((badge, idx) => {
                const info = getBadgeInfo(badge);
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="mx-2 text-[#93C5FD]">•</span>}
                    <span className="inline-flex items-center gap-1.5">
                      {info.icon && (
                        <ServiceIcon name={info.icon} className="w-3.5 h-3.5 text-[#93C5FD]" />
                      )}
                      {info.label}
                    </span>
                  </React.Fragment>
                );
              })}
            </motion.div>
          )}

          {/* Disclaimer (Screen 1 Reference) */}
          {data.disclaimer && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-xs sm:text-[13px] font-sans font-light text-zinc-300/90 pt-1"
            >
              {data.disclaimer}
            </motion.p>
          )}

          {/* Footnote (Screen 1 Reference) */}
          {data.footnote && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="text-[10px] sm:text-[11px] font-sans text-zinc-400/80"
            >
              {data.footnote}
            </motion.p>
          )}
        </div>
      )}
    </section>
  );
};
