import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../utils/data';

const ProjectsSection = () => (
  <section id="projects" className="section-shell">
    <SectionTitle eyebrow="Work" title="Projects" subtitle="Three highlighted projects focused on impact, scale, and automation." />

    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="glass-panel rounded-2xl p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8, boxShadow: '0 0 28px rgba(34, 211, 238, 0.25)' }}
        >
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-neon-blue">{project.tech.join(' • ')}</p>
          <a
            href={project.github}
            className="mt-6 inline-block rounded-full border border-neon-blue/70 px-4 py-2 text-sm text-neon-blue transition hover:bg-neon-blue/10"
          >
            GitHub
          </a>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
