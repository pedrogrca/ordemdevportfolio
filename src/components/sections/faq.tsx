import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { faq } from "@/content/faq";

/**
 * Perguntas frequentes.
 *
 * Esta e, junto com o Hero, a secao que mais converte num site como este.
 * Preco, prazo e "e depois da entrega" sao objecoes que a pessoa carrega em
 * silencio; enquanto nao forem respondidas, ela adia a decisao. Responde-las
 * aqui e mais barato que responde-las uma a uma no WhatsApp.
 *
 * O accordion mantem so uma resposta aberta por vez, para a secao caber na
 * tela e a pessoa varrer as perguntas antes de escolher o que ler.
 *
 * O bloco JSON-LD descreve as perguntas em formato que o Google entende, o
 * que pode fazer as respostas aparecerem direto no resultado de busca. Ele
 * tambem garante que o conteudo das respostas fechadas exista no HTML — o
 * accordion so monta a resposta aberta.
 */

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function Faq() {
  return (
    <Section
      id="faq"
      index="05"
      label="DÚVIDAS"
      title="O que perguntam antes de fechar"
      description="As perguntas que aparecem em toda primeira conversa, respondidas aqui para você não precisar fazer."
    >
      <script
        type="application/ld+json"
        // Conteudo estatico e proprio; o escape de "<" evita que qualquer
        // texto futuro consiga fechar a tag script.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <Reveal className="min-w-0">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-base font-medium sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-muted-foreground text-pretty">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-2xl border bg-card p-6 sm:p-8 lg:sticky lg:top-28 lg:w-72">
            <p className="text-lg font-medium tracking-tight text-balance">
              Ficou uma dúvida que não está aqui?
            </p>
            <p className="mt-3 text-sm text-muted-foreground text-pretty">
              Manda a pergunta. Respondemos mesmo que a resposta seja “esse não
              é um caso para a gente”.
            </p>
            <WhatsAppCta size="lg" className="mt-6 w-full px-4">
              Perguntar no WhatsApp
            </WhatsAppCta>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
