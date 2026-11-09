'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, PhoneCall, CheckCircle2, Lock, FileText, Send, Loader2, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

interface Props {
  id?: string;
}

export const AventuraConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Aventura Security Consultation' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Luxury High-Rise Condominium / Penthouse',
    serviceNeeded: 'Armed Security Officers (Florida Class G)',
    locationCommunity: 'Williams Island',
    targetDate: '',
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
      aria-label="Aventura Security Consultation"
      className="relative w-full bg-[#080E1A] py-8 sm:py-10 lg:py-12 text-white overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E2445]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-10">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
              CONFIDENTIAL CONSULTATION · AVENTURA
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-white leading-tight tracking-tight"
          >
            Request Private Security for Aventura
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto"
          >
            A licensed security coordinator will respond within 2 hours. Strict non-disclosure agreements executed upon request prior to confidential operational review.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#10192E] border border-white/10 rounded-xl p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
        >
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#0E2445]/15 border border-[#0E2445]/40 flex items-center justify-center mx-auto text-[#93C5FD]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Consultation Request Transmitted
              </h3>
              <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base">
                Your inquiry has been routed to our direct watch commander. A licensed coordinator will review your Aventura requirements and contact you within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={reset}
                  className="px-6 py-2.5 rounded-sm border border-[#0E2445]/50 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:bg-[#0E2445]/10 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Full Name / Title <span className="text-[#93C5FD]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Principal, Family Office or Representative"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Direct Phone <span className="text-[#93C5FD]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(954) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Target Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Confidential Email <span className="text-[#93C5FD]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="direct@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Expected Start / Deployment Date
                  </label>
                  <input
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Aventura Specific Selects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Aventura Community / Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white focus:outline-none focus:border-[#0E2445] transition-colors"
                  >
                    <option value="Williams Island Luxury High-Rise">Williams Island Luxury High-Rise</option>
                    <option value="Porto Vita Intracoastal Community">Porto Vita Intracoastal Community</option>
                    <option value="Turnberry Isle Waterfront Residence">Turnberry Isle Waterfront Residence</option>
                    <option value="The Waterways & Mystic Pointe">The Waterways & Mystic Pointe</option>
                    <option value="Aventura Gated Island / Estate">Aventura Gated Island / Estate</option>
                    <option value="Aventura Corporate Suite / Office">Aventura Corporate Suite / Office</option>
                    <option value="Visiting International Executive / UHNW">Visiting International Executive / UHNW</option>
                    <option value="Waterfront Private Event / Penthouse Gala">Waterfront Private Event / Penthouse Gala</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white focus:outline-none focus:border-[#0E2445] transition-colors"
                  >
                    <option value="Luxury Residence & High-Rise Security">Luxury Residence & High-Rise Security</option>
                    <option value="Executive Protection & Secure Motorcade">Executive Protection & Secure Motorcade</option>
                    <option value="International Client Protection & Itinerary">International Client Protection & Itinerary</option>
                    <option value="Armed Security Officers (Florida Class G)">Armed Security Officers (Florida Class G)</option>
                    <option value="Corporate & Executive Office Security">Corporate & Executive Office Security</option>
                    <option value="Private Event Security Detail">Private Event Security Detail</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Scope Message */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Assignment Details & Confidential Scope
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline access parameters, principal itinerary, hours of coverage, or specific confidentiality requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080E1C] border border-white/10 rounded-md px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors resize-none"
                />
              </div>

              {/* Privacy / NDA Notice */}
              <div className="p-4 rounded-lg bg-[#080E1C] border border-[#0E2445]/20 flex items-start gap-3">
                <Lock className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-zinc-400 space-y-1">
                  <p className="font-medium text-zinc-300">
                    Strict Confidentiality Protocol & Non-Disclosure
                  </p>
                  <p>
                    All inquiries are held in strict confidence. NDAs executed upon request prior to confidential discussions. Massive Protective Services Inc. is a licensed Florida Security Agency (FDACS License B1400200).
                  </p>
                </div>
              </div>

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

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <PhoneCall className="w-3.5 h-3.5 text-[#93C5FD]" />
                  <span>Immediate Dispatch 24/7: (954) 234-7231</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                      <span>TRANSMITTING REQUEST...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Confidential Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
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
        clientName={formData.name}
      />
    </section>
  );
};
