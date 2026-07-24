import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

/**
 * Imagem de compartilhamento (Open Graph / Twitter).
 *
 * E o cartao que aparece quando o link do site e colado no WhatsApp, no
 * Instagram ou no LinkedIn. Sem ele, o link vira um retangulo cinza sem graca
 * — e a primeira impressao da marca, num contexto onde ela sera compartilhada
 * justamente por quem ja gostou, seria ruim.
 *
 * Restricoes do motor (Satori): so flexbox, sem grid, e a mascara SVG da logo
 * nao renderiza. Por isso o simbolo aqui e reconstruido com aneis concentricos
 * — o mesmo motivo do fundo do Hero — em vez da espiral. A fonte e a Geist
 * Regular que o next/og ja traz embutida, entao a hierarquia vem de tamanho e
 * cor, nao de peso.
 */

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#2E0A4E";
const VIOLET = "#C084FC";
const FG = "#FAFAF9";
const MUTED = "#C9BEDA";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BRAND,
        padding: 72,
        color: FG,
        fontFamily: "Geist",
      }}
    >
      {/* Aneis concentricos no canto, ecoando a espiral da marca. */}
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -260,
          width: 720,
          height: 720,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[720, 560, 400, 240].map((d) => (
          <div
            key={d}
            style={{
              position: "absolute",
              width: d,
              height: d,
              borderRadius: d,
              border: `1px solid ${VIOLET}`,
              opacity: 0.22,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            width: 96,
            height: 96,
            borderRadius: 96,
            background: VIOLET,
            opacity: 0.32,
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: 12,
            border: `2px solid ${VIOLET}`,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: VIOLET,
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5 }}>
          <span>Ordem</span>
          <span style={{ color: VIOLET }}>DEV</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -1.5 }}>
          Tecnologia que coloca sua empresa em ordem.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: MUTED }}>
          Sistemas sob medida, automações e integrações.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 24,
          color: MUTED,
        }}
      >
        <span>Software house independente</span>
        <span style={{ color: VIOLET }}>·</span>
        <span>Natal, RN</span>
      </div>
    </div>,
    { ...size },
  );
}
