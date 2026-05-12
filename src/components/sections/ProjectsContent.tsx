'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronRight, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'Tất cả',
  'Hạ tầng Giao thông',
  'Hàng không',
  'Công trình Công nghiệp',
  'Du lịch - Nghỉ dưỡng',
  'Khu Đô thị'
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

interface ProjectsContentProps {
  projects: Project[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredProjects = activeCategory === 'Tất cả' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="flex-grow">
      <InternalHero 
        title="DỰ ÁN"
        highlightText="TIÊU BIỂU"
        subtitle="Hành trình kiến tạo những công trình biểu tượng, đồng hành cùng sự phát triển hạ tầng bền vững của Việt Nam."
      />

      {/* Project Filters */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center text-viettel-dark font-bold">
              <Filter className="w-5 h-5 mr-3 text-viettel-red" />
              LỌC DỰ ÁN
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-widest",
                    activeCategory === cat 
                      ? "bg-viettel-red text-white border-viettel-red shadow-lg shadow-red-500/20" 
                      : "bg-white text-gray-500 border-gray-200 hover:border-viettel-red hover:text-viettel-red"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-viettel-gray relative overflow-hidden">
        {/* Subtle Decorative Circle */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-viettel-red/[0.02] rounded-full -mr-96 -mt-96 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-viettel-red/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-viettel-dark text-[10px] font-bold rounded-lg shadow-sm">
                        Năm {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <button className="flex items-center text-xs font-bold text-viettel-red group/btn uppercase tracking-widest">
                        Xem chi tiết 
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-gray-400 font-medium italic">Không tìm thấy dự án nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-viettel-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-viettel-red p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Cùng kiến tạo những công trình vĩ đại</h2>
              <p className="text-red-50 text-lg md:text-xl font-medium max-w-xl">
                Xi măng Cẩm Phả luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình xây dựng niềm tin và sự thịnh vượng.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button className="px-10 py-5 bg-white text-viettel-red font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-widest text-sm">
                Liên hệ hợp tác
              </button>
            </div>
            
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mb-32 -mr-32"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
