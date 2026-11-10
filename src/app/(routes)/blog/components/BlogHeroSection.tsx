'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

export const BlogHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Security Intelligence Blog Header and Featured Article"
      className="relative w-full bg-[#0A111F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Hero Narrative matching Screenshot 1 */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              SECURITY INTELLIGENCE · MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-white leading-[1.1] tracking-tight"
          >
            Security Guides for Executives, Families and Estate Owners
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-3xl"
          >
            Practical, licensed-professional guidance on executive protection, armed security, Florida
            licensing and what real private security costs. Written by Marc A. Tardalo, FL License
            B1400200.
          </motion.p>
        </div>

        {/* Full-width Divider Line matching Screenshot 1 */}
        <div className="w-full border-t border-[#0E2445]/60 pt-10 sm:pt-14">
          {/* Featured Article Card matching Screenshot 1 bottom half */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-sm bg-[#0B1220] border-l-4 border-l-[#0E2445] border-y border-r border-white/[0.06] p-7 sm:p-10 lg:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Title, Excerpt & Link */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-white leading-snug">
                  What Is Executive Protection? A Guide for Leaders
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-2xl">
                  Executive protection is a planned security service that keeps a specific person safe
                  while they live, work and travel normally. It goes beyond a bodyguard — combining threat
                  assessment, advance planning, trained agents and tested emergency protocols.
                </p>

                <div className="pt-2">
                  <Link
                    href="/blog/what-is-executive-protection"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#93C5FD] hover:text-[#93C5FD] transition-colors group cursor-pointer"
                  >
                    <span>Read the Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Meta info with Book Icon */}
              <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD] block font-semibold">
                  FEATURED · EXECUTIVE PROTECTION
                </span>

                <div className="h-[1px] w-full bg-white/10" />

                <div className="flex items-start gap-2.5 text-xs text-zinc-400 font-sans pt-1">
                  <BookOpen className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                  <span>Author: Marc A. Tardalo · Published: Nov 24, 2026 · 7 min read</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
