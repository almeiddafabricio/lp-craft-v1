import { cn } from "../../lib/utils";
import { PaperCar } from "./PaperCar";

/** Logo do produto. TROCAR: se tiver um logo próprio, substitua por <img src="/images/logo.svg" /> */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-race shadow-[0_4px_0_#9B1C25]">
        <PaperCar color="yellow" className="w-9" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-lg", light ? "text-paper" : "text-asphalt")}>+300 MOLDES</span>
        <span className="block font-hand text-xl font-bold text-marker">carros 3D</span>
      </span>
    </span>
  );
}
