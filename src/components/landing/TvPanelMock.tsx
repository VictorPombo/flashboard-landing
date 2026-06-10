type Task = {
  title: string;
  owner: string;
  status: "Em andamento" | "Revisão" | "Concluída";
  barClass: string;
  refreshClass: string;
  statusColor: string;
};

const TASKS: Task[] = [
  {
    title: "Campanha de lançamento",
    owner: "Marina",
    status: "Em andamento",
    barClass: "anim-progress-a bg-brand",
    refreshClass: "anim-card-refresh",
    statusColor: "text-yellow",
  },
  {
    title: "Integração do checkout",
    owner: "Diego",
    status: "Revisão",
    barClass: "anim-progress-b bg-bar-3",
    refreshClass: "anim-card-refresh-2",
    statusColor: "text-brand-soft",
  },
  {
    title: "Onboarding de clientes",
    owner: "Aline",
    status: "Concluída",
    barClass: "anim-progress-c bg-accent",
    refreshClass: "anim-card-refresh-3",
    statusColor: "text-green",
  },
];

// Réplica em miniatura do painel de TV do FlashBoard, com loop de
// progresso em CSS puro. Usada no hero e na demo ao vivo.
export function TvPanelMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${className}`}
      aria-label="Demonstração do painel de TV do FlashBoard"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-fg-soft">
          Sprint do time
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold text-green">
          <span className="anim-live-dot h-2 w-2 rounded-full bg-green" />
          Ao vivo
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {TASKS.map((task) => (
          <div
            key={task.title}
            className={`rounded-xl bg-card p-4 ${task.refreshClass}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-sm font-bold text-fg">{task.title}</p>
              <span className={`shrink-0 text-[11px] font-semibold ${task.statusColor}`}>
                {task.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-fg-muted">{task.owner}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
              <div className={`h-full rounded-full ${task.barClass}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
