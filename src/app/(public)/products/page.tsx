'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { Filter, Search, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { Pagination } from '@/components/ui/Pagination';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

const CATEGORIES = ['Tất cả', 'Xi măng', 'Clinker'];

import { PRODUCTS_DATA } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search change
  };

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'Tất cả' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="flex-grow">
      <InternalHero
        title="SẢN PHẨM &"
        highlightText="GIÁ TRỊ"
        subtitle="Xi măng Cẩm Phả cung cấp hệ sinh thái vật liệu xây dựng chất lượng cao, đáp ứng mọi tiêu chuẩn kỹ thuật khắt khe nhất."
      />

      {/* Product Filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar">
              <span className="flex items-center text-viettel-dark font-bold text-xs uppercase tracking-widest mr-2 whitespace-nowrap">
                <Filter className="w-4 h-4 mr-2 text-viettel-red" /> Lọc sản phẩm:
              </span>
              <div className="flex gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 border uppercase tracking-wider whitespace-nowrap",
                      activeCategory === cat 
                        ? "bg-viettel-red text-white border-viettel-red shadow-md" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-viettel-red hover:text-viettel-red"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-full text-xs font-medium focus:outline-none focus:border-viettel-red focus:bg-white transition-all"
              />
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          {paginatedProducts.length === 0 ? (
            <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm max-w-2xl mx-auto">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.</p>
            </div>
          ) : (
            <>
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="group block bg-white h-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 product-card"
                      >
                        <div className="h-64 overflow-hidden relative p-8 bg-viettel-gray/30">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                          />
                          <div className="absolute inset-0 bg-viettel-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-6 py-2 bg-white text-viettel-dark text-sm font-bold !font-sans rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-widest">
                              Tìm hiểu thêm
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold text-viettel-red rounded-full uppercase tracking-tighter">
                              {product.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-xl font-bold text-viettel-dark mb-4 group-hover:text-viettel-red transition-colors leading-tight uppercase tracking-tight">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                          <div className="flex items-center text-viettel-red font-bold !font-sans text-sm uppercase tracking-widest group/link">
                            CHI TIẾT SẢN PHẨM
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
