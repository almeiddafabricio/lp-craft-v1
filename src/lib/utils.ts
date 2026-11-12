import { PLANOS_ID } from "../config";

/** Junta classes ignorando valores falsos */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** 9.9 -> "R$ 9,90" */
export function formatBRL(value: number) {
  return brl.format(value);
}

/** 9.9 -> { int: "9", cents: "90" } para exibir preço grande */
export function splitPrice(value: number) {
  const [int, cents] = value.toFixed(2).split(".");
  return { int, cents };
}

/** Rotação "aleatória" porém estável (-1.5° a 1.5°) para os cards de papel */
const ROTATIONS = [-1.2, 0.9, -0.6, 1.4, -1.5, 0.5, 1.1, -0.9, 0.3, -1.3];
export function paperRotation(index: number) {
  return ROTATIONS[index % ROTATIONS.length];
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Rola suavemente até a seção de planos (respeitando "reduzir movimento") */
export function scrollToPlanos(event?: { preventDefault: () => void }) {
  const target = document.getElementById(PLANOS_ID);
  if (!target) return;
  event?.preventDefault();
  target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}
