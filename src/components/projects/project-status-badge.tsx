import { statusLabel, type ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Selo de andamento.
 *
 * Marcar um projeto como "em desenvolvimento" parece enfraquecer o portfolio,
 * mas faz o contrario: mostra que ha trabalho acontecendo agora e evita a
 * pergunta constrangedora — "isso ja esta no ar?" — no meio da negociacao.
 * Transparencia sobre o estagio custa pouco e vale muito para uma empresa
 * nova, que nao tem historico para oferecer no lugar.
 */
export function ProjectStatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const emAndamento = status === "em-desenvolvimento";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.6875rem] tracking-wide",
        emAndamento
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          emAndamento ? "bg-primary" : "bg-muted-foreground",
        )}
      />
      {statusLabel[status]}
    </span>
  );
}
