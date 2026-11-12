import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { PLANOS_ID, PRICES } from "../config";
import { formatBRL, scrollToPlanos } from "../lib/utils";

/**
 * CTA fixo no rodapé do mobile.
 * Aparece depois que o usuário passa do Hero e some enquanto a seção de planos está na tela.
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const planos = document.getElementById(PLANOS_ID);
    if (!hero) return;

    let pastHero = false;
    let onPlanos = false;
    const update = () => setVisible(pastHero && !onPlanos);

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    });
    const planosObserver = new IntersectionObserver(
      ([entry]) => {
        onPlanos = entry.isIntersecting;
        update();
      },
      { rootMargin: "-30% 0px -30% 0px" },
    );

    heroObserver.observe(hero);
    if (planos) planosObserver.observe(planos);
    return () => {
      heroObserver.disconnect();
      planosObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="bg-asphalt-tex fixed inset-x-0 bottom-0 z-40 border-t-2 border-dashed border-kraft-deep px-gutter pb-[max(.75rem,env(safe-area-inset-bottom))] pt-3 text-paper shadow-[0_-10px_30px_rgba(0,0,0,.35)] md:hidden"
        >
          <div className="mx-auto flex max-w-md items-center justify-between gap-3">
            <p className="font-display text-[0.95rem] leading-tight">
              +300 Moldes por <span className="whitespace-nowrap text-marker">{formatBRL(PRICES.basico.por)}</span>
            </p>
            <a
              href={`#${PLANOS_ID}`}
              onClick={scrollToPlanos}
              className="btn-3d min-h-[48px] shrink-0 px-5 py-2 text-[1.2rem]"
            >
              GARANTIR
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
