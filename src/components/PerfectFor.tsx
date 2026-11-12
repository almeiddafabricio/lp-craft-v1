import { Coffee, Gift, Leaf, MonitorOff, Trophy, Users } from "lucide-react";
import { cn, paperRotation } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { GlueTab } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { TiltCard } from "./ui/TiltCard";

const ITEMS = [
  { text: "Quer um hobby novo, barato e relaxante", icon: Coffee, accent: "bg-marker text-asphalt" },
  { text: "Quer passar um tempo de qualidade montando com o filho", icon: Users, accent: "bg-ink text-white" },
  { text: "Quer tirar os filhos da tela do celular com algo criativo", icon: MonitorOff, accent: "bg-race text-white" },
  { text: "É apaixonado por carros e quer uma coleção na estante", icon: Trophy, accent: "bg-marker text-asphalt" },
  { text: "Busca uma terapia manual para aliviar o estresse", icon: Leaf, accent: "bg-bonus text-white" },
  { text: "Quer presentear alguém criativo e fã de carros", icon: Gift, accent: "bg-race text-white" },
];

/** 6. PERFEITO PARA QUEM… */
export function PerfectFor() {
  return (
    <Section tone="dark" labelledBy="perfeito-title">
      <SectionTitle id="perfeito-title" tone="dark" note="pra você, pro seu filho, pra presentear">
        Perfeito para <span className="text-marker">quem…</span>
      </SectionTitle>

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={item.text}>
              <Reveal delay={(i % 3) * 0.08}>
                <TiltCard>
                  <div
                    className="paper flex min-h-[92px] items-center gap-3.5 p-4"
                    style={{ rotate: `${paperRotation(i + 5)}deg` }}
                  >
                    {i % 3 === 0 && <GlueTab position="tr" />}
                    <span
                      className={cn(
                        "tilt-pop grid h-12 w-12 shrink-0 place-items-center rounded-xl shadow-[0_4px_0_rgba(0,0,0,.25)]",
                        item.accent,
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.3} aria-hidden="true" />
                    </span>
                    <p className="text-base font-semibold leading-snug">{item.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 text-center md:mt-12">
        <CTAButton>QUERO MEU NOVO HOBBY</CTAButton>
      </div>
    </Section>
  );
}
