import { cn } from "@/lib/utils";

/**
 * Largura maxima do conteudo, num lugar so.
 *
 * 1200px equilibra duas coisas: aproveita telas grandes sem esticar linhas de
 * texto alem do confortavel (o limite real de leitura fica nos blocos internos,
 * com `max-w-prose`). O respiro lateral cresce com a tela — 24px no celular,
 * 40px a partir do desktop.
 */
export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[75rem] px-6 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}
