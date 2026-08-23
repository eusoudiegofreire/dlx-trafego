const METRICS = [
  { value: "3,2×", label: "retorno médio sobre o investido" },
  { value: "R$ 8,40", label: "custo médio por contato qualificado" },
  { value: "48h", label: "pra primeira campanha no ar" },
];

const NICHES = [
  "Clínicas odontológicas",
  "Clínicas de estética",
  "Restaurantes",
  "Lojas de varejo",
  "Consultórios",
  "Studios de beleza",
];

export default function Proof() {
  const loop = [...NICHES, ...NICHES];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-900)] py-16">
      <div className="container-wide grid sm:grid-cols-3 gap-10 mb-14">
        {METRICS.map((m) => (
          <div key={m.label}>
            <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2rem,3.5vw,2.75rem)] text-[var(--text-100)] leading-none">
              {m.value}
            </p>
            <p className="mt-3 text-[15px] text-[var(--text-500)] max-w-[220px]">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-14 w-max motion-safe:animate-[marquee_36s_linear_infinite]">
          {loop.map((niche, i) => (
            <span
              key={`${niche}-${i}`}
              className="eyebrow whitespace-nowrap text-[var(--text-500)]"
            >
              {niche}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
