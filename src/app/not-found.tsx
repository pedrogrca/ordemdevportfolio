import Link from "next/link";

import { LogoMark } from "@/components/brand/logo-mark";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/whatsapp-cta";

/**
 * Pagina 404.
 *
 * Renderiza dentro do layout raiz, entao o cabecalho e o rodape aparecem — o
 * visitante que caiu numa URL errada continua dentro do site, com caminho de
 * volta a vista, em vez de numa tela morta.
 *
 * O tom evita jargao ("erro 404", "pagina nao encontrada") em favor de algo
 * que qualquer pessoa entende. E, fiel a marca, transforma o problema numa
 * frase com a palavra "ordem".
 */
export default function NotFound() {
  return (
    <main id="conteudo">
      <Container className="flex min-h-[70vh] max-w-xl flex-col items-center justify-center py-24 text-center">
        <LogoMark className="size-14 text-primary" />

        <p className="mt-8 font-mono text-xs tracking-[0.18em] text-muted-foreground">
          PÁGINA NÃO ENCONTRADA
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Essa página saiu da ordem.
        </h1>

        <p className="mt-4 text-muted-foreground text-pretty">
          O endereço que você tentou abrir não existe ou foi movido. Nada com
          você — vamos te levar de volta.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link href="/">Voltar ao início</Link>
          </Button>
          <WhatsAppCta size="xl" variant="outline">
            Falar com a gente
          </WhatsAppCta>
        </div>
      </Container>
    </main>
  );
}
