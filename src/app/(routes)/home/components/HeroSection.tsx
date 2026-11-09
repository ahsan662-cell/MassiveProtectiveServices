'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, PhoneCall, ArrowRight, Lock, Shield } from 'lucide-react';
import { useAppDispatch } from '@/store';
import { setActiveModal } from '@/store/slices/uiSlice';

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const prefersReducedMotion = useReducedMotion();

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Hero Overview"
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] xl:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image: Estate Entrance at Dusk matching screenshot */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mps_hero_estate.jpg"
          alt="Massive Protective Services - South Florida Estate Security Gate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

        {/* Ambient Darkened Gradient Overlays with subtle brand depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0E2445]/40 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-[#0E2445]/30 via-transparent to-[#0A0A0A]/70" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-16 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-4 sm:space-y-6"
        >
          {/* Eyebrow / Super-title */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E2445]/40 border border-[#0E2445]/60 text-[10px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#93C5FD] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          {/* Headline: Clean Geometric Executive Font (Elite Security Pro style) */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px] font-sans font-extrabold text-white leading-[1.06] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              Armed Security &amp;
              <br />
              Executive Protection
              <br />
              <span className="font-light text-[#93C5FD]">in South Florida</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-zinc-200 font-sans font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            A licensed private security firm headquartered in Delray Beach — serving estates,
            executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Request Confidential Consultation - Executive Navy Blue */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14,36,69,0.55)] hover:shadow-[0_4px_32px_rgba(23,58,110,0.75)] hover:scale-[1.02] cursor-pointer"
            >
              Request Confidential Consultation
            </Link>

            {/* View Our Services - Outlined White Button */}
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm border border-white/30 hover:border-white text-white hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
            >
              View Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
