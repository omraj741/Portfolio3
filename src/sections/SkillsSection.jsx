import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../utils/data';

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <SectionTitle
      eyebrow="Capabilities"
      title="Orbit Skills"
      subtitle="Circular neon matrix of tools. Hover each item to inspect proficiency."
    />

    <div className="relative mx-auto grid max-w-3xl place-items-center gap-4 rounded-full border border-white/10 bg-slate-900/30 p-12">
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-neon-violet/40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-80 w-80 rounded-full border border-neon-blue/25"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * 130;
        const y = Math.sin(angle) * 130;

        return (
          <motion.div
            key={skill.name}
            className="glass-panel absolute rounded-xl px-4 py-2 text-sm text-white"
            style={{ transform: `translate(${x}px, ${y}px)` }}
            whileHover={{ scale: 1.08, boxShadow: `0 0 18px ${skill.color}` }}
          >
            {skill.name} · {skill.level}%
          </motion.div>
        );
      })}
      <div className="glass-panel rounded-full px-6 py-4 text-white">Tech Constellation</div>
    </div>
  </section>
);

export default SkillsSection;
