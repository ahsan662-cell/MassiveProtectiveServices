'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

export const CorporateHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Corporate Security Services in South Florida"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 text-white overflow-hidden bg-[#070D18]"
    >
      {/* Background Hero Image with Executive Boardroom Atmosphere matching Screenshot 1 */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/mps_service_corporate.jpg"
          alt="Corporate Security Services South Florida Boardroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.74] contrast-[1.02]"
        />
        {/* Cinematic gradient overlays for text clarity and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/30 to-[#070D18]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/25 via-transparent to-[#070D18]/25" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6">
        {/* Breadcrumb Navigation matching Screenshot 1: Home > Services > Corporate Security */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-[13px] font-mono text-zinc-300"
        >
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <Link href="/#services" className="hover:text-[#D4AF37] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5A880]" />
          <span className="text-[#C5A880] font-medium">Corporate Security</span>
        </motion.nav>

        {/* Headline matching Screenshot 1 */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-serif font-normal text-white leading-[1.1] tracking-tight max-w-5xl"
        >
          Corporate Security Services in South Florida
        </motion.h1>

        {/* Narrative Subtitle matching Screenshot 1 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light leading-relaxed max-w-3xl"
        >
          Executive protection, high-risk terminations, workplace violence prevention — and on-site
          officers for companies that cannot afford to be caught unprepared.
        </motion.p>

        {/* Dual Action Buttons matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#consultation-form"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] hover:scale-[1.02] cursor-pointer"
          >
            REQUEST A CONFIDENTIAL CONSULTATION
          </a>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/25 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-black/40 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>CALL (954) 234-7231</span>
          </a>
        </motion.div>

        {/* Metadata ribbon matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="pt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-300/80"
        >
          <span>LIC. B1400200</span>
          <span className="mx-2 text-[#C5A880]">•</span>
          <span>LICENSED &amp; INSURED</span>
          <span className="mx-2 text-[#C5A880]">•</span>
          <span>MIAMI-DADE</span>
          <span className="mx-2 text-[#C5A880]">•</span>
          <span>BROWARD</span>
          <span className="mx-2 text-[#C5A880]">•</span>
          <span>PALM BEACH</span>
        </motion.div>
      </div>
    </section>
  );
};
