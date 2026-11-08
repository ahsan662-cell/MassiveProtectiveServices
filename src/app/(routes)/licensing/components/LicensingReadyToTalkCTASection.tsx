'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const LicensingReadyToTalkCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Every License Verified. Ready to Talk."
      className="relative w-full bg-[#070D18] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-[#C5A880]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-7 sm:space-y-8">
        {/* Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
            A PRIVATE FIRST CONVERSATION
          </span>
        </motion.div>

        {/* Headline matching Screenshot 3 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Every License Verified. Every Officer Checked.
          <br />
          Ready to Talk.
        </motion.h2>

        {/* Subtitle matching Screenshot 3 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl leading-relaxed"
        >
          Confidential consultation — no sales process, no pressure. Just a direct conversation about
          what you need and whether we are the right firm to provide it.
        </motion.p>

        {/* Dual CTA Buttons matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer"
          >
            Request Confidential Consultation
          </Link>

          <a
            href="https://licensing.fdacs.gov/access/agency.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm border border-[#C5A880]/60 hover:border-[#D4AF37] text-zinc-200 hover:text-[#D4AF37] bg-transparent font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02] group"
          >
            <span>Verify License B1400200</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Statutory Footer Details matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400 tracking-wide"
        >
          FL License B1400200 · FDACS Verifiable · Delray Beach, FL · Chapter 493, Florida Statutes · 24/7
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880]/40 to-transparent" />
    </section>
  );
};

export default LicensingReadyToTalkCTASection;
