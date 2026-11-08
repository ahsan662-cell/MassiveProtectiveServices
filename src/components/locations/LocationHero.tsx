'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { LocationHeroData, LocationHeroBadge } from './types';
import { ServiceIcon } from '@/components/services/ServiceIcon';

interface Props {
  data: LocationHeroData;
}

export const LocationHero: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const getBadgeInfo = (badge: string | LocationHeroBadge) => {
    if (typeof badge === 'string') {
      return { icon: undefined, label: badge };
    }
    return badge;
  };

  const breadcrumbs = data.breadcrumbs || [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: data.locationName },
  ];

  return (
    <section
      aria-label={data.headline}
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 text-white overflow-hidden bg-[#070D18]"
    >
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={data.bgImage}
          alt={data.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.52] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/55 to-[#070D18]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/65 via-transparent to-[#070D18]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        <div
          className={`space-y-6 sm:space-y-8 max-w-4xl ${
            data.align === 'center'
              ? 'text-center mx-auto items-center flex flex-col'
              : 'text-left'
          } my-auto pt-6 pb-12`}
        >
          {/* Breadcrumb Navigation */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full flex items-center gap-2 text-xs sm:text-[13px] font-mono text-zinc-300 ${
              (data.breadcrumbsAlign || data.align) === 'center' ? 'justify-center' : 'justify-start'
            }`}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3 h-3 text-[#C5A880]" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#D4AF37] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C5A880] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Optional Eyebrow with gold dash prefix */}
          {data.eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
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

          {/* Optional Notice */}
          {data.notice && (
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-[#C5A880]/90 font-sans font-light tracking-wide italic"
            >
              {data.notice}
            </motion.p>
          )}

          {/* Dual Action Buttons */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center ${
              data.align === 'center' ? 'justify-center' : 'justify-start'
            } gap-4 w-full sm:w-auto`}
          >
            <a
              href={data.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] hover:scale-[1.02] cursor-pointer"
            >
              {data.primaryCta.label}
            </a>

            <a
              href={data.secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
            >
              {data.secondaryCta.href.startsWith('tel:') && (
                <Phone className="w-4 h-4 text-[#C5A880]" />
              )}
              <span>{data.secondaryCta.label}</span>
              {data.secondaryCta.icon === 'arrow-right' && (
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              )}
            </a>
          </motion.div>
        </div>

        {/* Single line bottom badge if provided */}
        {data.singleLineBadge && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="w-full border-t border-[#C5A880]/35 pt-5 pb-2 text-center"
          >
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-300">
              {data.singleLineBadge}
            </p>
          </motion.div>
        )}

        {/* Bottom Ribbon with Gold Line Divider */}
        {data.badges && data.badges.length > 0 && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="w-full border-t border-[#C5A880]/35 pt-6 pb-2"
          >
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                data.badges.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
              } gap-4 sm:gap-6`}
            >
              {data.badges.map((badge, idx) => {
                const info = getBadgeInfo(badge);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-[13px] font-mono text-zinc-300"
                  >
                    {info.icon && (
                      <span className="text-[#C5A880] shrink-0">
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
    </section>
  );
};
