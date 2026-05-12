'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    title: 'Cầu Cửa Lục 1 (Cầu Tình Yêu) - Quảng Ninh',
    image: 'https://images.unsplash.com/photo-1545910668-e3251e39a3f2?auto=format&fit=crop&w=600&q=80',
    category: 'Hạ tầng Giao thông'
  },
  {
    id: 2,
    title: 'Sân bay Phan Thiết - Bình Thuận',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80',
    category: 'Hàng không'
  },
  {
    id: 3,
    title: 'Sun World Ocean Park Hạ Long',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    category: 'Du lịch - Nghỉ dưỡng'
  },
  {
    id: 4,
    title: 'Cao tốc TP.HCM – Long Thành – Dầu Giây',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=600&q=80',
    category: 'Hạ tầng Giao thông'
  },
  {
    id: 5,
    title: 'Vinhomes Dragon Bay Hạ Long',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
    category: 'Khu Đô thị'
  }
];

export function CustomerStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-viettel-gray relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeader 
            title="Dự án Tiêu biểu"
            subtitle="Xi măng Cẩm Phả tự hào đồng hành cùng các công trình trọng điểm quốc gia và quốc tế."
            ghostText="DỰ ÁN TIÊU BIỂU"
            centered={false}
            className="mb-0 flex-grow"
          />
          
          <div className="flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 group-active:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 group-active:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="flex space-x-8 overflow-x-auto hide-scrollbar pb-12 snap-x"
        >
          {STORIES.map((story) => (
            <motion.div 
              key={story.id}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="min-w-[300px] md:min-w-[380px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group snap-start flex-shrink-0 customer-story-card"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-viettel-red mb-3 block">
                  {story.category}
                </span>
                <h3 className="text-lg font-bold text-viettel-dark mb-6 line-clamp-2 leading-tight group-hover:text-viettel-red transition-colors">
                  {story.title}
                </h3>
                <a href="#" className="text-sm font-bold text-viettel-red flex items-center hover:gap-2 transition-all">
                  Xem thêm <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
