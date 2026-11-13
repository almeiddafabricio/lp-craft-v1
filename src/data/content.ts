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
  /** Imagem do bônus: prévia da folha de moldes (WebP quadrado, 680x680) */
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
   Fotos: /public/images/depoimento-foto-1.webp ... (WebP 4:3, 720x540)
   `city` é opcional: preencha com a cidade real do cliente (ex.: "Curitiba/PR");
   se ficar vazio, a linha não aparece no card.
   ------------------------------------------------------------------------- */
export type Testimonial = {
  photo: string;
  name: string;
  city?: string;
  text: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    photo: "/images/depoimento-foto-1.webp",
    name: "Roberto da Silva",
    text: "Pessoal ai da pagina moldes carros3d estão de parabéns pela qualidade dos moldes, ja imprimir e montei alguns ficou top demais!",
    stars: 5,
  },
  {
    photo: "/images/depoimento-foto-2.webp",
    name: "Marcos Almeida",
    text: "Gostei dos moldes qualidade top, ja montei alguns, parabéns pelo o trabalho!",
    stars: 5,
  },
  {
    photo: "/images/depoimento-foto-3.webp",
    name: "Levi Bonin",
    text: "Não vou mentir comprei com receio de ser golpe, mais recebi o acesso tudo certo também já imprimir e montei alguns top demais!",
    stars: 5,
  },
];

/** Prints reais de WhatsApp (WebP 600px de largura, retrato).
 *  Telefones, e-mails e fotos pessoais já estão desfocados nas imagens.
 *  `alt` traz a resposta do cliente para leitores de tela. */
export type FeedbackPrint = { src: string; alt: string };

export const FEEDBACK_PRINTS: FeedbackPrint[] = [
  {
    src: "/images/feedback-1.webp",
    alt: "Print de WhatsApp: cliente responde “opa blz ja vi a mensagem do e-mail também, tudo certo por enquanto.”",
  },
  {
    src: "/images/feedback-2.webp",
    alt: "Print de WhatsApp: cliente responde “opa noite blz obrigado.”",
  },
  {
    src: "/images/feedback-3.webp",
    alt: "Print de WhatsApp: cliente responde “opa tudo joia? blz depois vou dar uma conferida” e envia uma figurinha",
  },
  {
    src: "/images/feedback-4.webp",
    alt: "Print de WhatsApp: cliente responde “obrigado já recebi pelo o e-mail também” e “deu uma olhada a qualidade e top amanhã vou imprimir pro meu neto.”",
  },
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
