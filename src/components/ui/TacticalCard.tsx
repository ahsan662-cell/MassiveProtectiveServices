'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface TacticalCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'carbon' | 'glass' | 'graphite';
  hasGlowHover?: boolean;
  cornerTicks?: boolean;
  className?: string;
}

export const TacticalCard: React.FC<TacticalCardProps> = ({
  children,
  variant = 'carbon',
  hasGlowHover = true,
  cornerTicks = false,
  className = '',
  ...motionProps
}) => {
  const variantBg = {
    carbon: 'bg-[#121212]/95 border-white/[0.08]',
    glass: 'bg-[#121212]/75 backdrop-blur-md border-white/[0.08]',
    graphite: 'bg-[#1F1F1F]/90 border-white/[0.08]',
  };

  return (
    <motion.div
      whileHover={hasGlowHover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={`relative rounded-lg border transition-all duration-300 ${variantBg[variant]} ${
        hasGlowHover
          ? 'hover:border-[#0E2445] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.8),0_0_24px_rgba(14,36,69,0.3)]'
          : ''
      } ${className}`}
      {...motionProps}
    >
      {/* Tactical Corner Ticks */}
      {cornerTicks && (
        <>
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#0E2445]/60 pointer-events-none" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#0E2445]/60 pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#0E2445]/60 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#0E2445]/60 pointer-events-none" />
        </>
      )}

      {children}
    </motion.div>
  );
};

export default TacticalCard;
