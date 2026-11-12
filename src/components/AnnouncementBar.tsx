import { PLANOS_ID } from "../config";
import { scrollToPlanos } from "../lib/utils";

/** 0. Barra de anúncio fina, fixa no topo */
export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-race-dark text-white shadow-[0_2px_0_#9B1C25]">
      <a
        href={`#${PLANOS_ID}`}
        onClick={scrollToPlanos}
        className="mx-auto flex min-h-[36px] max-w-6xl items-center justify-center px-gutter py-1.5 text-center text-[13px] font-bold leading-tight tracking-wide md:text-sm"
      >
        <span aria-hidden="true" className="mr-1.5">🏁</span>
        <span>
          OFERTA DE LANÇAMENTO: acesso vitalício com{" "}
          <span className="whitespace-nowrap rounded bg-marker px-1.5 py-px text-asphalt">até 80% OFF</span>
        </span>
      </a>
    </div>
  );
}
