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
    "Desenvolvemos sistemas web, automacoes e integracoes que resolvem problemas reais de empresas e organizacoes.",

  /** Trocar pelo dominio final antes do deploy — usado no sitemap e nas metatags. */
  url: "https://ordemdev.com.br",

  contact: {
    email: "contato@ordemdev.com.br",
    /** Formato internacional, apenas digitos — e o que a API do WhatsApp espera. */
    whatsapp: "5500000000000",
    whatsappMessage:
      "Ola! Vim pelo site da Ordem DEV e gostaria de conversar sobre um projeto.",
  },

  social: {
    instagram: "https://instagram.com/ordemdev",
    linkedin: "https://linkedin.com/company/ordemdev",
    github: "https://github.com/ordemdev",
  },
} as const;

/** Link do WhatsApp com a mensagem ja preenchida: menos atrito para o visitante. */
export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

/**
 * Navegacao principal. A ordem segue a logica de decisao do visitante:
 * o que voces fazem -> a prova -> como trabalham -> quem sao -> duvidas.
 */
export const navigation = [
  { label: "Servicos", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Equipe", href: "#equipe" },
  { label: "Duvidas", href: "#faq" },
] as const;
