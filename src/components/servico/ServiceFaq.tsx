"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

// As respostas ficam sempre no HTML (só recolhidas visualmente): o Google
// lê o mesmo texto que vai no FAQPage do JSON-LD.
export default function ServiceFaq({ faqs, title }: { faqs: { q: string; a: string }[]; title: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Perguntas frequentes</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] max-w-[760px] mb-14">{title}</h2>
        </AnimatedSection>
        <div className="max-w-[820px] flex flex-col divide-y divide-[var(--border-dark)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <AnimatedSection key={f.q} delay={0.08 + i * 0.05}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-center justify-between gap-6 text-left py-6 [font-family:var(--font-general-sans)] font-semibold text-[clamp(1.1rem,2.2vw,1.35rem)] leading-snug"
                  >
                    {f.q}
                    <Plus
                      size={20}
                      strokeWidth={2}
                      aria-hidden
                      className={`shrink-0 text-[var(--orange-500)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted text-[16px] leading-relaxed pb-6 max-w-[680px]">{f.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
