import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { SITE_URL, site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "tráfego pago",
    "gestão de anúncios",
    "Meta Ads",
    "Google Ads",
    "marketing digital Rondônia",
    "agência de tráfego pago",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: SITE_URL,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  description: site.description,
  areaServed: site.areaServed,
  sameAs: [site.instagram],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Tráfego Pago (Meta Ads e Google Ads)",
      description:
        "Gestão de campanhas de anúncios pagos para negócios locais, com diagnóstico, criação de campanha, otimização diária e relatório de resultados.",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <MotionProvider>{children}</MotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
