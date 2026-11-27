"use client";

import { useRef } from "react";
import { Scissors } from "lucide-react";
import { useLoop } from "./useLoop";

const CAPTION = ["Você", "perde", "cliente", "nos", "3", "primeiros", "segundos"];
const CLIPS = [22, 14, 18, 12, 20, 14];

// Reels sendo editado: gancho gigante entra nos primeiros quadros,
// legenda acende palavra por palavra e, embaixo, a timeline com o
// playhead passando pelos cortes.
export default function ReelViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    const words = q(".w");
    tl.set(q(".hook"), { scale: 1.6, opacity: 0 })
      .set(words, { color: "rgba(255,255,255,.35)", scale: 1 })
      .set(q(".prog"), { scaleX: 0, transformOrigin: "left center" })
      .set(q(".head"), { left: "0%" })
      .set(q(".cut"), { opacity: 0.25 })
      .to(q(".prog"), { scaleX: 1, duration: 5.2, ease: "none" }, 0)
      .to(q(".head"), { left: "100%", duration: 5.2, ease: "none" }, 0)
      .to(q(".hook"), { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.6)" }, 0.1)
      .to(q(".hook"), { scale: 0.92, opacity: 0, duration: 0.35 }, 1.7)
      .to(q(".bg"), { backgroundPosition: "100% 0%", duration: 5.2, ease: "none" }, 0);
    words.forEach((w, i) => {
      tl.to(w, { color: "#ff5a1f", scale: 1.12, duration: 0.12 }, 1.9 + i * 0.42).to(w, { color: "#ffffff", scale: 1, duration: 0.15 }, ">0.2");
    });
    q(".cut").forEach((c, i) => {
      tl.to(c, { opacity: 1, duration: 0.1, yoyo: true, repeat: 1 }, (CLIPS.slice(0, i + 1).reduce((a, b) => a + b, 0) / 100) * 5.2);
    });
  });

  return (
    <div ref={ref} aria-hidden className="relative mx-auto w-[300px]">
      <div
        className="absolute -inset-14 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,.25), transparent 65%)" }}
      />
      <div className="relative h-[460px] rounded-[36px] border-[8px] border-[#1c1c1c] overflow-hidden shadow-[var(--shadow-card-dark)]">
        <div
          className="bg absolute inset-0"
          style={{ background: "linear-gradient(115deg,#140a05,#3a1708 35%,#121212 60%,#2a1208)", backgroundSize: "300% 100%" }}
        />
        {/* silhueta de quem fala — sem rosto real */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] h-[58%] rounded-t-[120px] bg-white/[.07]" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[52%] size-24 rounded-full bg-white/[.09]" />

        <div className="absolute top-3 inset-x-3 h-1 rounded-full bg-white/20 overflow-hidden">
          <div className="prog h-full bg-white" />
        </div>
        <p className="hook absolute top-16 inset-x-4 text-center [font-family:var(--font-general-sans)] font-semibold uppercase text-[42px] leading-[0.95] text-white">
          Para de <span className="text-[var(--orange-500)]">rolar</span>
        </p>
        <p className="absolute bottom-10 inset-x-5 text-center [font-family:var(--font-general-sans)] font-semibold uppercase text-[19px] leading-tight">
          {CAPTION.map((w, i) => (
            <span key={i} className="w inline-block mx-[3px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,.6)" }}>
              {w}
            </span>
          ))}
        </p>
      </div>

      {/* timeline de edição */}
      <div className="mt-5 rounded-2xl border border-white/10 bg-[var(--surface-dark)] p-3">
        <div className="flex items-center gap-2 mb-2 text-[10px] text-[var(--text-dark-3)] [font-family:var(--font-jetbrains)]">
          <Scissors size={12} className="text-[var(--orange-500)]" /> timeline · 9:16
        </div>
        <div className="relative">
          <div className="flex gap-1 h-9">
            {CLIPS.map((w, i) => (
              <div key={i} className="cut rounded-md bg-[var(--orange-500)]" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex gap-1 h-3 mt-1">
            {CLIPS.map((w, i) => (
              <div key={i} className="rounded-sm bg-white/15" style={{ width: `${w}%` }} />
            ))}
          </div>
          <span className="head absolute -top-1 -bottom-1 w-0.5 bg-white" />
        </div>
      </div>
    </div>
  );
}
