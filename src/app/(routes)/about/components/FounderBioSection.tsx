'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Crown, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import FounderImg from '@/public/images/Founder.jpg.jpeg';

export const FounderBioSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="The Founder - Marc A. Tardalo"
      className="relative w-full bg-[#101A2D] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              THE FOUNDER
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            Marc A. Tardalo — Founder &amp; CEO
          </motion.h2>
        </div>

        {/* Two-Column Grid: Portrait on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (lg:col-span-4): Portrait Frame */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-sm  border-[#0E2445] p-8 flex flex-col justify-between items-center text-center h-full"
          >
            <Image
              src={FounderImg.src}
              alt='Founder Image'
              width={FounderImg.width}
              height={FounderImg.height}
              className='w-full h-auto object-cover rounded-sm shadow-sm shadow-white/10'
              title='Founder Image'
              priority={true}
            />
            
          </motion.div>

          {/* Right Column (lg:col-span-8): Bio Container & Meta Box */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            {/* Bio Box */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-sm  border-[#0E2445] p-7 sm:p-9 space-y-6 flex-1 shadow-2xl"
            >

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-[1.8]">
                <p>
                  Marc A. Tardalo has spent more than 15 years in executive protection, building his reputation one detail at a time across South Florida, New York, Chicago, Las Vegas, and beyond. Before founding Massive Protective Services in 2013, Marc worked close protection for Grammy Award-winning artists, NFL MVPs, BCS Championship executives, and high-net-worth families — developing the operational instincts and client standards that would later define MPS.
                </p>

                <p>
                  After years working alongside some of the best EP teams in the country, Marc saw the same problem everywhere: firms that sent bodies in uniforms and called it protection. No written plans. No advance work. No real accountability to the client. South Florida, in particular, was full of companies that looked the part but couldn’t execute when it counted. Marc built MPS to be the firm he never found — one where every officer is armed and licensed, every assignment has a written security plan, and every client has direct access to leadership.
                </p>

                <p>
                  Today, MPS provides executive protection, secure luxury transportation, event security, and private family protection across South Florida and beyond. Marc holds a Florida Class G Statewide Firearms License, a Class B Security Contractor Manager license, and advanced EP certifications from LaSorsa & Associates — one of the most respected EP training organizations in the country. His clients include celebrities, professional athletes, corporate executives, and ultra-high-net-worth families who require protection that is discreet, prepared, and uncompromising.
                </p>
              </div>

            </motion.div>

            {/* Bottom Meta Box matching Image 2 */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-sm bg-[#0B1220] border border-[#0E2445] p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans"
            >
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Founded:</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/80 font-mono text-xs">Year 2013</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Headquarters:</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-medium">Delray Beach, FL</span>
                  <a
                    href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-[#93C5FD]" />
                    <span>Find us on Google</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                  </a>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">FL Agency License:</span>
                <span className="text-[#93C5FD] font-mono font-medium">B1400200</span>
              </div>
              <div className="space-y-1">
                <span className="text-zinc-400 block font-mono text-[11px]">Officers:</span>
                <span className="text-white font-medium">Armed &amp; Licensed (Class G)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBioSection;
