"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/config/site";

export default function CTAFinal() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name || "—"} (WhatsApp: ${
      whatsapp || "—"
    }) e quero um orçamento de Tráfego Pago com a DLX Digital.`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <div className="min-h-screen flex items-center py-20">
      <motion.div
        className="container-wide grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Vamos começar</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.98] max-w-[560px]">
              Bora colocar mais gente pra dentro do seu negócio?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-muted max-w-[440px] text-[17px]">
              Preenche rapidinho e a gente chama você no WhatsApp com um
              diagnóstico inicial — sem compromisso.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="eyebrow block mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full h-14 rounded-xl bg-[var(--ink)] border border-transparent px-4 text-[16px] text-[var(--text-dark-1)] placeholder:text-[var(--text-dark-3)] outline-none transition-colors focus:border-[var(--ink)]"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="eyebrow block mb-2">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(69) 90000-0000"
                className="w-full h-14 rounded-xl bg-[var(--ink)] border border-transparent px-4 text-[16px] text-[var(--text-dark-1)] placeholder:text-[var(--text-dark-3)] outline-none transition-colors focus:border-[var(--ink)]"
              />
            </div>
            <button
              type="submit"
              className="btn-primary justify-center mt-2 motion-safe:animate-[cta-pulse_2.6s_ease-in-out_infinite]"
            >
              Quero meu orçamento
              <ArrowRight size={18} strokeWidth={1.75} />
            </button>
          </form>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
