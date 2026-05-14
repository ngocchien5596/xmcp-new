'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Calendar, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NEWS_DATA } from '@/data/news';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'news', label: 'Tin tức' },
  { id: 'knowledge', label: 'Kiến thức ngành' },
  { id: 'pr', label: 'Báo chí' },
];

export function NewsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPosts = activeTab === 'all'
    ? NEWS_DATA.slice(0, 4)
    : NEWS_DATA.filter(post => post.category === activeTab).slice(0, 4);

  const mainPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 4);

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/design/baocao-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-50/60 backdrop-blur-[2px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Tin tức"
          ghostText="TIN TỨC"
        />

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b-2 border-gray-300 gap-6">
          <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-400 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "relative pb-4 whitespace-nowrap transition-colors",
                  activeTab === cat.id ? "text-viettel-red" : "hover:text-viettel-red"
                )}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-viettel-red"
                  />
                )}
              </button>
            ))}
          </div>
          <Link href="/news" className="text-viettel-red text-sm font-bold !font-sans flex items-center uppercase tracking-widest hover:text-red-700 transition-colors group">
            Xem thêm <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {/* Main Post - Left (2/3) */}
              {mainPost && (
                <motion.div
                  key={`main-${mainPost.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2 group cursor-pointer"
                >
                  <Link href={`/news/${mainPost.id}`} className="block">
                    <div className="overflow-hidden rounded-3xl mb-6 h-[300px] md:h-[450px] shadow-xl relative">
                      <img
                        src={mainPost.image}
                        alt={mainPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-viettel-red text-white text-[10px] font-bold rounded-lg shadow-lg uppercase tracking-widest">
                          Tin nổi bật
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4 text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-viettel-red">{mainPost.categoryLabel}</span>
                      <span className="text-gray-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-2" /> {mainPost.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold !font-sans text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors leading-[1.2] tracking-tight uppercase">
                      {mainPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                      {mainPost.description}
                    </p>
                    <div className="flex items-center text-viettel-red font-bold !font-sans text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      Đọc tiếp <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Side Posts - Right (1/3) */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                {sidePosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link href={`/news/${post.id}`} className="flex gap-5 group items-start">
                      <div className="w-36 h-32 md:w-52 md:h-36 flex-shrink-0 overflow-hidden rounded-2xl shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex flex-col py-1">
                        <div className="text-[10px] font-bold text-viettel-red uppercase tracking-widest mb-2">
                          {post.categoryLabel}
                        </div>
                        <h4 className="text-sm font-bold !font-sans text-viettel-dark group-hover:text-viettel-red transition-colors line-clamp-3 leading-snug mb-2">
                          {post.title}
                        </h4>
                        <div className="text-[10px] text-gray-400 font-medium">
                          {post.date}
                        </div>
                      </div>
                    </Link>
                    {index < sidePosts.length - 1 && (
                      <div className="mt-8 border-b border-gray-300"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
