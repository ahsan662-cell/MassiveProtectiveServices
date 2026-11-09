'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, FileText, UserCheck, ChevronRight, Phone } from 'lucide-react';

const BADGES = [
  {
    icon: ShieldCheck,
    label: 'FL CLASS G LICENSED OFFICERS',
  },
  {
    icon: FileText,
    label: 'FL AGENCY LICENSE B1400200',
  },
  {
    icon: UserCheck,
    label: 'ARMED · PLAIN-CLOTHES OR UNIFORMED',
  },
];

export const ArmedSecurityHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Armed Security Guard Services in South Florida"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 text-white overflow-hidden bg-[#070D18]"
    >
      {/* Background Hero Image with Dark Gradient Overlays matching Screenshot 1 */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/mps_hero_estate.jpg"
          alt="South Florida Luxury Estate Armed Security"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] contrast-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/85 to-[#070D18]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/90 via-transparent to-[#070D18]/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation matching Screenshot 1 */}
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
          <span className="text-[#93C5FD] font-medium">Armed Security</span>
        </motion.nav>

        {/* Headline matching Screenshot 1 */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-normal text-white leading-[1.1] tracking-tight max-w-5xl"
        >
          Armed Security Guard Services in
          <br className="hidden sm:inline" /> South Florida
        </motion.h1>

        {/* Narrative Subtitle matching Screenshot 1 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light leading-relaxed max-w-3xl"
        >
          Florida-licensed Class G armed officers for estates, businesses, events and executive details
          across Palm Beach, Broward and Miami-Dade.
        </motion.p>

        {/* Dual Action Buttons matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] hover:scale-[1.02] cursor-pointer"
          >
            Request Armed Security
          </Link>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-[#0E2445]/60 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-[#93C5FD]" />
            <span>Call 24/7</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Statutory Status Line matching Screenshot 1 */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 border-t border-white/10 mt-12"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16">
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-zinc-300 text-xs sm:text-[13px] font-mono tracking-wider uppercase"
              >
                <Icon className="w-4 h-4 text-[#93C5FD] stroke-[1.6] shrink-0" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ArmedSecurityHeroSection;
