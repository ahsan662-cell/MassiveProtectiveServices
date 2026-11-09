'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TermSection {
  number: string;
  title: string;
  content: string;
}

const TERMS_SECTIONS: TermSection[] = [
  {
    number: 'SECTION 01',
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using the Massive Protective Services Inc. website at [DOMAIN] (“Site”), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this Site.',
  },
  {
    number: 'SECTION 02',
    title: '2. Use of This Site',
    content:
      'This Site is provided for informational purposes and to facilitate inquiries about our security services. You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not use this Site to transmit any unlawful, threatening, defamatory or otherwise objectionable material.',
  },
  {
    number: 'SECTION 03',
    title: '3. Information Accuracy',
    content:
      'We strive to provide accurate and current information on this Site. However, we make no warranties or representations regarding the completeness, accuracy or reliability of any content. Service descriptions, coverage areas and other details are subject to change without notice.',
  },
  {
    number: 'SECTION 04',
    title: '4. No Service Agreement',
    content:
      'Use of this Site and submission of a contact form does not constitute a service agreement between you and Massive Protective Services Inc. Security services are provided only under a separate written agreement executed by both parties.',
  },
  {
    number: 'SECTION 05',
    title: '5. Intellectual Property',
    content:
      'All content on this Site including text, graphics, logos and design is the property of Massive Protective Services Inc. or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from Site content without our express written permission.',
  },
  {
    number: 'SECTION 06',
    title: '6. Limitation of Liability',
    content:
      'To the fullest extent permitted by law, Massive Protective Services Inc. shall not be liable for any indirect, incidental, special or consequential damages arising from your use of this Site. Our total liability for any claim arising from your use of this Site shall not exceed one hundred dollars ($100).',
  },
  {
    number: 'SECTION 07',
    title: '7. Third-Party Links',
    content:
      'This Site may contain links to third party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
  },
  {
    number: 'SECTION 08',
    title: '8. Governing Law',
    content:
      'These Terms are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Palm Beach County, Florida.',
  },
  {
    number: 'SECTION 09',
    title: '9. Changes to These Terms',
    content:
      'We reserve the right to modify these Terms at any time. Changes are effective upon posting to this Site. The “Last Updated” date reflects the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.',
  },
  {
    number: 'SECTION 10',
    title: '10. Contact',
    content:
      'Questions about these Terms: [EMAIL] · [PHONE] · Massive Protective Services Inc., [ADDRESS], Delray Beach, FL',
  },
];

export const TermsContentSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
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
      aria-label="Terms of Service Document Content"
      className="relative w-full bg-[#FFFFFF] text-black py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12 sm:space-y-14"
        >
          {TERMS_SECTIONS.map((sec) => (
            <motion.div
              key={sec.number}
              variants={itemVariants}
              className="space-y-2.5 pb-8 sm:pb-10 border-b border-black/[0.4] last:border-b-0"
            >
              {/* Section Tag */}
              <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase block">
                {sec.number}
              </span>

              {/* Section Heading */}
              <h2 className="text-2xl sm:text-[26px] font-serif font-normal text-black leading-snug">
                {sec.title}
              </h2>

              {/* Section Text */}
              <p className="text-sm sm:text-base text-black font-sans font-light leading-[1.85] pt-1">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TermsContentSection;
