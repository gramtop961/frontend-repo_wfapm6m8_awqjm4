import React from 'react';
import { GraduationCap } from 'lucide-react';

const schools = [
  {
    title: 'Instituto Tecnico Salesiano Villada',
    degree: 'Technical Degree in Programming',
    details:
      'Gained expertise in software development, teamwork, and problem-solving, while adapting to evolving technologies in professional settings.',
  },
  {
    title: 'XAcademy - Technology with Purpose / Santex',
    degree: 'Year-long Web Development Program',
    details:
      'Completed training focused on industry best practices and collaborative project development.',
  },
  {
    title: "Instituto Universitario Aeronáutico",
    degree: "Bachelor's Degree in Computer Engineering (Ongoing)",
    details:
      'Enhancing technical skills through advanced coursework on software development and system architecture.',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative bg-slate-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10">
            <GraduationCap className="text-cyan-300" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Education</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {schools.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.degree}</p>
              <p className="mt-3 text-slate-200/90 leading-relaxed">{s.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
