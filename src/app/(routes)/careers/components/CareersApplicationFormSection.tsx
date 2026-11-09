'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Paperclip,
  ChevronDown,
  Check,
  Loader2,
  AlertTriangle,
  ShieldCheck,
  FileText,
  X,
  MessageCircle,
  ChevronDown as ChevronDownIcon,
} from 'lucide-react';
import { useConsultationSubmit } from '@/hooks/useConsultationSubmit';
import { SubmissionMethodModal } from '@/components/ui/SubmissionMethodModal';

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
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: number;
    type: string;
    base64: string;
  } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isReadingFile, setIsReadingFile] = useState<boolean>(false);

  const {
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    isMethodModalOpen,
    setIsMethodModalOpen,
    validate,
    submitForm,
    submitViaWhatsApp,
    reset,
  } = useConsultationSubmit({
    formSource: 'Careers Application (Class D/G Armed Officer)',
  });

  const toggleArea = (area: string) => {
    setServiceAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 8MB)
    const MAX_SIZE = 8 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setFileError('File exceeds 8MB maximum size limit. Please upload a smaller document.');
      e.target.value = '';
      return;
    }

    // Validate extension
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const hasValidExt = validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext));
    if (!hasValidExt) {
      setFileError('Invalid file type. Please upload a .pdf, .doc, or .docx file.');
      e.target.value = '';
      return;
    }

    setIsReadingFile(true);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setSelectedFile({
        name: file.name,
        size: file.size,
        type: file.type || 'application/pdf',
        base64: result,
      });
      setIsReadingFile(false);
    };
    reader.onerror = () => {
      setFileError('Failed to read file from your device. Please try again.');
      setIsReadingFile(false);
    };
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      setIsMethodModalOpen(true);
    }
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
      className="relative w-full bg-[#0A111F] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal text-white leading-tight tracking-tight"
          >
            Submit Your Application
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed"
          >
            All submissions are reviewed confidentially. We do not contact current employers without your explicit permission.
          </motion.p>
        </div>

        {/* Application Form Box */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="rounded-sm bg-[#0B1220] border border-[#0E2445]/60 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5 shadow-2xl"
        >
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0E2445]/20 border border-[#0E2445]/50 flex items-center justify-center mx-auto text-[#93C5FD]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                Application Submitted Confidentially
              </h3>
              <p className="text-zinc-300 font-light max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
                Your credentials and document have been securely transmitted to the Massive Protective Services HR and licensing director. FDACS licenses will be verified prior to interview scheduling.
              </p>
              {selectedFile && (
                <div className="inline-flex items-center gap-2 bg-[#0E1A2E] border border-[#3B82F6]/30 px-3.5 py-1.5 rounded text-xs text-[#93C5FD]">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume Attached: {selectedFile.name} ({formatFileSize(selectedFile.size)})</span>
                </div>
              )}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setSelectedFile(null);
                    setFileError(null);
                  }}
                  className="px-5 py-2 rounded-sm border border-[#0E2445]/50 text-xs font-mono uppercase tracking-wider text-[#93C5FD] hover:bg-[#0E2445]/10 transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                />
              </div>

              {/* Email Address & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>
              </div>

              {/* Class D License & Class G License */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="classD" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Florida Class D License Number *
                  </label>
                  <input
                    id="classD"
                    type="text"
                    required
                    placeholder="Class D license number"
                    value={formData.classD}
                    onChange={(e) => setFormData({ ...formData, classD: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="classG" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Florida Class G License Number *
                  </label>
                  <input
                    id="classG"
                    type="text"
                    required
                    placeholder="Class G license number"
                    value={formData.classG}
                    onChange={(e) => setFormData({ ...formData, classG: e.target.value })}
                    className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors"
                  />
                </div>
              </div>

              {/* Employment Status & Years Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="employmentStatus" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Current Employment Status
                  </label>
                  <div className="relative">
                    <select
                      id="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                      className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-zinc-300 focus:outline-none focus:border-[#0E2445] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select employment status</option>
                      <option value="employed-full">Employed Full-Time</option>
                      <option value="employed-part">Employed Part-Time</option>
                      <option value="available">Currently Available / Immediate</option>
                      <option value="transition">Law Enforcement / Military Transition</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#93C5FD] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="yearsExp" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Years of Experience in Security
                  </label>
                  <div className="relative">
                    <select
                      id="yearsExp"
                      value={formData.yearsExp}
                      onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                      className="w-full bg-[#080E1A] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-zinc-300 focus:outline-none focus:border-[#0E2445] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select years of experience</option>
                      <option value="1-2">1–2 Years</option>
                      <option value="3-5">3–5 Years</option>
                      <option value="6-10">6–10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#93C5FD] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Service Areas Available Checkboxes */}
              <div className="space-y-2">
                <span className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Service Areas Available
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5 pt-0.5">
                  {SERVICE_OPTIONS.map((area) => {
                    const isChecked = serviceAreas.includes(area);
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => toggleArea(area)}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-zinc-300 hover:text-white cursor-pointer select-none"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-[2px] border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#0E2445] border-[#0E2445] text-white'
                              : 'bg-[#080E1A] border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </span>
                        <span>{area}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brief Statement */}
              <div className="space-y-1.5">
                <label htmlFor="statement" className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Brief Statement — Why Massive Protective Services
                </label>
                <textarea
                  id="statement"
                  rows={2}
                  placeholder="Your statement or relevant experience"
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full bg-[#080E1A] border border-white/10 rounded-sm p-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#0E2445] transition-colors resize-y min-h-[58px]"
                />
              </div>

              {/* Resume Upload Box with Real File Attachment */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Resume Upload — Optional
                  </label>
                  <span className="text-[11px] text-zinc-400 font-sans">
                    .pdf, .docx, .doc (max 8MB)
                  </span>
                </div>

                {selectedFile ? (
                  <div className="flex items-center justify-between bg-[#0E1A2E] border border-[#3B82F6]/40 rounded-sm px-3.5 py-2.5 text-sm text-white transition-all">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="w-7 h-7 rounded bg-[#0E2445] text-[#93C5FD] flex items-center justify-center shrink-0 border border-[#3B82F6]/30">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs sm:text-[13px] font-medium text-white truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                          {selectedFile.name}
                        </p>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          {formatFileSize(selectedFile.size)} · Document attached
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 text-zinc-400 hover:text-red-400 hover:bg-white/5 rounded transition-colors shrink-0"
                      title="Remove attached file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-between w-full bg-[#080E1A] border border-white/10 hover:border-[#0E2445] rounded-sm px-3.5 py-2.5 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-2.5">
                      <Paperclip className="w-3.5 h-3.5 text-[#93C5FD] group-hover:text-white transition-colors" />
                      <span className="text-xs sm:text-[13px] text-zinc-200 group-hover:text-white font-medium">
                        {isReadingFile ? 'Reading document...' : 'Attach Resume / CV'}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-300 font-mono">
                      {isReadingFile ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#93C5FD]" />
                      ) : (
                        'Choose file'
                      )}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                      disabled={isReadingFile}
                      className="hidden"
                    />
                  </label>
                )}

                {fileError && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>{fileError}</span>
                  </p>
                )}
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

              {/* Dual Action Submit Buttons (Email & WhatsApp) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting || isReadingFile}
                  className="flex-1 py-3 px-5 rounded bg-[#0E2445] hover:bg-[#173A6E] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border border-[#3B82F6]/30 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>SUBMITTING APPLICATION...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ChevronDownIcon className="w-3.5 h-3.5 opacity-70" />
                    </>
                  )}
                </button>
              </div>

              {/* Regulatory Disclaimer */}
              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed pt-1">
                All applicants are subject to background verification and license confirmation through FDACS. Submitting an application does not guarantee contact or employment.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      {/* Submission Method Selection Modal */}
      <SubmissionMethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSubmitEmail={async () => {
          await submitForm({
            ...formData,
            serviceAreas: serviceAreas.join(', '),
            resumeFileName: selectedFile ? selectedFile.name : 'Not provided',
            resumeFile: selectedFile || undefined,
          });
        }}
        onSubmitWhatsApp={() => {
          submitViaWhatsApp({
            ...formData,
            serviceAreas: serviceAreas.join(', '),
            resumeFileName: selectedFile ? selectedFile.name : 'Not provided',
            position: 'Armed Security Officer (Class D/G)',
          });
        }}
        isSubmittingEmail={isSubmitting}
        clientName={formData.fullName}
      />
    </section>
  );
};

export default CareersApplicationFormSection;
