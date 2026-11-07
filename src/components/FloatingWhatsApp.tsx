import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon text-ink shadow-neon transition hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-pulseRing rounded-full bg-neon" aria-hidden />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
