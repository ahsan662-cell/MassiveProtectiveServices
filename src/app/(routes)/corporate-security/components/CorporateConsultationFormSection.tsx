'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

const NEED_TYPES = [
  'Executive Protection',
  'Termination Security',
  'Workplace Violence',
  'Events',
  'Ongoing Officers',
  'Other',
];

export const CorporateConsultationFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    email: '',
    typeOfNeed: 'Executive Protection',
    briefDescription: '',
  });

  const [needDropdownOpen, setNeedDropdownOpen] = useState(false);
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'Corporate Security Consultation' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id="consultation-form"
      aria-label="Request a Confidential Corporate Security Consultation"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header matching Screenshot 3 */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
              CONFIDENTIAL CONSULTATION
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            Request a Confidential Corporate Security Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Tell us what you&apos;re dealing with. We&apos;ll respond within 4 business hours ΓÇö discreetly.
          </motion.p>
        </div>

        {/* Form Container matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          {isSuccess ? (
            <div className="py-14 text-center space-y-6 bg-[#0E1728] border border-white/10 rounded-sm p-8">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Consultation Request Received
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  A senior protective coordinator from Massive Protective Services will contact you
                  confidentially within 4 business hours.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:9542347231"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A880] hover:text-[#D4AF37] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Immediate dispatch required? Call (954) 234-7231</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Job Title & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Email (full width matching Screenshot 3) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                />
              </div>

              {/* Row 4: Type of Need Dropdown matching Screenshot 3 */}
              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Type of Need
                </label>
                
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
                  type="button"
                  onClick={() => setNeedDropdownOpen(!needDropdownOpen)}
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                >
                  <span className="text-zinc-200">{formData.typeOfNeed}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      needDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Options Container matching Screenshot 3 */}
                {needDropdownOpen && (
                  <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded-sm shadow-2xl py-1 divide-y divide-white/5">
                    {NEED_TYPES.map((type, idx) => {
                      const isSelected = formData.typeOfNeed === type;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, typeOfNeed: type });
                            setNeedDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'text-[#C5A880] bg-[#142036]'
                              : 'text-zinc-300 hover:bg-[#142036] hover:text-white'
                          }`}
                        >
                          <span>{type}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#C5A880]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Row 5: Brief Description matching Screenshot 3 */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Brief Description
                </label>
                <textarea
                  rows={5}
                  value={formData.briefDescription}
                  onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button matching Screenshot 3: REQUEST CONSULTATION in solid gold */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                      <span>PROCESSING INQUIRY...</span>
                    </>
                  ) : (
                    <span>REQUEST CONSULTATION</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
