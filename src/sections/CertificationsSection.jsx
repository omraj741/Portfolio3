import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../utils/data';

const CertificationsSection = () => (
  <section id="certifications" className="section-shell">
    <SectionTitle eyebrow="Credentials" title="Certifications" subtitle="Professional learning milestones aligned with software engineering." />

    <div className="grid gap-4 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <motion.article
          key={cert}
          className="glass-panel rounded-2xl p-5"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <p className="text-slate-100">{cert}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
