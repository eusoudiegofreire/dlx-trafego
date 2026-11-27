"use client";

import { useRef } from "react";
import { Search, MousePointer2, Phone } from "lucide-react";
import { useLoop } from "./useLoop";

const QUERY = "dentista em ariquemes";

// Busca no Google: a pessoa digita, o resultado patrocinado aparece no
// topo, o cursor clica e vira contato. As letras são spans pra animar.
export default function SearchViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    const chars = q(".ch");
    tl.set(chars, { opacity: 0 })
      .set(q(".res"), { opacity: 0, y: 14 })
      .set(q(".cursor"), { x: 260, y: 200, opacity: 0 })
      .set(q(".call"), { opacity: 0, scale: 0.8 })
      .set(q(".top"), { borderColor: "rgba(255,255,255,.08)" })
      .to(chars, { opacity: 1, duration: 0.01, stagger: 0.07 })
      .to(q(".res"), { opacity: 1, y: 0, duration: 0.45, stagger: 0.14, ease: "power3.out" }, "+=0.3")
      .to(q(".top"), { borderColor: "rgba(255,90,31,.8)", duration: 0.3 })
      .to(q(".cursor"), { opacity: 1, x: 120, y: 34, duration: 0.9, ease: "power2.inOut" })
      .to(q(".cursor"), { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 })
      .to(q(".call"), { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" })
      .to({}, { duration: 1.6 })
      .to([q(".res"), q(".call"), q(".cursor")].flat(), { opacity: 0, duration: 0.3 });
  });

  return (
    <div ref={ref} aria-hidden className="relative">
      <div
        className="absolute -inset-10 -z-10 blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,.22), transparent 65%)" }}
      />
      <div className="rounded-[28px] border border-white/10 bg-[var(--surface-dark)] p-6 shadow-[var(--shadow-card-dark)]">
        <p className="[font-family:var(--font-general-sans)] font-semibold text-[22px] mb-4 tracking-tight">
          <span className="text-[#8ab4f8]">G</span>
          <span className="text-[#f28b82]">o</span>
          <span className="text-[#fdd663]">o</span>
          <span className="text-[#8ab4f8]">g</span>
          <span className="text-[#81c995]">l</span>
          <span className="text-[#f28b82]">e</span>
        </p>
        <div className="flex items-center gap-3 h-12 rounded-full border border-white/15 px-5 mb-6">
          <Search size={16} className="text-[var(--text-dark-3)]" />
          <span className="text-[15px] text-[var(--text-dark-1)]">
            {QUERY.split("").map((c, i) => (
              <span key={i} className="ch">{c}</span>
            ))}
          </span>
          <span className="w-px h-5 bg-[var(--orange-500)] motion-safe:animate-pulse" />
        </div>

        <div className="relative flex flex-col gap-3">
          <div className="res top rounded-2xl border-2 p-4 bg-white/[.03]">
            <p className="text-[11px] font-semibold text-[var(--text-dark-1)] mb-1">
              Patrocinado · <span className="text-[var(--text-dark-3)] font-normal">suaclinica.com.br</span>
            </p>
            <p className="text-[16px] text-[#8ab4f8] font-medium leading-snug">
              Implante e Avaliação em Ariquemes | Agende pelo WhatsApp
            </p>
            <p className="text-[12px] text-[var(--text-dark-2)] mt-1">
              Atendimento no centro de Ariquemes. Avaliação com especialista. Seg a sáb.
            </p>
          </div>
          {[0, 1].map((i) => (
            <div key={i} className="res rounded-2xl p-4 bg-white/[.02]">
              <span className="block h-2 w-28 rounded bg-white/10 mb-2" />
              <span className="block h-3 w-4/5 rounded bg-white/10 mb-2" />
              <span className="block h-2 w-3/5 rounded bg-white/[.06]" />
            </div>
          ))}

          <MousePointer2 className="cursor absolute top-0 left-0 text-white drop-shadow" size={22} fill="white" />
          <div className="call absolute right-4 bottom-6 flex items-center gap-2 rounded-full bg-[var(--orange-500)] text-[var(--ink)] text-[12px] font-semibold px-3 py-1.5">
            <Phone size={13} /> Contato recebido
          </div>
        </div>
      </div>
    </div>
  );
}
