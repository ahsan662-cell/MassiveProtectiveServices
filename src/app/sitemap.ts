import { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/seo';
import { BLOG_ARTICLES } from '@/data/blogArticlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core Static Pages
  const corePages = [
    { url: `${SITE_URL}`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/licensing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/careers`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/testimonials`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // 10 Armed & Protection Service Pages (excluding unarmed guards per firm constraint)
  const servicePages = [
    'executive-protection',
    'estate-security',
    'event-security',
    'armed-officers',
    'vip-celebrity-protection',
    'concierge-security',
    'corporate-security',
    'loss-prevention',
    'mobile-patrol',
    'school-security',
  ].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
    lastModified,
  }));

  // 8 Security Intelligence Blog Articles
  const blogArticlePages = BLOG_ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified,
  }));

  // Locations Index + 19 Location Pages
  const locationPages = [
    { url: `${SITE_URL}/locations`, priority: 0.9, changeFrequency: 'weekly' as const, lastModified },
    ...[
      'aventura',
      'boca-raton',
      'boynton-beach',
      'delray-beach',
      'fort-lauderdale',
      'gulf-stream',
      'hillsboro-beach',
      'jacksonville',
      'lighthouse-point',
      'manalapan',
      'miami',
      'miami-beach',
      'naples',
      'ocean-ridge',
      'orlando',
      'palm-beach',
      'sarasota',
      'tampa',
      'west-palm-beach',
    ].map((slug) => ({
      url: `${SITE_URL}/locations/${slug}`,
      priority: 0.85,
      changeFrequency: 'weekly' as const,
      lastModified,
    })),
  ];

  return [
    ...corePages.map((p) => ({ ...p, lastModified })),
    ...servicePages,
    ...blogArticlePages,
    ...locationPages,
  ];
}

