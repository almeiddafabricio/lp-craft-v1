import { Fragment, useState } from "react";
import { Pause, Play } from "lucide-react";
import { CATEGORY_STYLE, MODELS_ROW_1, MODELS_ROW_2, type CarModel } from "../data/catalog";
import { cn, paperRotation } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { HandArrow, Tape } from "./ui/Decor";
import { Section, SectionTitle } from "./ui/Section";

const TAPE_COLORS = ["yellow", "blue", "red", "white"] as const;

function ModelCard({ model, index }: { model: CarModel; index: number }) {
  return (
    <figure className="paper w-[180px] px-2 pb-2.5 pt-4 md:w-[220px]" style={{ rotate: `${paperRotation(index) * 1.4}deg` }}>
      {/* fita fica só na borda do card, sem cobrir o título impresso na folha */}
      <Tape
        color={TAPE_COLORS[index % TAPE_COLORS.length]}
        className="-top-4 left-1/2 w-20 -translate-x-1/2"
        style={{ rotate: `${index % 2 ? 4 : -5}deg` }}
      />
      {/* Folha A4 em pé (1054x1492): mesma proporção da imagem, então nada é cortado */}
      <div className="aspect-[1054/1492] overflow-hidden rounded-[3px] bg-white ring-1 ring-kraft-deep/25">
        <img
          src={model.image}
          alt={`Folha do molde de papercraft do ${model.name}`}
          width={440}
          height={623}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      <figcaption className="mt-2.5 px-0.5">
        <span className={cn("stamp px-2 py-0.5 text-[0.7rem]", CATEGORY_STYLE[model.category])}>{model.category}</span>
        <span className="mt-1.5 block min-h-[2.5em] text-balance font-display text-[0.86rem] leading-[1.25] md:text-[0.95rem]">
          {/* cada palavra sem quebra interna: evita "Mercedes- / Benz", "GT- / R" */}
          {model.name.split(" ").map((word, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className="whitespace-nowrap">{word}</span>
            </Fragment>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, direction, paused }: { items: CarModel[]; direction: "left" | "right"; paused: boolean }) {
  // Lista duplicada + translateX(0 -> -50%) = loop contínuo sem "pulo"
  const loop = [...items, ...items];
  return (
    <div className="marquee" data-paused={paused}>
      {/* 5s por card: a velocidade continua a mesma, não importa quantos modelos a fileira tenha */}
      <ul
        className={cn("marquee-track", direction === "right" && "marquee-track--right")}
        style={{ animationDuration: `${items.length * 5}s` }}
      >
        {loop.map((model, i) => {
          const dup = i >= items.length;
          return (
            <li key={`${model.name}-${i}`} className="marquee-item" data-dup={dup} aria-hidden={dup || undefined}>
              <ModelCard model={model} index={i} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** 3. VEJA ALGUNS MODELOS */
export function ModelsCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <Section labelledBy="modelos-title" containerClassName="!max-w-none !px-0">
      <div className="mx-auto max-w-6xl px-gutter">
        <SectionTitle id="modelos-title" note="spoiler da sua garagem" className="mb-6 md:mb-8">
          Veja alguns dos <span className="marker">modelos que você vai receber</span>
        </SectionTitle>
        <div className="mb-2 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-sm font-semibold text-asphalt/75 hover:text-asphalt motion-reduce:hidden"
          >
            {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
            {paused ? "Continuar animação" : "Pausar animação"}
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <MarqueeRow items={MODELS_ROW_1} direction="right" paused={paused} />
        <MarqueeRow items={MODELS_ROW_2} direction="left" paused={paused} />
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-gutter text-center">
        <p className="mx-auto max-w-xl font-hand text-[1.9rem] font-bold leading-tight text-ink md:text-4xl">
          E mais de 270 outros modelos esperando por você <span aria-hidden="true">👀</span>
          <HandArrow variant="curve" className="ml-1 hidden h-12 w-14 rotate-12 align-bottom md:inline-block" />
        </p>
        <div className="mt-8">
          <CTAButton>QUERO TODOS ELES</CTAButton>
        </div>
      </div>
    </Section>
  );
}
