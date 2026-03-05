import { motion } from 'motion/react';
import { Trophy, Target, Zap, Users, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Achievements() {
  // Extracting key achievements from resume data
  const achievements = [
    {
      title: "Annual Business Impact",
      value: "$40M+",
      label: "Unlocked",
      description: "Designed the foundation of AI-driven products at scale for Amazon Transportation Services.",
      icon: <TrendingUp className="text-blue-400" />,
      color: "blue"
    },
    {
      title: "Defect Attribution Accuracy",
      value: "15%",
      label: "Improvement",
      description: "Led global initiatives resulting in significant accuracy gains while conserving hundreds of hours of manual analysis.",
      icon: <Target className="text-emerald-400" />,
      color: "emerald"
    },
    {
      title: "Flash Report Automation",
      value: "75%",
      label: "Reduction",
      description: "Reduction in Flash report creation through AI driven bridges saving 400+ hours annually per program leader.",
      icon: <Zap className="text-blue-400" />,
      color: "blue"
    },
    {
      title: "Custom Dashboards",
      value: "60+",
      label: "Launched",
      description: "Delivered within a single year, tailored to specific client needs to facilitate data-driven decision-making.",
      icon: <Trophy className="text-amber-400" />,
      color: "amber"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Impact & Metrics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Measurable Achievements
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-${item.color}-500/20 transition-colors`} />
              
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                {item.icon}
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{item.value}</span>
                  <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{item.label}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">{item.title}</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
