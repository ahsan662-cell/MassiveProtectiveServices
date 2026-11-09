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
      className="relative w-full bg-[#FFFFFF] text-[#0F172A] overflow-hidden"
    >
      {/* 1. Top Credential Ribbon Bar - Crisp Clean Off-White */}
      <div className="w-full bg-[#F8FAFC] border-y border-slate-200/90 py-4 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-between"
        >
          {STAT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2.5 text-[11px] sm:text-xs font-mono tracking-wider text-slate-700 hover:text-[#0E2445] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#0E2445]" />
                </div>
                <span className="font-semibold uppercase tracking-wider">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Main Content Area with Generous White Space (Elite Security Pro style) */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-center flex flex-col items-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0E2445]/5 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 flex flex-col items-center space-y-8 sm:space-y-10"
        >
          {/* Eyebrow: WHO WE ARE */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
              WHO WE ARE
            </span>
          </motion.div>

          {/* Headline: Modern Geometric Sans-Serif */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-sans font-extrabold text-[#0A0A0A] leading-[1.12] tracking-tight">
              Massive Protective Services
              <br />
              <span className="text-[#0E2445] font-light">is not a guard company.</span>
            </h2>
          </motion.div>

          {/* Body Paragraphs with Premium Typography & High Contrast */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-[17px] text-slate-700 font-sans font-normal leading-[1.85] max-w-3xl mx-auto"
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

          {/* Bottom Brand Accent Line */}
          <motion.div
            variants={itemVariants}
            className="pt-2"
          >
            <div className="w-16 h-1 bg-[#0E2445] rounded-full mx-auto shadow-[0_0_12px_rgba(14,36,69,0.4)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { PhilosophyBanner as WhoWeAreSection };
export default PhilosophyBanner;
