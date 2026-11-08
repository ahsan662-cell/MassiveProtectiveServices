'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Paperclip, ChevronDown, Check, Loader2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';

export const CareersApplicationFormSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    classD: '',
    classG: '',
    employmentStatus: '',
    yearsExp: '',
    statement: '',
  });

  const [serviceAreas, setServiceAreas] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('No file selected');

  const { isSubmitting, isSuccess, isTimedOut, errorMessage, submitForm, reset } = useConsultationSubmit({
    formSource: 'Careers Application (Class D/G Armed Officer)',
  });

  const toggleArea = (area: string) => {
    setServiceAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm({
      ...formData,
      serviceAreas: serviceAreas.join(', '),
      resumeFileName: fileName !== 'No file selected' ? fileName : 'Not provided',
    });
  };

  const SERVICE_OPTIONS = [
    'Palm Beach County',
    'Broward County',
    'Miami-Dade',
    'Treasure Coast',
    'Statewide',
  ];

  return (
    <section
      id="application-form"
      aria-label="Submit Your Application"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            Submit Your Application
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed"
          >
            All submissions are reviewed confidentially. We do not contact current employers without your explicit permission.
          </motion.p>
        </div>

        {/* Application Form Box matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="rounded-sm bg-[#0B1220] border border-[#C5A880]/60 p-7 sm:p-10 lg:p-12 space-y-6 shadow-2xl"
        >
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Application Submitted Confidentially
              </h3>
              <p className="text-zinc-300 font-light max-w-lg mx-auto text-sm sm:text-base">
                Your credentials have been securely transmitted to the Massive Protective Services HR and licensing director. FDACS licenses will be verified prior to interview scheduling.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={reset}
                  className="px-6 py-2.5 rounded-sm border border-[#C5A880]/50 text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>

              {/* Email Address & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              {/* Class D License & Class G License */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="classD" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Florida Class D License Number *
                  </label>
                  <input
                    id="classD"
                    type="text"
                    required
                    placeholder="Class D license number"
                    value={formData.classD}
                    onChange={(e) => setFormData({ ...formData, classD: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="classG" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Florida Class G License Number *
                  </label>
                  <input
                    id="classG"
                    type="text"
                    required
                    placeholder="Class G license number"
                    value={formData.classG}
                    onChange={(e) => setFormData({ ...formData, classG: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              {/* Employment Status & Years Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="employmentStatus" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Current Employment Status
                  </label>
                  <div className="relative">
                    <select
                      id="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                      className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#C5A880] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select employment status</option>
                      <option value="employed-full">Employed Full-Time</option>
                      <option value="employed-part">Employed Part-Time</option>
                      <option value="available">Currently Available / Immediate</option>
                      <option value="transition">Law Enforcement / Military Transition</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#C5A880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="yearsExp" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Years of Experience in Security
                  </label>
                  <div className="relative">
                    <select
                      id="yearsExp"
                      value={formData.yearsExp}
                      onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                      className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#C5A880] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select years of experience</option>
                      <option value="1-2">1–2 Years</option>
                      <option value="3-5">3–5 Years</option>
                      <option value="6-10">6–10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#C5A880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Service Areas Available Checkboxes */}
              <div className="space-y-3">
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Service Areas Available
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
                  {SERVICE_OPTIONS.map((area) => {
                    const isChecked = serviceAreas.includes(area);
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => toggleArea(area)}
                        className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 hover:text-white cursor-pointer select-none"
                      >
                        <span
                          className={`w-4 h-4 rounded-[2px] border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#C5A880] border-[#C5A880] text-[#0A0A0A]'
                              : 'bg-[#080E1A] border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span>{area}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brief Statement */}
              <div className="space-y-2">
                <label htmlFor="statement" className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Brief Statement — Why Massive Protective Services
                </label>
                <textarea
                  id="statement"
                  rows={4}
                  placeholder="Your statement"
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full bg-[#080E1A] border border-white/10 rounded-sm p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                />
              </div>

              {/* Resume Upload Box */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Resume Upload — Optional
                </label>
                <label className="flex items-center gap-3 w-full bg-[#080E1A] border border-white/10 rounded-sm px-4 py-3.5 cursor-pointer hover:border-[#C5A880]/60 transition-colors">
                  <Paperclip className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-xs sm:text-sm text-white font-medium">Choose file</span>
                  <span className="text-xs text-zinc-500">.pdf or .docx · {fileName}</span>
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Error Message */}
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-sm bg-[#C5A880] hover:bg-[#D4AF37] text-[#0A0A0A] font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_24px_rgba(197,168,128,0.3)] hover:shadow-[0_4px_32px_rgba(212,175,55,0.5)] hover:scale-[1.02] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                      <span>SUBMITTING APPLICATION...</span>
                    </>
                  ) : (
                    <span>Submit Application</span>
                  )}
                </button>
              </div>

              {/* Regulatory Disclaimer */}
              <p className="text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed pt-2">
                All applicants are subject to background verification and license confirmation through FDACS. Submitting an application does not guarantee contact or employment.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CareersApplicationFormSection;
