import { Container } from "@/components/ui/Container";

const RESOURCES = [
  {
    title: "Guia: painel na TV em 5 minutos",
    description:
      "Passo a passo para colocar o FlashBoard na TV do escritório — Smart TV, Chromecast, Fire Stick ou um mini PC.",
    linkLabel: "Ler o guia",
    href: "#demo",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="20" rx="2" stroke="#8B84FF" strokeWidth="2" />
        <path d="M14 34h12M20 28v6" stroke="#8B84FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 14l-4 4 4 4M24 14l4 4-4 4" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tutoriais em vídeo",
    description:
      "Aprenda a configurar quadros, metas e o modo TV com vídeos curtos, do primeiro acesso aos relatórios.",
    linkLabel: "Assistir tutoriais",
    href: "#demo",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="24" rx="4" stroke="#8B84FF" strokeWidth="2" />
        <path d="M17 13v10l9-5-9-5Z" fill="#C8F135" />
        <path d="M12 36h16" stroke="#8B84FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Integrações",
    description:
      "Conecte o FlashBoard ao que o time já usa: importe quadros do Trello e receba notificações no Slack.",
    linkLabel: "Ver integrações",
    href: "#integracoes",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6" stroke="#8B84FF" strokeWidth="2" />
        <circle cx="28" cy="28" r="6" stroke="#8B84FF" strokeWidth="2" />
        <path d="M16 16l8 8" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="12" r="3" fill="#C8F135" />
        <circle cx="12" cy="28" r="3" fill="#C8F135" />
      </svg>
    ),
  },
];

export function ResourceTrio() {
  return (
    <section className="bg-ink pb-16 md:pb-20">
      <Container className="flex flex-col gap-5 md:flex-row">
        {RESOURCES.map((resource, i) => (
          <div
            key={resource.title}
            className={`flex flex-1 flex-col rounded-xl border border-line p-8 md:min-h-[330px] ${
              i === 1
                ? "bg-card shadow-[2px_2px_30px_5px_rgba(0,0,0,0.35)]"
                : "bg-surface"
            }`}
          >
            {resource.icon}
            <h3 className="mt-8 text-lg font-bold leading-snug">{resource.title}</h3>
            <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-fg-soft">
              {resource.description}
            </p>
            <a
              href={resource.href}
              className="mt-6 text-sm font-semibold text-brand-soft transition-colors duration-200 hover:text-fg"
            >
              {resource.linkLabel} →
            </a>
          </div>
        ))}
      </Container>
    </section>
  );
}
