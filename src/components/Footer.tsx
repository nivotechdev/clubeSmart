import { MapPin, Clock } from "lucide-react";
import { ADDRESS, MAPS_URL, NAV, WHATSAPP_URL, BRANDS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const services = ["Troca de Tela / Display", "Substituição de Bateria", "Conectores e Câmeras", "Placa & Desoxidação"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <p className="font-display text-xl font-bold tracking-tight text-neon">
            Clube Smart <span className="text-white">Caxias</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Assistência técnica especializada e vitrine de smartphones e acessórios em Caxias do Sul.
          </p>
          <p className="mt-5 text-xs text-slate-500">{BRANDS.join(" · ")}</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegação</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="transition hover:text-neon">{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Serviços</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.map((s) => (
              <li key={s}><a href="#assistencia" className="transition hover:text-neon">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" aria-hidden />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-neon">{ADDRESS}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neon" aria-hidden />
              <span>Segunda a Sábado, em horário comercial</span>
            </li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 !px-5 !py-2.5 text-sm">
            <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 pb-24 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-6">
          <p>© {new Date().getFullYear()} Clube Smart Caxias. Todos os direitos reservados.</p>
          <p>Site informativo. Consulte disponibilidade e valores pelo WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
