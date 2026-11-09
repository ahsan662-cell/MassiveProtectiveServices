'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const ResponseTimeBanner: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Response Time Guarantee"
      className="relative w-full bg-[#080E1A] text-white py-16 sm:py-20 text-center border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Gold Outline Clock Icon Badge */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 rounded-full border border-[#0E2445]/60 flex items-center justify-center text-[#93C5FD] mb-5 shadow-[0_0_15px_rgba(14, 36, 69, 0.15)]"
        >
          <Clock className="w-5 h-5 text-[#93C5FD]" />
        </motion.div>

        {/* Headline matching Image 2 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white leading-snug tracking-tight"
        >
          We respond to every inquiry directly — typically within a few hours.
        </motion.h2>

        {/* Urgent Callout Text */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs sm:text-sm text-zinc-400 font-sans mt-3"
        >
          For urgent situations, call{' '}
          <a
            href="tel:9542347231"
            className="text-white hover:text-[#93C5FD] underline font-medium transition-colors"
          >
            (954) 234-7231
          </a>
          . Someone is available 24/7.
        </motion.p>
      </div>
    </section>
  );
};

export default ResponseTimeBanner;
