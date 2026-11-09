import React from 'react';
import { Shield } from 'lucide-react';

interface LoaderProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  label = 'Securing Transmission...',
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center">
        <div
          className={`${sizeMap[size]} border-2 border-[#0E2445]/40 border-t-[#0E2445] rounded-full animate-spin`}
        />
        <Shield className="w-2.5 h-2.5 text-[#93C5FD] absolute" />
      </div>
      {label && (
        <span className="text-xs font-mono tracking-widest text-[#93C5FD] uppercase">
          {label}
        </span>
      )}
    </div>
  );
};

export default Loader;
