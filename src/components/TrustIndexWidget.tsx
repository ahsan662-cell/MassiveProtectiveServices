'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GoogleReviewsSkeleton } from './GoogleReviewsSkeleton';

const TRUSTINDEX_SCRIPT_SRC =
  'https://cdn.trustindex.io/loader.js?8aef8f0853ad318b986641e66ac';

export function TrustIndexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (container.querySelector('.ti-widget')) {
      setIsWidgetLoaded(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (container.querySelector('.ti-widget')) {
        setIsWidgetLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    const existingScript = container.querySelector(
      'script[src*="cdn.trustindex.io"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = TRUSTINDEX_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      container.appendChild(script);
    }

    if (
      typeof window !== 'undefined' &&
      typeof (window as unknown as { renderTrustindexWidgets?: () => void })
        .renderTrustindexWidgets === 'function'
    ) {
      setTimeout(() => {
        try {
          (
            window as unknown as { renderTrustindexWidgets: () => void }
          ).renderTrustindexWidgets();
        } catch {
          // ignore
        }
      }, 80);
    }

    const fallbackTimer = setTimeout(() => {
      if (container.querySelector('.ti-widget')) {
        setIsWidgetLoaded(true);
      }
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[200px]">
      {!isWidgetLoaded && (
        <div className="w-full">
          <GoogleReviewsSkeleton />
        </div>
      )}

      <div
        ref={containerRef}
        className={`trustindex-reviews-wrapper w-full ${
          !isWidgetLoaded
            ? 'h-0 overflow-hidden opacity-0'
            : 'opacity-100 transition-opacity duration-300'
        }`}
      />
    </div>
  );
}

