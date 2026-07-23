'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';

interface RelatedProductsProps {
  currentProductId: string;
  products: Product[];
}

export function RelatedProducts({ currentProductId, products }: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lọc bỏ sản phẩm hiện tại
  const otherProducts = products.filter(p => p.id !== currentProductId);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (otherProducts.length === 0) return null;

  return (
    <section className="py-24 bg-viettel-gray relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-viettel-red/[0.02] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-viettel-dark uppercase tracking-tight">Sản phẩm khác</h2>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/products" 
                className="text-sm font-bold !font-sans text-viettel-red flex items-center hover:translate-x-2 transition-all uppercase tracking-widest group"
              >
                Tất cả <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="hidden md:flex space-x-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 group-active:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all duration-300 shadow-sm group"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 group-active:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex space-x-8 overflow-x-auto hide-scrollbar pb-10 snap-x"
          >
            {otherProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="w-[calc(100%-2rem)] md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 group snap-start flex-shrink-0 flex flex-col product-card"
              >
                <div className="h-64 overflow-hidden relative p-8 bg-viettel-gray/30">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold text-viettel-red rounded-full uppercase tracking-tighter">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold !font-sans text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors leading-tight uppercase tracking-tight line-clamp-2 min-h-[3.5rem]">
                      {product.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/products/${product.id}`} 
                      className="inline-flex items-center text-sm font-bold !font-sans text-viettel-red uppercase tracking-widest hover:text-red-700 transition-all group/link"
                    >
                      CHI TIẾT SẢN PHẨM
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
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
