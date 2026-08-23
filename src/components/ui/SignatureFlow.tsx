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
        </defs>

        {/* connecting path */}
        <path d={PATH_D} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />

        {/* traveling pulse */}
        <motion.circle
          r="6"
          fill="url(#pulse-gradient)"
          initial={{ opacity: 0, cx: SAMPLED[0].x, cy: SAMPLED[0].y }}
          animate={{
            cx: SAMPLED.map((p) => p.x),
            cy: SAMPLED.map((p) => p.y),
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            cx: { duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 0.8 },
            cy: { duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 0.8 },
            opacity: {
              duration: 4,
              times: [0, 0.08, 0.5, 0.92, 1],
              repeat: Infinity,
              repeatDelay: 0.8,
            },
          }}
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
