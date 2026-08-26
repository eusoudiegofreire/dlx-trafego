"use client";

import { motion } from "framer-motion";
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
    text: "Movimento de verdade na loja — não só seguidor.",
  },
];

export default function ForWho() {
  return (
    <div className="section flex flex-col justify-center min-h-screen">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Pra quem é</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[640px] mb-14">
            Negócio local que precisa de gente na porta.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
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
                <h3 className="text-[19px] mb-2">{a.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{a.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
