import React from 'react';
import { AlertTriangle, PhoneCall, ShieldAlert, CheckCircle } from 'lucide-react';

interface AlertBannerProps {
  type?: 'warning' | 'error' | 'success' | 'dispatch';
  title?: string;
  message: string;
  dispatchPhone?: string;
  className?: string;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  type = 'warning',
  title,
  message,
  dispatchPhone = '(561) 508-8833',
  className = '',
}) => {
  const styles = {
    warning: {
      border: 'border-[#0E2445]/40',
      bg: 'bg-[#121212]',
      icon: <AlertTriangle className="w-5 h-5 text-[#93C5FD] shrink-0" />,
      text: 'text-[#93C5FD]',
    },
    error: {
      border: 'border-[#8B1E1E]',
      bg: 'bg-[#8B1E1E]/10',
      icon: <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />,
      text: 'text-red-400',
    },
    success: {
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/20',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
      text: 'text-emerald-300',
    },
    dispatch: {
      border: 'border-[#0E2445]',
      bg: 'bg-[#121212]',
      icon: <PhoneCall className="w-5 h-5 text-[#93C5FD] shrink-0" />,
      text: 'text-[#93C5FD]',
    },
  }[type];

  return (
    <div
      role="alert"
      className={`w-full p-4 rounded-md border ${styles.border} ${styles.bg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans ${className}`}
    >
      <div className="flex items-start gap-3">
        {styles.icon}
        <div>
          {title && (
            <div className={`font-mono font-bold uppercase tracking-wider ${styles.text} mb-0.5`}>
              {title}
            </div>
          )}
          <p className="text-zinc-300 leading-relaxed">{message}</p>
        </div>
      </div>

      {dispatchPhone && (
        <a
          href={`tel:${dispatchPhone.replace(/\D/g, '')}`}
          className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded bg-[#1F1F1F] border border-[#0E2445]/40 text-white hover:text-[#93C5FD] font-mono font-bold tracking-wider transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#93C5FD]" />
          <span>{dispatchPhone}</span>
        </a>
      )}
    </div>
  );
};

export default AlertBanner;
