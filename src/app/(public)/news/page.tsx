'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Link from 'next/link';

import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Pagination } from '@/components/ui/Pagination';
import { NEWS_DATA } from '@/data/news';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'news', label: 'Tin tức' },
  { id: 'knowledge', label: 'Kiến thức ngành' },
  { id: 'pr', label: 'Báo chí' },
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const filteredNews = NEWS_DATA.filter(item =>
    activeTab === 'all' || item.category === activeTab
  );

  // Pagination logic
  // If 'all' or 'news', we show featured item separately, so we exclude it from the grid items
  const gridItems = filteredNews.filter(item => !item.featured || activeTab !== 'all');
  const totalPages = Math.ceil(gridItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = gridItems.slice(startIndex, startIndex + itemsPerPage);

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
                  onClick={() => handleTabChange(cat.id)}
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

          {/* Featured News (Only if tab is 'all' or 'news' and on first page) */}
          <AnimatePresence mode="wait">
            {(activeTab === 'all' || activeTab === 'news') && currentPage === 1 && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-20"
              >
                <RevealOnScroll>
                  <Link href={`/news/${NEWS_DATA[0].id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden border border-gray-100 p-6 lg:p-10 transition-all duration-500 group news-card">
                    <div className="overflow-hidden rounded-2xl h-[300px] lg:h-[400px] relative">
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
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold !font-sans text-viettel-dark mb-4 lg:mb-6 group-hover:text-viettel-red transition-colors leading-tight">
                        {NEWS_DATA[0].title}
                      </h2>
                      <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-lg">
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
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/news/${item.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 flex flex-col h-full news-card">
                    <div className="overflow-hidden h-56 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-bold text-viettel-red mb-3 block uppercase tracking-widest">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-lg font-bold !font-sans text-viettel-dark mb-3 group-hover:text-viettel-red transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                      <span className="text-xs text-gray-400 font-medium block mt-auto">{item.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          <RevealOnScroll className="mt-20">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </RevealOnScroll>

        </div>
      </section>
    </main>
  );
}
