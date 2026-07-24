import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Link de navegacao com sublinhado que cresce a partir da esquerda.
 *
 * A microinteracao e de proposito discreta: 200ms, 1px, na cor de destaque.
 * O objetivo e sinalizar que o elemento responde ao mouse, nao chamar
 * atencao. Como o sublinhado e decorativo, quem pediu menos movimento no
 * sistema operacional recebe a mudanca de cor sem a animacao — a regra global
 * de `prefers-reduced-motion` zera a transicao.
 *
 * Quando `active`, o link fica com o sublinhado fixo e o texto na cor cheia:
 * e o menu indicando em qual secao a pessoa esta. `aria-current="location"`
 * anuncia o mesmo estado para leitores de tela, que nao enxergam o sublinhado.
 */
export function NavLink({
  href,
  children,
  className,
  onClick,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={cn(
        "relative py-1 text-sm transition-colors",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left",
        "after:bg-primary after:transition-transform after:duration-200",
        "hover:text-foreground focus-visible:text-foreground",
        "hover:after:scale-x-100 focus-visible:after:scale-x-100",
        active
          ? "text-foreground after:scale-x-100"
          : "text-muted-foreground after:scale-x-0",
        className,
      )}
    >
      {children}
    </Link>
  );
}
