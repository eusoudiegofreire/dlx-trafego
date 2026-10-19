"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Bike, Check, Plus, ShoppingBag } from "lucide-react";

const STEPS = [
  { k: "Aparece", t: "O anúncio aparece pra quem tá perto", s: "Raio de entrega, horário de fome, gente que já pede delivery. Não é pra cidade inteira, é pra quem tu consegue entregar." },
  { k: "Toca", t: "A oferta faz parar o dedo", s: "Combo com preço claro e foto que dá fome. A gente testa criativo até achar o que vende." },
  { k: "Escolhe", t: "Cai direto no teu cardápio", s: "Sem volta, sem “chama no direct”. Um toque e a pessoa já tá escolhendo sabor." },
  { k: "Paga", t: "Carrinho fechado", s: "Cardápio próprio = pedido sem comissão de aplicativo." },
  { k: "Chega", t: "Pedido na cozinha. E o painel conta.", s: "Cada pedido volta pro painel com o custo dele. É assim que a gente sabe onde colocar mais verba." },
];

function Pizza({ size = 120 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 35%, #b3261e 0 7%, transparent 7.5%), radial-gradient(circle at 64% 30%, #b3261e 0 7%, transparent 7.5%), radial-gradient(circle at 55% 62%, #b3261e 0 7%, transparent 7.5%), radial-gradient(circle at 32% 68%, #b3261e 0 6%, transparent 6.5%), radial-gradient(circle at 72% 55%, #3f6b2a 0 3%, transparent 3.5%), radial-gradient(circle at 45% 45%, #3f6b2a 0 3%, transparent 3.5%), radial-gradient(circle, #f2b63c 0 78%, #c97a2b 79% 100%)",
        boxShadow: "inset 0 0 0 4px rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.35)",
      }}
    />
  );
}

function Screen({ i }: { i: number }) {
  if (i === 0 || i === 1)
    return (
      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-[var(--orange-500)]" />
          <div>
            <p className="text-[11px] font-semibold text-[var(--ink)]">sua.pizzaria</p>
            <p className="text-[9px] text-black/50">Patrocinado</p>
          </div>
        </div>
        <div className="rounded-[10px] bg-[#1d1d1d] h-[190px] flex items-center justify-center relative overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <Pizza size={140} />
          </motion.div>
          <span className="absolute top-3 left-3 bg-[var(--orange-500)] text-[var(--ink)] text-[10px] font-bold px-2 py-1 rounded-[4px]">COMBO CASAL</span>
        </div>
        <div className="relative mt-3 rounded-[8px] bg-[var(--ink)] text-[var(--cream)] text-center text-[12px] font-semibold py-2.5">
          Pedir agora →
          {i === 1 && (
            <motion.span
              className="absolute left-1/2 top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-[var(--orange-500)]"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
          )}
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 w-3/4 rounded bg-black/10" />
          <div className="h-2 w-1/2 rounded bg-black/10" />
        </div>
      </div>
    );
  if (i === 2)
    return (
      <div className="p-3">
        <p className="text-[13px] font-bold text-[var(--ink)] mb-3">Cardápio</p>
        {["Pizza G Calabresa", "Combo Casal", "Pizza Chocolate", "Refri 2L"].map((n, k) => (
          <motion.div
            key={n}
            className="flex items-center gap-3 py-2.5 border-b border-black/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: k * 0.08 }}
          >
            <Pizza size={34} />
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[var(--ink)]">{n}</p>
              <p className="text-[10px] text-black/50">toque pra adicionar</p>
            </div>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${k === 1 ? "bg-[var(--orange-500)]" : "bg-black/10"}`}>
              {k === 1 ? <Check size={12} className="text-[var(--ink)]" /> : <Plus size={12} className="text-[var(--ink)]" />}
            </span>
          </motion.div>
        ))}
      </div>
    );
  if (i === 3)
    return (
      <div className="p-3 flex flex-col h-full">
        <p className="text-[13px] font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
          <ShoppingBag size={14} /> Seu pedido
        </p>
        <div className="flex justify-between text-[11px] text-[var(--ink)] py-2 border-b border-black/10"><span>1x Combo Casal</span><span>R$ —</span></div>
        <div className="flex justify-between text-[11px] text-[var(--ink)] py-2 border-b border-black/10"><span>1x Refri 2L</span><span>R$ —</span></div>
        <div className="flex justify-between text-[11px] text-black/50 py-2"><span>Entrega</span><span>no raio</span></div>
        <motion.div
          className="mt-auto rounded-[8px] bg-[var(--orange-500)] text-[var(--ink)] text-center text-[12px] font-bold py-3"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Finalizar pedido
        </motion.div>
      </div>
    );
  return (
    <div className="p-3 flex flex-col items-center justify-center h-full text-center">
      <motion.span
        className="w-14 h-14 rounded-full bg-[var(--orange-500)] flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        <Check size={26} className="text-[var(--ink)]" strokeWidth={3} />
      </motion.span>
      <p className="mt-4 text-[14px] font-bold text-[var(--ink)]">Pedido confirmado</p>
      <p className="text-[10px] text-black/50">saiu pra entrega</p>
      <div className="mt-5 w-full h-2 rounded-full bg-black/10 relative overflow-visible">
        <motion.div className="h-full rounded-full bg-[var(--ink)]" initial={{ width: "0%" }} animate={{ width: "75%" }} transition={{ duration: 2.4, ease: "easeInOut" }} />
        <motion.span className="absolute -top-[13px]" initial={{ left: "0%" }} animate={{ left: "70%" }} transition={{ duration: 2.4, ease: "easeInOut" }}>
          <Bike size={20} className="text-[var(--ink)]" />
        </motion.span>
      </div>
    </div>
  );
}

export default function OrderPath() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
  });

  return (
    <div ref={ref} className="relative" style={{ height: `${STEPS.length * 85}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container-wide w-full grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
          <div className="max-lg:order-2">
            <p className="eyebrow mb-4">Do feed até a cozinha</p>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98] mb-8 max-lg:hidden">
              O caminho de um pedido.
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-mono text-[var(--orange-500)] text-[13px] mb-2">0{step + 1} / 0{STEPS.length}</p>
                <h3 className="text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.1]">{STEPS[step].t}</h3>
                <p className="mt-3 text-muted text-[16px] max-w-[420px]">{STEPS[step].s}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* celular */}
          <div className="relative mx-auto max-lg:order-1">
            <div className="w-[230px] sm:w-[260px] h-[440px] sm:h-[500px] rounded-[38px] bg-[#111] border border-white/15 p-[10px] shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_80px_rgba(255,90,31,0.12)]">
              <div className="w-full h-full rounded-[30px] bg-[var(--cream)] overflow-hidden relative">
                <div className="h-7 flex items-center justify-center">
                  <span className="w-16 h-4 rounded-full bg-[#111]" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    className="absolute inset-x-0 top-7 bottom-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Screen i={step} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <AnimatePresence>
              {step === STEPS.length - 1 && (
                <motion.div
                  className="absolute -right-6 sm:-right-24 top-10 rounded-[14px] bg-[var(--ink)] border border-[var(--orange-500)] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 16 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-faint">painel DLX</p>
                  <p className="font-mono text-[15px] text-[var(--orange-500)]">+1 pedido</p>
                  <p className="font-mono text-[11px] text-muted">custo rastreado ✓</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* trilha */}
          <div className="max-lg:hidden">
            <div className="relative pl-8">
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10" />
              <motion.div className="absolute left-[7px] top-2 w-[2px] bg-[var(--orange-500)]" style={{ height: line }} />
              {STEPS.map((s, i) => (
                <div key={s.k} className="relative py-4">
                  <span
                    className={`absolute -left-8 top-[22px] w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      i <= step ? "bg-[var(--orange-500)] border-[var(--orange-500)]" : "bg-[var(--black)] border-white/25"
                    }`}
                  />
                  <p className={`[font-family:var(--font-general-sans)] font-semibold text-[28px] uppercase transition-colors duration-300 ${i === step ? "text-[var(--text-dark-1)]" : "text-white/20"}`}>
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
