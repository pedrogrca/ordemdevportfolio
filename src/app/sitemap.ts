import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { site } from "@/lib/site";

/**
 * Gera /sitemap.xml com a home e as paginas de caso.
 *
 * O guia de estilo fica de fora: e ferramenta interna.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${site.url}/projetos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
