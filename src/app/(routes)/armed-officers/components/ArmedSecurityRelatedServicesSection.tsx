'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const RELATED_SERVICES = [
  {
    title: 'Executive Protection',
    description:
      'Close protection details for executives and public figures — armed and coordinated with advance work.',
    href: '/executive-protection',
  },
  {
    title: 'Estate Security',
    description:
      'Full residential security programme: officers, access control, overnight coverage and household protocols.',
    href: '/estate-security',
  },
  {
    title: 'Event Security',
    description:
      'Armed officers integrated into event security teams — plain-clothes or uniformed, matched to your event.',
    href: '/#event-security',
  },
];

export const ArmedSecurityRelatedServicesSection: React.FC = () => {
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
      aria-label="Related Security Services"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 3 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              RELATED SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Armed Security Is One Layer of a Complete Protection Plan
          </motion.h2>
        </div>

        {/* 3 Related Services Cards Grid matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {RELATED_SERVICES.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-sm bg-[#0B1220] border border-white/[0.06] p-7 sm:p-9 flex flex-col justify-between space-y-8 shadow-xl transition-all duration-300 hover:border-[#C5A880]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[280px]"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-white font-normal leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group/link cursor-pointer"
                >
                  <span className="underline-offset-4 group-hover/link:underline">Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArmedSecurityRelatedServicesSection;
