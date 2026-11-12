'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Security',
    description:
      'Explore protection planned around private residences, estates and the people who call them home.',
    href: '/estate-security',
  },
  {
    icon: Briefcase,
    title: 'Corporate Security',
    description:
      'Consider security for offices, workplace environments and the requirements of your business.',
    href: '/executive-protection',
  },
  {
    icon: ShieldCheck,
    title: 'Unarmed Security Guards',
    description:
      'Explore an unarmed security presence for access control, observation and property-focused duties.',
    href: '/contact',
  },
];

export const ConciergeRelatedServicesSection: React.FC = () => {
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
      aria-label="A Complete Circle of Protection"
      className="relative w-full bg-[#FAF9F6] text-[#111827] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              EXPLORE FURTHER
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#111827] leading-[1.15] tracking-tight"
          >
            A complete circle of protection.
          </motion.h2>
        </div>

        {/* 3 Related Service Cards Grid matching Screenshot 5 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                className="group rounded-sm bg-white border border-black/10 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-300 hover:border-[#0E2445] hover:shadow-md min-h-[250px]"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD]">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#111827] font-normal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:text-[#111827] font-semibold transition-colors group/link cursor-pointer"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeRelatedServicesSection;
