'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Crosshair, Award, ArrowRight } from 'lucide-react';

const LICENSES = [
  {
    icon: ShieldCheck,
    tag: 'CLASS B AGENCY LICENSE',
    title: 'License No. B1400200',
    description:
      'Issued by the Florida Department of Agriculture and Consumer Services (FDACS) under Chapter 493, Florida Statutes. Required for any firm operating as a security agency in the State of Florida. Verifiable at FDACS.gov.',
    actionText: 'Verify on FDACS',
    actionHref: 'https://licensing.fdacs.gov/access/agency.aspx',
    isExternal: true,
  },
  {
    icon: Crosshair,
    tag: 'CLASS G STATEWIDE FIREARM LICENSE',
    title: '28-Hour Training Requirement',
    description:
      'Required for any security officer who carries a firearm in the State of Florida. Includes legal use of force, defensive tactics, firearms safety and range qualification. Issued by FDACS. Every armed MPS officer holds this license individually.',
    actionText: 'Learn About Class G',
    actionHref:
      'https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses/Class-G-Statewide-Firearm-License-Requirements',
    isExternal: true,
  },
  {
    icon: Award,
    tag: 'CLASS D SECURITY OFFICER LICENSE',
    title: '40-Hour Training Requirement',
    description:
      'Required for all licensed security officers in the State of Florida. 40 hours of classroom training covering legal powers, emergency procedures and professional conduct. Issued by FDACS. MPS officers hold Class D as the baseline — armed officers hold both Class D and Class G.',
    actionText: 'Learn About Class D',
    actionHref: 'https://licensing.fdacs.gov/forms/P-00092_SecurityOfficerHandbook.pdf',
    isExternal: true,
  },
];

export const ThreeLicensesSection: React.FC = () => {
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
      aria-label="Three Licenses. Every One Required. Every One Verifiable."
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Centered Section Header matching Screenshot 2 */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              OUR CREDENTIALS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Three Licenses. Every One Required. Every One
            <br className="hidden sm:inline" /> Verifiable.
          </motion.h2>
        </div>

        {/* 3 Large License Cards Grid matching Screenshot 2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {LICENSES.map((lic) => {
            const Icon = lic.icon;
            return (
              <motion.div
                key={lic.tag}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.2 },
                      }
                }
                className="group rounded-sm bg-[#0B1220] border-t-2 border-t-[#C5A880] border-x border-b border-white/[0.06] p-7 sm:p-9 flex flex-col justify-between space-y-8 shadow-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[440px]"
              >
                <div className="space-y-6">
                  {/* Top Badge Icon in Circle */}
                  <div className="w-12 h-12 rounded-full border border-[#C5A880]/40 bg-[#C5A880]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C5A880] stroke-[1.6]" />
                  </div>

                  {/* Title and License Subtitle */}
                  <div className="space-y-2">
                    <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-[#C5A880] block">
                      {lic.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                      {lic.title}
                    </h3>
                  </div>

                  {/* Subtle Separator */}
                  <div className="w-full h-[1px] bg-white/10" />

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {lic.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2">
                  <a
                    href={lic.actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {lic.actionText}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeLicensesSection;
