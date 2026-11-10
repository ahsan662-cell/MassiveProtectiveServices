'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { BlogArticle, ComparisonTable } from '@/data/blogArticlesData';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  FileText,
  Share2,
  Check,
  Bookmark,
  ChevronDown,
  Scale,
  Sparkles,
  Award,
} from 'lucide-react';

interface Props {
  article: BlogArticle;
}

/**
 * Parses markdown links like [label](url) and converts them into Next.js Links
 */
const renderFormattedText = (text: string) => {
  const parts: (string | React.ReactNode)[] = [];
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const rawUrl = match[2];
    const localUrl = rawUrl.replace('https://massiveprotectiveservices.com', '') || '/';
    parts.push(
      <Link
        key={match.index}
        href={localUrl}
        className="text-[#93C5FD] hover:text-white underline underline-offset-4 font-medium transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const RenderComparisonTable: React.FC<{ table: ComparisonTable }> = ({ table }) => (
  <div className="my-8 rounded-sm bg-[#0B1324] border border-white/[0.08] p-6 sm:p-8 space-y-5 shadow-xl">
    <div className="space-y-1">
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#93C5FD]">
        Published Market Data
      </span>
      <h3 className="text-xl sm:text-2xl font-serif text-white">
        {table.title}
      </h3>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-white/[0.08] text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
            {table.headers.map((h, hIdx) => (
              <th key={hIdx} className="pb-3 px-3 first:pl-0 last:pr-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`py-3.5 px-3 first:pl-0 last:pr-0 ${
                    cIdx === 0
                      ? 'font-medium text-white'
                      : cIdx === 1
                      ? 'text-[#93C5FD] font-mono font-semibold'
                      : 'text-zinc-400 font-light text-xs'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {table.sourceNote && (
      <p className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/[0.06] leading-relaxed">
        {table.sourceNote}
      </p>
    )}
  </div>
);

export const BlogPostView: React.FC<Props> = ({ article }) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [copied, setCopied] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Copy link handler
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Track active section for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = article.sections.map((_, idx) =>
        document.getElementById(`section-${idx}`)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHeading(`section-${i}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.sections]);

  return (
    <div className="relative w-full flex-1 flex flex-col overflow-x-clip bg-[#070D18] text-white selection:bg-[#0E2445] selection:text-white">
      {/* 1. Sleek Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E2445] via-[#3B82F6] to-[#93C5FD] z-[100] origin-left shadow-[0_0_12px_rgba(23,58,110,0.6)]"
        style={{ scaleX }}
      />

      {/* 2. Tactical Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E2445]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-96 right-0 w-[500px] h-[500px] bg-[#162548]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Hero Header Section */}
      <header className="relative w-full pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-white/[0.08] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs & Share Button */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-zinc-600">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Security Intelligence
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-[#93C5FD] truncate max-w-[180px] sm:max-w-xs font-mono text-[11px] uppercase tracking-wider">
                {article.topicGroup}
              </span>
            </nav>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Share this article"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#93C5FD]" />
                  <span className="text-[#93C5FD] font-medium">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Share Guide</span>
                </>
              )}
            </button>
          </div>

          {/* Category Pill with Live Tactical Pulse */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#0E2445]/15 text-[#93C5FD] border border-[#0E2445]/40 shadow-[0_0_15px_rgba(14,36,69,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] animate-pulse" />
              {article.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">
              FDACS Lic. B1400200 Verified
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-serif font-normal text-white leading-[1.12] tracking-tight"
          >
            {article.title}
          </motion.h1>

          {/* Subtitle / Short Answer */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-4xl"
          >
            {renderFormattedText(article.subtitle)}
          </motion.p>

          {/* Author & Executive Credential Bar */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400"
          >
            <div className="flex items-center gap-3">
              {article.authorPhoto ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#0E2445] shadow-md shrink-0">
                  <Image
                    src={article.authorPhoto}
                    alt={article.author}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#101A2D] border border-[#0E2445]/60 flex items-center justify-center text-[#93C5FD] font-serif font-bold text-base shadow-md">
                  MT
                </div>
              )}
              <div>
                <div className="text-white font-medium flex items-center gap-1.5">
                  <span>{article.author}</span>
                  <Award className="w-3.5 h-3.5 text-[#93C5FD]" />
                </div>
                <div className="text-[11px] text-zinc-400">{article.authorTitle}</div>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#93C5FD]" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#93C5FD]" />
                <span>{article.readTime}</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#93C5FD]" />
                <span>{article.wordCount}</span>
              </div>
            </div>
          </motion.div>

          {/* 📸 Image 1 — Hero / Top of Post (Full-width, max 1200px, lazy-load off) */}
          {article.heroImage && (
            <motion.figure
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 max-w-[1200px] mx-auto"
            >
              <div className="rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0B1324]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    width={article.heroImage.width || 1200}
                    height={article.heroImage.height || 675}
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {article.heroImage.caption && (
                  <figcaption className="p-3.5 text-xs font-mono text-zinc-400 border-t border-white/[0.06] bg-[#070D18]/90">
                    {article.heroImage.caption}
                  </figcaption>
                )}
              </div>
            </motion.figure>
          )}
        </div>
      </header>

      {/* 4. Two-Column Layout: Sticky Sidebar (Left) + Article Body (Right) */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Table of Contents & Quick Dispatch Box */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
            {/* Table of Contents Box */}
            <div className="rounded-sm bg-[#0B1324] border border-white/[0.08] p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
                  <Bookmark className="w-4 h-4" />
                  <span>Briefing Contents</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  {article.sections.length} Sections
                </span>
              </div>

              <nav aria-label="Table of Contents" className="space-y-1 text-xs">
                {article.sections.map((section, idx) => {
                  const targetId = `section-${idx}`;
                  const isActive = activeHeading === targetId;

                  return (
                    <a
                      key={idx}
                      href={`#${targetId}`}
                      className={`block py-1.5 px-2.5 rounded-sm transition-all leading-snug ${
                        isActive
                          ? 'bg-[#0E2445]/15 text-[#93C5FD] font-medium border-l-2 border-[#0E2445]'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      {section.heading}
                    </a>
                  );
                })}

                {article.faqs.length > 0 && (
                  <a
                    href="#faqs-section"
                    className="block py-1.5 px-2.5 rounded-sm text-zinc-400 hover:text-white hover:bg-white/[0.02] transition-colors leading-snug"
                  >
                    Frequently Asked Questions ({article.faqs.length})
                  </a>
                )}
              </nav>
            </div>

            {/* Author Credential Card */}
            <div className="rounded-sm bg-[#080E1A] border border-[#0E2445]/30 p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#93C5FD]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-white">
                  Author Box
                </span>
              </div>
              <div className="flex items-center gap-3">
                {article.authorPhoto && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#0E2445]/70 shrink-0">
                    <Image
                      src={article.authorPhoto}
                      alt={article.author}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-serif text-white font-medium">
                    {article.author}
                  </h4>
                  <p className="text-[10px] text-[#93C5FD] font-mono">
                    Owner, Massive Protective Services Inc.
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 font-sans font-light leading-relaxed">
                {article.authorBio}
              </p>
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Agency HQ: Delray Beach</span>
                <span className="text-[#93C5FD]">FL Lic. B1400200</span>
              </div>
            </div>

            {/* Direct Commander Priority Hotline */}
            <div className="rounded-sm bg-gradient-to-br from-[#101A2D] to-[#0A111F] border border-white/10 p-5 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD]">
                Immediate Deployment
              </div>
              <h4 className="text-sm font-serif text-white">Need On-Site Protection in South Florida?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Speak directly with an active operations commander. Rapid emergency response time across Palm Beach, Broward, Miami-Dade &amp; Martin counties.
              </p>
              <a
                href="tel:9542347231"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-sm bg-[#0E2445]/25 hover:bg-[#0E2445]/40 text-[#93C5FD] border border-[#0E2445]/50 text-xs font-mono font-medium tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (954) 234-7231</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Editorial Article Content */}
          <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
            {/* Executive Key Takeaways Callout */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-sm bg-gradient-to-br from-[#0B1324] via-[#0A111F] to-[#080E1A] border-l-4 border-l-[#0E2445] border-y border-r border-white/[0.08] p-6 sm:p-8 shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-2.5 text-[#93C5FD]">
                <Sparkles className="w-5 h-5 text-[#93C5FD]" />
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold text-white">
                  Executive Summary &amp; Key Takeaways
                </h2>
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                    <span>{renderFormattedText(takeaway)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Commander's Field Note Callout */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-sm bg-[#101A2D]/80 border border-[#0E2445]/40 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0E2445]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#93C5FD] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{article.fieldNote.title}</span>
                </div>
                <blockquote className="text-sm sm:text-base font-serif italic text-zinc-100 leading-relaxed border-l-2 border-[#0E2445] pl-4 py-1">
                  &ldquo;{article.fieldNote.quote}&rdquo;
                </blockquote>
                <div className="text-[11px] font-mono text-zinc-400 pl-4">
                  — {article.fieldNote.context}
                </div>
              </div>
            </motion.div>

            {/* Main Sections with Contextual Table & Mid-Article Image Placement */}
            <div className="space-y-12 text-zinc-200 text-sm sm:text-base leading-relaxed font-sans">
              {article.sections.map((section, idx) => (
                <React.Fragment key={idx}>
                  <section
                    id={`section-${idx}`}
                    className="space-y-5 pt-4 scroll-mt-28"
                  >
                    <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight border-b border-white/[0.08] pb-3 flex items-center justify-between">
                      <span>{section.heading}</span>
                      <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                    </h2>

                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-zinc-300 font-light leading-relaxed ${
                          idx === 0 && pIdx === 0
                            ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#93C5FD] first-letter:leading-none'
                            : ''
                        }`}
                      >
                        {renderFormattedText(p)}
                      </p>
                    ))}

                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-3.5 pl-2 my-4">
                        {section.bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0E2445] shrink-0 mt-2" />
                            <span>{renderFormattedText(bp)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="rounded-sm bg-[#080E1A] border-l-4 border-[#0E2445] p-5 my-6 space-y-2">
                        <h3 className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white">
                          {section.callout.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                          {renderFormattedText(section.callout.text)}
                        </p>
                      </div>
                    )}
                  </section>

                  {/* Section-level Table(s) */}
                  {section.table && <RenderComparisonTable table={section.table} />}
                  {section.tables && section.tables.map((t, tIdx) => (
                    <RenderComparisonTable key={tIdx} table={t} />
                  ))}

                  {/* Article-level Table Placement: After Section 0 if no section table */}
                  {idx === 0 && article.comparisonTable && !section.table && (
                    <RenderComparisonTable table={article.comparisonTable} />
                  )}

                  {/* 📸 Image 2 — Mid-Article (centered, max-w-[800px], lazy-loaded) */}
                  {idx === (article.midImageIndex ?? 1) && article.midImage && (
                    <figure className="my-10 rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0B1324] max-w-[800px] mx-auto">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={article.midImage.src}
                          alt={article.midImage.alt}
                          width={article.midImage.width || 800}
                          height={article.midImage.height || 450}
                          loading="lazy"
                          sizes="(max-width: 800px) 100vw, 800px"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {article.midImage.caption && (
                        <figcaption className="p-3 text-xs font-mono text-zinc-400 border-t border-white/[0.06] bg-[#070D18]/90 text-center">
                          {article.midImage.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Statutory Citation Card */}
            {article.statutoryCitation && (
              <div className="rounded-sm bg-[#080E1A] border border-[#0E2445]/30 p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#93C5FD]">
                  <Scale className="w-4 h-4" />
                  <span>{article.statutoryCitation.statute}</span>
                </div>
                <h3 className="text-base font-serif text-white">
                  {article.statutoryCitation.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {article.statutoryCitation.explanation}
                </p>
              </div>
            )}

            {/* Interactive Frequently Asked Questions */}
            {article.faqs.length > 0 && (
              <section id="faqs-section" className="space-y-5 pt-8 scroll-mt-28">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#93C5FD]">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white">
                    Direct Pricing &amp; Operational Answers
                  </h2>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIndex === fIdx;

                    return (
                      <div
                        key={fIdx}
                        className="rounded-sm bg-[#0B1324] border border-white/[0.08] overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                          className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-medium text-white hover:text-[#93C5FD] transition-colors cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#93C5FD] shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-white/[0.04]">
                                {renderFormattedText(faq.answer)}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Contextual Internal Link Bridge Card */}
            <div className="rounded-sm bg-gradient-to-r from-[#0B1220] to-[#080E1A] border border-[#0E2445]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#93C5FD]">
                  Related Armed Capability
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white">
                  {article.relatedService.label}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">
                  {article.relatedService.description}
                </p>
              </div>
              <Link
                href={article.relatedService.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0E2445] rounded-sm hover:brightness-110 transition-all shrink-0 cursor-pointer"
              >
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Direct Consultation & Priority Hotline Action Box */}
            <div className="rounded-sm bg-gradient-to-br from-[#101A2D] via-[#0B1324] to-[#070D18] border border-[#0E2445]/50 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#93C5FD]">
                  Confidential Operations Desk
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-white">
                  Need a Number for Your Situation?
                </h2>
              </div>
              <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Tell us who needs protection, where, and for how long. Our operations team is available 24/7 across Palm Beach, Broward, Miami-Dade, and Martin counties. We send a tailored quote after a short, confidential consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href={`/contact?inquiry=${encodeURIComponent(article.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0E2445] rounded-sm hover:brightness-110 transition-all shadow-lg shadow-[#0E2445]/25 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request a Confidential Quote</span>
                </Link>
                <a
                  href="tel:9542347231"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-white border border-white/20 rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#93C5FD]" />
                  <span>Call Dispatch: (954) 234-7231</span>
                </a>
              </div>
            </div>

            {/* Back to Blog Hub */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#93C5FD] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to All Security Intelligence &amp; Guides</span>
              </Link>
              <span className="text-xs font-mono text-zinc-500">Delray Beach, Florida</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostView;
