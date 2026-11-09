'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, AlertTriangle, MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';

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

const TIMING_OPTIONS = [
  'Immediate (Within 24–48 Hours)',
  'Within 1–2 Weeks',
  'Peak Trading Season',
  'Recurring Shift / Specific Schedule',
  'Exploratory / Planning Stage',
];

export const LossPreventionConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'Loss Prevention',
    companyName: '',
    cityLocation: '',
    contactMethod: 'Phone',
    coverageTiming: '',
    message: '',
    agreedToPolicy: false,
  });

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [timingDropdownOpen, setTimingDropdownOpen] = useState(false);
  const [methodDropdownOpen, setMethodDropdownOpen] = useState(false);
  
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Loss Prevention Consultation' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id={id}
      aria-label="Request a Confidential Consultation"
      className="relative w-full bg-[#080E1A] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        {/* Section Header */}
        <div className="space-y-2">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-[1.14] tracking-tight"
          >
            Request a Confidential Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Tell us about your store and the concerns you want to address. Our team will discuss the
            proposed service, confirm availability, and prepare a scope-based quote.
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
                  A retail loss prevention coordinator from Massive Protective Services will review your store
                  details and contact you confidentially.
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
                    placeholder="Best number to reach you"
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
                    placeholder="you@company.com"
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
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full appearance-none bg-[#111B2C] border border-[#C5A880]/60 focus:border-[#C5A880] text-white px-4 py-3.5 rounded-none text-sm outline-none transition-colors pr-10 cursor-pointer"
                    >
                      <option value="Loss Prevention">Loss Prevention</option>
                      <option value="Armed Security Officers">Armed Security Officers</option>
                      <option value="Corporate Security">Corporate Security</option>
                      <option value="Concierge Security">Concierge Security</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#C5A880] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Company / store name & City / service location * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Company / store name
                  </label>
                  <input
                    type="text"
                    placeholder="Your organisation (optional)"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-white placeholder-zinc-500 px-4 py-3.5 rounded-none text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    City / service location *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCityDropdownOpen(!cityDropdownOpen);
                        setTimingDropdownOpen(false);
                        setMethodDropdownOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors"
                    >
                      <span className={formData.cityLocation ? 'text-white' : 'text-zinc-500'}>
                        {formData.cityLocation || 'Select your city'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          cityDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {cityDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50 max-h-60 overflow-y-auto">
                        {CITIES.map((city, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, cityLocation: city });
                              setCityDropdownOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{city}</span>
                            {formData.cityLocation === city && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 4: Preferred contact method & Coverage timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                    Preferred contact method
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setMethodDropdownOpen(!methodDropdownOpen);
                        setCityDropdownOpen(false);
                        setTimingDropdownOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors"
                    >
                      <span>{formData.contactMethod}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          methodDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {methodDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50">
                        {['Phone', 'Email', 'Discreet In-Person Consultation'].map((method, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, contactMethod: method });
                              setMethodDropdownOpen(false);
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
                    Coverage timing
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setTimingDropdownOpen(!timingDropdownOpen);
                        setCityDropdownOpen(false);
                        setMethodDropdownOpen(false);
                      }}
                      className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#C5A880] text-left px-4 py-3.5 rounded-none text-sm flex items-center justify-between text-white transition-colors"
                    >
                      <span className={formData.coverageTiming ? 'text-white' : 'text-zinc-500'}>
                        {formData.coverageTiming || 'Select expected start / schedule'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          timingDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {timingDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F1829] border border-[#C5A880]/30 rounded-none shadow-2xl z-50">
                        {TIMING_OPTIONS.map((timing, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setFormData({ ...formData, coverageTiming: timing });
                              setTimingDropdownOpen(false);
                            }}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-[#1A263D] cursor-pointer flex items-center justify-between"
                          >
                            <span>{timing}</span>
                            {formData.coverageTiming === timing && (
                              <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 5: Message / coverage requirements (optional) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Message / coverage requirements (optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share your location, store hours, number of sites, and the type of support you are considering. Please do not include sensitive footage or personal incident details."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#0E2445] text-white placeholder-zinc-500 px-3.5 py-2.5 rounded text-xs outline-none transition-colors resize-y min-h-[58px]"
                />
              </div>

              {/* Row 6: Consent Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="agreedToPolicy"
                  required
                  checked={formData.agreedToPolicy}
                  onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded bg-[#111B2C] border-[#1E2D4A] text-[#0E2445] focus:ring-[#0E2445] cursor-pointer accent-[#0E2445]"
                />
                <label htmlFor="agreedToPolicy" className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed cursor-pointer select-none">
                  I agree to be contacted about my request and have read the Privacy Policy. *
                </label>
              </div>

              {/* Row 7: Submit Buttons */}
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

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
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

              {/* Row 8: Footnotes */}
              <div className="pt-3 space-y-1">
                <p className="text-[11px] text-zinc-400 font-sans font-light">
                  Your request is confidential and seen only by our team. * Required fields. For an immediate emergency, call 911.
                </p>
                <p className="text-[11px] text-zinc-400 font-sans font-light">
                  Proposed service content — confirm availability and operating details
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>

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
