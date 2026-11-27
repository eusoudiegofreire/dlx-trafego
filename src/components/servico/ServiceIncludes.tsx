"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service } from "@/content/servicos";

export default function ServiceIncludes({ service }: { service: Service }) {
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">O que está incluso</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[700px] mb-14">
            Tudo o que entra no serviço.
          </h2>
        </AnimatedSection>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.includes.map((item, i) => (
            <motion.li
              key={item}
              className="card border-subtle flex items-start gap-4 !p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="shrink-0 size-8 rounded-full bg-[var(--orange-500)] flex items-center justify-center"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.15 + i * 0.07 }}
              >
                <Check size={16} strokeWidth={2.5} className="text-[var(--ink)]" />
              </motion.span>
              <span className="text-[16px] leading-snug pt-1">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
