"use client";

import { motion, useReducedMotion } from "motion/react";

import { LogoMark } from "@/components/brand/logo-mark";

/**
 * Fundo do Hero.
 *
 * Por que nao ha mockup de sistema aqui: um print de painel generico —
 * graficos falsos, nomes inventados — e reconhecivel a um quilometro e
 * comunica exatamente o oposto do que o site precisa comunicar. Com um
 * projeto real no portfolio, a imagem honesta e a propria marca.
 *
 * A composicao e a espiral ampliada com aneis concentricos saindo dela: e o
 * simbolo virando estrutura, que e o que o nome "Ordem" promete. Os aneis se
 * desenham uma vez na entrada e param. Nada fica em movimento perpetuo, que
 * rouba atencao do titulo — e o titulo e o que precisa ser lido.
 */

const RINGS = [
  { r: 190, delay: 0.1 },
  { r: 270, delay: 0.2 },
  { r: 360, delay: 0.3 },
  { r: 470, delay: 0.4 },
];

export function HeroBackdrop() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* A mascara apaga a composicao nas bordas, para o fundo terminar em
          nada em vez de ser cortado pela borda da secao. */}
      <div className="absolute top-1/2 left-1/2 aspect-square w-[min(140vw,68rem)] -translate-x-1/2 -translate-y-[52%] [mask-image:radial-gradient(closest-side,black,transparent)]">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute inset-0 size-full text-primary"
        >
          {RINGS.map((ring) => (
            <motion.circle
              key={ring.r}
              cx="500"
              cy="500"
              r={ring.r}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity={0.18}
              initial={
                prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }
              }
              animate={
                prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }
              }
              transition={{
                duration: 1.6,
                delay: ring.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </svg>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={
            prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }
          }
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <LogoMark className="w-[34%] text-primary/[0.13] dark:text-primary/[0.16]" />
        </motion.div>
      </div>
    </div>
  );
}
