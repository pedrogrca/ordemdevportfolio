/**
 * Atalho "pular para o conteudo".
 *
 * Fica escondido ate receber foco pelo teclado. Sem ele, quem navega por
 * Tab (ou por leitor de tela) precisa percorrer a logo, cinco itens de menu,
 * o botao de tema e o CTA a cada carregamento de pagina antes de chegar ao
 * conteudo. E o primeiro elemento focavel do documento de proposito.
 */
export function SkipLink() {
  return (
    <a
      href="#conteudo"
      // Todo o estilo visual fica sob `focus:`. Se as classes de padding e
      // fundo ficassem soltas, elas venceriam as do `sr-only` na cascata e o
      // elemento ocuparia espaco no layout mesmo sem foco.
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
    >
      Pular para o conteúdo
    </a>
  );
}
