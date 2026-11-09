'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Loader2, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

interface Props {
  id?: string;
}

export const PalmBeachConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Palm Beach Security Consultation' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyProfile: '',
    serviceNeeded: '',
    seasonTiming: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id={id}
      aria-label="Palm Beach Confidential Estate Security Consultation"
      className="relative w-full bg-[#070D18] py-8 sm:py-10 lg:py-12 text-white overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-4 sm:mb-5">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
              CONFIDENTIAL INQUIRY
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Request a Confidential Palm Beach Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed pt-1"
          >
            Oceanfront and lakefront estates, private club and charity gala coverage, or seasonal residence security. Discuss your requirements directly with our Delray Beach headquarters.
          </motion.p>
        </div>

        {/* Form Container */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#121D38] border border-white/[0.08] rounded-lg p-10 sm:p-14 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-[#0E2445]/15 border border-[#0E2445]/40 flex items-center justify-center mx-auto text-[#93C5FD]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Consultation Request Received
            </h3>
            <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base">
              Your inquiry has been received by our command team at Delray Beach headquarters. A licensed director will contact you promptly and with absolute discretion.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={reset}
                className="px-6 py-2.5 rounded-sm border border-[#0E2445]/50 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:bg-[#0E2445]/10 transition-colors cursor-pointer"
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
            className="space-y-3 sm:space-y-3.5"
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
                  className="w-full bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
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
                  className="w-full bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
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
                className="w-full bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Row 3: Property / Assignment Profile & Service Needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Palm Beach Estate / Venue Profile
                </label>
                <div className="relative">
                  <select
                    value={formData.propertyProfile}
                    onChange={(e) => setFormData({ ...formData, propertyProfile: e.target.value })}
                    required
                    className="w-full appearance-none bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white focus:outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141F38] text-zinc-400">
                      Select estate or venue profile
                    </option>
                    <option value="Oceanfront Estate (South Ocean Boulevard)" className="bg-[#141F38] text-white">
                      Oceanfront Estate (South Ocean Boulevard)
                    </option>
                    <option value="Lakefront Estate (North Lake Way)" className="bg-[#141F38] text-white">
                      Lakefront Estate (North Lake Way)
                    </option>
                    <option value="Private Club / Gala Event Venue" className="bg-[#141F38] text-white">
                      Private Club / Gala Event Venue
                    </option>
                    <option value="Seasonal Residence (The Season: Nov - Apr)" className="bg-[#141F38] text-white">
                      Seasonal Residence (The Season: Nov - Apr)
                    </option>
                    <option value="Off-Season Unoccupied Property" className="bg-[#141F38] text-white">
                      Off-Season Unoccupied Property
                    </option>
                    <option value="Commercial / Worth Avenue" className="bg-[#141F38] text-white">
                      Commercial / Worth Avenue
                    </option>
                    <option value="Other" className="bg-[#141F38] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#93C5FD] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                    className="w-full appearance-none bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white focus:outline-none transition-colors pr-10 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#141F38] text-zinc-400">
                      Select service needed
                    </option>
                    <option value="Oceanfront & Lakefront Estate Security" className="bg-[#141F38] text-white">
                      Oceanfront &amp; Lakefront Estate Security
                    </option>
                    <option value="Seasonal Residence Protection" className="bg-[#141F38] text-white">
                      Seasonal Residence Protection
                    </option>
                    <option value="Private Club & Gala Event Security" className="bg-[#141F38] text-white">
                      Private Club &amp; Gala Event Security
                    </option>
                    <option value="Executive & Principal Protection" className="bg-[#141F38] text-white">
                      Executive &amp; Principal Protection
                    </option>
                    <option value="Armed Security Officers (Class G)" className="bg-[#141F38] text-white">
                      Armed Security Officers (Class G)
                    </option>
                    <option value="Absentee & Off-Season Property Coverage" className="bg-[#141F38] text-white">
                      Absentee &amp; Off-Season Property Coverage
                    </option>
                    <option value="Other" className="bg-[#141F38] text-white">
                      Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#93C5FD] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Season Timing or Property Address */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Season Timing, Event Date, or Property Location
              </label>
              <input
                type="text"
                placeholder="e.g., The Season (Nov - April), Gala Date, or South Ocean Blvd area"
                value={formData.seasonTiming}
                onChange={(e) => setFormData({ ...formData, seasonTiming: e.target.value })}
                className="w-full bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
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
                className="w-full bg-[#141F38] border border-white/[0.08] focus:border-[#0E2445] rounded px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
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
<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-5 rounded bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#3B82F6]/30 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>TRANSMITTING INQUIRY...</span>
                  </>
                ) : (
                  <>
                    <span>REQUEST CONFIDENTIAL CONSULTATION</span>
                    <ChevronDownIcon className="w-3.5 h-3.5 opacity-70" />
                  </>
                )}
              </button>

            
            </div>

            {/* Footer Note */}
            <div className="pt-2 text-center">
              <p className="text-[11px] sm:text-xs font-sans text-zinc-400 font-light">
                Delray Beach Headquarters — 25 Minutes South · Florida License B1400200 · Strict Client Confidentiality Assured
              </p>
            </div>
          </motion.form>
        )}
      </div>
      {/* Submission Method Selection Modal */}
      <SubmissionMethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSubmitEmail={async () => {
          await submitForm(formData);
        }}
        onSubmitWhatsApp={() => {
          submitViaWhatsApp(formData);
        }}
        isSubmittingEmail={isSubmitting}
        clientName={formData.name}
      />
    </section>
  );
};
