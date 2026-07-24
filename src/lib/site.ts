/**
 * Fonte unica de verdade para dados institucionais.
 *
 * Tudo que aparece em mais de um lugar (nome, contatos, redes) mora aqui.
 * Trocar o numero do WhatsApp deve ser uma edicao, nao sete.
 */

/**
 * Endereco canonico do site.
 *
 * Antes do dominio proprio existir, o site roda num endereco `.vercel.app`.
 * Deixar uma URL fixa aqui faria as metatags e o Open Graph apontarem para um
 * dominio que ainda nao responde — link compartilhado sem previa, e canonical
 * quebrado.
 *
 * A ordem de resolucao:
 *
 * 1. `NEXT_PUBLIC_SITE_URL` — o dominio definitivo. Configure na Vercel assim
 *    que ele estiver apontado. Definir esta variavel tambem e o que libera a
 *    indexacao (ver `metadata.robots` no layout).
 * 2. O endereco de producao que a propria Vercel injeta.
 * 3. Localhost, em desenvolvimento.
 */
function canonicalUrl() {
  const configurado = process.env.NEXT_PUBLIC_SITE_URL;
  if (configurado) return configurado.replace(/\/$/, "");

  const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

/**
 * O site so deve ser indexado no dominio definitivo.
 *
 * Se o Google indexar o endereco `.vercel.app`, quando o dominio proprio
 * entrar existirao duas versoes do mesmo site competindo entre si — e a
 * temporaria, mais antiga, tende a continuar aparecendo. Enquanto
 * `NEXT_PUBLIC_SITE_URL` nao estiver definida, o site pede para nao ser
 * indexado.
 */
export const isIndexable = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const site = {
  name: "Ordem DEV",
  legalName: "Ordem DEV",
  tagline: "Software house independente",
  description:
    "Desenvolvemos sistemas web, automações e integrações que resolvem problemas reais de empresas e organizações.",

  /** Dominio canonico. Ver `siteUrl` abaixo. */
  url: canonicalUrl(),

  contact: {
    email: "ordemdev@gmail.com",
    /** Formato internacional, so digitos: e o que a API do WhatsApp espera. */
    whatsapp: "5584991256969",
    /** Mesmo numero formatado para leitura humana. */
    whatsappDisplay: "(84) 99125-6969",
    whatsappMessage:
      "Olá! Vim pelo site da Ordem DEV e gostaria de conversar sobre um projeto.",
  },
} as const;

/** Link do WhatsApp com a mensagem ja preenchida: menos atrito para o visitante. */
export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

export type SocialKey = "instagram" | "linkedin" | "github";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
};

/**
 * Redes sociais.
 *
 * A lista contem apenas o que existe de verdade. O rodape e a secao de contato
 * iteram sobre ela, entao um perfil ausente simplesmente nao aparece — melhor
 * do que um icone bonito levando a uma pagina 404, que sinaliza abandono.
 *
 * Para publicar o LinkedIn e o GitHub depois, basta descomentar as linhas.
 */
export const socialLinks: SocialLink[] = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/ordemdev",
  },
  // { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/ordemdev" },
  // { key: "github", label: "GitHub", href: "https://github.com/ordemdev" },
];

/**
 * Navegacao principal. A ordem segue a logica de decisao do visitante:
 * o que voces fazem -> a prova -> como trabalham -> quem sao -> duvidas.
 */
export const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  // Restaurar junto com a secao Sobre + Equipe. Item de menu que leva a lugar
  // nenhum e pior que menu curto: quem clica e nao sai do lugar acha que o
  // site esta quebrado.
  // { label: "Equipe", href: "#equipe" },
  { label: "Dúvidas", href: "#faq" },
] as const;
