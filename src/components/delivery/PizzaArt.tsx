// Pizzas ilustradas em SVG (vista de cima). Determinístico: sem Math.random,
// pra o servidor e o navegador desenharem igual.

export type PizzaKind = "calabresa" | "margherita" | "frango" | "chocolate";

const ring = (n: number, r: number, off = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 + off;
    return [50 + Math.cos(a) * r, 50 + Math.sin(a) * r] as const;
  });

const OREGANO = [...ring(14, 30, 0.3), ...ring(9, 18, 1.1), ...ring(5, 8, 0.7)];

export default function PizzaArt({ kind = "calabresa", size = 120, className = "" }: { kind?: PizzaKind; size?: number; className?: string }) {
  const id = `pz-${kind}`;
  const choc = kind === "chocolate";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${id}-crust`} cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f3c27a" />
          <stop offset="70%" stopColor="#d98f3f" />
          <stop offset="100%" stopColor="#a8601f" />
        </radialGradient>
        <radialGradient id={`${id}-top`} cx="40%" cy="35%" r="70%">
          {choc ? (
            <>
              <stop offset="0%" stopColor="#7a4122" />
              <stop offset="100%" stopColor="#4a2311" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#ffe08a" />
              <stop offset="60%" stopColor="#f6bf45" />
              <stop offset="100%" stopColor="#e39a2c" />
            </>
          )}
        </radialGradient>
        <radialGradient id={`${id}-pep`} cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#d9503c" />
          <stop offset="100%" stopColor="#8e241b" />
        </radialGradient>
      </defs>

      {/* sombra + borda */}
      <ellipse cx="51" cy="53" rx="47" ry="46" fill="rgba(0,0,0,0.28)" />
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-crust)`} />
      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(120,60,15,0.35)" strokeWidth="1" />
      {/* bolhas da borda */}
      {ring(18, 43, 0.2).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 ? 1.6 : 2.2} fill="rgba(255,235,190,0.45)" />
      ))}
      {/* molho aparecendo */}
      {!choc && <circle cx="50" cy="50" r="39" fill="#c2412a" />}
      {/* queijo / chocolate com borda irregular */}
      <path
        d="M50 13 C61 12 70 16 77 23 C85 30 89 40 88 50 C89 61 84 71 77 78 C69 85 60 88 50 88 C39 89 29 84 22 77 C15 70 12 60 13 50 C12 39 17 29 23 22 C30 15 40 12 50 13 Z"
        fill={`url(#${id}-top)`}
      />
      {!choc &&
        ring(10, 22, 0.5).map(([x, y], i) => (
          <ellipse key={`q${i}`} cx={x} cy={y} rx="5" ry="3" fill="rgba(255,248,215,0.55)" transform={`rotate(${i * 37} ${x} ${y})`} />
        ))}

      {kind === "calabresa" && (
        <>
          {[...ring(7, 25, 0.2), ...ring(3, 10, 1)].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="7" fill={`url(#${id}-pep)`} />
              <circle cx={x} cy={y} r="7" fill="none" stroke="#6e1a14" strokeWidth="0.9" />
              <circle cx={x - 2} cy={y - 1.5} r="1" fill="rgba(255,230,210,0.8)" />
              <circle cx={x + 2} cy={y + 2} r="0.8" fill="rgba(255,230,210,0.7)" />
            </g>
          ))}
          {ring(6, 18, 0.9).map(([x, y], i) => (
            <path key={`c${i}`} d={`M${x - 4} ${y} a4 3 0 0 1 8 0`} fill="none" stroke="rgba(255,250,240,0.85)" strokeWidth="1.2" transform={`rotate(${i * 60} ${x} ${y})`} />
          ))}
        </>
      )}

      {kind === "margherita" && (
        <>
          {[...ring(6, 24, 0), ...ring(2, 8, 0.5)].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6.5" fill="#d6402c" />
              <circle cx={x} cy={y} r="4.2" fill="#f06048" />
            </g>
          ))}
          {ring(6, 15, 0.55).map(([x, y], i) => (
            <path key={`b${i}`} d={`M${x} ${y - 5} C${x + 4} ${y - 2} ${x + 3} ${y + 3} ${x} ${y + 5} C${x - 3} ${y + 3} ${x - 4} ${y - 2} ${x} ${y - 5} Z`} fill="#3f8a3a" stroke="#2c6428" strokeWidth="0.5" transform={`rotate(${i * 50} ${x} ${y})`} />
          ))}
        </>
      )}

      {kind === "frango" && (
        <>
          {ring(22, 24, 0.1).map(([x, y], i) => (
            <rect key={i} x={x - 3} y={y - 1.2} width="6" height="2.4" rx="1.2" fill={i % 2 ? "#e7c08a" : "#d7a466"} transform={`rotate(${i * 41} ${x} ${y})`} />
          ))}
          {ring(10, 12, 0.4).map(([x, y], i) => (
            <rect key={`i${i}`} x={x - 2.6} y={y - 1} width="5.2" height="2" rx="1" fill="#e2b578" transform={`rotate(${i * 67} ${x} ${y})`} />
          ))}
          {[...ring(5, 30, 0.6), [50, 50] as const].map(([x, y], i) => (
            <circle key={`ct${i}`} cx={x} cy={y} r="4.5" fill="#fffaf0" stroke="#efe3c8" strokeWidth="0.8" />
          ))}
        </>
      )}

      {kind === "chocolate" && (
        <>
          {[0, 1, 2, 3].map((k) => (
            <path key={k} d={`M22 ${32 + k * 12} Q 50 ${24 + k * 12} 78 ${34 + k * 12}`} fill="none" stroke="#fff3e3" strokeOpacity="0.8" strokeWidth="1.4" />
          ))}
          {ring(6, 22, 0.4).map(([x, y], i) => (
            <g key={i}>
              <path d={`M${x} ${y - 5} C${x + 5} ${y - 4} ${x + 4} ${y + 4} ${x} ${y + 5} C${x - 4} ${y + 4} ${x - 5} ${y - 4} ${x} ${y - 5} Z`} fill="#e23a3a" />
              <path d={`M${x - 2} ${y - 5} L${x} ${y - 7} L${x + 2} ${y - 5}`} fill="#3f8a3a" />
              <circle cx={x - 1} cy={y} r="0.5" fill="#ffd9a0" />
              <circle cx={x + 1.5} cy={y + 2} r="0.5" fill="#ffd9a0" />
            </g>
          ))}
        </>
      )}

      {!choc &&
        OREGANO.map(([x, y], i) => <rect key={`o${i}`} x={x} y={y} width="1.4" height="0.8" fill="#4d6b2a" transform={`rotate(${i * 29} ${x} ${y})`} />)}

      {/* cortes */}
      {[0, 45, 90, 135].map((a) => (
        <line key={a} x1="50" y1="5" x2="50" y2="95" stroke="rgba(90,40,10,0.22)" strokeWidth="0.8" transform={`rotate(${a} 50 50)`} />
      ))}
      {/* brilho */}
      <ellipse cx="38" cy="32" rx="18" ry="10" fill="rgba(255,255,255,0.12)" transform="rotate(-30 38 32)" />
    </svg>
  );
}
