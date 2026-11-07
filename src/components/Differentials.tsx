"use client";
import { motion } from "framer-motion";
import { Eye, MapPin, HeartHandshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  { icon: Eye, title: "Transparência Total", desc: "Avaliação clara do problema e orçamento prévio sem compromisso." },
  { icon: MapPin, title: "Localização de Fácil Acesso", desc: "Situados na Av. Rio Branco em Caxias do Sul." },
  { icon: HeartHandshake, title: "Atendimento Personalizado", desc: "Soluções rápidas e eficientes para o seu dia a dia." },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Diferenciais" title="Por que nos escolher?" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass p-8 text-center transition duration-300 hover:border-neon/40 hover:shadow-neon"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neon/10 text-neon">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
