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
  /** Nome igual ao título impresso na folha do molde */
  name: string;
  category: Category;
  /** Folha do molde (WebP 440x623, A4 em pé, sem corte) */
  image: string;
};

/* -------------------------------------------------------------------------
   Modelos exibidos nos carrosséis: 5 de cada categoria (30 no total).
   Para trocar: substitua os arquivos em /public/images/ mantendo o nome,
   ou edite esta lista (nome, categoria e caminho da imagem).
   ------------------------------------------------------------------------- */
export const MODELS_ROW_1: CarModel[] = [
  { name: "Fusca", category: "Clássico", image: "/images/molde-fusca.webp" },
  { name: "Toyota Supra MK4", category: "JDM", image: "/images/molde-toyota-supra-mk4.webp" },
  { name: "Lamborghini Aventador", category: "Esportivo", image: "/images/molde-lamborghini-aventador.webp" },
  { name: "Shelby GT500 1967", category: "Muscle", image: "/images/molde-shelby-gt500-1967.webp" },
  { name: "Toyota Hilux", category: "Picape", image: "/images/molde-toyota-hilux.webp" },
  { name: "Jeep Willys CJ-5", category: "Off-road", image: "/images/molde-jeep-willys-cj-5.webp" },
  { name: "Opala", category: "Clássico", image: "/images/molde-opala.webp" },
  { name: "Nissan Skyline GT-R R32", category: "JDM", image: "/images/molde-nissan-skyline-gt-r-r32.webp" },
  { name: "Porsche 911 Turbo S", category: "Esportivo", image: "/images/molde-porsche-911-turbo-s.webp" },
  { name: "Dodge Charger R/T 1969", category: "Muscle", image: "/images/molde-dodge-charger-rt-1969.webp" },
  { name: "Ford Ranger", category: "Picape", image: "/images/molde-ford-ranger.webp" },
  { name: "Land Rover Defender 90", category: "Off-road", image: "/images/molde-land-rover-defender-90.webp" },
  { name: "Kombi", category: "Clássico", image: "/images/molde-kombi.webp" },
  { name: "Mitsubishi Lancer Evo IX", category: "JDM", image: "/images/molde-mitsubishi-lancer-evo-ix.webp" },
  { name: "Chevrolet S10", category: "Picape", image: "/images/molde-chevrolet-s10.webp" },
];

export const MODELS_ROW_2: CarModel[] = [
  { name: "Ferrari LaFerrari", category: "Esportivo", image: "/images/molde-ferrari-laferrari.webp" },
  { name: "Chevrolet Camaro Z/28 1969", category: "Muscle", image: "/images/molde-chevrolet-camaro-z28-1969.webp" },
  { name: "Mercedes-Benz Classe G", category: "Off-road", image: "/images/molde-mercedes-benz-classe-g.webp" },
  { name: "Gol Quadrado", category: "Clássico", image: "/images/molde-gol-quadrado.webp" },
  { name: "Mazda RX-7 FD", category: "JDM", image: "/images/molde-mazda-rx-7-fd.webp" },
  { name: "RAM 1500", category: "Picape", image: "/images/molde-ram-1500.webp" },
  { name: "Bugatti Chiron", category: "Esportivo", image: "/images/molde-bugatti-chiron.webp" },
  { name: "Pontiac Trans Am 1977", category: "Muscle", image: "/images/molde-pontiac-trans-am-1977.webp" },
  { name: "Troller T4", category: "Off-road", image: "/images/molde-troller-t4.webp" },
  { name: "Brasília", category: "Clássico", image: "/images/molde-brasilia.webp" },
  { name: "Subaru Impreza WRX STI", category: "JDM", image: "/images/molde-subaru-impreza-wrx-sti.webp" },
  { name: "Fiat Toro", category: "Picape", image: "/images/molde-fiat-toro.webp" },
  { name: "McLaren Senna", category: "Esportivo", image: "/images/molde-mclaren-senna.webp" },
  { name: "Dodge Challenger R/T 1970", category: "Muscle", image: "/images/molde-dodge-challenger-rt-1970.webp" },
  { name: "Hummer H1", category: "Off-road", image: "/images/molde-hummer-h1.webp" },
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
