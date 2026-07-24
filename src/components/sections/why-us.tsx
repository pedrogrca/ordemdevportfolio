import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { differentials } from "@/content/differentials";
import { technologies } from "@/content/technologies";

/**
 * Por que a Ordem DEV.
 *
 * Reune o que o plano original tratava como duas secoes — Diferenciais e
 * Tecnologias. Estao juntas porque respondem a mesma pergunta em dois niveis:
 * "posso confiar em voces?" no humano e no tecnico. Separa-las daria a
 * "Tecnologias" um peso que ela nao tem para o publico deste site.
 *
 * A faixa de tecnologias vem depois dos argumentos, e nao antes, porque e a
 * informacao menos importante para quem decide a contratacao.
 */
export function WhyUs() {
  return (
    <Section
      id="diferenciais"
      index="04"
      label="POR QUE A ORDEM DEV"
      title="Somos novos. Veja por que isso não é um risco."
      description="A pergunta que ninguém faz em voz alta é se vale contratar uma empresa que está começando. Aqui está a resposta, sem rodeio."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {differentials.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={Math.min(index, 3) * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border bg-card p-6 sm:p-8">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-lg font-medium tracking-tight text-balance">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-border/60 pt-10">
          <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
            FERRAMENTAS QUE USAMOS
          </h3>

          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            São as mesmas tecnologias por trás de grandes produtos digitais
            usados todo dia. Na prática, para você isso significa três coisas: o
            sistema abre rápido, funciona bem no celular e pode crescer sem
            precisar ser refeito do zero.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border bg-card px-3.5 py-2 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
