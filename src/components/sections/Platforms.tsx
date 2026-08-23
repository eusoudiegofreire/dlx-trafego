import AnimatedSection from "@/components/ui/AnimatedSection";

const PLATFORMS = [
  {
    name: "Meta Ads",
    channels: "Instagram + Facebook",
    text: "Anúncios que aparecem pra quem mora perto e tem perfil de comprar de você — não pra qualquer curioso.",
  },
  {
    name: "Google Ads",
    channels: "Busca + Maps",
    text: "Você aparece pra quem já está procurando o que você vende, no momento exato em que decide.",
  },
];

export default function Platforms() {
  return (
    <section className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Plataformas</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] max-w-[640px] mb-14">
            Onde seu cliente já está olhando.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {PLATFORMS.map((p, i) => (
            <AnimatedSection key={p.name} delay={0.1 * i}>
              <div
                className="rounded-[24px] p-9 border border-[var(--border)] h-full"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                  backdropFilter: "blur(20px)",
                }}
              >
                <p className="eyebrow text-[var(--orange-500)] mb-3">{p.channels}</p>
                <h3 className="text-[26px] mb-4">{p.name}</h3>
                <p className="text-[var(--text-300)] text-[16px] leading-relaxed">{p.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
