"use client";

import { useEffect, useState } from "react";

/**
 * Retorna o id da secao atualmente em foco na tela.
 *
 * Numa pagina longa de rolagem unica, destacar no menu a secao onde a pessoa
 * esta responde de graca a pergunta "onde eu estou?" e da acabamento de site
 * profissional. Sem isso, o menu e so uma lista de atalhos sem relacao com o
 * conteudo visivel.
 *
 * Usa IntersectionObserver em vez de ouvir o evento de scroll: o observer so
 * dispara quando uma secao cruza a faixa observada, entao nao roda codigo a
 * cada pixel rolado. A faixa fica na parte de cima da tela (-45% embaixo)
 * para a secao ser considerada "ativa" quando seu inicio chega ao topo, e nao
 * so quando ela toma a tela inteira.
 *
 * Este e um caso legitimo de useEffect: registrar e limpar uma assinatura de
 * API do navegador e exatamente para o que o hook existe.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pode haver mais de uma secao na faixa ao mesmo tempo. A que estiver
        // mais alta na pagina vence, para o destaque seguir a ordem de leitura.
        const visiveis = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visiveis[0]) {
          setActiveId(visiveis[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
