import resumeData from '../data/resume.json';

export default function ResumePrint() {
  const { basics, experience, education, skills, certifications, honors } = resumeData;

  return (
    <div id="resume-print" className="hidden print:block p-10 bg-white text-black font-sans leading-relaxed">
      <div className="border-b-2 border-slate-900 pb-6 mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">{basics.name}</h1>
        <p className="text-lg font-medium text-slate-700 mb-4">{basics.label}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span>{basics.email}</span>
          <span>{basics.location}</span>
          <span>{basics.linkedin}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold uppercase border-b border-slate-300 mb-4">Summary</h2>
        <p className="text-sm text-slate-800">{basics.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold uppercase border-b border-slate-300 mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((comp, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold">{comp.company}</h3>
                <span className="text-sm font-medium">{comp.duration}</span>
              </div>
              <div className="space-y-4">
                {comp.roles.map((role, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold italic">{role.title}</h4>
                      <span className="text-xs">{role.dates}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {role.bullets.map((bullet, k) => (
                        <li key={k} className="text-sm text-slate-800 ml-4 -indent-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold uppercase border-b border-slate-300 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i}>
                <h3 className="font-bold text-sm">{edu.institution}</h3>
                <p className="text-xs italic">{edu.degree}</p>
                <p className="text-[10px] text-slate-500">{edu.dates}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold uppercase border-b border-slate-300 mb-4">Skills & More</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xs uppercase mb-1">Top Skills</h3>
              <p className="text-xs">{skills.top.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase mb-1">Certifications</h3>
              <ul className="text-xs list-disc list-inside">
                {certifications.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase mb-1">Honors</h3>
              <ul className="text-xs list-disc list-inside">
                {honors.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
