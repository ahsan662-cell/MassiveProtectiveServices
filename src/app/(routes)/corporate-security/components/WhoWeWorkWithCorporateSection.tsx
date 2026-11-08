'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, Building2, Handshake } from 'lucide-react';

interface ClientPillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CLIENT_PILLARS: ClientPillar[] = [
  {
    icon: Landmark,
    title: 'Law Firms & Financial Institutions',
    description:
      'Sensitive client meetings, high-value transactions, and principals who require low-profile, professional coverage.',
  },
  {
    icon: Building2,
    title: 'Corporate Campuses & High-Rise Offices',
    description:
      'Controlled access, lobby presence, and rapid response — across Palm Beach County, Broward, and Miami-Dade.',
  },
  {
    icon: Handshake,
    title: 'HR & Legal Teams',
    description:
      "We've seen terminations go wrong. We're the team you call before the meeting — not after.",
  },
];

export const WhoWeWorkWithCorporateSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Who We Work With"
      className="relative w-full bg-[#0B1322] py-14 sm:py-18 lg:py-20 text-white overflow-hidden border-t border-white/5"
    >
      {/* Background subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 4 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              WHO WE WORK WITH
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Built for businesses where the stakes are high.
          </motion.h2>
        </div>

        {/* 3 Pillars Grid matching Screenshot 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
        >
          {CLIENT_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-start space-y-4 pt-4"
              >
                {/* Gold Icon */}
                <div className="w-12 h-12 flex items-center justify-start text-[#C5A880] group-hover:text-[#D4AF37] transition-colors">
                  <Icon className="w-8 h-8 stroke-[1.6]" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
