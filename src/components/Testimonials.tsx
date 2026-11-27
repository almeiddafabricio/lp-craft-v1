import { VTURB_FEEDBACK } from "../config";
import { FEEDBACK_PRINTS } from "../data/content";
import { paperRotation } from "../lib/utils";
import { Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { SwipeCarousel } from "./ui/SwipeCarousel";
import { VturbPlayer } from "./ui/VturbPlayer";

/* Mesmo tamanho para o vídeo e os prints (carrossel no celular, 3 por linha no desktop) */
const ITEM_CLASS = "w-[72%] shrink-0 snap-center sm:w-[45%] md:w-[calc((100%-3rem)/3)] md:max-w-[300px]";

/** 8. FEEDBACKS: vídeo de depoimento (VTURB_FEEDBACK em src/config.ts) + prints de conversas no
 *  WhatsApp (FEEDBACK_PRINTS em src/data/content.ts) */
export function Testimonials() {
  return (
    <Section tone="dark" labelledBy="feedback-title">
      <SectionTitle id="feedback-title" tone="dark" note="direto do WhatsApp dos clientes">
        Quem já está montando, <span className="text-marker">aprova</span>
      </SectionTitle>

      {/* Celular: carrossel com setas (print grande o bastante para ler).
          Desktop: 3 por linha; a última linha fica centralizada */}
      <SwipeCarousel
        label="Depoimentos de clientes: vídeo e prints do WhatsApp"
        prevLabel="Ver depoimento anterior"
        nextLabel="Ver próximo depoimento"
        listClassName="-mx-gutter flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter pb-4 pt-4 md:mx-0 md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:px-0"
      >
        {/* Vídeo de depoimento (VTurb, 9:16). Não toca sozinho; o player só baixa perto da seção */}
        <li className={ITEM_CLASS}>
          <Reveal>
            <div className="paper relative p-1.5" style={{ rotate: `${paperRotation(6) * 1.6}deg` }}>
              <Tape color="yellow" className="-top-3 left-1/2 z-10 w-16 -translate-x-1/2 rotate-[3deg]" />
              <div
                className="relative aspect-[9/16] w-full overflow-hidden rounded-[2px] bg-[#0f0f0f] bg-cover bg-center"
                style={{ backgroundImage: `url(${VTURB_FEEDBACK.poster})` }}
              >
                <VturbPlayer
                  playerId={VTURB_FEEDBACK.playerId}
                  playerScript={VTURB_FEEDBACK.playerScript}
                  label="Vídeo de depoimento de cliente"
                  lazy
                  className="relative z-[1] h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </li>
        {FEEDBACK_PRINTS.map((print, i) => (
          <li key={print.src} className={ITEM_CLASS}>
            <Reveal delay={(i + 1) * 0.08}>
              <div className="paper relative p-1.5" style={{ rotate: `${paperRotation(i + 7) * 1.6}deg` }}>
                <Tape color="white" className="-top-3 left-1/2 w-16 -translate-x-1/2 rotate-[-4deg]" />
                {/* print inteiro (sem corte) sobre o fundo escuro do WhatsApp */}
                <img
                  src={print.src}
                  alt={print.alt}
                  width={600}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/16] w-full rounded-[2px] bg-[#0f0f0f] object-contain"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </SwipeCarousel>
    </Section>
  );
}
