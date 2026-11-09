'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, MapPin, ShieldCheck, Lock, Users, Compass } from 'lucide-react';

const WHY_POINTS = [
  {
    icon: FileText,
    title: 'Licensed at Every Level',
    description:
      'FL Agency License B1400200. Every officer licensed under Chapter 493, Florida Statutes — Class D or Class G. Publicly verifiable. Accountable at the agency level, not just the individual.',
  },
  {
    icon: MapPin,
    title: 'Headquartered Here',
    description:
      'We are based in Delray Beach, Florida — not a national company with a regional rep. We know this market, we operate in it daily and our response times reflect that geography.',
  },
  {
    icon: ShieldCheck,
    title: 'Armed Officers, Not Uniformed Staff',
    description:
      'The gap between a guard service and a licensed armed security firm is significant. Every MPS officer is armed and licensed for it. We do not offer unarmed security — that is not what our clients require.',
  },
  {
    icon: Lock,
    title: 'Discretion as Standard',
    description:
      'No public client lists. Officers sign NDAs. No social media presence around any engagement. The clients we serve expect privacy — we have built our entire operation around that expectation.',
  },
  {
    icon: Users,
    title: 'No Subcontracting',
    description:
      'Every officer on every MPS engagement is vetted and employed through our firm. We do not fill shifts with staffing agency personnel. You know exactly who is on your property.',
  },
  {
    icon: Compass,
    title: 'South Florida Market Expertise',
    description:
      "Palm Beach Season, Art Basel, Fort Lauderdale Boat Show, Aventura's international client base, South Beach's celebrity culture — we operate in this market at its highest level, not as a newcomer.",
  },
];

export const WhyMassiveProtectiveSection: React.FC = () => {
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
      id="why-mps"
      aria-label="Why Massive Protective - Key Institutional Standards"
      className="relative w-full bg-[#0A0A0E] text-white py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E2445]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-4 max-w-4xl">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#60A5FA] text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span>WHY MASSIVE PROTECTIVE</span>
            </div>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-sans font-bold text-white leading-[1.15] tracking-tight"
          >
            Armed. Licensed. South Florida-Based. Nothing Subcontracted.
          </motion.h2>

          <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            Institutional protection parameters built specifically for high-asset individuals and private enterprises in South Florida.
          </p>
        </div>

        {/* 6 Value Points Grid (2 rows x 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="group relative rounded-xl bg-[#12121A] p-7 sm:p-8 border border-white/[0.08] hover:border-[#0E2445]/60 hover:shadow-[0_12px_32px_rgba(14, 36, 69,0.22)] transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0E2445]/20 border border-[#0E2445]/40 flex items-center justify-center text-[#60A5FA] group-hover:bg-[#0E2445] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#93C5FD] leading-snug transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-normal leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#60A5FA]">
                  <span>Guaranteed Standard</span>
                  <span className="text-zinc-500 group-hover:text-[#93C5FD] group-hover:translate-x-1 transition-all">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMassiveProtectiveSection;
