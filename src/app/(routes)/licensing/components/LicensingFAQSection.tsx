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
    question: 'What is FL Agency License B1400200?',
    answer:
      'License B1400200 is Massive Protective Services’ Class B Security Agency License — issued by the Florida Department of Agriculture and Consumer Services (FDACS) under Chapter 493, Florida Statutes. It is the required license for any firm operating as a private security agency in Florida and is publicly searchable through the official FDACS Agency/School Name Search.',
  },
  {
    question: 'What is the difference between a Class D and Class G license?',
    answer:
      'A Class D Security Officer License is the baseline requirement for all licensed security officers in Florida — 40 hours of training covering legal authority, ethics and emergency procedures. A Class G Statewide Firearm License is the additional license required for any officer who carries a firearm on duty — 28 hours of firearms-specific training including legal use of force, range qualification and defensive tactics. All Massive Protective Services armed officers hold both licenses.',
  },
  {
    question: "How do I verify a Florida security company's license?",
    answer:
      'Use the official FDACS Agency/School Name Search, select B - Security Agency and search by agency name or license number. Enter B 1400200 in the license-number field for Massive Protective Services. Individual Class D and Class G numbers can be checked using the separate FDACS Individual Search and are available from us on request.',
  },
  {
    question: 'Is it legal for a security officer to carry a firearm in Florida without a Class G license?',
    answer:
      'No. Florida Statutes Chapter 493 requires all security officers carrying firearms on duty to hold a valid Class G Statewide Firearm License. An officer carrying a weapon without this license is in violation of Florida law. Hiring a firm that deploys unlicensed armed officers exposes the client to significant legal liability.',
  },
  {
    question: 'What is FDACS and what does it regulate?',
    answer:
      'FDACS is the Florida Department of Agriculture and Consumer Services — the state agency responsible for licensing and regulating private security under Chapter 493, Florida Statutes. FDACS issues Class D, Class G and Class B licenses, maintains the public licensing database and handles complaints and enforcement against unlicensed operators.',
  },
  {
    question: 'Do you provide officer license numbers before deployment?',
    answer:
      'Yes. On request, we provide the Class D and Class G license numbers for any officer assigned to your engagement before the first shift begins. We encourage clients to verify these independently through the FDACS public database. Transparency about licensing is not a formality for us — it is how we operate.',
  },
];

export const LicensingFAQSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Common Questions About Florida Security Licensing"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              LICENSING FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Common Questions About Florida Security Licensing
          </motion.h2>
        </div>

        {/* Boxed FAQ Container matching Screenshot 2 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-sm bg-[#0B1220] border border-[#C5A880]/30 divide-y divide-white/[0.08] shadow-2xl overflow-hidden"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors hover:bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span className="text-lg sm:text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
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
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-4xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LicensingFAQSection;
