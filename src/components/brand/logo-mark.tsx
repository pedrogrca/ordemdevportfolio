import { cn } from "@/lib/utils";

/**
 * Simbolo da Ordem DEV: a espiral.
 *
 * O arquivo original e um traco automatico e vem *negativo* — um retangulo
 * preenchido com a espiral vazada. Para usar no header eu preciso do oposto:
 * a espiral pintada sobre fundo transparente.
 *
 * A solucao e uma mascara. Onde a mascara e branca, o preenchimento aparece:
 *
 *   retangulo branco  -> tudo visivel
 *   + paths em preto  -> apaga o fundo e os vaos internos da espiral
 *   = sobra so a espiral
 *
 * Pintando com `currentColor`, o simbolo herda a cor do texto: fica claro no
 * tema escuro e roxo no tema claro sem precisar de dois arquivos.
 *
 * O viewBox e um recorte quadrado calculado sobre o bounding box real do
 * desenho — o arquivo original tem proporcao 4:3 com muita folga em volta.
 */

/** O id e fixo de proposito: todas as instancias sao identicas, entao
 *  reaproveitar a mascara e correto e mantem o componente sem estado. */
const MASK_ID = "ordem-logo-mask";

const VIEW_BOX = { x: 473.35, y: 273.87, size: 503.03 };

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`${VIEW_BOX.x} ${VIEW_BOX.y} ${VIEW_BOX.size} ${VIEW_BOX.size}`}
      className={cn("size-8", className)}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        {/* x/y/width/height sao obrigatorios aqui. Sem eles a mascara assume
            -10%/120% do viewport ancorados na origem (0,0), e como este
            viewBox comeca em 473,274 quase todo o desenho fica fora da area
            da mascara e simplesmente nao pinta. */}
        <mask
          id={MASK_ID}
          maskUnits="userSpaceOnUse"
          x={VIEW_BOX.x}
          y={VIEW_BOX.y}
          width={VIEW_BOX.size}
          height={VIEW_BOX.size}
        >
          <rect
            x={VIEW_BOX.x}
            y={VIEW_BOX.y}
            width={VIEW_BOX.size}
            height={VIEW_BOX.size}
            fill="#fff"
          />
          <g
            transform="translate(0,1086) scale(0.1,-0.1)"
            fill="#000"
            fillRule="evenodd"
          >
            <path d="M0 5430 l0 -5430 7240 0 7240 0 0 5430 0 5430 -7240 0 -7240 0 0 -5430z m7538 2429 c521 -58 993 -294 1377 -690 265 -272 432 -547 550 -905 78 -235 124 -563 110 -784 -30 -497 -160 -902 -404 -1267 -109 -162 -124 -172 -286 -184 -216 -16 -465 -83 -654 -176 -53 -27 -179 -104 -281 -172 -338 -225 -551 -305 -890 -332 -421 -34 -863 94 -1225 354 -483 347 -806 885 -896 1492 -24 161 -26 480 -4 630 38 269 110 494 237 750 345 690 1022 1172 1798 1280 118 16 438 19 568 4z" />
            <path d="M7026 7474 c-454 -61 -862 -265 -1171 -585 -161 -166 -256 -301 -359 -510 -357 -722 -236 -1577 305 -2142 239 -251 528 -416 843 -483 173 -36 433 -34 601 6 384 90 703 343 865 685 118 250 149 564 80 813 -54 195 -184 398 -328 515 -178 143 -357 209 -572 209 -392 1 -709 -237 -801 -602 -40 -156 -14 -340 68 -479 134 -228 439 -331 673 -225 65 30 90 51 90 75 0 30 -17 31 -83 8 -153 -54 -357 1 -463 124 -117 138 -146 337 -74 512 28 67 46 92 109 156 112 112 226 159 384 159 262 0 489 -171 578 -435 34 -99 34 -293 1 -410 -68 -236 -212 -410 -421 -511 -113 -54 -204 -74 -343 -74 -149 0 -245 22 -383 90 -530 258 -686 927 -340 1460 167 258 446 444 760 506 120 25 356 25 477 1 560 -111 992 -580 1069 -1162 22 -165 -1 -435 -52 -606 -23 -80 -24 -101 -4 -139 21 -41 67 -62 136 -62 85 0 155 19 187 52 36 36 152 244 195 350 69 168 114 344 137 530 13 110 13 372 -1 480 -72 585 -382 1078 -886 1408 -366 239 -841 346 -1277 286z" />
          </g>
        </mask>
      </defs>

      <rect
        x={VIEW_BOX.x}
        y={VIEW_BOX.y}
        width={VIEW_BOX.size}
        height={VIEW_BOX.size}
        fill="currentColor"
        mask={`url(#${MASK_ID})`}
      />
    </svg>
  );
}
