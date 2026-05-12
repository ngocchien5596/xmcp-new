'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ChevronRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'TẤT CẢ' },
  { id: 'news', label: 'TIN TỨC' },
  { id: 'blog', label: 'BLOG' },
  { id: 'pr', label: 'BÁO CHÍ' },
];

const POSTS = [
  {
    id: 1,
    category: 'news',
    categoryLabel: 'Tin tức',
    date: 'Thứ Tư 29, 4/2026',
    title: 'GIẢI PHÁP ĐƯỢC CỤC TẦN SỐ VÔ TUYẾN ĐIỆN ỨNG DỤNG TRONG XỬ LÝ NHIỄU 4G/5G',
    description: 'iSpectra là nền tảng thu thập, phân tích và quản lý nhiễu thông tin di động thời gian thực, đáp ứng đầy đủ các tiêu chuẩn...',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'blog',
    categoryLabel: 'Blog',
    date: 'Thứ Hai 27, 4/2026',
    title: 'PHÁT TRIỂN HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP TRÊN NỀN TẢNG CLOUD',
    description: 'Sự dịch chuyển từ On-premise sang Cloud mang lại lợi thế cạnh tranh vượt trội cho doanh nghiệp trong việc tối ưu hóa chi phí...',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'pr',
    categoryLabel: 'Báo chí',
    date: 'Thứ Sáu 24, 4/2026',
    title: 'VIETTEL SOFTWARE NHẬN GIẢI THƯỞNG SAO KHUÊ 2026',
    description: 'Vượt qua nhiều đối thủ nặng ký, giải pháp chuyển đổi số của Viettel Software đã xuất sắc giành giải thưởng danh giá...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  }
];

export function NewsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPosts = activeTab === 'all' 
    ? POSTS 
    : POSTS.filter(post => post.category === activeTab);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Tin tức & Sự kiện"
          ghostText="TIN TỨC & SỰ KIỆN"
        />

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-100 gap-6">
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
          <Link href="/news" className="text-viettel-red text-sm font-bold flex items-center hover:underline group">
            Xem thêm <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="group cursor-pointer news-card"
              >
                <div className="overflow-hidden rounded-2xl mb-6 h-64 shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-viettel-red bg-red-50 px-2 py-1 rounded">
                    {post.categoryLabel}
                  </span>
                  <span className="text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-viettel-dark mb-3 group-hover:text-viettel-red transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {post.description}
                </p>
                <span className="text-xs text-viettel-red font-bold uppercase border-b border-transparent group-hover:border-viettel-red transition-all">
                  Xem chi tiết
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
