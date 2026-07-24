import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Moldura padrao de secao: numero, etiqueta, titulo, descricao e conteudo.
 *
 * Existe para que ritmo vertical, hierarquia de titulo e distancia entre
 * blocos sejam identicos do inicio ao fim da pagina. Quando cada secao
 * inventa o proprio espacamento, o site parece um agregado de partes — e e
 * exatamente essa sensacao que precisamos evitar num portfolio que quer
 * transmitir organizacao.
 *
 * A numeracao em monoespaçada ("01 / SERVIÇOS") e o lugar onde o nome da
 * empresa aparece no visual: uma pagina indexada, com ordem declarada. Ela
 * tambem ajuda o visitante a saber onde esta numa pagina longa.
 */
export function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: {
  id: string;
  /** Numero de dois digitos exibido antes da etiqueta. */
  index: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      // A secao inteira e rotulada pelo proprio titulo: leitores de tela
      // anunciam "Serviços, região" em vez de apenas "região".
      aria-labelledby={`${id}-titulo`}
      className={cn("border-t border-border/60 py-20 sm:py-28", className)}
    >
      <Container>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-primary">
              {index}
            </span>
            <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              {label}
            </span>
            <span className="h-px flex-1 bg-grid" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id={`${id}-titulo`}
            className="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
        </Reveal>

        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
              {description}
            </p>
          </Reveal>
        )}

        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}
