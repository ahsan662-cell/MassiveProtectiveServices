'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, X, Shield, ArrowRight, Loader2, Lock } from 'lucide-react';
import { MPS_PHONE_DISPLAY } from '@/utils/whatsapp';

export interface SubmissionMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitEmail: () => void | Promise<void>;
  onSubmitWhatsApp: () => void;
  isSubmittingEmail?: boolean;
  clientName?: string;
  sourceTitle?: string;
}

export const SubmissionMethodModal: React.FC<SubmissionMethodModalProps> = ({
  isOpen,
  onClose,
  onSubmitEmail,
  onSubmitWhatsApp,
  isSubmittingEmail = false,
  clientName,
  sourceTitle = 'Consultation Inquiry',
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#0B1424] border border-[#0E2445]/60 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-6 sm:p-7 text-white overflow-hidden z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submission-modal-title"
        >
          {/* Top Decorative Navy Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E2445] via-[#3B82F6] to-[#0E2445]" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 mb-5 pr-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0E2445]/40 border border-[#0E2445]/70 text-[#93C5FD] text-[11px] font-mono uppercase tracking-wider">
              <Shield className="w-3 h-3 text-[#3B82F6]" />
              <span>Select Preferred Channel</span>
            </div>
            <h3 id="submission-modal-title" className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
              How would you like to submit?
            </h3>
            <p className="text-xs sm:text-[13px] text-zinc-300 font-sans leading-relaxed">
              {clientName ? `Thank you, ${clientName}. ` : ''}
              Choose whether to transmit via encrypted email dispatch or open directly in WhatsApp for live chat.
            </p>
          </div>

          {/* Dual Submission Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
            {/* Option 1: Email Submission */}
            <button
              type="button"
              disabled={isSubmittingEmail}
              onClick={async () => {
                await onSubmitEmail();
              }}
              className="group relative flex flex-col justify-between p-4 rounded-lg bg-[#111C30] hover:bg-[#15233D] border border-white/10 hover:border-[#3B82F6]/60 text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-md bg-[#0E2445] border border-[#3B82F6]/40 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  {isSubmittingEmail ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <Mail className="w-4 h-4 text-[#93C5FD]" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#93C5FD] transition-colors flex items-center gap-1.5">
                    <span>1. Submit via Email</span>
                  </h4>
                  <p className="text-[11px] text-zinc-300 font-sans leading-snug mt-1">
                    Direct transmission to command desk. Response within 2h.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#93C5FD] group-hover:text-white">
                <span>{isSubmittingEmail ? 'Sending...' : 'Send via Email'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Option 2: WhatsApp Submission */}
            <button
              type="button"
              onClick={() => {
                onSubmitWhatsApp();
                onClose();
              }}
              className="group relative flex flex-col justify-between p-4 rounded-lg bg-[#0F2228] hover:bg-[#122E36] border border-[#25D366]/30 hover:border-[#25D366]/70 text-left transition-all duration-200 hover:shadow-[0_4px_24px_rgba(37,211,102,0.15)] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-md bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                      2. Submit via WhatsApp
                    </h4>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#25D366]">
                      Instant
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-sans leading-snug mt-1">
                    Pre-formats your details and opens WhatsApp ready to send.
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#25D366] group-hover:text-emerald-300">
                <span>Open in WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Footer Security Ribbon */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#3B82F6]" />
              <span>FL Lic. B1400200 · Confidential Intake</span>
            </span>
            <span className="text-zinc-500">
              Tel: {MPS_PHONE_DISPLAY}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SubmissionMethodModal;

