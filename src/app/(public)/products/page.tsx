'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Link from 'next/link';

const PRODUCTS_DATA = [
  {
    id: '1',
    title: 'Xi măng Cẩm Phả PCB40',
    description: 'Sản phẩm chủ lực có cường độ nén cao, tính công tác tốt, phù hợp cho các công trình hạ tầng và dân dụng yêu cầu độ bền vững cao.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=800&auto=format&fit=crop',
    delay: 0,
  },
  {
    id: '2',
    title: 'Xi măng Bền Sunfat (Type II & V)',
    description: 'Dòng sản phẩm chuyên dụng cho các công trình ven biển, đập thủy điện hoặc môi trường xâm thực, chống ăn mòn hiệu quả.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    delay: 0.1,
  },
  {
    id: '3',
    title: 'Xi măng Cẩm Phả Đa dụng',
    description: 'Giải pháp tối ưu cho mọi công trình, dễ thi công, giúp tiết kiệm chi phí và đảm bảo tính thẩm mỹ cho bề mặt hoàn thiện.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop',
    delay: 0.2,
  },
];

export default function ProductsPage() {
  return (
    <main className="flex-grow">
      <InternalHero 
        title="SẢN PHẨM &" 
        highlightText="GIẢI PHÁP" 
        subtitle="Xi măng Cẩm Phả cung cấp hệ sinh thái vật liệu xây dựng chất lượng cao, đáp ứng mọi tiêu chuẩn kỹ thuật khắt khe nhất."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <RevealOnScroll key={product.id} delay={product.delay}>
                <Link 
                  href={`/products/${product.id}`}
                  className="group block bg-viettel-gray rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                    <div className="flex items-center text-viettel-red font-bold text-sm">
                      CHI TIẾT SẢN PHẨM 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
