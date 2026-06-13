import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MousePointer2, Zap } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Layers size={24} />,
      title: "Editorial Logic",
      desc: "Strict grid discipline combined with heavy whitespace for high-end readability."
    },
    {
      icon: <MousePointer2 size={24} />,
      title: "Fluid Physics",
      desc: "Interactions driven by inertia and motion blur for an 'expensive' feel."
    },
    {
      icon: <Zap size={24} />,
      title: "Cinematic Motion",
      desc: "Frame-perfect transitions that mirror high-end architectural film-making."
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-32">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center"
        >
          <span className="text-wine-600 text-[10px] tracking-[0.4em] uppercase mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic">Technical Precision.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              className="glass-dark p-12 group hover:border-wine-600/30 transition-colors duration-700"
            >
              <div className="text-wine-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-4 tracking-tight uppercase">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
