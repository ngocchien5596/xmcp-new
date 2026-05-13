'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Link from 'next/link';
import { ArrowRight, Search, FileText, Briefcase, Package } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for search
const SEARCH_DATA = {
  products: [
    { id: 'xi-mang-pcb40', title: 'Xi măng Cẩm Phả PCB40', type: 'Sản phẩm', category: 'Xi măng' },
    { id: 'xi-mang-da-dung', title: 'Xi măng Đa dụng', type: 'Sản phẩm', category: 'Xi măng' },
    { id: 'clinker', title: 'Clinker Cẩm Phả', type: 'Sản phẩm', category: 'Clinker' },
  ],
  projects: [
    { id: 'cau-cua-luc', title: 'Cầu Cửa Lục 1', type: 'Dự án', category: 'Hạ tầng' },
    { id: 'cao-toc-long-thanh', title: 'Cao tốc Long Thành - Dầu Giây', type: 'Dự án', category: 'Hạ tầng' },
    { id: 'nhiet-dien-cam-pha', title: 'Nhà máy Nhiệt điện Cẩm Phả', type: 'Dự án', category: 'Công nghiệp' },
  ],
  news: [
    { id: 1, title: 'Xi măng Cẩm Phả công bố chiến lược Phát triển Xanh 2026', type: 'Tin tức', category: 'Sự kiện' },
    { id: 2, title: 'Xu hướng sử dụng xi măng bền vững trong xây dựng hiện đại', type: 'Tin tức', category: 'Kiến thức' },
    { id: 3, title: 'Khai trương phòng thí nghiệm VILAS tiêu chuẩn quốc tế', type: 'Tin tức', category: 'Sự kiện' },
  ]
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = [
    ...SEARCH_DATA.products.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
    ...SEARCH_DATA.projects.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
    ...SEARCH_DATA.news.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-viettel-red/10 rounded-full mb-6 text-viettel-red">
            <Search className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-viettel-dark mb-4">
            {results.length > 0 ? `Tìm thấy ${results.length} kết quả cho "${query}"` : `Không tìm thấy kết quả cho "${query}"`}
          </h2>
          <p className="text-gray-500">
            {results.length > 0 
              ? 'Khám phá các sản phẩm, dự án và tin tức liên quan đến từ khóa tìm kiếm của bạn.' 
              : 'Vui lòng thử tìm kiếm với từ khóa khác hoặc liên hệ với chúng tôi để được hỗ trợ.'}
          </p>
        </div>
      </RevealOnScroll>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <RevealOnScroll key={`${result.type}-${result.id}`} delay={index * 0.1}>
              <Link 
                href={result.type === 'Sản phẩm' ? '/products' : result.type === 'Dự án' ? '/projects' : '/news'}
                className="group block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-viettel-red/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-viettel-red/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-viettel-red/10 transition-colors duration-500" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-viettel-gray rounded-xl text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-colors duration-500">
                    {result.type === 'Sản phẩm' ? <Package className="w-6 h-6" /> : 
                     result.type === 'Dự án' ? <Briefcase className="w-6 h-6" /> : 
                     <FileText className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold text-viettel-red px-3 py-1 bg-viettel-red/10 rounded-full uppercase tracking-wider">
                    {result.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-viettel-dark mb-3 group-hover:text-viettel-red transition-colors duration-300 line-clamp-2">
                  {result.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-400 mb-6 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-viettel-red mr-2" />
                  {result.category}
                </div>

                <div className="flex items-center text-viettel-red font-bold text-sm">
                  XEM CHI TIẾT
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-viettel-gray/30 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="text-gray-400 mb-6">
            <Search className="w-16 h-16 mx-auto opacity-20" />
          </div>
          <p className="text-viettel-dark font-medium mb-8">Chúng tôi không tìm thấy nội dung phù hợp với từ khóa của bạn.</p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-viettel-red text-white rounded-full font-bold hover:bg-viettel-dark transition-all duration-300 shadow-lg shadow-red-500/20"
          >
            QUAY LẠI TRANG CHỦ
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="flex-grow">
      <InternalHero 
        title="KẾT QUẢ"
        highlightText="TÌM KIẾM"
        subtitle="Hệ thống tìm kiếm thông minh giúp bạn nhanh chóng tiếp cận thông tin về sản phẩm, dự án và tin tức của Xi măng Cẩm Phả."
      />
      
      <Suspense fallback={
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-viettel-red border-t-transparent rounded-full mx-auto" />
        </div>
      }>
        <SearchResults />
      </Suspense>
    </main>
  );
}
