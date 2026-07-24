import { Boxes, Cable, Globe, Workflow } from "lucide-react";

/**
 * Servicos.
 *
 * A lista original tinha cinco itens: Desenvolvimento Web, Sistemas
 * Personalizados, APIs, Automacoes e Landing Pages. Reagrupei em quatro, e
 * vale explicar por que:
 *
 * - "API" foi absorvido por Integracoes. O cliente que precisa de uma API
 *   raramente sabe que precisa de uma API — ele sabe que digita o mesmo
 *   pedido no sistema e na planilha todo dia. Vender a solucao pelo nome
 *   tecnico afasta exatamente quem mais precisa dela.
 * - "Desenvolvimento Web" e "Landing Pages" viraram um item so. Eram o mesmo
 *   servico com dois nomes, e separa-los dava a impressao de catalogo
 *   inflado.
 *
 * Nenhum servico foi removido: os cinco continuam cobertos, agrupados como o
 * cliente pensa e nao como o desenvolvedor organiza.
 *
 * Cada item segue a mesma estrutura: uma promessa curta em linguagem de
 * cliente, e um corpo com situacoes concretas onde ele se reconheca. Ninguem
 * contrata "solucoes digitais sob medida"; contrata "parar de perder a tarde
 * consertando planilha".
 */

export type Service = {
  slug: string;
  icon: typeof Boxes;
  title: string;
  promise: string;
  description: string;
  /** Exemplos reconheciveis. Ver o proprio caso na lista e o que gera contato. */
  examples: string[];
  /** O primeiro card ocupa a largura toda: e o carro-chefe da empresa. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "sistemas",
    icon: Boxes,
    title: "Sistemas sob medida",
    promise: "Um sistema que funciona do seu jeito — não o contrário.",
    description:
      "Quando a planilha já não dá conta e o programa pronto do mercado obriga sua equipe a trabalhar de um jeito que não é o de vocês, a saída é construir o que falta.",
    examples: [
      "Controle de clientes, pedidos e estoque",
      "Gestão de atendimentos e ordens de serviço",
      "Painéis com os números do negócio em um lugar só",
      "Cadastros e processos internos que hoje vivem no papel",
    ],
    featured: true,
  },
  {
    slug: "sites",
    icon: Globe,
    title: "Sites e páginas de campanha",
    promise: "Uma página que trabalha por você 24 horas por dia.",
    description:
      "Site institucional ou página de campanha que abre rápido no celular, aparece no Google e é desenhada para transformar visitante em conversa.",
    examples: [
      "Site institucional",
      "Página de campanha e captação",
      "Catálogo de produtos ou serviços",
    ],
  },
  {
    slug: "automacoes",
    icon: Workflow,
    title: "Automações",
    promise: "O trabalho repetitivo para de consumir a sua equipe.",
    description:
      "Aquilo que alguém refaz toda semana, sempre igual, pode ser feito sozinho — sem erro de digitação e sem depender de quem lembrou.",
    examples: [
      "Relatórios que se montam sozinhos",
      "Cobranças e lembretes enviados na hora certa",
      "Documentos e propostas gerados automaticamente",
    ],
  },
  {
    slug: "integracoes",
    icon: Cable,
    title: "Integrações",
    promise: "Seus sistemas passam a conversar entre si.",
    description:
      "Conectamos as ferramentas que você já usa para o mesmo dado não precisar ser digitado em três lugares diferentes.",
    examples: [
      "Sistema de gestão, loja virtual e planilhas",
      "Meios de pagamento e emissão de notas",
      "WhatsApp e canais de atendimento",
    ],
  },
];
