'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  categoryLabel: string;
  date: string;
}

interface RelatedNewsProps {
  currentNewsId: number;
  newsItems: NewsItem[];
}

export function RelatedNews({ currentNewsId, newsItems }: RelatedNewsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lọc bỏ tin tức hiện tại
  const otherNews = newsItems.filter(n => n.id !== currentNewsId);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (otherNews.length === 0) return null;

  return (
    <section className="py-24 bg-viettel-gray relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-viettel-red/[0.02] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-viettel-dark uppercase tracking-tight">Bài viết liên quan</h2>

            <div className="flex items-center gap-6">
              <Link
                href="/news"
                className="text-sm font-bold !font-sans text-viettel-red flex items-center hover:translate-x-2 transition-all uppercase tracking-widest group"
              >
                Tất cả <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex space-x-3">
                <button
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 group-active:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 group-active:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex space-x-8 overflow-x-auto hide-scrollbar pb-12 snap-x"
          >
            {otherNews.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="w-[calc(100%-2rem)] md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group snap-start flex-shrink-0 border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-viettel-red/90 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <Link href={`/news/${item.id}`}>
                    <h3 className="text-xl font-bold !font-sans text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors line-clamp-2 leading-snug min-h-[3.5rem]">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/news/${item.id}`}
                      className="flex items-center text-sm font-bold !font-sans text-viettel-red group/btn uppercase tracking-widest hover:text-red-700 transition-colors"
                    >
                      Chi tiết
                      <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
