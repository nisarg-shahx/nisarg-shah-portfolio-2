import { motion } from 'motion/react';
import { Code2, Globe, GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function SkillsEducation() {
  const { skills, education, certifications, honors } = resumeData;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Skills Section */}
      <div>
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Expertise
          </motion.span>
          <h2 className="text-4xl font-bold text-white flex items-center gap-4">
            <Code2 className="text-blue-500" />
            Core Skills
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.top.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:border-blue-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.languages.map((lang) => (
                <div key={lang.name} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-slate-500 text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award size={14} /> Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
                <Trophy size={14} /> Honors & Awards
              </h3>
              <ul className="space-y-2">
                {honors.map((honor) => (
                  <li key={honor} className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Academic
          </motion.span>
          <h2 className="text-4xl font-bold text-white flex items-center gap-4">
            <GraduationCap className="text-blue-500" />
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {edu.institution}
                </h3>
                <span className="text-slate-500 text-xs font-mono">{edu.dates}</span>
              </div>
              <p className="text-slate-400 text-sm">{edu.degree}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white italic text-lg mb-4 leading-relaxed">
              "{resumeData.basics.quote.text}"
            </p>
            <p className="text-blue-400 text-sm font-medium">— {resumeData.basics.quote.author}</p>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Globe size={160} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trophy({ size, className }: { size: number, className?: string }) {
  return <Award size={size} className={className} />;
}
