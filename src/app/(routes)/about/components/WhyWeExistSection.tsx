'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const WhyWeExistSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Why We Exist - The Security Industry Problem"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Eyebrow */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
            WHY WE EXIST
          </span>
        </motion.div>

        {/* Headline matching Image 3 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
        >
          The Security Industry Has a Problem.
          <br />
          Most Firms Are Staffing Agencies.
        </motion.h2>

        {/* Narrative Paragraphs matching Image 3 verbatim */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-sm sm:text-base md:text-[17px] text-zinc-300 font-sans font-light leading-[1.85]"
        >
          <p>
            Most security companies in Florida operate the same way: they take a staffing contract, assign
            whoever is available that day, rotate people in and out, and call it security. The &lsquo;officer&rsquo;
            who shows up on Monday may never have seen the property before. The one on Friday is a different
            person entirely. There is no plan, no briefing, no relationship — just a body in a uniform filling a shift.
          </p>

          <p>
            This is not a criticism. It is simply how the guard industry works. It was built to scale, not to protect.
          </p>

          <p>
            Massive Protective Services was built for something different. Clients who need real security —
            estate owners, executives, high-profile individuals, families with specific threat concerns — do not
            need warm bodies. They need experienced, armed, licensed officers who know the property, know the
            client, and know what to do when something actually happens.
          </p>
        </motion.div>

        {/* Gold Divider Line */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2"
        >
          <div className="w-16 h-[1.5px] bg-[#C5A880]" />
        </motion.div>

        {/* Callout Statement in Elegant Serif */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-zinc-100 leading-snug tracking-tight pt-2"
        >
          That is the only kind of security we provide. And it is why we are not a guard company.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
