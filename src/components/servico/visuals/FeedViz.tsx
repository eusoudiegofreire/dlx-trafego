"use client";

import { useRef } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useLoop } from "./useLoop";

// Celular com feed: o anúncio sobe no feed, o botão "Enviar mensagem"
// pulsa, um toque, e a tela vira a conversa que chegou no WhatsApp.
export default function FeedViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    tl.set(q(".feed"), { y: 0 })
      .set(q(".ad"), { opacity: 0, y: 60 })
      .set(q(".chat"), { opacity: 0, x: 40 })
      .set(q(".bubble"), { opacity: 0, y: 10 })
      .set(q(".tap"), { opacity: 0, scale: 0.4 })
      .to(q(".feed"), { y: -340, duration: 1.6, ease: "power2.inOut" })
      .to(q(".ad"), { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.6")
      .to(q(".cta-btn"), { scale: 1.06, duration: 0.25, yoyo: true, repeat: 3, ease: "sine.inOut" })
      .to(q(".tap"), { opacity: 0.9, scale: 1, duration: 0.2 })
      .to(q(".tap"), { opacity: 0, scale: 1.8, duration: 0.4 })
      .to(q(".screen-feed"), { opacity: 0, x: -40, duration: 0.4 }, "-=0.2")
      .to(q(".chat"), { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }, "<")
      .to(q(".bubble"), { opacity: 1, y: 0, duration: 0.4, stagger: 0.7 })
      .to({}, { duration: 1.8 })
      .to(q(".chat"), { opacity: 0, duration: 0.3 })
      .set(q(".screen-feed"), { opacity: 1, x: 0 });
  });

  return (
    <div ref={ref} aria-hidden className="relative mx-auto w-[300px]">
      <div
        className="absolute -inset-14 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,.25), transparent 65%)" }}
      />
      <div className="relative h-[560px] rounded-[44px] border-[10px] border-[#1c1c1c] bg-[#0b0b0b] overflow-hidden shadow-[var(--shadow-card-dark)]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-[#1c1c1c] z-20" />

        {/* feed */}
        <div className="screen-feed absolute inset-0 pt-10">
          <div className="feed px-3 flex flex-col gap-3">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-2xl bg-white/[.04] p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-7 rounded-full bg-white/10" />
                  <span className="h-2 w-20 rounded bg-white/10" />
                </div>
                <div className="h-36 rounded-xl bg-white/[.06]" />
              </div>
            ))}
            <div className="ad rounded-2xl bg-white/[.06] p-3 border border-[var(--orange-500)]/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="size-7 rounded-full bg-[var(--orange-500)]" />
                <div>
                  <p className="text-[11px] font-semibold text-[var(--text-dark-1)] leading-none">Seu negócio</p>
                  <p className="text-[9px] text-[var(--text-dark-3)] mt-1">Patrocinado</p>
                </div>
              </div>
              <div className="h-40 rounded-xl flex items-end p-3" style={{ background: "linear-gradient(160deg,#2a1208,#ff5a1f)" }}>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[20px] leading-[1.05] text-white">
                  Agende sua avaliação esta semana
                </p>
              </div>
              <div className="cta-btn relative mt-3 h-9 rounded-lg bg-[var(--orange-500)] text-[var(--ink)] text-[12px] font-semibold flex items-center justify-center">
                Enviar mensagem
                <span className="tap absolute size-10 rounded-full bg-white/70" />
              </div>
              <div className="flex gap-3 mt-3 text-[var(--text-dark-2)]">
                <Heart size={16} /> <MessageCircle size={16} /> <Send size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* conversa */}
        <div className="chat absolute inset-0 pt-10 bg-[#0e1512] opacity-0">
          <div className="flex items-center gap-2 px-4 pb-3 border-b border-white/10">
            <span className="size-8 rounded-full bg-[var(--orange-500)]" />
            <div>
              <p className="text-[12px] font-semibold text-[var(--text-dark-1)]">Novo cliente</p>
              <p className="text-[10px] text-[#5fd38d]">veio do anúncio</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <p className="bubble self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-[12px] text-[var(--text-dark-1)]">
              Oi! Vi o anúncio no Instagram 👋
            </p>
            <p className="bubble self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-[12px] text-[var(--text-dark-1)]">
              Tem horário pra avaliação essa semana?
            </p>
            <p className="bubble self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1f5c3d] px-3 py-2 text-[12px] text-[var(--text-dark-1)]">
              Tem sim! Quinta às 15h fica bom?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
