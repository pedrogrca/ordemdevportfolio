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
 */
export function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative py-1 text-sm text-muted-foreground transition-colors",
        "hover:text-foreground focus-visible:text-foreground",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left",
        "after:scale-x-0 after:bg-primary after:transition-transform after:duration-200",
        "hover:after:scale-x-100 focus-visible:after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
