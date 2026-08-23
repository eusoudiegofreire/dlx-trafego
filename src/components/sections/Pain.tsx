import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Pain() {
  return (
    <section className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-8">A dor</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.15] max-w-[920px]">
            <span className="text-[var(--text-500)] line-through decoration-2">
              Impulsionar post
            </span>{" "}
            não é estratégia. É apostar. Você bota dinheiro, cruza os dedos e
            torce pra alguém aparecer na loja.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-10 [font-family:var(--font-general-sans)] font-medium text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.15] max-w-[920px]">
            Tráfego pago de verdade é{" "}
            <span className="text-[var(--orange-500)]">
              diagnóstico, segmentação e otimização
            </span>{" "}
            todo dia — pra cada real virar contato, e cada contato virar
            cliente.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
