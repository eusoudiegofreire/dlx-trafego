import { Stethoscope, UtensilsCrossed, Store } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AUDIENCE = [
  {
    icon: Stethoscope,
    title: "Clínica odonto / estética",
    text: "Agenda cheia de paciente que fecha tratamento.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    text: "Mais pedido e mesa cheia nos dias fracos.",
  },
  {
    icon: Store,
    title: "Loja / varejo",
    text: "Movimento na loja e no WhatsApp — não só seguidor.",
  },
];

export default function ForWho() {
  return (
    <section className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Pra quem é</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] max-w-[640px] mb-14">
            Negócio local que precisa de gente na porta.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
          {AUDIENCE.map((a, i) => (
            <AnimatedSection key={a.title} delay={0.08 * i}>
              <div className="card h-full">
                <a.icon size={28} strokeWidth={1.5} className="text-[var(--orange-500)] mb-6" />
                <h3 className="text-[19px] mb-2">{a.title}</h3>
                <p className="text-[var(--text-300)] text-[15px] leading-relaxed">{a.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
