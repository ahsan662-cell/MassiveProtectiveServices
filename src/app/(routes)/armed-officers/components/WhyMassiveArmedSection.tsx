'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, UserCheck, MapPin } from 'lucide-react';

const PILLARS = [
  {
    icon: FileText,
    title: 'State-Licensed, Not Just Trained',
    description:
      "FL License B1400200. Every armed officer holds a valid Class G license — no exceptions. We don't deploy unlicensed personnel under any circumstance.",
  },
  {
    icon: UserCheck,
    title: 'Armed or Plain-Clothes — Your Call',
    description:
      'We match officer presentation to your environment. Suited and armed for an estate. Business casual for a corporate setting. Uniformed for visible deterrence at a venue.',
  },
  {
    icon: MapPin,
    title: 'South Florida Expertise',
    description:
      "We know Palm Beach County HOA protocols, Broward County response times and Miami-Dade's event landscape. Our officers aren't imported — they're local, licensed and ready.",
  },
];

export const WhyMassiveArmedSection: React.FC = () => {
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
      aria-label="Armed Security That's Licensed, Vetted and Accountable"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 4 */}
        <div className="max-w-4xl space-y-3">
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
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Armed Security That’s Licensed, Vetted and
            <br className="hidden sm:inline" /> Accountable
          </motion.h2>
        </div>

        {/* 3 Pillars Grid matching Screenshot 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 flex items-center justify-start text-[#C5A880]">
                    <Icon className="w-5 h-5 text-[#C5A880] stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMassiveArmedSection;
