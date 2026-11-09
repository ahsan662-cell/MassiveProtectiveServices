'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServicePhilosophyData } from '../types';
import { ServiceIcon } from '../ServiceIcon';

interface Props {
  data: ServicePhilosophyData;
}

export const ServicePhilosophy: React.FC<Props> = ({ data }) => {
  const prefersReducedMotion = useReducedMotion();
  const isCentered = data.variant === 'centered-gold-line';
  const isTwoColumn = data.variant === 'two-column-prose';
  const isSplitHighlight = data.variant === 'split-highlight';
  const isSplitFeatures = data.variant === 'split-features';
  const isLight = data.theme === 'light';

  return (
    <section
      aria-label="Service Philosophy"
      className={`relative w-full ${
        isLight ? 'bg-[#FAF8F5] text-[#151D2A]' : 'bg-[#0B1324] text-white'
      } py-16 sm:py-20 lg:py-24 overflow-hidden border-t ${
        isLight ? 'border-black/5' : 'border-white/5'
      }`}
    >
      {/* Background ambient lighting accents */}
      {!isLight && (
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0E2445]/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSplitFeatures ? (
          /* Split-Features Layout with Horizontal Divider Rows (VIP Protection Screen 5 Reference) */
          <div className="space-y-10 sm:space-y-12">
            <div className="max-w-5xl space-y-3">
              {data.eyebrow && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                    {data.eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.h2
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className={`text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal ${
                  isLight ? 'text-[#151D2A]' : 'text-white'
                } leading-[1.15] tracking-tight`}
              >
                {data.headline}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-2 items-start">
              {/* Left Column: Narrative Copy */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className={`lg:col-span-6 space-y-5 text-sm sm:text-base md:text-[17px] ${
                  isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                } font-sans font-light leading-relaxed`}
              >
                {data.paragraph ? (
                  <p>{data.paragraph}</p>
                ) : (
                  data.column1Paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
                )}
              </motion.div>

              {/* Right Column: Divided Feature Rows */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-6 divide-y divide-white/10 border-y border-white/10"
              >
                {data.featuresList?.map((feature, idx) => (
                  <div key={idx} className="py-6 sm:py-7 flex items-start gap-4 sm:gap-5 group">
                    {feature.icon && (
                      <div className="text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors shrink-0 mt-0.5">
                        <ServiceIcon name={feature.icon} className="w-6 h-6 stroke-[1.6]" />
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#93C5FD] group-hover:text-[#93C5FD] transition-colors leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] font-sans font-light leading-relaxed text-zinc-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ) : isSplitHighlight ? (
          /* Split-Highlight Layout (Loss Prevention Screen 2 Reference) */
          <div className="space-y-10 sm:space-y-12">
            <div className="max-w-5xl">
              {data.notice && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                  className="border-l-2 border-[#0E2445] pl-4 sm:pl-5 space-y-1 mb-6 sm:mb-8 max-w-3xl"
                >
                  <p
                    className={`text-xs sm:text-[13px] font-sans font-medium ${
                      isLight ? 'text-[#1E293B]' : 'text-zinc-200'
                    }`}
                  >
                    {data.notice.title}
                  </p>
                  {data.notice.subtitle && (
                    <p
                      className={`text-xs sm:text-[13px] font-sans font-light ${
                        isLight ? 'text-[#64748B]' : 'text-zinc-400'
                      }`}
                    >
                      {data.notice.subtitle}
                    </p>
                  )}
                </motion.div>
              )}

              {data.eyebrow && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                    {data.eyebrow}
                  </span>
                </motion.div>
              )}

              <motion.h2
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className={`text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal ${
                  isLight ? 'text-[#151D2A]' : 'text-white'
                } leading-[1.15] tracking-tight`}
              >
                {data.headline}
              </motion.h2>
            </div>

            {/* Split row: Left narrative, Right highlight card with vertical gold accent */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-2 items-start">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className={`lg:col-span-7 space-y-5 text-sm sm:text-base md:text-[17px] ${
                  isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                } font-sans font-light leading-relaxed`}
              >
                {data.paragraph ? (
                  <p>{data.paragraph}</p>
                ) : (
                  data.column1Paragraphs?.map((p, idx) => <p key={idx}>{p}</p>)
                )}
              </motion.div>

              {data.highlightItems && data.highlightItems.length > 0 ? (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  className="lg:col-span-5 border-l-2 sm:border-l-[2.5px] border-[#0E2445] pl-6 sm:pl-8 space-y-4 py-1"
                >
                  {data.highlightItems.map((item, idx) => (
                    <p
                      key={idx}
                      className={`text-sm sm:text-base ${
                        isLight ? 'text-[#151D2A]' : 'text-white'
                      } font-sans font-normal leading-relaxed`}
                    >
                      {item}
                    </p>
                  ))}
                </motion.div>
              ) : data.highlightBox ? (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  className="lg:col-span-5 border-l-2 sm:border-l-[2.5px] border-[#0E2445] pl-6 sm:pl-8 space-y-3"
                >
                  <h3
                    className={`text-xl sm:text-2xl font-serif font-normal ${
                      isLight ? 'text-[#151D2A]' : 'text-white'
                    } leading-snug`}
                  >
                    {data.highlightBox.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      isLight ? 'text-[#64748B]' : 'text-zinc-400'
                    } font-sans font-light leading-relaxed`}
                  >
                    {data.highlightBox.description}
                  </p>
                </motion.div>
              ) : null}
            </div>
          </div>
        ) : isTwoColumn ? (
          /* Two-Column Prose Layout (Executive Security Screen 2 Reference) */
          <div className="space-y-10 sm:space-y-12">
            <div className="space-y-4 max-w-5xl">
              {data.eyebrow ? (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                    {data.eyebrow}
                  </span>
                </motion.div>
              ) : !data.hideTopBar ? (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-[2px] bg-[#0E2445] origin-left mb-6"
                />
              ) : null}

              <motion.h2
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className={`text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal ${
                  isLight ? 'text-[#151D2A]' : 'text-white'
                } leading-[1.15] tracking-tight`}
              >
                {data.headline}
              </motion.h2>
            </div>

            {/* 2 Columns of Narrative Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className={`space-y-5 text-sm sm:text-base md:text-[17px] ${
                  isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                } font-sans font-light leading-relaxed`}
              >
                {data.column1Paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className={`space-y-5 text-sm sm:text-base md:text-[17px] ${
                  isLight ? 'text-[#4A5568]' : 'text-zinc-300'
                } font-sans font-light leading-relaxed`}
              >
                {data.column2Paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>
            </div>

            {/* Bottom Subtle Gold Divider */}
            {!data.hideBottomDivider && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.8 }}
                className={`w-full h-px ${
                  isLight ? 'bg-black/10' : 'bg-[#0E2445]/30'
                } pt-0 mt-12 sm:mt-16 origin-left`}
              />
            )}
          </div>
        ) : isCentered ? (
          /* Centered layout matching Estate Security Screenshot 2 */
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            {/* Centered gold accent bar */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="w-16 h-[2px] bg-[#0E2445] mx-auto"
            />

            {data.eyebrow && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                  {data.eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h2
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight"
            >
              {data.headline}
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-3xl mx-auto"
            >
              {data.paragraph}
            </motion.p>
          </div>
        ) : (
          /* Left-aligned layout with left vertical gold bar (Corporate Security style) */
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {data.eyebrow && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#93C5FD]">
                  {data.eyebrow}
                </span>
              </motion.div>
            )}

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l-2 sm:border-l-[3px] border-[#0E2445] pl-6 sm:pl-10 space-y-5 sm:space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12] tracking-tight">
                {data.headline}
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-light leading-relaxed max-w-3xl">
                {data.paragraph}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
