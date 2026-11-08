'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, BookOpen, Search, ArrowRight } from 'lucide-react';

const STATUTORY_RIBBON = [
  {
    icon: ShieldCheck,
    label: 'FL AGENCY LICENSE B1400200',
  },
  {
    icon: BookOpen,
    label: 'CHAPTER 493, FLORIDA STATUTES',
  },
  {
    icon: Search,
    label: 'FDACS — PUBLICLY VERIFIABLE',
  },
];

export const LicensingHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Licensing & Credentials — Publicly Verifiable"
      className="relative w-full bg-[#0A111F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Hero Centered Narrative matching Screenshot 1 */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              LICENSING &amp; CREDENTIALS
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.08] tracking-tight"
          >
            Florida-Licensed. Armed. Verifiable.
            <br />
            Every Claim on This Page Can Be
            <br />
            Checked.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-3xl mx-auto"
          >
            Massive Protective Services holds FL Agency License B1400200 under Chapter 493, Florida
            Statutes — publicly verifiable through the Florida Department of Agriculture and Consumer
            Services. Every officer is individually licensed. Nothing here is a claim — it is a public
            record.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="pt-2"
          >
            <a
              href="https://licensing.fdacs.gov/access/agency.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Verify Our License on FDACS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Statutory Bar matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 sm:pt-14 border-t border-[#C5A880]/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16">
            {STATUTORY_RIBBON.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 text-zinc-300 text-xs sm:text-[13px] font-mono tracking-wider uppercase"
                >
                  <Icon className="w-4 h-4 text-[#C5A880] stroke-[1.6] shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LicensingHeroSection;
