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
  'Other South Florida Location',
];

const PROPERTY_TYPES = [
  'Commercial Property',
  'Residential Community',
  'Retail & Mixed-Use',
  'Unoccupied / Vacant Property',
  'Industrial & Logistics Park',
  'Luxury Estate / Private Grounds',
  'Other',
];

const START_DATES = [
  'Immediate (Within 24–48 Hours)',
  'Within 1–2 Weeks',
  'Next Month',
  'Overnight / Weekend Shifts Only',
  'Planning & Budgeting Phase',
];

const CONTACT_METHODS = ['Phone', 'Email', 'Discreet In-Person Consultation'];

const SERVICES_LIST = [
  'Mobile Patrol',
  'Armed Security Officers',
  'Estate Security',
  'Loss Prevention',
  'Corporate Security',
  'Event Security',
];

export const MobilePatrolConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceOfInterest: 'Mobile Patrol',
    propertyCity: '',
    propertyType: '',
    contactMethod: 'Phone',
    desiredStartDate: '',
    message: '',
    agreedToPolicy: false,
  });

  const [cityOpen, setCityOpen] = useState(false);
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [startDateOpen, setStartDateOpen] = useState(false);
  
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'Mobile Patrol Consultation' });

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
            Request a Confidential Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Tell us about your property, your concerns, and the checks you would like to discuss.
            Confirm mobile patrol availability and operating details with the team before making plans.
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
            <div className="py-14 text-center space-y-6 bg-[#0E1728] border border-white/10 rounded-none p-8">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Consultation Request Received
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  A mobile patrol operations manager from Massive Protective Services will review your property
                  parameters and contact you confidentially.
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
              {/* Row 1: Full name * & Phone number * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
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

              {/* Row 2: Email address * & Service of interest * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Service of interest *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.serviceOfInterest}
                      onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
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

              {/* Row 3: Property city * & Property type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Property city *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCityOpen(!cityOpen);
                        setPropertyTypeOpen(false);
                        setMethodOpen(false);
                        setStartDateOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.propertyCity ? 'text-white' : 'text-zinc-500'}>
                        {formData.propertyCity || 'Select your city'}
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
                              setFormData({ ...formData, propertyCity: city });
                              setCityOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{city}</span>
                            {formData.propertyCity === city && (
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
                    Property type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setPropertyTypeOpen(!propertyTypeOpen);
                        setCityOpen(false);
                        setMethodOpen(false);
                        setStartDateOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.propertyType ? 'text-white' : 'text-zinc-500'}>
                        {formData.propertyType || 'Select property type'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          propertyTypeOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {propertyTypeOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50 max-h-60 overflow-y-auto">
                        {PROPERTY_TYPES.map((type, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, propertyType: type });
                              setPropertyTypeOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{type}</span>
                            {formData.propertyType === type && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 4: Preferred contact method & Desired start date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        setPropertyTypeOpen(false);
                        setStartDateOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span>{formData.contactMethod}</span>
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
                              setFormData({ ...formData, contactMethod: method });
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

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Desired start date
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setStartDateOpen(!startDateOpen);
                        setCityOpen(false);
                        setPropertyTypeOpen(false);
                        setMethodOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors cursor-pointer"
                    >
                      <span className={formData.desiredStartDate ? 'text-white' : 'text-zinc-500'}>
                        {formData.desiredStartDate || 'Select a date'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          startDateOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {startDateOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50">
                        {START_DATES.map((date, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, desiredStartDate: date });
                              setStartDateOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{date}</span>
                            {formData.desiredStartDate === date && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* City options micro-line (Screen 10 Reference) */}
              <div className="pt-0.5">
                <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
                  City options: Miami · Miami Beach · Fort Lauderdale · Palm Beach · West Palm Beach · Boca Raton · Delray Beach · Aventura · Sunny Isles Beach · Jupiter
                </p>
              </div>

              {/* Message / coverage requirements (optional) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Share the property location, operating hours, access considerations, and proposed patrol priorities. Please do not include gate codes or other sensitive access details."
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
                  I agree to be contacted about this request. I have read the Privacy Policy.
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

              {/* Footnote with Lock Icon (Screen 10 Reference) */}
              <div className="pt-2 flex items-start gap-2 text-zinc-400">
                <Lock className="w-3.5 h-3.5 mt-0.5 text-zinc-400 shrink-0" />
                <p className="text-xs font-sans font-light leading-relaxed">
                  Your request is confidential and seen only by our licensed team. Submission does not confirm service availability or an engagement. For an emergency, call 911.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
