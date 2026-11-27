"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/config/site";

const inputCls =
  "w-full h-14 rounded-xl bg-[var(--ink)] border border-transparent px-4 text-[16px] text-[var(--text-dark-1)] placeholder:text-[var(--text-dark-3)] outline-none";

export default function ServiceCTA({ title, text, message }: { title: string; text: string; message: string }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name || "—"}${business ? ` (${business})` : ""} e ${message}.`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="min-h-[90vh] flex items-center py-20">
      <motion.div
        className="container-wide grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Vamos conversar</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.3rem,5.4vw,4rem)] leading-[1] max-w-[600px]">{title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-muted max-w-[460px] text-[17px]">{text}</p>
            <a href={site.phoneHref} className="mt-6 inline-flex items-center gap-2 font-semibold text-[17px]">
              <Phone size={18} /> {site.phoneDisplay}
            </a>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="cta-name" className="eyebrow block mb-2">Nome</label>
              <input id="cta-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={inputCls} />
            </div>
            <div>
              <label htmlFor="cta-biz" className="eyebrow block mb-2">Negócio</label>
              <input id="cta-biz" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Nome da empresa (opcional)" className={inputCls} />
            </div>
            <button type="submit" className="btn-primary justify-center mt-2 motion-safe:animate-[cta-pulse_2.6s_ease-in-out_infinite]">
              Chamar no WhatsApp <ArrowRight size={18} strokeWidth={1.75} />
            </button>
            <p className="text-center text-[13px] text-faint">Resposta no mesmo dia · Sem compromisso</p>
          </form>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
