import { CTAButton } from "./ui/CTAButton";
import { GlueTab, Tape } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

/** Pontas do selo (estrela de 28 pontas) */
const BURST = Array.from({ length: 56 }, (_, i) => {
  const r = i % 2 === 0 ? 98 : 88;
  const a = (i * Math.PI) / 28 - Math.PI / 2;
  return `${(100 + r * Math.cos(a)).toFixed(1)},${(100 + r * Math.sin(a)).toFixed(1)}`;
}).join(" ");

/** Selo circular 3D estilo carimbo/medalha */
function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Selo: 7 dias de garantia">
      <defs>
        <path id="seal-ring" d="M100,100 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
      </defs>
      {/* "espessura" da medalha */}
      <polygon points={BURST} fill="#9B1C25" transform="translate(0 7)" />
      <polygon points={BURST} fill="#E63946" />
      <circle cx="100" cy="100" r="80" fill="#FAF6EE" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="#1D1F24" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="100" cy="100" r="50" fill="#1D1F24" />
      <text fontFamily="'Archivo Black', Impact, sans-serif" fontSize="13.5" fill="#1D1F24" letterSpacing="1.5">
        <textPath href="#seal-ring">7 DIAS DE GARANTIA • DINHEIRO DE VOLTA •</textPath>
      </text>
      <text x="100" y="108" textAnchor="middle" fontFamily="'Archivo Black', Impact, sans-serif" fontSize="52" fill="#FFC93C">
        7
      </text>
      <text x="100" y="130" textAnchor="middle" fontFamily="'Archivo Black', Impact, sans-serif" fontSize="15" fill="#FAF6EE" letterSpacing="2">
        DIAS
      </text>
    </svg>
  );
}

/** 10. GARANTIA */
export function Guarantee() {
  return (
    <Section tone="dark" labelledBy="garantia-title">
      <Reveal>
        <div className="paper relative mx-auto grid max-w-4xl items-center gap-6 p-6 text-center md:grid-cols-[auto_1fr] md:gap-10 md:p-10 md:text-left">
          <GlueTab position="tl" />
          <GlueTab position="tr" />
          <Tape color="blue" className="-bottom-3 right-10 rotate-[-6deg]" />
          <div className="mx-auto w-40 -rotate-6 drop-shadow-[0_14px_14px_rgba(0,0,0,.35)] md:w-52">
            <Seal className="h-auto w-full animate-wiggle" />
          </div>
          <div>
            <p className="font-hand text-2xl font-bold text-ink">sem pegadinha</p>
            <h2 id="garantia-title" className="mt-1 text-[1.9rem] leading-tight md:text-5xl">
              Risco <span className="marker">zero</span> para você
            </h2>
            <p className="mt-4 text-base text-asphalt/85 md:text-lg">
              Você tem 7 dias para acessar, imprimir e testar os moldes. Se por qualquer motivo não gostar, devolvemos
              100% do seu dinheiro. Sem perguntas e sem burocracia.
            </p>
            <div className="mt-6">
              <CTAButton>QUERO TESTAR AGORA</CTAButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
