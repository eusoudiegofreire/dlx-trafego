import { SITE_URL, site } from "@/config/site";

// Um único nó de negócio, referenciado por @id em todas as páginas.
// Evita que cada rota declare uma "empresa" diferente pro Google.
export const BUSINESS_ID = `${SITE_URL}/#organization`;

export function businessNode() {
  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-dlx.webp`,
    image: `${SITE_URL}/images/diego-retrato.webp`,
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "BR",
    },
    areaServed: [
      ...site.cities.map((name) => ({ "@type": "City", name: `${name}, ${site.region}` })),
      ...site.areaServed.map((name) => ({ "@type": "State", name })),
    ],
    founder: {
      "@type": "Person",
      name: "Diego Freire",
      sameAs: [site.instagramDiego],
    },
    sameAs: [site.instagram, site.instagramDiego],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };
}

export function faqNode(url: string, faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbNode(url: string, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
