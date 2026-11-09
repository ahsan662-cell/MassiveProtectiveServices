'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

const CITIES = [
  'Palm Beach',
  'Delray Beach',
  'Boca Raton',
  'Fort Lauderdale',
  'Miami',
  'West Palm Beach',
  'Other South Florida Area',
];

const COVERAGE_OPTIONS = [
  '24/7 Full Lobby Coverage',
  'Daytime Front Desk (Business Hours)',
  'Evening & Overnight Posts',
  'Weekend & High-Volume Shifts',
  'Custom Coverage Schedule',
];

const CONTACT_METHODS = ['Phone', 'Email', 'Either Phone or Email'];

export const ConciergeConsultationFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceRequired: 'Concierge Security',
    buildingName: '',
    propertyCity: '',
    preferredCoverage: '',
    preferredContactMethod: '',
    message: '',
    agreedToPrivacy: false,
  });

  const [cityOpen, setCityOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);
  const [contactMethodOpen, setContactMethodOpen] = useState(false);
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Concierge Security Consultation' });

  const getPayload = () => (formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(getPayload())) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id="concierge-consultation"
      aria-label="Request a Confidential Consultation"
      className="relative w-full bg-[#0A111F] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        {/* Section Header matching Screenshot 3 */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              A PRIVATE FIRST CONVERSATION
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Request a Confidential Consultation
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
          >
            Tell us about your building, the front-of-house role and your preferred coverage. We will
            discuss suitability, availability and the operating details with you.
          </motion.p>
        </div>

        {/* Form Container */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-sm bg-[#0B1424] border border-[#0E2445]/50 p-8 sm:p-12 text-center space-y-5 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-[#0E2445]/20 border border-[#0E2445] flex items-center justify-center mx-auto text-[#93C5FD]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">Consultation Request Sent</h3>
            <p className="text-sm text-zinc-300 font-sans font-light max-w-md mx-auto leading-relaxed">
              Your property details have been securely routed. Marc Tardalo or senior command will
              respond directly to schedule a confidential building review.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full name * & Phone number * */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Full name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Phone number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email address * & Service required * */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Service required *
                </label>
                <div className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between">
                  <span>Concierge Security</span>
                  <ChevronDown className="w-4 h-4 text-[#93C5FD]" />
                </div>
              </div>
            </div>

            {/* Row 3: Building / organisation & Property city * */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Building / organisation
                </label>
                <input
                  type="text"
                  placeholder="Property or organisation name"
                  value={formData.buildingName}
                  onChange={(e) => setFormData({ ...formData, buildingName: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Property city *
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
                  onClick={() => {
                    setCityOpen(!cityOpen);
                    setCoverageOpen(false);
                    setContactMethodOpen(false);
                  }}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-left flex items-center justify-between text-white focus:outline-none focus:border-[#0E2445] transition-colors"
                >
                  <span className={formData.propertyCity ? 'text-white' : 'text-zinc-400'}>
                    {formData.propertyCity || 'Select your city'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#93C5FD] transition-transform ${
                      cityOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {cityOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B1424] border border-[#0E2445]/40 rounded-sm shadow-2xl z-30 divide-y divide-white/[0.05] overflow-hidden">
                    {CITIES.map((city) => (
                      <div
                        key={city}
                        onClick={() => {
                          setFormData({ ...formData, propertyCity: city });
                          setCityOpen(false);
                        }}
                        className="px-4 py-3 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span>{city}</span>
                        {formData.propertyCity === city && <Check className="w-3.5 h-3.5 text-[#93C5FD]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 4: Preferred coverage & Preferred contact method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferred coverage */}
              <div className="space-y-2 relative">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Preferred coverage
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setCoverageOpen(!coverageOpen);
                    setCityOpen(false);
                    setContactMethodOpen(false);
                  }}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-left flex items-center justify-between text-white focus:outline-none focus:border-[#0E2445] transition-colors"
                >
                  <span className={formData.preferredCoverage ? 'text-white' : 'text-zinc-400'}>
                    {formData.preferredCoverage || 'Select hours or discuss options'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#93C5FD] transition-transform ${
                      coverageOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {coverageOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B1424] border border-[#0E2445]/40 rounded-sm shadow-2xl z-30 divide-y divide-white/[0.05] overflow-hidden">
                    {COVERAGE_OPTIONS.map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setFormData({ ...formData, preferredCoverage: opt });
                          setCoverageOpen(false);
                        }}
                        className="px-4 py-3 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span>{opt}</span>
                        {formData.preferredCoverage === opt && (
                          <Check className="w-3.5 h-3.5 text-[#93C5FD]" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preferred contact method */}
              <div className="space-y-2 relative">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Preferred contact method
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setContactMethodOpen(!contactMethodOpen);
                    setCityOpen(false);
                    setCoverageOpen(false);
                  }}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-left flex items-center justify-between text-white focus:outline-none focus:border-[#0E2445] transition-colors"
                >
                  <span className={formData.preferredContactMethod ? 'text-white' : 'text-zinc-400'}>
                    {formData.preferredContactMethod || 'Phone or email'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#93C5FD] transition-transform ${
                      contactMethodOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {contactMethodOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B1424] border border-[#0E2445]/40 rounded-sm shadow-2xl z-30 divide-y divide-white/[0.05] overflow-hidden">
                    {CONTACT_METHODS.map((method) => (
                      <div
                        key={method}
                        onClick={() => {
                          setFormData({ ...formData, preferredContactMethod: method });
                          setContactMethodOpen(false);
                        }}
                        className="px-4 py-3 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span>{method}</span>
                        {formData.preferredContactMethod === method && (
                          <Check className="w-3.5 h-3.5 text-[#93C5FD]" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 5: Message (optional) */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-medium text-zinc-300 block">
                Message (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about visitor flow, current arrangements, preferred hours and your anticipated start date."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors resize-y"
              />
            </div>

            {/* Checkbox: I agree to be contacted... */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="privacy-agreement"
                required
                checked={formData.agreedToPrivacy}
                onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[#0E2445] bg-[#0B1424] border-white/20 rounded cursor-pointer"
              />
              <label htmlFor="privacy-agreement" className="text-xs text-zinc-300 font-sans cursor-pointer leading-relaxed">
                I agree to be contacted about this enquiry and have read the{' '}
                <Link href="/privacy" className="text-[#93C5FD] hover:underline">
                  Privacy Policy
                </Link>
                . *
              </label>
            </div>

            {/* Submit Button matching Screenshot 3 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-sm bg-[#0E2445] hover:bg-[#173A6E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(14, 36, 69, 0.35)] hover:shadow-[0_4px_32px_rgba(23, 58, 110, 0.55)] cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                  <span>Securing Transmission...</span>
                </>
              ) : (
                <span>SEND MY REQUEST ΓÇö CONFIDENTIALLY</span>
              )}
            </button>

            {/* Footnotes matching Screenshot 3 */}
            <div className="space-y-1.5 pt-2 text-center text-xs text-zinc-400 font-sans">
              <p>
                Your request is confidential and seen only by our licensed team. Please do not include
                sensitive access codes or personal resident information.
              </p>
              <p className="font-mono text-zinc-500">
                * Required fields ┬╖ Prefer to speak?{' '}
                <a href="tel:9542347231" className="text-[#93C5FD] hover:underline">
                  (954) 234-7231
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
      {/* Submission Method Selection Modal */}
      <SubmissionMethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSubmitEmail={async () => {
          const payload = typeof getPayload === 'function' ? getPayload() : formData;
          await submitForm(payload);
        }}
        onSubmitWhatsApp={() => {
          const payload = typeof getPayload === 'function' ? getPayload() : formData;
          submitViaWhatsApp(payload);
        }}
        isSubmittingEmail={isSubmitting}
        clientName={formData.fullName}
      />
    </section>
  );
};

export default ConciergeConsultationFormSection;
