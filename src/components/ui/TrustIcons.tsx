/* =========================================================================
   Ícones SVG de confiança no estilo "papel dobrado" (facetas em 2 tons).
   Usados no carrossel do Hero e abaixo dos botões dos planos.
   ========================================================================= */
export type TrustIconProps = { className?: string };

/** Cadeado: Compra segura */
export function LockIcon({ className }: TrustIconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path d="M10.5 14V10.5a5.5 5.5 0 0 1 11 0V14" fill="none" stroke="#1E3A5F" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="5.5" y="13" width="21" height="16" rx="3.5" fill="#1E3A5F" />
      <polygon points="5.5,16.5 16,13 26.5,16.5 26.5,13 5.5,13" fill="#5C7FA8" />
      <polygon points="16,13 26.5,16.5 26.5,29 16,29" fill="#12263F" opacity=".45" />
      <circle cx="16" cy="20.2" r="2.6" fill="#FFC93C" />
      <rect x="14.9" y="21" width="2.2" height="4.6" rx="1.1" fill="#FFC93C" />
    </svg>
  );
}

/** Raio: Acesso imediato */
export function BoltIcon({ className }: TrustIconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <polygon
        points="18.5,2 6,18 14.5,18 11.5,30 26,12.5 17.5,12.5 21.5,2"
        fill="#FFC93C"
        stroke="#1D1F24"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <polygon points="18.5,2 6,18 14.5,18" fill="#FFE08A" />
      <polygon points="14.5,18 11.5,30 26,12.5 17.5,12.5" fill="#E0A21F" opacity=".55" />
    </svg>
  );
}

/** Escudo com "7": Garantia de 7 dias */
export function ShieldIcon({ className }: TrustIconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path d="M16 2.5 27 6.5V15c0 7-5 12-11 14.5C10 27 5 22 5 15V6.5Z" fill="#16A34A" />
      <path d="M16 2.5V29.5C10 27 5 22 5 15V6.5Z" fill="#0F6B32" opacity=".55" />
      <path
        d="M16 2.5 27 6.5V15c0 7-5 12-11 14.5C10 27 5 22 5 15V6.5Z"
        fill="none"
        stroke="#0F6B32"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <text x="16" y="21.5" textAnchor="middle" fontFamily="'Archivo Black', Impact, sans-serif" fontSize="14" fill="#fff">
        7
      </text>
    </svg>
  );
}

/** Linha "Compra segura" com cadeado (abaixo dos botões de compra) */
export function SecurePurchase({ className }: { className?: string }) {
  return (
    <p className={`flex items-center justify-center gap-2 text-sm font-bold text-asphalt/80 ${className ?? ""}`}>
      <LockIcon className="h-5 w-5 shrink-0" />
      Compra segura
    </p>
  );
}
