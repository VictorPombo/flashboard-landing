import { Logo } from "./Logo";
import { APP_URL } from "@/lib/constants";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Recursos", href: "#recursos" },
      { label: "Painel de TV", href: "#demo" },
      { label: "Integrações", href: "#integracoes" },
      { label: "Plano grátis", href: `${APP_URL}/signup` },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Guia de instalação na TV", href: "#demo" },
      { label: "Tutoriais em vídeo", href: "#demo" },
      { label: "Fale conosco", href: "mailto:contato@flashboard.app" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre o FlashBoard", href: "#produto" },
      { label: "Privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
    ],
  },
];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-[13px] text-white/70 transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-brand-deep via-[#3a3490] to-surface">
      <div className="mx-auto max-w-[1180px] px-4 py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-[280px]">
            <Logo />
            <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
              Gestão de tarefas com painel de TV em tempo real para o seu time.
            </p>
          </div>

          {/* Mobile: acordeões */}
          <div className="flex flex-col gap-2 md:hidden">
            {COLUMNS.map((column) => (
              <details key={column.title} className="group border-b border-white/15 pb-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-xs font-bold uppercase tracking-[1px] text-white">
                  {column.title}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-open:rotate-90"
                  >
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="pb-2">
                  <LinkList links={column.links} />
                </div>
              </details>
            ))}
          </div>

          {/* Desktop: colunas estáticas */}
          <div className="hidden gap-16 md:flex">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-bold uppercase tracking-[1px] text-white">
                  {column.title}
                </p>
                <LinkList links={column.links} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} FlashBoard. Todos os direitos reservados.</p>
          <p>Feito no Brasil · Dados tratados conforme a LGPD</p>
        </div>
      </div>
    </footer>
  );
}
