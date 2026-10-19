"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TOTAL, brl } from "./data";

// Tickets da impressora: ilustração (itens de exemplo), não pedidos reais.
const ITENS = [
  ["1x Combo Casal", "1x Refri 2L"],
  ["2x Pizza G Calabresa", "1x Borda recheada"],
  ["1x Burger Duplo", "1x Batata M"],
  ["1x Pizza G + Chocolate", "1x Guaraná 1L"],
  ["3x Smash Burger", "1x Combo Batata"],
  ["1x Pizza Família", "2x Refri lata"],
];
const ORIGEM = ["Anúncio Instagram", "Anúncio Facebook", "Google · pesquisa", "Anúncio Reels"];
const BAIRROS = ["Setor 03", "Jd. Jorge Teixeira", "Centro", "Setor 09", "Embratel", "Nova Porto Velho"];

type Ticket = { id: number; itens: string[]; origem: string; bairro: string; hora: string };

function makeTicket(n: number): Ticket {
  const d = new Date(Date.now() - (6 - (n % 6)) * 60000);
  return {
    id: n,
    itens: ITENS[n % ITENS.length],
    origem: ORIGEM[n % ORIGEM.length],
    bairro: BAIRROS[(n * 5) % BAIRROS.length],
    hora: d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
  };
}

const START = TOTAL.pedidos - 3;

function Receipt({ t }: { t: Ticket }) {
  return (
    <div className="receipt font-mono text-[12px] leading-[1.55] text-[var(--ink)] px-5 pt-4 pb-7">
      <div className="flex justify-between items-baseline">
        <span className="font-semibold tracking-wide">NOVO PEDIDO</span>
        <span>#{brl(t.id)}</span>
      </div>
      <div className="border-t border-dashed border-black/30 my-2" />
      {t.itens.map((i) => (
        <p key={i}>{i}</p>
      ))}
      <div className="border-t border-dashed border-black/30 my-2" />
      <p className="flex justify-between">
        <span>Entrega · {t.bairro}</span>
        <span>{t.hora}</span>
      </p>
      <p className="mt-1 inline-flex items-center gap-1.5 bg-[var(--ink)] text-[var(--orange-500)] px-2 py-0.5 rounded-[4px] text-[11px] uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-500)] motion-safe:animate-pulse" />
        origem: {t.origem}
      </p>
    </div>
  );
}

export default function OrderHero() {
  const [tickets, setTickets] = useState<Ticket[]>(() => [makeTicket(START + 2), makeTicket(START + 1), makeTicket(START)]);
  const counter = useRef(START + 2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const iv = window.setInterval(() => {
      counter.current += 1;
      // passa do total real e volta — a impressora nunca para
      if (counter.current > TOTAL.pedidos + 40) counter.current = START;
      const next = makeTicket(counter.current);
      setTickets((prev) => [next, ...prev].slice(0, 3));
    }, 2600);
    return () => window.clearInterval(iv);
  }, []);

  const words = ["Teu", "delivery", "cheio."];

  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* calor do forno */}
      <div
        aria-hidden
        className="absolute -z-10 w-[900px] h-[900px] rounded-full -right-[300px] top-[-200px] motion-safe:animate-[ambient-drift_14s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(closest-side, rgba(255,90,31,0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,241,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black, transparent 70%)",
        }}
      />

      <div className="container-wide grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            className="eyebrow mb-5 inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--orange-500)] motion-safe:animate-pulse" />
            Tráfego pago para delivery
          </motion.p>

          <h1 className="[font-family:var(--font-general-sans)] font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(2.9rem,9vw,6.2rem)]">
            <span className="block">
              {words.map((w, i) => (
                <span key={w} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="inline-block text-[var(--orange-500)]"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Até na terça.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-[540px] text-[18px] leading-[1.55] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            Anúncio no Instagram, Facebook e Google que vira <strong className="text-[var(--text-dark-1)] font-semibold">pedido no teu cardápio</strong>, não curtida. E toda semana tu vê quanto custou cada pedido.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="#pedido" className="btn-primary">
              Quero encher meu delivery
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#numeros" className="btn-ghost">
              Ver os números reais
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-4 text-[13px] text-faint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className="font-mono text-[var(--text-dark-1)] text-[22px] tabular-nums">
              {brl(TOTAL.pedidos)}
            </span>
            <span className="leading-tight">
              pedidos registrados nos últimos
              <br /> 30 dias nas contas de delivery da DLX
            </span>
          </motion.div>
        </div>

        {/* impressora de pedidos */}
        <motion.div
          className="relative mx-auto w-full max-w-[380px]"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 h-[64px] rounded-[18px] bg-[#1a1a1a] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-between px-5">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--text-dark-3)]">
              Impressora · cozinha
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] text-[var(--orange-500)]">
              <span className="w-2 h-2 rounded-full bg-[var(--orange-500)] shadow-[0_0_12px_var(--orange-500)] motion-safe:animate-pulse" />
              AO VIVO
            </span>
            <span className="absolute left-6 right-6 -bottom-[3px] h-[6px] rounded-full bg-black" />
          </div>

          <div className="relative -mt-1 mx-5 h-[430px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
              }}
            >
              <AnimatePresence initial={false}>
                {tickets.map((t, i) => (
                  <motion.div
                    key={t.id}
                    layout
                    initial={{ y: -180, opacity: 1 }}
                    animate={{ y: 0, opacity: i === 2 ? 0.55 : 1, rotate: i === 0 ? 0 : i % 2 ? -1.2 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-3 drop-shadow-[0_14px_24px_rgba(0,0,0,0.45)]"
                  >
                    <Receipt t={t} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <p className="text-center text-[11px] text-faint mt-2">ilustração de como o pedido chega na cozinha</p>
        </motion.div>
      </div>
    </div>
  );
}
