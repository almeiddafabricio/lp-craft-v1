/* =========================================================================
   Conteúdo editável: bônus, depoimentos e FAQ
   ========================================================================= */

export type BonusItem = {
  n: number;
  title: string;
  /** Nome curto usado na lista do card de plano */
  short: string;
  description: string;
  /** Preço "de" (âncora) em reais */
  price: number;
  /** Imagem do bônus: prévia da folha de moldes (WebP quadrado, 800x800) */
  image: string;
};

export const BONUSES: BonusItem[] = [
  {
    n: 1,
    title: "Moldes exclusivos de carros icônicos do cinema",
    short: "Carros icônicos do cinema",
    description: "Monte os carros mais famosos das telonas.",
    price: 34.9,
    image: "/images/bonus-cinema.webp",
  },
  {
    n: 2,
    title: "Moldes de motos",
    short: "Moldes de motos",
    description: "Esportivas, custom e clássicas para completar sua garagem.",
    price: 29.9,
    image: "/images/bonus-motos.webp",
  },
  {
    n: 3,
    title: "Moldes de carros de F1",
    short: "Moldes de carros de F1",
    description: "Os bólidos mais rápidos do mundo em papel.",
    price: 27.9,
    image: "/images/bonus-f1.webp",
  },
];

export const BONUS_TOTAL = BONUSES.reduce((sum, b) => sum + b.price, 0);

/* -------------------------------------------------------------------------
   DEPOIMENTOS
   TROCAR: substitua pelos depoimentos REAIS dos seus clientes.
   Fotos: /public/images/depoimento-foto-1.webp ... (quadradas, ~500x500)
   ------------------------------------------------------------------------- */
export type Testimonial = {
  photo: string;
  name: string;
  city: string;
  text: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    photo: "/images/depoimento-foto-1.webp",
    name: "[Nome do cliente]",
    city: "[Cidade/UF]",
    text: "[DEPOIMENTO REAL AQUI] Conte qual modelo a pessoa montou, quanto tempo levou e como foi a experiência.",
    stars: 5,
  },
  {
    photo: "/images/depoimento-foto-2.webp",
    name: "[Nome do cliente]",
    city: "[Cidade/UF]",
    text: "[DEPOIMENTO REAL AQUI] Ideal: um pai que montou com o filho e tirou a criança do celular.",
    stars: 5,
  },
  {
    photo: "/images/depoimento-foto-3.webp",
    name: "[Nome do cliente]",
    city: "[Cidade/UF]",
    text: "[DEPOIMENTO REAL AQUI] Ideal: alguém que já montou vários e começou uma coleção na estante.",
    stars: 5,
  },
];

/** TROCAR: prints reais de WhatsApp/Instagram (WebP, retrato ~600x800) */
export const FEEDBACK_PRINTS: string[] = [
  "/images/feedback-1.webp",
  "/images/feedback-2.webp",
  "/images/feedback-3.webp",
  "/images/feedback-4.webp",
];

/* -------------------------------------------------------------------------
   PERGUNTAS FREQUENTES
   ------------------------------------------------------------------------- */
export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "Como vou receber o acesso?",
    a: "Logo após a confirmação do pagamento, você recebe no e-mail o acesso à biblioteca online. No Pix, a liberação é imediata.",
  },
  {
    q: "Preciso de uma impressora especial?",
    a: "Não. Qualquer impressora caseira serve. Você também pode imprimir em uma gráfica ou papelaria. Recomendamos papel A4 de 180g para um resultado mais firme, mas sulfite comum também funciona.",
  },
  {
    q: "É difícil de montar? Nunca fiz papercraft.",
    a: "Os moldes têm linhas de corte e dobra indicadas, e há modelos de vários níveis, dos mais simples aos mais detalhados. É só começar pelos fáceis.",
  },
  {
    q: "Crianças podem montar?",
    a: "Sim! É uma ótima atividade para fazer em família. Para crianças menores, recomendamos a supervisão de um adulto no uso da tesoura e do estilete.",
  },
  {
    q: "Posso imprimir quantas vezes quiser?",
    a: "Sim. O acesso é vitalício e você pode imprimir os moldes quantas vezes quiser para uso pessoal.",
  },
];
