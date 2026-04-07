const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <header className="mb-10">
    <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neon-blue/80">{eyebrow}</p>
    <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p> : null}
  </header>
);

export default SectionTitle;
