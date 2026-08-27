"use client";

import { motion } from "framer-motion";
import { Stethoscope, UtensilsCrossed, Store, Briefcase, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AUDIENCE = [
  {
    icon: Stethoscope,
    title: "Clínica / consultório (odonto, estética, saúde)",
    text: "Mais gente certa chamando pra marcar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante / delivery",
    text: "Mais pedido pelo cardápio e pelo Google, principalmente nos dias parados.",
  },
  {
    icon: Store,
    title: "Loja / varejo",
    text: "Mais gente interessada no direct e na loja física.",
  },
  {
    icon: Briefcase,
    title: "Advogado / prestador de serviço",
    text: "Mais contato qualificado de quem precisa do que você faz.",
  },
  {
    icon: MapPin,
    title: "Outros negócios locais",
    text: "Se atende cliente na sua região, dá pra conversar.",
  },
];

export default function ForWho() {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Feito pra quem vive do cliente local</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[640px] mb-6">
            Se o seu negócio depende de gente chegando, a gente combina.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <p className="text-muted text-[17px] leading-relaxed max-w-[640px] mb-14">
            Sou generalista em negócio local: atendo vários ramos diferentes.
            Se o seu vive de contato e cliente na região, provavelmente é pra
            você:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE.map((a, i) => (
            <AnimatedSection key={a.title} delay={0.1 * i}>
              <div className="card border-subtle h-full">
                <motion.div
                  className="mb-6 inline-block"
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a.icon size={28} strokeWidth={1.5} className="text-[var(--orange-500)]" />
                </motion.div>
                <h3 className="text-[19px] mb-2 leading-snug">{a.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{a.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1 * AUDIENCE.length}>
          <p className="mt-10 text-faint text-[13px] italic">
            Foco em negócio local. Não trabalho com e-commerce / venda 100%
            online.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
