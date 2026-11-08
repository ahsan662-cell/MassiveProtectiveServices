'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { GoogleReviewItem, REVIEW_WRITE_URL } from '@/utils/googleReviews';

interface GoogleReviewsSliderProps {
  reviews: GoogleReviewItem[];
  rating: string;
  totalRatings: number;
}

export const GoogleReviewsSlider: React.FC<GoogleReviewsSliderProps> = ({
  reviews,
  rating,
  totalRatings,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Handle slide bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C9A84C] uppercase block mb-2.5">
          VERIFIED GOOGLE BUSINESS REVIEWS
        </span>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-center mb-3.5 tracking-tight">
          What Our Clients Say
        </h2>
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-[#C9A84C] text-xl font-bold flex items-center gap-1 font-mono">
            {rating} ★
          </span>
          <span className="text-zinc-400 text-sm font-sans">
            ({totalRatings} reviews on Google)
          </span>
        </div>
      </div>

      {/* Slider Carousel Track */}
      <div
        className="overflow-hidden px-1 py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {reviews.map((review, i) => {
            const displayName = review.authorAttribution?.displayName || 'Verified Client';
            const initial = displayName.charAt(0).toUpperCase() || 'M';
            const photoUri = review.authorAttribution?.photoUri;
            const reviewRating =
              typeof review.rating === 'number'
                ? Math.max(1, Math.min(5, Math.round(review.rating)))
                : 5;
            const reviewText =
              typeof review.text === 'object' && review.text !== null
                ? review.text.text
                : typeof review.text === 'string'
                ? review.text
                : '';

            return (
              <div
                key={review.name || `${displayName}-${i}`}
                className="shrink-0 px-2.5 sm:px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* White Card matching user uploaded screenshot */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between h-full min-h-[250px] sm:min-h-[270px] border border-zinc-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-300">
                  {/* Review Text at Top */}
                  <p className="text-zinc-700 text-sm sm:text-[15px] leading-relaxed font-sans font-normal mb-6 line-clamp-5 sm:line-clamp-4">
                    &ldquo;{reviewText}&rdquo;
                  </p>

                  {/* Bottom Row matching screenshot: [Avatar + Name/Title] on Left, [5 Stars] on Right */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 mt-auto">
                    {/* Left: Avatar + Author Info */}
                    <div className="flex items-center gap-3 min-w-0">
                      {photoUri ? (
                        <img
                          src={photoUri}
                          alt={displayName}
                          loading="lazy"
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-zinc-200 shrink-0"
                        />
                      ) : (
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A0F1E] text-[#C9A84C] font-semibold text-sm flex items-center justify-center shrink-0 border border-[#C9A84C]/30 shadow-inner">
                          {initial}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-zinc-900 font-semibold text-sm sm:text-[15px] truncate font-sans leading-tight">
                          {displayName}
                        </p>
                        <p className="text-[#C9A84C] text-xs font-medium font-sans mt-0.5 truncate">
                          {review.relativePublishTimeDescription || 'Google Verified Review'}
                        </p>
                      </div>
                    </div>

                    {/* Right: 5 Amber/Gold Stars matching screenshot */}
                    <div
                      className="flex items-center gap-0.5 shrink-0"
                      aria-label={`${reviewRating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
                            starIdx < reviewRating
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-zinc-300 fill-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Controls matching screenshot: Left Circle (Outline) & Right Circle (Filled) */}
      <div className="flex items-center justify-center gap-3.5 mt-8 sm:mt-10">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous review"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-400/80 bg-white hover:bg-zinc-100 text-zinc-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next review"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C9A84C] hover:bg-[#D4AF37] text-[#0A0F1E] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Leave Us a Google Review Button */}
      <div className="text-center mt-8 sm:mt-10">
        <a
          href={REVIEW_WRITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#D4AF37] text-[#0A0F1E] font-bold px-7 sm:px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg uppercase text-xs tracking-wider cursor-pointer"
        >
          <Star className="w-4 h-4 fill-[#0A0F1E]" />
          <span>Leave Us a Google Review</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>
    </div>
  );
};

