import { LogoMark } from "@/components/brand/logo-mark";
import { cn } from "@/lib/utils";

/**
 * Capa do projeto.
 *
 * Enquanto nao houver print liberado, a capa e uma composicao da propria
 * marca — grade e espiral. A alternativa seria um mockup generico de painel,
 * com graficos falsos e nomes inventados, e isso e reconhecivel a distancia:
 * comunica "nao temos o que mostrar" com mais forca do que um espaco honesto.
 *
 * Quando houver imagem liberada (com dado sensivel ja substituido), basta
 * passar `src` e a composicao sai de cena.
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
      // eslint-disable-next-line @next/next/no-img-element -- trocar por next/image quando existir print real com dimensoes conhecidas
      <img
        src={src}
        alt={alt ?? ""}
        className={cn(
          "aspect-16/10 w-full rounded-2xl border object-cover",
          className,
        )}
      />
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
