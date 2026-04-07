import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Stars } from '@react-three/drei';
import LoadingScreen from '../components/LoadingScreen';
import TechCanvasScene from '../components/hero/TechCanvasScene';

const HeroSection = () => (
  <section id="hero" className="relative h-screen overflow-hidden">
    <Canvas camera={{ position: [0, 0, 7], fov: 52 }} dpr={[1, 1.8]}>
      <Suspense fallback={<LoadingScreen />}>
        <Stars radius={95} depth={40} count={3500} factor={4} fade speed={0.8} />
        <TechCanvasScene />
      </Suspense>
    </Canvas>

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
      <motion.div
        className="glass-panel max-w-3xl rounded-3xl p-8 text-center shadow-glow md:p-12"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-neon-blue">Om Raj</p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">DevOps &amp; Software Engineering Student</h1>
        <p className="mt-4 text-base text-slate-300 md:text-lg">Building scalable solutions and solving real-world problems</p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
