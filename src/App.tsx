import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import InteractionLayer from './components/InteractionLayer';

const App: React.FC = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050001]">
      <BackgroundVideo />
      <InteractionLayer />
      <Navbar />
      
      <Hero>
        <CTASection />
      </Hero>

      {/* Grid Overlay for Architectural feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-20">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Bottom Label (Editorial detail) */}
      <div className="fixed bottom-8 left-8 z-30 text-[9px] font-medium tracking-[0.4em] uppercase text-white/30 hidden md:block">
        Design © 2025 Asme Studio / All Rights Reserved
      </div>
      
      <div className="fixed bottom-8 right-8 z-30 text-[9px] font-medium tracking-[0.4em] uppercase text-white/30 hidden md:block">
        01 / 04 — Intro
      </div>
    </main>
  );
};

export default App;
