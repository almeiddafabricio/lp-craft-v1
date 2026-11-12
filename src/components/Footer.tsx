import { PRIVACY_URL, PRODUCT_NAME, TERMS_URL } from "../config";
import { CutLine } from "./ui/Section";
import { Logo } from "./ui/Logo";

/** 12. RODAPÉ */
export function Footer() {
  return (
    <footer className="bg-asphalt-tex relative pb-28 pt-14 text-paper md:pb-12">
      <CutLine />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-gutter text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            Biblioteca online de moldes de carros 3D em papel para imprimir, recortar e montar.
          </p>
        </div>

        <nav aria-label="Links institucionais">
          <ul className="flex flex-col items-center gap-1 text-sm font-semibold md:items-start">
            <li>
              <a href={TERMS_URL} className="inline-flex min-h-[44px] items-center hover:text-marker">
                Termos de uso
              </a>
            </li>
            <li>
              <a href={PRIVACY_URL} className="inline-flex min-h-[44px] items-center hover:text-marker">
                Política de privacidade
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-dashed border-paper/20 px-gutter pt-6 text-center text-xs text-paper/70">
        <p>
          © 2026 {PRODUCT_NAME}. Todos os direitos reservados.
        </p>
        <p className="mt-2">Este produto não garante a obtenção de resultados. Os modelos são para uso pessoal.</p>
      </div>
    </footer>
  );
}
