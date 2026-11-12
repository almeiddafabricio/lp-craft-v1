import type { ReactNode } from "react";
import { m } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** deslocamento inicial (px) */
  y?: number;
  x?: number;
  scale?: number;
};

/**
 * Animação de entrada on-scroll (fade + slide), executa uma única vez.
 * Com "reduzir movimento" ativo, o MotionConfig do App remove o deslocamento.
 */
export function Reveal({ children, className, delay = 0, y = 28, x = 0, scale = 1 }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
