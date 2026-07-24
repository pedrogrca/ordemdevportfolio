import { KeyRound, MapPin, MessageSquare, Users } from "lucide-react";

/**
 * Diferenciais.
 *
 * A secao original repetiria o que o Hero ja anuncia e o Processo ja explica:
 * contato direto, relatorio semanal e treinamento na entrega aparecem nos dois
 * lugares. Repetir pela terceira vez nao convence mais — cansa, e sinaliza que
 * nao ha muito o que dizer.
 *
 * Entao esta secao faz o trabalho que nenhuma outra faz: encara a objecao que
 * o visitante nao verbaliza, mas pensa — "e uma empresa nova, e se der
 * errado?". Cada item aqui e uma resposta a um risco especifico de contratar
 * quem ainda nao tem historico.
 *
 * Nenhum item e adjetivo. Sao fatos que o cliente pode conferir depois e
 * cobrar se nao acontecerem.
 */

export type Differential = {
  icon: typeof Users;
  title: string;
  /** O risco que o item elimina, dito na lingua do cliente. */
  description: string;
};

export const differentials: Differential[] = [
  {
    icon: Users,
    title: "Uma equipe, não uma pessoa só",
    description:
      "O concorrente mais comum de uma empresa do nosso tamanho é o freelancer. A diferença aparece no imprevisto: se alguém adoece, viaja ou some, aqui o projeto continua — porque mais de uma pessoa conhece o código.",
  },
  {
    icon: KeyRound,
    title: "Você não fica dependente da gente",
    description:
      "Na entrega vão junto a documentação e o treinamento da sua equipe. Isso significa que outro desenvolvedor consegue continuar o trabalho se um dia você quiser trocar. É o oposto de prender cliente — e é o que torna seguro contratar uma empresa nova.",
  },
  {
    icon: MessageSquare,
    title: "Você acompanha semana a semana",
    description:
      "Todo projeto que dá errado dá errado devagar, e quase sempre alguém percebeu cedo e não falou. Com resumo semanal e contato direto com quem programa, um problema aparece na semana em que nasce — não no dia da entrega.",
  },
  {
    icon: MapPin,
    title: "Estamos em Natal",
    description:
      "Dá para marcar uma conversa presencial quando o assunto pedir. Para cliente da região, isso costuma pesar mais do que qualquer argumento técnico: existe endereço, existe gente, existe a quem cobrar.",
  },
];
