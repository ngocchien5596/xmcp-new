'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Image from 'next/image';

const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'V-BI System',
    description: 'Giải pháp phân tích dữ liệu thông minh giúp doanh nghiệp đưa ra quyết định chính xác dựa trên số liệu thực tế.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    delay: 0,
  },
  {
    id: 2,
    title: 'Digital Core Banking',
    description: 'Nền tảng ngân hàng số hiện đại, an mật và linh hoạt, hỗ trợ đa kênh giao dịch cho các định chế tài chính.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    delay: 0.1,
  },
  {
    id: 3,
    title: 'Smart City Platform',
    description: 'Hệ thống trung tâm điều hành thông minh tích hợp AI, giúp quản lý đô thị hiệu quả và bền vững.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dee5926ff97?q=80&w=800&auto=format&fit=crop',
    delay: 0.2,
  },
];

export default function ProductsPage() {
  return (
    <main className="flex-grow">
      <InternalHero 
        title="SẢN PHẨM &" 
        highlightText="GIẢI PHÁP" 
        subtitle="Những hệ sinh thái công nghệ thông minh giúp tối ưu hóa hiệu suất và nâng tầm quy trình quản trị doanh nghiệp hiện đại."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <RevealOnScroll key={product.id} delay={product.delay}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group bg-viettel-gray rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-viettel-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-6 py-2 bg-white text-viettel-dark font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Tìm hiểu thêm
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center text-viettel-red font-bold text-sm cursor-pointer">
                      CHI TIẾT SẢN PHẨM 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
