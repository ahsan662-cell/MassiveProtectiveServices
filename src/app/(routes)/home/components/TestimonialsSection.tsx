'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote:
      'We’ve worked with three security firms over the years. Massive Protective is the first that actually understood what we needed without us having to explain it three times. Professional, discreet, and exactly who we want on our property.',
    author: 'Estate Owner, Palm Beach County',
  },
  {
    quote:
      'Art Basel week in Miami Beach. I needed someone who could handle hotel arrivals, event coverage and late-night movements without incident. Everything went exactly as planned. I’ve retained them since.',
    author: 'International Client, Miami Beach',
  },
  {
    quote:
      'The officer they placed with us knew the property before his first shift. Written reports after every night. Same person, consistently. That consistency is what we were missing with every other firm.',
    author: 'Seasonal Resident, Boca Raton',
  },
];

export const TestimonialsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="testimonials"
      aria-label="What Our Clients Say"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            From the Clients Who Trust Us With What Matters Most
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-xs font-sans text-[#C5A880]/80 italic pt-1"
          >
            Placeholder testimonials — replace with approved client quotes before launch.
          </motion.p>
        </div>

        {/* 3 Quote Columns Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.author}
              variants={itemVariants}
              className="flex flex-col justify-between space-y-6"
            >
              {/* Quote Mark in Gold Serif */}
              <div>
                <span className="text-4xl sm:text-5xl font-serif text-[#C5A880] select-none block leading-none">
                  ““
                </span>

                {/* Quote Text */}
                <p className="text-sm sm:text-base md:text-[17px] font-serif font-normal text-zinc-200 leading-[1.65] mt-4">
                  {item.quote}
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 space-y-2">
                <div className="w-8 h-[1px] bg-[#C5A880]" />
                <div className="text-xs sm:text-[13px] font-sans text-zinc-400">
                  {item.author}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
