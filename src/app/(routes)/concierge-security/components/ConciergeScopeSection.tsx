'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { UserCheck, Bell, Key, Package, Eye, Users, ClipboardList, RefreshCw } from 'lucide-react';

const SCOPE_ITEMS = [
  {
    icon: UserCheck,
    title: 'Visitor verification',
    description:
      'Check arrivals against approved visitor procedures, confirm authorisation and direct guests to the appropriate contact.',
  },
  {
    icon: Bell,
    title: 'Resident & guest assistance',
    description:
      'Offer a courteous first point of contact, provide directions and help with routine enquiries within the agreed front-desk role.',
  },
  {
    icon: Key,
    title: 'Access control',
    description:
      'Follow building rules for doors, entry credentials and contractor access, with clear escalation when approval is needed.',
  },
  {
    icon: Package,
    title: 'Delivery coordination',
    description:
      'Coordinate couriers and deliveries with the building team, following agreed receiving, notification and collection procedures.',
  },
  {
    icon: Eye,
    title: 'Lobby observation',
    description:
      'Maintain an attentive presence in reception and shared arrival areas. Note unusual activity and report concerns through agreed channels.',
  },
  {
    icon: Users,
    title: 'Building-team liaison',
    description:
      'Work alongside property management, reception and maintenance teams, with defined points of contact and responsibilities.',
  },
  {
    icon: ClipboardList,
    title: 'Incident records',
    description:
      'Document relevant observations and incidents factually, in the format and reporting channels agreed with management.',
  },
  {
    icon: RefreshCw,
    title: 'Shift handovers',
    description:
      'Pass on outstanding visitor matters, access issues and relevant observations so the next shift has a clear operational picture.',
  },
];

export const ConciergeScopeSection: React.FC = () => {
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
      aria-label="Proposed Concierge Service Scope"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 3 */}
        <div className="max-w-4xl space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              PROPOSED SERVICE SCOPE
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            A considered presence. A clearly defined role.
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed pt-1"
          >
            The final scope is agreed with your building team. Responsibilities may include:
          </motion.p>
        </div>

        {/* 8 Scope Cards Grid matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7"
        >
          {SCOPE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                className="group rounded-sm bg-[#0B1220] border border-white/[0.06] p-7 sm:p-8 space-y-4 shadow-xl transition-all duration-300 hover:border-[#C5A880]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[180px] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 flex items-center justify-start text-[#C5A880]">
                    <Icon className="w-5 h-5 text-[#C5A880] stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote matching Screenshot 3 */}
        <div className="pt-2 text-xs text-zinc-400 font-sans font-light leading-relaxed">
          Duties, reporting arrangements and escalation procedures are subject to a property review
          and written agreement. Concierge security does not replace emergency services.
        </div>
      </div>
    </section>
  );
};

export default ConciergeScopeSection;
