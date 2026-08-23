"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SignatureFlow from "@/components/ui/SignatureFlow";
import { site } from "@/config/site";

export default function CTAFinal() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name || "—"} (WhatsApp: ${
      whatsapp || "—"
    }) e quero um orçamento de Tráfego Pago com a DLX Digital.`;
    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <section id="cta" className="section">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface-800)] px-8 py-16 sm:px-16 sm:py-20 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.08] hidden lg:block"
          >
            <SignatureFlow size="small" />
          </div>
          <div>
            <AnimatedSection>
              <p className="eyebrow mb-4">Vamos começar</p>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] max-w-[520px]">
                Bora colocar mais gente pra dentro do seu negócio?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-5 text-[var(--text-300)] max-w-[440px]">
                Preenche rapidinho e a gente chama você no WhatsApp com um
                diagnóstico inicial — sem compromisso.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.12}>
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
                  className="w-full h-14 rounded-xl bg-[var(--bg-950)] border border-[var(--border)] px-4 text-[16px] text-[var(--text-100)] placeholder:text-[var(--text-500)] outline-none transition-colors focus:border-[var(--orange-500)]"
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
                  className="w-full h-14 rounded-xl bg-[var(--bg-950)] border border-[var(--border)] px-4 text-[16px] text-[var(--text-100)] placeholder:text-[var(--text-500)] outline-none transition-colors focus:border-[var(--orange-500)]"
                />
              </div>
              <button type="submit" className="btn-primary justify-center mt-2">
                Quero meu orçamento
                <ArrowRight size={18} strokeWidth={1.75} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
