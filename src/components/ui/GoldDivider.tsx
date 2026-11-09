import React from 'react';

export interface GoldDividerProps {
  className?: string;
  withEmblem?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  withEmblem = false,
}) => {
  return (
    <div className={`relative flex items-center justify-center w-full py-4 ${className}`}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0E2445]/40 to-transparent" />
      {withEmblem && (
        <div className="absolute px-3 bg-[#0A0A0A] flex items-center gap-1.5 text-[#0E2445]">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#0E2445]/70" />
          <span className="w-2 h-2 rotate-45 border border-[#0E2445]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#0E2445]/70" />
        </div>
      )}
    </div>
  );
};

export default GoldDivider;
