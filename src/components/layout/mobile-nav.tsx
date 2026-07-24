"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { navigation } from "@/lib/site";

/**
 * Menu do celular.
 *
 * Usa o Sheet do shadcn (Radix Dialog por baixo) em vez de um overlay caseiro
 * porque ele traz de graca o que costuma faltar em menu mobile: prisao de
 * foco, fechar no Esc, travar o scroll do fundo e `aria-modal`. Reescrever
 * isso na mao daria errado em algum detalhe.
 *
 * Os links precisam fechar o menu ao serem clicados: como sao ancoras da
 * mesma pagina, sem isso o painel ficaria aberto por cima da secao de destino.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 border-l bg-background p-0 sm:max-w-sm"
      >
        {/* O Radix exige um titulo acessivel no dialogo. Ele nao precisa
            aparecer, mas precisa ser anunciado por leitores de tela. */}
        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

        <div className="flex h-16 items-center justify-between border-b px-6">
          <Logo />
          <SheetClose asChild>
            <Button variant="ghost" size="icon" aria-label="Fechar menu">
              <X />
            </Button>
          </SheetClose>
        </div>

        <nav
          className="flex flex-col px-6 py-2"
          aria-label="Navegação principal"
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-border/60 py-4 text-lg transition-colors hover:text-primary"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t p-6">
          <WhatsAppCta className="w-full" />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Resposta no mesmo dia útil.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
