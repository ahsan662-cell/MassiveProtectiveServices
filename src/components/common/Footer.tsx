'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { BrandLogo } from './BrandLogo';
import { SERVICES_NAV, LOCATIONS_NAV, RESOURCES_NAV } from '@/data/navigation';

export const Footer: React.FC = () => {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#0E2445] text-white overflow-hidden border-t-2 border-[#0E2445] select-text"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#0E2445]/20 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8"
      >
        {/* Main 4-Column Grid synchronized with Header Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Contact Info (lg:col-span-3) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-6 pr-0 lg:pr-4"
          >
            {/* Logo Badge */}
            <BrandLogo size="lg" />

            {/* Headline */}
            <div>
              <h2 className="text-2xl sm:text-[26px] font-sans font-bold text-white leading-tight tracking-tight pt-1">
                Headquartered in Delray Beach, FL.
              </h2>
              <a
                href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors mt-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
                <span>Find us on Google</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm text-zinc-300 font-sans font-normal leading-relaxed max-w-md">
              Discreet, professional armed protection for individuals, families and businesses across South Florida.
            </p>

            {/* License Line */}
            <div className="pt-1">
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[#93C5FD] font-semibold uppercase">
                FL License B1400200 · LICENSED &amp; INSURED
              </span>
            </div>

            {/* 24/7 Phone */}
            <div>
              <a
                href="tel:9542347231"
                className="inline-block text-xs sm:text-sm font-mono text-zinc-200 hover:text-[#60A5FA] transition-colors duration-200"
              >
                <span className="text-[#93C5FD] font-bold">24/7</span> · (954) 234-7231
              </a>
            </div>

            {/* LinkedIn Portfolio Links */}
            <div className="pt-2 space-y-2.5 border-t border-white/[0.08]">
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block">
                LinkedIn Portfolios:
              </span>
              <div className="flex flex-col gap-2 text-xs font-sans">
                <a
                  href="https://www.linkedin.com/company/massive-protective-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#60A5FA] transition-colors group"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2] shrink-0 group-hover:scale-105 transition-transform" />
                  <span className="group-hover:underline">Company: Massive Protective Services</span>
                  <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marc-a-tardalo-22839530/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#60A5FA] transition-colors group"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2] shrink-0 group-hover:scale-105 transition-transform" />
                  <span className="group-hover:underline">Personal: Marc A. Tardalo (Founder &amp; CEO)</span>
                  <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: SERVICES (lg:col-span-3) - Matches Header Services Submenu */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
                SERVICES
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-normal">
              {SERVICES_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-300 hover:text-[#60A5FA] transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: LOCATIONS (lg:col-span-4) - Matches Header Locations Submenu */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445]" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
                  LOCATIONS
                </h3>
              </div>
              <Link
                href="/locations"
                className="text-[11px] font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors flex items-center gap-1 group"
              >
                <span>All Locations</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
            {/* 2-Column Subgrid balancing 19 jurisdictions */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px] font-sans font-normal">
              <ul className="space-y-2.5">
                {LOCATIONS_NAV.slice(0, 10).map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-zinc-300 hover:text-[#60A5FA] transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {LOCATIONS_NAV.slice(10).map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-zinc-300 hover:text-[#60A5FA] transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-[#93C5FD] hover:text-[#93C5FD] font-semibold transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    Explore All (19) →
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Column 4: RESOURCES (lg:col-span-2) - Matches Header Resources Submenu */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
                RESOURCES
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-normal">
              {RESOURCES_NAV.map((resource) => (
                <li key={resource.href + resource.name}>
                  <Link
                    href={resource.href}
                    className="text-zinc-300 hover:text-[#60A5FA] transition-colors duration-200 block py-0.5 leading-snug"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mid Section Review Banner & Address Note */}
        <motion.div
          variants={itemVariants}
          className="pt-6 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/[0.08]"
        >
          {/* Address Line with Find Us on Google */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-sans text-zinc-300">
            <span>
              Headquartered in Delray Beach, FL · Serving Palm Beach, Broward &amp; Miami-Dade Counties.
            </span>
            <span>·</span>
            <a
              href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>Find us on Google</span>
            </a>
          </div>

          {/* ⭐ Happy with our service? Leave a review on Google */}
          <div>
            <a
              href="https://admin.trustindex.io/card/56cfe17231ce249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0E2445]/40 hover:bg-[#0E2445]/60 border border-[#0E2445]/60 hover:border-[#173A6E] text-xs sm:text-[13px] font-sans text-zinc-200 hover:text-white transition-all shadow-sm group"
            >
              <span>⭐ Happy with our service? Leave a review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#60A5FA] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Full-Width Divider Line */}
        <div className="w-full h-px bg-[#0E2445]/40 my-3" />

        {/* Bottom Copyright & Legal Links */}
        <motion.div
          variants={itemVariants}
          className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs font-sans text-zinc-400"
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Massive Protective Services Inc.</span>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[#60A5FA] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-[#60A5FA] transition-colors duration-200"
            >
              Terms
            </Link>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-[#60A5FA] transition-colors duration-200"
            >
              Accessibility
            </Link>
          </div>

          {/* LinkedIn Footer Connect Links */}
          <div className="flex items-center gap-2.5 text-[11px] font-sans">
            <span className="text-zinc-500">Connect on LinkedIn:</span>
            <a
              href="https://www.linkedin.com/company/massive-protective-services"
              target="_blank"
              rel="noopener noreferrer"
              title="Massive Protective Services (Company LinkedIn)"
              aria-label="Company LinkedIn"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#60A5FA] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>Company</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://www.linkedin.com/in/marc-a-tardalo-22839530/"
              target="_blank"
              rel="noopener noreferrer"
              title="Marc A. Tardalo (Personal Portfolio)"
              aria-label="Founder Portfolio"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#60A5FA] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>Personal</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
