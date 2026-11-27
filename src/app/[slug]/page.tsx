import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";
import KineticWord from "@/components/ui/KineticWord";
import LogoMarquee from "@/components/sections/LogoMarquee";
import ServiceHero from "@/components/servico/ServiceHero";
import ServicePain from "@/components/servico/ServicePain";
import ServiceSteps from "@/components/servico/ServiceSteps";
import ServiceIncludes from "@/components/servico/ServiceIncludes";
import ServiceLocal from "@/components/servico/ServiceLocal";
import ServiceFaq from "@/components/servico/ServiceFaq";
import RelatedServices from "@/components/servico/RelatedServices";
import ServiceCTA from "@/components/servico/ServiceCTA";
import { SERVICES, getService } from "@/content/servicos";
import { SITE_URL, site } from "@/config/site";
import { BUSINESS_ID, JsonLd, breadcrumbNode, businessNode, faqNode } from "@/lib/seo";

// Só os slugs de content/servicos.ts existem; qualquer outro vira 404
// (não deixa a rota dinâmica "engolir" URLs inventadas).
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  const url = `${SITE_URL}/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} | ${site.name}`,
      description: s.metaDescription,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${s.metaTitle} | ${site.name}`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const url = `${SITE_URL}/${s.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.serviceType,
        description: s.metaDescription,
        url,
        provider: { "@id": BUSINESS_ID },
        areaServed: site.cities.map((c) => ({ "@type": "City", name: `${c}, ${site.region}` })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `O que está incluso: ${s.name}`,
          itemListElement: s.includes.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${s.metaTitle} | ${site.name}`,
        description: s.metaDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumbNode(url, [
        { name: "Início", path: "/" },
        { name: "Serviços", path: "/servicos" },
        { name: s.name, path: `/${s.slug}` },
      ]),
      faqNode(url, s.faqs),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <StackSection mode="dark" seam={false}>
          <ServiceHero service={s} />
        </StackSection>
        <StackSection mode="dark" seam={false} minHeight={false}>
          <LogoMarquee />
        </StackSection>
        <StackSection mode="dark" minHeight={false}>
          <ServicePain service={s} />
        </StackSection>
        {/* sem overflow-hidden aqui: o título dos passos é sticky */}
        <section id="como-funciona" className="section-light relative scroll-mt-[100px]">
          <ServiceSteps service={s} />
        </section>
        <StackSection mode="dark" minHeight={false}>
          <ServiceIncludes service={s} />
        </StackSection>
        <KineticWord word={s.kinetic} />
        <StackSection mode="light" minHeight={false}>
          <ServiceLocal service={s} />
        </StackSection>
        <StackSection mode="dark" minHeight={false}>
          <ServiceFaq faqs={s.faqs} title={`Dúvidas sobre ${s.name}`} />
        </StackSection>
        <StackSection mode="dark" minHeight={false}>
          <RelatedServices slugs={s.related} />
        </StackSection>
        <StackSection mode="orange" id="cta" minHeight={false}>
          <ServiceCTA title={s.ctaTitle} text={s.ctaText} message={s.ctaMessage} />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
