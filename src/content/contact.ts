/**
 * Opcoes de orcamento do formulario.
 *
 * O campo de orcamento existe por um motivo comercial, nao burocratico: e o
 * que separa curioso de cliente. Quem seleciona uma faixa ja se preparou para
 * gastar; quem so quer "saber quanto custa por curiosidade" costuma escolher
 * "ainda nao sei" — e essa resposta tambem e util, porque diz a voces com que
 * tipo de conversa estao lidando antes mesmo de responder.
 *
 * "Ainda nao sei" fica de proposito: obrigar um numero afastaria o cliente
 * legitimo que realmente nao faz ideia de quanto custa um sistema — que e a
 * maioria do publico deste site.
 *
 * TODO: as faixas sao um ponto de partida. A equipe deve ajusta-las para o
 * proprio piso de projeto — nao adianta receber muitos contatos de uma faixa
 * que voces nao atendem. Definir o valor minimo que compensa e uma decisao de
 * negocio que so voces podem tomar.
 */
export const budgetOptions = [
  "Até R$ 2 mil",
  "R$ 2 mil a R$ 5 mil",
  "R$ 5 mil a R$ 15 mil",
  "Acima de R$ 15 mil",
  "Ainda não sei",
] as const;

export type BudgetOption = (typeof budgetOptions)[number];
