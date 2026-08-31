import type { Metadata } from "next";
import BioHero from "@/components/sections/BioHero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import { SITE_URL, site } from "@/config/site";

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
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  description: site.bio.tagline,
  areaServed: site.areaServed,
  sameAs: [site.instagram],
};

export default function BioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
