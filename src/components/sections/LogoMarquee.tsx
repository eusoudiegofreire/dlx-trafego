import Image from "next/image";
import soPizzas from "../../../public/images/so-pizzas.jpg";
import soBurger from "../../../public/images/so-burger.jpg";
import eska from "../../../public/images/eska.jpg";
import adrianaOst from "../../../public/images/adriana-ost.jpg";
import institutoSuelen from "../../../public/images/instituto-suelen.jpg";
import copeti from "../../../public/images/copeti.jpg";

const LOGOS = [
  { src: soPizzas, alt: "Só Pizzas" },
  { src: soBurger, alt: "Só Burger" },
  { src: eska, alt: "Eska" },
  { src: adrianaOst, alt: "Adriana Ost" },
  { src: institutoSuelen, alt: "Instituto Suelen Paranho" },
  { src: copeti, alt: "Copeti Fitwear" },
];

export default function LogoMarquee() {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <div className="py-16">
      <p className="eyebrow text-center mb-10">Empresas que confiam na DLX</p>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-5 w-max motion-safe:animate-[marquee_36s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="shrink-0 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-[16px] bg-[var(--cream)] flex items-center justify-center p-5 transition-transform duration-300 ease-out hover:-translate-y-[3px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain rounded-[6px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
