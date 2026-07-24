import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { services, type Service } from "@/content/services";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Servicos.
 *
 * O card comeca pela promessa em tamanho de titulo e so depois explica. Um
 * visitante em modo de varredura le quatro frases e ja sabe se veio ao lugar
 * certo; quem se interessou desce para os exemplos. Cartao que comeca com
 * paragrafo obriga todo mundo a ler tudo — e a maioria nao le nada.
 *
 * O primeiro card ocupa a largura inteira porque sistema sob medida e o
 * servico de maior valor e o mais dificil de explicar. Dar mais espaco a ele
 * e uma decisao comercial, nao estetica.
 */

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-card p-6 sm:p-8",
        "transition-colors duration-300 hover:border-primary/40",
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-6 font-mono text-xs tracking-[0.18em] text-muted-foreground">
        {service.title.toUpperCase()}
      </h3>

      <p className="mt-3 text-xl font-medium tracking-tight text-balance sm:text-2xl">
        {service.promise}
      </p>

      <p className="mt-4 max-w-prose text-muted-foreground text-pretty">
        {service.description}
      </p>

      <ul
        className={cn(
          "mt-6 grid gap-2.5 text-sm text-muted-foreground",
          service.featured && "sm:grid-cols-2",
        )}
      >
        {service.examples.map((example) => (
          <li key={example} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            {example}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <Section
      id="servicos"
      index="01"
      label="SERVIÇOS"
      title="O que construímos para você"
      description="Não vendemos pacote fechado. O escopo nasce do seu problema — estes são os formatos que mais aparecem."
    >
      {/* A grade muda de 2 para 3 colunas no desktop para os tres cards
          secundarios fecharem uma linha exata. Em telas medias, onde sobram
          apenas duas colunas, o ultimo card ocupa a linha inteira — sem isso
          ele ficaria sozinho em meia linha, e meia linha vazia parece
          descuido, nao respiro. */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            key={service.slug}
            // O atraso acompanha a leitura, mas para no quarto item: escalonar
            // uma lista longa faz o ultimo card demorar tanto que parece
            // travamento.
            delay={Math.min(index, 3) * 0.06}
            className={cn(
              service.featured && "sm:col-span-2 lg:col-span-3",
              !service.featured &&
                index === services.length - 1 &&
                "sm:col-span-2 lg:col-span-1",
            )}
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 text-muted-foreground">
          Não achou o seu caso aqui?{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Descreve o problema para a gente
          </a>{" "}
          — se não for coisa nossa, dizemos na hora.
        </p>
      </Reveal>
    </Section>
  );
}
