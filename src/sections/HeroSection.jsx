import { motion } from 'framer-motion';

const codeSnippets = ['const scale = buildCloud();', 'deploy --prod portfolio', 'AI.optimize(experience)', '<Developer name="Om Raj" />'];

const HeroSection = () => (
  <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-10">
    <div className="hero-gradient-orb left-[-10%] top-[10%] bg-cyan-400/20" />
    <div className="hero-gradient-orb bottom-[8%] right-[-8%] bg-violet-500/20" />

    <div className="pointer-events-none absolute inset-0 opacity-25">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={snippet}
          className="absolute rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-xs text-cyan-100/70 blur-[0.2px] backdrop-blur-md"
          style={{ top: `${18 + index * 17}%`, left: index % 2 ? '62%' : '6%' }}
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
        className="relative z-10 max-w-7xl"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-cyan-200/80">Portfolio | 2026</p>
        <h1 className="hero-display">Om Raj</h1>
        <p className="mt-6 max-w-4xl text-lg font-medium text-white md:text-2xl">
          Full Stack Developer • Cloud Engineer • AI Enthusiast
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
          Building scalable solutions and solving real-world problems with clean engineering, automation, and immersive interfaces.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="premium-button">View Projects</a>
          <a href="#contact" className="premium-button premium-button-ghost">Contact Me</a>
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
      <span className="h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent" />
    </motion.a>
  </section>
);

export default HeroSection;
