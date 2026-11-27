import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SERVICES } from "@/content/servicos";

// Data fixa da última revisão de conteúdo — new Date() a cada build fazia
// todas as URLs parecerem alteradas, o que tira o valor do lastModified.
const UPDATED = new Date("2026-11-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified: UPDATED,
    changeFrequency: "monthly" as const,
    priority,
  });
  return [
    page("", 1),
    page("/trafego", 0.9),
    page("/servicos", 0.9),
    page("/delivery", 0.8),
    ...SERVICES.map((s) => page(`/${s.slug}`, 0.8)),
  ];
}
