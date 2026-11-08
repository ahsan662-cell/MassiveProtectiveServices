'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

export const OpenPositionsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="open-positions"
      aria-label="Current Opportunities at Massive Protective Services"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              OPEN POSITIONS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            Current Opportunities at Massive Protective Services
          </motion.h2>
        </div>

        {/* Big Card Box matching Screenshot 5 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-sm bg-[#0B1220] border border-white/[0.08] p-10 sm:p-16 lg:p-20 flex flex-col items-center text-center space-y-6 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Briefcase Icon */}
          <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#C5A880]">
            <Briefcase className="w-7 h-7 text-[#C5A880] stroke-[1.4]" />
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white leading-snug">
            No Open Positions Currently Listed
          </h3>

          {/* Body */}
          <p className="text-sm sm:text-base text-zinc-300 font-sans font-light max-w-2xl leading-relaxed">
            We hire on a selective basis rather than on a rolling open-call model. If you hold a current
            Class G and Class D license and believe you are the right fit for Massive Protective
            Services, submit a general inquiry below — we keep qualified candidates on file.
          </p>

          {/* Submit General Inquiry -> Link */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
            >
              <span className="underline-offset-4 group-hover:underline">Submit General Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPositionsSection;
