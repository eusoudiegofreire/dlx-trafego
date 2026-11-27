"use client";

import { useRef } from "react";
import { CalendarCheck } from "lucide-react";
import Panel from "./Panel";
import { useLoop } from "./useLoop";

const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const HOURS = ["08h", "09h", "10h", "14h", "15h", "16h"];
// ordem em que os horários vão sendo preenchidos (dia, hora)
const FILL: [number, number][] = [
  [0, 1], [2, 4], [1, 0], [3, 3], [4, 2], [0, 4], [2, 1], [3, 5], [1, 3], [4, 4], [0, 2], [3, 0],
];

// Agenda da clínica enchendo de avaliações, com a notificação de cada
// mensagem que chega do anúncio.
export default function AgendaViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    const slots = q(".slot").sort(
      (a, b) => Number((a as HTMLElement).dataset.order) - Number((b as HTMLElement).dataset.order)
    );
    const toasts = q(".toast");
    tl.set(slots, { scale: 0, opacity: 0, transformOrigin: "center" }).set(toasts, { opacity: 0, x: 30 });
    // a cada 4 horários, uma mensagem nova chega e some
    FILL.forEach((_, i) => {
      if (i % 4 === 0) tl.to(toasts[i / 4], { opacity: 1, x: 0, duration: 0.35, ease: "power3.out" });
      tl.to(slots[i], { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }, "+=0.15");
      if (i % 4 === 3) tl.to(toasts[(i - 3) / 4], { opacity: 0, x: 30, duration: 0.3 }, "+=0.3");
    });
    tl.to({}, { duration: 1.8 }).to(slots, { opacity: 0, duration: 0.4 });
  });

  return (
    <div ref={ref} className="relative">
      <Panel label="agenda · avaliações da semana">
        <div className="p-5">
          <div className="grid grid-cols-[38px_repeat(5,1fr)] gap-1.5 text-[11px]">
            <span />
            {DAYS.map((d) => (
              <span key={d} className="text-center text-[var(--text-dark-3)] pb-1">{d}</span>
            ))}
            {HOURS.map((h, hi) => (
              <div key={h} className="contents">
                <span className="text-[var(--text-dark-3)] self-center [font-family:var(--font-jetbrains)]">{h}</span>
                {DAYS.map((d, di) => {
                  const filled = FILL.findIndex(([fd, fh]) => fd === di && fh === hi);
                  return (
                    <div key={d} className="relative h-11 rounded-lg bg-white/[.04] border border-white/[.06]">
                      {filled >= 0 && (
                        <div
                          className="slot absolute inset-0.5 rounded-md bg-[var(--orange-500)] text-[var(--ink)] flex items-center justify-center text-[10px] font-semibold"
                          data-order={filled}
                        >
                          Avaliação
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Panel>
      {["Quero agendar uma avaliação", "Vocês atendem sábado?", "Vi o anúncio do implante"].map((m) => (
        <div
          key={m}
          aria-hidden
          className="toast absolute -right-3 -top-6 z-10 flex items-center gap-2 rounded-2xl bg-[#14231b] border border-[#2c5c40] px-4 py-3 shadow-xl opacity-0"
        >
          <CalendarCheck size={16} className="text-[#5fd38d]" />
          <span className="text-[12px] text-[var(--text-dark-1)] whitespace-nowrap">{m}</span>
        </div>
      ))}
    </div>
  );
}
