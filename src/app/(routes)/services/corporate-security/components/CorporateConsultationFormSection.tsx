'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

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
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Corporate Security Consultation' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id="consultation-form"
      aria-label="Request a Confidential Corporate Security Consultation"
      className="relative w-full bg-[#080E1A] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4">
        {/* Section Header matching Screenshot 3 */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#0E2445]">
              CONFIDENTIAL CONSULTATION
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-[1.14] tracking-tight"
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
            <div className="py-14 text-center space-y-3 bg-[#0E1728] border border-white/10 rounded-sm p-8">
              <div className="w-16 h-16 rounded-full bg-[#0E2445]/15 border border-[#0E2445]/40 text-[#0E2445] flex items-center justify-center mx-auto">
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
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0E2445] hover:text-[#173A6E] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Immediate dispatch required? Call (954) 234-7231</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
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
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white px-3 py-2 sm:py-2.5 rounded-sm text-sm outline-none transition-colors"
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
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white px-3 py-2 sm:py-2.5 rounded-sm text-sm outline-none transition-colors"
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
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white px-3 py-2 sm:py-2.5 rounded-sm text-sm outline-none transition-colors"
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
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white px-3 py-2 sm:py-2.5 rounded-sm text-sm outline-none transition-colors"
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
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white px-3 py-2 sm:py-2.5 rounded-sm text-sm outline-none transition-colors"
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-5 rounded bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#3B82F6]/30 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>PROCESSING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Request</span>
                        <ChevronDownIcon className="w-3.5 h-3.5 opacity-70" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
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
        clientName={formData.fullName}
      />
    </section>
  );
};
