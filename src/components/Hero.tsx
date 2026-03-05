import { motion } from 'motion/react';
import { ChevronDown, Download, Linkedin, Mail, MapPin, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero() {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Exploring Next-Gen AI Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          {basics.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          {basics.label}
        </p>

        {/* Creative Summary Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">The Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading at the intersection of data, design, and innovation to build AI-driven architectures that power operational excellence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
              <TrendingUp size={40} className="text-blue-400" />
            </div>
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">The Impact</h3>
            <p className="text-white text-sm font-medium leading-relaxed">
              Designed AI Architecture at scale unlocking <span className="text-blue-400 font-bold">$40M+ annual business impact</span> for Amazon.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">The Strategy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Blending hands-on technical curiosity with a people-first leadership style to deliver intuitive, high-impact data solutions.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} />
            {basics.location}
          </div>
          <a href={`mailto:${basics.email}`} className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors text-sm">
            <Mail size={16} />
            {basics.email}
          </a>
          <a href={basics.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors text-sm">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToExperience}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group"
          >
            View Experience
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-md flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
