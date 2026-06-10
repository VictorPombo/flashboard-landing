import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FlashBoard — Painel de tarefas em tempo real na TV do time",
  description:
    "Gestão de tarefas com painel de TV ao vivo: kanban, metas e progresso do time atualizando em menos de 1 segundo, sem F5. Comece grátis com até 5 usuários.",
  openGraph: {
    title: "FlashBoard — Suas tarefas, ao vivo na TV do time",
    description:
      "Painel de tarefas em tempo real para a TV do escritório. Comece grátis.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <body className="min-w-[320px]">{children}</body>
    </html>
  );
}
