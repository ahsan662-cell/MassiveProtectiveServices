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
      // Root-level locations → /locations/:slug
      {
        source: '/aventura',
        destination: '/locations/aventura',
        permanent: true,
      },
      {
        source: '/boca-raton',
        destination: '/locations/boca-raton',
        permanent: true,
      },
      {
        source: '/boynton-beach',
        destination: '/locations/boynton-beach',
        permanent: true,
      },
      {
        source: '/delray-beach',
        destination: '/locations/delray-beach',
        permanent: true,
      },
      {
        source: '/fort-lauderdale',
        destination: '/locations/fort-lauderdale',
        permanent: true,
      },
      {
        source: '/gulf-stream',
        destination: '/locations/gulf-stream',
        permanent: true,
      },
      {
        source: '/hillsboro-beach',
        destination: '/locations/hillsboro-beach',
        permanent: true,
      },
      {
        source: '/jacksonville',
        destination: '/locations/jacksonville',
        permanent: true,
      },
      {
        source: '/lighthouse-point',
        destination: '/locations/lighthouse-point',
        permanent: true,
      },
      {
        source: '/manalapan',
        destination: '/locations/manalapan',
        permanent: true,
      },
      {
        source: '/miami',
        destination: '/locations/miami',
        permanent: true,
      },
      {
        source: '/miami-beach',
        destination: '/locations/miami-beach',
        permanent: true,
      },
      {
        source: '/naples',
        destination: '/locations/naples',
        permanent: true,
      },
      {
        source: '/ocean-ridge',
        destination: '/locations/ocean-ridge',
        permanent: true,
      },
      {
        source: '/orlando',
        destination: '/locations/orlando',
        permanent: true,
      },
      {
        source: '/palm-beach',
        destination: '/locations/palm-beach',
        permanent: true,
      },
      {
        source: '/sarasota',
        destination: '/locations/sarasota',
        permanent: true,
      },
      {
        source: '/tampa',
        destination: '/locations/tampa',
        permanent: true,
      },
      {
        source: '/west-palm-beach',
        destination: '/locations/west-palm-beach',
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
