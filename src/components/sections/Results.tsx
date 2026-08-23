import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import whatsappMockup from "../../../public/images/whatsapp-mockup.webp";
import diegoRetrato from "../../../public/images/diego-retrato.webp";

export default function Results() {
  return (
    <section className="section bg-[var(--bg-900)]">
      <div className="container-wide grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        <AnimatedSection>
          <div className="relative aspect-[4/5] rounded-[24px] border border-[var(--border)] overflow-hidden">
            <Image
              src={whatsappMockup}
              alt="Mockup de celular mostrando conversas de clientes chegando no WhatsApp Business da DLX Digital"
              width={1086}
              height={1448}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4">Resultado</p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <blockquote className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] text-[var(--text-100)]">
              &ldquo;Antes eu só via curtida. Depois que a DLX assumiu, o
              WhatsApp não para — e a agenda também não.&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={diegoRetrato}
                alt="Diego, fundador da DLX Digital"
                width={1122}
                height={1402}
                className="w-11 h-11 rounded-full object-cover border border-[var(--border-hover)]"
              />
              <div>
                <p className="text-[14px] font-medium text-[var(--text-100)]">Diego</p>
                <p className="text-[13px] text-[var(--text-500)]">Fundador, DLX Digital</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[420px]">
              <div>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[2rem] leading-none">
                  4,1×
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-500)]">agendamentos</p>
              </div>
              <div>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[2rem] leading-none">
                  62
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-500)]">dias até o resultado</p>
              </div>
              <div>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[2rem] leading-none">
                  -31%
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-500)]">custo por contato</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
