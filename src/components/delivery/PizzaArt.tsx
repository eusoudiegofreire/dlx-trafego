import Image from "next/image";
import calabresa from "../../../public/images/delivery/pizza-calabresa.webp";
import margherita from "../../../public/images/delivery/pizza-margherita.webp";
import frango from "../../../public/images/delivery/pizza-frango.webp";
import chocolate from "../../../public/images/delivery/pizza-chocolate.webp";

// Fotos reais (vista de cima, fundo transparente) das pizzas do celular animado.
export type PizzaKind = "calabresa" | "margherita" | "frango" | "chocolate";

const SRC = { calabresa, margherita, frango, chocolate };
const ALT: Record<PizzaKind, string> = {
  calabresa: "Pizza de calabresa",
  margherita: "Pizza margherita",
  frango: "Pizza de frango com catupiry",
  chocolate: "Pizza de chocolate com morango",
};

export default function PizzaArt({ kind = "calabresa", size = 120, className = "" }: { kind?: PizzaKind; size?: number; className?: string }) {
  return (
    <Image
      src={SRC[kind]}
      alt={ALT[kind]}
      width={size}
      height={size}
      draggable={false}
      className={`shrink-0 rounded-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
