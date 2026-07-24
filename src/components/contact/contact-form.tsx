"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { budgetOptions, type BudgetOption } from "@/content/contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Formulario de contato.
 *
 * Decisao central: em vez de enviar e-mail por um servico externo, o formulario
 * monta uma mensagem estruturada e abre o WhatsApp com ela pronta. Para o
 * publico deste site — pequenas e medias empresas no Brasil — isso e melhor que
 * um formulario tradicional por tres razoes:
 *
 * 1. Funciona hoje, sem depender de dominio proprio nem de conta de e-mail
 *    transacional (o Resend so envia de dominio verificado, que ainda nao
 *    existe). Um formulario que "envia" para lugar nenhum e pior que nenhum.
 * 2. O contato chega no canal onde voces ja respondem, e chega qualificado:
 *    nome, empresa, necessidade e faixa de orcamento vem escritos.
 * 3. O visitante ganha confianca por ver exatamente o que sera enviado antes
 *    de enviar — nada some num backend anonimo.
 *
 * O campo de orcamento e o filtro comercial: separa quem esta pesquisando de
 * quem esta pronto para contratar.
 *
 * Quando houver dominio e conta de e-mail, da para adicionar envio por e-mail
 * em paralelo sem trocar este formulario — a montagem dos dados ja esta pronta.
 */

const fieldClass =
  "w-full rounded-lg border border-input bg-transparent px-3.5 py-2.5 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm";

export function ContactForm() {
  const [budget, setBudget] = useState<BudgetOption | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const need = String(data.get("need") ?? "").trim();

    // Monta a mensagem na ordem em que voces vao querer ler: quem, de onde,
    // o que precisa, quanto pode investir.
    const lines = [
      "Olá! Vim pelo site da Ordem DEV.",
      "",
      `*Nome:* ${name}`,
      // Linhas opcionais viram `null` quando vazias, e nao string vazia: assim
      // o filtro remove so o que nao foi preenchido, sem engolir as linhas em
      // branco que dao respiro a mensagem.
      company ? `*Empresa:* ${company}` : null,
      "",
      "*O que preciso:*",
      need,
      budget ? `\n*Orçamento:* ${budget}` : null,
    ].filter((line) => line !== null);

    const url = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    // Abre numa nova aba: nao tira o visitante do site, entao ele pode voltar
    // e revisar se quiser.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Seu nome <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Como podemos te chamar"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Empresa{" "}
            <span className="font-normal text-muted-foreground">
              (opcional)
            </span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nome da sua empresa"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="need" className="text-sm font-medium">
          O que você precisa resolver? <span className="text-primary">*</span>
        </label>
        <textarea
          id="need"
          name="need"
          required
          rows={4}
          placeholder="Conte, com suas palavras, o que trava no seu dia a dia. Não precisa saber o termo técnico."
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">
          Orçamento previsto{" "}
          <span className="font-normal text-muted-foreground">(opcional)</span>
        </legend>
        <div className="flex flex-wrap gap-2 pt-1">
          {budgetOptions.map((option) => {
            const active = budget === option;
            return (
              <button
                key={option}
                type="button"
                // Alterna: clicar de novo na faixa selecionada limpa a escolha,
                // porque o campo e opcional e nao deve prender o visitante numa
                // resposta.
                onClick={() => setBudget(active ? null : option)}
                aria-pressed={active}
                className={cn(
                  "rounded-lg border px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-input text-muted-foreground hover:border-border hover:text-foreground",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="pt-2">
        <Button type="submit" size="xl" className="w-full sm:w-auto">
          <WhatsAppIcon />
          Enviar pelo WhatsApp
          <ArrowRight />
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          O formulário abre o WhatsApp com sua mensagem pronta. Você confere e
          envia — nada é enviado sem você ver.
        </p>
      </div>
    </form>
  );
}
