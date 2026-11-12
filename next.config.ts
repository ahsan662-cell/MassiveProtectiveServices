import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Legacy vanity/alias redirects → now canonical /services/* paths
      {
        source: '/services/bodyguard-services',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/risk-assessment',
        destination: '/services/executive-protection',
        permanent: true,
      },
      {
        source: '/services/secure-transportation',
        destination: '/services/executive-protection',
        permanent: true,
      },
      {
        source: '/celebrity-protection',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/celebrity-protection',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/vip-protection',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/vip-protection',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/armed-security',
        destination: '/services/armed-officers',
        permanent: true,
      },
      {
        source: '/services/residential-security',
        destination: '/services/estate-security',
        permanent: true,
      },
      {
        source: '/services/yacht-security',
        destination: '/services/estate-security',
        permanent: true,
      },
      // Old root-level slugs → new /services/* canonical paths
      {
        source: '/executive-protection',
        destination: '/services/executive-protection',
        permanent: true,
      },
      {
        source: '/estate-security',
        destination: '/services/estate-security',
        permanent: true,
      },
      {
        source: '/event-security',
        destination: '/services/event-security',
        permanent: true,
      },
      {
        source: '/armed-officers',
        destination: '/services/armed-officers',
        permanent: true,
      },
      {
        source: '/armed-security',
        destination: '/services/armed-officers',
        permanent: true,
      },
      {
        source: '/unarmed-security',
        destination: '/services/unarmed-security-guards',
        permanent: true,
      },
      {
        source: '/unarmed-security-guards',
        destination: '/services/unarmed-security-guards',
        permanent: true,
      },
      {
        source: '/concierge-security',
        destination: '/services/concierge-security',
        permanent: true,
      },
      {
        source: '/corporate-security',
        destination: '/services/corporate-security',
        permanent: true,
      },
      {
        source: '/loss-prevention',
        destination: '/services/loss-prevention',
        permanent: true,
      },
      {
        source: '/mobile-patrol',
        destination: '/services/mobile-patrol',
        permanent: true,
      },
      {
        source: '/school-security',
        destination: '/services/school-security',
        permanent: true,
      },
      {
        source: '/vip-celebrity-protection',
        destination: '/services/vip-celebrity-protection',
        permanent: true,
      },
      // Blog slug fix
      {
        source: '/blog/wedding-private-party-security',
        destination: '/blog/wedding-party-security',
        permanent: true,
      },
      // Legacy service-area → locations
      {
        source: '/service-area/:slug*',
        destination: '/locations/:slug*',
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
