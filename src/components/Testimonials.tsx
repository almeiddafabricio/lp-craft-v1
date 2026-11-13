import { FEEDBACK_PRINTS, TESTIMONIALS } from "../data/content";
import { paperRotation } from "../lib/utils";
import { Stars, Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";
import { SwipeCarousel } from "./ui/SwipeCarousel";

/** 8. FEEDBACKS
 *  Depoimentos em src/data/content.ts. TROCAR: prints reais (FEEDBACK_PRINTS) em /public/images/
 */
export function Testimonials() {
  return (
    <Section tone="dark" labelledBy="feedback-title">
      <SectionTitle id="feedback-title" tone="dark" note="direto da garagem dos clientes">
        Quem já está montando, <span className="text-marker">aprova</span>
      </SectionTitle>

      {/* Polaroids: carrossel com setas no celular, grid no desktop */}
      <SwipeCarousel
        label="Depoimentos de clientes"
        prevLabel="Ver depoimento anterior"
        nextLabel="Ver próximo depoimento"
        listClassName="-mx-gutter flex snap-x snap-mandatory gap-5 overflow-x-auto px-gutter pb-6 pt-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0"
      >
        {TESTIMONIALS.map((t, i) => (
          <li key={i} className="w-[78%] shrink-0 snap-center sm:w-[55%] md:w-auto">
            <Reveal delay={i * 0.1}>
              <figure className="paper p-2.5 pb-4" style={{ rotate: `${paperRotation(i + 4) * 1.5}deg` }}>
                <Tape color={i === 1 ? "blue" : "yellow"} className="-top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
                {/* foto 4:3 (720x540): mesma proporção da imagem, sem corte extra */}
                <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-paper-shade">
                  <img
                    src={t.photo}
                    alt={`Carro de papel montado por ${t.name}`}
                    width={720}
                    height={540}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-1 pt-4">
                  <Stars count={t.stars} />
                  <blockquote className="mt-2 text-[0.98rem] leading-snug text-asphalt/85">“{t.text}”</blockquote>
                  <p className="mt-3 font-hand text-2xl font-bold leading-none text-ink">{t.name}</p>
                  {t.city && <p className="text-sm text-asphalt/70">{t.city}</p>}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </SwipeCarousel>

      {/* Prints de WhatsApp / Instagram */}
      <p className="mb-4 mt-10 text-center font-hand text-3xl font-bold text-marker md:mb-6">Prints de quem já comprou</p>
      {/* Celular: carrossel com setas (print grande o bastante para ler). Desktop: 4 colunas */}
      <SwipeCarousel
        label="Prints de conversas com clientes"
        prevLabel="Ver print anterior"
        nextLabel="Ver próximo print"
        listClassName="-mx-gutter flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter pb-4 pt-4 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0"
      >
        {FEEDBACK_PRINTS.map((print, i) => (
          <li key={print.src} className="w-[72%] shrink-0 snap-center sm:w-[45%] md:w-auto">
            <Reveal delay={i * 0.08}>
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
