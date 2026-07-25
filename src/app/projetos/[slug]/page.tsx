import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { clientLabel, projects, projectsBySlug } from "@/content/projects";

/**
 * Pagina de caso.
 *
 * Existe separada da home por dois motivos: cabe a historia inteira sem
 * inflar a pagina principal, e vira um link que a equipe pode mandar direto
 * para um cliente em negociacao — "olha um projeto parecido com o seu".
 *
 * A ordem das secoes segue a leitura de quem avalia um fornecedor: o que
 * estava errado, o que foi feito, o que o sistema faz, o que se espera dele.
 */

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug.get(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

function Bloco({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/60 py-10">
      <h2 className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
        {label}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ListaComCheck({ itens }: { itens: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {itens.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm">
          <Check
            className="mt-0.5 size-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projectsBySlug.get(slug);

  if (!project) notFound();

  return (
    <main id="conteudo">
      <Container className="max-w-3xl py-14 sm:py-20">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para projetos
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ProjectStatusBadge status={project.status} />
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground">
            {project.year} · {clientLabel(project).toUpperCase()}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-5 text-lg text-muted-foreground text-pretty">
          {project.summary}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <li
              key={category}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ProjectCover label={project.categories[0]} />
        </div>

        <div className="mt-12">
          <Bloco label="O DESAFIO">
            <p className="text-pretty">{project.challenge}</p>
          </Bloco>

          <Bloco label="A SOLUÇÃO">
            <p className="text-pretty">{project.solution}</p>
          </Bloco>

          <Bloco label="O QUE O SISTEMA FAZ">
            <ListaComCheck itens={project.features} />
          </Bloco>

          {/* O rotulo muda com o status. Em projeto ainda em andamento sao
              "objetivos esperados", com ressalva; em projeto entregue sao os
              destaques do que ele ja faz — chamar de "esperado" algo pronto
              soaria falso. */}
          <Bloco
            label={
              project.status === "em-desenvolvimento"
                ? "IMPACTO ESPERADO"
                : "DESTAQUES DO PROJETO"
            }
          >
            <ListaComCheck itens={project.expectedImpact} />
            {project.status === "em-desenvolvimento" && (
              <p className="mt-5 rounded-xl border border-border/60 bg-muted/50 p-4 text-sm text-muted-foreground">
                Este projeto está em desenvolvimento. Os itens acima são os
                objetivos acordados com o cliente, ainda não medições — vamos
                atualizar esta página com os resultados quando o sistema estiver
                em uso.
              </p>
            )}
          </Bloco>

          {project.technologies.length > 0 && (
            <Bloco label="TECNOLOGIAS">
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Bloco>
          )}

          {project.links && project.links.length > 0 && (
            <Bloco label="LINKS">
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Button key={link.href} asChild variant="outline" size="lg">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ArrowUpRight />
                    </a>
                  </Button>
                ))}
              </div>
            </Bloco>
          )}
        </div>

        <div className="mt-6 rounded-2xl border bg-card p-8 text-center">
          <p className="text-xl font-medium tracking-tight text-balance">
            Tem um processo que ainda roda na planilha?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground text-pretty">
            Conta o que trava o seu dia a dia. Se a gente puder ajudar, monta
            uma proposta; se não puder, diz na hora.
          </p>
          <WhatsAppCta className="mt-6">Conversar sobre meu caso</WhatsAppCta>
        </div>
      </Container>
    </main>
  );
}
