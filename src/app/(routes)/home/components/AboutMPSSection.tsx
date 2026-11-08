'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const COMPANY_ESSENTIALS = [
  {
    label: 'Agency License:',
    value: 'B1400200 (FDACS)',
  },
  {
    label: 'Officers:',
    value: 'Class G Licensed — Armed',
  },
  {
    label: 'Headquarters:',
    value: 'Delray Beach, FL',
  },
  {
    label: 'Coverage:',
    value: 'Palm Beach · Broward · Miami-Dade',
  },
  {
    label: 'Availability:',
    value: '24/7 · 365 Days',
  },
  {
    label: 'Contracts:',
    value: 'NDA Available — Standard.',
  },
];

export const AboutMPSSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about-mps"
      aria-label="About Massive Protective Services"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
                ABOUT MASSIVE PROTECTIVE SERVICES
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
            >
              A South Florida Security Firm Built for the Clients Other Firms Are Not Equipped to Serve
            </motion.h2>

            {/* Founder Note */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-xs font-sans text-[#C5A880]/80 italic"
            >
              Founder-bio sentence — pending approval.
            </motion.div>

            {/* Narrative Paragraphs matching exact screenshot text */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-xs sm:text-sm md:text-[15px] text-zinc-300 font-sans font-light leading-[1.8]"
            >
              <p>
                Massive Protective Services was founded in Delray Beach, Florida by [Marc A. Tardalo —
                placeholder for founder bio sentence]. The firm operates under FL Agency License B1400200 and
                holds all required licensure under Chapter 493, Florida Statutes.
              </p>

              <p>
                Our work is concentrated in the residential estate, executive protection and private event security
                markets across Palm Beach County, Broward County and Miami-Dade County. We do not offer
                unarmed guard services. We do not staff with agency personnel. We do not take engagements we
                are not equipped to execute at a professional standard.
              </p>

              <p>
                Every client engagement begins with a consultation, proceeds with a written security plan and is
                executed by licensed, armed officers who have been briefed on the specific property, client and
                situation before arrival.
              </p>
            </motion.div>

            {/* Learn More Link */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2"
            >
              <a
                href="#who-we-are"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Company Essentials Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-sm bg-[#111C33] border border-white/[0.08] border-l-2 border-l-[#C5A880] p-7 sm:p-10 shadow-2xl"
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-8 pb-3 border-b border-white/[0.06]">
              COMPANY ESSENTIALS
            </div>

            <div className="space-y-6">
              {COMPANY_ESSENTIALS.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-sans font-normal text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMPSSection;
