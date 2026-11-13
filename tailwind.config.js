/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        // Margem lateral da página (esquerda e direita): use px-gutter / -mx-gutter
        gutter: "25px",
      },
      colors: {
        // Papel kraft (fundo principal)
        kraft: {
          DEFAULT: "#E8D9B8",
          dark: "#D9C59C",
          deep: "#9C8A66",
        },
        // Papel off-white (cards)
        paper: {
          DEFAULT: "#FAF6EE",
          shade: "#EFE6D3",
        },
        // Asfalto / grafite
        asphalt: {
          DEFAULT: "#1D1F24",
          light: "#2A2D34",
          soft: "#4A4E57",
        },
        // Vermelho corrida
        race: {
          DEFAULT: "#E63946",
          dark: "#C62833", // texto pequeno branco sobre vermelho (AA)
          deep: "#9B1C25", // sombra 3D dos botões / texto vermelho sobre kraft (AA)
          light: "#FF6B75", // texto vermelho sobre fundo asfalto (AA)
        },
        // Amarelo marca-texto
        marker: "#FFC93C",
        // Azul tinta de caneta
        ink: "#1E3A5F",
        // Verde bônus / grátis
        bonus: {
          DEFAULT: "#16A34A",
          dark: "#15803D", // texto pequeno (AA)
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', "Impact", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        hand: ["Caveat", '"Comic Sans MS"', "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(calc(var(--r, 0deg) + 3deg))" },
        },
        // Cresce pouco na horizontal (5%): em botões largos, 12% passava da margem de 25px
        // e criava rolagem lateral no celular deitado / tablet pequeno
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.05, 1.4)", opacity: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        nudge: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(.2,.6,.3,1) infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        nudge: "nudge 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
