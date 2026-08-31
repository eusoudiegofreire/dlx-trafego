import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Pain from "@/components/sections/Pain";
import Method from "@/components/sections/Method";
import Differentiator from "@/components/sections/Differentiator";
import Founder from "@/components/sections/Founder";
import ForWho from "@/components/sections/ForWho";
import Faq from "@/components/sections/Faq";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";
import KineticWord from "@/components/ui/KineticWord";
import { SITE_URL, site } from "@/config/site";

export const metadata: Metadata = {
  title: site.trafego.title,
  description: site.trafego.description,
  keywords: [
    "tráfego pago",
    "gestão de anúncios",
    "Meta Ads",
    "Google Ads",
    "marketing digital Rondônia",
    "agência de tráfego pago",
  ],
  alternates: {
    canonical: "/trafego",
  },
  openGraph: {
    title: `${site.trafego.title} | ${site.name}`,
    description: site.trafego.description,
    url: `${SITE_URL}/trafego`,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.trafego.title} | ${site.name}`,
    description: site.trafego.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/trafego#organization`,
  name: site.name,
  url: `${SITE_URL}/trafego`,
  description: site.trafego.description,
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

export default function TrafegoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <StackSection mode="dark" seam={false}>
          <Hero />
        </StackSection>
        <StackSection mode="dark" seam={false} minHeight={false} id="prova">
          <LogoMarquee />
        </StackSection>
        <StackSection mode="dark" seam={false}>
          <Pain />
        </StackSection>
        <StackSection mode="light">
          <Method />
        </StackSection>
        <StackSection mode="dark">
          <Differentiator />
        </StackSection>
        <KineticWord word="RESULTADO" />
        <StackSection mode="light">
          <Founder />
        </StackSection>
        <StackSection mode="dark">
          <ForWho />
        </StackSection>
        <StackSection mode="dark" seam={false}>
          <Faq />
        </StackSection>
        <StackSection mode="orange" id="cta">
          <CTAFinal />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
