import SectionTitle from '../components/SectionTitle';
import RadarSkillsChart from '../components/skills/RadarSkillsChart';

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <SectionTitle eyebrow="Strengths" title="Skill Radar" subtitle="A visual snapshot of my technical strengths in a radar layout." />
    <RadarSkillsChart />
  </section>
);

export default SkillsSection;
