import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
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
