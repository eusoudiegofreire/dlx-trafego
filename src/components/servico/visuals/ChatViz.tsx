"use client";

import { useRef } from "react";
import { MessageCircle, Bot, Database, UserCheck } from "lucide-react";
import { useLoop } from "./useLoop";

const MESSAGES = [
  { from: "in", text: "Oi, vocês atendem sábado?", time: "21:47" },
  { from: "out", text: "Oi! Atendemos sim, sábado das 8h às 12h 😊 Quer que eu reserve um horário?", time: "21:47" },
  { from: "in", text: "Quero! De manhã cedo", time: "21:48" },
  { from: "out", text: "Fechado: sábado às 8h30. Me confirma seu nome completo?", time: "21:48" },
];
const NODES = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Bot, label: "IA" },
  { icon: Database, label: "CRM" },
  { icon: UserCheck, label: "Equipe" },
];

// Conversa às 21h47 respondida na hora pela IA, e o fluxo do n8n
// acendendo nó a nó embaixo: WhatsApp → IA → CRM → equipe.
export default function ChatViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    const msgs = q(".msg");
    tl.set(msgs, { opacity: 0, y: 12 })
      .set(q(".typing"), { opacity: 0 })
      .set(q(".node"), { opacity: 0.3, scale: 0.95 })
      .set(q(".wire"), { scaleX: 0, transformOrigin: "left center" });
    msgs.forEach((m, i) => {
      const isOut = MESSAGES[i].from === "out";
      if (isOut) tl.to(q(".typing"), { opacity: 1, duration: 0.2 }).to(q(".typing"), { opacity: 0, duration: 0.15 }, "+=0.7");
      tl.to(m, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, isOut ? "<" : "+=0.5");
    });
    const nodes = q(".node");
    const wires = q(".wire");
    nodes.forEach((n, i) => {
      tl.to(n, { opacity: 1, scale: 1, duration: 0.25 });
      if (wires[i]) tl.to(wires[i], { scaleX: 1, duration: 0.3, ease: "none" });
    });
    tl.to(q(".saved"), { opacity: 1, duration: 0.3 }).to({}, { duration: 1.6 }).to([msgs, q(".saved")].flat(), { opacity: 0, duration: 0.3 });
  });

  return (
    <div ref={ref} aria-hidden className="relative">
      <div
        className="absolute -inset-10 -z-10 blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,.22), transparent 65%)" }}
      />
      <div className="rounded-[28px] border border-white/10 bg-[#0e1512] overflow-hidden shadow-[var(--shadow-card-dark)]">
        <div className="flex items-center gap-3 px-5 h-14 border-b border-white/10 bg-[#13201a]">
          <span className="size-9 rounded-full bg-[var(--orange-500)] flex items-center justify-center">
            <Bot size={18} className="text-[var(--ink)]" />
          </span>
          <div>
            <p className="text-[13px] font-semibold text-[var(--text-dark-1)]">Assistente do seu negócio</p>
            <p className="typing text-[11px] text-[#5fd38d] opacity-0">digitando…</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2.5 min-h-[270px]">
          {MESSAGES.map((m, i) => (
            <div
              key={i}
              className={`msg max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug text-[var(--text-dark-1)] ${
                m.from === "in" ? "self-start rounded-tl-sm bg-white/10" : "self-end rounded-tr-sm bg-[#1f5c3d]"
              }`}
            >
              {m.text}
              <span className="block text-right text-[10px] text-white/45 mt-1">{m.time}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-5 py-4 bg-[var(--surface-dark)]">
          <div className="flex items-center">
            {NODES.map((n, i) => (
              <div key={n.label} className="flex items-center flex-1 last:flex-none">
                <div className="node flex flex-col items-center gap-1">
                  <span className="size-10 rounded-xl border border-[var(--orange-500)]/60 bg-[var(--orange-500)]/10 flex items-center justify-center">
                    <n.icon size={17} className="text-[var(--orange-500)]" />
                  </span>
                  <span className="text-[10px] text-[var(--text-dark-2)] [font-family:var(--font-jetbrains)]">{n.label}</span>
                </div>
                {i < NODES.length - 1 && <span className="wire flex-1 h-px mx-2 -mt-4 bg-[var(--orange-500)]" />}
              </div>
            ))}
          </div>
          <p className="saved mt-3 text-[11px] text-[#5fd38d] opacity-0 [font-family:var(--font-jetbrains)]">
            ✓ contato salvo no CRM · horário reservado · equipe avisada
          </p>
        </div>
      </div>
    </div>
  );
}
