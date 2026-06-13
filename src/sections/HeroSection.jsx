import { motion } from 'framer-motion';

const codeSnippets = ['const scale = buildCloud();', 'deploy --prod portfolio', 'AI.optimize(experience)', '<Developer name="Om Raj" />'];

const HeroSection = () => (
  <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-10">
    <div className="hero-gradient-orb left-[-12%] top-[4%] bg-lime-300/20" />
    <div className="hero-gradient-orb bottom-[4%] right-[-8%] bg-violet-500/20" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

    <div className="pointer-events-none absolute inset-0 opacity-30">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={snippet}
          className="absolute rounded-full border border-white/15 bg-black/30 px-5 py-3 font-mono text-xs text-lime-100/75 blur-[0.2px] backdrop-blur-md"
          style={{ top: `${18 + index * 17}%`, left: index % 2 ? '64%' : '6%' }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>

    <div className="section-shell flex min-h-[calc(100vh-7rem)] items-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-white/75">Portfolio · 2026</p>
          <h1 className="hero-display">Om<br />Raj</h1>
          <p className="mt-6 max-w-4xl text-sm font-black uppercase tracking-[0.42em] text-lime-200 md:text-base">
            Developer • Designer • GenAI Integration
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="premium-button">View Projects</a>
            <a href="#contact" className="premium-button premium-button-ghost">Email Me</a>
          </div>
        </div>

        <div className="outline-card relative min-h-[430px] overflow-hidden rounded-[2.4rem] bg-zinc-950/80 p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(215,255,47,.16),transparent_36%),linear-gradient(120deg,rgba(255,255,255,.08),transparent_44%)]" />
          <div className="relative h-full rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.02))] p-5">
            <div className="mb-8 flex justify-end"><span className="rounded-full border border-white/25 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-white">Available</span></div>
            <div className="mx-auto h-56 w-56 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-600 shadow-[0_0_60px_rgba(255,255,255,.18)]" />
            <p className="mt-8 max-w-sm text-lg font-bold leading-8 text-white">Building cinematic web experiences with scalable engineering, automation, and AI-assisted product flows.</p>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc-400"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      Scroll
      <span className="h-10 w-px bg-gradient-to-b from-lime-300 to-transparent" />
    </motion.a>
  </section>
);

export default HeroSection;
