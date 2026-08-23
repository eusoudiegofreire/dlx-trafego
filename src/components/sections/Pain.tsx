import AnimatedSection from "@/components/ui/AnimatedSection";
import WordReveal from "@/components/ui/WordReveal";

export default function Pain() {
  return (
    <div className="section flex flex-col justify-center min-h-screen">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-10">A dor</p>
        </AnimatedSection>

        <WordReveal
          className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.85rem,4.6vw,3.5rem)] leading-[1.15] max-w-[960px]"
          segments={[
            { text: "Impulsionar post", className: "line-through decoration-2 text-muted" },
            {
              text: "não é estratégia. É apostar. Você bota dinheiro, cruza os dedos e torce pra alguém aparecer na loja.",
            },
          ]}
        />

        <WordReveal
          className="mt-10 [font-family:var(--font-general-sans)] font-medium text-[clamp(1.85rem,4.6vw,3.5rem)] leading-[1.15] max-w-[960px]"
          segments={[
            { text: "Tráfego pago de verdade é" },
            {
              text: "diagnóstico, segmentação e otimização",
              className: "text-[var(--orange-500)]",
            },
            {
              text: "todo dia — pra cada real virar contato, e cada contato virar cliente.",
            },
          ]}
        />
      </div>
    </div>
  );
}
