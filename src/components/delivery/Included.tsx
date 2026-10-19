"use client";

import { motion } from "framer-motion";
import { Crosshair, Flame, Search, SlidersHorizontal, FileBarChart, Radar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ITENS = [
  { icon: Crosshair, t: "Campanha de venda no raio de entrega", s: "Instagram e Facebook mostrando teu combo pra quem tu consegue entregar, na hora que dá fome." },
  { icon: Search, t: "Google pra quem já tá procurando", s: "“Pizzaria perto de mim”, “hambúrguer delivery”: tu aparece na hora da decisão." },
  { icon: Flame, t: "Oferta e copy que vendem", s: "A gente ajuda a montar o combo de entrada, escreve o anúncio e manda o roteiro do vídeo pra gravar." },
  { icon: Radar, t: "Rastreio de pedido configurado", s: "Pixel e conversões no cardápio, pra cada pedido voltar pro painel com custo." },
  { icon: SlidersHorizontal, t: "Otimização toda semana", s: "Corta o anúncio que só gasta, coloca verba no que traz pedido barato." },
  { icon: FileBarChart, t: "Relatório semanal Meta + Google", s: "Quanto investiu, quantos pedidos, quanto custou cada um. Sem métrica de vaidade." },
];

const BARS = [38, 52, 46, 70, 64, 88, 80];

export default function Included() {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">O que a DLX faz por você</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.98] max-w-[760px]">
            Tu cuida da cozinha. A gente cuida do pedido chegar.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid lg:grid-cols-[1.25fr_0.75fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {ITENS.map((it, i) => (
              <AnimatedSection key={it.t} delay={i * 0.05}>
                <div className="card h-full !p-6">
                  <it.icon size={22} strokeWidth={1.6} className="text-[var(--orange-500)]" />
                  <h3 className="mt-4 text-[19px] leading-[1.2]">{it.t}</h3>
                  <p className="mt-2 text-muted text-[14px]">{it.s}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* mini relatório */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-[24px] bg-[var(--ink)] text-[var(--text-dark-1)] p-6 h-full flex flex-col shadow-[0_30px_80px_rgba(10,10,10,0.2)] lg:sticky lg:top-28">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-dark-3)]">Relatório semanal</p>
                <span className="text-[11px] font-mono text-[var(--orange-500)]">exemplo</span>
              </div>
              <p className="mt-3 text-[22px] [font-family:var(--font-general-sans)] font-semibold">Teu Delivery · Semana 42</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Investido", "Pedidos", "Custo/pedido"].map((k) => (
                  <div key={k} className="rounded-[12px] bg-white/[0.05] p-3">
                    <p className="text-[10px] text-[var(--text-dark-3)]">{k}</p>
                    <div className="mt-2 h-3 w-3/4 rounded bg-white/15" />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex-1 min-h-[160px] flex items-end gap-2">
                {BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-[6px]"
                    style={{ background: i === BARS.length - 2 ? "var(--orange-500)" : "rgba(244,241,234,0.18)" }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-[var(--text-dark-3)]">
                {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                  <span key={i} className="flex-1 text-center">{d}</span>
                ))}
              </div>
              <div className="mt-5 rounded-[12px] border border-white/10 p-3 text-[12px] text-[var(--text-dark-2)]">
                <span className="text-[var(--orange-500)]">Próxima semana:</span> subir verba no combo que mais vendeu e testar criativo novo pra terça.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
