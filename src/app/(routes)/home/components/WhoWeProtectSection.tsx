'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Briefcase, Star, Calendar, Globe, Landmark } from 'lucide-react';

const CLIENT_TYPES = [
  {
    icon: Home,
    title: 'Estate & Residential Owners',
    description:
      'Palm Beach estates, Boca Raton compounds, barrier island residences and Intracoastal waterfront properties — owners who understand that property value and security investment should not be mismatched.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Executives & Principals',
    description:
      'C-suite executives, private equity partners, family office principals and business owners across the South Florida corporate corridor — from West Palm Beach to Aventura.',
  },
  {
    icon: Star,
    title: 'Celebrities & High-Profile Individuals',
    description:
      'Entertainers, athletes, public figures and their families — at hotels, private residences, events and in transit. NDAs as standard. No public client lists. Complete discretion.',
  },
  {
    icon: Calendar,
    title: 'Private Events & Galas',
    description:
      'Charity galas, estate entertaining, corporate events and high-profile social functions — from Art Basel Miami Beach to The Season in Palm Beach.',
  },
  {
    icon: Globe,
    title: 'International & Visiting Principals',
    description:
      'International clients with South Florida properties or itineraries — South American executives, European investors, visiting UHNW families transiting through Miami-Dade and Broward.',
  },
  {
    icon: Landmark,
    title: 'Organizations & Institutions',
    description:
      'Corporate campuses, cultural institutions and organizations requiring licensed armed security beyond what a guard service can provide.',
  },
];

const STATS = [
  {
    value: 'B1400200',
    title: 'FL Agency License',
    subtitle: 'Verifiable on FDACS',
  },
  {
    value: 'Class G',
    title: 'Armed Officer Standard',
    subtitle: 'All Personnel',
  },
  {
    value: '3 Counties',
    title: 'Palm Beach · Broward · Miami-Dade',
    subtitle: '',
  },
  {
    value: '24/7',
    title: 'Available',
    subtitle: '365 Days a Year',
  },
];

export const WhoWeProtectSection: React.FC = () => {
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
      id="who-we-protect"
      aria-label="Who We Protect - Massive Protective Services"
      className="relative w-full bg-[#0A111F] text-white pt-20 sm:pt-28 lg:pt-32 overflow-hidden border-t border-white/[0.08]"
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
              WHO WE PROTECT
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            Clients Who Require More Than a Guard Service
          </motion.h2>
        </div>

        {/* 6 Client Profile Blocks (2 rows x 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-20 sm:pb-28"
        >
          {CLIENT_TYPES.map((client) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.title}
                variants={itemVariants}
                className="space-y-4 group"
              >
                {/* Gold Outline Icon */}
                <div>
                  <Icon className="w-6 h-6 text-[#C5A880] stroke-[1.5] group-hover:text-[#D4AF37] transition-colors" />
                </div>

                {/* Title in Serif White */}
                <h3 className="text-xl sm:text-[22px] font-serif font-normal text-white group-hover:text-[#F5F5F7] leading-snug">
                  {client.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-Width Bottom Credential Stat Bar matching exact screenshot */}
      <div className="w-full bg-[#111C33] border-t border-white/[0.08] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A880]/20">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : idx * 0.1,
              }}
              className="text-center px-4 pt-4 sm:pt-0 flex flex-col items-center justify-center space-y-1.5"
            >
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#C5A880] tracking-tight leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-sans font-semibold text-white tracking-wide">
                {stat.title}
              </div>
              {stat.subtitle && (
                <div className="text-[11px] sm:text-xs font-sans text-zinc-400">
                  {stat.subtitle}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeProtectSection;
