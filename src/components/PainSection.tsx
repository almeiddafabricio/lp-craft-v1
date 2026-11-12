import { X } from "lucide-react";
import { paperRotation } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { GlueTab, HandArrow } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";

const PAINS = [
  "Passa horas rolando o celular e no fim do dia sente que não fez nada",
  "Ama carros, mas colecionar miniaturas custa caro e ocupa espaço",
  "Queria um passatempo manual, relaxante, que desligasse a cabeça do trabalho",
  "Sente falta de criar algo com as próprias mãos e ver o resultado na estante",
];

/** 2. DOR / IDENTIFICAÇÃO */
export function PainSection() {
  return (
    <Section tone="dark" labelledBy="dor-title">
      <SectionTitle id="dor-title" tone="dark" note="isso parece com você?">
        Você é <span className="text-marker">apaixonado por carros</span>, mas falta um hobby que te tire da rotina?
      </SectionTitle>

      <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 md:gap-6">
        {PAINS.map((pain, i) => (
          <li key={pain}>
            <Reveal delay={i * 0.08}>
              <div className="paper flex items-center gap-3.5 p-4 md:p-5" style={{ rotate: `${paperRotation(i)}deg` }}>
                <GlueTab position={i % 2 ? "tr" : "tl"} />
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-race-dark text-white shadow-[0_3px_0_#9B1C25]">
                  <X className="h-5 w-5" strokeWidth={3.5} aria-hidden="true" />
                </span>
                <p className="text-base font-semibold leading-snug md:text-[1.05rem]">{pain}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Virada */}
      <Reveal className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
        <HandArrow variant="loop" className="mx-auto mb-2 h-16 w-20 rotate-[100deg] text-marker" />
        <p className="font-hand text-[2rem] font-bold leading-[1.1] text-marker md:text-[2.6rem]">
          E se você pudesse montar o carro dos seus sonhos com papel, tesoura e cola, gastando quase nada?
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base text-paper/85 md:text-lg">
          Com o <strong className="text-paper">+300 Moldes Carros 3D</strong> você tem uma garagem inteira na palma da
          mão: escolha o modelo, imprima e monte. Um hobby barato e relaxante que termina com um carro de verdade na sua
          estante.
        </p>
        <div className="mt-8">
          <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
