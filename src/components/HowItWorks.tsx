import { MousePointerClick, Printer, Scissors } from "lucide-react";
import { paperRotation } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { TiltCard } from "./ui/TiltCard";

const STEPS = [
  {
    title: "Escolha o molde",
    text: "Navegue pela biblioteca e escolha o modelo ideal.",
    icon: MousePointerClick,
  },
  {
    title: "Imprima",
    text: "Baixe o PDF e imprima em casa ou em qualquer gráfica, em papel A4 comum ou mais grosso.",
    icon: Printer,
  },
  {
    title: "Recorte e monte",
    text: "Recorte, dobre nas linhas marcadas, cole e veja seu carro 3D ganhar forma.",
    icon: Scissors,
  },
];

/** 5. COMO FUNCIONA */
export function HowItWorks() {
  return (
    <Section labelledBy="como-title">
      <SectionTitle id="como-title" note="3 passos, sem mistério">
        Veja como é <span className="marker">simples usar</span>
      </SectionTitle>

      <div className="relative">
        {/* Linha de corte conectando os passos (vertical no mobile, horizontal no desktop) */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-1/2 top-10 -translate-x-1/2 border-l-[3px] border-dashed border-ink/40 md:bottom-auto md:left-[12%] md:right-[12%] md:top-[4.5rem] md:translate-x-0 md:border-l-0 md:border-t-[3px]"
        />

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <Reveal delay={i * 0.18} y={36}>
                  <TiltCard>
                    <div
                      className="paper mx-auto max-w-[340px] px-5 pb-6 pt-8 text-center"
                      style={{ rotate: `${paperRotation(i + 1)}deg` }}
                    >
                      <Tape color={i === 1 ? "blue" : "yellow"} className="-top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
                      <div className="tilt-pop relative mx-auto mb-3 flex h-20 w-20 items-center justify-center">
                        <span
                          aria-hidden="true"
                          className="text-outline absolute -left-5 -top-4 font-display text-[3.75rem] leading-none text-marker"
                        >
                          {i + 1}
                        </span>
                        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-race text-white shadow-[0_5px_0_#9B1C25]">
                          <Icon className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
                        </span>
                      </div>
                      <p className="font-hand text-2xl font-bold leading-none text-ink">Passo {i + 1}</p>
                      <h3 className="mt-1 text-xl md:text-2xl">{step.title}</h3>
                      <div className="fold-line mx-auto my-3 w-2/3" aria-hidden="true" />
                      <p className="text-[0.98rem] text-asphalt/85">{step.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 text-center md:mt-12">
        <CTAButton pulse>COMEÇAR A MONTAR AGORA</CTAButton>
      </div>
    </Section>
  );
}
