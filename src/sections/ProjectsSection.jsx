import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../utils/data';

const ProjectMesh = ({ project, index, onSelect }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += hovered ? 0.04 : 0.01;
    mesh.current.rotation.x = hovered ? 0.3 : 0;
  });

  const shape = {
    box: <boxGeometry args={[1.2, 0.7, 1.2]} />,
    sphere: <sphereGeometry args={[0.75, 32, 32]} />,
    torus: <torusKnotGeometry args={[0.5, 0.18, 180, 28]} />,
  };

  return (
    <mesh
      ref={mesh}
      position={[index * 2.8 - 2.8, 0, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => onSelect(project)}
    >
      {shape[project.shape]}
      <meshStandardMaterial color={project.color} metalness={0.35} roughness={0.2} emissive={project.color} emissiveIntensity={hovered ? 0.45 : 0.2} />
    </mesh>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <SectionTitle
        eyebrow="Portfolio"
        title="3D Projects"
        subtitle="Hover to rotate each artifact. Click any object to open project details and links."
      />

      <div className="h-[420px] rounded-3xl border border-white/10 bg-slate-900/40">
        <Canvas camera={{ position: [0, 1.2, 7], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[2, 5, 3]} intensity={1.4} angle={0.5} />
          {projects.map((project, index) => (
            <ProjectMesh key={project.title} project={project} index={index} onSelect={setActiveProject} />
          ))}
          <OrbitControls enablePan={false} maxDistance={8} minDistance={5} />
        </Canvas>
      </div>

      {activeProject ? (
        <div className="glass-panel mt-8 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white">{activeProject.title}</h3>
          <p className="mt-2 text-slate-300">{activeProject.description}</p>
          <p className="mt-3 text-sm text-neon-blue">Tech: {activeProject.tech.join(' · ')}</p>
          <div className="mt-4 flex gap-3">
            <a className="rounded-full border border-white/30 px-4 py-2 text-sm text-white" href={activeProject.github}>GitHub</a>
            <a className="rounded-full border border-neon-blue/80 px-4 py-2 text-sm text-neon-blue" href={activeProject.demo}>Live Demo</a>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ProjectsSection;
