import AnimatedSection from "@/components/ui/AnimatedSection";

const OBJECTIONS = [
  {
    question: "Já tentei anúncio e não funcionou.",
    answer:
      "Provavelmente foi post impulsionado, sem estratégia por trás. Campanha de verdade tem público definido, criativo pensado e ajuste constante. É outro jogo.",
  },
  {
    question: "Está caro?",
    answer:
      "Anúncio malfeito é que é caro — você paga e não volta nada. Feito certo, o objetivo é cada real trazer mais retorno do que custou. A gente monta um investimento que cabe no teu negócio.",
  },
  {
    question: "Não tenho tempo pra isso.",
    answer:
      "Esse é o ponto. Você cuida do negócio, a gente cuida do anúncio. Você recebe o contato pronto pra atender.",
  },
];

export default function Objections() {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-14">Antes de você perguntar</p>
        </AnimatedSection>

        <div className="flex flex-col divide-y divide-[var(--border-light)] max-w-[760px]">
          {OBJECTIONS.map((o, i) => (
            <AnimatedSection key={o.question} delay={i * 0.1} className="py-8 first:pt-0">
              <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(1.35rem,2.6vw,1.75rem)] leading-snug mb-3">
                &ldquo;{o.question}&rdquo;
              </p>
              <p className="text-muted text-[16px] leading-relaxed max-w-[620px]">
                {o.answer}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
