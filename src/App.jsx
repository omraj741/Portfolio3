import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import LeadershipSection from './sections/LeadershipSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

const App = () => {
  const activeSection = useActiveSection();
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const moveHandler = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * -12;
      gsap.to(element, { x, y, duration: 0.9, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <>
      <Navbar active={activeSection} />
      <main ref={containerRef} className="text-white">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <LeadershipSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
