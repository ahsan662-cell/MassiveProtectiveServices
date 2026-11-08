'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Lock, MapPin } from 'lucide-react';

interface ValuePillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: CheckCircle2,
    title: 'Florida Licensed Agency',
    description:
      'FL Agency License B1400200. Class D and Class G certified officers. FDACS Division of Licensing — Chapter 493 Florida Statutes compliant.',
  },
  {
    icon: Lock,
    title: 'Discretion as Standard',
    description:
      'Our officers operate at the level of confidentiality your clients, board, and employees expect. No visible escalation. No drama.',
  },
  {
    icon: MapPin,
    title: 'South Florida expertise',
    description:
      'Palm Beach County, Broward, Miami-Dade. We know the terrain, the venues, and the specific dynamics of doing business in South Florida.',
  },
];

export const WhyMassiveCorporateSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Why Massive Protective Services"
      className="relative w-full bg-[#FAF9F6] text-[#0A111F] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 1 */}
        <div className="max-w-3xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-zinc-500">
              WHY MASSIVE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#0A111F] leading-tight tracking-tight"
          >
            The right presence. The right credentials.
          </motion.h2>
        </div>

        {/* Horizontal Divider Line matching Screenshot 1 */}
        <div className="w-full h-px bg-zinc-200" />

        {/* 3 Columns Grid matching Screenshot 1 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
        >
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-start space-y-4"
              >
                {/* Gold Icon */}
                <div className="w-10 h-10 flex items-center justify-start text-[#C5A880] group-hover:text-[#B39369] transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#0A111F] group-hover:text-[#B39369] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-sm sm:text-[15px] text-zinc-600 font-sans font-light leading-relaxed">
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
