import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../utils/data';

const AboutSection = () => (
  <section id="about" className="section-shell">
    <SectionTitle
      eyebrow="Identity"
      title="About Me"
      subtitle="Designer-minded developer focused on cinematic web experiences and product storytelling."
    />
    <div className="grid gap-8 md:grid-cols-2">
      <motion.article
        className="glass-panel rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl text-white">Short Intro</h3>
        <p className="mt-3 text-slate-300">
          I craft polished digital products where visual design, interactive animation, and engineering quality work as one system.
          My process combines UX strategy, motion design, and performant front-end architecture.
        </p>
      </motion.article>

      <motion.article
        className="glass-panel rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl text-white">Animated Skills</h3>
        <div className="mt-4 space-y-3">
          {skills.slice(0, 4).map((skill) => (
            <div key={skill.name}>
              <div className="mb-1 flex justify-between text-sm text-slate-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
);

export default AboutSection;
