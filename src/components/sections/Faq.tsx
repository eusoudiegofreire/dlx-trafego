"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQS } from "@/content/trafego-faq";



export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Talvez você esteja pensando</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] max-w-[640px] mb-14">
            Perguntas que todo mundo faz.
          </h2>
        </AnimatedSection>

        <div className="max-w-[760px] flex flex-col divide-y divide-[var(--border-dark)]">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={item.q} delay={0.1 + i * 0.06} className="first:pt-0">
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left py-6"
                  >
                    <span className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(1.1rem,2.2vw,1.35rem)] leading-snug">
                      {item.q}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={2}
                      className={`shrink-0 text-[var(--orange-500)] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted text-[15px] leading-relaxed pb-6 max-w-[640px]">
                        {item.a}
                      </p>
                    </div>
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
