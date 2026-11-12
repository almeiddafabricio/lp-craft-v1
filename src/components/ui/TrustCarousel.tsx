import type { ComponentType } from "react";
import { cn } from "../../lib/utils";
import { BoltIcon, LockIcon, ShieldIcon, type TrustIconProps } from "./TrustIcons";


type TrustItem = { label: string; Icon: ComponentType<TrustIconProps> };

const ITEMS: TrustItem[] = [
  { label: "Compra segura", Icon: LockIcon },
  { label: "Acesso imediato", Icon: BoltIcon },
  { label: "Garantia de 7 dias", Icon: ShieldIcon },
];

/** Quantas vezes a lista se repete em cada metade do loop (para preencher a largura) */
const REPEAT = 3;

/**
 * Carrossel infinito de selos de confiança (usado abaixo do botão de compra do Hero).
 * Mesmo esquema do carrossel de modelos: lista duplicada + translateX(0 -> -50%).
 */
export function TrustCarousel({ className }: { className?: string }) {
  const half = Array.from({ length: REPEAT }, () => ITEMS).flat();
  const loop = [...half, ...half];

  return (
    <div className={cn("marquee marquee--chips", className)}>
      <ul className="marquee-track marquee-track--chips" aria-label="Garantias da compra">
        {loop.map(({ label, Icon }, i) => {
          const dup = i >= ITEMS.length;
          return (
            <li key={i} className="marquee-item marquee-item--chip" data-dup={dup} aria-hidden={dup || undefined}>
              <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-dashed border-kraft-deep/60 bg-paper px-4 py-2 text-[0.95rem] font-bold text-asphalt shadow-[0_3px_0_rgba(60,40,10,.18),0_8px_12px_-8px_rgba(60,40,10,.45)]">
                <Icon className="h-6 w-6 shrink-0" />
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
