'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User } from 'lucide-react';

export const AboutHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="About Massive Protective Services"
      className="relative w-full bg-[#0A111F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and Story */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-5 h-[1.5px] bg-[#0E2445]" />
              <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
                ABOUT MASSIVE PROTECTIVE SERVICES
              </span>
            </motion.div>

            {/* Headline matching Image 1 */}
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.08] tracking-tight"
            >
              Founded in Delray
              <br />
              Beach. Built on a
              <br />
              Different Standard.
            </motion.h1>

            {/* Paragraph matching Image 1 */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-2xl"
            >
              Massive Protective Services was built because the security industry in South Florida needed a
              firm that operates like a real security company — not a staffing agency with badges. Marc A.
              Tardalo founded MPS to fill the gap between unarmed guard companies and the elite protection most
              clients actually need.
            </motion.p>
          </div>

          {/* Right Column: Portrait Frame matching Image 1 */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-sm bg-[#101A2D] border border-[#0E2445] p-8 sm:p-12 flex flex-col justify-between items-center text-center min-h-[460px] sm:min-h-[500px] shadow-2xl relative"
          >
            {/* Top Label */}
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#93C5FD]">
              PORTRAIT / AWAITING PHOTOGRAPH
            </div>

            {/* Center Icon and Dash */}
            <div className="my-auto flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-zinc-400">
                <User className="w-8 h-8 text-zinc-300 stroke-[1.2]" />
              </div>
              <div className="w-8 h-[1px] bg-[#0E2445]" />
              <div className="text-sm sm:text-base font-serif font-normal text-white">
                Photo: Marc A. Tardalo — Founder &amp; CEO
              </div>
            </div>

            {/* Bottom Note */}
            <div className="text-[11px] font-sans text-zinc-400">
              Professional portrait pending. No substitute likeness.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
