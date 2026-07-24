import { Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { site, socialLinks, whatsappUrl } from "@/lib/site";

/**
 * Contato.
 *
 * Ultima secao antes do rodape, e o unico lugar da pagina, junto com o rodape,
 * onde o roxo cheio da marca ocupa o fundo. O bloco de cor sinaliza "aqui e o
 * momento de agir" depois de uma pagina inteira em fundo neutro.
 *
 * Dois caminhos lado a lado, nao um so: o formulario para quem prefere
 * organizar o pedido antes de falar, e o contato direto para quem ja decidiu e
 * so quer chamar. Forcar todo mundo pelo mesmo caminho perde os dois perfis.
 *
 * Nao ha "seção Contato" no indice de titulos concorrendo com as outras: o
 * texto e curto e direto, porque quem chegou ate aqui ja foi convencido pelas
 * secoes anteriores. A funcao agora e remover atrito, nao argumentar de novo.
 */

const directLinkClass =
  "flex items-center gap-3 text-brand-foreground/80 transition-colors hover:text-brand-foreground";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-24 bg-brand text-brand-foreground"
    >
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.18em] text-brand-foreground/60">
                  06
                </span>
                <span className="font-mono text-xs tracking-[0.18em] text-brand-foreground/60">
                  CONTATO
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                id="contato-titulo"
                className="mt-8 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              >
                Vamos conversar sobre o seu projeto
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-brand-foreground/80 text-pretty">
                A primeira conversa é sem compromisso e leva uns 30 minutos.
                Você conta o problema, a gente diz se pode ajudar — e, se não
                for caso nosso, diz na hora.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={directLinkClass}
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-foreground/10">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-foreground/50">
                      WhatsApp
                    </span>
                    {site.contact.whatsappDisplay}
                  </span>
                </a>

                <a
                  href={`mailto:${site.contact.email}`}
                  className={directLinkClass}
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-foreground/10">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-brand-foreground/50">
                      E-mail
                    </span>
                    {site.contact.email}
                  </span>
                </a>

                {socialLinks.map((social) =>
                  social.key === "instagram" ? (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={directLinkClass}
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-foreground/10">
                        <InstagramIcon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-brand-foreground/50">
                          Instagram
                        </span>
                        @ordemdev
                      </span>
                    </a>
                  ) : null,
                )}
              </div>
            </Reveal>
          </div>

          {/* O formulario vive num cartao claro sobre o fundo roxo: destaca o
              caminho principal e garante contraste de leitura nos campos, que
              em cima do roxo cheio ficariam dificeis. */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-brand-foreground/10 bg-background p-6 text-foreground sm:p-8">
              <h3 className="text-lg font-medium tracking-tight">
                Conte o que você precisa
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Leva um minuto. Quanto mais claro, melhor a nossa resposta.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
