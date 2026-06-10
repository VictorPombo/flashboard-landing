import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TvPanelMock } from "./TvPanelMock";

// Seção de fechamento. Hoje mostra a demo ao vivo; quando houver métrica
// real de clientes, troque o <h2> pelo número (mantendo o restante).
export function LiveDemoCta() {
  return (
    <section id="demo" className="bg-ink py-16 md:py-24">
      <Container width="narrow" className="text-center">
        <h2 className="mx-auto max-w-[760px] text-[32px] font-extrabold leading-tight md:text-[40px] md:leading-[48px]">
          Atualização em menos de{" "}
          <span className="text-accent">1 segundo</span>, sem F5
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-base font-light leading-loose text-fg-soft">
          É assim que o painel se comporta na TV do seu time — este exemplo
          está se atualizando agora, na sua frente.
        </p>

        <div className="mx-auto mt-10 max-w-[520px]">
          <TvPanelMock />
        </div>

        <Button href="/signup" size="lg" className="mt-12">
          Explore o FlashBoard
        </Button>
      </Container>
    </section>
  );
}
