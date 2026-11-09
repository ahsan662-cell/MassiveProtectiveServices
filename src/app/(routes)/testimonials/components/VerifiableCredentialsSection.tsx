'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, FileText, BadgeCheck, Clock, ArrowRight } from 'lucide-react';

const CREDENTIALS = [
  {
    icon: Shield,
    title: 'Agency License',
    description: 'B1400200 — FDACS Verifiable',
  },
  {
    icon: FileText,
    title: 'Governing Law',
    description: 'Chapter 493, Florida Statutes',
  },
  {
    icon: BadgeCheck,
    title: 'Officer License',
    description: 'Class G Statewide Firearm',
  },
  {
    icon: Clock,
    title: 'Response',
    description: '24/7 — Active Clients & New Inquiries',
  },
];

export const VerifiableCredentialsSection: React.FC = () => {
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
      aria-label="Verifiable Credentials"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header matching Screenshot 3 top */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              VERIFIABLE CREDENTIALS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            What You Can Check Without Asking Us
          </motion.h2>
        </div>

        {/* 4 Credential Cards Grid matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CREDENTIALS.map((cred) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={cred.title}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                className="rounded-sm bg-[#0B1220] border border-white/[0.06] p-7 sm:p-8 space-y-5 shadow-xl transition-all duration-300 hover:border-[#0E2445]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(14, 36, 69, 0.1)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0E2445]/10 flex items-center justify-center border border-[#0E2445]/20">
                    <Icon className="w-5 h-5 text-[#93C5FD] stroke-[1.6]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-sans font-semibold text-white tracking-tight">
                      {cred.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-zinc-400 font-light leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Direct Link to FDACS matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-2"
        >
          <a
            href="https://licensing.fdacs.gov/access/agency.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#93C5FD] hover:text-[#93C5FD] transition-colors group cursor-pointer"
          >
            <span className="underline-offset-4 group-hover:underline">
              Verify License B1400200 on FDACS
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifiableCredentialsSection;
