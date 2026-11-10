import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/services/bodyguard-services',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/executive-protection',
        destination: '/executive-protection',
        permanent: true,
      },
      {
        source: '/services/risk-assessment',
        destination: '/executive-protection',
        permanent: true,
      },
      {
        source: '/services/secure-transportation',
        destination: '/executive-protection',
        permanent: true,
      },
      {
        source: '/celebrity-protection',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/celebrity-protection',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/vip-celebrity-protection',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/services/vip-protection',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/vip-protection',
        destination: '/vip-celebrity-protection',
        permanent: true,
      },
      {
        source: '/armed-security',
        destination: '/armed-officers',
        permanent: true,
      },
      {
        source: '/unarmed-security',
        destination: '/unarmed-security-guards',
        permanent: true,
      },
      {
        source: '/services/event-security',
        destination: '/event-security',
        permanent: true,
      },
      {
        source: '/services/estate-security',
        destination: '/estate-security',
        permanent: true,
      },
      {
        source: '/services/armed-security',
        destination: '/armed-officers',
        permanent: true,
      },
      {
        source: '/services/residential-security',
        destination: '/estate-security',
        permanent: true,
      },
      {
        source: '/services/yacht-security',
        destination: '/estate-security',
        permanent: true,
      },
      {
        source: '/blog/wedding-private-party-security',
        destination: '/blog/wedding-party-security',
        permanent: true,
      },
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
