import type { CSSProperties } from "react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

// Nomes de classe literais (o Tailwind não enxerga classes montadas com template string)
const TAPE_CLASS = {
  yellow: "tape",
  blue: "tape tape--blue",
  red: "tape tape--red",
  white: "tape tape--white",
} as const;

const GLUE_CLASS = {
  tl: "glue-tab glue-tab--tl",
  tr: "glue-tab glue-tab--tr",
  r: "glue-tab glue-tab--r",
  l: "glue-tab glue-tab--l",
} as const;

/** Fita adesiva semitransparente "colando" cards e imagens */
export function Tape({
  color = "yellow",
  className,
  style,
}: {
  color?: keyof typeof TAPE_CLASS;
  className?: string;
  style?: CSSProperties;
}) {
  return <span aria-hidden="true" className={cn(TAPE_CLASS[color], className)} style={style} />;
}

/** Aba de cola decorativa (como nos moldes de papercraft) */
export function GlueTab({ position = "tl" }: { position?: keyof typeof GLUE_CLASS }) {
  return <span aria-hidden="true" className={GLUE_CLASS[position]} />;
}

/** Seta manuscrita (caneta) */
export function HandArrow({ className, variant = "curve" }: { className?: string; variant?: "curve" | "down" | "loop" }) {
  const paths = {
    curve: { d: "M6 12 C 34 2, 66 14, 72 48", head: "M60 40 L72 50 L79 36" },
    down: { d: "M40 4 C 22 22, 54 34, 38 62", head: "M28 52 L38 64 L48 53" },
    loop: { d: "M6 40 C 20 6, 52 4, 46 26 C 42 40, 26 30, 40 18 C 52 8, 70 20, 76 44", head: "M64 38 L76 47 L80 33" },
  }[variant];
  return (
    <svg viewBox="0 0 84 68" className={className} aria-hidden="true" focusable="false">
      <path d={paths.d} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={paths.head} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Rabisco de sublinhado manuscrito */
export function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M3 9 C 40 3, 80 4, 120 6 S 180 9, 197 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** 5 estrelas */
export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} role="img" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-[1.1em] w-[1.1em] fill-marker text-[#C08A16]" strokeWidth={1.5} aria-hidden="true" />
      ))}
    </span>
  );
}
