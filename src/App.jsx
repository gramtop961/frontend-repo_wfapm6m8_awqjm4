import React from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Hero />
      <Skills />
      <Experience />
      <Education />

      <footer className="relative z-10 border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Bruno Cavazza • Built with React, Tailwind, Framer Motion, and Spline
        </p>
      </footer>
    </div>
  );
}
