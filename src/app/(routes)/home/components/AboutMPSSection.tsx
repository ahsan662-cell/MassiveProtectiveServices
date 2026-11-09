'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const COMPANY_ESSENTIALS = [
  {
    label: 'Agency License:',
    value: 'B1400200 (FDACS Verified)',
  },
  {
    label: 'Officers:',
    value: '100% Florida Class G Licensed — Armed',
  },
  {
    label: 'Headquarters:',
    value: 'Delray Beach, FL (Tri-County Dispatch)',
  },
  {
    label: 'Coverage:',
    value: 'Palm Beach · Broward · Miami-Dade',
  },
  {
    label: 'Availability:',
    value: '24/7 · 365 Days Immediate Deployment',
  },
  {
    label: 'Contracts:',
    value: 'Strict NDAs Signed at Every Level',
  },
];

export const AboutMPSSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about-mps"
      aria-label="About Massive Protective Services"
      className="relative w-full bg-[#0B0B12] text-white py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#0E2445]/10 blur-[160px] rounded-full pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#60A5FA] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                <span>ABOUT MASSIVE PROTECTIVE SERVICES</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-sans font-bold text-white leading-[1.15] tracking-tight"
            >
              A South Florida Security Firm Built for the Clients Other Firms Are Not Equipped to Serve
            </motion.h2>

            {/* Founder Note */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-xs font-mono text-[#93C5FD] flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
              <span>Executive Command · Marc A. Tardalo</span>
            </motion.div>

            {/* Narrative Paragraphs */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-xs sm:text-sm md:text-[15px] text-zinc-300 font-sans font-normal leading-[1.8]"
            >
              <p>
                Massive Protective Services was founded in Delray Beach, Florida. The firm operates under
                Florida Agency License B1400200 and holds all required licensure under Chapter 493, Florida Statutes.
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors group cursor-pointer"
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
            className="lg:col-span-5 rounded-xl bg-[#12121A] border border-white/[0.08] border-l-4 border-l-[#0E2445] p-7 sm:p-10 shadow-2xl"
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60A5FA] font-semibold mb-8 pb-3 border-b border-white/[0.06] flex items-center justify-between">
              <span>COMPANY ESSENTIALS</span>
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            </div>

            <div className="space-y-6">
              {COMPANY_ESSENTIALS.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-sans font-medium text-white">
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
