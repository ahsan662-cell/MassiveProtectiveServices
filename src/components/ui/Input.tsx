'use client';

import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, id, className = '', ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-3.5 text-zinc-500 pointer-events-none">
              {icon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className={`w-full bg-[#121212] border ${
              error ? 'border-red-500/70 focus:border-red-500' : 'border-white/10 focus:border-[#0E2445]'
            } rounded-md px-3.5 py-2.5 ${
              icon ? 'pl-10' : ''
            } text-sm text-[#F5F5F7] placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#0E2445]/50 transition-colors font-sans ${className}`}
            {...props}
          />
        </div>

        {error && (
          <p className="text-[11px] font-mono text-red-400 tracking-wide mt-1">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p className="text-[11px] font-mono text-zinc-500 tracking-wide mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
