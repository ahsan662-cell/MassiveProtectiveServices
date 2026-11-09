'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Crosshair, Users, ClipboardList, UserCheck, Lock } from 'lucide-react';

const QUESTIONS = [
  {
    icon: FileText,
    question: 'What is your agency license number?',
    answer:
      'Every licensed security agency in Florida has a Class B agency license number — publicly verifiable on FDACS. If a firm cannot produce this number immediately, or if the number does not appear in the FDACS database, the firm is operating without a required license.',
  },
  {
    icon: Crosshair,
    question: 'Are your armed officers Class G licensed?',
    answer:
      'The Class G Statewide Firearm License is the legal requirement for any security officer carrying a firearm in Florida. An officer without this license is not legally permitted to carry a weapon on duty. Ask to see the license number — and verify it.',
  },
  {
    icon: Users,
    question: 'Are officers employed by your firm or placed by a staffing agency?',
    answer:
      'Many security companies in Florida use staffing agency personnel to fill shifts. These officers are not employees of the security firm, may not have been vetted by them and may not meet the same standards. Massive Protective Services employs its own officers — no staffing agency fills, no exceptions.',
  },
  {
    icon: ClipboardList,
    question: 'Can I see the written security plan before deployment?',
    answer:
      'Professional security firms provide written plans before any officer arrives. If a firm wants to deploy before providing a written scope of work, that is a sign of a staffing operation, not a security firm.',
  },
  {
    icon: UserCheck,
    question: 'Will the same officer return each shift?',
    answer:
      'Consistency matters in residential and executive security. A rotating pool of unfamiliar officers defeats the purpose of a security relationship. Ask whether the firm assigns consistent personnel — and what happens when your officer is unavailable.',
  },
  {
    icon: Lock,
    question: 'Do your officers sign NDAs?',
    answer:
      'For estate, executive and celebrity clients, confidentiality is not optional. Ask whether officers are required to sign non-disclosure agreements covering the engagement, the client’s identity and all security details. At Massive Protective Services, NDAs are standard.',
  },
];

export const QuestionsToAskSection: React.FC = () => {
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
      aria-label="Questions Every Client Should Ask Any Security Firm"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              WHAT TO WATCH FOR
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Questions Every Client Should Ask Any Security
            <br className="hidden sm:inline" /> Firm Before Signing
          </motion.h2>
        </div>

        {/* 6-Question Grid (2 rows x 3 columns) matching Screenshot 5 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {QUESTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.question}
                variants={itemVariants}
                className="space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Subtle Gold Outline Icon */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#93C5FD] stroke-[1.4]" />
                  </div>

                  {/* Question Heading in Serif */}
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug">
                    {item.question}
                  </h3>

                  {/* Answer Narrative */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {item.answer}
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

export default QuestionsToAskSection;
