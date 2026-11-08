'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, ShieldCheck, MapPin, Clock } from 'lucide-react';

const STAT_ITEMS = [
  {
    icon: FileText,
    label: 'FL AGENCY LICENSE B1400200',
  },
  {
    icon: ShieldCheck,
    label: 'ARMED · CLASS G LICENSED OFFICERS',
  },
  {
    icon: MapPin,
    label: 'PALM BEACH · BROWARD · MIAMI-DADE',
  },
  {
    icon: Clock,
    label: 'AVAILABLE 24/7',
  },
];

export const PhilosophyBanner: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="who-we-are"
      aria-label="Who We Are - Massive Protective Services"
      className="relative w-full bg-[#101A2D] text-white overflow-hidden border-t border-white/[0.08]"
    >
      {/* 1. Top Credential Ribbon Bar matching exact screenshot */}
      <div className="w-full bg-[#090F1B] border-b border-white/[0.08] py-4 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-between"
        >
          {STAT_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2.5 text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 hover:text-[#D4AF37] transition-colors"
              >
                <Icon className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span className="font-semibold uppercase tracking-wider">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Main Content Area matching exact screenshot */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-18 lg:py-20 text-center flex flex-col items-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5A880]/5 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 flex flex-col items-center space-y-8 sm:space-y-10"
        >
          {/* Eyebrow: WHO WE ARE */}
          <motion.div variants={itemVariants}>
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHO WE ARE
            </span>
          </motion.div>

          {/* Headline: Massive Protective Services is not a guard company. */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-normal text-white leading-[1.12] tracking-tight">
              Massive Protective Services
              <br />
              is not a guard company.
            </h2>
          </motion.div>

          {/* Body Paragraphs matching exact reference text */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-[17px] text-zinc-300 font-sans font-light leading-[1.8] max-w-3xl mx-auto"
          >
            <p>
              We are a licensed, armed private security firm based in Delray Beach, Florida. Our officers
              hold Florida Class G armed security licenses. Our agency holds FL License B1400200, verifiable
              through the Florida Department of Agriculture and Consumer Services. Every engagement is staffed
              by vetted, licensed personnel — no staffing agency fills, no unarmed substitutions, no subcontracting.
            </p>

            <p>
              We serve estate owners, corporate executives, celebrities, private families and organizations who
              require professional armed security at the level this region’s property values and client profiles
              actually demand. If you need a uniform at a front desk, we are not the right firm. If you need a
              licensed, armed professional protecting something that matters, contact us.
            </p>
          </motion.div>

          {/* Bottom Gold Accent Line matching exact screenshot */}
          <motion.div
            variants={itemVariants}
            className="pt-2"
          >
            <div className="w-14 sm:w-16 h-[1.5px] bg-[#C5A880] mx-auto shadow-[0_0_10px_rgba(197,168,128,0.5)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { PhilosophyBanner as WhoWeAreSection };
export default PhilosophyBanner;
