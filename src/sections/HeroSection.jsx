import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import LoadingScreen from '../components/LoadingScreen';

const ParticleField = () => {
  const points = useRef();
  const positions = useMemo(() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 20;
      arr[i + 1] = (Math.random() - 0.5) * 12;
      arr[i + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.getElapsedTime() * 0.03;
    points.current.rotation.x = mouse.y * 0.2;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#67e8f9" size={0.03} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
};

const FloatingCore = () => {
  const mesh = useRef();
  useFrame(({ clock, mouse }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.y * 0.3, 0.06);
    mesh.current.rotation.y += 0.006;
    mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh castShadow receiveShadow ref={mesh}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.45} roughness={0.2} emissive="#155e75" emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
};

const HeroSection = () => (
  <section id="hero" className="relative h-screen w-full overflow-hidden">
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} shadows dpr={[1, 1.7]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 2]} intensity={1.3} castShadow />
      <pointLight position={[-2, -1, -2]} intensity={1.1} color="#a78bfa" />
      <Suspense fallback={<LoadingScreen />}>
        <Stars radius={90} depth={40} count={5000} factor={5} fade speed={1.2} />
        <ParticleField />
        <FloatingCore />
      </Suspense>
    </Canvas>

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="rounded-2xl border border-white/20 bg-slate-950/40 px-8 py-6 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.4em] text-neon-blue">Hi, I&apos;m Alex Nova</p>
        <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Creative Developer</h1>
        <p className="mt-3 text-slate-300">Interactive experiences blending design, code, and 3D storytelling.</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
