/**
 * Processo de trabalho.
 *
 * A sequencia original tinha sete etapas. Duas mudancas:
 *
 * - "Deploy" saiu como etapa propria e virou parte de "Entrega". Deploy e
 *   vocabulario de desenvolvedor; o cliente vive aquele momento como "o
 *   sistema entrou no ar e minha equipe aprendeu a usar".
 * - "Testes" foi absorvido por "Desenvolvimento". Listar teste como fase
 *   seguinte sugere que ele acontece depois — e abre a pergunta que ninguem
 *   quer responder numa negociacao.
 *
 * O campo `yourPart` e o que diferencia esta secao. O medo de quem nunca
 * contratou software nao e o preco: e nao saber o que vao cobrar dele, e
 * quando. Dizer exatamente o que se espera do cliente em cada etapa remove
 * esse medo antes que ele vire objecao.
 */

export type ProcessStep = {
  title: string;
  description: string;
  /** O que se espera do cliente nesta etapa. */
  yourPart: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Conversa inicial",
    description:
      "A gente escuta antes de propor qualquer coisa. Você conta como o processo funciona hoje, o que trava e o que já tentou. Às vezes a conversa revela que o que você precisa é menor — e mais barato — do que imaginava.",
    yourPart: "Contar como funciona hoje, sem se preocupar com termo técnico.",
  },
  {
    title: "Proposta e escopo",
    description:
      "Escrevemos o que será feito, o que não será feito, em quanto tempo e por quanto. Nada começa antes da sua aprovação. Se o orçamento não fechar, ajustamos o escopo junto com você — em vez de cortar qualidade por baixo dos panos.",
    yourPart: "Ler, perguntar o que não ficou claro e aprovar.",
  },
  {
    title: "Design das telas",
    description:
      "Antes de existir código, você vê como o sistema vai ser e diz o que muda. Corrigir um desenho leva minutos; corrigir um sistema pronto leva semanas. É a etapa mais barata para mudar de ideia.",
    yourPart:
      "Olhar as telas e apontar o que não bate com a realidade do seu dia a dia.",
  },
  {
    title: "Desenvolvimento e testes",
    description:
      "Construímos por partes e testamos cada uma antes de seguir. Toda semana você recebe um resumo do que avançou, sem precisar cobrar. E fala direto com quem está programando, não com um intermediário.",
    yourPart: "Acompanhar os avanços e tirar dúvidas pontuais da equipe.",
  },
  {
    title: "Entrega e treinamento",
    description:
      "O sistema entra no ar e a sua equipe aprende a usar. Você recebe a documentação do que foi feito e o treinamento de uso — sistema que ninguém sabe operar não resolve problema nenhum.",
    yourPart: "Reunir quem vai usar o sistema para o treinamento.",
  },
  {
    title: "Suporte e evolução",
    description:
      "Depois da entrega continuamos por perto. Erro é corrigido, dúvida é respondida e, quando o negócio mudar, o sistema muda junto. Entrega não é despedida.",
    yourPart: "Avisar quando algo sair do esperado ou quando a operação mudar.",
  },
];
