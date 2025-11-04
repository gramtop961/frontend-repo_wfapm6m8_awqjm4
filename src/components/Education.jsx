import React from 'react';
import { motion } from 'framer-motion';

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Education() {
  const items = [
    {
      title: 'B.Sc. in Computer Science',
      org: 'University of Technology',
      period: '2015 — 2019',
      details: 'Focus on software engineering, HCI, and web technologies.',
    },
    {
      title: 'Continuous Learning',
      org: 'Workshops & Certifications',
      period: 'Ongoing',
      details: 'AI for web, 3D on the web, performance optimization.',
    },
  ];

  return (
    <section id="education" className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight md:text-3xl"
      >
        Education
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={i}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-medium">{it.title}</h3>
            <p className="text-white/70">{it.org}</p>
            <p className="text-sm text-white/60">{it.period}</p>
            <p className="mt-3 text-white/80">{it.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
