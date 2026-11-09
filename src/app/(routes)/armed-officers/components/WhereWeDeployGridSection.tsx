'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, Building2, Briefcase, GlassWater, Shield, Clock } from 'lucide-react';

const DEPLOYMENTS = [
  {
    icon: Home,
    title: 'Private Estates & Gated Residences',
    description:
      "Armed overnight officers, gate security and perimeter patrols for South Florida's most exclusive waterfront and gated-community properties.",
  },
  {
    icon: Building2,
    title: 'Corporate & Business Premises',
    description:
      'On-site armed officers for law firms, financial institutions, jewelry businesses and corporate campuses requiring visible deterrence and rapid response.',
  },
  {
    icon: Briefcase,
    title: 'High-Risk Terminations & Workplace Incidents',
    description:
      'Armed standby during difficult HR events — terminations, employee disputes and workplace violence situations where escalation is a real risk.',
  },
  {
    icon: GlassWater,
    title: 'Private Events & Galas',
    description:
      'Discreet armed officers integrated into event security teams. Plain-clothes or uniformed — matched to the environment, never out of place.',
  },
  {
    icon: Shield,
    title: 'Executive & Principal Protection',
    description:
      'Armed escort for executives, public figures and UHNW principals moving through South Florida. Coordinated with advance teams and residential coverage.',
  },
  {
    icon: Clock,
    title: 'Short-Term & Surge Coverage',
    description:
      'Need armed security for 24 hours, one weekend or a specific threat window? We deploy on short notice without minimum-contract requirements.',
  },
];

export const WhereWeDeployGridSection: React.FC = () => {
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
      aria-label="Armed Security Officers Where We Deploy"
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
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              WHERE WE DEPLOY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            <span className="text-[#93C5FD]">Armed Security Officers</span> for Every High-Stakes
            Environment
          </motion.h2>
        </div>

        {/* 6 High-Stakes Deployment Cards matching Screenshot 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {DEPLOYMENTS.map((item) => {
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
                className="group rounded-sm bg-[#0B1220] border border-white/[0.06] p-7 sm:p-9 space-y-5 shadow-xl transition-all duration-300 hover:border-[#0E2445]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(14, 36, 69, 0.12)] min-h-[260px] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 flex items-center justify-start text-[#93C5FD]">
                    <Icon className="w-5 h-5 text-[#93C5FD] stroke-[1.6]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-normal leading-snug group-hover:text-[#93C5FD] transition-colors">
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
      </div>
    </section>
  );
};

export default WhereWeDeployGridSection;
