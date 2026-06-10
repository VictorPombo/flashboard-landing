import { Button } from "@/components/ui/Button";
import { FeatureArt, type ArtVariant } from "./FeatureArt";

type Feature = {
  title: string;
  barColor: string;
  bullets: string[];
  art: ArtVariant;
  withCta: boolean;
};

const FEATURES: Feature[] = [
  {
    title: "Painel de TV em tempo real",
    barColor: "bg-bar-1",
    art: "tv",
    withCta: false,
    bullets: [
      "Modo TV em tela cheia, feito para ficar ligado o dia inteiro",
      "Atualização automática em menos de 1 segundo, sem F5",
      "Funciona em qualquer TV ou monitor com navegador",
      "Rotação automática entre quadros de times diferentes",
    ],
  },
  {
    title: "Kanban e tarefas sem fricção",
    barColor: "bg-bar-2",
    art: "kanban",
    withCta: true,
    bullets: [
      "Quadros kanban com colunas personalizáveis",
      "Responsáveis, prazos, etiquetas e checklists",
      "Arraste e solte — a TV reflete o movimento na hora",
      "Comentários e menções direto no card",
    ],
  },
  {
    title: "Atualizações instantâneas para todo o time",
    barColor: "bg-bar-3",
    art: "realtime",
    withCta: true,
    bullets: [
      "Sincronização via WebSocket entre TV, desktop e celular",
      "Quem está remoto vê o mesmo painel da sala, ao vivo",
      "Destaque visual quando uma tarefa muda de status",
      "Histórico de atividade em tempo real",
    ],
  },
  {
    title: "Metas e indicadores do time",
    barColor: "bg-bar-4",
    art: "goals",
    withCta: true,
    bullets: [
      "Metas semanais e mensais visíveis na TV",
      "Barras de progresso por pessoa e por time",
      "Celebração automática no painel quando a meta é batida",
      "Alertas visuais para tarefas atrasadas",
    ],
  },
  {
    title: "Relatórios e histórico",
    barColor: "bg-bar-3",
    art: "reports",
    withCta: true,
    bullets: [
      "Relatórios de produtividade por período",
      "Tempo médio por etapa do quadro",
      "Exportação em CSV",
      "Histórico completo de cada tarefa",
    ],
  },
];

export function FeatureZigzag() {
  return (
    <section id="recursos" className="bg-ink py-16 md:py-20">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-14 px-4">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="flex flex-col items-center gap-8 lg:flex-row lg:even:flex-row-reverse"
          >
            <div className="w-full max-w-[620px]">
              <h2
                className={`rounded-t-xl p-7 text-2xl font-extrabold leading-snug text-white md:text-3xl ${feature.barColor}`}
              >
                {feature.title}
              </h2>
              <div className="rounded-b-xl border border-t-0 border-line bg-surface p-7">
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-light leading-relaxed text-fg-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-6">
                  <a
                    href="#demo"
                    className="text-sm font-semibold text-brand-soft transition-colors duration-200 hover:text-fg"
                  >
                    Saiba mais
                  </a>
                  {feature.withCta && <Button href="/signup">Comece grátis</Button>}
                </div>
              </div>
            </div>

            <div className="w-full flex-1">
              <FeatureArt variant={feature.art} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
