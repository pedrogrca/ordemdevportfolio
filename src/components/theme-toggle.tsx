"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

/**
 * Alternador de tema.
 *
 * O tema escuro e o padrao, mas o toggle nao e opcional: parte do publico —
 * sobretudo donos de empresa fora do meio tech — nao consegue ler
 * confortavelmente em fundo escuro. Perder um cliente por teimosia de design
 * seria caro.
 *
 * Os dois icones sao sempre renderizados e a visibilidade e resolvida em CSS,
 * a partir da classe `dark` que o next-themes escreve no <html>. Isso evita o
 * classico `useState(mounted)` + `useEffect`, que causa render em cascata e
 * um piscar do botao na primeira pintura. O servidor e o cliente produzem o
 * mesmo HTML — quem decide o que aparece e a folha de estilo.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      // Rotulo fixo: o estado atual do tema ja e visivel pelo icone, e um
      // rotulo que muda entre servidor e cliente reintroduziria o problema.
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className="text-muted-foreground hover:text-foreground"
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </Button>
  );
}
