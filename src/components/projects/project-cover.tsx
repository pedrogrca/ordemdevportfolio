import Image from "next/image";

import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/**
 * Capa do projeto.
 *
 * Com uma captura de tela, mostra o print (alinhado ao topo, para aparecer o
 * cabecalho e o inicio da tela — a parte mais reconhecivel). Sem print, cai
 * numa composicao da propria marca (grade + espiral), que e melhor que um
 * mockup generico de painel: um mockup falso comunica "nao temos o que
 * mostrar" com mais forca do que um espaco honesto.
 *
 * Usa next/image para ganhar carregamento tardio e otimizacao de tamanho sem
 * esforco — a secao fica abaixo da dobra, entao nunca precisa carregar antes
 * do necessario.
 */
export function ProjectCover({
  label,
  src,
  alt,
  className,
}: {
  /** Categoria ou tipo do projeto, impresso discretamente na composicao. */
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={cn(
          "relative aspect-16/10 w-full overflow-hidden rounded-2xl border bg-muted",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-16/10 w-full overflow-hidden rounded-2xl border bg-muted",
        className,
      )}
      aria-hidden="true"
    >
      {/* Grade estrutural: o conceito de "Ordem" aparecendo como textura. */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="w-[38%] text-primary/15" />
      </div>

      {/* Esmaece a grade nas bordas para a textura nao competir com o card. */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

      {label && (
        <span className="absolute bottom-4 left-5 font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground">
          {label.toUpperCase()}
        </span>
      )}
    </div>
  );
}
