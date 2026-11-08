'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { User, MapPin, FileText, ClipboardCheck, Lock } from 'lucide-react';

const ROLE_STANDARDS = [
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <User className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />
        <MapPin className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />
      </div>
    ),
    title: 'Consistent Assignment',
    description:
      'We assign specific officers to specific clients and properties. You are not pulled from a pool and sent somewhere new every week. You know the property. You know the client. You know what normal looks like — which is the only way to recognize when something is not.',
  },
  {
    icon: <FileText className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />,
    title: 'Written Plans for Every Engagement',
    description:
      "Every engagement you work at MPS comes with a written security plan. You are briefed before you deploy. You know the property layout, the client's protocols, the emergency procedures and the specific instructions that apply to that assignment. You are not arriving cold.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />,
    title: 'Shift Reports — Every Deployment',
    description:
      'You submit a written shift report after every deployment. This is not optional and it is not bureaucratic — it is how professional security works. Reports protect the client, protect you and create a documented record that matters if something ever happens.',
  },
  {
    icon: <Lock className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />,
    title: 'NDAs — Every Engagement',
    description:
      'You will sign a non-disclosure agreement for every client engagement you work. Client identity, property details and all engagement information are confidential. This is not unusual — it is standard practice at any firm operating at this level.',
  },
];

export const WhatThisRoleIsSection: React.FC = () => {
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
      aria-label="What This Role Is"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              WHAT THIS ROLE IS
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-5xl"
          >
            Consistent Assignments. Written Plans. Direct Communication. No Shift Lottery.
          </motion.h2>
        </div>

        {/* 2x2 Grid of 4 Cards matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {ROLE_STANDARDS.map((std) => (
            <motion.div
              key={std.title}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-sm bg-[#0B1220] border border-[#C5A880]/70 p-7 sm:p-9 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-[#C5A880] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[250px]"
            >
              <div className="space-y-4">
                <div>{std.icon}</div>

                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F5F5F7] leading-snug">
                  {std.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {std.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatThisRoleIsSection;
