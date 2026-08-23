import { Search, Rocket, SlidersHorizontal, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DrawPath from "@/components/ui/DrawPath";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos seu negócio, ticket e público antes de gastar R$1.",
    span: "lg:col-span-2 lg:row-span-1",
    delay: 0,
  },
  {
    icon: Rocket,
    step: "02",
    title: "Campanha",
    text: "Criativos e segmentação feitos pra vender, não pra viralizar.",
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
    delay: 0.24,
  },
  {
    icon: SlidersHorizontal,
    step: "03",
    title: "Otimização",
    text: "Ajuste diário do que traz contato barato — e corte do que não traz.",
    span: "lg:col-span-1 lg:row-span-1",
    delay: 0.12,
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Resultado",
    text: "Relatório claro: quanto entrou, quanto saiu, quantos clientes.",
    span: "lg:col-span-1 lg:row-span-1",
    delay: 0.32,
  },
];

export default function Method() {
  return (
    <div id="metodo" className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">O método DLX</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[640px]">
            Quatro etapas, sem enrolação.
          </h2>
        </AnimatedSection>

        <div className="relative mt-14">
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          >
            <DrawPath d="M 25 15 L 70 15 L 70 65 L 12 65 L 12 82 L 37 82" />
          </svg>

          <div className="relative grid lg:grid-cols-4 lg:grid-rows-2 gap-5">
            {STEPS.map((s) => (
              <AnimatedSection key={s.title} delay={s.delay} className={s.span}>
                <div
                  className={`card border-subtle h-full flex flex-col justify-between ${
                    s.tall ? "min-h-[280px]" : "min-h-[200px]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <s.icon size={26} strokeWidth={1.5} className="text-[var(--orange-500)]" />
                    <span className="[font-family:var(--font-mono)] text-[13px] text-faint">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[22px] mb-2">{s.title}</h3>
                    <p className="text-muted text-[15px] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
