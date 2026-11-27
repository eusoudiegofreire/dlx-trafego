"use client";

import { useRef } from "react";
import Panel from "./Panel";
import { useLoop } from "./useLoop";

// Raio de anúncio em volta de Ariquemes: anéis expandem, pontos (pessoas)
// acendem dentro do raio e os laranjas "viajam" até o centro (contato).
const DOTS = [
  [120, 140], [300, 120], [90, 260], [330, 280], [210, 90], [250, 330],
  [150, 320], [340, 190], [80, 190], [270, 220], [160, 210], [230, 160],
];
const HOT = [1, 3, 6, 9];
const CITIES = [
  { name: "Alto Paraíso", x: 46, y: 56 },
  { name: "Rio Crespo", x: 300, y: 48 },
  { name: "Monte Negro", x: 40, y: 380 },
  { name: "Cacaulândia", x: 296, y: 382 },
];

export default function MapViz() {
  const ref = useRef<HTMLDivElement>(null);

  useLoop(ref, (tl, q) => {
    tl.set(q(".dot"), { opacity: 0, scale: 0, transformOrigin: "center" })
      .set(q(".hot"), { fill: "#f4f1ea" })
      .set(q(".ring"), { scale: 0.2, opacity: 0, transformOrigin: "210px 210px" })
      .set(q(".city"), { opacity: 0 })
      .set(q(".badge"), { opacity: 0, y: 8 })
      .to(q(".ring"), { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", stagger: 0.25 })
      .to(q(".city"), { opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.8")
      .to(q(".dot"), { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)", stagger: 0.06 }, "-=0.4")
      .to(q(".hot"), { fill: "#ff5a1f", duration: 0.3, stagger: 0.25 })
      .to(q(".hot"), { attr: { cx: 210, cy: 210 }, opacity: 0, duration: 0.9, ease: "power2.in", stagger: 0.2 })
      .fromTo(q(".pin"), { scale: 1 }, { scale: 1.25, duration: 0.18, yoyo: true, repeat: 3, transformOrigin: "210px 210px" }, "-=0.6")
      .to(q(".badge"), { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
      .to({}, { duration: 1.6 })
      .to(q(".badge"), { opacity: 0, y: 8, duration: 0.3 });
  });

  return (
    <div ref={ref}>
      <Panel label="segmentação · raio de anúncio">
        <div className="relative">
          <svg viewBox="0 0 420 420" className="w-full h-auto block">
            {/* ruas */}
            {Array.from({ length: 9 }).map((_, i) => (
              <g key={i} stroke="rgba(255,255,255,.05)">
                <line x1={i * 52} y1="0" x2={i * 52 + 40} y2="420" />
                <line x1="0" y1={i * 52} x2="420" y2={i * 52 - 30} />
              </g>
            ))}
            <path d="M0 300 C 120 260, 260 230, 420 120" stroke="rgba(255,90,31,.25)" strokeWidth="3" fill="none" />
            <text x="352" y="138" fill="rgba(255,90,31,.6)" fontSize="10" fontFamily="var(--font-jetbrains)">BR-364</text>

            {[170, 120, 70].map((r) => (
              <circle key={r} className="ring" cx="210" cy="210" r={r} fill="rgba(255,90,31,.05)" stroke="rgba(255,90,31,.45)" strokeDasharray="4 6" />
            ))}

            {CITIES.map((c) => (
              <text key={c.name} className="city" x={c.x} y={c.y} fill="#8a8a83" fontSize="11" fontFamily="var(--font-inter)">
                {c.name}
              </text>
            ))}

            {DOTS.map(([x, y], i) => (
              <circle key={i} className={`dot ${HOT.includes(i) ? "hot" : ""}`} cx={x} cy={y} r="5" fill="#f4f1ea" />
            ))}

            <g className="pin">
              <circle cx="210" cy="210" r="16" fill="#ff5a1f" />
              <circle cx="210" cy="210" r="6" fill="#0a0a0a" />
            </g>
            <text x="210" y="248" textAnchor="middle" fill="#f4f1ea" fontSize="13" fontWeight="600" fontFamily="var(--font-inter)">
              Ariquemes
            </text>
          </svg>
          <div className="badge absolute left-1/2 -translate-x-1/2 bottom-5 opacity-0 rounded-full bg-[var(--orange-500)] text-[var(--ink)] text-[13px] font-semibold px-4 py-2 whitespace-nowrap">
            Novo contato no WhatsApp
          </div>
        </div>
      </Panel>
    </div>
  );
}
