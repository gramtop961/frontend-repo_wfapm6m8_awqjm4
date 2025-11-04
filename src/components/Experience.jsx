import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Frontend Developer – El Diquecito',
    meta: 'Final Institute Project',
    description:
      'Collaborated with a team of students to develop a web application for a non-profit organization, applying agile methodologies and teamwork skills. Developed using React and Python Django.',
  },
  {
    title: 'Frontend Developer – Mina Clavero Municipality Project',
    meta: 'XAcademy at Santex',
    description:
      'Developed an Angular-based web application to collect survey data from tourists, enabling statistical analysis of visitor demographics. Roles: UI/UX design in Figma, frontend development, and product ownership.',
  },
  {
    title: 'Web Developer – Brimstone Solutions',
    meta: 'Client work',
    description:
      'Developed and maintained websites focusing on UI/UX optimization and performance improvements. Notable projects below:',
    links: [
      { label: 'Dossin', href: 'https://dossin.com.ar' },
      { label: 'Double G', href: 'https://doubleg-miamirentals.com' },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-slate-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10">
            <Briefcase className="text-cyan-300" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Experience</h2>
        </div>

        <div className="grid gap-6">
          {roles.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                  <p className="text-sm text-slate-400">{r.meta}</p>
                </div>
              </div>
              <p className="mt-3 leading-relaxed text-slate-200/90">{r.description}</p>
              {r.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {r.links.map((l) => (
                    <motion.a
                      whileHover={{ y: -2 }}
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                    >
                      {l.label} <ExternalLink size={16} />
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
