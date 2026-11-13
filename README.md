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
| `CHECKOUT_BASICO` / `CHECKOUT_PREMIUM` | links de checkout (já configurados) |
| `CHECKOUT_PREMIUM_OFERTA` | checkout do Premium com preço especial, oferecido no pop-up que abre ao clicar em "QUERO O BÁSICO" (quem recusa vai para `CHECKOUT_BASICO`) |
| `TERMS_URL`, `PRIVACY_URL` | links legais do rodapé |
| `PRICES` | preços "de/por" dos planos e `ofertaPremium` (preço do pop-up de upsell). O % OFF é calculado sozinho |
| `VTURB` | IDs do player da VSL (VTurb) no celular do Hero e capa mostrada enquanto ele carrega |

### 2. Conteúdo: `src/data/`
- `catalog.ts`: modelos dos carrosséis e quantidades por categoria (ajuste para os números reais)
- `content.ts`: bônus, depoimentos (campo `city` opcional), prints e FAQ

### 3. Imagens: `/public/images/` (substitua mantendo o mesmo nome)
Todas as imagens desta tabela já são as reais (só a `og-image.jpg` ainda é placeholder).

| Arquivo | Tamanho sugerido |
|---|---|
| `hero-foto-480/640/768/1080.webp` | foto real do Hero (4:3, abaixo do título); o navegador escolhe o tamanho pela tela |
| `molde-*.webp` (30 arquivos) | 440x623, folha A4 em pé (já são as folhas reais, 5 por categoria) |
| `biblioteca-print.png` | 960x600 (16:10), print real da área de membros |
| `bonus-cinema.webp`, `bonus-motos.webp`, `bonus-f1.webp` | 680x680 quadrada (já são as imagens reais dos bônus) |
| `depoimento-foto-1..3.webp` | 720x540 (4:3), já são as fotos reais dos depoimentos |
| `feedback-1..4.webp` | 600px de largura (retrato), prints reais de WhatsApp com telefone, e-mail e fotos pessoais desfocados |
| `/public/og-image.jpg` | 1200x630, imagem de compartilhamento |

Use WebP (ex.: [squoosh.app](https://squoosh.app)) para manter a página leve.

### 4. Vídeo (VSL na VTurb)
O vídeo do celular do Hero é o player da VTurb (vertical 9:16; a tela do celular tem a mesma proporção).
Para trocar de vídeo, atualize os IDs em **3 lugares**: `VTURB` em `src/config.ts`, o bloco
"VSL do Hero (VTurb)" no `<head>` do `index.html` e o carregador do player no fim do `<body>`.
Se o novo vídeo não for 9:16, ajuste `aspect-ratio` de `.phone-screen` em `src/index.css`.

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
- `prefers-reduced-motion`: animações desligadas, carrossel vira rolagem manual
- Lighthouse mobile medido localmente (com a VSL da VTurb): Performance 90 · Acessibilidade 100 · Boas práticas 96 · SEO 100 (os 4 pontos de boas práticas são erros de console da licença/analítica da VTurb, bloqueadas no teste local)
