'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Calendar, Loader2, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

interface Props {
  id?: string;
}

export const WestPalmBeachConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'West Palm Beach Security Consultation' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    engagementLocation: '',
    serviceNeeded: '',
    preferredStartDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id={id}
      aria-label="West Palm Beach Confidential Consultation"
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-10 sm:mb-12">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Request a Confidential Consultation for West Palm Beach Executive Protection
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light italic leading-relaxed pt-1"
          >
            All inquiries are treated as strictly confidential. Non-disclosure agreements are provided and signed by our command team as standard.
          </motion.p>
        </div>

        {/* Form Container */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#121D38] border border-white/[0.08] rounded-lg p-10 sm:p-14 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Consultation Request Received
            </h3>
            <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base">
              Your inquiry has been received by our command team. A licensed executive protection director will contact you promptly and with absolute discretion.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={reset}
                className="px-6 py-2.5 rounded-sm border border-[#C5A880]/50 text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-7"
          >
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email Address */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Row 3: Engagement Location & Service Needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Engagement Location / Setting
                </label>
                <div className="relative">
                  <select
                    value={formData.engagementLocation}
                    onChange={(e) => setFormData({ ...formData, engagementLocation: e.target.value })}
                    required
                    className="w-full appearance-none bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white focus:outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#142038] text-zinc-400">
                      Select location or facility
                    </option>
                    <option value="PBI Airport Arrival / Departure" className="bg-[#142038] text-white">
                      PBI Airport Arrival / Departure
                    </option>
                    <option value="Downtown WPB Financial District" className="bg-[#142038] text-white">
                      Downtown WPB Financial District
                    </option>
                    <option value="Palm Beach County Courthouse Complex" className="bg-[#142038] text-white">
                      Palm Beach County Courthouse Complex
                    </option>
                    <option value="Private Residence / Waterfront Home" className="bg-[#142038] text-white">
                      Private Residence / Waterfront Home
                    </option>
                    <option value="Corporate Headquarters / Family Office" className="bg-[#142038] text-white">
                      Corporate Headquarters / Family Office
                    </option>
                    <option value="Inter-County Travel / Tri-County Movement" className="bg-[#142038] text-white">
                      Inter-County Travel / Tri-County Movement
                    </option>
                    <option value="Other" className="bg-[#142038] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Service Needed
                </label>
                <div className="relative">
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    required
                    className="w-full appearance-none bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white focus:outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#142038] text-zinc-400">
                      Select service
                    </option>
                    <option value="Armed Executive Protection" className="bg-[#142038] text-white">
                      Armed Executive Protection
                    </option>
                    <option value="Airport Arrival & Departure Escort (PBI)" className="bg-[#142038] text-white">
                      Airport Arrival &amp; Departure Escort (PBI)
                    </option>
                    <option value="Corporate & Boardroom Security" className="bg-[#142038] text-white">
                      Corporate &amp; Boardroom Security
                    </option>
                    <option value="Legal Proceeding & Courthouse Coverage" className="bg-[#142038] text-white">
                      Legal Proceeding &amp; Courthouse Coverage
                    </option>
                    <option value="Residential & Estate Security" className="bg-[#142038] text-white">
                      Residential &amp; Estate Security
                    </option>
                    <option value="High-Threat / Sensitive Movement" className="bg-[#142038] text-white">
                      High-Threat / Sensitive Movement
                    </option>
                    <option value="Other" className="bg-[#142038] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Preferred Start Date (optional) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Preferred Start Date (optional)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="mm / dd / yyyy"
                  value={formData.preferredStartDate}
                  onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                  className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors pr-10"
                />
                <Calendar className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 5: Message */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Describe your protection requirements, schedule, or PBI arrival details — all inquiries remain strictly confidential"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            
              {errorMessage && (
                <div className="p-3.5 rounded bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-xs text-red-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{errorMessage}</p>
                    {isTimedOut && (
                      <p className="mt-1 text-red-300">
                        Priority Dispatch Hotline: <a href="tel:9542347231" className="underline font-bold text-white">(954) 234-7231</a>
                      </p>
                    )}
                  </div>
                </div>
              )}
<div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-10 py-4 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] hover:scale-[1.005] cursor-pointer"
               disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A] mr-2" />
                    <span>TRANSMITTING INQUIRY...</span>
                  </>
                ) : (
                  <span>Request Confidential Consultation</span>
                )}
              </button>
            </div>

            {/* Footer Note */}
            <div className="pt-3 text-center">
              <p className="text-[11px] sm:text-xs font-sans text-zinc-400 font-light tracking-wide">
                FL License B1400200 · Class G Licensed Armed Officers · Delray Beach HQ — Serving West Palm Beach &amp; Palm Beach County · NDA standard
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};
