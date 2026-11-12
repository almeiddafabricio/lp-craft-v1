import { FEEDBACK_PRINTS, TESTIMONIALS } from "../data/content";
import { paperRotation } from "../lib/utils";
import { Stars, Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section, SectionTitle } from "./ui/Section";

/** 8. FEEDBACKS
 *  TROCAR: depoimentos e prints reais em src/data/content.ts e /public/images/
 */
export function Testimonials() {
  return (
    <Section tone="dark" labelledBy="feedback-title">
      <SectionTitle id="feedback-title" tone="dark" note="direto da garagem dos clientes">
        Quem já está montando, <span className="text-marker">aprova</span>
      </SectionTitle>

      {/* Polaroids: carrossel com snap no mobile, grid no desktop */}
      <ul className="-mx-gutter flex snap-x snap-mandatory gap-5 overflow-x-auto px-gutter pb-6 pt-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
        {TESTIMONIALS.map((t, i) => (
          <li key={i} className="w-[78%] shrink-0 snap-center sm:w-[55%] md:w-auto">
            <Reveal delay={i * 0.1}>
              <figure className="paper p-2.5 pb-4" style={{ rotate: `${paperRotation(i + 4) * 1.5}deg` }}>
                <Tape color={i === 1 ? "blue" : "yellow"} className="-top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
                <div className="aspect-square overflow-hidden rounded-[2px] bg-paper-shade">
                  <img
                    src={t.photo}
                    alt={`Foto do cliente ${t.name} com o carro montado`}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-1 pt-4">
                  <Stars count={t.stars} />
                  <blockquote className="mt-2 text-[0.98rem] leading-snug text-asphalt/85">“{t.text}”</blockquote>
                  <p className="mt-3 font-hand text-2xl font-bold leading-none text-ink">{t.name}</p>
                  <p className="text-sm text-asphalt/70">{t.city}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Prints de WhatsApp / Instagram */}
      <p className="mb-6 mt-10 text-center font-hand text-3xl font-bold text-marker">Prints de quem já comprou</p>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {FEEDBACK_PRINTS.map((src, i) => (
          <li key={src}>
            <Reveal delay={i * 0.08}>
              <div className="paper relative p-1.5" style={{ rotate: `${paperRotation(i + 7) * 1.6}deg` }}>
                <Tape color="white" className="-top-3 left-1/2 w-16 -translate-x-1/2 rotate-[-4deg]" />
                {/* TROCAR: print real (WebP retrato ~600x800) */}
                <img
                  src={src}
                  alt={`Print de mensagem de cliente ${i + 1}`}
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full rounded-[2px] object-cover"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
