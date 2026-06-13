import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="text-[10px] sm:text-[12px] font-medium tracking-[0.4em] uppercase text-wine-600 mb-6"
      >
        The New Standard of Experience
      </motion.span>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="text-5xl md:text-8xl lg:text-9xl font-serif text-gradient leading-[0.9] mb-12 tracking-tight"
      >
        Architecting <br />
        <span className="italic">Digital Emotion</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Hero;
