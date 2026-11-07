"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight text-neon sm:text-xl" aria-label="Clube Smart Caxias - início">
          Clube Smart <span className="text-white">Caxias</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-300 transition hover:text-neon">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2 text-sm">
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          <button
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur-md lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-neon">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
