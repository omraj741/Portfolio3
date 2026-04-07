import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../utils/data';

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <SectionTitle
      eyebrow="Journey"
      title="Experience Timeline"
      subtitle="Vertical timeline with smooth reveal animations and subtle particle accents."
    />

    <div className="relative border-l border-neon-blue/40 pl-8">
      {experiences.map((item, index) => (
        <motion.article
          key={item.role}
          className="relative mb-10 rounded-xl border border-white/10 bg-slate-900/40 p-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <span className="absolute -left-[2.15rem] top-8 h-3 w-3 rounded-full bg-neon-blue shadow-glow" />
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.date}</p>
          <h3 className="mt-1 text-xl text-white">{item.role}</h3>
          <p className="text-neon-violet">{item.company}</p>
          <p className="mt-2 text-slate-300">{item.summary}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
