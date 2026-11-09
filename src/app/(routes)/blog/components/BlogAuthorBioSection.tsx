'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User } from 'lucide-react';

export const BlogAuthorBioSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="About the Author"
      className="w-full bg-[#080E1A] text-white py-14 sm:py-16 border-y border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left"
        >
          {/* Avatar Circle matching Screenshot 4 */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#0E2445] bg-[#0B1220] flex flex-col items-center justify-center p-2 shrink-0 shadow-lg">
            <User className="w-8 h-8 text-[#93C5FD] stroke-[1.3]" />
            <span className="text-[9px] text-zinc-400 font-sans mt-1 leading-tight text-center">
              Marc A. Tardalo
              <br />
              photo
            </span>
          </div>

          {/* Author Details matching Screenshot 4 verbatim */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD] block font-semibold">
              WRITTEN BY
            </span>

            <h3 className="text-base sm:text-lg font-sans font-bold text-white">
              Marc A. Tardalo — Founder &amp; CEO, Massive Protective Services Inc.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-2xl">
              Florida-licensed security agency owner (License B1400200). Every article on this site is
              written from operational experience in South Florida&apos;s private security market — not
              aggregated from other sources.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogAuthorBioSection;
