'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const TestimonialsHeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Client Testimonials and Confidentiality Protocol"
      className="relative w-full bg-[#0A111F] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Hero Narrative matching Screenshot 1 */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              CLIENT TESTIMONIALS · MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-white leading-[1.08] tracking-tight"
          >
            What Clients Say — Without Saying
            <br />
            Who They Are
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-3xl"
          >
            Our clients include estate owners, executives, public figures and high-net-worth families
            across South Florida. By the nature of this work, they are not named here. That is not a
            limitation — it is the product.
          </motion.p>
        </div>

        {/* Two Confidentiality Cards matching Screenshot 1 bottom half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
          {/* Card 1: On Confidentiality */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-sm bg-[#0B1220] border-l-4 border-l-[#C5A880] border-y border-r border-white/[0.06] p-7 sm:p-9 space-y-4 shadow-xl"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block font-semibold">
              ON CONFIDENTIALITY
            </span>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
              Security clients do not publicize their security arrangements. A client who allows their
              name to appear in our marketing has disclosed that they use a security firm which is
              itself information they may prefer to keep private.
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
              Every client of Massive Protective Services is identified here by role and county only.
              Full references are available to qualified prospective clients under a mutual non-disclosure
              agreement, by request.
            </p>
          </motion.div>

          {/* Card 2: For Prospective Clients */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-sm bg-[#0B1220] border-l-4 border-l-[#C5A880] border-y border-r border-white/[0.06] p-7 sm:p-9 space-y-5 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block font-semibold">
                FOR PROSPECTIVE CLIENTS
              </span>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                If you are evaluating Massive Protective Services and require direct references before
                proceeding, we accommodate that request under NDA for qualified engagements. Contact us
                to discuss.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C5A880] hover:text-[#D4AF37] transition-colors group cursor-pointer"
              >
                <span>Request References</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeroSection;
