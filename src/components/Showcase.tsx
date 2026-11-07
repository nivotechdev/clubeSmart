"use client";
import { motion } from "framer-motion";
import { Smartphone, ShieldPlus, Headphones, Info } from "lucide-react";
import { WHATSAPP_URL, BRANDS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import WhatsAppIcon from "./WhatsAppIcon";

const groups = [
  {
    icon: Smartphone, title: "Smartphones",
    desc: "Aparelhos novos e seminovos revisados das principais marcas.",
    items: BRANDS,
  },
  {
    icon: ShieldPlus, title: "Acessórios & Proteção",
    desc: "Proteja seu aparelho com qualidade e estilo.",
    items: ["Películas de hidrogel", "Películas 3D", "Capas antichoque de alta resistência"],
  },
  {
    icon: Headphones, title: "Carregadores & Áudio",
    desc: "Energia rápida e som de qualidade para o dia a dia.",
    items: ["Carregadores turbo", "Cabos reforçados", "Fones sem fio", "Caixas de som"],
  },
];

export default function Showcase() {
  return (
    <section id="vitrine" className="bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Catálogo" title="Vitrine de Produtos" subtitle="Conheça as linhas que trabalhamos na loja." />
        <div role="note" className="mx-auto mb-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-neon/30 bg-neon/5 p-4 text-sm text-slate-200 backdrop-blur-md">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-neon" aria-hidden />
          <p>Os itens abaixo são <strong>amostras do nosso catálogo</strong>. A disponibilidade de modelos e marcas deve ser consultada na loja ou via WhatsApp.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, desc, items }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass gradient-border p-7 shadow-2xl shadow-black/50 transition duration-300 hover:-translate-y-2"
            >
              <Icon className="h-10 w-10 text-neon" aria-hidden />
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{it}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon /> Consultar Modelos Disponíveis no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
