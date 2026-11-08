'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const REGIONS = [
  {
    icon: MapPin,
    category: 'Primary:',
    name: 'Palm Beach County',
  },
  {
    icon: MapPin,
    category: 'Primary:',
    name: 'Broward County',
  },
  {
    icon: MapPin,
    category: 'Primary:',
    name: 'Miami-Dade County',
  },
  {
    icon: MapPin,
    category: 'Extended:',
    name: 'Treasure Coast',
  },
  {
    icon: MapPin,
    category: 'Extended:',
    name: 'Southwest Florida',
  },
  {
    icon: Navigation,
    category: 'Travel:',
    name: 'Statewide & Beyond',
  },
];

export const AboutServiceAreaSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      aria-label="Our Service Area"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
                OUR SERVICE AREA
              </span>
            </motion.div>

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.12] tracking-tight"
            >
              Headquartered in Delray Beach. Serving South Florida — and Beyond.
            </motion.h2>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.85]"
            >
              <p>
                Massive Protective Services is headquartered in Delray Beach, Florida{' '}
                <a
                  href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#C5A880] hover:text-[#D4AF37] transition-colors ml-1"
                >
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>Find us on Google</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>{' '}
                — centrally positioned within the corridor from Palm Beach to Miami-Dade. Our primary service
                area covers Palm Beach, Broward and Miami-Dade counties, with reach into the
                Treasure Coast and Gulf Coast for the right engagement.
              </p>

              <p>
                For executive protection and VIP transport, we travel. South Florida is our home
                base, but our clients are not always here — and neither are we.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 2x3 Grid of Region Cards matching Image 1 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {REGIONS.map((region) => {
              const Icon = region.icon;
              return (
                <motion.div
                  key={region.name}
                  variants={itemVariants}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -2,
                          transition: { duration: 0.2 },
                        }
                  }
                  className="rounded-sm bg-[#0B1220] border border-white/[0.06] p-6 sm:p-7 flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:border-[#C5A880]/50 hover:shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(197,168,128,0.06)]"
                >
                  <div className="space-y-3">
                    <Icon className="w-5 h-5 text-[#C5A880] stroke-[1.5]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A880]/80 block">
                      {region.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-white mt-2">
                    {region.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutServiceAreaSection;
