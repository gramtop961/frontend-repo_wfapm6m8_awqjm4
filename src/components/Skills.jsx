import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
        <motion.h2 variants={item} className="text-2xl font-semibold tracking-tight md:text-3xl">
          Skills & Tools
        </motion.h2>
        <motion.p variants={item} className="mt-2 max-w-2xl text-white/70">
          A focused toolkit for building fast, interactive, and accessible web experiences.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Frontend Development</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>React</Pill>
              <Pill>Angular</Pill>
              <Pill>Vue</Pill>
              <Pill>Node.js</Pill>
              <Pill>TypeScript</Pill>
              <Pill>Tailwind CSS</Pill>
              <Pill>Framer Motion</Pill>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Backend & Cloud</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>Express</Pill>
              <Pill>FastAPI</Pill>
              <Pill>MongoDB</Pill>
              <Pill>PostgreSQL</Pill>
              <Pill>Docker</Pill>
              <Pill>Vercel</Pill>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">AI & Data</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>OpenAI</Pill>
              <Pill>LangChain</Pill>
              <Pill>Python</Pill>
              <Pill>Vector DBs</Pill>
              <Pill>LLM Integrations</Pill>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Testing & Quality</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill>Jest</Pill>
              <Pill>React Testing Library</Pill>
              <Pill>ESLint</Pill>
              <Pill>Playwright</Pill>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
