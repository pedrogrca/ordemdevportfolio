"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

/**
 * Indica se a pagina ja saiu do topo.
 *
 * `useSyncExternalStore` e a ferramenta certa aqui: a posicao do scroll e
 * estado que vive fora do React. A alternativa comum (`useState` +
 * `useEffect`) exige uma leitura inicial dentro do efeito, que dispara render
 * em cascata e faz o header piscar na primeira pintura.
 *
 * O retorno e booleano, entao o React so re-renderiza quando o valor vira —
 * nao a cada evento de scroll.
 */
export function useScrolled(threshold = 8) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    // No servidor a pagina esta sempre no topo.
    () => false,
  );
}
