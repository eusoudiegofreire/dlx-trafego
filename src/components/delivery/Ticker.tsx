import { TOTAL, DESTAQUE, brl } from "./data";

const FRASES = [
  `${brl(TOTAL.pedidos)} pedidos em 30 dias`,
  "anúncio que vira pedido",
  `R$ ${brl(DESTAQUE.custo, 2)} por pedido no combo casal`,
  "meta ads + google ads",
  "relatório toda semana",
  "sem comissão de aplicativo",
];

export default function Ticker() {
  const loop = [...FRASES, ...FRASES, ...FRASES, ...FRASES, ...FRASES];
  return (
    <div className="overflow-hidden py-6 -my-6 relative z-10">
    <div className="section-orange py-5 overflow-hidden -rotate-[1.2deg] scale-[1.03] relative z-10 border-y-2 border-[var(--ink)]">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((f, i) => (
          <span key={i} className="[font-family:var(--font-general-sans)] font-semibold uppercase text-[clamp(1.1rem,2.4vw,1.6rem)] flex items-center gap-10">
            {f}
            <span aria-hidden className="w-3 h-3 rounded-full bg-[var(--ink)]" />
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
