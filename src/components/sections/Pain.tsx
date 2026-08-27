import AnimatedSection from "@/components/ui/AnimatedSection";
import WordReveal from "@/components/ui/WordReveal";

export default function Pain() {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-10">Se você já passou por isso</p>
        </AnimatedSection>

        <WordReveal
          className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.85rem,4.6vw,3.5rem)] leading-[1.15] max-w-[880px]"
          segments={[
            { text: "Você já impulsionou. Veio" },
            { text: "curtida.", className: "text-muted" },
            { text: "Não veio" },
            { text: "cliente.", className: "text-[var(--orange-500)]" },
          ]}
        />

        <WordReveal
          className="mt-10 text-[clamp(1.15rem,2.3vw,1.5rem)] leading-[1.55] max-w-[720px] text-muted"
          segments={[
            {
              text: `Aperta "promover publicação", gasta um dinheiro, aparece um monte de gente — e no fim do mês não entrou venda nenhuma. Aí a conclusão vira "anúncio não funciona pro meu negócio".`,
            },
          ]}
        />

        <WordReveal
          className="mt-6 text-[clamp(1.15rem,2.3vw,1.5rem)] leading-[1.55] max-w-[720px]"
          segments={[
            {
              text: "O problema não foi você. Foi que impulsionar não é anunciar. Post impulsionado busca curtida. Campanha de verdade busca a pessoa certa, no momento certo, e leva ela pra onde a venda acontece — teu WhatsApp, teu delivery, teu direct.",
            },
          ]}
        />

        <AnimatedSection delay={0.1} className="mt-14">
          <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] max-w-[680px]">
            Não é sobre aparecer pra mais gente.{" "}
            <span className="text-[var(--orange-500)]">
              É sobre aparecer pra quem compra.
            </span>
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
