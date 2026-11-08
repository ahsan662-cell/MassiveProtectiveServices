'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Check, Loader2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

const DEPLOYMENT_TYPES = [
  'Estate / Residential',
  'Corporate / Business Premises',
  'High-Risk Termination',
  'Private Event',
  'Executive Protection',
  'Short-Term',
  'Other',
];

const TIMELINES = [
  'Within 24 Hours',
  'This Week',
  'Ongoing',
  'Planning Ahead',
];

export const ArmedSecurityFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    location: '',
    deploymentType: '',
    timeline: '',
    message: '',
  });

  const [deploymentOpen, setDeploymentOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, submitForm, reset } = useConsultationSubmit({ formSource: 'Armed Security Consultation' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <section
      id="request-form"
      aria-label="Request Armed Security Form"
      className="relative w-full bg-[#080E1A] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header matching Screenshot 1 */}
        <div className="space-y-3">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              A PRIVATE FIRST CONVERSATION
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Request Armed Security - We Respond Within 2 Hours
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
          >
            Tell us about your situation and we match the right officers to your needs.
          </motion.p>
        </div>

        {/* Form Container */}
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-sm bg-[#0B1424] border border-[#C5A880]/50 p-8 sm:p-12 text-center space-y-5 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center mx-auto text-[#C5A880]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">Inquiry Received</h3>
            <p className="text-sm text-zinc-300 font-sans font-light max-w-md mx-auto leading-relaxed">
              Your transmission has been encrypted and routed directly to Marc Tardalo. You will receive
              a confidential response within two hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email Address & Location / City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Location / City
                </label>
                <input
                  type="text"
                  required
                  placeholder="Deployment location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Deployment Type & Timeline Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deployment Type Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Deployment Type
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
                    setDeploymentOpen(!deploymentOpen);
                    setTimelineOpen(false);
                  }}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-left flex items-center justify-between text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                >
                  <span className={formData.deploymentType ? 'text-white' : 'text-zinc-400'}>
                    {formData.deploymentType || 'Select deployment type'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A880] transition-transform ${
                      deploymentOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {deploymentOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B1424] border border-[#C5A880]/40 rounded-sm shadow-2xl z-30 divide-y divide-white/[0.05] overflow-hidden">
                    {DEPLOYMENT_TYPES.map((type) => (
                      <div
                        key={type}
                        onClick={() => {
                          setFormData({ ...formData, deploymentType: type });
                          setDeploymentOpen(false);
                        }}
                        className="px-4 py-3 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span>{type}</span>
                        {formData.deploymentType === type && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Timeline Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-xs font-sans font-medium text-zinc-300 block">
                  Timeline
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setTimelineOpen(!timelineOpen);
                    setDeploymentOpen(false);
                  }}
                  className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-left flex items-center justify-between text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                >
                  <span className={formData.timeline ? 'text-white' : 'text-zinc-400'}>
                    {formData.timeline || 'Select timeline'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A880] transition-transform ${
                      timelineOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {timelineOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B1424] border border-[#C5A880]/40 rounded-sm shadow-2xl z-30 divide-y divide-white/[0.05] overflow-hidden">
                    {TIMELINES.map((time) => (
                      <div
                        key={time}
                        onClick={() => {
                          setFormData({ ...formData, timeline: time });
                          setTimelineOpen(false);
                        }}
                        className="px-4 py-3 text-xs sm:text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <span>{time}</span>
                        {formData.timeline === time && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="space-y-2">
              <label className="text-xs font-sans font-medium text-zinc-300 block">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe your situation, environment and any known threats"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0B1424] border border-white/10 rounded-sm px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors resize-y"
              />
            </div>

            {/* Submit Button matching Screenshot 1 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.35)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.55)] cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                  <span>Securing Transmission...</span>
                </>
              ) : (
                <span>Request Armed Security</span>
              )}
            </button>

            {/* Bottom Footnote matching Screenshot 1 */}
            <div className="pt-2 text-center text-xs font-mono text-zinc-400">
              FL License B1400200 ┬╖ Strictly Confidential
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ArmedSecurityFormSection;
