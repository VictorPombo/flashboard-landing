import { Button } from "@/components/ui/Button";
import { TvPanelMock } from "./TvPanelMock";

export function Hero() {
  return (
    <section
      id="produto"
      className="bg-[linear-gradient(to_right,transparent_60%,rgba(108,99,255,0.12)_60%)]"
    >
      <div className="mx-auto max-w-[1180px] px-4 py-12 md:bg-[linear-gradient(to_right,transparent_80%,rgba(108,99,255,0.18)_80%)] md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-[560px]">
            <h1 className="text-[28px] font-extrabold leading-none md:text-4xl xl:text-5xl">
              Suas tarefas, ao vivo na{" "}
              <span className="text-accent">TV do time</span>
            </h1>
            <p className="mt-6 max-w-[480px] text-base font-light leading-loose text-fg-soft">
              O FlashBoard transforma a gestão de tarefas em um painel de TV em
              tempo real: kanban, metas e progresso de cada pessoa atualizando
              na parede do escritório — sem planilha, sem reunião de status,
              sem F5.
            </p>
            <Button href="/signup" size="lg" className="mt-8">
              Comece grátis
            </Button>
            <p className="mt-4 text-xs text-fg-muted">
              Plano grátis com até 5 usuários e 50 tarefas. Sem cartão de
              crédito.
            </p>
          </div>

          <div className="hidden w-full max-w-[480px] shrink-0 md:block md:basis-[440px] lg:basis-[480px]">
            <TvPanelMock />
          </div>
        </div>
      </div>
    </section>
  );
}
