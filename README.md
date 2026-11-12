# +300 Moldes Carros 3D: landing page

Landing page de vendas (React 18 + Vite + TypeScript + Tailwind + Framer Motion), mobile-first, com visual "papercraft / oficina de papel".

## Rodar

```bash
npm install
npm run dev       # desenvolvimento: http://localhost:5173
npm run build     # gera /dist (HTML pré-renderizado + assets)
npm run preview   # serve o /dist localmente para testar
```

`/dist` é 100% estático: publique em Vercel, Netlify, Cloudflare Pages, Hostinger etc.

## O que trocar antes de publicar

### 1. `src/config.ts`
| Constante | O que é |
|---|---|
| `CHECKOUT_BASICO` / `CHECKOUT_PREMIUM` | links de checkout (hoje `"#"`) |
| `CHECKOUT_PREMIUM_OFERTA` | checkout do Premium com preço especial, oferecido no pop-up que abre ao clicar em "QUERO O BÁSICO" (quem recusa vai para `CHECKOUT_BASICO`) |
| `TERMS_URL`, `PRIVACY_URL` | links legais do rodapé |
| `PRICES` | preços "de/por" dos planos e `ofertaPremium` (preço do pop-up de upsell). O % OFF é calculado sozinho |

### 2. Conteúdo: `src/data/`
- `catalog.ts`: modelos dos carrosséis e quantidades por categoria (ajuste para os números reais)
- `content.ts`: bônus, **depoimentos (`[DEPOIMENTO REAL AQUI]`)**, prints e FAQ

### 3. Imagens: `/public/images/` (substitua mantendo o mesmo nome)
Todas as imagens atuais são placeholders marcados com "PLACEHOLDER".

| Arquivo | Tamanho sugerido |
|---|---|
| `hero-poster.webp` | 540x1170 (primeiro frame do vídeo) |
| `molde-*.webp` (16 arquivos) | 480x360, foto do carro montado |
| `biblioteca-print.webp` | 1280x800, print da área de membros |
| `bonus-cinema.webp`, `bonus-motos.webp`, `bonus-f1.webp` | 800x800 quadrada (já são as imagens reais dos bônus) |
| `depoimento-foto-1..3.webp` | 500x500 |
| `feedback-1..4.webp` | 600x800, prints de WhatsApp/Instagram |
| `/public/og-image.jpg` | 1200x630, imagem de compartilhamento |

Use WebP (ex.: [squoosh.app](https://squoosh.app)) para manter a página leve.

### 4. Vídeo: `/public/video/hero-video.mp4`
Vertical 9:16, sem áudio, 6 a 15 s, até ~3 MB. Enquanto não existir, o celular do Hero mostra o poster.

### 5. `index.html`
Troque `https://SEU-DOMINIO.com.br` nas tags Open Graph pelo domínio final.

> Dica: procure por `TROCAR` no projeto para achar todos os pontos de personalização.

## Estrutura

```
src/
  config.ts              links de checkout, preços, contatos
  data/                  textos e listas editáveis
  components/            uma seção por arquivo (Hero, Pricing, FAQ...)
  components/ui/         peças visuais (botão 3D, fita adesiva, aba de cola, carrinho low-poly...)
  index.css              texturas de papel, botões 3D, mockups, carrossel
  entry-server.tsx       usado só no build para pré-renderizar o HTML
scripts/prerender.mjs    injeta o HTML pré-renderizado em dist/index.html
public/fonts/            Archivo Black, Caveat e Inter (Google Fonts, licença OFL)
```

## Performance e acessibilidade

- HTML pré-renderizado no build (a página aparece antes do JavaScript carregar)
- Fontes hospedadas localmente com `preload` e `font-display: swap` (sem "pulo" de layout)
- Imagens WebP com `loading="lazy"` (exceto o Hero), dimensões fixas
- Framer Motion com `LazyMotion` (bundle menor)
- `prefers-reduced-motion`: animações desligadas, carrossel vira rolagem manual, vídeo pausado
- Lighthouse mobile medido localmente: Performance 92 · Acessibilidade 100 · Boas práticas 100 · SEO 100
