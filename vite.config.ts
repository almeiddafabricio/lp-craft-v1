import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {}
    : {
        // Separa React/Framer Motion em um chunk próprio (melhor cache entre deploys)
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ["react", "react-dom", "framer-motion"],
            },
          },
        },
      },
}));
