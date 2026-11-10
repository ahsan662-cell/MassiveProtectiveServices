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

  const postUrl = getCanonicalUrl(`/blog/${article.slug}`);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishDateIso || '2026-11-03',
        dateModified: article.publishDateIso || '2026-11-03',
        mainEntityOfPage: postUrl,
        ...(article.about && article.about.length > 0
          ? {
              about: article.about.map((item) => ({
                '@type': 'Thing',
                name: item.name,
              })),
            }
          : {}),
        author: {
          '@type': 'Person',
          name: article.author,
          url: `${SITE_URL}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Massive Protective Services Inc.',
          url: `${SITE_URL}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/mps_lion_logo.png`,
          },
        },
        ...(article.heroImage
          ? {
              image: `${SITE_URL}${article.heroImage.src}`,
            }
          : {}),
      },
      ...(article.howTo
        ? [
            {
              '@type': 'HowTo',
              name: article.howTo.name,
              step: article.howTo.step.map((s) => ({
                '@type': 'HowToStep',
                name: s.name,
                text: s.text,
              })),
            },
          ]
        : []),
      ...(article.faqs && article.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: article.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostView article={article} />
    </>
  );
}
