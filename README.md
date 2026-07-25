# Ordem DEV — site institucional e portfolio

Site institucional da Ordem DEV, software house independente de Natal/RN.
Serve como principal cartao de visitas da empresa: apresenta os servicos, os
projetos e o processo de trabalho, e converte visitantes em conversas pelo
WhatsApp.

## Stack

| Camada      | Escolha                          |
| ----------- | -------------------------------- |
| Framework   | Next.js 16 (App Router)          |
| Linguagem   | TypeScript                       |
| Estilo      | Tailwind CSS v4                  |
| Componentes | shadcn/ui (base Radix)           |
| Animacao    | Motion                           |
| Tema        | next-themes (escuro por padrao)  |
| Icones      | lucide-react                     |

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

O site sobe em `http://localhost:3000`.

Scripts uteis:

```bash
npm run build
```

```bash
npm run lint
```

## Estrutura

```
src/
  app/
    page.tsx              home (compoe as secoes)
    layout.tsx            layout raiz, metadados, tema
    projetos/[slug]/      paginas de caso
    opengraph-image.tsx   imagem de compartilhamento (gerada)
    icon.svg              favicon (espiral da marca)
    not-found.tsx         pagina 404
    robots.ts / sitemap.ts
    styleguide/           guia de estilo interno (noindex)
  components/
    sections/    as secoes da home (hero, servicos, projetos...)
    layout/      header, rodape, container, secao
    projects/    capa e selo de status dos projetos
    contact/     formulario de contato
    brand/       logo e simbolo
    motion/      animacao de entrada (Reveal)
    ui/          primitivos do shadcn
  content/       textos das secoes (servicos, projetos, faq, processo...)
  lib/
    site.ts      dados institucionais (contatos, redes, navegacao)
  hooks/         scroll e secao ativa
public/
  projetos/      capturas de tela dos projetos
brand/
  logo-source.svg  arquivo original da logo
```

## Editando o conteudo

Textos e dados moram em `src/content/` e `src/lib/site.ts`, separados da
apresentacao — da para ajustar a copia sem tocar em componente:

- **Contatos, redes e menu:** `src/lib/site.ts`
- **Servicos, projetos, processo, diferenciais, FAQ, orcamento:** arquivos em
  `src/content/`

Ha comentarios `TODO` marcando o que ainda depende de decisao da equipe (nome
do cliente da corretora, faixas de orcamento, promessas do FAQ a confirmar).

## Sistema de design

As cores vivem em `src/app/globals.css`, em OKLCH, com o hex equivalente em
comentario. A paleta nasce do roxo da logo (`#2E0A4E`), separado em tres
papeis: marca (blocos pontuais), fundo (quase-preto arroxeado) e interacao
(violeta claro, com contraste suficiente para botoes e links). O arquivo
documenta o raciocinio e as taxas de contraste verificadas.

Referencia visual dos tokens, tipografia e componentes: rota `/styleguide`
(fora do menu e fora dos buscadores).

## Deploy

Hospedado na Vercel — cada push na `main` publica automaticamente.

A variavel `NEXT_PUBLIC_SITE_URL` controla o dominio canonico e a indexacao
(ver `.env.example`):

- **Vazia** (estado atual): as metatags usam o endereco `.vercel.app` e o site
  pede para **nao** ser indexado. Isso evita que o endereco temporario dispute
  espaco no Google com o dominio definitivo.
- **Preenchida** (ex.: `https://ordemdev.com.br`, ambiente Production na
  Vercel): libera a indexacao. Definir depois de o dominio estar apontado, e
  refazer o deploy.

## Estado das secoes

- [x] Base tecnica e sistema de design
- [x] Header e rodape
- [x] Hero
- [x] Servicos
- [x] Projetos e paginas de caso
- [x] Processo
- [ ] Sobre e equipe — aguardando fotos, funcoes e links da equipe
- [x] Por que a Ordem DEV (diferenciais + tecnologias)
- [x] FAQ
- [x] Contato (formulario abre o WhatsApp com a mensagem pronta)
- [x] SEO, acessibilidade e performance (404, sitemap, robots, Open Graph,
      favicon)

## Pendencias externas

Antes de tratar o site como definitivo:

- Comprar o dominio e configurar `NEXT_PUBLIC_SITE_URL` na Vercel
- E-mail no dominio proprio (hoje em `@gmail.com`)
- Vetor limpo da logo (o atual e um traco automatico) para favicon e Open Graph
- Autorizacao da corretora para exibir o nome do cliente
- Material da equipe para a secao "Sobre e equipe"
