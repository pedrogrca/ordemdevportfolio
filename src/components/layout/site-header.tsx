"use client";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

// Ids das secoes, derivados uma vez no escopo do modulo. Fora do componente de
// proposito: se o array fosse recriado a cada render, o efeito do observer
// re-registraria sem necessidade.
const sectionIds = navigation.map((item) => item.href.replace("#", ""));

/**
 * Header fixo.
 *
 * Duas decisoes que valem explicar:
 *
 * 1. O fundo so aparece depois do scroll. No topo o header e transparente e
 *    se funde ao hero, o que da a impressao de mais espaco. Assim que a
 *    pagina rola, ele ganha fundo translucido, desfoque e uma linha de 1px —
 *    sem isso o texto das secoes passaria por tras e ficaria ilegivel.
 *
 * 2. O CTA fica no header em todas as telas. Quem se convence na secao de
 *    projetos nao deveria ter que rolar ate o rodape para achar como falar
 *    com voces. Manter a acao sempre visivel e a mudanca de maior impacto em
 *    conversao num site de uma pagina so.
 */
export function SiteHeader() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={activeId === item.href.replace("#", "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <WhatsAppCta size="lg" className="hidden px-4 sm:inline-flex">
            Falar no WhatsApp
          </WhatsAppCta>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
