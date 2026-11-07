export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </div>
  );
}
