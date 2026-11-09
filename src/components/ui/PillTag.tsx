import React from 'react';

export interface PillTagProps {
  children: React.ReactNode;
  variant?: 'tactical' | 'gold' | 'outline';
  className?: string;
}

export const PillTag: React.FC<PillTagProps> = ({
  children,
  variant = 'tactical',
  className = '',
}) => {
  const variantStyles = {
    tactical: 'bg-[#1F1F1F] text-zinc-300 border-white/[0.08]',
    gold: 'bg-[#0E2445]/10 text-[#93C5FD] border-[#0E2445]/40',
    outline: 'bg-transparent text-zinc-400 border-white/10 hover:border-[#0E2445]/40',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default PillTag;
