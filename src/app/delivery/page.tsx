import type { Metadata } from "next";
import "./delivery.css";
import DeliveryNav from "@/components/delivery/DeliveryNav";
import OrderHero from "@/components/delivery/OrderHero";
import Ticker from "@/components/delivery/Ticker";
import WeekPain from "@/components/delivery/WeekPain";
import ProofBoard from "@/components/delivery/ProofBoard";
import OrderPath from "@/components/delivery/OrderPath";
import Calculator from "@/components/delivery/Calculator";
import Included from "@/components/delivery/Included";
import DeliveryFaq from "@/components/delivery/DeliveryFaq";
import DeliveryCTA from "@/components/delivery/DeliveryCTA";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";
import KineticWord from "@/components/ui/KineticWord";
import { SITE_URL, site } from "@/config/site";

const title = "Tráfego Pago para Delivery";
const description =
  "Anúncio no Instagram, Facebook e Google que vira pedido no teu cardápio. Pedido rastreado, custo por pedido na mão e relatório toda semana.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["tráfego pago delivery", "anúncio para pizzaria", "marketing para delivery", "Meta Ads delivery", "Google Ads restaurante"],
  alternates: { canonical: "/delivery" },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: `${SITE_URL}/delivery`,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
};

export default function DeliveryPage() {
  return (
    <>
      <DeliveryNav />
      <main>
        <StackSection mode="dark" seam={false}>
          <OrderHero />
        </StackSection>
        <Ticker />
        <StackSection mode="dark" seam={false} minHeight={false}>
          <WeekPain />
        </StackSection>
        <StackSection mode="light" id="numeros" minHeight={false}>
          <ProofBoard />
        </StackSection>
        {/* fora do StackSection: o overflow-hidden dele quebraria o sticky */}
        <section className="section-dark relative">
          <OrderPath />
        </section>
        <StackSection mode="light" minHeight={false}>
          <Calculator />
        </StackSection>
        <StackSection mode="dark" minHeight={false}>
          <Included />
        </StackSection>
        <KineticWord word="PEDIDO" />
        <StackSection mode="dark" seam={false} minHeight={false}>
          <DeliveryFaq />
        </StackSection>
        <StackSection mode="orange" id="pedido">
          <DeliveryCTA />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
