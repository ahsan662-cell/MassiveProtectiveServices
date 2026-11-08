'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Lock,
  FileText,
  ShieldAlert,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { TacticalCard } from '@/components/ui/TacticalCard';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

export const DiscretionNDABlock: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    county: 'Palm Beach',
    serviceType: 'Executive Protection',
    ndaRequested: true,
    requiresArmedDriver: false,
  });

  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } =
    useConsultationSubmit({
      formSource: 'Homepage Sovereign NDA Block',
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id="discretion"
      aria-label="Confidentiality and Consultation"
      className="relative w-full py-14 sm:py-18 lg:py-20 bg-[#090D15] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Discretion Doctrine & Sovereign NDA Policy */}
          <div className="lg:col-span-6 space-y-6">
            <SectionBadge label="SOVEREIGN CONFIDENTIALITY" icon={Lock} />

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight"
            >
              Institutional Discretion.
              <br />
              <span className="italic text-[#C5A880]">Absolute Client Sovereign Protection.</span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed"
            >
              We protect principals whose security cannot afford public exposure. Prior to deployment
              or operational briefings, Massive Protective Services executes legally binding mutual
              non-disclosure agreements (NDAs) adhering to Florida statutory protections.
            </motion.p>

            {/* Tactical Confidentiality Guarantees */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Pre-Engagement Mutual NDA Execution
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">
                    Binding legal non-disclosure execution shielding identity, destinations, family
                    members, assets, and operational threat profiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Chapter 493 Statutory Confidentiality
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">
                    Client engagements are insulated under strict Florida security regulatory
                    oversight. Operations records are encrypted and air-gapped.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#0F1626]/80 border border-white/[0.06]">
                <div className="p-2 rounded bg-[#152037] text-[#D4AF37] border border-[#C5A880]/30 shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    Zero Social Media / Zero Visibility Doctrine
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">
                    Operators sign permanent zero-disclosure clauses. No photographs, no geo-tagging,
                    and zero public presence during or after deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Priority Phone Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="tel:9542347231"
                className="inline-flex items-center gap-2.5 text-xs font-mono font-medium tracking-wider text-[#C5A880] hover:text-[#D4AF37] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>24/7 ENCRYPTED DISPATCH: (954) 234-7231</span>
              </a>
            </div>
          </div>

          {/* Right Column: Confidential Intake Form Card */}
          <div className="lg:col-span-6">
            <TacticalCard
              cornerTicks
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 bg-[#0F172A]/95 border-[#C5A880]/30 shadow-[0_16px_48px_rgba(0,0,0,0.85)]"
            >
              <div className="border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    ENCRYPTED INQUIRY CHANNEL
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#C5A880]" />
                    256-BIT ENCRYPTION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">
                  Request Confidential Consultation
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Direct dispatch to Delray Beach operations. All inquiries protected by binding NDA.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    Confidential Intake Transmitted
                  </h3>
                  <p className="text-zinc-300 font-light text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been received directly by the command desk. A licensed protective
                    coordinator will contact you promptly under full NDA safeguards.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        reset();
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          county: 'Palm Beach',
                          serviceType: 'Executive Protection',
                          ndaRequested: true,
                          requiresArmedDriver: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-sm border border-[#C5A880]/50 text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors cursor-pointer"
                    >
                      Submit Another Intake
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                        Principal or Agent Name <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Family Office"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      />
                      {fieldErrors.fullName && (
                        <p className="text-[11px] text-[#8B1E1E] font-medium">
                          {fieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                        Direct Secure Phone <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      />
                      {fieldErrors.phone && (
                        <p className="text-[11px] text-[#8B1E1E] font-medium">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                        Confidential Email <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="principal@familyoffice.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-white text-xs font-sans placeholder:text-zinc-600 outline-none transition-colors"
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-[#8B1E1E] font-medium">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                        Operational County
                      </label>
                      <div className="relative">
                        <select
                          aria-label="Operational County"
                          className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 text-white text-xs font-sans appearance-none outline-none pr-8 cursor-pointer"
                          value={formData.county}
                          onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                        >
                          <option value="Palm Beach">Palm Beach County</option>
                          <option value="Broward">Broward County</option>
                          <option value="Miami-Dade">Miami-Dade County</option>
                          <option value="Visiting Principal">Visiting Principal (Statewide)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      Primary Service Requirement
                    </label>
                    <div className="relative">
                      <select
                        aria-label="Primary Service Requirement"
                        className="w-full px-3.5 py-2.5 rounded bg-[#090D16] border border-white/10 text-white text-xs font-sans appearance-none outline-none pr-8 cursor-pointer"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="Executive Protection">Executive Protection & Armed Driving</option>
                        <option value="Estate Security">Estate & Residential Fortification</option>
                        <option value="VIP/Celebrity">VIP & Celebrity Protection</option>
                        <option value="Event Security">High-Stakes Event Security</option>
                        <option value="Armed Security Officers">Class G Armed Security Officers</option>
                        <option value="Concierge Security">Elite Concierge & Penthouse Security</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Tactical Checkboxes */}
                  <div className="pt-2 space-y-2">
                    <label className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.ndaRequested}
                        onChange={(e) =>
                          setFormData({ ...formData, ndaRequested: e.target.checked })
                        }
                        className="w-4 h-4 rounded bg-[#0A0A0A] border-white/20 accent-[#D4AF37]"
                      />
                      <span>Require pre-consultation mutual Non-Disclosure Agreement (NDA)</span>
                    </label>

                    <label className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.requiresArmedDriver}
                        onChange={(e) =>
                          setFormData({ ...formData, requiresArmedDriver: e.target.checked })
                        }
                        className="w-4 h-4 rounded bg-[#0A0A0A] border-white/20 accent-[#D4AF37]"
                      />
                      <span>Include armored motorcade transport / Class G armed driver</span>
                    </label>
                  </div>

                  {/* Inline Error Banner */}
                  {errorMessage && (
                    <div className="p-3 rounded bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-xs text-red-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{errorMessage}</p>
                        {isTimedOut && (
                          <p className="mt-1 text-red-300">
                            Direct line:{' '}
                            <a href="tel:9542347231" className="underline font-bold text-white">
                              (954) 234-7231
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(197,168,128,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-pointer ${
                        isSubmitting
                          ? 'bg-[#182338] text-[#C5A880] border border-[#C5A880]/40 cursor-wait'
                          : 'bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C5A880]" />
                          <span>Securing Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5 text-[#0A0A0A]" />
                          <span>Transmit Confidential Intake</span>
                        </>
                      )}
                    </button>

                    <div className="mt-3 text-center text-[10px] font-mono text-zinc-500">
                      FDACS LIC. #B1400200 · CHAPTER 493 STATUTES · 24/7 COMMAND
                    </div>
                  </div>
                </form>
              )}
            </TacticalCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscretionNDABlock;
