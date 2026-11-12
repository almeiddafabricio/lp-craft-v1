import { useEffect, useRef } from "react";
import { Check, Gift, X } from "lucide-react";
import { CHECKOUT_BASICO, CHECKOUT_PREMIUM_OFERTA, PRICES } from "../config";
import { BONUSES } from "../data/content";
import { formatBRL } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { Tape } from "./ui/Decor";
import { SecurePurchase } from "./ui/TrustIcons";

type Props = {
  open: boolean;
  onClose: () => void;
};

/**
 * Upsell: aparece SÓ quando o cliente clica em "QUERO O BÁSICO".
 * - "QUERO A OFERTA"  -> checkout do Premium com preço especial (CHECKOUT_PREMIUM_OFERTA)
 * - "Não, obrigado"   -> segue para o checkout do Básico (CHECKOUT_BASICO)
 * Usa <dialog> nativo: foco preso no pop-up, Esc fecha, clique fora fecha.
 */
export function UpsellModal({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const de = PRICES.premium.por;
  const por = PRICES.ofertaPremium;
  const diferenca = por - PRICES.basico.por;

  // Abre/fecha o <dialog> conforme o estado
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden"; // trava a rolagem da página
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Sincroniza o estado quando fecha por Esc, pelo X ou clicando fora
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleClose = () => {
      document.documentElement.style.overflow = "";
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="upsell-title"
      className="upsell-dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) close(); // clique no fundo escuro
      }}
    >
      <div className="relative pt-5">
        <span className="stamp absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap bg-race-dark px-3.5 py-1.5 text-sm text-white shadow-[0_3px_0_#9B1C25]">
          <Gift className="h-4 w-4" aria-hidden="true" /> Oferta especial
        </span>
        <Tape color="yellow" className="-left-4 top-6 z-10 rotate-[-35deg]" />

        <div className="paper max-h-[calc(100dvh-72px)] overflow-y-auto px-5 pb-4 pt-9 text-center sm:px-7">
          <button
            type="button"
            onClick={close}
            aria-label="Fechar oferta"
            className="absolute right-1.5 top-1.5 grid h-11 w-11 place-items-center rounded-full text-asphalt/60 transition-colors hover:bg-asphalt/5 hover:text-asphalt"
          >
            <X className="h-5 w-5" strokeWidth={2.6} aria-hidden="true" />
          </button>

          <p className="-rotate-2 font-hand text-[1.7rem] font-bold leading-none text-ink">Espera! Antes de continuar…</p>
          <h2 id="upsell-title" className="mt-3 text-[1.4rem] leading-tight sm:text-[1.55rem]">
            Leve o <span className="marker">Plano Premium</span> com os 3 bônus por apenas
          </h2>

          <p className="mt-3 flex items-baseline justify-center gap-2.5">
            <s className="text-base font-semibold text-asphalt/60">{formatBRL(de)}</s>
            <span className="font-display text-[2.6rem] leading-none text-bonus-dark">{formatBRL(por)}</span>
          </p>
          <p className="mt-1.5 text-sm font-semibold text-asphalt/75">
            Só {formatBRL(diferenca)} a mais que o Plano Básico
          </p>

          <div className="fold-line my-4" aria-hidden="true" />

          <ul className="space-y-2 text-left">
            {BONUSES.map((b) => (
              <li key={b.n} className="flex items-center gap-2.5 text-[0.95rem] font-semibold leading-snug">
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-bonus text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3.5} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  Bônus {b.n}: {b.short}
                </span>
                <span className="stamp shrink-0 bg-bonus-dark px-1.5 py-0.5 text-[0.65rem] text-white">Grátis</span>
              </li>
            ))}
          </ul>

          {/* TROCAR: CHECKOUT_PREMIUM_OFERTA em src/config.ts */}
          <CTAButton href={CHECKOUT_PREMIUM_OFERTA} pulse className="mt-6 w-full" showArrow={false}>
            QUERO A OFERTA
          </CTAButton>
          <SecurePurchase className="mt-3" />

          {/* Recusar: segue para o checkout do Básico */}
          <a
            href={CHECKOUT_BASICO}
            rel="noopener"
            className="mt-1 inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-asphalt/70 underline decoration-dotted underline-offset-4 hover:text-asphalt"
          >
            Não, obrigado. Quero só o Básico por {formatBRL(PRICES.basico.por)}
          </a>
        </div>
      </div>
    </dialog>
  );
}
