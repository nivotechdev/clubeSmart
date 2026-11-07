import { MapPin, Clock, Navigation } from "lucide-react";
import { ADDRESS, MAPS_URL, MAPS_EMBED, WHATSAPP_URL } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Location() {
  return (
    <section id="localizacao" className="bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Visite a loja" title="Localização e Contato" />
        <div className="glass gradient-border grid overflow-hidden shadow-2xl shadow-black/50 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-neon" aria-hidden />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-slate-300">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-neon" aria-hidden />
              <div>
                <h3 className="font-semibold">Horário de Atendimento</h3>
                <p className="text-slate-300">Segunda a Sábado em horário comercial.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Navigation className="h-5 w-5" /> Como Chegar (Abrir no Google Maps)
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
          <iframe
            title="Mapa - Clube Smart Caxias"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 grayscale invert-[.9] contrast-[.9] md:h-full md:min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
