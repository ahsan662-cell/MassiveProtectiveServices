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
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHY MASSIVE PROTECTIVE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-5xl"
          >
            Armed. Licensed. South Florida-Based. Nothing Subcontracted.
          </motion.h2>
        </div>

        {/* 6 Value Points Grid (2 rows x 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {WHY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="space-y-4 group"
              >
                <div>
                  <Icon className="w-6 h-6 text-[#C5A880] stroke-[1.5] group-hover:text-[#D4AF37] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-[22px] font-serif font-normal text-white group-hover:text-[#F5F5F7] leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMassiveProtectiveSection;
