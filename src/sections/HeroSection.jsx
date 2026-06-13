import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import DeveloperAvatarScene from '../components/hero/DeveloperAvatarScene';

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
          style={{ top: `${18 + index * 17}%`, left: index % 2 ? '64%' : '6%' }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>

    <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative z-10"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.55em] text-cyan-200/80">Portfolio | 2026</p>
        <h1 className="hero-display">
          <span>Om</span>
          <span>Raj</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-white md:text-2xl">
          Full Stack Developer • Cloud Engineer • AI Enthusiast
        </p>
        <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
          Building scalable solutions and solving real-world problems with clean engineering, automation, and immersive interfaces.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="premium-button">View Projects</a>
          <a href="#contact" className="premium-button premium-button-ghost">Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 h-[420px] rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-cinematic backdrop-blur-xl md:h-[560px]"
        initial={{ opacity: 0, x: 50, rotateY: -8 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="absolute inset-4 rounded-[1.5rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.18),transparent_38%)]" />
        <Canvas camera={{ position: [0, 0.4, 4.3], fov: 42 }} dpr={[1, 1.7]}>
          <Suspense fallback={<LoadingScreen />}>
            <DeveloperAvatarScene />
          </Suspense>
        </Canvas>
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
