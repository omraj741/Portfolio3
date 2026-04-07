import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { categorizedSkills } from '../utils/data';

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <SectionTitle eyebrow="Strengths" title="Skills" subtitle="Categorized technical stack with animated progress indicators." />

    <div className="grid gap-6 md:grid-cols-3">
      {categorizedSkills.map((group, index) => (
        <motion.article
          key={group.category}
          className="glass-panel rounded-2xl p-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <h3 className="mb-4 text-lg font-semibold text-white">{group.category}</h3>
          <div className="space-y-3">
            {group.items.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between text-sm text-slate-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default SkillsSection;
