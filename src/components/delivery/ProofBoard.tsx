"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useCountUp } from "./useCountUp";
import { TOTAL, DESTAQUE, GOOGLE, PERIODO, brl } from "./data";

function Big({ to, prefix = "", suffix = "", dec = 0, label, accent = false }: {
  to: number; prefix?: string; suffix?: string; dec?: number; label: string; accent?: boolean;
}) {
  const { ref, value } = useCountUp(to);
  return (
    <div className="border-t border-subtle pt-5">
      <p className="text-[13px] text-muted mb-2">{label}</p>
      <p
        className={`[font-family:var(--font-general-sans)] font-semibold leading-none tracking-tight tabular-nums text-[clamp(2.4rem,5.5vw,4.2rem)] ${accent ? "text-[var(--orange-500)]" : ""}`}
      >
        <span className="text-[0.45em] align-top mr-1 opacity-70">{prefix}</span>
        <span ref={ref}>{brl(value, dec)}</span>
        <span className="text-[0.5em] ml-1">{suffix}</span>
      </p>
    </div>
  );
}


export default function ProofBoard() {
  return (
    <div className="section">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <AnimatedSection>
              <p className="eyebrow mb-4">O painel não mente</p>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.98] max-w-[760px]">
                Número real de delivery que a gente gerencia.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.1}>
            <span className="inline-flex items-center gap-2 font-mono text-[12px] px-3 py-2 rounded-full border border-subtle text-muted">
              <span className="w-2 h-2 rounded-full bg-[var(--orange-500)]" />
              Meta Ads · {PERIODO}
            </span>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          <Big label="investido em anúncio" prefix="R$" to={TOTAL.investido / 1000} dec={1} suffix="mil" />
          <Big label="em vendas registradas no painel" prefix="R$" to={TOTAL.vendas / 1000} suffix="mil" accent />
          <Big label="pedidos" to={TOTAL.pedidos} />
          <Big label="custo médio por pedido" prefix="R$" to={TOTAL.custoPedido} dec={2} />
        </div>

        {/* destaques */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="card h-full relative overflow-hidden">
              <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(255,90,31,0.25), transparent)" }} />
              <p className="eyebrow mb-3">Campanha destaque · {DESTAQUE.periodo}</p>
              <p className="text-[26px] [font-family:var(--font-general-sans)] font-semibold leading-tight">
                Um combo bem montado, em uma semana
              </p>
              <p className="mt-4 text-muted">
                <span className="font-mono font-semibold">R$ {brl(DESTAQUE.investido, 2)}</span> de anúncio →{" "}
                <span className="text-[var(--orange-500)] font-mono">{DESTAQUE.pedidos} pedidos</span>, a{" "}
                <span className="font-mono font-semibold">R$ {brl(DESTAQUE.custo, 2)}</span> cada.
              </p>
              <p className="mt-2 text-[13px] text-faint">Uma oferta clara + o público certo. É isso que a gente testa toda semana.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="card h-full">
              <p className="eyebrow mb-3">No Google também · {GOOGLE.periodo}</p>
              <p className="text-[26px] [font-family:var(--font-general-sans)] font-semibold leading-tight">
                Quem pesquisa “pizzaria perto de mim” acha você.
              </p>
              <p className="mt-4 text-muted">
                <span className="font-mono font-semibold">R$ {brl(GOOGLE.investido, 2)}</span> no Google Ads →{" "}
                <span className="text-[var(--orange-500)] font-mono">R$ {brl(GOOGLE.vendas / 1000, 1)} mil</span> em vendas registradas na semana.
              </p>
              <p className="mt-2 text-[13px] text-faint">Pedido de quem já tá com fome e procurando onde comprar.</p>
            </div>
          </AnimatedSection>
        </div>

        <p className="mt-8 text-[12px] text-faint max-w-[820px]">
          Valores registrados pelo pixel nas contas de anúncio (vendas atribuídas aos anúncios), somando as campanhas de delivery gerenciadas pela DLX. Não é promessa: o resultado de cada delivery depende de produto, preço, cidade e operação.
        </p>
      </div>
    </div>
  );
}
