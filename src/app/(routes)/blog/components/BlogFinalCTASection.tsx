'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export const BlogFinalCTASection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Need Security, Not Just Information?"
      className="relative w-full bg-[#070D18] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-[#0E2445]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-7 sm:space-y-8">
        {/* Headline matching Screenshot 5 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.1] tracking-tight"
        >
          Need Security, Not Just Information?
        </motion.h2>

        {/* Subtitle matching Screenshot 5 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light max-w-2xl leading-relaxed"
        >
          Confidential consultation — direct conversation with Marc Tardalo. No sales script.
        </motion.p>

        {/* Solid Gold Button matching Screenshot 5 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.3)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.5)] hover:scale-[1.02] cursor-pointer"
          >
            Request Confidential Consultation
          </Link>
        </motion.div>

        {/* Statutory Line matching Screenshot 5 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-8 text-center text-xs font-sans text-zinc-400 tracking-wide"
        >
          FL License B1400200 · Delray Beach, FL · 24/7
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFinalCTASection;
