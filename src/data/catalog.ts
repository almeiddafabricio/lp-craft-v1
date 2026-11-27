import type { LucideIcon } from "lucide-react";
import { Car, Flame, Gauge, Mountain, Truck, Zap } from "lucide-react";

export type CarModel = {
  /** Nome igual ao impresso no rodapé da folha do molde */
  name: string;
  /** Folha do molde (WebP, A4 em pé, sem corte) */
  image: string;
};

/* -------------------------------------------------------------------------
   Moldes exibidos no carrossel "Veja alguns dos modelos que você vai receber".
   Para trocar: substitua os arquivos em /public/images/ mantendo o nome,
   ou edite esta lista (nome e caminho da imagem).
   ------------------------------------------------------------------------- */
const MODELS: CarModel[] = [
  { name: "Volkswagen Karmann Ghia", image: "/images/molde-volkswagen-karmann-ghia.webp" },
  { name: "Ferrari F40", image: "/images/molde-ferrari-f40.webp" },
  { name: "Fiat Uno", image: "/images/molde-fiat-uno.webp" },
  { name: "Lamborghini Countach", image: "/images/molde-lamborghini-countach.webp" },
  { name: "Simca Chambord", image: "/images/molde-simca-chambord.webp" },
  { name: "Skyline R34", image: "/images/molde-skyline-r34.webp" },
  { name: "Ford Belina", image: "/images/molde-ford-belina.webp" },
  { name: "Dodge Dart GTS 1969", image: "/images/molde-dodge-dart-gts-1969.webp" },
  { name: "Lamborghini Aventador", image: "/images/molde-lamborghini-aventador.webp" },
  { name: "Dodge Charger R/T 1969", image: "/images/molde-dodge-charger-rt-1969.webp" },
  { name: "Chevrolet Opala", image: "/images/molde-chevrolet-opala.webp" },
];

/* As duas fileiras mostram todos os moldes, em ordens diferentes (e andam em sentidos
   opostos). Com poucos moldes, metade em cada fileira deixaria a fileira mais curta que
   uma tela grande e abriria um buraco no loop. A 2ª começa pelos moldes que a 1ª não
   mostra de início, para as duas não exibirem os mesmos carros ao mesmo tempo. */
export const MODELS_ROW_1: CarModel[] = MODELS;
export const MODELS_ROW_2: CarModel[] = [6, 7, 8, 9, 10, 0, 1, 2, 4, 5, 3].map((i) => MODELS[i]);

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
