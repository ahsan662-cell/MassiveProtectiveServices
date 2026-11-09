'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, ShieldCheck, LucideIcon, PhoneCall, Lock } from 'lucide-react';
import { SectionBadge } from '@/components/ui/SectionBadge';

export interface RouteHeroProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  backgroundImage?: string;
}

export const RouteHero: React.FC<RouteHeroProps> = ({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  backgroundImage,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0A0D14] border-b border-white/[0.08] pt-24 sm:pt-28 pb-12">
      {/* Background with Ambient Darkened Luxury Overlays */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.35] scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1526]/70 via-[#0A0D14] to-[#0A0A0A]" />
      )}

      {/* Grid Pattern and Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#0E2445_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0D14]/70 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-5">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
          <Link href="/" className="hover:text-[#93C5FD] transition-colors">
            HOME
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#93C5FD] transition-colors">
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span className="text-[#93C5FD] font-semibold">{crumb.label.toUpperCase()}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Tactical Badge */}
        <SectionBadge label={badge} icon={badgeIcon} />

        {/* Route Title with Serif Luxury Typography */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight"
        >
          {title}{' '}
          {titleHighlight && (
            <span className="italic text-[#93C5FD] block sm:inline mt-1 sm:mt-0">
              {titleHighlight}
            </span>
          )}
        </motion.h1>

        {/* Route Description */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-zinc-300 font-sans max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Quick Route Actions */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(14, 36, 69, 0.25)] hover:shadow-[0_0_25px_rgba(14, 36, 69, 0.4)]"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Request Detail Briefing</span>
          </Link>

          <a
            href="tel:9542347231"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#0E2445]/40 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-black/40 text-xs font-mono font-bold tracking-wider transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span>(954) 234-7231 Dispatch</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RouteHero;
