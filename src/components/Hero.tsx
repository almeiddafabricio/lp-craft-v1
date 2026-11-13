import { useEffect, useRef } from "react";
import { VTURB } from "../config";
import { CTAButton } from "./ui/CTAButton";
import { HandArrow, Scribble, Tape } from "./ui/Decor";
import { TrustCarousel } from "./ui/TrustCarousel";

/* Elemento do player da VTurb. Vai como HTML "cru" (dangerouslySetInnerHTML) para o React
   não mexer no que o player injeta dentro dele: sem isso, a hidratação poderia apagar o vídeo. */
const VTURB_ELEMENT_HTML = `<vturb-smartplayer id="vid-${VTURB.playerId}" style="display:block;margin:0 auto;width:100%"></vturb-smartplayer>`;

/** Mockup de celular em CSS com a VSL (VTurb) dentro: a tela tem 9:16, igual ao vídeo */
function PhoneMockup() {
  const slotRef = useRef<HTMLDivElement>(null);

  // A miniatura que o player injeta vem sem "alt" (falha de acessibilidade/SEO no Lighthouse):
  // marcamos as imagens do player como decorativas; o nome do vídeo fica no aria-label do bloco.
  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const fixAlt = () => slot.querySelectorAll("img:not([alt])").forEach((img) => img.setAttribute("alt", ""));
    fixAlt();
    const observer = new MutationObserver(fixAlt);
    observer.observe(slot, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // No build, o index.html já carrega o player logo depois do HTML pré-renderizado.
  // Este efeito só age no modo dev (página montada pelo React, sem HTML pronto).
  useEffect(() => {
    if (document.querySelector("script[data-vturb-player]")) return;
    const s = document.createElement("script");
    s.src = VTURB.playerScript;
    s.async = true;
    s.setAttribute("data-vturb-player", "");
    document.head.appendChild(s);
  }, []);

  return (
    <div className="relative mx-auto w-fit">
      <div className="phone">
        <span className="phone-btn top-[22%] h-12" aria-hidden="true" />
        <span className="phone-btn top-[34%] h-8" aria-hidden="true" />
        {/* câmera na borda de cima (fora da tela, para não cobrir o vídeo) */}
        <span className="phone-camera" aria-hidden="true" />
        <div className="phone-screen" style={{ backgroundImage: `url(${VTURB.poster})` }}>
          <div
            ref={slotRef}
            className="vsl-slot"
            role="group"
            aria-label="Vídeo de apresentação dos moldes de carros 3D"
            dangerouslySetInnerHTML={{ __html: VTURB_ELEMENT_HTML }}
          />
        </div>
      </div>

      {/* Anotação manuscrita */}
      <div className="pointer-events-none absolute -right-6 -top-6 hidden rotate-6 text-ink md:block lg:-right-16" aria-hidden="true">
        <span className="font-hand text-3xl font-bold">olha esse!</span>
        <HandArrow variant="down" className="ml-2 h-14 w-14 -scale-x-100" />
      </div>
    </div>
  );
}

/** 1. HERO */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-kraft-tex relative overflow-x-clip pb-16 pt-8 md:pb-24 md:pt-14"
    >
      <div className="bg-cutting-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-10 px-gutter lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
        {/* Bloco de texto (topo) */}
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
          <p className="relative mb-4 inline-block -rotate-2 whitespace-nowrap font-hand text-[1.6rem] font-bold leading-none text-ink">
            +300 modelos • acesso imediato
            <Scribble className="absolute -bottom-2 left-0 h-3 w-full text-race" />
          </p>
          <h1 id="hero-title" className="text-[1.95rem] leading-[1.1] sm:text-4xl lg:text-[3.3rem] lg:leading-[1.05]">
            Tenha acesso a uma biblioteca com{" "}
            <mark className="marker">mais de 300 moldes de carros 3D</mark> para imprimir e montar
          </h1>
          {/* Foto do carro montado + moldes impressos (WebP 4:3 em 4 tamanhos).
              No celular é a maior imagem da 1ª tela (LCP): carrega já, com preload no index.html */}
          <figure className="relative mx-auto mt-7 max-w-xl -rotate-1 lg:mx-0 lg:max-w-md">
            <Tape color="yellow" className="-top-3 left-1/2 -translate-x-1/2 rotate-[3deg]" />
            <div className="paper p-2">
              <img
                src="/images/hero-foto-768.webp"
                srcSet="/images/hero-foto-480.webp 480w, /images/hero-foto-640.webp 640w, /images/hero-foto-768.webp 768w, /images/hero-foto-1080.webp 1080w"
                sizes="(min-width: 1024px) 432px, (min-width: 640px) 560px, calc(100vw - 66px)"
                width={1080}
                height={810}
                decoding="async"
                alt="Nissan Skyline montado em papel nas mãos, com os moldes impressos do Gol G5, Opala e Gol Quadrado ao fundo"
                className="block aspect-[4/3] w-full rounded-[2px] object-cover"
              />
            </div>
          </figure>
          <p className="mx-auto mt-6 max-w-xl text-base text-asphalt/85 md:text-lg lg:mx-0">
            Moldes de carros clássicos, JDM japoneses, esportivos, picapes e muito mais, tudo organizado em uma
            biblioteca online para você escolher, baixar e imprimir quando quiser.
          </p>
        </div>

        {/* Mockup (fica entre o texto e o CTA no mobile; coluna direita no desktop) */}
        <div className="relative py-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Tape color="red" className="-top-1 left-1/2 hidden -translate-x-1/2 rotate-[-4deg] lg:block" />
          <PhoneMockup />
        </div>

        {/* CTA + selos de confiança */}
        <div className="flex min-w-0 flex-col items-center lg:col-start-1 lg:row-start-2 lg:items-start lg:self-start">
          <CTAButton pulse className="sm:text-[1.25rem]">
            QUERO MEUS +300 MOLDES
          </CTAButton>

          {/* Selos de confiança em carrossel animado */}
          <TrustCarousel className="mt-4 w-full max-w-md lg:max-w-[560px]" />
        </div>
      </div>
    </section>
  );
}
