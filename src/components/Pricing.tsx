import { useCallback, useState } from "react";
import { Check, CreditCard, QrCode, X } from "lucide-react";
import { CHECKOUT_BASICO, CHECKOUT_PREMIUM, PLANOS_ID, PRICES } from "../config";
import { BONUSES } from "../data/content";
import { cn, formatBRL, splitPrice } from "../lib/utils";
import { UpsellModal } from "./UpsellModal";
import { CTAButton } from "./ui/CTAButton";
import { GlueTab, Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { SecurePurchase } from "./ui/TrustIcons";

type Feature = { label: string; included: boolean; anchor?: number };

/** Benefício comum aos dois planos */
const WEEKLY_UPDATES: Feature = { label: "Atualizações semanais com novos moldes", included: true };

const BASIC_FEATURES: Feature[] = [
  { label: "+300 moldes de carros 3D", included: true },
  WEEKLY_UPDATES,
  { label: "Biblioteca online organizada", included: true },
  { label: "Acesso imediato", included: true },
  { label: "Garantia de 7 dias", included: true },
  ...BONUSES.map((b) => ({ label: `Bônus ${b.n}: ${b.short}`, included: false, anchor: b.price })),
];

const PREMIUM_FEATURES: Feature[] = [
  { label: "+300 moldes de carros 3D", included: true },
  WEEKLY_UPDATES,
  { label: "Biblioteca online organizada", included: true },
  { label: "Acesso imediato e vitalício", included: true },
  ...BONUSES.map((b) => ({ label: `Bônus ${b.n}: ${b.short}`, included: true, anchor: b.price })),
  { label: "Garantia de 7 dias", included: true },
];

function FeatureList({ items }: { items: Feature[] }) {
  return (
    <ul className="space-y-2.5 text-left">
      {items.map((f) => (
        <li key={f.label} className={cn("flex items-start gap-3", !f.included && "opacity-40")}>
          <span
            className={cn(
              "mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full text-white",
              f.included ? "bg-bonus" : "bg-asphalt/40",
            )}
          >
            {f.included ? (
              <Check className="h-3.5 w-3.5" strokeWidth={3.5} aria-hidden="true" />
            ) : (
              <X className="h-3.5 w-3.5" strokeWidth={3.5} aria-hidden="true" />
            )}
          </span>
          <span className="min-w-0 text-[0.97rem] font-semibold leading-snug">
            {f.included ? (
              f.label
            ) : (
              <>
                <span className="sr-only">Não incluso: </span>
                <s>
                  {f.label} ({formatBRL(f.anchor ?? 0)})
                </s>
              </>
            )}
            {/* Bônus incluso: preço riscado + GRÁTIS sempre na linha de baixo (alinhado) */}
            {f.included && f.anchor !== undefined && (
              <span className="mt-1 flex items-center gap-2">
                <s className="text-[0.82rem] font-medium text-asphalt/60">{formatBRL(f.anchor)}</s>
                <span className="stamp bg-bonus-dark px-1.5 py-0.5 text-[0.65rem] text-white">Grátis</span>
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Price({ from, to, highlight = false }: { from: number; to: number; highlight?: boolean }) {
  const { int, cents } = splitPrice(to);
  const off = Math.round((1 - to / from) * 100);
  return (
    <div className="text-center">
      <p className="text-[0.92rem] font-semibold text-asphalt/70">
        De <s className="decoration-race-deep decoration-2">{formatBRL(from)}</s> por apenas
      </p>
      <p className={cn("mt-1 flex items-start justify-center font-display leading-none", highlight ? "text-race-deep" : "text-asphalt")}>
        <span className="mt-1.5 text-xl">R$</span>
        <span className="text-[3.9rem] tracking-tight">{int}</span>
        <span className="mt-1.5 text-[1.6rem]">,{cents}</span>
      </p>
      <span className="stamp mt-2 bg-marker text-asphalt">{off}% OFF</span>
    </div>
  );
}

/** 9. PLANOS */
export function Pricing() {
  // Upsell do Premium: só abre quando o cliente clica em "QUERO O BÁSICO"
  const [upsellOpen, setUpsellOpen] = useState(false);
  const closeUpsell = useCallback(() => setUpsellOpen(false), []);

  return (
    <Section id={PLANOS_ID} labelledBy="planos-title">
      <SectionTitle id="planos-title" note="último passo pra sua garagem de papel">
        Escolha seu plano e <span className="marker">comece hoje</span>
      </SectionTitle>

      <div className="mx-auto flex max-w-[54rem] flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-10">
        {/* ---------- BÁSICO (segundo no mobile) ---------- */}
        <Reveal className="order-2 lg:order-1 lg:flex-1">
          <article
            aria-labelledby="plano-basico"
            className="paper mx-auto max-w-[400px] rotate-[-0.6deg] px-5 pb-5 pt-7 md:px-7"
          >
            <GlueTab position="tl" />
            <h3 id="plano-basico" className="text-center text-[1.6rem]">
              Plano Básico
            </h3>
            <div className="fold-line my-4" aria-hidden="true" />
            <Price from={PRICES.basico.de} to={PRICES.basico.por} />
            <div className="fold-line my-5" aria-hidden="true" />
            <FeatureList items={BASIC_FEATURES} />

            <div className="mt-6">
              {/* Abre o upsell; quem recusar segue para CHECKOUT_BASICO (src/config.ts) */}
              <CTAButton
                variant="outline"
                href={CHECKOUT_BASICO}
                onClick={(e) => {
                  e.preventDefault();
                  setUpsellOpen(true);
                }}
                className="w-full"
                showArrow={false}
              >
                QUERO O BÁSICO
              </CTAButton>
              <SecurePurchase className="mt-3" />
            </div>
          </article>
        </Reveal>

        {/* ---------- PREMIUM (primeiro no mobile, destaque) ---------- */}
        <Reveal className="order-1 lg:order-2 lg:flex-[1.06]" delay={0.1}>
          <article
            aria-labelledby="plano-premium"
            className="paper relative mx-auto max-w-[400px] rotate-[0.6deg] border-[3px] border-race px-5 pb-5 pt-14 md:px-7 md:pt-11 lg:scale-105"
            style={{
              boxShadow:
                "0 0 0 6px rgba(230,57,70,.12), 0 10px 0 -2px #9B1C25, 0 30px 50px -14px rgba(155,28,37,.55), 0 0 60px -10px rgba(255,201,60,.6)",
            }}
          >
            <span className="stamp absolute -top-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-race-dark px-4 py-2 text-sm text-white shadow-[0_4px_0_#9B1C25]">
              <span aria-hidden="true">🔥</span> Mais escolhido
            </span>
            <span className="absolute -right-3 top-5 z-10 rotate-[10deg] rounded-md bg-marker px-2.5 py-1.5 font-display text-[0.68rem] uppercase leading-tight text-asphalt shadow-[0_3px_0_#C08A16] md:-right-6">
              Melhor
              <br />
              custo-benefício
            </span>
            <Tape color="yellow" className="-left-5 top-3 rotate-[-38deg]" />

            <h3 id="plano-premium" className="text-center text-[1.6rem] md:text-[1.75rem]">
              Plano Premium
            </h3>
            <div className="fold-line my-4" aria-hidden="true" />
            <Price from={PRICES.premium.de} to={PRICES.premium.por} highlight />
            <div className="fold-line my-5" aria-hidden="true" />
            <FeatureList items={PREMIUM_FEATURES} />

            <div className="mt-7">
              {/* TROCAR: CHECKOUT_PREMIUM em src/config.ts */}
              <CTAButton href={CHECKOUT_PREMIUM} pulse className="w-full sm:text-[1.3rem]">
                QUERO O PREMIUM
              </CTAButton>
              <SecurePurchase className="mt-3" />
            </div>
          </article>
        </Reveal>
      </div>

      {/* Formas de pagamento */}
      <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-asphalt/85">
        <li className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-bonus-dark" aria-hidden="true" /> Pix
        </li>
        <li className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-ink" aria-hidden="true" /> Cartão de crédito
        </li>
      </ul>

      <UpsellModal open={upsellOpen} onClose={closeUpsell} />
    </Section>
  );
}
