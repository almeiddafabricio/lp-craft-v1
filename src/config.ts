/* =========================================================================
   CONFIGURAÇÃO CENTRAL DA PÁGINA
   Tudo que você precisa trocar antes de publicar está aqui.
   ========================================================================= */

/**
 * Checkout do Plano Básico (R$ 9,90) no botão "QUERO O BÁSICO" do card.
 * O clique abre o pop-up de upsell em vez de navegar; este link só é usado
 * se o visitante abrir o botão em nova aba (Ctrl/Cmd + clique) ou sem JavaScript.
 */
export const CHECKOUT_BASICO = "https://ggcheckout.app/checkout/v5/cnwvDubAwmon77SvEWNt9W";

/**
 * Checkout do Plano Básico (R$ 9,90) para quem RECUSA a oferta de R$ 14,90:
 * link "Não, obrigado. Quero só o Básico por R$ 9,90" do pop-up de upsell.
 */
export const CHECKOUT_BASICO_RECUSA = "https://ggcheckout.app/checkout/v5/EjG9EGy8RM9GPT0eIyoNTO";

/** Checkout do Plano Premium (R$ 24,90): botão "QUERO O PREMIUM" do card */
export const CHECKOUT_PREMIUM = "https://ggcheckout.app/checkout/v5/qf94tOYeYDGW5yPTikUYpD";

/**
 * Checkout do Premium com preço especial (R$ 14,90 = PRICES.ofertaPremium).
 * Botão "QUERO A OFERTA" do pop-up de upsell que abre ao clicar em "QUERO O BÁSICO".
 */
export const CHECKOUT_PREMIUM_OFERTA = "https://ggcheckout.app/checkout/v2/8WkaFPwRibvjIFZB6x2oy5";

/** id da seção de planos: todos os CTAs do topo rolam até aqui */
export const PLANOS_ID = "planos";

/** Nome do produto (logo, rodapé, textos) */
export const PRODUCT_NAME = "+300 Moldes Carros 3D";

/** TROCAR: links legais do rodapé */
export const TERMS_URL = "#";
export const PRIVACY_URL = "#";

/**
 * VSL do Hero, hospedada na VTurb (vídeo vertical 9:16).
 * ATENÇÃO: os mesmos IDs aparecem no index.html (código de otimização no <head>
 * e carregador do player no fim do <body>). Ao trocar o vídeo, troque nos dois lugares.
 */
export const VTURB = {
  playerId: "6b0919da3e4b2acbe02ef297",
  playerScript:
    "https://scripts.converteai.net/013cfdba-18ef-4f69-837c-ee091b5a6ffe/players/6b0919da3e4b2acbe02ef297/v4/player.js",
  /** Capa do vídeo: aparece na tela do celular enquanto o player carrega */
  poster: "https://cdn.converteai.net/013cfdba-18ef-4f69-837c-ee091b5a6ffe/6b0919d5735c38b74fcb7629/poster.jpg",
} as const;

/** Preços (em reais). Usados nos cards de plano e no pop-up de upsell. */
export const PRICES = {
  basico: { de: 47.9, por: 9.9 },
  premium: { de: 67.9, por: 24.9 },
  /** Preço especial do Premium no pop-up de upsell (clique em "QUERO O BÁSICO") */
  ofertaPremium: 14.9,
} as const;
