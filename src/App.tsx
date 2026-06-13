import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import InteractionLayer from './components/InteractionLayer';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';

interface Section {
  id: string;
  Component: React.FC<any>;
}

const SECTIONS: Section[] = [
  { id: 'hero', Component: () => <Hero><CTASection /></Hero> },
  { id: 'about', Component: AboutSection },
  { id: 'features', Component: FeaturesSection },
  { id: 'cta', Component: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 italic">Join the Prototype.</h2>
        <CTASection />
      </div>
    </div>
  ) }
];

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (isAnimating) return;

    if (e.deltaY > 50 && currentSection < SECTIONS.length - 1) {
      setIsAnimating(true);
      setCurrentSection(prev => prev + 1);
    } else if (e.deltaY < -50 && currentSection > 0) {
      setIsAnimating(true);
      setCurrentSection(prev => prev - 1);
    }
  }, [currentSection, isAnimating]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  const ActiveComponent = SECTIONS[currentSection].Component;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050001]">
      <BackgroundVideo />
      <InteractionLayer />
      <Navbar />
      
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setIsAnimating(false)}
            className="w-full h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {SECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSection(i);
              }
            }}
            className={`w-1 h-8 transition-all duration-700 ${
              i === currentSection ? 'bg-wine-600 h-12' : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Grid Overlay for Architectural feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-20">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Bottom Label (Editorial detail) */}
      <div className="fixed bottom-8 left-8 z-30 text-[9px] font-medium tracking-[0.4em] uppercase text-white/30 hidden md:block">
        Design © 2025 Remake Studio / All Rights Reserved
      </div>
      
      <div className="fixed bottom-8 right-8 z-30 text-[9px] font-medium tracking-[0.4em] uppercase text-white/30 hidden md:block">
        0{currentSection + 1} / 04 — {SECTIONS[currentSection].id.toUpperCase()}
      </div>
    </main>
  );
};

export default App;
