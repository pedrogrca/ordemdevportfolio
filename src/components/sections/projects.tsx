import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { clientLabel, projects, type Project } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Projetos.
 *
 * Dois cases, cada um em formato largo e completo, empilhados. Continua sendo
 * o oposto de uma grade de cards: com poucos projetos, grade anuncia as vagas
 * vazias, enquanto o formato largo dedica espaco a contar cada historia por
 * inteiro. Um caso bem contado convence mais que varios listados.
 *
 * A ordem do texto e sempre desafio -> solucao, nao "o que construimos": o
 * visitante precisa reconhecer o proprio problema antes de se importar com a
 * solucao de outra pessoa.
 *
 * A imagem alterna de lado entre os cases (esquerda/direita) para dar ritmo a
 * pilha e ela nao parecer dois blocos identicos empilhados.
 */

function FeaturedProject({
  project,
  imageOnLeft,
}: {
  project: Project;
  imageOnLeft: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-card">
      <div className="grid lg:grid-cols-2">
        <div
          className={cn(
            "order-2 flex flex-col p-6 sm:p-10",
            imageOnLeft ? "lg:order-2 lg:pl-0" : "lg:order-1",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusBadge status={project.status} />
            <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground">
              {project.year} · {clientLabel(project).toUpperCase()}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-muted-foreground text-pretty">
            {project.summary}
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground">
                O DESAFIO
              </dt>
              <dd className="mt-2 text-sm text-pretty">{project.challenge}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground">
                A SOLUÇÃO
              </dt>
              <dd className="mt-2 text-sm text-pretty">{project.solution}</dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <li
                key={category}
                className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-2">
            <Button asChild size="lg" variant="outline" className="px-4">
              <Link href={`/projetos/${project.slug}`}>
                Ver o caso completo
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "order-1 p-6 sm:p-10",
            imageOnLeft ? "lg:order-1 lg:pr-0" : "lg:order-2 lg:pl-0",
          )}
        >
          <ProjectCover label={project.categories[0]} className="h-full" />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projetos"
      index="02"
      label="PROJETOS"
      title="O que já construímos"
      description="Um sistema comercial para um cliente real e uma plataforma social feita em hackathon. Dois problemas diferentes, a mesma forma de trabalhar."
    >
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <FeaturedProject project={project} imageOnLeft={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
