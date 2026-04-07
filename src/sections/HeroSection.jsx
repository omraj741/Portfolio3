import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const FloatingShapes = () => {
  const group = useRef();

  const particles = useMemo(() => {
    const total = 1400;
    const arr = new Float32Array(total * 3);
    for (let i = 0; i < total * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 18;
      arr[i + 1] = (Math.random() - 0.5) * 8;
      arr[i + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.14;
    group.current.rotation.x = mouse.y * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[-2.2, 0.8, -1]} castShadow>
          <torusKnotGeometry args={[0.55, 0.17, 160, 24]} />
          <meshStandardMaterial color="#22d3ee" emissive="#155e75" emissiveIntensity={0.35} metalness={0.55} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={2.1} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[2.4, -0.5, 0.5]} castShadow>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#a78bfa" emissive="#4c1d95" emissiveIntensity={0.25} metalness={0.45} roughness={0.2} />
        </mesh>
      </Float>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#7dd3fc" size={0.03} transparent opacity={0.8} />
      </points>
    </group>
  );
};

const HeroSection = () => (
  <section id="hero" className="relative h-screen overflow-hidden">
    <Canvas camera={{ position: [0, 0, 6], fov: 56 }} shadows dpr={[1, 1.8]}>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={1.2} position={[3, 4, 2]} />
      <pointLight intensity={1} color="#a78bfa" position={[-3, -2, -2]} />
      <Suspense fallback={<LoadingScreen />}>
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1.1} />
        <FloatingShapes />
      </Suspense>
    </Canvas>

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
      <div className="glass-panel max-w-3xl rounded-3xl p-8 text-center shadow-glow md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-neon-blue">Om Raj</p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">DevOps &amp; Software Engineering Student</h1>
        <p className="mt-4 text-base text-slate-300 md:text-lg">Building scalable solutions and solving real-world problems</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
