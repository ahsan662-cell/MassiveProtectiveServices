import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  BLOG_ARTICLES,
  getBlogArticleBySlug,
} from '@/data/blogArticlesData';
import { getCanonicalUrl, SITE_URL } from '@/utils/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BlogPostView } from './components/BlogPostView';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Massive Protective Services',
    };
  }

  const url = getCanonicalUrl(`/blog/${article.slug}`);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: url,
      type: 'article',
      siteName: 'Massive Protective Services',
      locale: 'en_US',
    },
  };
}

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    url: getCanonicalUrl(`/blog/${article.slug}`),
    datePublished: '2026-11-01T08:00:00+00:00',
    dateModified: '2026-11-08T00:00:00+00:00',
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
      worksFor: {
        '@type': 'Organization',
        name: 'Massive Protective Services',
        url: SITE_URL,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Massive Protective Services',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/mps_lion_logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/blog/${article.slug}`),
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostView article={article} />
    </>
  );
}
