'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

export const ConciergeHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Concierge Security in South Florida"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-28 sm:pt-36 pb-8 sm:pb-12 text-white overflow-hidden bg-[#070D18]"
    >
      {/* Background Hero Image with Luxury Reception Atmosphere matching Screenshot 1 */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/mps_service_vip.jpg"
          alt="Luxury Concierge Security South Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.78] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/30 to-[#070D18]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/45 via-transparent to-[#070D18]/35" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
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
          <span className="text-[#93C5FD] font-medium">Concierge Security</span>
        </motion.nav>

        {/* Headline matching Screenshot 1 */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-normal text-white leading-[1.1] tracking-tight max-w-5xl"
        >
          Concierge Security in South Florida
        </motion.h1>

        {/* Narrative Subtitle matching Screenshot 1 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light leading-relaxed max-w-3xl"
        >
          Discreet front-of-house security. A considered welcome, with a watchful presence behind
          every arrival.
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
            Request a Confidential Consultation
          </Link>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-[#0E2445]/60 hover:border-[#93C5FD] text-white hover:text-[#93C5FD] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-[#93C5FD]" />
            <span>Call 24/7: (954) 234-7231</span>
          </a>
        </motion.div>

        {/* Metadata ribbon & proposed service content note matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="pt-6 space-y-2 text-center"
        >
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#93C5FD]/90">
            LIC. B1400200 · LICENSED &amp; INSURED · MIAMI-DADE · BROWARD · PALM BEACH
          </div>
          <div className="text-xs text-zinc-400 font-sans italic">
            Proposed service content — confirm availability and operating details
          </div>
        </motion.div>
      </div>

      {/* Bottom Disclaimer matching Screenshot 1 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 border-t border-white/[0.08] mt-8 text-left">
        <span className="text-[11px] text-zinc-400 font-sans font-light">
          Illustrative concierge setting — not actual staff or a client property.
        </span>
      </div>
    </section>
  );
};

export default ConciergeHeroSection;
