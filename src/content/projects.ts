/**
 * Projetos.
 *
 * Regras que valem para qualquer case adicionado aqui:
 *
 * 1. Nome de cliente so entra com autorizacao dele. Enquanto nao houver,
 *    `namePublic: false` exibe apenas o segmento. Publicar o nome de um
 *    cliente sem perguntar e o tipo de descuido que custa a relacao.
 * 2. Resultado nao medido se chama "impacto esperado", nunca "resultado".
 *    Numero inventado em portfolio e a mentira mais facil de desmascarar —
 *    basta o proximo cliente perguntar como foi medido.
 * 3. Print de tela nunca sai com dado real. Nome, valor e documento de
 *    terceiro precisam ser trocados por dado ficticio antes de virar imagem.
 */

export type ProjectStatus = "em-desenvolvimento" | "entregue";

export type Project = {
  slug: string;
  title: string;
  /** Uma linha. E o que decide se a pessoa clica. */
  summary: string;
  status: ProjectStatus;
  year: string;
  client: {
    /**
     * Nome real do cliente. Fica VAZIO ate haver autorizacao dele.
     *
     * Nao basta deixar `namePublic: false`: este repositorio e publico, entao
     * o nome escrito aqui seria legivel por qualquer pessoa no GitHub mesmo
     * sem aparecer no site. Autorizacao primeiro, depois o preenchimento.
     */
    name: string;
    segment: string;
    /** Vire para `true` somente com autorizacao expressa do cliente. */
    namePublic: boolean;
  };
  categories: string[];
  challenge: string;
  solution: string;
  features: string[];
  /** Expectativas acordadas com o cliente, nao medicoes. */
  expectedImpact: string[];
  /** Vazio ate a equipe confirmar. Melhor omitir do que inventar. */
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "gestao-comercial-corretora",
    title: "Gestão comercial para corretora de seguros",
    summary:
      "Substituímos o controle de vendas e comissões feito em planilha por uma plataforma única, com cálculo automático e o andamento de cada proposta à vista.",
    status: "em-desenvolvimento",
    year: "2026",
    client: {
      // TODO: preencher com o nome real e virar `namePublic` para true no
      // mesmo commit, assim que o cliente autorizar por escrito.
      name: "",
      segment: "Corretora de seguros",
      namePublic: false,
    },
    categories: ["Sistema web", "Gestão comercial", "Automação"],
    challenge:
      "Todo o processo comercial vivia em planilha. Cada proposta era digitada à mão, o cálculo de comissão dependia de conferência de alguém e saber o que estava fechado, pendente ou perdido exigia juntar informação espalhada. Quanto mais a corretora vendia, mais cara ficava essa conferência — e maior o risco de um erro passar.",
    solution:
      "Um sistema web onde propostas, clientes, vendedores, seguradoras e produtos ficam no mesmo lugar. A comissão é calculada sozinha, cada negociação tem um status visível e os relatórios saem prontos para a reunião da equipe. O sistema também valida o preenchimento em cada etapa: uma proposta só avança de situação quando tem as informações que aquela etapa exige.",
    features: [
      "Gestão completa de propostas comerciais",
      "Cadastro de clientes, vendedores, seguradoras e produtos",
      "Controle do ciclo de vendas e do status de cada negociação",
      "Cálculo automático de comissões",
      "Controle de pagamento das comissões",
      "Relatórios gerenciais",
      "Validações por etapa do processo",
      "Área de configurações administrativas",
    ],
    expectedImpact: [
      "Menos digitação manual no dia a dia da equipe",
      "Comissões calculadas sem conferência humana",
      "Informação comercial confiável e em um lugar só",
      "Acompanhamento dos resultados por vendedor",
    ],
    technologies: [],
  },
];

export const projectsBySlug = new Map(projects.map((p) => [p.slug, p]));

/**
 * Como o cliente deve ser chamado publicamente.
 *
 * O nome so aparece se estiver preenchido E autorizado. As duas condicoes
 * juntas evitam que um `namePublic: true` esquecido publique uma string vazia
 * — ou que um nome preenchido "para depois" escape sem autorizacao.
 */
export function clientLabel(project: Project) {
  const { name, namePublic, segment } = project.client;
  return namePublic && name ? name : segment;
}

export const statusLabel: Record<ProjectStatus, string> = {
  "em-desenvolvimento": "Em desenvolvimento",
  entregue: "Entregue",
};
