'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Loader2, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

interface Props {
  id?: string;
}

export const SarasotaConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'Sarasota Security Consultation' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locationProfile: '',
    serviceNeeded: '',
    travelDates: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id={id}
      aria-label="Sarasota Confidential Security Consultation"
      className="relative w-full bg-[#070D18] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-10 sm:mb-12">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              CONFIDENTIAL GULF COAST INQUIRY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Request a Confidential Sarasota Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed pt-1"
          >
            Casey Key and Longboat Key estates, Bird Key bay-front properties, Ringling galas, or seasonal residency coverage. Discuss your security brief directly with our command team.
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
              Consultation Inquiry Received
            </h3>
            <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base">
              Your confidential inquiry has been routed to our operations directors. We will review your dates, location, and protection requirements with complete discretion.
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

            {/* Row 3: Sarasota Location Profile & Service Needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Sarasota Location or Setting
                </label>
                <div className="relative">
                  <select
                    value={formData.locationProfile}
                    onChange={(e) => setFormData({ ...formData, locationProfile: e.target.value })}
                    required
                    className="w-full appearance-none bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white focus:outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#142038] text-zinc-400">
                      Select location profile
                    </option>
                    <option value="Casey Key Barrier Island Estate" className="bg-[#142038] text-white">
                      Casey Key Barrier Island Estate
                    </option>
                    <option value="Longboat Key Estate (North or South End)" className="bg-[#142038] text-white">
                      Longboat Key Estate (North or South End)
                    </option>
                    <option value="Bird Key Bay-Front Residence" className="bg-[#142038] text-white">
                      Bird Key Bay-Front Residence
                    </option>
                    <option value="Sarasota Mainland / Downtown Arts District" className="bg-[#142038] text-white">
                      Sarasota Mainland / Downtown Arts District
                    </option>
                    <option value="Cultural Season Venue (Ringling, Van Wezel)" className="bg-[#142038] text-white">
                      Cultural Season Venue (Ringling, Van Wezel)
                    </option>
                    <option value="Seasonal Residence (October - April)" className="bg-[#142038] text-white">
                      Seasonal Residence (October - April)
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
                      Select service needed
                    </option>
                    <option value="Barrier Island Estate Security" className="bg-[#142038] text-white">
                      Barrier Island Estate Security
                    </option>
                    <option value="Seasonal Residence Protection" className="bg-[#142038] text-white">
                      Seasonal Residence Protection
                    </option>
                    <option value="Cultural Season Event Security" className="bg-[#142038] text-white">
                      Cultural Season Event Security
                    </option>
                    <option value="Executive & Principal Protection" className="bg-[#142038] text-white">
                      Executive &amp; Principal Protection
                    </option>
                    <option value="Armed Security Officers (Class G)" className="bg-[#142038] text-white">
                      Armed Security Officers (Class G)
                    </option>
                    <option value="Absentee & Off-Season Property Coverage" className="bg-[#142038] text-white">
                      Absentee &amp; Off-Season Property Coverage
                    </option>
                    <option value="Other" className="bg-[#142038] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Anticipated Dates or Season Window */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Anticipated Dates, Cultural Season Schedule, or Travel Window
              </label>
              <input
                type="text"
                placeholder="e.g., Cultural Season (Oct - Apr), Gala Date, or specific travel dates"
                value={formData.travelDates}
                onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                className="w-full bg-[#142038] border border-white/[0.08] focus:border-[#C5A880] rounded px-4 py-3.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Row 5: Message */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Confidential Security Requirements &amp; Details
              </label>
              <textarea
                rows={4}
                placeholder="Share your estate parameters, access requirements, or event security schedule in complete confidence"
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
                  <span>REQUEST CONFIDENTIAL CONSULTATION</span>
                )}
              </button>
            </div>

            {/* Footer Note */}
            <div className="pt-2 text-center">
              <p className="text-[11px] sm:text-xs font-sans text-zinc-400 font-light">
                Serving Florida Statewide · Florida Agency License B1400200 · Licensed &amp; Insured · Absolute Client Discretion
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};
