// Root domain now hosts the bio hub at "/"; the paid-traffic landing moved
// to "/trafego". Previously this pointed at a "trafego." subdomain, which
// no longer matches the site's real structure.
export const SITE_URL = "https://dlxdigital.com.br";

export const site = {
  name: "DLX Digital",
  offer: "Tráfego Pago",
  instagram: "https://instagram.com/dlxdigitaloficial",
  instagramHandle: "@dlxdigitaloficial",
  instagramDiego: "https://www.instagram.com/eusoudiegofreire/",
  instagramDiegoHandle: "@eusoudiegofreire",
  whatsapp: "https://wa.me/5569992487348",
  // telefone visível + tel: link — sinal de NAP para SEO local
  phone: "+55 69 99248-7348",
  phoneDisplay: "(69) 99248-7348",
  phoneHref: "tel:+5569992487348",
  city: "Ariquemes",
  region: "RO",
  regionName: "Rondônia",
  // cidades citadas no schema (areaServed). Ariquemes primeiro: é a base.
  cities: ["Ariquemes", "Porto Velho", "Ji-Paraná", "Jaru", "Machadinho D'Oeste", "Buritis"],
  areaServed: ["Rondônia", "Amazonas"],
  locale: "pt_BR",
  trafego: {
    title: "Tráfego Pago para Negócios Locais em Rondônia",
    description:
      "Gestão de tráfego pago em Ariquemes e Rondônia: anúncios no Meta e no Google que trazem cliente de verdade pro seu negócio local, não só curtida.",
  },
  bio: {
    tagline: "Mais visibilidade, mais contato, mais cliente pro seu negócio local.",
  },
  googleReviewUrl: "https://g.page/r/CUWZcShGc_3LEBM/review",
} as const;
