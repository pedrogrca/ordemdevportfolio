/**
 * Fonte unica de verdade para dados institucionais.
 *
 * Tudo que aparece em mais de um lugar (nome, contatos, redes) mora aqui.
 * Trocar o numero do WhatsApp deve ser uma edicao, nao sete.
 */

export const site = {
  name: "Ordem DEV",
  legalName: "Ordem DEV",
  tagline: "Software house independente",
  description:
    "Desenvolvemos sistemas web, automações e integrações que resolvem problemas reais de empresas e organizações.",

  /** TODO: trocar pelo dominio final antes do deploy — alimenta as metatags,
   *  o sitemap e as URLs absolutas do Open Graph. */
  url: "https://ordemdev.com.br",

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
  { label: "Equipe", href: "#equipe" },
  { label: "Dúvidas", href: "#faq" },
] as const;
