'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact-cta"
      aria-label="Ready to Discuss Your Security"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Ready to Discuss Your Security?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl leading-relaxed"
        >
          Confidential consultation. Written plan within 48 hours. No sales process.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Request Confidential Consultation - Solid Warm Gold */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer"
          >
            Request Confidential Consultation
          </Link>

          {/* Call 24/7 - Outlined Gold Button */}
          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-[#C5A880]/60 hover:border-[#D4AF37] text-zinc-200 hover:text-[#D4AF37] bg-transparent font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
          >
            Call 24/7 — (954) 234-7231
          </a>
        </motion.div>

        {/* Statutory Footer Details */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400"
        >
          FL License B1400200 · Delray Beach, FL · Serving Palm Beach, Broward &amp; Miami-Dade Counties · NDA Available
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
