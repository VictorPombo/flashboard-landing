"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Produto", href: "#produto" },
  { label: "Recursos", href: "#recursos" },
  { label: "Painel de TV", href: "#demo" },
  { label: "Integrações", href: "#integracoes" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-[60px] max-w-[1180px] items-center justify-between px-4 md:h-[74px]">
        <Link href="/" aria-label="FlashBoard — página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-fg-soft transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="/login"
            className="text-sm font-semibold text-fg-soft transition-colors duration-200 hover:text-fg"
          >
            Entrar
          </a>
          <Button href="/signup">Comece grátis</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          data-open={open}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-line h-[3px] w-[26px] rounded bg-fg" />
          <span className="menu-line h-[3px] w-[26px] rounded bg-fg" />
          <span className="menu-line h-[3px] w-[26px] rounded bg-fg" />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-line bg-ink px-4 pb-6 pt-4 lg:hidden"
          aria-label="Principal (móvel)"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-fg-soft hover:bg-card hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/login"
            className="rounded-lg px-3 py-3 text-base font-semibold text-fg-soft hover:bg-card hover:text-fg"
          >
            Entrar
          </a>
          <div className="mt-3 px-3">
            <Button href="/signup" className="w-full text-center">
              Comece grátis
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
