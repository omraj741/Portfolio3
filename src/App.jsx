import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import MusicToggle from './components/MusicToggle';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

const App = () => {
  const containerRef = useRef(null);
  const activeSection = useActiveSection();
  const [theme, setTheme] = useState('dark');
  const [playing, setPlaying] = useState(false);

  const audio = useMemo(() => {
    if (typeof Audio === 'undefined') return null;
    return new Audio('https://cdn.pixabay.com/download/audio/2022/10/25/audio_9460f61f9f.mp3?filename=ambient-11157.mp3');
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.25;
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  useEffect(() => {
    const panel = containerRef.current;
    if (!panel) return undefined;

    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * -16;
      gsap.to(panel, { x, y, duration: 0.8, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('bg-slate-100', theme === 'light');
    document.body.classList.toggle('bg-slate-950', theme === 'dark');
  }, [theme]);

  const toggleMusic = async () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    await audio.play();
    setPlaying(true);
  };

  return (
    <div className="text-white" ref={containerRef}>
      <Navbar active={activeSection} toggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} theme={theme} />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <MusicToggle playing={playing} onToggle={toggleMusic} />
    </div>
  );
};

export default App;
