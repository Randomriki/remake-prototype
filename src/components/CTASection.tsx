import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTASection: React.FC = () => {
  const [state, setState] = useState<'initial' | 'email' | 'success'>('initial');
  const [email, setEmail] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const fullPlaceholder = 'Enter your email...';

  useEffect(() => {
    if (state === 'email') {
      let i = 0;
      const interval = setInterval(() => {
        setPlaceholder(fullPlaceholder.slice(0, i));
        i++;
        if (i > fullPlaceholder.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [state]);

  useEffect(() => {
    if (state === 'success') {
      const timer = setTimeout(() => {
        setState('initial');
        setEmail('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setState('success');
  };

  return (
    <div className="min-h-[60px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {state === 'initial' && (
          <motion.button
            key="initial"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            onClick={() => setState('email')}
            className="group relative glass px-10 py-4 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase overflow-hidden"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">Get early access</span>
            <div className="absolute inset-0 bg-wine-700/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(122,19,40,0.3)]" />
          </motion.button>
        )}

        {state === 'email' && (
          <motion.form
            key="email"
            initial={{ opacity: 0, width: 200 }}
            animate={{ opacity: 1, width: 320 }}
            exit={{ opacity: 0, width: 340 }}
            onSubmit={handleSubmit}
            className="relative flex items-center glass-dark p-1 rounded-full overflow-hidden"
          >
            <input
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="bg-transparent border-none outline-none px-6 py-3 w-full text-sm text-white placeholder-white/20"
            />
            <button
              type="submit"
              className="bg-wine-700 hover:bg-wine-600 p-2.5 rounded-full transition-colors mr-1"
            >
              <ArrowRight size={16} />
            </button>
          </motion.form>
        )}

        {state === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-wine-600 font-medium tracking-wide"
          >
            <Check size={20} />
            <span>Registration received.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CTASection;
