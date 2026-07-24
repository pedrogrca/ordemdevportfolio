import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * CTA principal do site, reutilizado no header, no hero, no rodape e na secao
 * de contato.
 *
 * O WhatsApp e o CTA primario de proposito: para pequena e media empresa no
 * Brasil ele converte muito mais que formulario. O formulario continua
 * existindo como alternativa para quem prefere escrever com calma, mas o
 * caminho de menor atrito precisa estar sempre a um clique.
 *
 * O link ja leva a mensagem preenchida — o visitante nao precisa pensar em
 * como comecar a conversa, que e onde a maioria desiste.
 */
export function WhatsAppCta({
  children = "Falar no WhatsApp",
  size = "xl",
  variant = "default",
  className,
}: {
  children?: React.ReactNode;
  size?: "default" | "lg" | "xl";
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Button asChild size={size} variant={variant} className={cn(className)}>
      <a
        href={whatsappUrl}
        target="_blank"
        // noreferrer junto de noopener: alem da brecha de seguranca do
        // window.opener, evita vazar a URL de origem para o WhatsApp.
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  );
}
