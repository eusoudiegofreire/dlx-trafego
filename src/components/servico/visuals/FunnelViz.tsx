"use client";

import { useRef } from "react";
import { Eye, MousePointerClick, MessageCircle, Store } from "lucide-react";
import Panel from "./Panel";
import { useLoop } from "./useLoop";

const STAGES = [
  { icon: Eye, label: "Viu o produto no anúncio", w: "100%" },
  { icon: MousePointerClick, label: "Tocou pra ver mais", w: "74%" },
  { icon: MessageCircle, label: "Chamou no direct", w: "50%" },
  { icon: Store, label: "Veio buscar na loja", w: "32%" },
];

// Funil da loja: as barras se estreitam etapa por etapa e "clientes"
// (pontos) descem pelo funil até a porta da loja.
export default function FunnelViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    tl.set(q(".bar"), { scaleX: 0, transformOrigin: "left center" })
      .set(q(".lbl"), { opacity: 0 })
      .set(q(".drop"), { y: 0, opacity: 0 })
      .set(q(".door"), { opacity: 0.25 })
      .to(q(".bar"), { scaleX: 1, duration: 0.7, ease: "power3.out", stagger: 0.35 })
      .to(q(".lbl"), { opacity: 1, duration: 0.3, stagger: 0.35 }, "<0.2")
      .to(q(".drop"), { opacity: 1, duration: 0.1, stagger: 0.25 })
      .to(q(".drop"), { y: 270, duration: 1.4, ease: "power1.in", stagger: 0.25 }, "<")
      .to(q(".drop"), { opacity: 0, duration: 0.2, stagger: 0.25 }, "-=0.9")
      .to(q(".door"), { opacity: 1, duration: 0.25, yoyo: true, repeat: 3 }, "-=0.6")
      .to({}, { duration: 1.4 });
  });

  return (
    <div ref={ref}>
      <Panel label="loja · do anúncio até a porta">
        <div className="relative p-6 flex flex-col gap-4">
          {STAGES.map((s) => (
            <div key={s.label}>
              <p className="lbl flex items-center gap-2 mb-1.5 text-[13px] text-[var(--text-dark-1)]">
                <s.icon size={15} className="text-[var(--orange-500)] shrink-0" /> {s.label}
              </p>
              <div className="bar h-7 rounded-lg" style={{ width: s.w, background: "linear-gradient(90deg, rgba(255,90,31,.95), rgba(255,90,31,.35))" }} />
            </div>
          ))}
          {[18, 34, 50, 26, 42].map((left, i) => (
            <span key={i} className="drop absolute top-6 size-2.5 rounded-full bg-[var(--text-dark-1)]" style={{ left: `${left}%` }} />
          ))}
          <div className="door mt-2 self-start flex items-center gap-2 rounded-full border border-[var(--orange-500)] px-4 py-2 text-[13px] text-[var(--text-dark-1)]">
            <Store size={15} className="text-[var(--orange-500)]" /> Cliente na loja
          </div>
        </div>
      </Panel>
    </div>
  );
}
