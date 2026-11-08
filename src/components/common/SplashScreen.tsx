'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const SplashScreen: React.FC = () => {
  const [isHiding, setIsHiding] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Prevent splash overlay from running for search engine crawlers and headless user-agents
    if (
      typeof navigator !== 'undefined' &&
      /bot|crawl|spider|slurp|frog|headless|googlebot|bingbot/i.test(navigator.userAgent)
    ) {
      return;
    }

    setIsMounted(true);

    // Lock scroll during splash screen display
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Show for ~1.8 seconds like reference
    const fadeTimer = setTimeout(() => {
      setIsHiding(true);
    }, 1800);

    // Completely unmount 400ms after fade animation begins
    const removeTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = originalOverflow;
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes espPulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(0.96);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .esp-pulse-anim {
          animation: espPulse 1.3s ease-in-out infinite;
        }
      `}</style>
      <div
        id="esp-preloader"
        aria-hidden="true"
        className={`fixed inset-0 z-[999999] flex items-center justify-center transition-all duration-[450ms] ease-out pointer-events-none ${
          isHiding ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
        style={{
          background: 'linear-gradient(143deg, #0D1B3E 0%, #000000 44%)',
        }}
      >
        <div className="relative w-[160px] max-w-[45vw] aspect-square flex items-center justify-center esp-pulse-anim">
          <Image
            src="/images/new_logo.png"
            alt="Massive Protective Services"
            width={160}
            height={160}
            priority
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_4px_24px_rgba(37,99,235,0.25)]"
          />
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
