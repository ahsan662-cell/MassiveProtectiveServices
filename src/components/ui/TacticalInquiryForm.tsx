'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Shield, Lock, PhoneCall, Loader2, Calendar, MessageCircle, ChevronDown } from 'lucide-react';
import { useSecureFormSubmit } from '@/hooks/useSecureFormSubmit';
import { SubmissionMethodModal } from './SubmissionMethodModal';

interface TacticalInquiryFormProps {
  id?: string;
  servicePreset?: string;
  locationPreset?: string;
  countyPreset?: 'Palm Beach' | 'Broward' | 'Miami-Dade' | 'Visiting Principal';
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  submitButtonText?: string;
  footerNote?: string;
  hideHeader?: boolean;
  className?: string;
}

export const TacticalInquiryForm: React.FC<TacticalInquiryFormProps> = ({
  id = 'consultation-form',
  servicePreset = 'Executive Protection',
  locationPreset,
  countyPreset,
  title = 'Request a Confidential Security Consultation',
  subtitle = 'All inquiries are encrypted and handled directly by MPS licensed command directors. Non-disclosure agreements signed as standard.',
  eyebrow = 'ENCRYPTED INTAKE · FL LICENSE B1400200',
  submitButtonText = 'Request Confidential Consultation',
  footerNote,
  hideHeader = false,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const {
    form,
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    idempotencyKey,
    isMethodModalOpen,
    setIsMethodModalOpen,
    submitViaWhatsApp,
    submitViaEmail,
    requestSubmissionChoice,
    resetForm,
  } = useSecureFormSubmit({
    formSource: title || 'Tactical Consultation',
    defaultValues: {
      serviceType: (servicePreset as any) || 'Executive Protection',
      locationPreset: locationPreset || '',
      county:
        countyPreset ||
        (locationPreset?.toLowerCase().includes('miami')
          ? 'Miami-Dade'
          : locationPreset?.toLowerCase().includes('lauderdale') ||
            locationPreset?.toLowerCase().includes('hillsboro') ||
            locationPreset?.toLowerCase().includes('lighthouse')
          ? 'Broward'
          : locationPreset?.toLowerCase().includes('tampa') ||
            locationPreset?.toLowerCase().includes('orlando') ||
            locationPreset?.toLowerCase().includes('sarasota') ||
            locationPreset?.toLowerCase().includes('jacksonville') ||
            locationPreset?.toLowerCase().includes('naples')
          ? 'Visiting Principal'
          : 'Palm Beach'),
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  const currentValues = form.watch();

  return (
    <div id={id} className={`relative w-full max-w-4xl mx-auto scroll-mt-24 ${className}`}>
      {/* Compact Header */}
      {!hideHeader && (
        <div className="space-y-1 mb-4 sm:mb-5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
            <Shield className="w-3.5 h-3.5 stroke-[1.8]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-white leading-tight tracking-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-xs sm:text-[13px] text-zinc-300 font-sans font-light leading-snug max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Success State Confirmation */}
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0C162A] border border-[#0E2445]/40 rounded-lg p-6 sm:p-8 text-center space-y-4 shadow-xl"
        >
          <div className="w-12 h-12 rounded-full bg-[#0E2445] border border-[#3B82F6]/50 flex items-center justify-center mx-auto text-[#93C5FD]">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif text-white">
              Transmission Encrypted &amp; Received
            </h3>
            <p className="text-[11px] font-mono text-[#93C5FD]">
              IDEMPOTENCY VERIFIED · KEY: {idempotencyKey.slice(0, 8)}...
            </p>
          </div>

          <p className="text-zinc-300 font-light max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
            Your inquiry has been routed directly to our operations director at Delray Beach headquarters. We respond confidentially within 2 hours.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 rounded text-xs font-mono uppercase tracking-wider text-[#93C5FD] border border-[#0E2445] hover:bg-[#0E2445]/30 transition-colors cursor-pointer"
            >
              Submit Another Transmission
            </button>
          </div>
        </motion.div>
      ) : (
        /* Active Form (Compact & Clean) */
        <motion.form
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={requestSubmissionChoice}
          noValidate
          className="space-y-3 sm:space-y-3.5 bg-[#0B1426]/90 border border-white/10 rounded-lg p-4 sm:p-6 lg:p-7 shadow-xl"
        >
          {/* Timeout / Network Fallback Banner */}
          {errorMessage && (
            <div className="p-3 rounded bg-red-950/40 border border-red-700/60 text-white flex items-start gap-2.5 text-xs">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-semibold text-red-300">Encrypted Transmission Alert</p>
                <p className="text-zinc-300">{errorMessage}</p>
                {isTimedOut && (
                  <p className="pt-1">
                    <a
                      href="tel:9542347231"
                      className="font-mono text-[#93C5FD] hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Direct Priority Dispatch: (954) 234-7231</span>
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Row 1: Full Name, Direct Phone, Email Address (3 columns on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-[11px] font-sans text-zinc-300">
                Full Name <span className="text-[#93C5FD]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                disabled={isSubmitting}
                placeholder="Your full name"
                {...register('fullName')}
                className={`w-full bg-[#121E36] border ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#3B82F6]'
                } rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.fullName && (
                <p className="text-[10px] font-sans text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-[11px] font-sans text-zinc-300">
                Direct Phone <span className="text-[#93C5FD]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                disabled={isSubmitting}
                placeholder="(954) 000-0000"
                {...register('phone')}
                className={`w-full bg-[#121E36] border ${
                  errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#3B82F6]'
                } rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.phone && (
                <p className="text-[10px] font-sans text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-[11px] font-sans text-zinc-300">
                Email Address <span className="text-[#93C5FD]">*</span>
              </label>
              <input
                id="email"
                type="email"
                disabled={isSubmitting}
                placeholder="principal@domain.com"
                {...register('email')}
                className={`w-full bg-[#121E36] border ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#3B82F6]'
                } rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-60`}
              />
              {errors.email && (
                <p className="text-[10px] font-sans text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Jurisdiction, Service Requested, Deployment Date (3 columns on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label htmlFor="county" className="block text-[11px] font-sans text-zinc-300">
                Territory / County <span className="text-[#93C5FD]">*</span>
              </label>
              <select
                id="county"
                disabled={isSubmitting}
                {...register('county')}
                className="w-full bg-[#121E36] border border-white/10 focus:border-[#3B82F6] rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer disabled:opacity-60"
              >
                <option value="Palm Beach">Palm Beach County</option>
                <option value="Broward">Broward County</option>
                <option value="Miami-Dade">Miami-Dade County</option>
                <option value="Visiting Principal">Visiting Principal / Statewide Transit</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="serviceType" className="block text-[11px] font-sans text-zinc-300">
                Service Requested <span className="text-[#93C5FD]">*</span>
              </label>
              <select
                id="serviceType"
                disabled={isSubmitting}
                {...register('serviceType')}
                className="w-full bg-[#121E36] border border-white/10 focus:border-[#3B82F6] rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors cursor-pointer disabled:opacity-60"
              >
                <option value="Executive Protection">Executive Protection (Close Detail)</option>
                <option value="Estate Security">Estate &amp; Residential Security</option>
                <option value="VIP/Celebrity">VIP &amp; Celebrity Protection</option>
                <option value="Event Security">Gala &amp; Event Security</option>
                <option value="Armed Escort">Airport &amp; Tarmac Escort</option>
                <option value="Armed Security Officers">Armed Security Officers (Class G)</option>
                <option value="Concierge Security">Concierge &amp; Lobby Security</option>
                <option value="Corporate Security">Corporate Security</option>
                <option value="Loss Prevention">Loss Prevention</option>
                <option value="Mobile Patrol">Mobile Patrol Services</option>
                <option value="School Security">School &amp; Campus Security</option>
                <option value="Other">Custom High-Threat Requirement</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="preferredDate" className="block text-[11px] font-sans text-zinc-300">
                Timeline / Start Date
              </label>
              <div className="relative">
                <input
                  id="preferredDate"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Immediate or mm/dd/yyyy"
                  {...register('preferredDate')}
                  className="w-full bg-[#121E36] border border-white/10 focus:border-[#3B82F6] rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors pr-8 disabled:opacity-60"
                />
                <Calendar className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Scope / Message Textarea (compact) */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-[11px] font-sans text-zinc-300">
              Operational Scope &amp; Requirements <span className="text-zinc-500">(Strictly Confidential)</span>
            </label>
            <textarea
              id="message"
              rows={2}
              disabled={isSubmitting}
              placeholder="Describe your security needs, schedule, or property layout — protected under Florida Chapter 493 privacy."
              {...register('message')}
              className="w-full bg-[#121E36] border border-white/10 focus:border-[#3B82F6] rounded px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-y min-h-[58px] disabled:opacity-60"
            />
          </div>

          {/* Checkboxes: NDA & Driver (Compact inline) */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1 border-t border-white/[0.06] text-[11px] text-zinc-300">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register('ndaRequested')}
                className="w-3.5 h-3.5 rounded border-white/20 text-[#3B82F6] focus:ring-0 bg-[#121E36] cursor-pointer"
              />
              <span className="group-hover:text-white transition-colors flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#93C5FD]" />
                <span>Require mutual NDA prior to operational briefing</span>
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register('requiresArmedDriver')}
                className="w-3.5 h-3.5 rounded border-white/20 text-[#3B82F6] focus:ring-0 bg-[#121E36] cursor-pointer"
              />
              <span className="group-hover:text-white transition-colors">
                Include licensed armed driver / motorcade escort
              </span>
            </label>
          </div>

          {/* Submit Action Buttons with Email and WhatsApp Options */}
          <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-5 rounded bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#3B82F6]/30 active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Securing Transmission...</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>{submitButtonText}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </>
              )}
            </button>
          </div>

          {/* Footer Statutory Disclosures */}
          <div className="pt-1 text-center">
            <p className="text-[11px] font-mono text-zinc-400">
              {footerNote || 'FL License B1400200 · Class G Armed Officers · Chapter 493, Florida Statutes'}
            </p>
          </div>
        </motion.form>
      )}

      {/* Submission Method Selection Modal */}
      <SubmissionMethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSubmitEmail={async () => {
          await submitViaEmail();
        }}
        onSubmitWhatsApp={() => {
          submitViaWhatsApp(currentValues);
        }}
        isSubmittingEmail={isSubmitting}
        clientName={currentValues.fullName}
        sourceTitle={title}
      />
    </div>
  );
};

export default TacticalInquiryForm;
