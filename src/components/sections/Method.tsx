import { Search, Rocket, SlidersHorizontal, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos seu negócio, ticket e público antes de gastar R$1.",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Campanha",
    text: "Criativos e segmentação feitos pra vender, não pra viralizar.",
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
  },
  {
    icon: SlidersHorizontal,
    step: "03",
    title: "Otimização",
    text: "Ajuste diário do que traz contato barato — e corte do que não traz.",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Resultado",
    text: "Relatório claro: quanto entrou, quanto saiu, quantos clientes.",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="section bg-[var(--bg-900)]">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">O método DLX</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] max-w-[640px]">
            Quatro etapas, sem enrolação.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid lg:grid-cols-4 lg:grid-rows-2 gap-5">
          {STEPS.map((s, i) => (
            <AnimatedSection key={s.title} delay={0.08 * i} className={s.span}>
              <div
                className={`card h-full flex flex-col ${
                  s.tall ? "justify-between min-h-[280px]" : "justify-between min-h-[200px]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <s.icon size={26} strokeWidth={1.5} className="text-[var(--orange-500)]" />
                  <span className="[font-family:var(--font-mono)] text-[13px] text-[var(--text-500)]">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-[22px] mb-2">{s.title}</h3>
                  <p className="text-[var(--text-300)] text-[15px] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
