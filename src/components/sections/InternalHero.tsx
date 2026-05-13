'use client';

import { motion } from 'framer-motion';

interface InternalHeroProps {
  title: string;
  highlightText?: string;
  subtitle: string;
}

export function InternalHero({ title, highlightText, subtitle }: InternalHeroProps) {
  return (
    <section className="bg-viettel-dark pt-32 pb-16 relative overflow-hidden">
      {/* Background Image with Zoom */}
      <div 
        className="absolute inset-0 z-0 scale-150 opacity-40"
        style={{
          backgroundImage: "url('/assets/design/banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-viettel-dark/80 via-viettel-dark/60 to-viettel-dark z-1"></div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-2">
        <div className="absolute top-0 right-0 w-96 h-96 bg-viettel-red rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-viettel-red rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            {title} {highlightText && <span className="text-viettel-red">{highlightText}</span>}
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
