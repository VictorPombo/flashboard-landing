import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Intro() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container width="narrow" className="text-center">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Painel de tarefas em tempo real
        </h2>
        <div className="mx-auto mt-8 max-w-[820px] space-y-5 text-left text-base font-light leading-loose text-fg-soft">
          <p>
            Quando o andamento do trabalho mora em planilhas e mensagens, o
            time só descobre o atraso na próxima reunião. Visibilidade
            contínua muda isso: cada tarefa criada, movida ou concluída
            aparece na hora para todo mundo — na TV da sala, no monitor de
            quem está remoto e no celular de quem está na rua.
          </p>
          <p>
            O FlashBoard reúne quadro kanban, responsáveis, prazos, metas do
            time e indicadores de progresso em um único painel que se atualiza
            sozinho, em menos de um segundo.{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand-soft underline underline-offset-4 transition-colors duration-200 hover:text-fg"
            >
              Crie sua conta ainda hoje
            </Link>{" "}
            e coloque o primeiro painel na TV em menos de cinco minutos.
          </p>
        </div>
        <p className="mt-6 text-sm text-fg-muted">
          O plano grátis inclui até 5 usuários e 50 tarefas ativas. Recursos
          adicionais estão disponíveis nos planos pagos.
        </p>
        <Button href="/signup" size="lg" className="mt-8">
          Comece grátis
        </Button>
      </Container>
    </section>
  );
}
