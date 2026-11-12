'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

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

const SERVICES_LIST = [
  'Unarmed Security Guards',
  'Front-of-House Concierge Security',
  'Commercial Property & Access Control',
  'Plainclothes Security Officer',
  'Armed Security Officers',
  'Mobile Patrol',
];

const CONTACT_METHODS = ['Phone', 'Email', 'Discreet In-Person Consultation'];

const SCHEDULE_OPTIONS = [
  'Select shifts or discuss with us',
  '8-Hour Shifts',
  '12-Hour Shifts',
  'Staffed 24/7 Post (Multiple Shifts)',
  'Opening & Closing Support',
  'Weekend / Evening Coverage Only',
  'Flexible / Discuss with us',
];

const START_DATES = [
  'Select a date',
  'Immediate (Within 24–48 Hours)',
  'Within 1–2 Weeks',
  'Within 1 Month',
  'Planning & Budgeting Phase',
];

export const UnarmedSecurityConsultationForm: React.FC<Props> = ({ id = 'consultation-form' }) => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'Unarmed Security Guards',
    contactMethod: 'Phone',
    city: '',
    schedule: '',
    startDate: '',
    message: '',
    agreedToPolicy: false,
  });

  const [serviceOpen, setServiceOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [startDateOpen, setStartDateOpen] = useState(false);

  
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({ formSource: 'Unarmed Security Consultation' });

  const getPayload = () => (formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(getPayload())) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      id={id}
      aria-label="Request a Confidential Consultation"
      className="relative w-full bg-[#080E1A] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4">
        {/* Section Header */}
        <div className="space-y-3">
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
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Tell us what you need protected. A licensed specialist responds within 24 hours.
          </motion.p>
        </div>

        {/* Main Form Body */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0F1829] border border-[#0E2445]/50 p-8 sm:p-12 text-center space-y-4"
          >
            <div className="w-16 h-16 bg-[#0E2445]/20 text-[#93C5FD] mx-auto flex items-center justify-center rounded-full">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Consultation Request Received</h3>
            <p className="text-zinc-300 text-sm max-w-lg mx-auto">
              Thank you, {formData.fullName}. A licensed Massive Protective Services security coordinator will review your requirements and reach out within 24 hours.
            </p>
            
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
              onClick={() => {
                reset();
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  serviceRequired: 'Unarmed Security Guards',
                  contactMethod: 'Phone',
                  city: '',
                  schedule: '',
                  startDate: '',
                  message: '',
                  agreedToPolicy: false,
                });
              }}
              className="mt-4 px-6 py-2.5 border border-[#0E2445] text-[#93C5FD] hover:bg-[#0E2445] hover:text-[#0A111F] text-xs font-mono tracking-widest uppercase transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
            {/* Row 1: Full name & Phone number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Full name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Phone number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email address & Service required */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email address"
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 rounded-none transition-colors"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Service required
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setServiceOpen(!serviceOpen);
                    setMethodOpen(false);
                    setCityOpen(false);
                    setScheduleOpen(false);
                    setStartDateOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className="truncate">{formData.serviceRequired}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#93C5FD] transition-transform ${
                      serviceOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {serviceOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-[#0E2445]/40 shadow-2xl max-h-56 overflow-y-auto">
                    {SERVICES_LIST.map((srv, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, serviceRequired: srv });
                          setServiceOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.serviceRequired === srv
                            ? 'bg-[#0E2445]/20 text-[#93C5FD]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {srv}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: Preferred contact method & City / area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Preferred contact method
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMethodOpen(!methodOpen);
                    setServiceOpen(false);
                    setCityOpen(false);
                    setScheduleOpen(false);
                    setStartDateOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className="truncate">{formData.contactMethod || 'Phone'}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      methodOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {methodOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-white/15 shadow-2xl">
                    {CONTACT_METHODS.map((m, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, contactMethod: m });
                          setMethodOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.contactMethod === m
                            ? 'bg-[#0E2445]/20 text-[#93C5FD]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  City / area
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setCityOpen(!cityOpen);
                    setServiceOpen(false);
                    setMethodOpen(false);
                    setScheduleOpen(false);
                    setStartDateOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className={formData.city ? 'text-white truncate' : 'text-zinc-500 truncate'}>
                    {formData.city || 'Select your city or area'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      cityOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {cityOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-white/15 shadow-2xl max-h-56 overflow-y-auto">
                    {CITIES.map((c, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, city: c });
                          setCityOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.city === c
                            ? 'bg-[#0E2445]/20 text-[#93C5FD]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* City Options helper note */}
            <p className="text-xs sm:text-[13px] font-sans font-light text-zinc-400 pt-0 leading-relaxed">
              City options: Miami · Miami Beach · Fort Lauderdale · Palm Beach · West Palm Beach · Boca Raton · Delray Beach · Aventura · Sunny Isles Beach · Jupiter
            </p>

            {/* Row 4: Coverage schedule & Preferred start date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Coverage schedule (optional)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setScheduleOpen(!scheduleOpen);
                    setServiceOpen(false);
                    setMethodOpen(false);
                    setCityOpen(false);
                    setStartDateOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className={formData.schedule ? 'text-white truncate' : 'text-zinc-500 truncate'}>
                    {formData.schedule || 'Select shifts or discuss with us'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      scheduleOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {scheduleOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-white/15 shadow-2xl max-h-56 overflow-y-auto">
                    {SCHEDULE_OPTIONS.map((sch, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, schedule: sch === 'Select shifts or discuss with us' ? '' : sch });
                          setScheduleOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.schedule === sch
                            ? 'bg-[#0E2445]/20 text-[#93C5FD]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {sch}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 relative">
                <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                  Preferred start date (optional)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setStartDateOpen(!startDateOpen);
                    setServiceOpen(false);
                    setMethodOpen(false);
                    setCityOpen(false);
                    setScheduleOpen(false);
                  }}
                  className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white flex items-center justify-between rounded-none transition-colors text-left"
                >
                  <span className={formData.startDate ? 'text-white truncate' : 'text-zinc-500 truncate'}>
                    {formData.startDate || 'Select a date'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      startDateOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {startDateOpen && (
                  <div className="absolute z-30 left-0 right-0 mt-1 bg-[#101828] border border-white/15 shadow-2xl">
                    {START_DATES.map((sd, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData({ ...formData, startDate: sd === 'Select a date' ? '' : sd });
                          setStartDateOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                          formData.startDate === sd
                            ? 'bg-[#0E2445]/20 text-[#93C5FD]'
                            : 'text-zinc-200 hover:bg-white/5'
                        }`}
                      >
                        {sd}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 5: Message (optional) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-[13px] font-sans text-zinc-300">
                Message (optional)
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your property, hours, access points, and security concerns."
                className="w-full bg-[#111A2C]/80 border border-white/10 focus:border-[#0E2445] focus:outline-none px-3 py-2 sm:py-2.5 text-sm text-white placeholder-zinc-500 rounded-none resize-none transition-colors"
              />
            </div>

            {/* Row 6: Agreement Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="agreedToPolicy"
                checked={formData.agreedToPolicy}
                onChange={(e) => setFormData({ ...formData, agreedToPolicy: e.target.checked })}
                className="mt-1 h-4 w-4 rounded-none border-white/20 bg-[#111A2C] text-[#93C5FD] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#0E2445]"
              />
              <label htmlFor="agreedToPolicy" className="text-xs sm:text-[13px] text-zinc-300 font-sans font-light leading-snug cursor-pointer">
                I agree to be contacted about this request and have read the Privacy Policy.
              </label>
            </div>

            {/* Row 7: Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.005 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.995 }}
              className="w-full bg-[#0E2445] hover:bg-[#B3956F] text-[#0A111F] font-sans font-medium text-xs sm:text-sm tracking-[0.14em] uppercase py-4 sm:py-4.5 px-6 rounded-none transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(14, 36, 69, 0.25)] hover:shadow-[0_6px_28px_rgba(14, 36, 69, 0.4)] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A111F]" />
                  <span>TRANSMITTING CONFIDENTIAL REQUEST...</span>
                </>
              ) : (
                <span>SEND MY REQUEST — CONFIDENTIALLY</span>
              )}
            </motion.button>

            {/* Footnotes */}
            <div className="space-y-1.5 pt-2 text-xs font-sans font-light">
              <p className="text-zinc-300">
                Your request is confidential and seen only by our licensed team.
              </p>
              <p className="text-zinc-400">
                * Required fields. Please do not include sensitive personal information. For an emergency, call 911.
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
