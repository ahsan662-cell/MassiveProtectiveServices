'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Crown, MapPin, ExternalLink } from 'lucide-react';

export const FounderBioSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="The Founder - Marc A. Tardalo"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              THE FOUNDER
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            Marc A. Tardalo — Founder &amp; CEO
          </motion.h2>
        </div>

        {/* Two-Column Grid: Portrait on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (lg:col-span-4): Portrait Frame */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-sm bg-[#0B1220] border border-[#0E2445] p-8 flex flex-col justify-between items-center text-center min-h-[460px] shadow-2xl"
          >
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
              PORTRAIT / AWAITING PHOTOGRAPH
            </div>

            <div className="my-auto flex flex-col items-center space-y-4">
              <Crown className="w-12 h-12 text-[#93C5FD] stroke-[1.2]" />
              <div className="w-8 h-[1px] bg-[#0E2445]" />
              <div className="text-xs sm:text-sm font-sans text-zinc-300 max-w-[200px]">
                Marc A. Tardalo — professional photo, portrait orientation
              </div>
            </div>

            <div className="text-[10px] font-sans text-zinc-400">
              Professional portrait pending. No substitute likeness.
            </div>
          </motion.div>

          {/* Right Column (lg:col-span-8): Bio Container & Meta Box */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            {/* Bio Box */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-sm bg-[#0B1220] border border-[#0E2445] p-7 sm:p-9 space-y-6 flex-1 shadow-2xl"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#93C5FD] block font-semibold">
                  PLACEHOLDER — Marc&apos;s actual bio goes here
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-1 block">
                  PENDING DRAFT / NOT PUBLISHABLE BIOGRAPHY
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-[1.8]">
                <p>
                  Opening paragraph — where Marc comes from, what drew him to security, the inflection
                  point that made him decide to build his own firm rather than work within the existing
                  industry structure. This should be in Marc&apos;s own voice — first-person or close to it.
                </p>

                <p>
                  Second paragraph — what he saw missing in the South Florida market. The specific gap:
                  firms that claimed &ldquo;security&rdquo; but delivered bodies in uniforms. No planning. No
                  training beyond the minimum. No accountability. No real protection.
                </p>

                <p>
                  Third paragraph — what MPS was built to be instead. The commitment to armed officers
                  only. The written security plans. The consistent assignments. The client relationships
                  built on transparency.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-sans text-zinc-400 italic leading-relaxed">
                Content pending Marc&apos;s input. Founding year, professional background, any prior law
                enforcement or military background, and specific story of why MPS was founded.
              </div>
            </motion.div>

            {/* Bottom Meta Box matching Image 2 */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-sm bg-[#0B1220] border border-[#0E2445] p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans"
            >
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Founded:</span>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-7 h-2.5 bg-white/90 rounded-[1px]" />
                  <span className="text-white/80 font-mono text-xs">(pending)</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Headquarters:</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-medium">Delray Beach, FL</span>
                  <a
                    href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-[#93C5FD]" />
                    <span>Find us on Google</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                  </a>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">FL Agency License:</span>
                <span className="text-[#93C5FD] font-mono font-medium">B1400200</span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Officers:</span>
                <span className="text-white font-medium">Armed &amp; Licensed (Class G)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBioSection;
