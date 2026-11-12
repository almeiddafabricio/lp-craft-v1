import type { LucideIcon } from "lucide-react";
import { Car, Flame, Gauge, Mountain, Truck, Zap } from "lucide-react";

export type Category = "Clássico" | "JDM" | "Esportivo" | "Picape" | "Muscle" | "Off-road";

/** Cor da etiqueta de cada categoria (todas com contraste AA) */
export const CATEGORY_STYLE: Record<Category, string> = {
  Clássico: "bg-ink text-white",
  JDM: "bg-race-dark text-white",
  Esportivo: "bg-marker text-asphalt",
  Picape: "bg-bonus-dark text-white",
  Muscle: "bg-asphalt text-marker",
  "Off-road": "bg-[#6B4F2A] text-white",
};

export type CarModel = {
  name: string;
  category: Category;
  /** TROCAR: foto do carro montado em papel (WebP, ~480x360) */
  image: string;
};

/* -------------------------------------------------------------------------
   Modelos exibidos nos carrosséis.
   Para trocar: substitua os arquivos em /public/images/ mantendo o nome,
   ou edite esta lista (nome, categoria e caminho da imagem).
   ------------------------------------------------------------------------- */
export const MODELS_ROW_1: CarModel[] = [
  { name: "Fusca", category: "Clássico", image: "/images/molde-fusca.webp" },
  { name: "Mustang", category: "Muscle", image: "/images/molde-mustang.webp" },
  { name: "Skyline GT-R", category: "JDM", image: "/images/molde-skyline-gt-r.webp" },
  { name: "Porsche 911", category: "Esportivo", image: "/images/molde-porsche-911.webp" },
  { name: "Hilux", category: "Picape", image: "/images/molde-hilux.webp" },
  { name: "Opala", category: "Clássico", image: "/images/molde-opala.webp" },
  { name: "Supra", category: "JDM", image: "/images/molde-supra.webp" },
  { name: "Jeep", category: "Off-road", image: "/images/molde-jeep.webp" },
];

export const MODELS_ROW_2: CarModel[] = [
  { name: "Ferrari", category: "Esportivo", image: "/images/molde-ferrari.webp" },
  { name: "F-100", category: "Picape", image: "/images/molde-f-100.webp" },
  { name: "RX-7", category: "JDM", image: "/images/molde-rx-7.webp" },
  { name: "Camaro", category: "Muscle", image: "/images/molde-camaro.webp" },
  { name: "Kombi", category: "Clássico", image: "/images/molde-kombi.webp" },
  { name: "Lamborghini", category: "Esportivo", image: "/images/molde-lamborghini.webp" },
  { name: "Defender", category: "Off-road", image: "/images/molde-defender.webp" },
  { name: "Charger", category: "Muscle", image: "/images/molde-charger.webp" },
];

/* -------------------------------------------------------------------------
   Categorias da biblioteca (seção "Tudo organizado").
   TROCAR: ajuste as quantidades para os números reais da sua biblioteca.
   ------------------------------------------------------------------------- */
export type LibraryCategory = { title: string; count: number; icon: LucideIcon; accent: string };

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  { title: "Clássicos", count: 62, icon: Car, accent: "bg-ink text-white" },
  { title: "JDM Japoneses", count: 58, icon: Zap, accent: "bg-race text-white" },
  { title: "Esportivos", count: 54, icon: Gauge, accent: "bg-marker text-asphalt" },
  { title: "Picapes", count: 41, icon: Truck, accent: "bg-bonus text-white" },
  { title: "Muscle Cars", count: 46, icon: Flame, accent: "bg-asphalt text-marker" },
  { title: "Off-road/SUV", count: 43, icon: Mountain, accent: "bg-[#6B4F2A] text-white" },
];
