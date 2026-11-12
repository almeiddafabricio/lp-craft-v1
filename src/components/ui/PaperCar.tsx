/**
 * Carrinho de papel low-poly (SVG decorativo).
 * Facetas em 3 tons simulam as dobras do papercraft; linhas tracejadas = dobras.
 */
type Palette = { light: string; mid: string; dark: string };

const PALETTES = {
  red: { light: "#FF7A84", mid: "#E63946", dark: "#9B1C25" },
  yellow: { light: "#FFE08A", mid: "#FFC93C", dark: "#C08A16" },
  blue: { light: "#5C7FA8", mid: "#1E3A5F", dark: "#12263F" },
  green: { light: "#4ADE80", mid: "#16A34A", dark: "#0F6B32" },
} satisfies Record<string, Palette>;

export type CarColor = keyof typeof PALETTES;

type Props = {
  color?: CarColor;
  variant?: "coupe" | "pickup";
  className?: string;
};

function hex(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, k) => {
    const a = ((30 + 60 * k) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g>
      <polygon points={hex(cx, 62, 11.5)} fill="#1D1F24" />
      <polygon points={hex(cx, 62, 5)} fill="#C9CCD3" />
      <polygon points={hex(cx, 62, 2)} fill="#6A6D75" />
    </g>
  );
}

export function PaperCar({ color = "red", variant = "coupe", className }: Props) {
  const p = PALETTES[color];
  const fold = { stroke: "#fff", strokeOpacity: 0.55, strokeWidth: 1.2, strokeDasharray: "3 2.5", fill: "none" };

  return (
    <svg viewBox="0 0 164 80" className={className} aria-hidden="true" focusable="false">
      <ellipse cx="82" cy="73" rx="66" ry="5" fill="rgba(40,25,5,.22)" />
      {/* lateral inferior */}
      <polygon points="10,46 154,46 152,58 146,63 16,63 10,58" fill={p.dark} />

      {variant === "coupe" ? (
        <>
          <polygon points="14,38 40,34 120,34 148,38 154,46 10,46" fill={p.mid} />
          <polygon points="120,34 148,38 154,46 130,43" fill={p.light} opacity=".55" />
          <polygon points="52,34 68,20 100,20 120,34" fill={p.light} />
          <polygon points="57,33 69.5,22.5 82,22.5 82,33" fill="#BFD7EA" />
          <polygon points="86,33 86,22.5 99,22.5 113,33" fill="#9DBCD8" />
          <polyline points="52,34 68,20 100,20 120,34" {...fold} />
        </>
      ) : (
        <>
          <polygon points="10,31 72,31 72,46 10,46" fill={p.mid} />
          <polygon points="12,31 70,31 70,35 12,35" fill={p.dark} opacity=".6" />
          <polygon points="72,34 122,34 150,38 154,46 72,46" fill={p.mid} />
          <polygon points="122,34 150,38 154,46 132,43" fill={p.light} opacity=".55" />
          <polygon points="76,34 82,16 110,16 122,34" fill={p.light} />
          <polygon points="84,32 87.5,19.5 108,19.5 116,32" fill="#BFD7EA" />
          <polyline points="76,34 82,16 110,16 122,34" {...fold} />
        </>
      )}

      <polyline points="10,46 154,46" {...fold} />
      {/* farol e lanterna */}
      <polygon points="146,39.5 152,41.5 153,45 147,44.5" fill="#FFC93C" />
      <polygon points="10.5,41 15,39.5 15.5,44.5 10.5,45" fill="#FF6B75" />
      <Wheel cx={44} />
      <Wheel cx={122} />
    </svg>
  );
}
