'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, FileText, UserCheck, ClipboardCheck, Lock, Users } from 'lucide-react';

const STANDARDS = [
  {
    icon: ShieldCheck,
    title: 'Armed Officers Only',
    description:
      'Every officer deployed by Massive Protective Services holds a Florida Class G Statewide Firearm License. We do not deploy unarmed personnel. This is not a staffing decision — it is a service commitment.',
  },
  {
    icon: FileText,
    title: 'Written Plans Before Every Deployment',
    description:
      "No officer arrives at a property without a written security plan. The plan covers the property layout, protocols for access, emergency procedures and client-specific instructions. If a firm doesn't provide a plan, it's not a security firm.",
  },
  {
    icon: UserCheck,
    title: 'Consistent Officer Assignment',
    description:
      'We assign specific officers to specific clients. The same person returns for every shift. This is how a real security relationship works — the officer knows the property, the client knows the officer, and both parties trust what happens when something changes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Shift Reports After Every Deployment',
    description:
      'Every shift ends with a written report: what was observed, what occurred and what was done. Reports are delivered to the client. Accountability is not optional here — it is part of the engagement.',
  },
  {
    icon: Lock,
    title: 'Non-Disclosure on Every Engagement',
    description:
      "All Massive Protective Services officers sign non-disclosure agreements covering the client's identity, the engagement details and all security information. For our clients, confidentiality is not a courtesy — it is a requirement.",
  },
  {
    icon: Users,
    title: 'No Staffing Agency Personnel',
    description:
      'We do not use staffing agencies to fill shifts. Every officer deployed under our license is vetted, trained and employed directly by Massive Protective Services. There are no unknown faces filling gaps in your security.',
  },
];

export const StandardsSection: React.FC = () => {
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
      aria-label="How We Operate - Institutional Standards"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              HOW WE OPERATE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            The Standards That Govern Every Engagement
          </motion.h2>
        </div>

        {/* 6 Standards Cards Grid (3 rows x 2 columns matching Image 4) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {STANDARDS.map((std) => {
            const Icon = std.icon;
            return (
              <motion.div
                key={std.title}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                className="group rounded-sm bg-[#0B1220] border border-[#0E2445]/80 p-7 sm:p-9 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-[#0E2445] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(14, 36, 69, 0.15)] min-h-[240px]"
              >
                <div className="space-y-4">
                  <div>
                    <Icon className="w-5 h-5 text-[#93C5FD] stroke-[1.5] group-hover:text-[#93C5FD] transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-serif font-normal text-white group-hover:text-[#F5F5F7] leading-snug">
                    {std.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {std.description}
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

export default StandardsSection;
