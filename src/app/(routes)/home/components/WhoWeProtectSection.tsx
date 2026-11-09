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
    subtitle: 'Tri-County Armed Response',
  },
  {
    value: '24/7/365',
    title: 'Rapid Deployment',
    subtitle: 'Immediate Dispatch Ready',
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
      className="relative w-full bg-[#FFFFFF] text-[#0F172A] pt-20 sm:pt-28 lg:pt-32 overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-4 max-w-3xl">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
              WHO WE PROTECT
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#0A0A0A] leading-[1.12] tracking-tight"
          >
            Clients Who Require More Than a Guard Service
          </motion.h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            From private estate compounds and family offices to C-suite leadership and public figures, our licensed Class G details provide uncompromising security.
          </p>
        </div>

        {/* 6 Client Profile Cards (2 rows x 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-20 sm:pb-28"
        >
          {CLIENT_TYPES.map((client) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.title}
                variants={itemVariants}
                className="group relative rounded-xl bg-white p-7 sm:p-8 border border-slate-200/90 hover:border-[#0E2445]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(14, 36, 69,0.08)] transition-all duration-300 flex flex-col justify-between space-y-5 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Brand Shield Icon Box */}
                  <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0E2445] group-hover:bg-[#0E2445] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title in Sans Bold */}
                  <h3 className="text-xl font-sans font-bold text-slate-900 group-hover:text-[#0E2445] leading-snug transition-colors">
                    {client.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                    {client.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-medium text-[#0E2445] group-hover:text-[#173A6E]">
                  <span>Class G Armed Standard</span>
                  <span className="text-slate-400 group-hover:text-[#0E2445] transition-colors">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-Width Bottom Credential Stat Bar */}
      <div className="w-full bg-[#F8FAFC] border-t border-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
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
              className="text-center px-6 pt-6 sm:pt-0 flex flex-col items-center justify-center space-y-1.5"
            >
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-extrabold text-[#0E2445] tracking-tight leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-sans font-bold text-slate-900 tracking-wide">
                {stat.title}
              </div>
              {stat.subtitle && (
                <div className="text-[11px] sm:text-xs font-sans text-slate-500 font-medium">
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
