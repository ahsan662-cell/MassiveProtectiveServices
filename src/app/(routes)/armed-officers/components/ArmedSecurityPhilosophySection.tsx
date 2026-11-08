'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ArmedSecurityPhilosophySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Licensed Armed Protection Philosophy"
      className="relative w-full bg-[#0B1220] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-9">
        {/* Top Gold Divider Accent Line matching Screenshot 2 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-[2px] bg-[#C5A880] mx-auto"
        />

        {/* Serif Headline matching Screenshot 2 */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.18] tracking-tight max-w-4xl mx-auto"
        >
          Some situations require more than a visible presence. They require a licensed officer
          prepared to act.
        </motion.h2>

        {/* Narrative Paragraph matching Screenshot 2 */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans font-light leading-[1.8] max-w-3xl mx-auto"
        >
          Massive Protective deploys Florida Class G licensed armed security officers across South
          Florida. Every officer carries state-mandated firearm certification, 28 hours of specialized
          training and a background that holds up to scrutiny. Armed protection you can trust —
          discrete when called for, decisive when it matters.
        </motion.p>
      </div>
    </section>
  );
};

export default ArmedSecurityPhilosophySection;
