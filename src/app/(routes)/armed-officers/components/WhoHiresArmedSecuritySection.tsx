'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Landmark, Briefcase } from 'lucide-react';

const CLIENTS = [
  {
    icon: Home,
    title: 'UHNW Families & Estate Owners',
    description:
      'High-net-worth principals who require armed overnight coverage, gate security and discreet property protection across Palm Beach County.',
  },
  {
    icon: Landmark,
    title: 'Law Firms, Jewelers & Financial Institutions',
    description:
      'Businesses handling high-value assets, sensitive documents or high-risk client interactions — where an armed presence is both deterrent and last line of defense.',
  },
  {
    icon: Briefcase,
    title: 'HR & Legal Teams',
    description:
      'Corporate teams managing terminations, restraining orders or documented workplace threats who need a licensed armed officer on standby during the event.',
  },
];

export const WhoHiresArmedSecuritySection: React.FC = () => {
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
      aria-label="South Florida Clients Who Require Licensed Armed Coverage"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 5 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHO HIRES ARMED SECURITY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            South Florida Clients Who Require Licensed Armed Coverage
          </motion.h2>
        </div>

        {/* 3 Client Type Cards matching Screenshot 5 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {CLIENTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 flex items-center justify-start text-[#C5A880]">
                    <Icon className="w-5 h-5 text-[#C5A880] stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {item.description}
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

export default WhoHiresArmedSecuritySection;
