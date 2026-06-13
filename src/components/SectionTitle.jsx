const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <header className="mb-10 text-center">
    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/70">{eyebrow}</p>
    <h2 className="cinematic-heading">{title}</h2>
    {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-slate-300">{subtitle}</p> : null}
  </header>
);

export default SectionTitle;
