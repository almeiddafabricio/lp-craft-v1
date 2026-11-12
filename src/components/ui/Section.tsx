import type { ReactNode } from "react";
import { Scissors } from "lucide-react";
import { cn } from "../../lib/utils";

export type Tone = "kraft" | "dark";

/** Linha de corte tracejada com tesoura, na divisa entre seções */
export function CutLine() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 -translate-y-1/2">
      <div className="border-t-2 border-dashed border-kraft-deep" />
      <span className="absolute left-[6%] top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-paper text-asphalt shadow-[0_3px_0_#9C8A66,0_8px_14px_-6px_rgba(0,0,0,.4)]">
        <Scissors className="h-[18px] w-[18px]" strokeWidth={2.4} />
      </span>
    </div>
  );
}

type SectionProps = {
  id?: string;
  tone?: Tone;
  cut?: boolean;
  labelledBy?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

/** Wrapper de seção: alterna fundo kraft / asfalto e adiciona a linha de corte */
export function Section({ id, tone = "kraft", cut = true, labelledBy, className, containerClassName, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-10 py-14 md:py-20",
        tone === "dark" ? "bg-asphalt-tex text-paper" : "bg-kraft-tex text-asphalt",
        className,
      )}
    >
      {cut && <CutLine />}
      <div className={cn("relative mx-auto max-w-6xl px-gutter", containerClassName)}>{children}</div>
    </section>
  );
}

type TitleProps = {
  id: string;
  children: ReactNode;
  /** Anotação manuscrita acima do título */
  note?: ReactNode;
  subtitle?: ReactNode;
  tone?: Tone;
  className?: string;
};

export function SectionTitle({ id, children, note, subtitle, tone = "kraft", className }: TitleProps) {
  return (
    <header className={cn("mx-auto mb-8 max-w-3xl text-center md:mb-12", className)}>
      {note && (
        <p className={cn("mb-2 -rotate-2 font-hand text-2xl md:text-3xl", tone === "dark" ? "text-marker" : "text-ink")}>
          {note}
        </p>
      )}
      <h2 id={id} className="text-[1.85rem] leading-[1.12] md:text-5xl md:leading-[1.08]">
        {children}
      </h2>
      {subtitle && (
        <p className={cn("mx-auto mt-4 max-w-2xl text-base md:text-lg", tone === "dark" ? "text-paper/80" : "text-asphalt/80")}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
