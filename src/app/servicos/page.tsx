import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TiltCard from "@/components/ui/TiltCard";
import ServiceCTA from "@/components/servico/ServiceCTA";
import { SERVICES } from "@/content/servicos";
import { SITE_URL, site } from "@/config/site";
import { JsonLd, breadcrumbNode, businessNode } from "@/lib/seo";

const title = "Serviços de Marketing Digital em Ariquemes";
const description =
  "Tráfego pago, Meta Ads, Google Ads, automação de WhatsApp e edição de vídeo para negócios locais de Ariquemes e Rondônia. Conheça os serviços da DLX Digital.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/servicos" },
  openGraph: { title: `${title} | ${site.name}`, description, url: `${SITE_URL}/servicos`, siteName: site.name, locale: site.locale, type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
};

// Páginas que existem fora de /[slug] mas também são serviço
const EXTRA = [
  { href: "/trafego", eyebrow: "Tráfego pago · Visão geral", name: "Tráfego pago para negócios locais", text: site.trafego.description },
  { href: "/delivery", eyebrow: "Nicho · Delivery e restaurantes", name: "Tráfego pago para delivery", text: "Anúncio no Instagram, no Facebook e no Google que vira pedido no seu cardápio, com custo por pedido acompanhado." },
];

export default function ServicosPage() {
  const url = `${SITE_URL}/servicos`;
  const cards = [
    ...SERVICES.map((s) => ({ href: `/${s.slug}`, eyebrow: s.eyebrow, name: s.name, text: s.metaDescription })),
    ...EXTRA,
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      businessNode(),
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${title} | ${site.name}`,
        description,
        inLanguage: "pt-BR",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: cards.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: `${SITE_URL}${c.href}` })),
        },
      },
      breadcrumbNode(url, [
        { name: "Início", path: "/" },
        { name: "Serviços", path: "/servicos" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <StackSection mode="dark" seam={false} minHeight={false}>
          <div className="container-wide pt-40 pb-20">
            <p className="hero-in eyebrow mb-5">DLX Digital · {site.city}, {site.region}</p>
            <h1 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.4rem,6.2vw,4.6rem)] leading-[0.98] max-w-[980px]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="hero-line block">Marketing digital em Ariquemes</span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="hero-line block text-[var(--orange-500)]" style={{ animationDelay: "0.12s" }}>
                  pra quem vive do cliente local.
                </span>
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-[620px] text-[18px] text-muted" style={{ animationDelay: "0.3s" }}>
              Tráfego pago, automação e vídeo trabalhando juntos: o anúncio traz a pessoa certa, a
              automação responde na hora e o vídeo faz ela confiar em você.
            </p>
          </div>
        </StackSection>

        <StackSection mode="dark" seam={false} minHeight={false}>
          <div className="container-wide pb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <AnimatedSection key={c.href} delay={0.05 * (i % 3)}>
                <TiltCard className="h-full rounded-[24px]">
                  <Link href={c.href} className="card border-subtle h-full flex flex-col justify-between gap-10 group/link">
                    <div>
                      <p className="eyebrow mb-3">{c.eyebrow}</p>
                      <h2 className="text-[24px] leading-snug">{c.name}</h2>
                      <p className="text-muted text-[15px] mt-3 leading-relaxed">{c.text}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--orange-500)]">
                      Conhecer <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </StackSection>

        <StackSection mode="orange" id="cta" minHeight={false}>
          <ServiceCTA
            title="Não sabe por onde começar?"
            text="Me conta como seu negócio vende hoje. Eu te digo qual desses serviços faz mais sentido agora, e qual pode esperar."
            message="quero entender qual serviço da DLX faz sentido para o meu negócio"
          />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
