"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, BatteryCharging, Camera, Cpu } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import SectionTitle from "./SectionTitle";

const services = [
  { icon: MonitorSmartphone, title: "Troca de Tela / Display", desc: "Substituição com padrões rigorosos de qualidade e sensibilidade." },
  { icon: BatteryCharging, title: "Substituição de Bateria", desc: "Devolva a autonomia e carga ideal para o seu smartphone." },
  { icon: Camera, title: "Reparo de Conectores e Câmeras", desc: "Soluções para problemas de carregamento e foco." },
  { icon: Cpu, title: "Reparo em Placa & Desoxidação", desc: "Diagnóstico técnico avançado para casos complexos." },
];

export default function Services() {
  return (
    <section id="assistencia" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Hospital do Celular" title="Assistência Técnica Especializada" subtitle="Cuidamos do seu aparelho com técnica, transparência e peças de qualidade." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass gradient-border group flex flex-col p-6 shadow-2xl shadow-black/50 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon transition group-hover:bg-neon group-hover:text-ink">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{desc}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 !px-4 !py-2.5 text-sm">
                Consultar Orçamento deste Serviço
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
