import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Experience />
      <Skills />
      <Education />

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="container mx-auto px-6 py-10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Bruno Cavazza — Web Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
