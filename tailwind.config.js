const createJiti = require('jiti');
const jiti = createJiti(process.cwd());
const { tokens } = jiti('./src/theme/tokens.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandColor: tokens.colors.brandColor,
        brandHover: tokens.colors.brandHover,
        brandDark: tokens.colors.brandDark,
        brandDeep: tokens.colors.brandDeep,
        brandSoft: tokens.colors.brandSoft,
        brandBorder: tokens.colors.brandBorder,
        brandBorderHover: tokens.colors.brandBorderHover,
        brandPurple: tokens.colors.brandPurple,
        brandPurpleHover: tokens.colors.brandPurpleHover,
        brandPurpleDark: tokens.colors.brandPurpleDark,
        brandPurpleDeep: tokens.colors.brandPurpleDeep,
        brandPurpleSoft: tokens.colors.brandPurpleSoft,
        brandPurpleBorder: tokens.colors.brandPurpleBorder,
        brandPurpleBorderHover: tokens.colors.brandPurpleBorderHover,
        pureWhite: tokens.colors.pureWhite,
        lightSurface: tokens.colors.lightSurface,
        lightSurfaceAlt: tokens.colors.lightSurfaceAlt,
        lightBorder: tokens.colors.lightBorder,
        lightTextPrimary: tokens.colors.lightTextPrimary,
        lightTextSecondary: tokens.colors.lightTextSecondary,
        lightTextMuted: tokens.colors.lightTextMuted,
        matteBlack: tokens.colors.matteBlack,
        deepCarbon: tokens.colors.deepCarbon,
        obsidian: tokens.colors.obsidian,
        graphite: tokens.colors.graphite,
        tacticalGray: tokens.colors.tacticalGray,
        slateGold: tokens.colors.slateGold,
        metallicGold: tokens.colors.metallicGold,
        armorWhite: tokens.colors.armorWhite,
        alertRed: tokens.colors.alertRed,
        goldMuted: tokens.colors.goldMuted,
        goldBorder: tokens.colors.goldBorder,
        tacticalBorder: tokens.colors.tacticalBorder,
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-heading)', 'var(--font-sans)', 'sans-serif'],
        body: ['var(--font-body)', 'var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        tactical: tokens.shadows.tactical,
        brandGlow: tokens.shadows.brandGlow,
        brandGlowLg: tokens.shadows.brandGlowLg,
        purpleGlow: tokens.shadows.brandGlow,
        purpleGlowLg: tokens.shadows.brandGlowLg,
        softCard: tokens.shadows.softCard,
        softCardHover: tokens.shadows.softCardHover,
      },
      zIndex: tokens.zIndex,
    },
  },
  plugins: [],
};
