"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const QA = [
  {
    q: "Vocês trabalham com iFood?",
    a: "Não. O nosso foco é o teu canal próprio de delivery: plataforma de pedidos, cardápio digital ou site. É lá que cada pedido é rastreado, a gente sabe quanto custou e tu não paga comissão de aplicativo.",
  },
  {
    q: "Quanto preciso investir em anúncio?",
    a: "O ideal é a partir de R$ 3.000 por mês em anúncio. É a faixa em que os nossos clientes de delivery têm os melhores resultados, porque dá verba pra testar oferta e criativo e escalar o que vende. Dá pra começar com menos, mas o resultado tende a ser menor. Essa verba é tua, vai direto pra Meta/Google e é separada do valor da gestão.",
  },
  {
    q: "Em quanto tempo aparece pedido?",
    a: "Os primeiros pedidos costumam vir nos primeiros dias. As duas ou três primeiras semanas são de teste: oferta, criativo e público. Depois disso a campanha estabiliza e fica mais previsível.",
  },
  {
    q: "Eu preciso fazer as fotos e vídeos?",
    a: "A gente escreve o anúncio e te manda o roteiro do vídeo pronto. Tu grava o produto saindo do forno (celular resolve) e a gente transforma em anúncio.",
  },
  {
    q: "Atende só Rondônia?",
    a: "A DLX é de Rondônia e já gerencia delivery em mais de um estado. Como tudo é online, atende qualquer cidade.",
  },
];

export default function DeliveryFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="section">
      <div className="container-wide grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Antes de você perguntar</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98]">
              Dúvida de dono de delivery.
            </h2>
          </AnimatedSection>
        </div>
        <div>
          {QA.map((item, i) => (
            <div key={item.q} className="border-b border-subtle">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[19px] font-medium">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-[var(--orange-500)]">
                  <Plus size={22} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted max-w-[620px]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
