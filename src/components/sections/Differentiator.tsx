import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const POINTS = [
  "Resposta no mesmo dia, não na semana seguinte",
  "Acompanhamento próximo enquanto a campanha roda",
  "Você entende pra onde vai cada real investido",
];

export default function Differentiator() {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Por que a DLX</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] max-w-[680px] mb-6">
            Você não vai ficar falando sozinho.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-muted text-[17px] leading-relaxed max-w-[620px] mb-12">
            A maior queixa de quem já contratou tráfego? &ldquo;Sumiram
            depois que assinei.&rdquo; Aqui não. A gente responde rápido,
            acompanha de perto e não te deixa no vácuo quando a campanha está
            no ar. Teu resultado depende de ajuste, e ajuste depende de estar
            presente.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
          {POINTS.map((point, i) => (
            <AnimatedSection key={point} delay={0.2 + i * 0.08}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full border-subtle border shrink-0">
                  <Check size={13} strokeWidth={2} className="text-[var(--orange-500)]" />
                </span>
                <p className="text-[15px] leading-relaxed">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
