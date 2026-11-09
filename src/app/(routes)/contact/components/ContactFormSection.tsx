'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Star,
} from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';
import { MessageCircle, ChevronDown as ChevronDownIcon } from 'lucide-react';

const SERVICES_OPTIONS = [
  'Select a service',
  'Executive Protection',
  'Estate & Residential Security',
  'Event Security',
  'Armed Security Officers',
  'VIP & Celebrity Protection',
  'Concierge Security',
  'Other / Custom Detail',
];

export const ContactFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [preferredMethod, setPreferredMethod] = useState<'Phone' | 'Email' | 'Either'>('Either');
  const [selectedService, setSelectedService] = useState('Select a service');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const { isSubmitting, isSuccess, isTimedOut, errorMessage, fieldErrors, isMethodModalOpen, setIsMethodModalOpen, validate, submitForm, submitViaWhatsApp, reset } = useConsultationSubmit({
      formSource: 'Direct Contact Page Inquiry',
    });

  const getPayload = () => ({
      ...formData,
      serviceType: selectedService !== 'Select a service' ? selectedService : 'Executive Protection',
      preferredContactMethod: preferredMethod,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(getPayload())) {
      setIsMethodModalOpen(true);
    }
  };

  return (
    <section
      aria-label="Contact and Confidential Consultation Form"
      className="relative w-full bg-[#0A111F] text-white pt-12 sm:pt-16 pb-8 sm:pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-4 sm:mb-5 space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
              CONTACT · MASSIVE PROTECTIVE SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-[1.15] tracking-tight"
          >
            Start a Confidential Conversation
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-3xl"
          >
            Every engagement begins with a direct conversation — no sales process, no obligation.
            Reach out by form, phone or email. All inquiries are treated as confidential.
          </motion.p>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full h-px bg-[#0E2445]/30 mb-8 sm:mb-10" />

        {/* Main Grid: Form on Left, Contact Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (lg:col-span-8): Form Container */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 rounded-sm bg-[#101A2D] border border-white/[0.08] p-7 sm:p-10 shadow-2xl"
          >
            {/* Form Eyebrow & Subheading */}
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] font-semibold block">
                REQUEST A CONFIDENTIAL CONSULTATION
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light mt-1.5">
                Tell us what you need. We will respond directly — usually within a few hours.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#0E2445]/15 border border-[#0E2445]/40 flex items-center justify-center mx-auto text-[#93C5FD]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Confidential Inquiry Transmitted
                </h3>
                <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                  Your inquiry has been received directly by Marc Tardalo and the operations command
                  desk. We will respond promptly by your preferred contact method ({preferredMethod}).
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setFormData({ fullName: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-sm border border-[#0E2445]/50 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:bg-[#0E2445]/10 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-sans text-zinc-300 block">
                      Full Name <span className="text-[#93C5FD]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#0E2445] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                    />
                    {fieldErrors.fullName && (
                      <p className="text-[11px] text-[#8B1E1E] font-sans font-medium">
                        {fieldErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans text-zinc-300 block">
                      Email Address <span className="text-[#93C5FD]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#0E2445] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                    />
                    {fieldErrors.email && (
                      <p className="text-[11px] text-[#8B1E1E] font-sans font-medium">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number & How can we help? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-sans text-zinc-300 block">
                      Phone Number <span className="text-[#93C5FD]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#0E2445] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors"
                    />
                    {fieldErrors.phone && (
                      <p className="text-[11px] text-[#8B1E1E] font-sans font-medium">
                        {fieldErrors.phone}
                      </p>
                    )}
                    <span className="text-[11px] text-zinc-500 font-sans block">
                      Best number to reach you
                    </span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans text-zinc-300 block">
                      How can we help?
                    </label>
                    <div className="relative">
                      <select
                        aria-label="How can we help?"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#0E2445] text-zinc-200 text-xs sm:text-sm font-sans appearance-none outline-none pr-10 cursor-pointer"
                      >
                        {SERVICES_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0A111F] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Brief Description */}
                <div className="space-y-2">
                  <label className="text-xs font-sans text-zinc-300 block">
                    Brief Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your situation — location, timeline, and what you need. All information is kept strictly confidential."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#0A111F] border border-white/[0.12] focus:border-[#0E2445] text-white text-xs sm:text-sm font-sans placeholder:text-zinc-500 outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Row 4: Preferred Contact Method */}
                <div className="space-y-2.5 pt-1">
                  <label className="text-xs font-sans text-zinc-300 block">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center gap-6 text-xs sm:text-sm text-zinc-300 font-sans">
                    {(['Phone', 'Email', 'Either'] as const).map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer select-none group"
                      >
                        <input
                          type="radio"
                          name="preferredContactMethod"
                          value={method}
                          checked={preferredMethod === method}
                          onChange={() => setPreferredMethod(method)}
                          className="w-4 h-4 accent-[#0E2445] cursor-pointer"
                        />
                        <span className="group-hover:text-white transition-colors">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Inline Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded bg-[#8B1E1E]/20 border border-[#8B1E1E]/60 text-xs text-red-200 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{errorMessage}</p>
                      {isTimedOut && (
                        <p className="mt-1 text-red-300">
                          Priority Dispatch Hotline:{' '}
                          <a href="tel:9542347231" className="underline font-bold text-white">
                            (954) 234-7231
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-5 rounded bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#3B82F6]/30 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>TRANSMITTING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <ChevronDownIcon className="w-3.5 h-3.5 opacity-70" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const payload = typeof getPayload === 'function' ? getPayload() : formData;
                      submitViaWhatsApp(payload);
                    }}
                    className="py-3 px-4 rounded bg-[#0F2D25] hover:bg-[#12382E] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-[0.99]"
                    title="Direct submission to WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column (lg:col-span-4): Direct Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Card 1: 24/7 Direct Line */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                <Phone className="w-4 h-4 text-[#93C5FD]" />
                <span>24/7 Direct Line</span>
              </div>
              <a
                href="tel:9542347231"
                className="block text-xl sm:text-2xl font-sans font-bold text-white hover:text-[#93C5FD] tracking-wide mt-2.5 transition-colors"
              >
                (954) 234-7231
              </a>
              <p className="text-xs text-zinc-400 font-sans mt-1.5 leading-relaxed">
                Direct to watch commander. Available 24 hours a day, 7 days a week.
              </p>
            </motion.div>

            {/* Card 2: Email */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                <Mail className="w-4 h-4 text-[#93C5FD]" />
                <span>Confidential Email</span>
              </div>
              <a
                href="mailto:operations@massiveprotectiveservices.com"
                className="block text-sm sm:text-base font-sans font-semibold text-white hover:text-[#93C5FD] mt-2.5 transition-colors break-all"
              >
                operations@massiveprotectiveservices.com
              </a>
              <p className="text-xs text-zinc-400 font-sans mt-1.5 leading-relaxed">
                Monitored continuously. PGP key available upon request for encrypted correspondence.
              </p>
            </motion.div>

            {/* Card 3: Headquarters */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-sm bg-[#101A2D] border border-white/[0.08] p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-sans font-medium text-white">
                  <MapPin className="w-4 h-4 text-[#93C5FD]" />
                  <span>Headquarters</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#93C5FD] hover:text-[#93C5FD] transition-colors"
                >
                  <span>Find us on Google</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
              <p className="text-sm font-sans font-semibold text-white mt-2.5">
                Delray Beach, Florida
              </p>
              <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
                Serving Palm Beach, Broward, and Miami-Dade Counties. Statewide operations available
                under Florida Class G authority.
              </p>
            </motion.div>

            {/* Card 4: Licensure Verification */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-sm bg-[#0E1626] border border-[#0E2445]/30 p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#93C5FD] uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#93C5FD]" />
                <span>FDACS LICENSED & INSURED</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-2.5 leading-relaxed">
                Florida Agency License <strong className="text-white">#81400200</strong>. Operating
                in strict compliance with Chapter 493, Florida Statutes.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-[#93C5FD] hover:underline cursor-pointer">
                <FileText className="w-3.5 h-3.5" />
                <span>Verify with Florida Dept. of Agriculture & Consumer Services</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </div>
            </motion.div>

            {/* Card 5: Leave Us a Google Review Button */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-1"
            >
              <a
                href="https://admin.trustindex.io/card/56cfe17231ce249"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer bg-[#0E2445] hover:bg-[#0E2445] text-white"
              >
                <Star className="w-4 h-4 fill-[#0A0F1E] text-[#0A0F1E]" />
                <span>Leave Us a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* TASK 1 & 2: Google Map Embed Section directly below contact form */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 space-y-4 pt-10 border-t border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#93C5FD] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#93C5FD]" />
                <span>MASSIVE PROTECTIVE SERVICES · DELRAY BEACH HEADQUARTERS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
                Regional Headquarters &amp; Operating Territory
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.app.goo.gl/La942E86QAy9HwZA9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm border border-white/15 hover:border-[#0E2445] text-xs font-mono text-zinc-300 hover:text-white transition-all bg-[#101A2D]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
                <span>Find us on Google</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://admin.trustindex.io/card/56cfe17231ce249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer bg-[#0E2445] hover:bg-[#0E2445] text-white"
              >
                <Star className="w-3.5 h-3.5 fill-[#0A0F1E] text-[#0A0F1E]" />
                <span>Leave Us a Google Review</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map iframe with exact required attributes */}
          <div className="relative w-full overflow-hidden rounded-lg border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.85)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7148545.926219277!2d-83.804601!3d27.698638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90537dcc4b9eb%3A0x55c7ab2ae649c981!2sMassive%20Protective%20Services!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Massive Protective Services Google Map"
              className="w-full"
            />
          </div>
        </motion.div>
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
