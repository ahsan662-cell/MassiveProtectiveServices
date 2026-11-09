/**
 * Massive Protective Services (MPS) - Unified Design Tokens
 * Single source of truth for brand colors, typography, elevations, and tactical accents.
 * Brand Colors: Executive Midnight Navy Blue (#0E2445), Crisp Pure White, Soft Surface Blue, Matte Black & Obsidian
 * 
 * FDACS License B1400200 | Chapter 493, Florida Statutes
 */

export const tokens = {
  colors: {
    // Primary Brand Palette: Executive Midnight Navy Blue (#0E2445)
    brandColor: '#0E2445',         // Exact #0E2445
    brandHover: '#173A6E',         // Elevated hover state
    brandDark: '#08172E',          // Deep navy-midnight tone
    brandDeep: '#050F1E',          // Deepest navy-black tone
    brandSoft: '#F0F4FA',          // Subtle executive ice blue tint for badges on white
    brandMuted: 'rgba(14, 36, 69, 0.12)',
    brandBorder: 'rgba(14, 36, 69, 0.25)',
    brandBorderHover: 'rgba(14, 36, 69, 0.6)',

    // Aliases for seamless backward-compatibility
    brandPurple: '#0E2445',
    brandPurpleHover: '#173A6E',
    brandPurpleDark: '#08172E',
    brandPurpleDeep: '#050F1E',
    brandPurpleSoft: '#F0F4FA',
    brandPurpleMuted: 'rgba(14, 36, 69, 0.12)',
    brandPurpleBorder: 'rgba(14, 36, 69, 0.25)',
    brandPurpleBorderHover: 'rgba(14, 36, 69, 0.6)',

    // Pure White & Light Surfaces
    pureWhite: '#FFFFFF',
    lightSurface: '#F8FAFC',
    lightSurfaceAlt: '#F1F5F9',
    lightBorder: '#E2E8F0',
    lightTextPrimary: '#0F172A',
    lightTextSecondary: '#334155',
    lightTextMuted: '#64748B',

    // Deep Black & Obsidian
    matteBlack: '#0A0A0A',
    deepCarbon: '#111116',
    obsidian: '#0E0E14',
    graphite: '#1A1A24',
    tacticalGray: '#2D2D3A',
    darkBorder: 'rgba(255, 255, 255, 0.08)',
    darkBorderHover: 'rgba(14, 36, 69, 0.6)',
    darkTextPrimary: '#FFFFFF',
    darkTextSecondary: '#CBD5E1',
    darkTextMuted: '#94A3B8',

    // Supporting Status Accents
    alertRed: '#DC2626',
    alertRedMuted: 'rgba(220, 38, 38, 0.15)',
    successGreen: '#16A34A',

    // Compatibility aliases
    slateGold: '#0E2445',
    metallicGold: '#0E2445',
    armorWhite: '#FFFFFF',
    goldMuted: 'rgba(14, 36, 69, 0.12)',
    goldBorder: 'rgba(14, 36, 69, 0.25)',
    goldBorderHover: 'rgba(14, 36, 69, 0.6)',
    tacticalBorder: 'rgba(255, 255, 255, 0.08)',
    tacticalBorderHover: 'rgba(14, 36, 69, 0.6)',
    surfaceGlass: 'rgba(14, 14, 20, 0.85)',
    surfaceGlassHover: 'rgba(26, 26, 36, 0.92)',
  },

  typography: {
    fontSans: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontBody: 'var(--font-body), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'var(--font-mono), monospace',
  },

  gradients: {
    brand: 'linear-gradient(135deg, #0E2445 0%, #173A6E 50%, #08172E 100%)',
    brandSubtle: 'linear-gradient(135deg, rgba(14, 36, 69, 0.15) 0%, rgba(23, 58, 110, 0.08) 100%)',
    carbon: 'linear-gradient(180deg, #111116 0%, #0A0A0A 100%)',
    obsidianBrand: 'linear-gradient(180deg, #071224 0%, #0A0A0A 100%)',
    radialGlow: 'radial-gradient(circle at 50% 0%, rgba(14, 36, 69, 0.25) 0%, transparent 70%)',
  },

  shadows: {
    tactical: '0 4px 24px -2px rgba(0, 0, 0, 0.8)',
    tacticalLg: '0 12px 48px -4px rgba(0, 0, 0, 0.95)',
    brandGlow: '0 0 20px rgba(14, 36, 69, 0.35)',
    brandGlowLg: '0 0 40px rgba(14, 36, 69, 0.5)',
    softCard: '0 4px 20px rgba(0, 0, 0, 0.05)',
    softCardHover: '0 12px 32px rgba(14, 36, 69, 0.12)',
  },

  transitions: {
    tactical: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    prestige: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },

  zIndex: {
    base: 0,
    elevated: 10,
    sticky: 20,
    header: 40,
    backdrop: 50,
    modal: 60,
    popover: 70,
    toast: 80,
    priorityDispatch: 90,
  },
} as const;

export type DesignTokens = typeof tokens;
export default tokens;
