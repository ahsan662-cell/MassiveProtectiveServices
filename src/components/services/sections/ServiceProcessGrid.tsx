'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceProcessData } from '../types';

interface Props {
  data?: ServiceProcessData;
}

export const ServiceProcessGrid: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  if (!data) return null;

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
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Our Process"
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          {data.eyebrow && (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                {data.eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            {data.headline}
          </motion.h2>
        </div>

        {/* Continuous Gold Divider Line */}
        <div className="w-full h-px bg-[#0E2445]/35" />

        {/* 4 Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-2"
        >
          {data.steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col justify-start space-y-4"
            >
              {/* Step Number in refined gold serif */}
              <span className="block text-2xl sm:text-3xl font-serif font-light text-[#93C5FD] tracking-wider">
                {step.number}
              </span>

              {/* Step Title */}
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F3E5D0] transition-colors leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-[15px] text-zinc-300 font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
