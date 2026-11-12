import { BONUSES, BONUS_TOTAL } from "../data/content";
import { formatBRL, paperRotation } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { TiltCard } from "./ui/TiltCard";

/** Laço de presente low-poly (papel dobrado) */
function GiftBow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 56" className={className} aria-hidden="true" focusable="false">
      <polygon points="60,44 14,8 4,34" fill="#FFC93C" />
      <polygon points="60,44 4,34 22,50" fill="#C08A16" />
      <polygon points="60,44 14,8 34,22" fill="#FFE08A" />
      <polygon points="60,44 106,8 116,34" fill="#FFC93C" />
      <polygon points="60,44 116,34 98,50" fill="#C08A16" />
      <polygon points="60,44 106,8 86,22" fill="#FFE08A" />
      <polygon points="50,36 70,36 74,52 46,52" fill="#E0A21F" />
    </svg>
  );
}

/** 7. BÔNUS */
export function Bonus() {
  return (
    <Section labelledBy="bonus-title">
      <SectionTitle
        id="bonus-title"
        note="presente pra quem escolhe o Premium"
        subtitle={
          <span className="stamp bg-race-dark px-3 py-1.5 text-sm text-white shadow-[0_3px_0_#9B1C25]">
            Exclusivos do Plano Premium
          </span>
        }
      >
        E você ainda recebe <span className="marker">3 bônus especiais</span>{" "}
        <span aria-hidden="true">🎁</span>
      </SectionTitle>

      <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
        {BONUSES.map((bonus, i) => (
          <li key={bonus.n}>
            <Reveal delay={i * 0.12} y={40}>
              <TiltCard max={6}>
                <article className="relative mx-auto max-w-[340px] pt-9" style={{ rotate: `${paperRotation(i + 2)}deg` }}>
                  <GiftBow className="tilt-pop absolute left-1/2 top-0 z-10 w-28 -translate-x-1/2" />
                  {/* tampa da caixa */}
                  <div className="relative z-[2] -mx-2 h-11 rounded-md bg-race shadow-[0_5px_0_#9B1C25,0_10px_16px_-8px_rgba(0,0,0,.4)]">
                    <span className="absolute inset-y-0 left-1/2 w-9 -translate-x-1/2 bg-marker shadow-[inset_2px_0_0_rgba(0,0,0,.08),inset_-2px_0_0_rgba(0,0,0,.08)]" />
                    <span className="stamp absolute left-3 top-1/2 -translate-y-1/2 bg-asphalt px-2 text-[0.72rem] text-marker">
                      Bônus {bonus.n}
                    </span>
                  </div>
                  {/* corpo da caixa */}
                  <div className="paper overflow-hidden rounded-t-none pb-5">
                    {/* Prévia da folha de moldes do bônus (quadrada, WebP 800x800) */}
                    <div className="aspect-square border-b border-dashed border-kraft-deep/40 bg-white">
                      <img
                        src={bonus.image}
                        alt={`Prévia dos moldes do bônus: ${bonus.title}`}
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative z-[2] px-3 pt-4 text-center">
                      <h3 className="text-[1.05rem] leading-tight md:text-lg">{bonus.title}</h3>
                      <p className="mt-1.5 text-[0.95rem] text-asphalt/80">{bonus.description}</p>
                      <div className="fold-line my-3" aria-hidden="true" />
                      <p className="text-sm font-semibold text-asphalt/70">
                        De <s className="text-race-deep decoration-2">{formatBRL(bonus.price)}</s> por
                      </p>
                      <p className="relative mt-1 inline-flex items-center gap-3">
                        <span className="font-display text-[2.2rem] leading-none text-bonus">R$ 0,00</span>
                        <span className="stamp rotate-[-8deg] bg-bonus-dark text-white shadow-[0_3px_0_#0F6B32]">Grátis</span>
                      </p>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-12">
        <div className="mx-auto flex max-w-3xl -rotate-1 flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-lg bg-asphalt px-6 py-5 text-center text-paper shadow-[0_6px_0_#000,0_16px_26px_-10px_rgba(0,0,0,.5)]">
          <span className="font-display text-lg md:text-2xl">Total em bônus:</span>
          <s className="font-display text-lg text-paper/60 decoration-race decoration-[3px] md:text-2xl">
            {formatBRL(BONUS_TOTAL)}
          </s>
          <span aria-hidden="true" className="font-display text-xl text-marker md:text-2xl">
            →
          </span>
          <span className="font-display text-lg text-marker md:text-2xl">GRÁTIS no Premium</span>
        </div>
      </Reveal>

      <div className="mt-10 text-center md:mt-12">
        <CTAButton pulse>QUERO OS 3 BÔNUS</CTAButton>
      </div>
    </Section>
  );
}
