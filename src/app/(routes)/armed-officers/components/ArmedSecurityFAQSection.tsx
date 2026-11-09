'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is a Class G license in Florida?',
    answer:
      'A Class G Statewide Firearm License is issued by the Florida Department of Agriculture and Consumer Services (FDACS) under Chapter 493, Florida Statutes. It authorizes a licensed security officer to carry a firearm while on duty. It requires 28 hours of additional firearms and legal training beyond the standard Class D security license. Every armed officer at Massive Protective holds both.',
  },
  {
    question: "What's the difference between armed and unarmed security?",
    answer:
      'Armed security officers carry a licensed firearm and are authorized to use it under Florida law when necessary. Unarmed officers rely on presence, communication and de-escalation. Armed officers are appropriate for higher-risk environments: estates overnight, high-value businesses, principals with credible threats and events with VIP targets. We can advise which is right for your situation.',
  },
  {
    question: 'Can armed security guards wear plain clothes?',
    answer:
      'Yes. Massive Protective deploys armed officers in plain clothes, formal attire or uniform — depending on your environment and preference. Many estate and executive protection clients prefer plain-clothes armed officers to preserve discretion.',
  },
  {
    question: 'How much do armed security guards cost per hour?',
    answer:
      "Cost depends on deployment type, hours, officer count and risk level. We don't publish rates because every engagement is custom-scoped. Contact us for a confidential quote.",
  },
  {
    question: 'How quickly can you deploy armed officers?',
    answer:
      'For urgent situations, we can often deploy within hours. Standard deployments are confirmed within 24–48 hours. Contact us directly for same-day or next-day needs.',
  },
];

export const ArmedSecurityFAQSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Armed Security FAQ"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header matching Screenshot 2 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              ARMED SECURITY FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Your questions, answered.
          </motion.h2>
        </div>

        {/* Top Gold Divider Line matching Screenshot 2 */}
        <div className="w-full h-[1px] bg-[#0E2445]/50" />

        {/* Accordion List with Horizontal Separators */}
        <div className="divide-y divide-[#0E2445]/30">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-4xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArmedSecurityFAQSection;
