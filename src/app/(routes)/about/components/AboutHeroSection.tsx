'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from 'next/image';
import FounderImg from "@/public/images/Founder.jpg.jpeg";

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
            className="lg:col-span-5 rounded-sm border border-[#0E2445] p-8 sm:p-0 flex flex-col justify-between items-center text-center min-h-[fit-content] sm:h-[fit-content] shadow-2xl relative"
          >
            <Image
              src={FounderImg.src}
              alt='Founder Image'
              width={FounderImg.width}
              height={FounderImg.height}
              className='w-full h-auto object-cover rounded-sm shadow-lg shadow-white/10'
              title='Founder Image'
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
