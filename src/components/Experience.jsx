import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const jobs = [
    {
      role: 'Senior Frontend Developer',
      company: 'Freelance',
      period: '2021 — Present',
      summary:
        'Building performant interfaces, leading design systems, and integrating 3D & AI-driven interactions.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Tech Studio',
      period: '2019 — 2021',
      summary: 'Delivered React/Node platforms with realtime features and robust CI/CD pipelines.',
    },
  ];

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight md:text-3xl"
      >
        Experience
      </motion.h2>

      <div className="mt-8 space-y-6">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-medium">{job.role}</h3>
                <p className="text-white/70">{job.company}</p>
              </div>
              <span className="text-sm text-white/60">{job.period}</span>
            </div>
            <p className="mt-3 text-white/80">{job.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
