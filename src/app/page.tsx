import { Logo } from "@/components/brand/logo";
import { LogoMark } from "@/components/brand/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

/**
 * PROVISORIO — pagina de validacao da etapa 0.
 *
 * Serve para conferir visualmente que os tokens, a tipografia e a logo
 * funcionam nos dois temas antes de comecar a construir as secoes reais.
 * Sera substituida pela home na etapa 2.
 */

function Swatch({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`size-10 shrink-0 rounded-lg border ${className}`} />
      <div className="min-w-0">
        <p className="text-sm font-medium">{name}</p>
        <p className="truncate font-mono text-xs text-muted-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.18em] text-primary">
        {index}
      </span>
      <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-grid" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <header className="mb-16 flex items-center justify-between">
        <Logo />
        <ThemeToggle />
      </header>

      <section className="mb-16">
        <SectionLabel index="01">IDENTIDADE</SectionLabel>
        <div className="flex flex-wrap items-end gap-8">
          <LogoMark className="size-20 text-foreground" />
          <LogoMark className="size-12 text-primary" />
          <LogoMark className="size-8 text-muted-foreground" />
          <div className="flex size-20 items-center justify-center rounded-xl bg-brand">
            <LogoMark className="size-12 text-brand-foreground" />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          O simbolo herda <code className="font-mono">currentColor</code>: um
          unico arquivo serve os dois temas e qualquer fundo.
        </p>
      </section>

      <section className="mb-16">
        <SectionLabel index="02">TIPOGRAFIA</SectionLabel>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Sistemas que resolvem problemas reais.
        </h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground text-pretty">
          Desenvolvemos sistemas web, automacoes e integracoes para empresas e
          organizacoes que precisam parar de perder tempo com processo manual.
        </p>
        <p className="mt-4 max-w-prose text-sm text-muted-foreground">
          Corpo de texto menor, para blocos densos como o FAQ e as descricoes de
          projeto. Instrument Sans para tudo, Geist Mono nas etiquetas.
        </p>
      </section>

      <section className="mb-16">
        <SectionLabel index="03">CORES</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          <Swatch
            name="Marca"
            value="#2E0A4E — blocos pontuais"
            className="bg-brand"
          />
          <Swatch
            name="Interacao"
            value="#A855F7 / #7E22CE — botoes e links"
            className="bg-primary"
          />
          <Swatch
            name="Fundo"
            value="#0D0614 / #FFFFFF"
            className="bg-background"
          />
          <Swatch
            name="Superficie"
            value="#140C1E — cards"
            className="bg-card"
          />
          <Swatch
            name="Sutil"
            value="#1A0F26 — blocos secundarios"
            className="bg-muted"
          />
          <Swatch name="Borda" value="#2A1B3D" className="bg-border" />
        </div>
      </section>

      <section className="mb-16">
        <SectionLabel index="04">COMPONENTES</SectionLabel>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg">Falar no WhatsApp</Button>
          <Button size="lg" variant="outline">
            Ver projetos
          </Button>
          <Button size="lg" variant="ghost">
            Saiba mais
          </Button>
          <Button size="lg" variant="link">
            Link
          </Button>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
            CARD
          </p>
          <p className="mt-2 text-lg font-medium">Superficie elevada</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Usada em projetos, servicos e depoimentos.
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-brand p-6 text-brand-foreground">
          <p className="font-mono text-xs tracking-[0.18em] opacity-70">
            BLOCO DE MARCA
          </p>
          <p className="mt-2 text-lg font-medium">
            Reservado para o CTA final e o rodape.
          </p>
        </div>
      </section>

      <footer className="border-t pt-6 font-mono text-xs text-muted-foreground">
        ETAPA 0 — BASE TECNICA E SISTEMA DE DESIGN
      </footer>
    </main>
  );
}
