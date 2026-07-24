import { ArrowDown, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/whatsapp-cta";

/**
 * Hero.
 *
 * A secao tem tres segundos para responder "o que voces fazem e por que eu
 * deveria me importar". Por isso o titulo fala do resultado para o cliente, e
 * nao da tecnologia usada: quem visita o site nao sabe o que e uma API, mas
 * sabe muito bem o que e perder a tarde consertando planilha.
 *
 * As tres provas abaixo dos botoes existem para o visitante nao precisar
 * rolar para encontrar motivo de confiar. Sao compromissos verificaveis, nao
 * adjetivos — "contato direto com quem programa" e uma promessa que da para
 * cobrar; "excelencia e qualidade" nao e.
 */

const PROVAS = [
  "Contato direto com quem programa",
  "Relatório de progresso toda semana",
  "Treinamento e documentação na entrega",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <HeroBackdrop />

      <Container className="relative py-24 text-center sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <Reveal immediate>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs tracking-wide text-muted-foreground backdrop-blur-sm">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Disponíveis para novos projetos
            </p>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Tecnologia que coloca sua empresa em ordem.
            </h1>
          </Reveal>

          <Reveal immediate delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              Desenvolvemos sistemas sob medida para empresas e organizações que
              cansaram de resolver tudo na planilha, no papel e no improviso.
            </p>
          </Reveal>

          <Reveal immediate delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppCta className="w-full sm:w-auto">
                Conversar sobre meu projeto
              </WhatsAppCta>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <a href="#projetos">
                  Ver projetos
                  <ArrowDown />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delay={0.32}>
            <ul className="mt-10 flex flex-col items-center justify-center gap-x-7 gap-y-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap">
              {PROVAS.map((prova) => (
                <li key={prova} className="flex items-center gap-2">
                  <Check
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {prova}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
