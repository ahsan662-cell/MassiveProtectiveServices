import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/provider";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SplashScreen } from "@/components/common/SplashScreen";
import { FloatingChatbot } from "@/components/chat/FloatingChatbot";

import { JsonLd } from "@/components/seo/JsonLd";
import { getLocalBusinessSchema } from "@/utils/schema";
import { SITE_URL } from "@/utils/seo";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: "Massive Protective Services (MPS) | Armed Security & Executive Protection",
  description:
    "A licensed private security firm headquartered in Delray Beach — serving estates, executives, events and organizations across Palm Beach, Broward and Miami-Dade Counties. FDACS License B1400200. Zero unarmed guards.",
  authors: [{ name: "Massive Protective Services" }],
  creator: "Massive Protective Services",
  publisher: "Massive Protective Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/new-logo.ico", sizes: "any" },
    ],
    shortcut: "/new-logo.ico",
    apple: "/new-logo.ico",
  },
  openGraph: {
    title: "Massive Protective Services | Sovereign Armed Protection",
    description:
      "100% Class G Armed Operators. Zero unarmed guards. Zero subcontracting. Regulated under Chapter 493, Florida Statutes. FDACS License B1400200.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Massive Protective Services",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) - Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WEPVNWJT8B"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WEPVNWJT8B', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-53DPPQC7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen max-w-[100vw] overflow-x-clip flex flex-col bg-[#0A0A0A] text-[#F8FAFC]"
      >
        <JsonLd data={getLocalBusinessSchema()} />
        <StoreProvider>
          <ErrorBoundary>
            {/* Executive Loading Splash Screen with Lion Emblem (elitesecurity.pro style) */}
            <SplashScreen />

            {/* Global Tactical Header with Blur Backdrop */}
            <Header />

            {/* Main Application Content Container with Zero-Horizontal-Overflow */}
            <main
              id="main-content"
              className="flex-1 w-full max-w-[100vw] overflow-x-clip flex flex-col"
            >
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>

            {/* Global Chapter 493 Statutory Footer */}
            <Footer />

            {/* Floating Security Chatbot & Direct WhatsApp Launcher */}
            <FloatingChatbot />
          </ErrorBoundary>
        </StoreProvider>
      </body>
    </html>
  );
}
