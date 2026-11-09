'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export const LicensingFinalCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Contact Massive Protective Services"
      className="relative w-full bg-[#070D18] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#0E2445]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-7 sm:space-y-8">
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Verify First. Deploy With Confidence.
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl leading-relaxed"
        >
          Confidential consultation — no sales script, no intermediaries. Complete officer credentials,
          insurance binders, and mutual NDAs provided before any deployment.
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
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.3)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.5)] hover:scale-[1.02] cursor-pointer"
          >
            Request Confidential Consultation
          </Link>

          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-[#0E2445]/60 hover:border-[#93C5FD] text-zinc-200 hover:text-[#93C5FD] bg-transparent font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(23, 58, 110, 0.25)] hover:scale-[1.02] group"
          >
            <Phone className="w-4 h-4 text-[#93C5FD]" />
            <span>Call (954) 234-7231</span>
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400 tracking-wide"
        >
          FL License B1400200 · Delray Beach, FL · Chapter 493, FL Statutes · 24/7 Command
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0E2445]/30 to-transparent" />
    </section>
  );
};

export default LicensingFinalCTASection;
