'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, FileText, ArrowRight } from 'lucide-react';

const LICENSE_CARDS = [
  {
    icon: ShieldCheck,
    tag: 'CLASS B AGENCY LICENSE',
    title: 'B1400200',
  },
  {
    icon: ShieldCheck,
    tag: 'CLASS G ARMED OFFICERS',
    title: 'FDACS Licensed',
  },
  {
    icon: FileText,
    tag: 'CHAPTER 493, FLORIDA STATUTES',
    title: 'Fully Compliant',
  },
];

export const FDACSLicenseSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Licensed & Verifiable - FDACS Compliance"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              LICENSED &amp; VERIFIABLE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.18] tracking-tight max-w-4xl mx-auto"
          >
            FL Agency License B1400200 — Publicly Verifiable on FDACS
          </motion.h2>
        </div>

        {/* 3 License Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7"
        >
          {LICENSE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.tag}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                className="rounded-sm bg-[#0B1220] border border-[#0E2445]/60 p-6 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-xl transition-all duration-300 hover:border-[#0E2445] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(14, 36, 69, 0.12)]"
              >
                <div className="shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-[#93C5FD] stroke-[1.4]" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#93C5FD] block font-medium">
                    {card.tag}
                  </span>
                  <div className="text-xl sm:text-2xl font-serif font-normal text-white">
                    {card.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Verification Note & Link matching Image 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-4 pt-2"
        >
          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            All credentials are publicly verifiable through the Florida Department of Agriculture and
            Consumer Services using the official FDACS license search.
          </p>

          <div>
            <a
              href="https://licensing.fdacs.gov/access/agency.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#93C5FD] hover:text-[#93C5FD] transition-colors group"
            >
              <span className="underline-offset-4 group-hover:underline">Verify Our License</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FDACSLicenseSection;
