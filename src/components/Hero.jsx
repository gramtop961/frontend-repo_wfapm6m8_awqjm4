import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that do not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-24 -top-24 h-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -inset-x-24 -bottom-24 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-40">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.h1
            variants={fadeUp}
            className="text-balance font-semibold tracking-tight [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl"
          >
            Bruno Cavazza
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-pretty text-base text-white/80 sm:text-lg"
          >
            Web Developer • Frontend • IA Dev
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-white/40 hover:bg-white/10"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
