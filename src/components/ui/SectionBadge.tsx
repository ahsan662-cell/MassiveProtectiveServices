'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export interface SectionBadgeProps {
  label: string;
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
  variant?: 'gold' | 'tactical' | 'alert';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  label,
  icon,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-[#0E2445]/10 border-[#0E2445]/30 text-[#0E2445] shadow-[0_0_15px_rgba(14,36,69,0.08)]',
    tactical: 'bg-[#141414] border-white/10 text-zinc-300',
    alert: 'bg-[#8B1E1E]/20 border-[#8B1E1E]/40 text-red-300',
  };

  const renderIcon = () => {
    if (!icon) {
      return <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#0E2445]" />;
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'function' || typeof icon === 'object') {
      const IconComponent = icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="w-3.5 h-3.5 shrink-0 text-[#0E2445]" />;
    }
    return null;
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {renderIcon()}
      <span>{label}</span>
    </div>
  );
};

export default SectionBadge;
