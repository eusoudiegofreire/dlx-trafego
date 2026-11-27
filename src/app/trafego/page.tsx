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
import { FAQS } from "@/content/trafego-faq";
import { BUSINESS_ID, JsonLd, breadcrumbNode, businessNode, faqNode } from "@/lib/seo";

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
    "tráfego pago Ariquemes",
    "gestor de tráfego Rondônia",
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

const URL_TRAFEGO = `${SITE_URL}/trafego`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    businessNode(),
    {
      "@type": "Service",
      "@id": `${URL_TRAFEGO}#service`,
      name: "Tráfego Pago (Meta Ads e Google Ads)",
      serviceType: "Gestão de tráfego pago",
      description:
        "Gestão de campanhas de anúncios pagos para negócios locais, com diagnóstico, criação de campanha, otimização diária e relatório de resultados.",
      url: URL_TRAFEGO,
      provider: { "@id": BUSINESS_ID },
      areaServed: site.cities.map((c) => ({ "@type": "City", name: `${c}, ${site.region}` })),
    },
    breadcrumbNode(URL_TRAFEGO, [
      { name: "Início", path: "/" },
      { name: "Tráfego pago", path: "/trafego" },
    ]),
    faqNode(URL_TRAFEGO, FAQS),
  ],
};

export default function TrafegoPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
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
