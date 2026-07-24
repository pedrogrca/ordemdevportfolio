import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/content/process";

/**
 * Processo.
 *
 * Esta secao responde ao maior medo de quem nunca contratou software: "e se
 * eles sumirem no meio?". A resposta nao e uma promessa — e mostrar que
 * existe metodo, com etapas nomeadas e um resultado visivel em cada uma.
 *
 * O formato e uma trilha vertical numerada, e nao seis cards: card sugere
 * itens independentes, trilha sugere sequencia. Como a secao inteira serve
 * para provar que ha ordem no trabalho, a forma precisa dizer a mesma coisa
 * que o texto.
 *
 * A linha e os numeros ficam fora da animacao de entrada de proposito: a
 * estrutura ja esta la quando a pagina chega, e o conteudo assenta sobre ela.
 * Animar a trilha inteira faria a secao parecer instavel na primeira leitura.
 */
export function Process() {
  return (
    <Section
      id="processo"
      index="03"
      label="PROCESSO"
      title="Como trabalhamos"
      description="Seis etapas. Em todas elas você sabe onde o projeto está e o que se espera de você — nenhuma delas é uma caixa-preta."
    >
      <ol className="relative">
        {processSteps.map((step, index) => {
          const isLast = index === processSteps.length - 1;

          return (
            <li key={step.title} className="relative pl-14 pb-10 sm:pl-20">
              {!isLast && (
                <span
                  className="absolute top-12 bottom-0 left-[1.375rem] w-px bg-grid sm:left-[1.75rem]"
                  aria-hidden="true"
                />
              )}

              <span
                className="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full border bg-card font-mono text-xs text-primary sm:size-14 sm:text-sm"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <Reveal delay={Math.min(index, 3) * 0.05}>
                <h3 className="pt-2.5 text-lg font-medium tracking-tight sm:pt-4 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2.5 max-w-2xl text-muted-foreground text-pretty">
                  {step.description}
                </p>

                <p className="mt-4 max-w-2xl border-l-2 border-primary/30 pl-4 text-sm text-pretty">
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                    SEU PAPEL
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    {step.yourPart}
                  </span>
                </p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
