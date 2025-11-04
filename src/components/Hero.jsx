import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/60 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.20),transparent_60%)]"></div>

      <div className="relative container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
            Web Developer • React • Node.js
          </span>
          <h1 className="mt-6 font-bold text-4xl leading-tight md:text-6xl">
            Bruno <span className="text-cyan-300">Cavazza</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-lg">
            I build modern, performant web experiences with JavaScript technologies. Passionate about clean UI, strong UX, and collaborative product development.
          </p>

          <div className="mt-8 grid gap-4 sm:flex sm:items-center sm:gap-6">
            <a
              href="mailto:brunocavazza.off@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:brightness-110"
            >
              <Mail size={18} /> Contact me
            </a>
            <div className="flex flex-wrap items-center gap-4 text-slate-200/90">
              <span className="inline-flex items-center gap-2"><Phone size={16} className="text-cyan-300"/> (+54) 0351 3296316</span>
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-300"/> La Calera, Córdoba, Argentina</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://dossin.com.ar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              Dossin <ExternalLink size={16} />
            </a>
            <a href="https://doubleg-miamirentals.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              Double G <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
