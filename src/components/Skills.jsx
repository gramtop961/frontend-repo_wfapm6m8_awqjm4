import React from 'react';
import { Code, Check, Sparkles } from 'lucide-react';

const categories = [
  {
    title: 'Frontend Development',
    items: ['React', 'Angular', 'Node.js'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML5', 'CSS', 'JavaScript'],
  },
  {
    title: 'Version Control',
    items: ['GitHub'],
  },
  {
    title: 'UI/UX Design',
    items: ['Figma'],
  },
  {
    title: 'Database',
    items: ['SQL'],
  },
  {
    title: 'Methodologies',
    items: ['Scrum', 'Project collaboration'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem solving', 'Teamwork', 'Communication', 'English B2'],
  },
  {
    title: 'Other',
    items: ['Computer maintenance & repair'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10">
            <Code className="text-cyan-300" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Skills</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 text-slate-200 backdrop-blur">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-cyan-300" />
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span key={it} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm">
                    <Check size={14} className="text-cyan-300" /> {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
