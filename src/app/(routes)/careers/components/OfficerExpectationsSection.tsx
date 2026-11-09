'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EXPECTATIONS = [
  {
    title: 'Professionalism in Appearance and Conduct',
    description:
      'You represent the firm and the client on every deployment. Appearance, demeanor and conduct are not suggestions — they are requirements. Clients pay for discretion and professionalism. Both are visible.',
  },
  {
    title: 'Punctuality Without Exception',
    description:
      'Security does not run late. If you are not early, you are late. Coverage gaps are not acceptable, and an officer who is unreliable about timing is not an officer we can assign to a serious client.',
  },
  {
    title: 'Clear Written Communication',
    description:
      'You write reports. Shift reports, incident reports, observation logs. If your written communication is not clear, accurate and professional, your reports are not useful. We expect — and check — the quality of what you submit.',
  },
  {
    title: 'Sound Judgment Over Policy Recitation',
    description:
      'We train to protocol and plan to contingency — but the officer in the field makes real-time decisions. We look for people with the judgment to respond appropriately to what is actually happening, not people who wait for a script.',
  },
  {
    title: 'Confidentiality as a Default',
    description:
      'You will know things about clients that will never be discussed outside the engagement. Client identity, property layout, security measures, personal information and engagement details are permanently confidential. This is not situational — it is permanent and absolute.',
  },
  {
    title: 'Direct Communication With Supervisors',
    description:
      'If something is wrong, you say so immediately — not at the end of the shift, not in a text, not indirectly. If a situation is developing, your supervisor hears about it in real time. We cannot manage what we do not know.',
  },
];

export const OfficerExpectationsSection: React.FC = () => {
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
      aria-label="Our Standards - What MPS Expects From Every Officer"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              OUR STANDARDS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            What Massive Protective Services Expects From Every Officer
          </motion.h2>
        </div>

        {/* 2x3 Grid with Gold Vertical Left Borders matching Screenshot 1 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16"
        >
          {EXPECTATIONS.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="border-l-2 border-l-[#0E2445] pl-6 sm:pl-7 space-y-3"
            >
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
    </section>
  );
};

export default OfficerExpectationsSection;
