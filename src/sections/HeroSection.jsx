import { motion } from 'framer-motion';
import { hero } from '../utils/data';

const codeSnippets = ['const scale = buildCloud();', 'deploy --prod portfolio', 'CI/CD.pipeline()', '<Developer name="Om Raj" />'];

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
        className="relative z-10 w-full max-w-7xl"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-white/75">Portfolio · 2026</p>
        <h1 className="hero-display whitespace-nowrap">{hero.name}</h1>
        <p className="mt-6 max-w-4xl text-sm font-black uppercase tracking-[0.42em] text-lime-200 md:text-base">{hero.title}</p>
        <p className="mt-4 max-w-5xl text-lg font-semibold leading-8 text-white md:text-2xl">{hero.subtitle}</p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-400">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="premium-button">View Projects</a>
          <a href="/resume.pdf" className="premium-button premium-button-ghost" download>Download Resume</a>
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
      <span className="h-10 w-px bg-gradient-to-b from-lime-300 to-transparent" />
    </motion.a>
  </section>
);

export default HeroSection;
