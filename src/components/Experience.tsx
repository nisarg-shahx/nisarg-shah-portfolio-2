import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          Career Path
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Professional Journey
        </motion.h2>
      </div>

      <div className="space-y-8">
        {resumeData.experience.map((company, cIndex) => (
          <motion.div
            key={company.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: cIndex * 0.1 }}
            className="relative"
          >
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-500 shadow-xl">
                  <Briefcase size={24} />
                </div>
                <div className="w-px flex-grow bg-gradient-to-b from-white/10 to-transparent mt-4" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-white">{company.company}</h3>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {company.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {company.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {company.roles.map((role, rIndex) => {
                    const globalIndex = cIndex * 10 + rIndex;
                    const isExpanded = expandedIndex === globalIndex;

                    return (
                      <div
                        key={role.title}
                        className={`group rounded-2xl border transition-all duration-300 ${
                          isExpanded
                            ? 'bg-white/5 border-blue-500/30'
                            : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                        }`}
                      >
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                          className="w-full text-left p-6 flex items-center justify-between"
                        >
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {role.title}
                            </h4>
                            <p className="text-sm text-slate-500">{role.dates}</p>
                          </div>
                          <ChevronRight
                            size={20}
                            className={`text-slate-500 transition-transform duration-300 ${
                              isExpanded ? 'rotate-90 text-blue-500' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 space-y-4">
                                <ul className="space-y-3">
                                  {role.bullets.map((bullet, bIndex) => (
                                    <li key={bIndex} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>

                                {role.metrics && (
                                  <div className="flex flex-wrap gap-2 pt-4">
                                    {role.metrics.map((metric) => (
                                      <div
                                        key={metric}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
                                      >
                                        <TrendingUp size={14} />
                                        {metric}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
