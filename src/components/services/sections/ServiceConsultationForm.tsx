'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, Calendar, MessageCircle, Mail } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { SecurityCaptcha } from '@/components/ui/SecurityCaptcha';
import { MPS_PHONE_DISPLAY } from '@/utils/whatsapp';
import { ServiceFormData } from '../types';

interface Props {
  data?: ServiceFormData;
}

const DEFAULT_NEED_TYPES = [
  'Armed Estate Officers',
  'Access Control & Gate Management',
  'Overnight Property Patrol',
  'Private Event Security',
  'Seasonal Residence Protection',
  'Other',
];

export const ServiceConsultationForm: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();

  const eyebrow = data?.eyebrow || 'A PRIVATE FIRST CONVERSATION';
  const headline = data?.headline || 'Request Residential Security — We Respond Within 2 Hours';
  const subtitle =
    data?.subtitle ||
    "Tell us about your property and we'll design a customized security programme around it.";
  const needTypes = data?.needTypes || DEFAULT_NEED_TYPES;
  const secondFieldLabel =
    data?.secondFieldLabel || data?.propertyLocationLabel || 'Property City / Location';
  const secondFieldPlaceholder =
    data?.secondFieldPlaceholder ||
    data?.propertyLocationPlaceholder ||
    'City or territory';
  const hasCalendarIcon = data?.secondFieldIcon === 'calendar';

  const dropdown1Label = data?.dropdown1Label || 'Coverage Type';
  const dropdown1Placeholder = data?.dropdown1Placeholder || 'Select coverage type';
  const dropdown1Options = data?.needTypes || DEFAULT_NEED_TYPES;

  const dropdown2Label = data?.dropdown2Label || 'Coverage Start';
  const dropdown2Placeholder = data?.dropdown2Placeholder || 'Select start date';
  const dropdown2Options =
    data?.dropdown2Options ||
    data?.coverageStartOptions || [
      'Immediately',
      'Within 2 Weeks',
      'Planning Ahead',
      'Unsure',
    ];

  const defaultNeed = data?.defaultNeed || '';
  const defaultStart = data?.defaultCoverageStart || '';
  const submitText = data?.submitButtonText || 'REQUEST CONFIDENTIAL CONSULTATION';
  const footerNote =
    data?.footerNote || 'FL License B1400200 · All inquiries strictly confidential · NDA as standard';

  const isResidentialLayout = Boolean(
    data?.coverageStartOptions ||
      data?.propertyLocationLabel ||
      data?.dropdown2Options ||
      data?.secondFieldLabel
  );

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    jobTitle: '',
    propertyLocation: '',
    coverageType: defaultNeed,
    coverageStart: defaultStart,
    message: '',
  });

  const [coverageDropdownOpen, setCoverageDropdownOpen] = useState(false);
  const [startDropdownOpen, setStartDropdownOpen] = useState(false);

  const {
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    fieldErrors,
    isMethodModalOpen,
    setIsMethodModalOpen,
    isHumanVerified,
    setIsHumanVerified,
    validate,
    submitForm,
    submitViaWhatsApp,
    reset,
  } = useConsultationSubmit({
    formSource: headline || 'Service Security Consultation',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      setCoverageDropdownOpen(false);
      setStartDropdownOpen(false);
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id="consultation-form"
      aria-label={headline}
      className="relative w-full bg-[#080E1A] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="space-y-1 mb-4 sm:mb-5">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-[13px] text-zinc-300 font-sans font-light leading-snug max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Compact Form Container */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {isSuccess ? (
            <div className="py-8 sm:py-10 text-center space-y-4 bg-[#0E1728] border border-white/10 rounded-lg p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[#0E2445] border border-[#3B82F6]/50 text-[#93C5FD] flex items-center justify-center mx-auto shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif text-white">
                  Consultation Request Received
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  A senior protective coordinator from Massive Protective Services will contact you confidentially within 2 hours.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="px-5 py-2 rounded text-xs font-mono uppercase tracking-wider text-[#93C5FD] border border-[#0E2445] hover:bg-[#0E2445]/30 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
                <a
                  href={`tel:${MPS_PHONE_DISPLAY.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#93C5FD] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Immediate dispatch? Call {MPS_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-3.5">
              {isResidentialLayout ? (
                <>
                  {/* Row 1: Full Name, Phone, Email (3 columns on md+) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[11px] font-sans text-zinc-300">
                        <span>Full Name <span className="text-[#93C5FD]">*</span></span>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#111B2C] border ${
                          fieldErrors.fullName ? 'border-red-500' : 'border-[#1E2D4A] focus:border-[#3B82F6]'
                        } text-white placeholder-zinc-500 px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors`}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-[10px] text-red-400 font-mono">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[11px] font-sans text-zinc-300">
                        <span>Phone Number <span className="text-[#93C5FD]">*</span></span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Direct phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#111B2C] border ${
                          fieldErrors.phone ? 'border-red-500' : 'border-[#1E2D4A] focus:border-[#3B82F6]'
                        } text-white placeholder-zinc-500 px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors`}
                      />
                      {fieldErrors.phone && (
                        <p className="text-[10px] text-red-400 font-mono">{fieldErrors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[11px] font-sans text-zinc-300">
                        <span>Email Address <span className="text-[#93C5FD]">*</span></span>
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#111B2C] border ${
                          fieldErrors.email ? 'border-red-500' : 'border-[#1E2D4A] focus:border-[#3B82F6]'
                        } text-white placeholder-zinc-500 px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[10px] text-red-400 font-mono">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Location/City, Coverage Type Dropdown, Coverage Start Dropdown (3 columns on md+) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-sans text-zinc-300">
                        {secondFieldLabel}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={secondFieldPlaceholder}
                          value={formData.propertyLocation}
                          onChange={(e) =>
                            setFormData({ ...formData, propertyLocation: e.target.value })
                          }
                          className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white placeholder-zinc-500 px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors pr-8"
                        />
                        {hasCalendarIcon && (
                          <Calendar className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        )}
                      </div>
                    </div>

                    {/* Coverage Type Dropdown */}
                    <div className="space-y-1 relative">
                      <label className="block text-[11px] font-sans text-zinc-300">
                        {dropdown1Label}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setCoverageDropdownOpen(!coverageDropdownOpen);
                          setStartDropdownOpen(false);
                        }}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <span className={`truncate ${formData.coverageType ? 'text-white' : 'text-zinc-500'}`}>
                          {formData.coverageType || dropdown1Placeholder}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                            coverageDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {coverageDropdownOpen && (
                        <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded shadow-2xl py-1 divide-y divide-white/5 max-h-48 overflow-y-auto">
                          {dropdown1Options.map((type, idx) => {
                            const isSelected = formData.coverageType === type;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, coverageType: type });
                                  setCoverageDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'text-[#93C5FD] bg-[#142036]'
                                    : 'text-zinc-300 hover:bg-[#142036] hover:text-white'
                                }`}
                              >
                                <span className="truncate">{type}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#93C5FD] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Coverage Start Dropdown */}
                    <div className="space-y-1 relative">
                      <label className="block text-[11px] font-sans text-zinc-300">
                        {dropdown2Label}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setStartDropdownOpen(!startDropdownOpen);
                          setCoverageDropdownOpen(false);
                        }}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <span className={`truncate ${formData.coverageStart ? 'text-white' : 'text-zinc-500'}`}>
                          {formData.coverageStart || dropdown2Placeholder}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                            startDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {startDropdownOpen && (
                        <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded shadow-2xl py-1 divide-y divide-white/5 max-h-48 overflow-y-auto">
                          {dropdown2Options.map((opt, idx) => {
                            const isSelected = formData.coverageStart === opt;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, coverageStart: opt });
                                  setStartDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'text-[#93C5FD] bg-[#142036]'
                                    : 'text-zinc-300 hover:bg-[#142036] hover:text-white'
                                }`}
                              >
                                <span className="truncate">{opt}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#93C5FD] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Compact Message Textarea */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-sans text-zinc-300">
                      Message / Special Directives <span className="text-zinc-500">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder={
                        data?.messagePlaceholder ||
                        'Briefly describe your property layout, household or specific protection requirements...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white placeholder-zinc-500 px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors resize-y min-h-[58px]"
                    />
                  </div>
                </>
              ) : (
                /* Corporate / Classic Layout (Compact 3-column) */
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <span className="block text-[11px] font-sans text-zinc-300">Full Name *</span>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[11px] font-sans text-zinc-300">Organization / Company</span>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[11px] font-sans text-zinc-300">Job Title</span>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <span className="block text-[11px] font-sans text-zinc-300">Direct Phone *</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[11px] font-sans text-zinc-300">Email Address *</span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1 relative">
                      <span className="block text-[11px] font-sans text-zinc-300">Type of Need</span>
                      <button
                        type="button"
                        onClick={() => setCoverageDropdownOpen(!coverageDropdownOpen)}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <span className="truncate text-zinc-200">{formData.coverageType || needTypes[0]}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      </button>

                      {coverageDropdownOpen && (
                        <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded shadow-2xl py-1 divide-y divide-white/5 max-h-48 overflow-y-auto">
                          {needTypes.map((type, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, coverageType: type });
                                setCoverageDropdownOpen(false);
                              }}
                              className="w-full px-3 py-2 text-left text-xs sm:text-sm text-zinc-300 hover:bg-[#142036] hover:text-white"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-[11px] font-sans text-zinc-300">Brief Description</span>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] text-white px-3 py-2 rounded text-xs sm:text-sm outline-none transition-colors resize-y min-h-[58px]"
                    />
                  </div>
                </>
              )}

              {errorMessage && (
                <div className="p-2.5 rounded bg-red-950/40 border border-red-700/60 text-xs text-red-200">
                  <span className="font-semibold">{errorMessage}</span>
                </div>
              )}

              {/* Human Verification Security Captcha */}
              <div className="pt-1">
                <SecurityCaptcha
                  isVerified={isHumanVerified}
                  onVerify={(v) => setIsHumanVerified(v)}
                />
              </div>

              {/* Row 4: Submit Actions & Dual Channel Selector */}
              <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                {/* Primary Submit Button: opens submission choice dialog */}
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
                      <span>{submitText}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </>
                  )}
                </button>

              </div>

              {/* Footer Statutory Note */}
              <div className="pt-1 text-center">
                <p className="text-[11px] font-sans text-zinc-400 tracking-wide">
                  {footerNote}
                </p>
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
          submitViaWhatsApp(formData, headline);
        }}
        isSubmittingEmail={isSubmitting}
        clientName={formData.fullName}
        sourceTitle={headline}
        isHumanVerified={isHumanVerified}
        onVerifyHuman={setIsHumanVerified}
      />
    </section>
  );
};

export default ServiceConsultationForm;
