'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const WhyThisIsDifferentSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Why This Is Different"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
            WHY THIS IS DIFFERENT
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
        >
          The Guard Industry Has a Staffing Problem.
          <br />
          We Are Not Part of It.
        </motion.h2>

        {/* 4 Narrative Paragraphs verbatim from Screenshot 4 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-sm sm:text-base md:text-[17px] text-zinc-300 font-sans font-light leading-[1.85]"
        >
          <p>
            Most security companies in Florida operate as staffing agencies. They take a contract, pull
            whoever is available from the pool, assign them to a shift and rotate them in and out. The
            officer on Monday has never met the client. The one on Friday is different again. There is no
            plan, no briefing, no relationship and no accountability beyond showing up.
          </p>

          <p>
            This is not a criticism of those officers. It is a system problem — and it is exactly why
            experienced, professional security officers leave the industry or end up working for
            themselves.
          </p>

          <p>
            Massive Protective Services is built differently. We take on fewer clients, assign consistent
            personnel and operate with a level of planning and documentation that most firms in this market
            do not. That is not a marketing position — it is the operational model that makes our client
            engagements work.
          </p>

          <p>
            If you have spent time in the guard industry and found it frustrating — not because you lack
            professionalism, but because the system around you does — this is a different environment. We
            cannot promise unlimited hours or a fill-everything schedule. We can promise that the work you
            do here is done properly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisIsDifferentSection;
