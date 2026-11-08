'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, Calendar, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
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
  const headline = data?.headline || 'Request Residential Security ΓÇö We Respond Within 2 Hours';
  const subtitle =
    data?.subtitle ||
    "Tell us about your property and we'll design a security programme around it.";
  const needTypes = data?.needTypes || DEFAULT_NEED_TYPES;
  const secondFieldLabel =
    data?.secondFieldLabel || data?.propertyLocationLabel || 'Property City / Location';
  const secondFieldPlaceholder =
    data?.secondFieldPlaceholder ||
    data?.propertyLocationPlaceholder ||
    'Property city or location';
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
  const submitText = data?.submitButtonText || 'REQUEST MY SECURITY PROGRAMME';
  const footerNote =
    data?.footerNote || 'FL License B1400200 - All inquiries strictly confidential';

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
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: headline || 'Service Security Consultation' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id="consultation-form"
      aria-label={headline}
      className="relative w-full bg-[#080E1A] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-white/5"
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
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Form Container */}
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
                  confidentially within 2 hours.
                </p>
              </div>
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={reset}
                  className="px-6 py-2.5 rounded-sm border border-[#C5A880]/50 text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors"
                >
                  Submit Another Inquiry
                </button>
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
              {isResidentialLayout ? (
                <>
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
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
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Property City / Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-sm text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
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
                          className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-sm text-sm outline-none transition-colors pr-10"
                        />
                        {hasCalendarIcon && (
                          <Calendar className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Dropdown 1 & Dropdown 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Dropdown 1 */}
                    <div className="space-y-2 relative">
                      <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                        {dropdown1Label}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setCoverageDropdownOpen(!coverageDropdownOpen);
                          setStartDropdownOpen(false);
                        }}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <span className={formData.coverageType ? 'text-white' : 'text-zinc-500'}>
                          {formData.coverageType || dropdown1Placeholder}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                            coverageDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {coverageDropdownOpen && (
                        <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded-sm shadow-2xl py-1 divide-y divide-white/5">
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
                                className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors cursor-pointer ${
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

                    {/* Dropdown 2 */}
                    <div className="space-y-2 relative">
                      <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                        {dropdown2Label}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setStartDropdownOpen(!startDropdownOpen);
                          setCoverageDropdownOpen(false);
                        }}
                        className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <span className={formData.coverageStart ? 'text-white' : 'text-zinc-500'}>
                          {formData.coverageStart || dropdown2Placeholder}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                            startDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {startDropdownOpen && (
                        <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded-sm shadow-2xl py-1 divide-y divide-white/5">
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
                                className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'text-[#C5A880] bg-[#142036]'
                                    : 'text-zinc-300 hover:bg-[#142036] hover:text-white'
                                }`}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#C5A880]" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        data?.messagePlaceholder ||
                        'Describe your property, household and any specific security concerns'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-sm text-sm outline-none transition-colors resize-y min-h-[110px]"
                    />
                  </div>
                </>
              ) : (
                /* Corporate / Classic Multi-Field Form */
                <>
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

                  <div className="space-y-2 relative">
                    <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                      Type of Need
                    </label>
                    <button
                      type="button"
                      onClick={() => setCoverageDropdownOpen(!coverageDropdownOpen)}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <span className="text-zinc-200">{formData.coverageType || needTypes[0]}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                          coverageDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {coverageDropdownOpen && (
                      <div className="absolute z-30 top-full mt-1 left-0 right-0 bg-[#0E1728] border border-[#1E2D4A] rounded-sm shadow-2xl py-1 divide-y divide-white/5">
                        {needTypes.map((type, idx) => {
                          const isSelected = (formData.coverageType || needTypes[0]) === type;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, coverageType: type });
                                setCoverageDropdownOpen(false);
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

                  <div className="space-y-2">
                    <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                      Brief Description
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white px-4 py-3.5 rounded-sm text-sm outline-none transition-colors resize-y min-h-[120px]"
                    />
                  </div>
                </>
              )}

              
              {errorMessage && (
                <div className="p-3.5 rounded bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-xs text-red-200 flex items-start gap-2.5">
                  <div className="font-semibold">{errorMessage}</div>
                </div>
              )}
              {/* Submit Button */}
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
                    <span>{submitText}</span>
                  )}
                </button>
              </div>

              {/* Footer Note */}
              {footerNote && (
                <div className="pt-2 text-center">
                  <p className="text-xs font-sans text-zinc-400">{footerNote}</p>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
