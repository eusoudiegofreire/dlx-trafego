"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Semana "típica" de quem depende só do movimento natural — ilustrativa,
// sem número: só a forma (fim de semana cheio, meio de semana vazio).
const DIAS = [
  { d: "SEG", h: 34 },
  { d: "TER", h: 22 },
  { d: "QUA", h: 28 },
  { d: "QUI", h: 40 },
  { d: "SEX", h: 82 },
  { d: "SÁB", h: 100 },
  { d: "DOM", h: 88 },
];

const DORES = [
  {
    t: "Só o iFood vende, e a taxa come tua margem.",
    s: "Pedido que chega pelo teu cardápio próprio é pedido sem comissão.",
  },
  {
    t: "Já impulsionou. Veio curtida, não veio pedido.",
    s: "Impulsionar mostra o post. Campanha de venda leva gente com fome até o carrinho.",
  },
  {
    t: "Não sabe quanto custou cada pedido.",
    s: "Se não dá pra medir, não dá pra melhorar. Aqui todo pedido tem preço.",
  },
];

export default function WeekPain() {
  return (
    <div className="section">
      <div className="container-wide grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Conhece esse sobe e desce?</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.98]">
              Movimento não pode
              <br />
              <span className="text-[var(--orange-500)]">depender da sorte.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-muted text-[17px] max-w-[480px]">
              Tem dia que lota sozinho e tem dia que a cozinha fica parada esperando. Anúncio bem feito é a alavanca: tu escolhe quando quer mais pedido, em vez de esperar o movimento aparecer.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="card !p-7">
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">pedidos na semana</span>
              <span className="font-mono text-[11px] text-faint">ilustração</span>
            </div>
            <div className="flex items-end gap-3 h-[220px]">
              {DIAS.map((dia, i) => {
                const fraco = dia.h < 45;
                return (
                  <div key={dia.d} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <div className="relative w-full flex-1 flex items-end">
                      <motion.div
                        className="w-full rounded-t-[8px]"
                        style={{ background: fraco ? "rgba(244,241,234,0.14)" : "var(--cream)" }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${dia.h}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      />
                      {fraco && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full rounded-t-[8px] border-2 border-dashed border-[var(--orange-500)]"
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: "66%", opacity: 1 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.9, delay: 1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </div>
                    <span className={`font-mono text-[11px] ${fraco ? "text-[var(--orange-500)]" : "text-faint"}`}>{dia.d}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-[13px] text-muted flex items-center gap-2">
              <span className="inline-block w-4 h-3 rounded-[3px] border-2 border-dashed border-[var(--orange-500)]" />
              onde o anúncio entra: puxar pedido no dia que a cozinha tá parada
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="container-wide mt-20 grid md:grid-cols-3 gap-5">
        {DORES.map((d, i) => (
          <AnimatedSection key={d.t} delay={i * 0.08}>
            <div className="h-full border-t border-subtle pt-6">
              <span className="font-mono text-[12px] text-[var(--orange-500)]">0{i + 1}</span>
              <h3 className="mt-3 text-[22px] leading-[1.15]">{d.t}</h3>
              <p className="mt-3 text-muted text-[15px]">{d.s}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
