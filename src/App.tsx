import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import SkillsEducation from './components/SkillsEducation';
import ResumePrint from './components/ResumePrint';
import { Linkedin, Mail } from 'lucide-react';
import resumeData from './data/resume.json';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            <ResumePrint />
            
            {/* Navigation Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50">
              <motion.div
                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Floating Contact */}
            <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
              <motion.a
                whileHover={{ scale: 1.1, x: -5 }}
                href={`mailto:${resumeData.basics.email}`}
                className="w-12 h-12 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, x: -5 }}
                href={resumeData.basics.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>

            <Hero />
            <Achievements />
            <Experience />
            <SkillsEducation />

            <footer className="py-12 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{resumeData.basics.name}</h3>
                  <p className="text-slate-500 text-sm">{resumeData.basics.label}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <a href={`mailto:${resumeData.basics.email}`} className="text-slate-400 hover:text-white transition-colors">Contact</a>
                  <a href={resumeData.basics.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                  <button 
                    onClick={() => window.print()}
                    className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all"
                  >
                    Resume PDF
                  </button>
                </div>
              </div>
              <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] uppercase tracking-widest">
                © {new Date().getFullYear()} Nisarg Shah. Built with Precision & AI.
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
