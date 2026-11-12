import type { MouseEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { PLANOS_ID } from "../../config";
import { cn, scrollToPlanos } from "../../lib/utils";

type Props = {
  children: ReactNode;
  /** primary = verde 3D | outline = contorno verde (secundário) */
  variant?: "primary" | "outline";
  pulse?: boolean;
  /** Sem href: rola até #planos. Com href: link externo (ex.: checkout). */
  href?: string;
  /** Substitui o comportamento padrão do clique (ex.: abrir o upsell) */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  showArrow?: boolean;
};

export function CTAButton({ children, variant = "primary", pulse = false, href, onClick, className, showArrow = true }: Props) {
  const isScroll = !href;
  return (
    <a
      href={href ?? `#${PLANOS_ID}`}
      onClick={onClick ?? (isScroll ? scrollToPlanos : undefined)}
      rel={isScroll ? undefined : "noopener"}
      className={cn(
        variant === "primary" ? "btn-3d" : "btn-outline",
        pulse && "btn-pulse",
        isScroll && "w-full sm:w-auto",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="hidden h-5 w-5 shrink-0 min-[420px]:block" strokeWidth={3} aria-hidden="true" />}
    </a>
  );
}
