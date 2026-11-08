'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Go to FDACS',
    body: 'Open the official FDACS Agency/School Name Search at licensing.fdacs.gov/access/agency.aspx.',
  },
  {
    number: '02',
    title: 'Select ‘B - Security Agency’',
    body: 'In Search Category, choose B - Security Agency. Use the agency-name or license-number search fields.',
  },
  {
    number: '03',
    title: 'Search License B1400200',
    body: 'Enter B 1400200 in Search by License Number — the letter B, a space and seven digits. Review the returned agency name, license details, status and expiration date against the information supplied by Massive Protective Services.',
  },
  {
    number: '04',
    title: 'Verify Officer Licenses',
    body: 'Use the separate FDACS Individual Search to check Class D and Class G license numbers. These are available on request before any engagement begins.',
  },
];

export const VerifyLicenseStepsSection: React.FC = () => {
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
      aria-label="Verify Our License Step by Step"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Centered Header matching Screenshot 4 */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              VERIFY OUR LICENSE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Don’t Take Our Word for It. Here Is Exactly How
            <br className="hidden sm:inline" /> to Check.
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto"
          >
            Every licensed security agency and officer in Florida is listed in the FDACS public database.
            Here is how to verify Massive Protective Services’ Agency License B1400200 in under two
            minutes.
          </motion.p>
        </div>

        {/* 4-Step Grid matching Screenshot 4 with top and bottom boundary lines */}
        <div className="border-y border-white/10 py-12 sm:py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          >
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={itemVariants} className="space-y-4">
                <span className="text-3xl sm:text-4xl font-serif text-[#C5A880] block font-normal">
                  {step.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Button & Assurance matching Screenshot 4 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5"
        >
          <div>
            <a
              href="https://licensing.fdacs.gov/access/agency.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Verify License B1400200 Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light max-w-xl mx-auto">
            If you find any discrepancy between what we claim and what FDACS shows, contact us
            immediately. There should not be one.
          </p>

          {/* Bottom Two Links matching Screenshot 4 */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs font-sans">
            <div className="space-y-1">
              <span className="text-zinc-400 block font-medium">Agency / School Name Search</span>
              <a
                href="https://licensing.fdacs.gov/access/agency.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A880] hover:text-[#D4AF37] font-mono inline-flex items-center gap-1 transition-colors group"
              >
                <span className="underline-offset-4 group-hover:underline">
                  https://licensing.fdacs.gov/access/agency.aspx
                </span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-zinc-400 block font-medium">
                Individual Search — Class D and Class G
              </span>
              <a
                href="https://licensing.fdacs.gov/access/individual.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A880] hover:text-[#D4AF37] font-mono inline-flex items-center gap-1 transition-colors group"
              >
                <span className="underline-offset-4 group-hover:underline">
                  https://licensing.fdacs.gov/access/individual.aspx
                </span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifyLicenseStepsSection;
