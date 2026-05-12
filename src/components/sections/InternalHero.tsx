'use client';

import { motion } from 'framer-motion';

interface InternalHeroProps {
  title: string;
  highlightText?: string;
  subtitle: string;
}

export function InternalHero({ title, highlightText, subtitle }: InternalHeroProps) {
  return (
    <section className="bg-viettel-dark pt-48 pb-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-viettel-red rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-viettel-red rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            {title} {highlightText && <span className="text-viettel-red">{highlightText}</span>}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
