'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const TOPICS = [
  'All',
  'Executive Protection',
  'Pricing & Costs',
  'Licensing',
  'Event Security',
  'Estate Security',
  'Florida Law',
] as const;

export type TopicType = (typeof TOPICS)[number];

interface BlogTopicsFilterSectionProps {
  selectedTopic: TopicType;
  onSelectTopic: (topic: TopicType) => void;
}

export const BlogTopicsFilterSection: React.FC<BlogTopicsFilterSectionProps> = ({
  selectedTopic,
  onSelectTopic,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Browse by Topic"
      className="w-full bg-[#0A111F] text-white py-8 sm:py-10 border-y border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Eyebrow matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] text-[#93C5FD] uppercase">
            BROWSE BY TOPIC
          </span>
        </motion.div>

        {/* Pill Tags Row matching Screenshot 3 */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
        >
          {TOPICS.map((topic) => {
            const isSelected = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => onSelectTopic(topic)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-300 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#0E2445] text-white font-semibold shadow-[0_2px_14px_rgba(14, 36, 69, 0.4)] scale-105'
                    : 'border border-[#0E2445]/40 text-zinc-300 hover:border-[#0E2445] hover:text-white bg-[#0B1220]/50'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogTopicsFilterSection;
