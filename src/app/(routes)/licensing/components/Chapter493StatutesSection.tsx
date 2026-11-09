'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SIDEBAR_ITEMS = [
  {
    label: 'Governing Law',
    value: 'Chapter 493, Florida Statutes',
  },
  {
    label: 'Licensing Authority',
    value: 'FDACS — Florida Dept. of Agriculture and Consumer Services',
  },
  {
    label: 'Agency License',
    value: 'Class B — Required to operate as a security firm',
  },
  {
    label: 'Officer License',
    value: 'Class D — 40-hour training, required for all officers',
  },
  {
    label: 'Armed Officer License',
    value: 'Class G — 28-hour firearms training, required to carry',
  },
  {
    label: 'Public Lookup',
    value: 'FDACS.gov — all licenses publicly searchable',
  },
  {
    label: 'MPS Agency License',
    value: 'B1400200',
  },
];

const OFFICIAL_LINKS = [
  {
    title: 'Official FDACS license-search overview',
    url: 'https://www.fdacs.gov/Business-Services/Private-Security-Licenses/Search-for-a-Licensee',
  },
  {
    title: 'Class G requirements and requalification',
    url: 'https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses/Class-G-Statewide-Firearm-License-Requirements',
  },
  {
    title: 'Class D: Security Officer Handbook',
    url: 'https://licensing.fdacs.gov/forms/P-00092_SecurityOfficerHandbook.pdf',
  },
];

export const Chapter493StatutesSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Chapter 493, Florida Statutes — What It Requires and Why It Matters"
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
              UNDERSTANDING FLORIDA SECURITY LICENSING
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Chapter 493, Florida Statutes — What It Requires and
            <br className="hidden sm:inline" /> Why It Matters
          </motion.h2>
        </div>

        {/* 2-Column Grid matching Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Comprehensive Educational Narrative */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-[1.8]"
          >
            <p>
              Florida regulates private security under Chapter 493 of the Florida Statutes — one of the
              most comprehensive security licensing frameworks in the United States. Licensing is
              administered by the Florida Department of Agriculture and Consumer Services (FDACS), which
              maintains a public database of all licensed individuals and agencies in the state.
            </p>

            <p className="text-white font-normal pt-1">
              The framework creates three tiers of licensing relevant to private security:
            </p>

            <p>
              The Class D Security Officer License is the baseline requirement for any individual working
              as a security officer in Florida. It requires 40 hours of classroom training covering
              legal authority, ethics, emergency procedures and communications.
            </p>

            <p>
              The Class G Statewide Firearm License is required for any security officer who carries a
              firearm on duty. It requires an additional 28 hours of training — covering legal use of
              force, firearms safety, defensive tactics and range qualification — and must be renewed on
              a regular schedule. This is what separates a licensed armed officer from an ordinary
              security guard.
            </p>

            <p>
              The Class B Security Agency License is required for any company operating as a security
              agency in Florida. It is issued to the firm, not just the individual, and requires the
              agency to maintain compliance across all officers it deploys. License B1400200 is Massive
              Protective Services’ agency-level credential.
            </p>

            <p>
              Hiring a security firm that cannot produce all three levels of documentation — agency
              license, individual officer Class D, individual officer Class G for armed personnel — is
              a compliance risk and a liability exposure. Every claim Massive Protective Services makes
              about licensing is verifiable before you sign anything.
            </p>

            {/* Fine-print training context matching Screenshot 3 */}
            <div className="pt-6 border-t border-white/10 text-xs text-zinc-400 font-sans leading-relaxed">
              Training context: Class D generally requires 40 hours; statutory alternatives exist. Class
              G initial training is 28 hours, with generally 4 hours of annual firearms requalification.
              This page is general educational information, not a legal opinion. Company operational
              standards are supplied by MPS, not a regulator audit.
            </div>
          </motion.div>

          {/* Right Column: "Chapter 493 — At a Glance" Sidebar Card & Official Links */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Sidebar Card */}
            <div className="rounded-sm bg-[#0B1220] border-l-2 border-l-[#0E2445] border-y border-r border-white/[0.06] p-6 sm:p-8 space-y-5 shadow-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD] font-semibold block">
                CHAPTER 493 — AT A GLANCE
              </span>

              <div className="divide-y divide-white/[0.08] text-xs sm:text-sm">
                {SIDEBAR_ITEMS.map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <div className="text-zinc-400 font-sans text-xs">{item.label}</div>
                    <div className="text-white font-medium font-sans">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official External Links matching Screenshot 3 */}
            <div className="space-y-4 pt-2">
              {OFFICIAL_LINKS.map((link) => (
                <div key={link.title} className="space-y-0.5">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#93C5FD] hover:text-[#93C5FD] font-medium transition-colors group cursor-pointer"
                  >
                    <span className="underline-offset-4 group-hover:underline">{link.title}</span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <div className="text-[11px] text-zinc-400 font-mono break-all truncate">
                    {link.url}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chapter493StatutesSection;
