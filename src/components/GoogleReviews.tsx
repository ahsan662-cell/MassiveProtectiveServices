import React, { Suspense } from 'react';
import { TrustIndexWidget } from './TrustIndexWidget';
import { GoogleReviewsSkeleton } from './GoogleReviewsSkeleton';
import { TRUSTINDEX_CARD_URL } from '@/utils/googleReviews';

export default function GoogleReviews() {
  return (
    <section
      id="google-reviews"
      aria-label="Verified Google Reviews"
      className="relative w-full bg-[#0A0F1E] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>VERIFIED GOOGLE BUSINESS REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif">
            What Our Clients Say
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Live verified reviews synced directly from Google Business Profile.
          </p>
        </div>

        {/* Dynamic TrustIndex Widget wrapped in Suspense boundary for instant route validation */}
        <Suspense fallback={<GoogleReviewsSkeleton />}>
          <TrustIndexWidget />
        </Suspense>

        {/* Trustindex QR Card & Direct Review Action */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#C9A84C]/30 shadow-2xl backdrop-blur-md overflow-hidden">
            {/* Subtle gold radial ambient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/10 rounded-bl-full pointer-events-none blur-xl" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-7">
              {/* QR Code Container */}
              <div className="shrink-0 bg-white p-2.5 rounded-xl shadow-xl shadow-black/50 border border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Trustindex-QRcard-massive-protective-services.svg"
                  alt="Scan QR code to write a review for Massive Protective Services on Google"
                  width={116}
                  height={116}
                  className="w-28 h-28 object-contain block"
                />
              </div>

              {/* Text & Action Button */}
              <div className="flex-1 text-center sm:text-left space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>Quick Review Card</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-serif">
                  Scan or Click to Leave a Review
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Scan the QR code with your mobile camera or click below to submit your verified review for Massive Protective Services.
                </p>

                <div className="pt-1.5">
                  <a
                    href={TRUSTINDEX_CARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#C9A84C] text-[#0A0F1E] font-bold text-sm px-6 py-2.5 rounded-lg shadow-lg shadow-[#C9A84C]/20 hover:bg-[#D4B55D] hover:shadow-[#C9A84C]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <span>Leave Us a Google Review</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GoogleReviewsSkeleton };
