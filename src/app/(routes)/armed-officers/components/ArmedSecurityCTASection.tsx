'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const ArmedSecurityCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Deploy Florida Class G Armed Protection"
      className="relative w-full bg-[#070D18] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-7 sm:space-y-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
            IMMEDIATE DISPATCH AVAILABLE
          </span>
        </motion.div>

        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Deploy Florida Class G Armed Protection
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl mx-auto leading-relaxed"
        >
          Confidential consultation — no sales script, no obligation. Direct conversation about your
          estate, corporate facility or event requirements.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] cursor-pointer"
          >
            Request Armed Security Detail
          </Link>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-[#C5A880]/60 hover:border-[#D4AF37] text-zinc-200 hover:text-[#D4AF37] bg-transparent font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call (954) 234-7231 (24/7)</span>
          </a>
        </motion.div>

        <div className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400 tracking-wide">
          FL License B1400200 · Delray Beach, FL · Chapter 493, Florida Statutes · 24/7 Dispatch
        </div>
      </div>
    </section>
  );
};

export default ArmedSecurityCTASection;
