import Link from "next/link";

import { LogoMark } from "@/components/brand/logo-mark";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Assinatura completa: simbolo + nome.
 *
 * "Ordem" em peso regular e "DEV" em semibold — a hierarquia interna do nome
 * evita ter que desenhar um logotipo tipografico agora e ja cria consistencia.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${site.name} — página inicial`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        "transition-opacity hover:opacity-80",
        className,
      )}
    >
      <LogoMark className="size-7 shrink-0" />
      <span className="text-[0.9375rem] leading-none tracking-tight">
        <span className="font-normal">Ordem</span>
        <span className="font-semibold">DEV</span>
      </span>
    </Link>
  );
}
