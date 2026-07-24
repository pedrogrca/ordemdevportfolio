import type { MetadataRoute } from "next";

import { isIndexable, site } from "@/lib/site";

/**
 * Gera /robots.txt.
 *
 * Enquanto o dominio definitivo nao estiver configurado, o arquivo bloqueia
 * os buscadores por inteiro. E a mesma regra da metatag `robots` no layout,
 * repetida aqui de proposito: alguns rastreadores leem apenas um dos dois, e
 * indexar o endereco temporario cria um concorrente do proprio site quando o
 * dominio final entrar no ar.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Guia de estilo e ferramenta interna, nao conteudo para busca.
        disallow: "/styleguide",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
