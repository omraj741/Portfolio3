import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../utils/data';

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <SectionTitle eyebrow="Internship" title="Experience" subtitle="Hands-on industry experience with analytics and insight generation." />

    <motion.article
      className="glass-panel rounded-2xl p-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
        {experience.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.article>
  </section>
);

export default ExperienceSection;
