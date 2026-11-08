'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Calendar, Check, Loader2, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

interface Props {
  id?: string;
}

const PRINCIPAL_TYPES = [
  'Celebrity',
  'Entertainer',
  'Athlete',
  'Politician',
  'Dignitary',
  'UHNW Individual',
  'Other',
];

const COVERAGE_OPTIONS = [
  'Single Appearance',
  'Multi-Day Visit',
  'Event Season',
  'Ongoing Retainer',
  'Other',
];

export const VIPProtectionConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    principalType: '',
    coverageNeeded: '',
    location: '',
    arrivalDate: '',
    message: '',
  });

  const [principalOpen, setPrincipalOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'VIP Protection Consultation' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id={id}
      aria-label="Request VIP Protection"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              A PRIVATE FIRST CONVERSATION
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            Request VIP Protection — We Respond Within 2 Hours
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            All inquiries are handled with total confidentiality. NDAs available on request.
          </motion.p>
        </div>

        {/* Form Body */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0F1829] border border-[#C5A880]/50 p-8 sm:p-12 text-center space-y-4"
          >
            <div className="w-16 h-16 bg-[#C5A880]/20 text-[#C5A880] mx-auto flex items-center justify-center rounded-full">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">VIP Inquiry Received — Strictly Confidential</h3>
            <p className="text-zinc-300 text-sm max-w-lg mx-auto">
              A licensed close protection coordinator will review your request and reach out within 2 hours. If an NDA is required before details are transmitted, we will initiate execution immediately.
            </p>
            
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
              <button
              onClick={() => {
                reset();
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  principalType: '',
                  coverageNeeded: '',
                  location: '',
                  arrivalDate: '',
                  message: '',
                });
              }}
              className="mt-4 px-6 py-2.5 border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#0A111F] text-xs font-mono tracking-widest uppercase transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Full Name (or Agency / Management Company)
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your name or company"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email Address (full width) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email address"
                className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
              />
            </div>

            {/* Row 3: Principal Type & Coverage Needed (Side-by-side select boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Principal Type Selection Box */}
              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Principal Type
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setPrincipalOpen(!principalOpen);
                    setCoverageOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/15 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className={formData.principalType ? 'text-white' : 'text-zinc-400'}>
                    {formData.principalType || 'Select principal type'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      principalOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {principalOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-[#C5A880]/40 shadow-2xl max-h-60 overflow-y-auto">
                    {PRINCIPAL_TYPES.map((type, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, principalType: type });
                          setPrincipalOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.principalType === type
                            ? 'bg-[#C5A880]/20 text-[#C5A880]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Coverage Needed Selection Box */}
              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Coverage Needed
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setCoverageOpen(!coverageOpen);
                    setPrincipalOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/15 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className={formData.coverageNeeded ? 'text-white' : 'text-zinc-400'}>
                    {formData.coverageNeeded || 'Select coverage needed'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      coverageOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {coverageOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-[#C5A880]/40 shadow-2xl max-h-60 overflow-y-auto">
                    {COVERAGE_OPTIONS.map((cov, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, coverageNeeded: cov });
                          setCoverageOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.coverageNeeded === cov
                            ? 'bg-[#C5A880]/20 text-[#C5A880]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {cov}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 4: Location / City & Arrival Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Location / City in South Florida
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Where protection is needed"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Arrival Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    placeholder="MM / DD / YYYY"
                    className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 pr-10 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                  />
                  <Calendar className="w-4 h-4 text-[#C5A880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 5: Message */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your principal, their itinerary and any known concerns — all details are strictly confidential"
                className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#C5A880] focus:outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-500 rounded-none resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.005 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.995 }}
              className="w-full bg-[#C5A880] hover:bg-[#B3956F] text-[#0A111F] font-sans font-medium text-xs sm:text-sm tracking-[0.14em] uppercase py-4 sm:py-4.5 px-6 rounded-none transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(197,168,128,0.25)] hover:shadow-[0_6px_28px_rgba(197,168,128,0.4)] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A111F]" />
                  <span>TRANSMITTING CONFIDENTIAL REQUEST...</span>
                </>
              ) : (
                <span>REQUEST CONFIDENTIAL CONSULTATION</span>
              )}
            </motion.button>

            {/* Footer Note */}
            <p className="text-center text-xs font-mono text-zinc-400 tracking-wider pt-2">
              FL License B1400200 · NDA available · All inquiries strictly confidential
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
