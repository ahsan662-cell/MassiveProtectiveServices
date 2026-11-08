'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TopicType } from './BlogTopicsFilterSection';
import { BLOG_ARTICLES, BlogArticle } from '@/data/blogArticlesData';

export type Article = BlogArticle;
export const ARTICLES = BLOG_ARTICLES;

interface BlogArticlesGridSectionProps {
  selectedTopic: TopicType;
}

export const BlogArticlesGridSection: React.FC<BlogArticlesGridSectionProps> = ({
  selectedTopic,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const filteredArticles =
    selectedTopic === 'All'
      ? ARTICLES
      : ARTICLES.filter((art) => art.topicGroup === selectedTopic);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="articles"
      aria-label="All Security Guides and Articles"
      className="relative w-full bg-[#0A111F] text-white py-14 sm:py-18 lg:py-20 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header matching Screenshot 2 */}
        <div className="space-y-4">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-[13px] font-mono font-medium tracking-[0.25em] text-[#C5A880] uppercase">
              ALL ARTICLES
            </span>
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.15] tracking-tight max-w-4xl"
          >
            Guides, Pricing and Licensing Resources
          </motion.h2>
        </div>

        {/* 3-Column Card Grid matching Screenshot 2 */}
        <motion.div
          key={selectedTopic}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-sm bg-[#0B1220] border border-[#C5A880]/50 p-7 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#C5A880] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.12)] min-h-[380px]"
            >
              <div className="space-y-4">
                {/* Category Tag */}
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block font-semibold">
                  {article.category}
                </span>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#F5F5F7] leading-snug">
                  <Link href={`/blog/${article.slug}`} className="hover:text-[#C5A880] transition-colors">
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Meta & Action Link */}
              <div className="pt-6 border-t border-white/[0.08] mt-6 space-y-3">
                <div className="text-[11px] font-sans text-zinc-400">
                  {article.author} · {article.date} · {article.readTime}
                </div>

                <div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#C5A880] group-hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Read the Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogArticlesGridSection;
