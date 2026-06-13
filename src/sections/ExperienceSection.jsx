import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../utils/data';

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <SectionTitle eyebrow="Timeline" title="Experience" subtitle="Hands-on industry experience with analytics and insight generation." />

    <motion.article
      className="glass-panel relative rounded-[2rem] p-7 md:p-10"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan-300 via-white/20 to-transparent md:block" />
      <div className="md:pl-14">
        <span className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">Virtual Internship</span>
        <h3 className="text-3xl font-black uppercase tracking-tight text-white">{experience.role}</h3>
        <ul className="mt-6 grid gap-4 text-zinc-300">
          {experience.points.map((point) => (
            <li key={point} className="rounded-2xl border border-white/10 bg-black/25 p-4">{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  </section>
);

export default ExperienceSection;
