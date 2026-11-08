'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Home, Calendar, Circle, Star, Key, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Shield,
    title: 'Executive Protection',
    description:
      'Close protection for South Florida executives, principals and high-net-worth individuals. Consistent armed officer teams, advance work and secure driving.',
    href: '/executive-protection',
  },
  {
    icon: Home,
    title: 'Estate & Residential Security',
    description:
      'Armed overnight officers, perimeter patrol and access control for Palm Beach, Boca Raton, Manalapan and barrier island estates across the South Florida corridor.',
    href: '/estate-security',
  },
  {
    icon: Calendar,
    title: 'Event Security',
    description:
      'Licensed event security for private galas, charity events, corporate functions and high-profile gatherings — Art Basel, boat show season and The Season included.',
    href: '/event-security',
  },
  {
    icon: Circle,
    title: 'Armed Security Officers',
    description:
      'Florida Class G licensed armed officers for residential, corporate, retail and event assignments. Deployed individually or as a coordinated team.',
    href: '/armed-officers',
  },
  {
    icon: Star,
    title: 'VIP & Celebrity Protection',
    description:
      'Discreet close protection for celebrities, entertainers, athletes and high-profile public figures — hotel arrivals, venue movements and private events.',
    href: '/vip-celebrity-protection',
  },
  {
    icon: Key,
    title: 'Concierge Security',
    description:
      'Premium residential building and estate concierge security — the visible, professional face of access control for high-end properties.',
    href: '/concierge-security',
  },
];

export const ServicesGrid: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="services"
      aria-label="What We Do - Private Security Services"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 space-y-4">
          {/* Eyebrow: WHAT WE DO */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHAT WE DO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            Private Security Services for South Florida’s Most
            <br className="hidden sm:inline" /> Discerning Clients
          </motion.h2>
        </div>

        {/* 6 Service Cards Grid (2 rows x 3 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.2 },
                      }
                }
                className="group relative rounded-sm bg-[#121D34] border border-white/[0.07] border-l-2 border-l-[#C5A880] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:border-l-[#D4AF37] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_24px_rgba(197,168,128,0.12)] min-h-[310px]"
              >
                <div>
                  {/* Outline Gold Icon */}
                  <div className="mb-6">
                    <Icon className="w-6 h-6 text-[#C5A880] stroke-[1.5] group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  {/* Title in Gold Serif */}
                  <h3 className="text-xl sm:text-[22px] font-serif font-normal text-[#C5A880] group-hover:text-[#D4AF37] mb-3.5 leading-snug transition-colors">
                    {service.title}
                  </h3>

                  {/* Description in Clean Sans-Serif */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-6 mt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#C5A880] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Centered Bottom Link */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
