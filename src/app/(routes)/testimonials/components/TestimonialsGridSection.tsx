'use client';

import React, { Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TrustIndexWidget } from '@/components/TrustIndexWidget';
import { GoogleReviewsSkeleton } from '@/components/GoogleReviewsSkeleton';
import { TRUSTINDEX_CARD_URL } from '@/utils/googleReviews';

export const TestimonialsGridSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Verified Google Client Reviews"
      className="relative w-full bg-[#ffffff] text-[#0F172A] py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-200"
    >
      {/* Ambient background subtle brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E2445]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3.5 text-center sm:text-left">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <svg
                className="w-3.5 h-3.5 text-[#0E2445] fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>VERIFIED GOOGLE BUSINESS REVIEWS</span>
            </div>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#0A0A0A] leading-[1.12] tracking-tight max-w-4xl"
          >
            In Their Words
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-sm sm:text-base font-sans text-slate-600 max-w-2xl leading-relaxed"
          >
            Live verified reviews from clients, estate principals, and private event organizers across South Florida.
          </motion.p>
        </div>

        {/* Live TrustIndex Google Reviews Widget */}
        <Suspense fallback={<GoogleReviewsSkeleton />}>
          <TrustIndexWidget />
        </Suspense>

        {/* Trustindex QR Card & Direct Review Action */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 sm:mt-16 max-w-2xl mx-auto"
        >
          <div className="relative p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-7">
              {/* QR Code Container */}
              <div className="shrink-0 bg-white p-2.5 rounded-xl shadow-md border border-slate-200">
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
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0E2445] text-xs font-mono font-bold uppercase tracking-wider">
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>Quick Review Card</span>
                </div>

                <h3 className="text-lg sm:text-xl font-sans font-bold text-slate-900 tracking-tight">
                  Scan or Click to Leave a Review
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Scan the QR code with your mobile camera or click below to submit your verified review for Massive Protective Services.
                </p>

                <div className="pt-1.5">
                  <a
                    href={TRUSTINDEX_CARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#0E2445] text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-lg shadow-[#0E2445]/25 hover:bg-[#173A6E] hover:shadow-[#0E2445]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsGridSection;
