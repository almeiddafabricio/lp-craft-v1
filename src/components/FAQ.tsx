import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ as FAQ_ITEMS } from "../data/content";
import { cn } from "../lib/utils";
import { CTAButton } from "./ui/CTAButton";
import { Section, SectionTitle } from "./ui/Section";

/** 11. PERGUNTAS FREQUENTES (accordion animado) */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section labelledBy="faq-title">
      <SectionTitle id="faq-title" note="ficou alguma dúvida?">
        Perguntas <span className="marker">frequentes</span>
      </SectionTitle>

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={item.q} className="paper overflow-hidden" style={{ rotate: `${i % 2 ? 0.4 : -0.4}deg` }}>
              <h3 className="font-sans">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[60px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left md:px-6"
                >
                  <span className="text-base font-extrabold leading-snug md:text-lg">{item.q}</span>
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-300",
                      isOpen ? "rotate-45 bg-race text-white" : "bg-marker text-asphalt",
                    )}
                  >
                    <Plus className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-4 pb-4 md:px-6">
                      <div className="fold-line mb-4" aria-hidden="true" />
                      <p className="text-base leading-relaxed text-asphalt/85">{item.a}</p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center md:mt-12">
        <p className="mb-5 font-hand text-3xl font-bold text-ink">Tudo certo? Sua garagem te espera!</p>
        <CTAButton pulse>QUERO MEUS +300 MOLDES</CTAButton>
      </div>
    </Section>
  );
}
