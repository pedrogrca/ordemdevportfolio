/**
 * Perguntas frequentes.
 *
 * O FAQ nao e secao de rodape aqui — e onde as objecoes que travam a
 * assinatura sao respondidas. Preco, prazo, pagamento e "e depois da entrega"
 * sao as quatro perguntas que todo cliente tem e poucos fazem em voz alta.
 * Respondidas antes, elas param de ser motivo para adiar a decisao.
 *
 * Duas regras seguidas aqui:
 *
 * - Nenhuma resposta promete numero que a equipe nao possa cumprir. Onde o
 *   valor depende do caso, a resposta explica o criterio em vez de inventar
 *   uma faixa.
 * - Nenhuma pergunta e feita para ser respondida com propaganda. Uma pergunta
 *   cuja resposta e so elogio proprio faz o FAQ inteiro perder credibilidade.
 *
 * ATENCAO: as respostas marcadas com `revisar: true` contem suposicoes sobre
 * a forma de trabalho da equipe. Elas precisam ser confirmadas antes de o
 * site ir ao ar.
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Contem suposicao a confirmar com a equipe antes da publicacao. */
  revisar?: boolean;
};

export const faq: FaqItem[] = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Depende do tamanho do problema, não do tamanho da sua empresa. Um site institucional e um sistema de gestão são trabalhos muito diferentes, e dar um preço antes de entender o caso seria chute. Por isso a primeira conversa é gratuita: entendemos o que você precisa e só então enviamos um valor. Se o orçamento não couber, dizemos na hora — e quando dá, ajustamos o escopo para caber.",
    revisar: true,
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Varia com o tamanho. Uma página de campanha sai em poucos dias; um sistema de gestão leva semanas. O prazo é definido na proposta, antes de qualquer linha de código, e você acompanha o avanço toda semana — então não descobre atraso só no fim.",
    revisar: true,
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Fica combinado na proposta, antes de começar. O valor costuma ser dividido em parcelas ao longo do projeto, em vez de cobrado de uma vez só. Nada é cobrado fora do que estava escrito e aprovado.",
    revisar: true,
  },
  {
    question: "E se eu não souber explicar direito o que preciso?",
    answer:
      "Essa é a situação mais comum, e resolver isso faz parte do trabalho. Você não precisa chegar com a solução pronta — precisa saber o que incomoda no seu dia a dia. As perguntas certas são responsabilidade nossa.",
  },
  {
    question: "Vocês atendem empresas de fora de Natal?",
    answer:
      "Sim. O trabalho é remoto por padrão e funciona bem assim: reuniões por vídeo e resumo escrito toda semana. Estar em Natal é uma opção a mais para quem é da região, não uma limitação para quem não é.",
  },
  {
    question: "O sistema é meu depois de pronto?",
    answer:
      "Sim. O que construímos para você é seu. Na entrega vão junto a documentação e o treinamento da sua equipe, para que vocês consigam operar sem depender da gente — e para que outro desenvolvedor consiga continuar o trabalho, se um dia você quiser trocar.",
  },
  {
    question: "E depois que o sistema entra no ar? Existe suporte?",
    answer:
      "Sim, continuamos por perto depois da entrega. O que está incluído e por quanto tempo fica definido na proposta, para não haver surpresa dos dois lados. Erro em algo que estava no escopo é problema nosso, não seu.",
    revisar: true,
  },
  {
    question: "E se eu precisar mudar algo no meio do projeto?",
    answer:
      "Acontece em quase todo projeto e não é problema. Ajustes pequenos entram no caminho normalmente. Mudanças que alteram o tamanho do trabalho a gente conversa: mostramos o impacto em prazo e em valor antes de fazer, e você decide. O que nunca fazemos é mudar por conta própria e cobrar depois.",
  },
  {
    question: "Como começamos?",
    answer:
      "Uma conversa de 30 a 45 minutos, sem compromisso, por WhatsApp ou vídeo. Você conta o problema e a gente diz se consegue ajudar. Se conseguir, você recebe uma proposta escrita com escopo, prazo e valor. Se não for caso nosso, falamos na hora e, quando dá, indicamos um caminho.",
    revisar: true,
  },
];
