const LINKS = [
  { category: "Times de produto", label: "FlashBoard para squads de desenvolvimento", href: "#recursos" },
  { category: "Agências", label: "FlashBoard para agências e estúdios", href: "#recursos" },
  { category: "Operações", label: "FlashBoard para varejo e logística", href: "#recursos" },
  { category: "Suporte", label: "FlashBoard para times de atendimento", href: "#recursos" },
];

export function CrossLinks() {
  return (
    <section
      id="integracoes"
      className="bg-surface lg:bg-[linear-gradient(to_right,var(--color-brand-deep)_50%,var(--color-surface)_50%)]"
    >
      <div className="mx-auto flex max-w-[1095px] flex-col px-4 lg:flex-row">
        <div className="flex items-center bg-brand-deep px-4 py-10 lg:flex-1 lg:py-16 lg:pr-12">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-[42px] md:leading-[51px]">
            Um painel para cada tipo de time
          </h2>
        </div>
        <ul className="w-full bg-brand lg:max-w-[534px]">
          {LINKS.map((link) => (
            <li key={link.label} className="border-b border-white/15 last:border-b-0">
              <a
                href={link.href}
                className="group block px-6 py-5 transition-all duration-150 hover:bg-brand-deep"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  {link.category}
                </span>
                <span className="mt-1 flex items-center gap-2 pl-0 text-base font-semibold text-white transition-all duration-150 group-hover:pl-4">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="-ml-5 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  >
                    <path d="M5 3l4 4-4 4" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
