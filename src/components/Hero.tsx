import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { CTAButton } from "./ui/CTAButton";
import { HandArrow, Scribble, Tape } from "./ui/Decor";
import { TrustCarousel } from "./ui/TrustCarousel";

/** Mockup de celular em CSS com o vídeo do produto dentro */
function PhoneMockup() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  // Garante autoplay mudo no iOS/Android (o atributo "muted" do React nem sempre é aplicado a tempo)
  // e pausa o vídeo para quem ativou "reduzir movimento" no sistema.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (reduceMotion) {
      v.pause();
      return;
    }
    v.play().catch(() => {
      /* sem vídeo ou autoplay bloqueado: o poster continua visível */
    });
  }, [reduceMotion]);

  return (
    <div className="relative mx-auto w-fit">
      <div className="phone">
        <span className="phone-btn top-[22%] h-12" aria-hidden="true" />
        <span className="phone-btn top-[34%] h-8" aria-hidden="true" />
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          {/* TROCAR: /public/video/hero-video.mp4 (vertical 9:16, mudo, até ~3 MB) e o poster /public/images/hero-poster.webp */}
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.webp"
            aria-label="Vídeo mostrando carros de papel sendo montados"
          >
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
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
          <p className="mx-auto mt-5 max-w-xl text-base text-asphalt/85 md:text-lg lg:mx-0">
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
