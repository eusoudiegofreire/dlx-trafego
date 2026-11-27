import AnimatedSection from "@/components/ui/AnimatedSection";
import WordReveal from "@/components/ui/WordReveal";
import type { Service } from "@/content/servicos";

export default function ServicePain({ service }: { service: Service }) {
  const { pain } = service;
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-8">O problema</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08] max-w-[900px]">{pain.title}</h2>
        </AnimatedSection>
        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-[1000px]">
          {pain.paragraphs.map((p) => (
            <WordReveal key={p} className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.6] text-muted" segments={[{ text: p }]} />
          ))}
        </div>
        <AnimatedSection delay={0.1} className="mt-14">
          <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] max-w-[760px] text-[var(--orange-500)]">
            {pain.punch}
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
