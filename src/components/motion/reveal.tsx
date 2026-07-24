"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Entrada padrao de conteudo: aparece subindo alguns pixels.
 *
 * Existe como componente unico para que TODA a animacao do site venha da
 * mesma curva, da mesma duracao e da mesma distancia. Animacao inconsistente
 * e o que faz um site parecer montado por pessoas diferentes.
 *
 * Tres decisoes deliberadas:
 *
 * - `once: true`. O conteudo anima uma vez. Reanimar a cada rolagem irrita
 *   quem sobe e desce a pagina relendo algo.
 * - 12px de deslocamento, nao 40. O objetivo e sugerir que o conteudo chegou,
 *   nao encenar uma entrada.
 * - Quem configurou "reduzir movimento" no sistema recebe o conteudo pronto,
 *   sem wrapper de animacao. Nao e uma versao degradada: e a mesma pagina sem
 *   o movimento.
 *
 * Sobre `immediate`: qualquer coisa que ja esteja visivel no carregamento —
 * o Hero, essencialmente — precisa animar na montagem, nao ao entrar na tela.
 * Esperar o IntersectionObserver para conteudo que ja esta na tela cria um
 * modo de falha grave: se o observer nao disparar, o bloco fica preso em
 * opacidade zero e a primeira coisa que o visitante ve e uma pagina em
 * branco. Acima da dobra, `immediate` nao e otimizacao, e seguranca.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Anima na montagem em vez de esperar entrar na tela. Use acima da dobra. */
  immediate?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const visivel = { opacity: 1, y: 0 };

  return (
    <motion.div
      // Marcador usado pela regra dentro de <noscript> no layout: sem
      // JavaScript, o Motion deixa o `initial` inline no HTML e o conteudo
      // ficaria invisivel para sempre. A regra devolve a opacidade.
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 12 }}
      {...(immediate
        ? { animate: visivel }
        : {
            whileInView: visivel,
            viewport: { once: true, margin: "0px 0px -12% 0px" },
          })}
      transition={{
        duration: 0.55,
        delay,
        // easeOutExpo: rapido no inicio, desacelera no fim. Da a sensacao de
        // algo que assenta, em vez de algo que e empurrado.
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
