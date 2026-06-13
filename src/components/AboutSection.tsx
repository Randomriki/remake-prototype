import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-32 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-wine-600 text-[10px] tracking-[0.4em] uppercase mb-4 block">Design Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The intersection of <span className="italic">architecture</span> and digital fluidity.
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md font-light tracking-wide">
            We believe that digital interfaces should be experienced, not just used. Remake transforms standard interactions into cinematic moments through a lens of architectural discipline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] bg-wine-900/50 border border-white/5 overflow-hidden rounded-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-wine-600/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
             <div className="w-full h-px bg-white/10 relative">
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-wine-600/50 blur-sm" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
