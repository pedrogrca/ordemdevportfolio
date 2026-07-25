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
  /**
   * Em projeto ainda em desenvolvimento, sao expectativas acordadas (nunca
   * medicoes). Em projeto entregue, sao os destaques do que ele ja faz. O
   * rotulo do bloco muda conforme o status — ver a pagina de caso.
   */
  expectedImpact: string[];
  /** Vazio ate haver confirmacao. Melhor omitir do que inventar. */
  technologies: string[];
  /**
   * Links externos (repositorio, demonstracao ao vivo). Opcional: um projeto
   * de cliente sob sigilo nao tem link publico; um projeto proprio e aberto
   * ganha forca justamente por poder ser aberto e testado na hora.
   */
  links?: { label: string; href: string }[];
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
  {
    slug: "elo-potiguar",
    title: "Elo Potiguar — doações e voluntariado",
    summary:
      "Uma plataforma que conecta doadores e voluntários a organizações sociais, com acompanhamento da doação em tempo real — no estilo de um aplicativo de entrega — e transparência do começo ao fim.",
    status: "entregue",
    year: "2026",
    client: {
      name: "",
      // Projeto proprio, feito num hackathon — nao ha cliente. O rotulo deixa
      // isso explicito: e iniciativa da equipe, nao trabalho contratado.
      segment: "Projeto de hackathon",
      namePublic: false,
    },
    categories: ["Plataforma web", "Impacto social", "Tempo real"],
    challenge:
      "Quem doa raramente sabe se o recurso chegou a quem precisava. E quem quer se voluntariar nem sempre encontra a organização certa para as próprias habilidades. Essa distância — falta de transparência de um lado, dificuldade de encontro do outro — faz muita gente desistir de ajudar.",
    solution:
      "Uma plataforma que aproxima os dois lados e mostra cada passo. Um algoritmo sugere oportunidades de voluntariado por habilidade, causa e proximidade, e prioriza as organizações mais vulneráveis. A doação tem uma linha do tempo pública (recebido, em estoque, usado), e quem doa pode acompanhar a entrega ao vivo num mapa, com código de segurança na coleta e na entrega — o mesmo modelo dos aplicativos de comida.",
    features: [
      "Cadastro com múltiplos papéis (doador, voluntário, entregador, organização)",
      "Sugestão de voluntariado por habilidade, causa e localização",
      "Linha do tempo pública da doação, do recebimento ao uso",
      "Acompanhamento da entrega ao vivo no mapa, com GPS",
      "Códigos de segurança na coleta e na entrega",
      "Pontos de confiança e ranking público das organizações",
      "Transparência financeira, com detalhamento de cada gasto",
      "Notificações em tempo real entre os participantes",
    ],
    expectedImpact: [
      "Doação acompanhada de ponta a ponta, sem caixa-preta",
      "Encontro mais rápido entre quem quer ajudar e quem precisa",
      "Organizações mais transparentes ganham mais visibilidade",
      "Entrega rastreada ao vivo, como num aplicativo de comida",
    ],
    // Verificaveis no proprio repositorio e na documentacao do projeto.
    technologies: [
      "JavaScript",
      "Leaflet / OpenStreetMap",
      "Geolocation API",
      "Supabase (Postgres + Realtime)",
    ],
    links: [
      {
        label: "Ver no GitHub",
        href: "https://github.com/pedrogrca/elopotiguar",
      },
      // TODO: adicionar a URL da demonstracao ao vivo quando houver — um
      // projeto que da para abrir e testar convence muito mais que descricao.
    ],
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
