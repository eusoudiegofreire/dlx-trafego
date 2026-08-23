import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeadlineLine from "@/components/ui/HeadlineLine";
import SignatureFlow from "@/components/ui/SignatureFlow";
import heroBg from "../../../public/images/hero-bg.webp";

export default function Hero() {
  return (
    <section className="relative pt-[150px] pb-24 overflow-hidden">
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,8,.9), rgba(8,8,8,.3))",
        }}
      />

      <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <p className="eyebrow mb-6">DLX Digital · Tráfego Pago</p>

          <h1
            className="[font-family:var(--font-general-sans)] font-semibold uppercase text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.98] tracking-tight"
          >
            <HeadlineLine index={0} opacity={0.65}>
              Mais visibilidade.
            </HeadlineLine>
            <HeadlineLine index={1} opacity={0.82}>
              Mais contatos.
            </HeadlineLine>
            <HeadlineLine index={2} opacity={1}>
              Mais <span className="text-[var(--orange-500)]">clientes.</span>
            </HeadlineLine>
          </h1>

          <p className="container-narrow mt-8 text-[19px] leading-[1.55] text-[var(--text-300)]">
            Anúncios no Meta e Google que trazem gente certa pra dentro do seu
            negócio — não só curtida.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-primary">
              Quero meu orçamento
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#metodo" className="btn-ghost">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative opacity-95">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[40px]"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 30%, rgba(255,90,31,0.05), transparent 72%)",
            }}
          />
          <SignatureFlow size="large" />
        </div>
      </div>

      <div className="lg:hidden container-wide mt-16 flex justify-center opacity-80">
        <SignatureFlow size="small" />
      </div>
    </section>
  );
}
