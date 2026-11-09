'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PhoneCall, ShieldCheck } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact-cta"
      aria-label="Ready to Discuss Your Security"
      className="relative w-full bg-gradient-to-br from-[#0E2445] via-[#08172E] to-[#050F1E] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-[#0E2445]/40"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0E2445]/20 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#93C5FD] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
            <span>CONFIDENTIAL ENGAGEMENTS ONLY</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-sans font-extrabold text-white leading-[1.08] tracking-tight"
        >
          Ready to Discuss Your Security?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-zinc-200 font-sans font-normal max-w-2xl leading-relaxed"
        >
          Confidential consultation. Written security plan within 48 hours. Zero staffing agency substitutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Request Confidential Consultation - Brand Blue */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(14, 36, 69,0.45)] hover:shadow-[0_4px_40px_rgba(23, 58, 110,0.65)] hover:scale-[1.02] cursor-pointer"
          >
            Request Confidential Consultation
          </Link>

          {/* Call 24/7 - Outlined White Button */}
          <a
            href="tel:9542347231"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-sm border border-white/30 hover:border-white text-white hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-[1.02]"
          >
            <PhoneCall className="w-4 h-4 text-[#60A5FA]" />
            <span>Call 24/7 — (954) 234-7231</span>
          </a>
        </motion.div>

        {/* Statutory Footer Details */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 text-center text-xs font-mono text-zinc-400"
        >
          <span className="text-[#60A5FA] font-semibold">FL License B1400200</span> · Delray Beach, FL · Serving Palm Beach, Broward &amp; Miami-Dade Counties · Strict NDAs Standard
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
