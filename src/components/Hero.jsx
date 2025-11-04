import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Interactive Spline scene (moves with mouse — no click needed) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/60 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.20),transparent_55%)]"></div>

      {/* Animated aura ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_var(--deg),rgba(34,197,94,0.0),rgba(14,165,233,0.15),rgba(168,85,247,0.18),rgba(249,115,22,0.12),transparent)] blur-3xl opacity-60" style={{ ['--deg']: '0deg' }}></div>

      <div className="relative container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl text-white"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
            Web Developer • React • Node.js
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="mt-6 font-bold text-4xl leading-tight md:text-6xl">
            Bruno <span className="text-cyan-300">Cavazza</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-slate-300 text-lg">
            I build modern, performant web experiences with JavaScript technologies. Passionate about clean UI, strong UX, and collaborative product development.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 grid gap-4 sm:flex sm:items-center sm:gap-6">
            <motion.a
              whileHover={{ y: -2, boxShadow: '0 10px 24px rgba(34,211,238,0.35)', filter: 'saturate(1.1)' }}
              whileTap={{ scale: 0.98 }}
              href="mailto:brunocavazza.off@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition"
            >
              <Mail size={18} /> Contact me
            </motion.a>
            <div className="flex flex-wrap items-center gap-4 text-slate-200/90">
              <span className="inline-flex items-center gap-2"><Phone size={16} className="text-cyan-300"/> (+54) 0351 3296316</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-300"/> La Calera, Córdoba, Argentina</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-6 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -2 }} href="https://dossin.com.ar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              Dossin <ExternalLink size={16} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://doubleg-miamirentals.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              Double G <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
