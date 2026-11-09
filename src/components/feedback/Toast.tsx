'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  message: string;
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  type = 'info',
  message,
  onDismiss,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-md bg-[#121212] border border-[#0E2445]/40 shadow-xl text-xs font-sans text-white min-w-[280px]"
    >
      <div className="flex items-center gap-2.5">
        {type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
        {type === 'error' && <AlertCircle className="w-4 h-4 text-[#8B1E1E]" />}
        {type === 'info' && <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />}
        <span className="font-medium">{message}</span>
      </div>

      <button
        type="button"
        onClick={() => onDismiss(id)}
        className="text-zinc-500 hover:text-white p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
};

export default Toast;
