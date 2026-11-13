import { CheckCircle2 } from "lucide-react";
import { LIBRARY_CATEGORIES } from "../data/catalog";
import { cn, paperRotation } from "../lib/utils";
import { GlueTab, Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { TiltCard } from "./ui/TiltCard";

const BENEFITS = [
  "Acesse de qualquer dispositivo",
  "Baixe em PDF pronto para imprimir",
  "Imprima quantas vezes quiser",
  "Acesso vitalício",
];

/** Notebook em CSS mostrando a biblioteca online */
function LaptopMockup() {
  return (
    <div className="laptop-scene mx-auto w-full max-w-xl px-[6%]">
      <div className="laptop">
        <div className="laptop-screen">
          <span className="absolute left-1/2 top-[1.3%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#55585f]" aria-hidden="true" />
          <div className="aspect-[16/10] overflow-hidden rounded-[4px] bg-paper">
            {/* Print da área de membros (PNG 960x600, 16:10 igual à tela do notebook) */}
            <img
              src="/images/biblioteca-print.png"
              alt="Tela da biblioteca online com os moldes separados por categoria"
              width={960}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="laptop-base" aria-hidden="true" />
      </div>
    </div>
  );
}

/** 4. TUDO ORGANIZADO */
export function Organized() {
  return (
    <Section tone="dark" labelledBy="organizado-title">
      <SectionTitle id="organizado-title" tone="dark" note="nada de pasta bagunçada">
        Tudo organizado para facilitar sua escolha na hora de <span className="text-marker">imprimir e montar</span>
      </SectionTitle>

      <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        {LIBRARY_CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <li key={cat.title}>
              <Reveal delay={(i % 3) * 0.08}>
                <TiltCard>
                  <div
                    className="paper paper-stack flex h-full flex-col items-center px-3 py-5 text-center md:flex-row md:gap-4 md:px-5 md:py-6 md:text-left"
                    style={{ rotate: `${paperRotation(i + 3)}deg` }}
                  >
                    <span
                      className={cn(
                        "tilt-pop mb-2.5 grid h-12 w-12 shrink-0 place-items-center rounded-xl shadow-[0_4px_0_rgba(0,0,0,.25)] md:mb-0 md:h-14 md:w-14 md:rounded-2xl",
                        cat.accent,
                      )}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-[0.95rem] leading-tight md:text-lg">{cat.title}</span>
                      <span className="mt-1 block font-hand text-[1.4rem] font-bold leading-none text-ink md:text-2xl">
                        +{cat.count} modelos
                      </span>
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <div className="mt-14 grid items-center gap-10 md:mt-16 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="relative">
          <Tape color="yellow" className="-top-5 left-[12%] z-10 rotate-[-6deg]" />
          <LaptopMockup />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="paper relative mx-auto max-w-md rotate-1 p-5 md:p-7">
            <GlueTab position="tl" />
            <GlueTab position="r" />
            <p className="font-hand text-2xl font-bold text-ink">Na sua biblioteca:</p>
            <div className="fold-line my-3" aria-hidden="true" />
            <ul className="space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-base font-semibold">
                  <CheckCircle2 className="h-6 w-6 shrink-0 fill-bonus text-paper" strokeWidth={2.4} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
