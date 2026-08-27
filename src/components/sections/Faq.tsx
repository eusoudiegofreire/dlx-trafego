"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FAQS = [
  {
    q: "Já tentei anúncio antes e não deu certo. Por que seria diferente?",
    a: "Acontece bastante — e quase sempre foi post impulsionado, sem estratégia por trás. Aqui é diferente: público definido com cuidado, criativo pensado pra atrair quem tem real interesse, e ajuste constante da campanha. O tipo de contato que chega muda bastante quando tem método.",
  },
  {
    q: "O tráfego garante que vou vender?",
    a: "Vou ser sincero com você: meu trabalho é levar o contato certo, interessado, até o seu canal — WhatsApp, delivery, direct. A venda depende também do seu atendimento e da sua oferta, e nisso a gente te orienta. O tráfego enche seu balcão de gente certa; fechar é a parte que a gente faz junto.",
  },
  {
    q: "Quanto preciso investir pra começar?",
    a: "Não existe valor fixo — a gente monta o investimento do tamanho do seu momento e do seu objetivo. Na nossa conversa eu te explico direitinho pra onde vai cada real e o que dá pra esperar com o que você tem disponível.",
  },
  {
    q: "Em quanto tempo começo a ver resultado?",
    a: "Os primeiros contatos costumam aparecer nos primeiros dias de campanha. Mas o resultado bom mesmo vem com o ajuste ao longo das primeiras semanas — é quando a gente descobre o que traz o melhor contato pelo menor custo. Tráfego é ajuste contínuo, não mágica de um dia.",
  },
  {
    q: "Vou precisar fazer alguma coisa ou vocês cuidam de tudo?",
    a: "Você cuida do que faz de melhor: seu negócio e o atendimento de quem chega. Do anúncio a gente cuida — criação, campanha, otimização e relatório. Você recebe o contato pronto pra atender, sem dor de cabeça técnica.",
  },
];

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
                <div className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left"
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
                      <p className="text-muted text-[15px] leading-relaxed pt-4 max-w-[640px]">
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
