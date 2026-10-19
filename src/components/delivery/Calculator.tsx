"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CUSTO_MAX, CUSTO_MIN, brl } from "./data";

function Slider({ label, value, min, max, step, onChange, fmt }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; fmt: (v: number) => string;
}) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex justify-between items-baseline mb-4">
        <span className="text-[15px] text-muted">{label}</span>
        <span className="font-mono text-[22px] tabular-nums">{fmt(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-dlx"
        style={{ ["--fill" as string]: `${fill}%` }}
      />
    </label>
  );
}

function Num({ v }: { v: string }) {
  return (
    <motion.span key={v} className="inline-block" initial={{ y: 10, opacity: 0.3 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25 }}>
      {v}
    </motion.span>
  );
}

export default function Calculator() {
  const [verba, setVerba] = useState(40);
  const [ticket, setTicket] = useState(70);

  const mes = verba * 30;
  // faixa usando o pior e o melhor custo por pedido reais das contas
  const pedMin = Math.round(mes / CUSTO_MAX);
  const pedMax = Math.round(mes / CUSTO_MIN);
  const vendMin = pedMin * ticket;
  const vendMax = pedMax * ticket;

  return (
    <div className="section">
      <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Faz a conta</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.98]">
              Quanto pedido cabe na tua verba?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-muted text-[17px] max-w-[460px]">
              Mexe nos controles. A conta usa o custo por pedido <strong className="font-semibold">real</strong> das campanhas de delivery que a gente gerencia hoje: de R$ {brl(CUSTO_MIN, 2)} na melhor a R$ {brl(CUSTO_MAX, 2)} na mais cara.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="rounded-[24px] bg-[var(--ink)] text-[var(--text-dark-1)] p-7 sm:p-9 shadow-[0_30px_80px_rgba(10,10,10,0.25)]">
            <div className="space-y-8">
              <Slider label="Verba de anúncio por dia" value={verba} min={20} max={300} step={5} onChange={setVerba} fmt={(v) => `R$ ${v}`} />
              <Slider label="Ticket médio do teu pedido" value={ticket} min={25} max={180} step={5} onChange={setTicket} fmt={(v) => `R$ ${v}`} />
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[13px] text-[var(--text-dark-3)]">pedidos por mês (estimativa)</p>
                <p className="mt-1 font-mono text-[clamp(1.8rem,4vw,2.6rem)] text-[var(--orange-500)] tabular-nums leading-tight">
                  <Num v={`${brl(pedMin)} – ${brl(pedMax)}`} />
                </p>
              </div>
              <div>
                <p className="text-[13px] text-[var(--text-dark-3)]">em vendas por mês (estimativa)</p>
                <p className="mt-1 font-mono text-[clamp(1.4rem,3vw,1.9rem)] tabular-nums leading-tight">
                  <Num v={`R$ ${brl(vendMin / 1000, 1)} – ${brl(vendMax / 1000, 1)} mil`} />
                </p>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-[var(--text-dark-3)]">
              Investimento no mês: <span className="text-[var(--text-dark-1)] font-mono">R$ {brl(mes)}</span>, pago direto pra Meta/Google. É uma estimativa baseada em resultado real, não uma garantia: cidade, cardápio e preço mudam a conta.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
