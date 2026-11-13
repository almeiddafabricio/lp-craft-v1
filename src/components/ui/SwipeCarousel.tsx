import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn, prefersReducedMotion } from "../../lib/utils";

type Props = {
  children: ReactNode;
  /** Classes da <ul>: carrossel com snap no celular, grid a partir do md */
  listClassName: string;
  /** Nome acessível da lista (ex.: "Depoimentos de clientes") */
  label: string;
  /** Rótulos das setas (ex.: "Ver depoimento anterior") */
  prevLabel: string;
  nextLabel: string;
  hint?: string;
};

const ARROW_BTN =
  "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper text-asphalt " +
  "shadow-[0_3px_0_#C9B98F,0_8px_16px_-6px_rgba(0,0,0,.6)] transition-opacity duration-200 " +
  "active:translate-y-[calc(-50%_+_2px)] disabled:pointer-events-none disabled:opacity-0 md:hidden";

/**
 * Carrossel de deslizar (celular) com setas e a dica "Passe para o lado".
 * No desktop a lista vira grid, e setas e dica somem.
 */
export function SwipeCarousel({ children, listClassName, label, prevLabel, nextLabel, hint = "Passe para o lado" }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Avança/volta um card (o snap da lista alinha no centro)
  const go = (dir: 1 | -1) => {
    const el = listRef.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <div>
      <p
        className="mb-1 flex items-center justify-center gap-2 font-hand text-[1.6rem] font-bold leading-none text-paper/85 md:hidden"
        aria-hidden="true"
      >
        {hint}
        <ArrowRight className="h-5 w-5 motion-safe:animate-nudge" strokeWidth={2.5} />
      </p>
      <div className="relative">
        <ul ref={listRef} className={cn("no-scrollbar", listClassName)} aria-label={label}>
          {children}
        </ul>
        <button type="button" onClick={() => go(-1)} disabled={atStart} aria-label={prevLabel} className={cn(ARROW_BTN, "-left-3")}>
          <ChevronLeft className="h-6 w-6" strokeWidth={2.75} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(1)} disabled={atEnd} aria-label={nextLabel} className={cn(ARROW_BTN, "-right-3")}>
          <ChevronRight className="h-6 w-6" strokeWidth={2.75} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
