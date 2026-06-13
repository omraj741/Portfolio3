import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../utils/data';

const ProjectsSection = () => (
  <section id="projects" className="section-shell">
    <SectionTitle eyebrow="Featured Work" title="Projects" subtitle="Selected builds focused on scale, automation, and measurable product impact." />

    <div className="grid gap-7 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="group glass-panel overflow-hidden rounded-[2rem]"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <div className="project-preview relative h-52 overflow-hidden">
            <div className="absolute inset-0 transition duration-500 group-hover:scale-110" />
            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
              0{index + 1}
            </div>
            <div className="absolute bottom-5 left-5 right-5 space-y-2 font-mono text-xs text-white/60">
              <span className="block h-2 w-10/12 rounded-full bg-white/20" />
              <span className="block h-2 w-8/12 rounded-full bg-cyan-200/40" />
              <span className="block h-2 w-6/12 rounded-full bg-violet-200/30" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-cyan-200">{project.tech.join(' • ')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="premium-button px-4 py-3">GitHub</a>
              <a href={project.demo ?? project.github} target="_blank" rel="noreferrer" className="premium-button premium-button-ghost px-4 py-3">Live Demo</a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
