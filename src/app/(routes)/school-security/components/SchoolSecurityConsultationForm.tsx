'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

interface Props {
  id?: string;
}

const CITIES = [
  'Miami',
  'Miami Beach',
  'Fort Lauderdale',
  'Palm Beach',
  'West Palm Beach',
  'Boca Raton',
  'Delray Beach',
  'Aventura',
  'Sunny Isles Beach',
  'Jupiter',
  'Other South Florida Campus',
];

const SERVICES_LIST = [
  'School Security',
  'Unarmed Security Guards',
  'Event Security',
  'Risk Assessment & Consulting',
  'Executive Protection',
];

const CONTACT_METHODS = [
  'Select phone or email',
  'Phone',
  'Email',
  'In-Person Administrative Meeting',
];

const COVERAGE_OPTIONS = [
  'Select an option',
  'Campus-day support',
  'Arrival & dismissal periods',
  'Events & temporary needs',
  'Comprehensive campus review',
  'Other campus requirement',
];

export const SchoolSecurityConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'School Security',
    schoolName: '',
    role: '',
    city: '',
    contactMethod: '',
    coverageOption: '',
    proposedDatesHours: '',
    message: '',
    agreedToPolicy: false,
  });

  const [cityOpen, setCityOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'School Security Consultation' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id={id}
      aria-label="Request a Confidential Consultation"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            Request a Confidential Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Tell us about your school and the support you are considering. We will review the
            enquiry to determine whether a proposed assignment can be considered. Availability,
            school eligibility and staffing remain subject to confirmation.
          </motion.p>

          <p className="text-xs text-zinc-400 font-sans font-light pt-1">* Required fields</p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          {isSuccess ? (
            <div className="py-14 text-center space-y-6 bg-[#0E1728] border border-white/10 rounded-none p-8">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Consultation Request Received
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  A school security operations director from Massive Protective Services will review
                  your campus requirements and contact you confidentially.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:9542347231"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A880] hover:text-[#D4AF37] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Immediate administrative support required? Call (954) 234-7231</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full name * & Phone number * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(000) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email address * & Service required * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@school.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Service required *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceRequired: e.target.value })
                      }
                      className="w-full appearance-none bg-[#111B2C] border border-[#C5A880] focus:border-[#D4AF37] text-white px-4 py-3.5 rounded-none text-sm outline-none transition-colors pr-10 cursor-pointer"
                    >
                      {SERVICES_LIST.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-[#0E1728] text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#C5A880] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: School / organisation * & Your role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    School / organisation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="School or organisation name"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Your role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. School administrator"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: City / area * & Preferred contact method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    City / area *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCityOpen(!cityOpen);
                        setMethodOpen(false);
                        setCoverageOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.city ? 'text-white' : 'text-zinc-500'}>
                        {formData.city || 'Select your city'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          cityOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {cityOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50 max-h-60 overflow-y-auto">
                        {CITIES.map((city, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, city });
                              setCityOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{city}</span>
                            {formData.city === city && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Preferred contact method
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setMethodOpen(!methodOpen);
                        setCityOpen(false);
                        setCoverageOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.contactMethod ? 'text-white' : 'text-zinc-500'}>
                        {formData.contactMethod || 'Select phone or email'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          methodOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {methodOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50">
                        {CONTACT_METHODS.map((method, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                contactMethod: method === 'Select phone or email' ? '' : method,
                              });
                              setMethodOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{method}</span>
                            {formData.contactMethod === method && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 5: Coverage being considered & Proposed dates / hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Coverage being considered
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCoverageOpen(!coverageOpen);
                        setCityOpen(false);
                        setMethodOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.coverageOption ? 'text-white' : 'text-zinc-500'}>
                        {formData.coverageOption || 'Select an option'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          coverageOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {coverageOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50">
                        {COVERAGE_OPTIONS.map((opt, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                coverageOption: opt === 'Select an option' ? '' : opt,
                              });
                              setCoverageOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{opt}</span>
                            {formData.coverageOption === opt && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Proposed dates / hours
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. School days, 7 am–4 pm"
                    value={formData.proposedDatesHours}
                    onChange={(e) =>
                      setFormData({ ...formData, proposedDatesHours: e.target.value })
                    }
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message (optional) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Share general campus needs, proposed hours and any questions. Please do not include student names, confidential records or sensitive security details."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors resize-y min-h-[110px]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="agreedToPolicy"
                  required
                  checked={formData.agreedToPolicy}
                  onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded-none bg-[#111B2C] border-[#1E2D4A] text-[#C5A880] focus:ring-[#C5A880] cursor-pointer accent-[#C5A880]"
                />
                <label
                  htmlFor="agreedToPolicy"
                  className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed cursor-pointer select-none"
                >
                  I agree to be contacted about this enquiry and have read the Privacy Policy.
                  Submitting this form does not confirm service availability or a booking.
                </label>
              </div>

              {/* Full-width Gold Submit Button */}
              
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
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-none bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                      <span>SUBMITTING CONFIDENTIAL REQUEST...</span>
                    </>
                  ) : (
                    <span>SEND MY REQUEST — CONFIDENTIALLY</span>
                  )}
                </button>
              </div>

              {/* Footnote */}
              <div className="pt-2">
                <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
                  Your request is confidential and seen only by our licensed team. This form is not
                  monitored for emergencies. For an immediate emergency, call 911.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
