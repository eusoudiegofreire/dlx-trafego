import type { Metadata } from "next";
import BioHero from "@/components/sections/BioHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import { SITE_URL, site } from "@/config/site";
import { JsonLd, businessNode } from "@/lib/seo";

export const metadata: Metadata = {
  // no `title` here on purpose — inherits the root layout's
  // `default: site.name` ("DLX Digital") instead of going through the
  // "%s | DLX Digital" template, which would duplicate the brand name
  description: site.bio.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.bio.tagline,
    url: SITE_URL,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.bio.tagline,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    businessNode(),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function BioPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="section-dark min-h-screen flex flex-col">
        <BioHero />
        <LogoMarquee />
        <footer className="pb-10 text-center">
          <p className="text-faint text-[12px]">
            © {new Date().getFullYear()} DLX Digital
          </p>
        </footer>
      </main>
    </>
  );
}
