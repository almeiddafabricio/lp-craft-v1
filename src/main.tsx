import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção o HTML já vem pré-renderizado (npm run build): só "hidrata".
// No dev (npm run dev) o #root está vazio: renderiza do zero.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
