// Root domain now hosts the bio hub at "/"; the paid-traffic landing moved
// to "/trafego". Previously this pointed at a "trafego." subdomain, which
// no longer matches the site's real structure.
export const SITE_URL = "https://dlxdigital.com.br";

export const site = {
  name: "DLX Digital",
  offer: "Tráfego Pago",
  instagram: "https://instagram.com/dlxdigitaloficial",
  instagramHandle: "@dlxdigitaloficial",
  whatsapp: "https://wa.me/5569992487348",
  areaServed: ["Rondônia", "Amazonas"],
  locale: "pt_BR",
  trafego: {
    title: "Tráfego Pago para Negócios Locais",
    description:
      "Anúncios no Meta e Google que trazem gente certa pra dentro do seu negócio — não só curtida. Diagnóstico, campanha e otimização feitos por quem entende o seu ticket médio.",
  },
  bio: {
    tagline: "Mais visibilidade, mais contato, mais cliente pro seu negócio local.",
  },
  // TODO(diego): substituir pelo link real de avaliação do Google Meu
  // Negócio antes do deploy — "#" é só placeholder, não manda pra lugar
  // nenhum ainda.
  googleReviewUrl: "#",
} as const;
