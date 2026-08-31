import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { SITE_URL, site } from "@/config/site";

// self-hosted via next/font — avoids the render-blocking third-party
// fonts.googleapis.com round-trip that was delaying LCP
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Clash Display isn't on next/font/google or Fontsource — self-hosted from
// the actual Fontshare files so it doesn't reintroduce a render-blocking
// third-party request (same reasoning as the Inter migration above).
const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

// Shared fallback only — each route (app/page.tsx for the bio hub,
// app/trafego/page.tsx for the paid-traffic landing) exports its own
// full metadata (title, description, OG/Twitter, JSON-LD) since they're
// different pages with different purposes now that the site is
// multi-route. This is just what renders if a route somehow doesn't
// override it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${clashDisplay.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <MotionProvider>{children}</MotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
