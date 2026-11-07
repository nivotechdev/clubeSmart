"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Zap, ShieldCheck, Wrench } from "lucide-react";
import { WHATSAPP_URL, BRANDS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const badges = [
  { icon: Wrench, text: "Garantia em Serviços" },
  { icon: Zap, text: "Atendimento Ágil" },
  { icon: ShieldCheck, text: "Peças de Alta Qualidade" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neon/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-neon !rounded-full"
        >
          <BadgeCheck className="h-4 w-4" /> Caxias do Sul · RS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl"
        >
          Especialistas em Manutenção e Acessórios para{" "}
          <span className="bg-gradient-to-r from-neon to-emerald-300 bg-clip-text text-transparent">Celulares</span>{" "}
          em Caxias do Sul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Assistência técnica especializada para as principais marcas do mercado — {BRANDS.join(", ")} — além de uma vitrine completa de acessórios e smartphones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            <WhatsAppIcon /> Orçamento via WhatsApp
          </a>
          <a href="#assistencia" className="btn-outline w-full sm:w-auto">Conhecer Serviços</a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, text }) => (
            <li key={text} className="glass flex items-center gap-2 px-4 py-2 text-sm text-slate-200 !rounded-full">
              <Icon className="h-4 w-4 text-neon" aria-hidden /> {text}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
