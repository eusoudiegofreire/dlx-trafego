import CountUp from "@/components/ui/CountUp";
import AnimatedSection from "@/components/ui/AnimatedSection";

const METRICS = [
  { value: 3.2, decimals: 1, suffix: "×", label: "retorno médio sobre o investido" },
  { value: 8.4, decimals: 2, prefix: "R$ ", label: "custo médio por contato qualificado" },
  { value: 48, decimals: 0, suffix: "h", label: "pra primeira campanha no ar" },
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
    <div className="relative min-h-screen flex flex-col justify-center py-20">
      <div className="container-wide grid sm:grid-cols-3 gap-10 mb-20">
        {METRICS.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-tight text-[var(--orange-500)]">
              <CountUp
                value={m.value}
                decimals={m.decimals}
                prefix={m.prefix}
                suffix={m.suffix}
                delay={i * 0.12}
              />
            </p>
            <p className="mt-4 text-[15px] text-muted max-w-[220px]">{m.label}</p>
          </AnimatedSection>
        ))}
      </div>

      <div
        className="absolute bottom-16 left-0 right-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-14 w-max motion-safe:animate-[marquee_36s_linear_infinite]">
          {loop.map((niche, i) => (
            <span key={`${niche}-${i}`} className="eyebrow whitespace-nowrap">
              {niche}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
