"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/config/site";

const CARDAPIO = ["Cardápio próprio", "Só iFood", "Ainda não tenho"];

const input =
  "w-full h-14 rounded-xl bg-[var(--ink)] border border-transparent px-4 text-[16px] text-[var(--text-dark-1)] placeholder:text-[var(--text-dark-3)] outline-none transition-colors focus:border-[var(--cream)]";

export default function DeliveryCTA() {
  const [nome, setNome] = useState("");
  const [negocio, setNegocio] = useState("");
  const [cidade, setCidade] = useState("");
  const [cardapio, setCardapio] = useState(CARDAPIO[0]);

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `Olá! Sou ${nome || "—"}, do delivery ${negocio || "—"} em ${cidade || "—"}. Vendo por: ${cardapio}. Vim pela página de delivery e quero mais pedido com tráfego pago.`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="min-h-screen flex items-center py-20">
      <motion.div
        className="container-wide grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Bora?</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold uppercase text-[clamp(2.6rem,7vw,5rem)] leading-[0.92]">
              Liga o forno.
              <br />
              A gente liga
              <br />
              o pedido.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-muted max-w-[440px] text-[17px]">
              Me conta do teu delivery. Eu olho tua conta e teu cardápio e te digo, na prática, onde dá pra puxar mais pedido. Sem enrolação.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <input className={input} required placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} aria-label="Seu nome" />
            <input className={input} required placeholder="Nome do delivery" value={negocio} onChange={(e) => setNegocio(e.target.value)} aria-label="Nome do delivery" />
            <input className={input} required placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} aria-label="Cidade" />
            <div>
              <p className="eyebrow mb-2">Hoje você vende por</p>
              <div className="grid grid-cols-3 gap-2">
                {CARDAPIO.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCardapio(c)}
                    className={`h-12 rounded-xl text-[13px] font-medium transition-colors ${
                      cardapio === c ? "bg-[var(--ink)] text-[var(--orange-500)]" : "bg-black/10 text-[var(--ink)] hover:bg-black/15"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-primary justify-center mt-2 motion-safe:animate-[cta-pulse_2.6s_ease-in-out_infinite]">
              Chamar no WhatsApp
              <ArrowRight size={18} strokeWidth={1.75} />
            </button>
            <p className="text-center text-[13px] text-faint">Resposta no mesmo dia · Sem compromisso</p>
          </form>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
