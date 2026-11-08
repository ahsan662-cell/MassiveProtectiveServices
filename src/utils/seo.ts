/**
 * Site-wide SEO, Domain, and Canonical URL Configuration
 * Primary domain: https://www.Massiveprotectiveservices.com
 */

export const SITE_URL = 'https://www.massiveprotectiveservices.com';

/**
 * Returns a fully qualified, absolute canonical URL pointing to the primary www domain.
 * @param path - e.g. '/locations/miami' or 'locations/miami' or ''
 */
export function getCanonicalUrl(path: string = ''): string {
  if (!path || path === '/') {
    return SITE_URL;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash if present
  const normalizedPath = cleanPath.length > 1 && cleanPath.endsWith('/')
    ? cleanPath.slice(0, -1)
    : cleanPath;
  return `${SITE_URL}${normalizedPath}`;
}

