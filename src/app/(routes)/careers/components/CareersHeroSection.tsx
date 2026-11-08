'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CareersHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const CREDENTIAL_POINTS = [
    'Class G License Required',
    'Armed Officers Only',
    'FL Agency License B1400200',
    'Delray Beach, FL — South Florida',
  ];

  return (
    <section
      aria-label="Careers at Massive Protective Services"
      className="relative w-full bg-[#0A111F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Eyebrow matching Screenshot 1 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              CAREERS · MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          {/* Headline matching Screenshot 1 verbatim */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-sans font-normal text-white leading-[1.08] tracking-tight"
          >
            We Are Not a Staffing Agency. If
            <br />
            You Are Not Either, Keep Reading.
          </motion.h1>

          {/* Body Paragraph matching Screenshot 1 */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-2xl"
          >
            Massive Protective Services is a licensed armed security firm — not a guard company filling
            shifts. We hire Class G licensed, armed professionals who take the work seriously. If you are
            a licensed officer who is tired of being rotated through assignments at firms that do not
            know your name, this may be the right conversation.
          </motion.p>

          {/* CTA Button matching Screenshot 1 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="pt-2"
          >
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 px-7 sm:px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer group"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Full-width Divider Line matching Screenshot 1 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-[#C5A880]/60"
        >
          {/* Bottom Credential Ribbon with Gold Square Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CREDENTIAL_POINTS.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
                <span className="w-1.5 h-1.5 bg-[#C5A880] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHeroSection;
