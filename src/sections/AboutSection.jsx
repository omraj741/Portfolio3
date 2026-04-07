import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutSummary } from '../utils/data';

const AboutSection = () => (
  <section id="about" className="section-shell">
    <SectionTitle eyebrow="Profile" title="About Om Raj" subtitle="Computer Science Engineering student ready for impactful software and DevOps roles." />

    <motion.article
      className="glass-panel rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="leading-relaxed text-slate-200">{aboutSummary}</p>
    </motion.article>
  </section>
);

export default AboutSection;
