'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Shield,
  Home,
  Calendar,
  ShieldAlert,
  Star,
  Key,
  Building2,
  Eye,
  Car,
  GraduationCap,
  Users,
  Anchor,
  ArrowRight,
  Search,
  CheckCircle2,
  Phone,
  FileCheck2,
  Lock,
  Radio,
} from 'lucide-react';
import {
  ALL_SERVICES_OVERVIEW,
  SERVICE_DISCIPLINES,
  ServiceOverviewItem,
} from '@/data/servicesOverviewData';

const ICON_MAP = {
  Shield,
  Home,
  Calendar,
  ShieldAlert,
  Star,
  Key,
  Building2,
  Eye,
  Car,
  GraduationCap,
  Users,
  Anchor,
};

export const ServicesOverviewClient: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services by discipline and search query
  const filteredServices = useMemo(() => {
    return ALL_SERVICES_OVERVIEW.filter((service) => {
      const matchesDiscipline =
        selectedDiscipline === 'all' || service.discipline === selectedDiscipline;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.capabilities.some((c) => c.toLowerCase().includes(q));

      return matchesDiscipline && matchesSearch;
    });
  }, [selectedDiscipline, searchQuery]);

  return (
    <div className="w-full flex-1 flex flex-col bg-[#0A0A0A] text-white overflow-hidden">
      {/* 1. Services Directory Hero - Dark Obsidian Luxury */}
      <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B10] border-b border-white/[0.08] overflow-hidden">
        {/* Ambient brand glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0E2445]/15 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Link href="/" className="hover:text-[#60A5FA] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#60A5FA] font-semibold">Services</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span>FULL-SPECTRUM LICENSED OPERATIONS · FL LICENSE B1400200</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-[1.08]">
              Private Security &amp; Armed Protection Services
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-sans font-normal leading-relaxed max-w-3xl">
              From close protection and residential compound defense to corporate headquarters and marine security, explore our complete licensed offerings across South Florida and statewide.
            </p>
          </div>

          {/* Quick Credential Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <Shield className="w-5 h-5 text-[#60A5FA] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">100% Class G Armed</div>
                <div className="text-[11px] text-zinc-400 font-sans">Zero unarmed on armed posts</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <FileCheck2 className="w-5 h-5 text-[#60A5FA] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">FDACS License B1400200</div>
                <div className="text-[11px] text-zinc-400 font-sans">State regulated &amp; verifiable</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <Radio className="w-5 h-5 text-[#60A5FA] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">24/7 Agency Command</div>
                <div className="text-[11px] text-zinc-400 font-sans">Delray Beach Headquarters</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <Lock className="w-5 h-5 text-[#60A5FA] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Strict Mutual NDA</div>
                <div className="text-[11px] text-zinc-400 font-sans">Complete client confidentiality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Discipline Filters & Search */}
      <section className="sticky top-20 z-30 bg-[#0B0B10]/95 backdrop-blur-md border-b border-white/[0.08] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Discipline Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {SERVICE_DISCIPLINES.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDiscipline(d.id)}
                className={`shrink-0 px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                  selectedDiscipline === d.id
                    ? 'bg-[#0E2445] text-white font-bold shadow-md shadow-[#0E2445]/30'
                    : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <span>{d.label}</span>
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedDiscipline === d.id
                      ? 'bg-[#0A1E40] text-[#93C5FD]'
                      : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {d.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative shrink-0 w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 12 services..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] focus:ring-1 focus:ring-[#0E2445] transition-all"
            />
          </div>
        </div>
      </section>

      {/* 3. Services Directory Grid - Crisp Pure White Section for Outstanding Visual Separation */}
      <section className="w-full bg-[#FFFFFF] text-[#0F172A] py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4">
            <div>
              Showing <span className="text-[#0E2445] font-bold">{filteredServices.length}</span> of{' '}
              {ALL_SERVICES_OVERVIEW.length} Core Security Disciplines
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-[#0E2445] font-semibold hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredServices.map((service: ServiceOverviewItem, index: number) => {
              const Icon = ICON_MAP[service.iconName] || Shield;

              return (
                <motion.div
                  key={service.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="group relative rounded-xl bg-white border border-slate-200/90 hover:border-[#0E2445]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(14, 36, 69,0.12)] hover:-translate-y-1.5"
                >
                  {/* Service Hero Photo */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={`${service.title} - Massive Protective Services`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-zinc-200 font-medium">
                        {service.category}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0E2445] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Floating Service Icon */}
                    <div className="absolute bottom-3 left-4 z-10 w-11 h-11 rounded-lg bg-[#0A1E40]/95 border border-[#0E2445]/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:border-[#0E2445] transition-colors">
                      <Icon className="w-5 h-5 text-[#60A5FA] group-hover:text-blue-300 transition-colors" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h2 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 group-hover:text-[#0E2445] leading-snug transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-xs font-mono text-[#0E2445] font-semibold leading-relaxed">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-sans font-normal leading-relaxed">
                        {service.description}
                      </p>

                      {/* Key Capabilities Checklist */}
                      <div className="pt-2 space-y-2">
                        {service.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-600 font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E2445] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#0E2445] group-hover:text-[#173A6E] transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </Link>
                      <span className="text-[11px] font-mono text-slate-400">
                        {String(index + 1).padStart(2, '0')}/12
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Standards Comparison Section - Light Surface */}
      <section className="relative w-full bg-[#F8FAFC] text-[#0F172A] py-18 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold uppercase tracking-wider">
              THE MASSIVE PROTECTIVE STANDARD
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-slate-900">
              Why Discerning Principals Choose Massive Protective Services
            </h3>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              We operate exclusively as a licensed armed security agency under Chapter 493, Florida Statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0E2445]" />
              </div>
              <h4 className="text-lg font-sans font-bold text-slate-900">Zero Subcontracting</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Every officer deployed is an in-house, vetted employee of Massive Protective Services. We never broker or pass contracts to unvetted third-party guard pools.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5 text-[#0E2445]" />
              </div>
              <h4 className="text-lg font-sans font-bold text-slate-900">Advance Reconnaissance</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Every engagement begins with written protection planning, venue assessments, and primary/secondary emergency transit routes established before deployment begins.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3.5">
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#0E2445]" />
              </div>
              <h4 className="text-lg font-sans font-bold text-slate-900">Mutual NDA Discretion</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                We safeguard our principals’ privacy with binding mutual non-disclosure agreements. Our presence is discreet, professional, and strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Consultation CTA Section - Deep Obsidian & Brand Blue */}
      <section className="relative w-full py-18 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E2445] via-[#08172E] to-[#050F1E] text-white border-t border-[#0E2445]/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0E2445]/20 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/40 text-[#93C5FD] text-xs font-semibold uppercase tracking-wider font-mono">
            <span>READY TO DISCUSS YOUR SECURITY REQUIREMENTS?</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            Schedule a Confidential Security Consultation
          </h3>

          <p className="text-base sm:text-lg text-zinc-200 font-sans max-w-2xl mx-auto leading-relaxed">
            Speak directly with an operations commander to assess your estate, principal movement, or corporate security detail. Immediate 24/7 deployment available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#0E2445] text-white font-bold text-sm shadow-lg shadow-[#0E2445]/40 hover:bg-[#173A6E] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Request Confidential Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9542347231"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm border border-white/30 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#60A5FA]" />
              <span>Call 24/7: (954) 234-7231</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverviewClient;
