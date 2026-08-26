"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import fluxoDlx from "../../../public/images/fluxo-dlx.webp";

const NODES = [
  { label: "Anúncio", sub: "Meta / Google" },
  { label: "Clique", sub: "Interesse" },
  { label: "WhatsApp", sub: "Contato" },
  { label: "Cliente", sub: "Venda" },
];

const NODE_W = 132;
const NODE_H = 72;

// ascending path — each step climbs, visualizing the funnel turning into growth
const CENTERS = [
  { x: 96, y: 214 },
  { x: 296, y: 154 },
  { x: 496, y: 96 },
  { x: 664, y: 46 },
];

type Pt = { x: number; y: number };

function cubicPoint(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const mt = 1 - t;
  const x =
    mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x;
  const y =
    mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y;
  return { x, y };
}

function buildPath(points: Pt[]) {
  let d = `M ${points[0].x} ${points[0].y} `;
  const segments: [Pt, Pt, Pt, Pt][] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const c1 = { x: (p0.x + p1.x) / 2, y: p0.y };
    const c2 = { x: (p0.x + p1.x) / 2, y: p1.y };
    d += `C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p1.x} ${p1.y} `;
    segments.push([p0, c1, c2, p1]);
  }
  return { d, segments };
}

function samplePath(segments: [Pt, Pt, Pt, Pt][], perSegment: number) {
  const pts: Pt[] = [];
  segments.forEach(([p0, c1, c2, p1]) => {
    for (let i = 0; i <= perSegment; i++) {
      pts.push(cubicPoint(p0, c1, c2, p1, i / perSegment));
    }
  });
  return pts;
}

const { d: PATH_D, segments } = buildPath(CENTERS);
const SAMPLED = samplePath(segments, 16);

// Full loop = 4s travel + 0.8s hold (matches the old repeat/repeatDelay timing).
// Position and opacity are pure CSS @keyframes on `transform`/`opacity` only —
// no per-frame JS, no SVG geometry (cx/cy) mutation, so it's compositor-friendly
// and costs ~nothing on the main thread (was a measurable Lighthouse TBT hit before).
const CYCLE_S = 4.8;
const TRAVEL_FRACTION = 4 / CYCLE_S;
const ORIGIN = SAMPLED[0];

function buildKeyframeCSS() {
  const stops = new Map<string, string[]>();
  const push = (pct: number, decl: string) => {
    const key = pct.toFixed(3);
    const arr = stops.get(key) ?? [];
    arr.push(decl);
    stops.set(key, arr);
  };

  SAMPLED.forEach((p, i) => {
    const pct = (i / (SAMPLED.length - 1)) * TRAVEL_FRACTION * 100;
    push(pct, `--pulse-x:${(p.x - ORIGIN.x).toFixed(2)}`);
    push(pct, `--pulse-y:${(p.y - ORIGIN.y).toFixed(2)}`);
  });

  const opacityStops: [number, number][] = [
    [0, 0],
    [0.08, 1],
    [0.5, 1],
    [0.92, 1],
    [1, 0],
  ];
  opacityStops.forEach(([f, op]) => {
    push(f * TRAVEL_FRACTION * 100, `opacity:${op}`);
  });
  push(100, "opacity:0");

  const body = [...stops.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([pct, decls]) => `${pct}%{${decls.join(";")}}`)
    .join("");

  return `@keyframes signature-pulse{${body}}`;
}

const PULSE_KEYFRAMES_CSS = buildKeyframeCSS();

const FLOW_ALT =
  "Fluxo DLX: anúncio leva a clique, que vira contato no WhatsApp, que vira cliente.";

export default function SignatureFlow({
  size = "large",
  className,
}: {
  size?: "large" | "small";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const isSmall = size === "small";

  // Reduced motion: swap the live pulse animation for the static hero render —
  // richer than a bare line-drawing fallback, with no motion to disable.
  if (reduceMotion) {
    return (
      <div className={className}>
        <Image
          src={fluxoDlx}
          alt={FLOW_ALT}
          width={1254}
          height={1254}
          className="w-full h-auto rounded-[24px]"
          style={{ maxWidth: isSmall ? 380 : undefined }}
        />
      </div>
    );
  }

  return (
    <div className={className} role="img" aria-label={FLOW_ALT}>
      <svg
        viewBox="0 0 760 300"
        className="w-full h-auto overflow-visible"
        style={{ maxWidth: isSmall ? 380 : undefined }}
      >
        <defs>
          <radialGradient id="pulse-gradient">
            <stop offset="0%" stopColor="#FF814D" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="panel-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
          </linearGradient>
          <style>{`
            ${PULSE_KEYFRAMES_CSS}
            .signature-pulse {
              --pulse-x: 0;
              --pulse-y: 0;
              transform: translate(calc(var(--pulse-x) * 1px), calc(var(--pulse-y) * 1px));
              animation: signature-pulse ${CYCLE_S}s linear infinite;
            }
          `}</style>
        </defs>

        {/* connecting path */}
        <path d={PATH_D} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* traveling pulse — position/opacity driven entirely by CSS (transform + opacity) */}
        <circle
          className="signature-pulse"
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r="6"
          fill="url(#pulse-gradient)"
          opacity={0}
          style={{ filter: "drop-shadow(0 0 10px rgba(255,90,31,0.95))" }}
        />

        {NODES.map((node, i) => {
          const c = CENTERS[i];
          const x = c.x - NODE_W / 2;
          const y = c.y - NODE_H / 2;
          const hitTime = i / (NODES.length - 1 || 1);
          return (
            <g key={node.label}>
              <rect
                x={x}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx="16"
                fill="url(#panel-fill)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <motion.rect
                x={x}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx="16"
                fill="none"
                stroke="#FF5A1F"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 0] }}
                transition={{
                  duration: 4.8,
                  times: [
                    Math.max(0, hitTime * 0.86 - 0.03),
                    hitTime * 0.86,
                    hitTime * 0.86 + 0.03,
                    hitTime * 0.86 + 0.14,
                  ],
                  ease: "easeOut",
                  repeat: Infinity,
                }}
              />
              <text
                x={c.x}
                y={c.y - 8}
                textAnchor="middle"
                fill="#F4F1EA"
                fontSize="15"
                fontFamily="var(--font-general-sans)"
                fontWeight={600}
              >
                {node.label}
              </text>
              <text
                x={c.x}
                y={c.y + 15}
                textAnchor="middle"
                fill="var(--text-dark-3)"
                fontSize="11"
                fontFamily="var(--font-inter)"
                letterSpacing="0.02em"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
