'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PhoneCall, Menu, X, ChevronDown, Shield, MapPin, FileText, ArrowRight, Lock, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { BrandLogo } from './BrandLogo';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleMobileMenu, setMobileMenuOpen, setActiveModal } from '@/store/slices/uiSlice';
import { NAV_STRUCTURE, type DropdownItem, type NavCategory } from '@/data/navigation';


export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedMobileSection(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileSection = (title: string) => {
    setExpandedMobileSection((prev) => (prev === title ? null : title));
  };

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E2445]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-[#0E2445]/90 backdrop-blur-md border-b border-white/[0.06]'
        }`}
      >
        {/* Top Statutory Ribbon */}
        <div className="w-full bg-[#050508] border-b border-white/[0.05] py-1.5 px-4 sm:px-6 sm:block hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-sans text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-300 font-medium tracking-wide">
                Licensed Florida Security Agency
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-[#3B82F6] font-mono font-semibold">Lic. B1400200</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Licensed &amp; Insured</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:9542347231"
                aria-label="Direct Dispatch (954) 234-7231"
                className="font-mono font-bold text-zinc-300 hover:text-[#3B82F6] transition-colors tracking-wider"
              >
                (954) 234-7231
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full mx-auto px-4 sm:px-0 py-0.5 flex items-center justify-around ">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-7"
          >
            {NAV_STRUCTURE.map((item) => {
              const hasDropdown = Boolean(item.items && item.items.length > 0);
              const isCurrentOpen = activeDropdown === item.title;

              const isLocations = item.title === 'LOCATIONS';
              const isServices = item.title === 'SERVICES';
              const isAbout = item.title === 'ABOUT';
              const isResources = item.title === 'RESOURCES';

              let menuWidthClass = 'w-72 sm:w-20';
              let gridColsClass = 'grid-cols-1';
              let menuPositionClass = 'left-0';

              if (isLocations) {
                menuWidthClass = 'w-[800px] xl:w-[900px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
                menuPositionClass = '-left-28 sm:-left-36 lg:-left-44 xl:-left-44';
              } else if (isServices) {
                menuWidthClass = 'w-[620px] xl:w-[800px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-3';
                menuPositionClass = 'left-0';
              } else if (isAbout) {
                menuWidthClass = 'w-[520px] max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1 sm:grid-cols-2';
                menuPositionClass = '-left-16 xl:-left-20';
              } else if (isResources) {
                menuWidthClass = 'w-80 max-w-[calc(100vw-32px)]';
                gridColsClass = 'grid-cols-1';
                menuPositionClass = '-left-20 xl:left-0';
              }

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.title)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      aria-expanded={isCurrentOpen}
                      className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] py-2 transition-colors ${
                        isCurrentOpen
                          ? 'text-white'
                          : 'text-white hover:text-[#C5A880]'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#C5A880] transition-transform duration-200 ${
                          isCurrentOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300 hover:text-[#C5A880] transition-colors py-2"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu Container - Multi-Column Rectangular Panel */}
                  <AnimatePresence>
                    {hasDropdown && isCurrentOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className={`absolute top-full mt-1.5 ${menuPositionClass} ${menuWidthClass} bg-[#0E2445]/98 backdrop-blur-2xl border border-[#0E2445]/50 rounded-lg p-3 shadow-[0_20px_50px_rgba(0,0,0,0.92)] z-50 max-h-[calc(100vh-100px)] overflow-y-auto before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3`}
                      >
                        {/* Header Ribbon for Locations */}
                        {isLocations && (
                          <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-white/[0.08] text-[11px] font-mono tracking-wider text-[#fff]">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
                              <span className="font-semibold uppercase tracking-[0.16em]">
                                FLORIDA JURISDICTION GRID ({item.items?.length})
                              </span>
                            </div>
                            <Link
                              href="/locations"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-sans text-zinc-400 hover:text-[#60A5FA] transition-colors flex items-center gap-1 group"
                            >
                              <span>All Locations</span>
                              <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                          </div>
                        )}

                        {/* Header Ribbon for Services */}
                        {isServices && (
                          <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-white/[0.08] text-[11px] font-mono tracking-wider text-[#fff]">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#fff] animate-pulse" />
                              <span className="font-semibold uppercase tracking-[0.16em]">
                                SPECIALIZED PROTECTION SERVICES ({item.items?.length})
                              </span>
                            </div>
                            <Link
                              href="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-sans text-zinc-400 hover:text-[#60A5FA] transition-colors flex items-center gap-1 group"
                            >
                              <span>View All Services</span>
                              <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                          </div>
                        )}

                        {/* Multi-Column Grid */}
                        <div className={`grid ${gridColsClass} gap-1.5`}>
                          {item.items?.map((subItem) => {
                            const isExternal = subItem.href.startsWith('http');
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex flex-col p-2.5 rounded-md hover:bg-[#0E2445]/25 border hover:border-[#0E2445]/60 border-white/[0.06] transition-all duration-150"
                              >
                                <div className="flex items-center justify-between gap-1.5">
                                  <div className="flex items-center gap-2 min-w-0">
                                    {isExternal && (
                                      <FaLinkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                                    )}
                                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#93C5FD] transition-colors truncate">
                                      {subItem.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {subItem.badge && (
                                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#ffffff]/25 text-[#ffffff] border border-[#0E2445]/50 shrink-0">
                                        {subItem.badge}
                                      </span>
                                    )}
                                    {isExternal && (
                                      <ExternalLink className="w-3 h-3 text-[#3B82F6] opacity-70 group-hover:opacity-100" />
                                    )}
                                  </div>
                                </div>
                                {subItem.description && (
                                  <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 mt-1 line-clamp-1 font-light leading-snug">
                                    {subItem.description}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>

                        {/* Footer Ribbon for Multi-Column Menus */}
                        {(isLocations || isServices) && (
                          <div className="mt-2.5 pt-2 border-t border-white/[0.08] px-2.5 flex items-center justify-between text-[11px] font-sans text-zinc-400">
                            <span className="font-light">FL License B1400200 · 24/7 Rapid Dispatch</span>
                            <a
                              href="tel:9542347231"
                              className="font-mono text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                            >
                              (954) 234-7231
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Call 24/7 Button - Outlined Brand Blue */}
            <a
              href="tel:9542347231"
              aria-label="Direct 24/7 Armed Response Line"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm border border-[#0E2445]/60 hover:border-[#3B82F6] text-xs font-semibold tracking-wider text-zinc-100 hover:text-[#93C5FD] bg-[#0E2445]/25 hover:bg-[#0E2445]/45 transition-all shadow-[0_0_12px_rgba(14,36,69,0.3)] hover:shadow-[0_0_20px_rgba(14,36,69,0.5)]"
            >
              Call 24/7
            </a>

            {/* Portfolio Button - Same styling as Contact Our Team button having link of personal portfolio */}
            <a
              href="https://www.linkedin.com/in/marc-a-tardalo-22839530/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marc A. Tardalo Personal Portfolio on LinkedIn"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-white hover:bg-zinc-100 text-[#0A0A0A] text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              Portfolio
            </a>

            {/* Contact Our Team Button - Solid Brand Color rgba(27, 78, 165, 1) */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-[#C5A880] hover:bg-[#C5A880] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(27,78,165,0.4)] hover:shadow-[0_0_25px_rgba(27,78,165,0.6)] cursor-pointer"
            >
              Contact Our Team
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center justify-center p-2 rounded text-zinc-300 hover:text-white bg-[#0E2445] border border-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#3B82F6]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-45 lg:hidden"
            />

            {/* Mobile Navigation Drawer: Full height, smooth slide-in, scrollable body, sticky header and footer */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-0 z-50 flex flex-col bg-[#0E2445] text-white lg:hidden h-full max-h-screen overflow-hidden shadow-2xl"
            >
              {/* 1. Sticky Top Header (Always visible) */}
              <div className="shrink-0 px-4 py-3.5 border-b border-white/10 bg-[#0E2445] flex items-center justify-between">
                <BrandLogo showSubtitle={false} />
                <button
                  type="button"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  aria-label="Close navigation menu"
                  className="p-2.5 rounded-md bg-[#0E2445] border border-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#ffffff]" />
                </button>
              </div>

              {/* 2. Scrollable Navigation Body */}
              <div
                className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {/* Navigation Items (SERVICES, LOCATIONS, RESOURCES, CONTACT) */}
                <div className="space-y-2.5">
                  {NAV_STRUCTURE.map((section) => {
                    const hasItems = Boolean(section.items && section.items.length > 0);
                    const isExpanded = expandedMobileSection === section.title;
                    const isLocations = section.title === 'LOCATIONS';
                    const isServices = section.title === 'SERVICES';

                    if (section.href) {
                      return (
                        <Link
                          key={section.title}
                          href={section.href}
                          onClick={() => dispatch(setMobileMenuOpen(false))}
                          className="flex items-center justify-between py-3.5 px-4 rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-white hover:text-[#93C5FD] bg-[#0E2445] hover:bg-[#0E2445]/30 border border-white/5 transition-all"
                        >
                          <span className="uppercase tracking-[0.14em]">{section.title}</span>
                          <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={section.title}
                        className={`rounded-lg overflow-hidden border transition-colors ${
                          isExpanded
                            ? 'border-[#0E2445]/50 bg-[#0E2445]'
                            : 'border-white/5 bg-[#0E2445]'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(section.title)}
                          aria-expanded={isExpanded}
                          className={`w-full flex items-center justify-between py-3.5 px-4 text-xs sm:text-sm font-semibold tracking-wider transition-all cursor-pointer ${
                            isExpanded
                              ? 'bg-[#0E2445]/35 text-[#93C5FD]'
                              : 'text-zinc-200 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="uppercase tracking-[0.14em]">{section.title}</span>
                            {section.items && (
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                  isExpanded
                                    ? 'bg-[#0E2445]/40 text-[#93C5FD] border-[#0E2445]/60'
                                    : 'bg-white/5 text-zinc-400 border-white/10'
                                }`}
                              >
                                {section.items.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-[#3B82F6] transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-[#93C5FD]' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && hasItems && (
                            <motion.div
                              key={`content-${section.title}`}
                              initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: prefersReducedMotion ? 0 : 0.28,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  },
                                  opacity: {
                                    duration: prefersReducedMotion ? 0 : 0.2,
                                    delay: prefersReducedMotion ? 0 : 0.05,
                                  },
                                },
                              }}
                              exit={
                                prefersReducedMotion
                                  ? { opacity: 0 }
                                  : {
                                      height: 0,
                                      opacity: 0,
                                      transition: {
                                        height: {
                                          duration: 0.22,
                                          ease: [0.04, 0.62, 0.23, 0.98],
                                        },
                                        opacity: { duration: 0.15 },
                                      },
                                    }
                              }
                              className="overflow-hidden bg-[#0E2445] border-t border-white/5"
                            >
                              {/* Locations Header Quick Link */}
                              {isLocations && (
                                <div className="p-2 border-b border-white/5">
                                  <Link
                                    href="/locations"
                                    onClick={() => dispatch(setMobileMenuOpen(false))}
                                    className="flex items-center justify-between p-2.5 rounded bg-[#0E2445]/20 border border-[#0E2445]/40 text-xs font-semibold text-[#93C5FD] hover:bg-[#0E2445]/35 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                                      <span>All Florida Locations Overview ({section.items?.length})</span>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
                                  </Link>
                                </div>
                              )}

                              {/* Services Header Quick Link */}
                              {isServices && (
                                <div className="p-2 border-b border-white/5">
                                  <Link
                                    href="/services"
                                    onClick={() => dispatch(setMobileMenuOpen(false))}
                                    className="flex items-center justify-between p-2.5 rounded bg-[#0E2445]/20 border border-[#0E2445]/40 text-xs font-semibold text-[#93C5FD] hover:bg-[#0E2445]/35 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />
                                      <span>All 12 Security Services Overview</span>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6]" />
                                  </Link>
                                </div>
                              )}

                              {/* Sub-Items: 2-column grid for locations, clean list for services & resources */}
                              {isLocations ? (
                                <div className="grid grid-cols-2 gap-1.5 p-2">
                                  {section.items?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={() => dispatch(setMobileMenuOpen(false))}
                                      className="group flex flex-col justify-between p-2.5 rounded-md bg-[#14141F] hover:bg-[#0E2445]/30 border border-white/5 hover:border-[#0E2445]/50 transition-colors"
                                    >
                                      <div className="flex items-start justify-between gap-1">
                                        <span className="text-xs font-semibold text-white group-hover:text-[#93C5FD] leading-tight transition-colors">
                                          {subItem.name}
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-[#3B82F6] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                                      </div>
                                      {subItem.badge && (
                                        <span className="mt-1.5 text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#0E2445]/40 text-[#93C5FD] border border-[#0E2445]/50 self-start">
                                          {subItem.badge}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="p-2 space-y-1.5">
                                  {section.items?.map((subItem) => {
                                    const isExternal = subItem.href.startsWith('http');
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noopener noreferrer' : undefined}
                                        onClick={() => dispatch(setMobileMenuOpen(false))}
                                        className="group flex items-center justify-between p-2.5 rounded-md bg-[#0E2445] hover:bg-[#0E2445]/30 border border-white/5 hover:border-[#0E2445]/50 transition-colors"
                                      >
                                        <div className="flex flex-col pr-2 min-w-0">
                                          <div className="flex items-center gap-2">
                                            {isExternal && (
                                              <FaLinkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                                            )}
                                            <span className="text-xs font-semibold text-white group-hover:text-[#93C5FD] transition-colors truncate">
                                              {subItem.name}
                                            </span>
                                            {subItem.badge && (
                                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#0E2445]/40 text-[#93C5FD] border border-[#0E2445]/50 shrink-0">
                                                {subItem.badge}
                                              </span>
                                            )}
                                          </div>
                                          {subItem.description && (
                                            <span className="text-[11px] text-zinc-300 mt-0.5 line-clamp-1">
                                              {subItem.description}
                                            </span>
                                          )}
                                        </div>
                                        {isExternal ? (
                                          <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                                        ) : (
                                          <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform shrink-0" />
                                        )}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Statutory License Strip */}
                <div className="p-3.5 rounded bg-[#12121A] border border-[#0E2445]/50 text-xs font-mono text-zinc-300">
                  <div className="text-[#C5A880] font-semibold mb-1 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>FDACS LICENSE B1400200</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    100% Florida Class G Armed Officers &bull; Zero Unarmed Guards &bull; Delray Beach HQ
                  </div>
                </div>

                {/* Extra spacer for scroll clearance */}
                <div className="h-4" />
              </div>

              {/* 3. Sticky Bottom Action CTAs (Always visible) */}
              <div className="shrink-0 p-3.5 border-t border-white/10 bg-[#0E2445] space-y-2">
                <a
                  href="tel:9542347231"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-[#0E2445]/60 text-white font-mono text-xs font-bold uppercase tracking-wider bg-[#0E2445]/30 hover:bg-[#0E2445]/45 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#3B82F6]" />
                  <span>Call (954) 234-7231 (24/7)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/marc-a-tardalo-22839530/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-3 px-4 rounded-sm bg-white hover:bg-zinc-100 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest text-center shadow-lg transition-colors cursor-pointer"
                >
                  Portfolio
                </a>

                <Link
                  href="/contact"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-sm bg-[#C5A880] hover:bg-[#C5A880] text-white font-bold text-xs uppercase tracking-widest text-center shadow-lg transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
