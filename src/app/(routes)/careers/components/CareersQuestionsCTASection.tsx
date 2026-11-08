'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CareersQuestionsCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Questions Before You Apply?"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-7 sm:space-y-8">
        {/* Headline matching Screenshot 4 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Questions Before You Apply?
        </motion.h2>

        {/* Subtitle matching Screenshot 4 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl leading-relaxed"
        >
          Reach out directly. We are a small, selective firm — and we talk to people like people.
        </motion.p>

        {/* Center Outlined Action Button matching Screenshot 4 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm border border-[#C5A880]/60 hover:border-[#D4AF37] text-zinc-200 hover:text-[#D4AF37] bg-transparent font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_24px_rgba(212,175,55,0.25)] hover:scale-[1.02] group cursor-pointer"
          >
            <span>Contact Us Directly</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Statutory Line matching Screenshot 4 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400 tracking-wide"
        >
          FL License B1400200 · Delray Beach, FL · Armed Officers Only · Chapter 493, FL Statutes
        </motion.div>
      </div>
    </section>
  );
};

export default CareersQuestionsCTASection;
