import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium tracking-tighter uppercase">Remake</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
        <a href="#" className="transition-colors hover:text-white">Features</a>
        <a href="#" className="transition-colors hover:text-white">Pricing</a>
        <a href="#" className="transition-colors hover:text-white">About</a>
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-white text-white/70">
          Sign Up
        </a>
        <button className="glass-dark px-6 py-2 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase border border-white/5 hover:border-wine-600/50 transition-all duration-500">
          Login
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
