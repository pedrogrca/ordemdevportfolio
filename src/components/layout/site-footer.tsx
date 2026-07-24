import { Mail, MapPin } from "lucide-react";

import { LogoMark } from "@/components/brand/logo-mark";
import { socialIcons, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Container } from "@/components/layout/container";
import { navigation, site, socialLinks, whatsappUrl } from "@/lib/site";

/**
 * Rodape.
 *
 * E o unico lugar do site onde o roxo cheio da marca ocupa a tela inteira.
 * Isso e proposital: depois de uma pagina inteira em fundo quase-neutro, o
 * bloco de cor fecha a leitura e fixa a identidade na ultima coisa que a
 * pessoa ve. Como e o fim da pagina, nao ha texto longo para ler ali — que
 * era justamente o motivo de nao usar essa cor como fundo geral.
 *
 * O bloco tem a mesma cor nos dois temas: a marca nao muda porque o visitante
 * prefere claro.
 */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-xs tracking-[0.18em] text-brand-foreground/50">
      {children}
    </h2>
  );
}

const footerLinkClass =
  "text-sm text-brand-foreground/70 transition-colors hover:text-brand-foreground";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-7" />
              <span className="text-[0.9375rem] leading-none tracking-tight">
                <span className="font-normal">Ordem</span>
                <span className="font-semibold">DEV</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm text-brand-foreground/70">
              {site.description}
            </p>

            {socialLinks.length > 0 && (
              <ul className="mt-6 flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.key];
                  return (
                    <li key={social.key}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} no ${social.label}`}
                        className="flex size-9 items-center justify-center rounded-lg text-brand-foreground/70 transition-colors hover:bg-brand-foreground/10 hover:text-brand-foreground"
                      >
                        <Icon className="size-[1.125rem]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <nav aria-labelledby="footer-nav">
            <FooterHeading>
              <span id="footer-nav">NAVEGAÇÃO</span>
            </FooterHeading>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={footerLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>CONTATO</FooterHeading>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLinkClass} inline-flex items-center gap-2`}
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className={`${footerLinkClass} inline-flex items-center gap-2`}
                >
                  <Mail className="size-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-brand-foreground/15 pt-6 text-xs text-brand-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. Todos os
            direitos reservados.
          </p>
          {/* Trocou o antigo "ORDEM · TECNOLOGIA · EVOLUÇÃO", que era enfeite.
              A cidade e informacao de verdade: cliente da regiao percebe que
              tem alguem por perto, e mesmo o de fora prefere saber com quem
              esta falando a ler tres palavras bonitas. */}
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            Feito em Natal, RN
          </p>
        </div>
      </Container>
    </footer>
  );
}
