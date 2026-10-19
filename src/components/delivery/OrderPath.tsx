"use client";

import { useRef, useState } from "react";
import { AnimatePresence, interpolate, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Bike, Check, Heart, MessageCircle, Plus, Send, ShoppingBag } from "lucide-react";
import Image from "next/image";
import PizzaArt, { type PizzaKind } from "./PizzaArt";
import anuncio from "../../../public/images/delivery/anuncio-pizza.webp";
import postFeed from "../../../public/images/delivery/post-feed.webp";

// Tudo dentro do celular é uma "linha do tempo" ligada à rolagem:
// rolou pra baixo, o vídeo anda; rolou pra cima, volta. Coordenadas em px
// dentro de uma tela fixa de 250x500.


// transform por função (não é "acelerado" pelo navegador): evita o bug do
// ScrollTimeline nativo deixando opacidade pela metade no fim da rolagem
function useT<T extends number | string>(p: MotionValue<number>, input: number[], output: T[]) {
  const f = interpolate(input, output as never[]) as (v: number) => T;
  return useTransform(p, (v: number) => f(v));
}

const STEPS = [
  { at: 0, k: "Aparece", t: "O anúncio aparece pra quem tá perto", s: "No meio do feed, pra quem está no teu raio de entrega e na hora que dá fome." },
  { at: 0.2, k: "Toca", t: "A oferta faz parar o dedo", s: "Foto que dá fome e preço claro. A gente testa criativo até achar o que vende." },
  { at: 0.36, k: "Escolhe", t: "Cai direto no teu cardápio", s: "Sem “chama no direct”. Um toque e a pessoa já está escolhendo o sabor." },
  { at: 0.6, k: "Paga", t: "Sacola fechada", s: "Cardápio próprio = pedido sem comissão de aplicativo." },
  { at: 0.77, k: "Chega", t: "Pedido na cozinha. E o painel conta.", s: "Cada pedido volta pro painel com o custo dele. É assim que a gente sabe onde colocar mais verba." },
];

const MENU: { kind: PizzaKind; nome: string; desc: string; preco: string }[] = [
  { kind: "calabresa", nome: "Pizza Calabresa", desc: "Calabresa, cebola e mussarela", preco: "49,90" },
  { kind: "margherita", nome: "Pizza Margherita", desc: "Tomate, mussarela e manjericão", preco: "47,90" },
  { kind: "frango", nome: "Frango c/ Catupiry", desc: "Frango desfiado e catupiry", preco: "52,90" },
  { kind: "chocolate", nome: "Pizza de Chocolate", desc: "Chocolate ao leite e morango", preco: "44,90" },
];

// toques do dedo: [momento, x, y]
const TAPS: [number, number, number][] = [
  [0.3, 125, 316],
  [0.47, 218, 129],
  [0.54, 218, 363],
  [0.61, 125, 462],
  [0.72, 125, 432],
];

function Ripple({ p, t, x, y }: { p: MotionValue<number>; t: number; x: number; y: number }) {
  const opacity = useT(p, [t - 0.006, t, t + 0.03], [0, 0.55, 0]);
  const scale = useT(p, [t - 0.006, t + 0.03], [0.3, 2.4]);
  return (
    <motion.span
      className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full bg-[var(--orange-500)] pointer-events-none z-40"
      style={{ left: x, top: y, opacity, scale }}
    />
  );
}

function Finger({ p }: { p: MotionValue<number> }) {
  const t = [0, 0.18, 0.27, 0.31, 0.4, 0.45, 0.48, 0.52, 0.55, 0.59, 0.62, 0.69, 0.73, 0.78];
  const x = useTransform(p, t, [290, 290, 125, 125, 190, 218, 218, 218, 218, 140, 125, 125, 125, 300]);
  const y = useTransform(p, t, [560, 560, 316, 316, 300, 129, 129, 363, 363, 450, 462, 432, 432, 560]);
  const st: number[] = [];
  const sv: number[] = [];
  TAPS.forEach(([at]) => {
    st.push(at - 0.012, at, at + 0.012);
    sv.push(1, 0.78, 1);
  });
  const scale = useTransform(p, st, sv);
  const opacity = useT(p, [0.17, 0.2, 0.76, 0.79], [0, 1, 1, 0]);
  return (
    <motion.div className="absolute z-50 pointer-events-none" style={{ left: x, top: y, opacity }}>
      <motion.div
        className="w-11 h-11 -ml-[22px] -mt-[22px] rounded-full border-2 border-white/90 bg-white/35 backdrop-blur-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
        style={{ scale }}
      />
    </motion.div>
  );
}

function Fly({ p, from, to, t, kind }: { p: MotionValue<number>; from: [number, number]; to: [number, number]; t: number; kind: PizzaKind }) {
  const x = useT(p, [t, t + 0.04], [from[0], to[0]]);
  const y = useT(p, [t, t + 0.02, t + 0.04], [from[1], from[1] - 60, to[1]]);
  const opacity = useT(p, [t - 0.001, t, t + 0.035, t + 0.04], [0, 1, 1, 0]);
  const scale = useT(p, [t, t + 0.04], [1, 0.4]);
  return (
    <motion.div className="absolute z-40 -ml-[22px] -mt-[22px]" style={{ left: x, top: y, opacity, scale }}>
      <PizzaArt kind={kind} size={44} />
    </motion.div>
  );
}

function Phone({ p }: { p: MotionValue<number> }) {
  // feed
  const feedY = useT(p, [0.02, 0.18], [0, -320]);
  const adZoom = useT(p, [0.04, 0.3], [1.18, 1]);
  const ctaScale = useT(p, [0.29, 0.3, 0.31], [1, 0.94, 1]);
  const feedX = useT(p, [0.33, 0.39], ["0%", "-100%"]);
  // cardápio
  const menuX = useT(p, [0.33, 0.39], ["100%", "0%"]);
  const plus1 = useT(p, [0.469, 0.471], [1, 0]);
  const plus2 = useT(p, [0.539, 0.541], [1, 0]);
  const check1 = useTransform(plus1, (v) => 1 - v);
  const check2 = useTransform(plus2, (v) => 1 - v);
  const barY = useT(p, [0.48, 0.5], [70, 0]);
  const n = useTransform(p, (v) => (v >= 0.57 ? 2 : v >= 0.51 ? 1 : 0));
  const barText = useTransform(n, (v): string => `Ver sacola · ${v} ${v === 1 ? "item" : "itens"}`);
  const barTotal = useTransform(n, (v): string => (v >= 2 ? "R$ 94,80" : "R$ 49,90"));
  const badgeScale = useT(p, [0.505, 0.515, 0.525, 0.565, 0.575, 0.585], [1, 1.35, 1, 1, 1.35, 1]);
  // sacola
  const sheetY = useT(p, [0.62, 0.67], [500, 130]);
  const dim = useT(p, [0.62, 0.67], [0, 0.45]);
  const payScale = useT(p, [0.71, 0.72, 0.73], [1, 0.95, 1]);
  // confirmado
  const doneO = useT(p, [0.75, 0.79], [0, 1]);
  const doneS = useT(p, [0.75, 0.79], [0.94, 1]);
  const checkLen = useT(p, [0.79, 0.84], [0, 1]);
  const routeLen = useT(p, [0.84, 0.98], [0, 1]);
  const motoDist = useT(p, [0.84, 0.98], ["0%", "100%"]);
  const etaO = useT(p, [0.86, 0.9], [0, 1]);
  const ROUTE = "M28 140 C 70 132, 72 84, 118 86 S 168 58, 176 40 S 210 22, 222 22";

  return (
    <div className="relative w-[250px] h-[500px] rounded-[30px] bg-[var(--cream)] overflow-hidden text-[var(--ink)] select-none">
      {/* status bar */}
      <div className="absolute inset-x-0 top-0 h-7 z-30 bg-[var(--cream)] flex items-center justify-between px-5 text-[9px] font-semibold">
        <span>20:14</span>
        <span className="w-16 h-4 rounded-full bg-[#111]" />
        <span>5G ▮▮▮</span>
      </div>

      {/* FEED */}
      <motion.div className="absolute inset-0" style={{ x: feedX }}>
        <motion.div className="absolute inset-x-0 top-0" style={{ y: feedY }}>
          {/* post comum */}
          <div className="absolute inset-x-0 top-[40px] px-3">
            <div className="flex items-center gap-2 h-9">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8ab4f8] to-[#5b6fd6]" />
              <span className="text-[10px] font-semibold">amigo.da.silva</span>
            </div>
            <div className="h-[220px] rounded-[8px] relative overflow-hidden">
              <Image src={postFeed} alt="" fill sizes="230px" className="object-cover" />
            </div>
            <div className="flex gap-3 mt-2 text-black/70"><Heart size={15} /><MessageCircle size={15} /><Send size={15} /></div>
          </div>
          {/* anúncio */}
          <div className="absolute inset-x-0 top-[350px] px-3">
            <div className="flex items-center gap-2 h-9">
              <span className="w-7 h-7 rounded-full bg-[var(--orange-500)] flex items-center justify-center text-[10px] font-bold">P</span>
              <div className="leading-tight">
                <p className="text-[10px] font-semibold">sua.pizzaria</p>
                <p className="text-[8px] text-black/50">Patrocinado</p>
              </div>
            </div>
            <div className="h-[220px] rounded-[8px] bg-[#141110] relative overflow-hidden">
              <motion.div className="absolute inset-0" style={{ scale: adZoom }}>
                <Image src={anuncio} alt="Anúncio de pizza de calabresa" fill sizes="230px" className="object-cover" />
              </motion.div>
              <span className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))]" />
              <span className="absolute top-3 left-3 bg-[var(--orange-500)] text-[9px] font-bold px-2 py-1 rounded-[4px]">PIZZA CALABRESA G</span>
              <span className="absolute bottom-3 right-3 bg-[var(--cream)] text-[11px] font-bold px-2 py-1 rounded-[6px] font-mono">R$ 49,90</span>
              <span className="absolute bottom-3 left-3 text-[var(--cream)] text-[9px] opacity-80">🛵 entrega em ~35 min</span>
            </div>
            <motion.div style={{ scale: ctaScale }} className="mt-[6px] h-10 rounded-[8px] bg-[var(--orange-500)] flex items-center justify-between px-3 text-[11px] font-bold">
              <span>Pedir agora</span>
              <span>→</span>
            </motion.div>
            <p className="mt-2 text-[9px] text-black/60"><b>sua.pizzaria</b> Bateu a fome? A calabresa sai quentinha 🔥</p>
          </div>
        </motion.div>
      </motion.div>

      {/* CARDÁPIO */}
      <motion.div className="absolute inset-0 bg-[var(--cream)]" style={{ x: menuX }}>
        <div className="absolute inset-x-0 top-[30px] h-[52px] px-4 flex items-center justify-between border-b border-black/10">
          <div>
            <p className="text-[12px] font-bold">sua.pizzaria</p>
            <p className="text-[9px] text-black/50">Aberto · entrega ~35 min</p>
          </div>
          <span className="text-[9px] font-semibold px-2 py-1 rounded-full bg-black/5">Pizzas</span>
        </div>
        {MENU.map((m, i) => (
          <div key={m.nome} className="absolute inset-x-0 px-3 flex items-center gap-3" style={{ top: 90 + i * 78, height: 78 }}>
            <PizzaArt kind={m.kind} size={54} />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold leading-tight">{m.nome}</p>
              <p className="text-[8.5px] text-black/50 leading-tight mt-0.5">{m.desc}</p>
              <p className="text-[10px] font-mono font-semibold mt-1">R$ {m.preco}</p>
            </div>
            <span className="relative w-8 h-8">
              <motion.span
                className="absolute inset-0 rounded-full bg-black/[0.07] flex items-center justify-center"
                style={{ opacity: i === 0 ? plus1 : i === 3 ? plus2 : 1 }}
              >
                <Plus size={14} />
              </motion.span>
              {(i === 0 || i === 3) && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-[var(--orange-500)] flex items-center justify-center"
                  style={{ opacity: i === 0 ? check1 : check2 }}
                >
                  <Check size={14} strokeWidth={3} />
                </motion.span>
              )}
            </span>
          </div>
        ))}
        <motion.div
          className="absolute left-3 right-3 bottom-4 h-11 rounded-[10px] bg-[var(--ink)] text-[var(--cream)] flex items-center justify-between px-3 text-[11px] font-semibold"
          style={{ y: barY }}
        >
          <span className="flex items-center gap-2">
            <motion.span style={{ scale: badgeScale }} className="w-6 h-6 rounded-full bg-[var(--orange-500)] text-[var(--ink)] flex items-center justify-center">
              <ShoppingBag size={12} />
            </motion.span>
            <motion.span>{barText}</motion.span>
          </span>
          <motion.span className="font-mono">{barTotal}</motion.span>
        </motion.div>
      </motion.div>

      <Fly p={p} from={[40, 129]} to={[40, 462]} t={0.47} kind="calabresa" />
      <Fly p={p} from={[40, 363]} to={[40, 462]} t={0.54} kind="chocolate" />

      {/* SACOLA */}
      <motion.div className="absolute inset-0 bg-black pointer-events-none" style={{ opacity: dim }} />
      <motion.div className="absolute inset-x-0 h-[370px] rounded-t-[22px] bg-white px-4 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.25)]" style={{ top: 0, y: sheetY }}>
        <span className="block mx-auto w-10 h-1 rounded-full bg-black/15" />
        <p className="mt-3 text-[13px] font-bold flex items-center gap-2"><ShoppingBag size={14} /> Sua sacola</p>
        {[MENU[0], MENU[3]].map((m) => (
          <div key={m.nome} className="flex items-center gap-3 py-2.5 border-b border-black/10">
            <PizzaArt kind={m.kind} size={36} />
            <span className="flex-1 text-[11px] font-semibold">1x {m.nome}</span>
            <span className="text-[10px] font-mono">R$ {m.preco}</span>
          </div>
        ))}
        <div className="flex justify-between text-[10px] text-black/50 py-2"><span>Entrega</span><span>Grátis no raio</span></div>
        <div className="flex justify-between text-[12px] font-bold py-1"><span>Total</span><span className="font-mono">R$ 94,80</span></div>
        <div className="flex gap-2 mt-2">
          <span className="flex-1 text-center text-[9px] py-1.5 rounded-[6px] border-2 border-[var(--orange-500)] font-semibold">Pix</span>
          <span className="flex-1 text-center text-[9px] py-1.5 rounded-[6px] border border-black/15">Cartão</span>
          <span className="flex-1 text-center text-[9px] py-1.5 rounded-[6px] border border-black/15">Dinheiro</span>
        </div>
        <motion.div style={{ scale: payScale }} className="absolute left-4 right-4 top-[280px] h-11 rounded-[10px] bg-[var(--orange-500)] flex items-center justify-center text-[12px] font-bold">
          <span>Finalizar pedido</span>
        </motion.div>
      </motion.div>

      {/* CONFIRMADO */}
      <motion.div className="absolute inset-0 bg-[var(--cream)] flex flex-col items-center pt-[60px] px-4 z-20" style={{ opacity: doneO, scale: doneS }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--orange-500)" />
          <motion.path d="M19 33 L28 42 L46 23" fill="none" stroke="#0a0a0a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: checkLen }} />
        </svg>
        <p className="mt-3 text-[15px] font-bold">Pedido confirmado!</p>
        <p className="text-[10px] text-black/50">#4821 · já está no forno</p>
        <div className="relative mt-5 w-full h-[170px] rounded-[14px] overflow-hidden bg-[#e9e4d8]">
          <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 250 170" preserveAspectRatio="none">
            {[30, 70, 110, 150].map((y) => <line key={y} x1="0" y1={y} x2="250" y2={y - 12} stroke="#fff" strokeWidth="6" />)}
            {[40, 100, 160, 220].map((x) => <line key={x} x1={x} y1="0" x2={x + 14} y2="170" stroke="#fff" strokeWidth="6" />)}
            <rect x="120" y="100" width="40" height="30" rx="4" fill="#cfe3c4" />
            <path d={ROUTE} fill="none" stroke="rgba(10,10,10,0.15)" strokeWidth="5" strokeLinecap="round" />
            <motion.path d={ROUTE} fill="none" stroke="var(--orange-500)" strokeWidth="5" strokeLinecap="round" style={{ pathLength: routeLen }} />
            <circle cx="28" cy="140" r="7" fill="#0a0a0a" />
            <circle cx="222" cy="22" r="7" fill="var(--orange-500)" stroke="#0a0a0a" strokeWidth="2" />
          </svg>
          <motion.div
            className="absolute left-0 top-0 w-7 h-7 -ml-3.5 -mt-3.5 rounded-full bg-[var(--ink)] text-[var(--cream)] flex items-center justify-center"
            style={{ offsetPath: `path("${ROUTE}")`, offsetRotate: "0deg", offsetDistance: motoDist }}
          >
            <Bike size={14} />
          </motion.div>
        </div>
        <motion.p style={{ opacity: etaO }} className="mt-4 text-[12px] font-bold">Saiu pra entrega 🛵</motion.p>
        <motion.p style={{ opacity: etaO }} className="text-[10px] text-black/50">chega em ~25 min</motion.p>
      </motion.div>

      <Finger p={p} />
      {TAPS.map(([t, x, y]) => (
        <Ripple key={t} p={p} t={t} x={x} y={y} />
      ))}
    </div>
  );
}

export default function OrderPath() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const line = useT(scrollYProgress, [0, 1], ["0%", "100%"]);
  const badge = useT(scrollYProgress, [0.84, 0.88], [0, 1]);
  const badgeY = useT(scrollYProgress, [0.84, 0.88], [12, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let s = 0;
    STEPS.forEach((st, i) => {
      if (v >= st.at) s = i;
    });
    setStep(s);
  });

  return (
    <div ref={ref} className="relative" style={{ height: "560vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container-wide w-full grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-16 items-center">
          <div className="max-lg:order-2 max-lg:text-center">
            <p className="eyebrow mb-4 max-lg:hidden">Do feed até a cozinha</p>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98] mb-8 max-lg:hidden">
              O caminho de um pedido.
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-mono text-[var(--orange-500)] text-[13px] mb-2">0{step + 1} / 0{STEPS.length} · {STEPS[step].k}</p>
                <h3 className="text-[clamp(1.25rem,3vw,2.1rem)] leading-[1.1]">{STEPS[step].t}</h3>
                <p className="mt-3 text-muted text-[15px] lg:text-[16px] max-w-[420px] max-lg:mx-auto">{STEPS[step].s}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* celular */}
          <div className="relative mx-auto max-lg:order-1 max-lg:scale-[0.8] max-lg:-my-12 max-[380px]:scale-[0.72]">
            <div className="p-[10px] rounded-[40px] bg-[#111] border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_90px_rgba(255,90,31,0.14)]">
              <Phone p={scrollYProgress} />
            </div>
            <motion.div
              className="absolute max-lg:-right-4 lg:-left-32 top-24 rounded-[14px] bg-[var(--ink)] border border-[var(--orange-500)] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[60]"
              style={{ opacity: badge, y: badgeY }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-faint">painel DLX</p>
              <p className="font-mono text-[15px] text-[var(--orange-500)]">+1 pedido</p>
              <p className="font-mono text-[11px] text-muted">custo rastreado ✓</p>
            </motion.div>
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
