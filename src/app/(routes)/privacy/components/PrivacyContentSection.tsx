'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PolicySection {
  number: string;
  title: string;
  content: string;
}

const PRIVACY_SECTIONS: PolicySection[] = [
  {
    number: 'SECTION 01',
    title: '1. Who We Are',
    content:
      'Massive Protective Services Inc. (“MPS,” “we,” “our,” or “us”) is a licensed Florida security agency (FL License B1400200) headquartered in Delray Beach, Florida. This Privacy Policy describes how we collect, use and protect information submitted through our website at [DOMAIN].',
  },
  {
    number: 'SECTION 02',
    title: '2. Information We Collect',
    content:
      'We collect information you provide directly when you contact us through our website contact form including your name, email address, phone number, company name and the message you submit. We do not collect payment information through this website. We may collect standard web analytics data (page visits, browser type, approximate location) through third party analytics tools.',
  },
  {
    number: 'SECTION 03',
    title: '3. How We Use Your Information',
    content:
      'Information you submit through our contact form is used solely to respond to your inquiry. We do not sell, rent or share your personal information with third parties for marketing purposes. We may share information with service providers who assist us in operating this website (such as web hosting and analytics providers), subject to confidentiality obligations.',
  },
  {
    number: 'SECTION 04',
    title: '4. Security of Client Information',
    content:
      'As a security firm, we take the confidentiality of client and prospective client information seriously. All client relationships and engagement details are treated as confidential. We maintain physical, electronic and procedural safeguards appropriate to the sensitivity of the information we hold.',
  },
  {
    number: 'SECTION 05',
    title: '5. Cookies and Analytics',
    content:
      'This website may use cookies and similar tracking technologies to understand how visitors use our site. You may disable cookies through your browser settings. We use analytics data in aggregate to improve our website not to identify individual visitors.',
  },
  {
    number: 'SECTION 06',
    title: '6. Third-Party Links',
    content:
      'Our website may contain links to third party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
  },
  {
    number: 'SECTION 07',
    title: '7. Children’s Privacy',
    content:
      'Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.',
  },
  {
    number: 'SECTION 08',
    title: '8. Your Rights',
    content:
      'Depending on your location, you may have rights regarding your personal information including the right to access, correct or request deletion of information we hold about you. To exercise these rights, contact us at [EMAIL].',
  },
  {
    number: 'SECTION 09',
    title: '9. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. The “Last Updated” date at the top of this page reflects the most recent revision. Continued use of our website after changes are posted constitutes acceptance of the revised policy.',
  },
  {
    number: 'SECTION 10',
    title: '10. Contact',
    content:
      'Questions about this policy: [EMAIL] · [PHONE] · Massive Protective Services Inc., [ADDRESS], Delray Beach, FL',
  },
];

export const PrivacyContentSection: React.FC = () => {
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
      aria-label="Privacy Policy Document Content"
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
          {PRIVACY_SECTIONS.map((sec) => (
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

export default PrivacyContentSection;
