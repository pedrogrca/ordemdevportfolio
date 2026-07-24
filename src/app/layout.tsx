import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";

import "./globals.css";

/**
 * Tipografia: uma sans com personalidade + uma mono.
 *
 * Instrument Sans e uma grotesca contemporanea com detalhes proprios (o "a",
 * o "g") — foge do Inter que todo site usa, sem cair no exotico que atrapalha
 * leitura. Geist Mono cuida das etiquetas numeradas ("01 / SERVICOS") e dos
 * detalhes tecnicos: e o que amarra o conceito de "Ordem" no visual.
 *
 * Duas familias e o limite. Uma terceira so acrescentaria ruido.
 */
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    /** Paginas internas viram "Projeto X | Ordem DEV". */
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  /** Acompanha o tema para a barra do navegador no celular nao destoar. */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0614" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      // next-themes escreve a classe do tema no <html> antes da hidratacao;
      // sem isso o React acusa divergencia entre servidor e cliente.
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // O toggle so alterna claro/escuro. Habilitar "system" criaria um
          // terceiro estado invisivel na interface.
          enableSystem={false}
          disableTransitionOnChange
        >
          <SkipLink />
          <SiteHeader />
          {/* flex-1 empurra o rodape para o fim da tela mesmo em paginas
              curtas, como a de erro 404. */}
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
