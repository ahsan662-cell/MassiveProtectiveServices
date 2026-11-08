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
    question: 'What does concierge security include?',
    answer:
      'The proposed role combines a professional front-of-house presence with visitor verification, access procedures, lobby observation and reporting. Duties are agreed around your building; not every reception or hospitality task forms part of the security role.',
  },
  {
    question: 'Is concierge security an armed service?',
    answer:
      'Do not assume the concierge role is armed. Any armed or unarmed requirement must be discussed separately and confirmed in the service plan, with the appropriate licensing and property requirements considered.',
  },
  {
    question: 'Can the role work alongside our building team?',
    answer:
      'The proposed approach is to define responsibilities with property management and existing reception or hospitality teams. Points of contact, access approvals and escalation procedures would be agreed before an assignment.',
  },
  {
    question: 'Can we request overnight or seasonal coverage?',
    answer:
      'You can discuss overnight, seasonal or other defined coverage hours. Scheduling, personnel and start dates depend on the property review and confirmed availability; no specific staffing pattern is guaranteed.',
  },
  {
    question: 'How are incidents and handovers handled?',
    answer:
      'The service plan would set the reporting format, management contacts and handover procedure. Records should be factual and handled according to agreed privacy and access rules. For an emergency, contact emergency services.',
  },
  {
    question: 'What does concierge security cost?',
    answer:
      'A property-specific quote would depend on the agreed duties, coverage hours, location and assignment requirements. Request a consultation to confirm service availability and scope before discussing a quote.',
  },
];

export const ConciergeFAQSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Concierge Security FAQ"
      className="relative w-full bg-[#FAF9F6] text-[#111827] py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header matching Screenshot 4 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              CONCIERGE SECURITY FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-[#111827] leading-[1.15] tracking-tight"
          >
            Your questions, answered.
          </motion.h2>
        </div>

        {/* FAQ Accordion List matching Screenshot 4 */}
        <div className="divide-y divide-black/10 border-t border-black/10">
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
                  <span className="text-xl sm:text-2xl font-serif text-[#111827] group-hover:text-[#C5A880] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-[#C5A880] group-hover:text-[#111827] transition-colors">
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
                      <div className="pt-4 text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed max-w-4xl">
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

export default ConciergeFAQSection;
