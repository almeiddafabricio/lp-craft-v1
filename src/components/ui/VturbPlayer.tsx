import { useEffect, useRef } from "react";

type Props = {
  /** ID do player na VTurb (o elemento vira `vid-<playerId>`) */
  playerId: string;
  /** URL do player.js desse player */
  playerScript: string;
  /** Nome acessível do vídeo */
  label: string;
  /**
   * true: só baixa o player quando o bloco chega perto da tela (vídeos mais abaixo na página).
   * false: baixa já ao montar (a VSL do topo, que o index.html já carrega no build).
   */
  lazy?: boolean;
  className?: string;
};

/** Carrega o player.js uma vez só (o index.html pode já ter carregado o mesmo arquivo). */
function loadPlayerScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  s.setAttribute("data-vturb-player", "");
  document.head.appendChild(s);
}

/**
 * Player da VTurb. O <vturb-smartplayer> vai como HTML "cru" (dangerouslySetInnerHTML) para o
 * React não mexer no que o player injeta dentro dele: sem isso, a hidratação poderia apagar o vídeo.
 * Preenche o bloco pai (use um pai com a proporção do vídeo).
 */
export function VturbPlayer({ playerId, playerScript, label, lazy = false, className }: Props) {
  const slotRef = useRef<HTMLDivElement>(null);

  // A miniatura que o player injeta vem sem "alt" (falha de acessibilidade/SEO no Lighthouse):
  // marcamos as imagens do player como decorativas; o nome do vídeo fica no aria-label do bloco.
  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const fixAlt = () => slot.querySelectorAll("img:not([alt])").forEach((img) => img.setAttribute("alt", ""));
    fixAlt();
    const observer = new MutationObserver(fixAlt);
    observer.observe(slot, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slot = slotRef.current;
    if (!lazy || !slot || typeof IntersectionObserver === "undefined") {
      loadPlayerScript(playerScript);
      return;
    }
    // Começa a baixar um pouco antes de aparecer (≈1 tela), para já estar pronto na chegada
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadPlayerScript(playerScript);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(slot);
    return () => io.disconnect();
  }, [lazy, playerScript]);

  const html = `<vturb-smartplayer id="vid-${playerId}" style="display:block;margin:0 auto;width:100%"></vturb-smartplayer>`;
  return (
    <div
      ref={slotRef}
      className={className}
      role="group"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
