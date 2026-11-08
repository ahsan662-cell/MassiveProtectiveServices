'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Your Inquiry',
    description:
      'Complete the application form below or email your resume and license information to the address provided. Include your Class D and Class G license numbers in the submission.',
  },
  {
    step: '02',
    title: 'Initial Review',
    description:
      'We review all submissions for minimum licensing requirements. If you meet the baseline and your background indicates a potential fit, we will contact you directly within five business days.',
  },
  {
    step: '03',
    title: 'Direct Conversation',
    description:
      'A direct phone or in-person conversation with our leadership team. We discuss your background, your experience, the kind of work you have done and the kind of work you are looking for. No scripted HR interview.',
  },
  {
    step: '04',
    title: 'Background Verification & Onboarding',
    description:
      'Background check, drug screen and license verification. Officers who pass move to onboarding — briefed on our operating standards, documentation requirements and NDA obligations before their first assignment.',
  },
];

export const ApplicationProcessSection: React.FC = () => {
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
      aria-label="How To Apply - The Application Process"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              HOW TO APPLY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            The Application Process — Simple and Direct
          </motion.h2>
        </div>

        {/* 4 Process Columns with Top Gold Line matching Screenshot 2 */}
        <div className="border-t border-[#C5A880]/60 pt-10 sm:pt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          >
            {PROCESS_STEPS.map((item) => (
              <motion.div key={item.step} variants={itemVariants} className="space-y-3">
                <div className="text-2xl sm:text-3xl font-serif text-[#C5A880] font-normal">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-[22px] font-serif font-normal text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Resume & License Info Footer matching Screenshot 2 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-white/[0.08] pt-8 space-y-1.5"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block font-medium">
            RESUME &amp; LICENSE INFORMATION
          </span>
          <a
            href="mailto:info@massiveprotectiveservices.com"
            className="text-xs sm:text-sm text-zinc-300 font-sans hover:text-[#C5A880] transition-colors"
          >
            info@massiveprotectiveservices.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
