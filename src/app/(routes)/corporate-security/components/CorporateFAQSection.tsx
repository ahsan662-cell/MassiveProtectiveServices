'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What does corporate security actually cover for a company?',
    answer:
      'Executive and board protection, high-risk terminations, workplace violence prevention, shareholder meetings, on-site officers, and corporate travel security — scoped to your specific business environment.',
  },
  {
    question: 'Can you provide security for a termination meeting?',
    answer:
      'Yes. This is one of our most requested services. We work directly with HR and legal teams to plan and staff the security presence before, during, and after a sensitive separation.',
  },
  {
    question: 'Do you work alongside HR and legal teams?',
    answer:
      'Always. Our role is to make the process safer for everyone involved — your staff, your leadership, and the individual being separated. We coordinate with your team and follow your protocols.',
  },
  {
    question: 'Are your officers licensed in Florida?',
    answer:
      'Yes. All officers carry Class D and/or Class G Florida licenses. Massive Protective Services holds Agency License B1400200 under the FDACS Division of Licensing, Chapter 493 Florida Statutes.',
  },
  {
    question: 'How quickly can you deploy?',
    answer:
      'For planned engagements, typically 24-48 hours. For urgent situations, contact us directly at (954) 234-7231.',
  },
];

export const CorporateFAQSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  // By default, first question or all items can be expanded or toggleable
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      aria-label="Corporate Security FAQ"
      className="relative w-full bg-[#0B1324] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header matching Screenshot 4 */}
        <div className="max-w-3xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
              CORPORATE SECURITY FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            Your questions, answered.
          </motion.h2>
        </div>

        {/* FAQ List matching Screenshot 4 */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="text-xl sm:text-2xl lg:text-[26px] font-serif font-normal text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="text-zinc-400 group-hover:text-[#93C5FD] shrink-0 transition-colors pr-2">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 sm:pt-5 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
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
