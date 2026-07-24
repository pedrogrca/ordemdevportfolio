# Ordem DEV — site institucional e portfolio

Site institucional da Ordem DEV, software house independente. Serve como
principal cartao de visitas da empresa: apresenta os servicos, os projetos, o
processo de trabalho e a equipe, e converte visitantes em conversas.

## Stack

| Camada       | Escolha                        |
| ------------ | ------------------------------ |
| Framework    | Next.js 16 (App Router)        |
| Linguagem    | TypeScript                     |
| Estilo       | Tailwind CSS v4                |
| Componentes  | shadcn/ui (base Radix)         |
| Animacao     | Motion                         |
| Tema         | next-themes (escuro por padrao)|
| Icones       | lucide-react                   |

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

O site sobe em `http://localhost:3000`.

## Estrutura

```
src/
  app/            rotas e layout raiz
  components/
    brand/        logo e elementos de identidade
    ui/           primitivos do shadcn
  lib/
    site.ts       dados institucionais (contatos, redes, navegacao)
brand/
  logo-source.svg arquivo original da logo
```

## Sistema de design

As cores vivem em `src/app/globals.css`, em OKLCH, com o hex equivalente em
comentario. A paleta nasce do roxo da logo (`#2E0A4E`), separado em tres
papeis: marca (blocos pontuais), fundo (quase-preto arroxeado) e interacao
(violeta claro, com contraste suficiente para botoes e links). O arquivo
documenta o raciocinio e as taxas de contraste verificadas.

Para alterar contatos, redes sociais ou os itens do menu, edite
`src/lib/site.ts` — nao ha esses dados espalhados pelos componentes.

## Etapas

- [x] 0 — Base tecnica e sistema de design
- [ ] 1 — Header e rodape
- [ ] 2 — Hero
- [ ] 3 — Servicos
- [ ] 4 — Projetos e paginas de caso
- [ ] 5 — Processo
- [ ] 6 — Sobre e equipe
- [ ] 7 — Tecnologias e diferenciais
- [ ] 8 — FAQ
- [ ] 9 — Contato e envio do formulario
- [ ] 10 — SEO, acessibilidade e performance
