'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: '[Testimonial text estate owner, Palm Beach County pending from Marc]',
    role: 'Estate Owner — Palm Beach County',
  },
  {
    quote: '[Testimonial text — corporate executive, Broward County — pending from Marc]',
    role: 'Corporate Executive — Broward County',
  },
  {
    quote: '[Testimonial text — private event client — pending from Marc]',
    role: 'Private Event Client — Miami-Dade County',
  },
  {
    quote: '[Testimonial text — pending]',
    role: 'Family Office Principal — Palm Beach County',
  },
  {
    quote: '[Testimonial text — pending]',
    role: 'VIP Client — South Florida',
  },
  {
    quote: '[Testimonial text — pending]',
    role: 'Residential Security Client — Boca Raton',
  },
];

export const TestimonialsGridSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Client Quotes and Testimonials Grid"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 2 */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            In Their Words
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-xs text-zinc-400 font-sans italic"
          >
            Testimonial copy and star ratings are placeholders pending confirmation
          </motion.p>
        </div>

        {/* 6 Testimonial Cards (2 rows x 3 columns) matching Screenshot 2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-sm bg-[#0B1220] border border-[#C5A880]/50 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xl transition-all duration-300 hover:border-[#C5A880] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[340px]"
            >
              <div className="space-y-4">
                {/* Top Row: Quote mark & Pending Copy Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif text-[#C5A880] leading-none select-none">
                    &ldquo;&ldquo;
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-medium">
                    PLACEHOLDER / PENDING COPY
                  </span>
                </div>

                {/* Quote Text in Serif */}
                <p className="text-lg sm:text-xl font-serif font-light text-zinc-100 leading-snug pt-2">
                  {t.quote}
                </p>
              </div>

              {/* Bottom Client Info & Rating */}
              <div className="space-y-3 pt-4">
                <div className="w-8 h-[1px] bg-[#C5A880]" />

                <div className="text-xs sm:text-sm font-sans font-medium text-white">
                  {t.role}
                </div>

                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-sans text-zinc-400 ml-1.5">
                    Rating pending
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsGridSection;
