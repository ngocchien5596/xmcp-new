'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Link from 'next/link';

import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'news', label: 'Tin tức' },
  { id: 'knowledge', label: 'Kiến thức ngành' },
  { id: 'pr', label: 'Báo chí' },
];

const NEWS_DATA = [
  {
    id: 1,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Xi măng Cẩm Phả công bố chiến lược Phát triển Xanh 2026: Hướng tới sản xuất bền vững.',
    description: 'Tại hội nghị khách hàng thường niên, Xi măng Cẩm Phả đã chính thức công bố lộ trình giảm phát thải carbon, tập trung vào việc tối ưu hóa dây chuyền sản xuất và ứng dụng nguyên liệu thay thế thân thiện với môi trường.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    date: '20 Tháng 5, 2026',
    author: 'Phòng Truyền thông',
    featured: true,
  },
  {
    id: 2,
    category: 'knowledge',
    categoryLabel: 'Kiến thức ngành',
    title: 'Xu hướng sử dụng xi măng bền vững trong xây dựng hiện đại.',
    description: 'Tìm hiểu cách các loại xi măng hỗn hợp giúp tăng độ bền cho công trình ven biển và giảm thiểu tác động đến môi trường tự nhiên.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    date: '18 Tháng 5, 2026',
  },
  {
    id: 3,
    category: 'pr',
    categoryLabel: 'Báo chí',
    title: 'Xi măng Cẩm Phả đồng hành cùng các dự án hạ tầng trọng điểm phía Nam.',
    description: 'Ký kết thỏa thuận cung ứng xi măng cho các gói thầu quan trọng tại dự án sân bay quốc tế Long Thành và hệ thống đường cao tốc ven biển.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
    date: '12 Tháng 5, 2026',
  },
  {
    id: 4,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Khai trương phòng thí nghiệm VILAS tiêu chuẩn quốc tế tại Nhà máy Cẩm Phả.',
    description: 'Việc đạt chứng nhận VILAS giúp Xi măng Cẩm Phả chủ động kiểm soát chất lượng nghiêm ngặt và đáp ứng các tiêu chuẩn xuất khẩu khắt khe nhất.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    date: '05 Tháng 5, 2026',
  },
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNews = NEWS_DATA.filter(item =>
    activeTab === 'all' || item.category === activeTab
  );

  return (
    <main className="flex-grow">
      <InternalHero
        title="TIN TỨC &"
        highlightText="SỰ KIỆN"
        subtitle="Cập nhật những thông tin mới nhất về công nghệ, dự án và các hoạt động nổi bật của Xi măng Cẩm Phả."
      />

      {/* News Filters */}
      <section className="py-4 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-viettel-dark font-bold">
              <Filter className="w-5 h-5 mr-3 text-viettel-red" />
              LỌC TIN TỨC
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-widest",
                    activeTab === cat.id 
                      ? "bg-viettel-red text-white border-viettel-red shadow-lg shadow-red-500/20" 
                      : "bg-white text-gray-500 border-gray-200 hover:border-viettel-red hover:text-viettel-red"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-viettel-gray/30">
        <div className="container mx-auto px-4">

          {/* Featured News (Only if tab is 'all' or 'news') */}
          <AnimatePresence mode="wait">
            {(activeTab === 'all' || activeTab === 'news') && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-20"
              >
                <RevealOnScroll>
                  <Link href={`/news/${NEWS_DATA[0].id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
                    <div className="overflow-hidden rounded-2xl h-[400px] relative">
                      <img
                        src={NEWS_DATA[0].image}
                        alt={NEWS_DATA[0].title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-red-50 text-viettel-red text-xs font-bold rounded mb-4 tracking-wider">
                        TIN NỔI BẬT
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark mb-6 group-hover:text-viettel-red transition-colors leading-tight">
                        {NEWS_DATA[0].title}
                      </h2>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {NEWS_DATA[0].description}
                      </p>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="font-semibold text-viettel-dark">{NEWS_DATA[0].author}</span>
                        <span className="mx-3 text-gray-300">|</span>
                        <span>{NEWS_DATA[0].date}</span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              </motion.div>
            )}
          </AnimatePresence>

          {/* News Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence>
              {filteredNews.filter(item => !item.featured || activeTab !== 'all').map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/news/${item.id}`} className="group block">
                    <div className="overflow-hidden rounded-xl mb-6 h-64 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-viettel-red mb-3 block uppercase tracking-widest">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold text-viettel-dark mb-3 group-hover:text-viettel-red transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          <RevealOnScroll className="mt-20">
            <div className="flex justify-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-viettel-dark bg-viettel-red text-white font-bold transition-all">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-viettel-dark hover:bg-viettel-red hover:text-white transition-all font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-viettel-dark hover:bg-viettel-red hover:text-white transition-all font-medium">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-viettel-dark hover:bg-viettel-red hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </main>
  );
}
