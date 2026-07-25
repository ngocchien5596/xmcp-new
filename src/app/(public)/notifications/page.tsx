'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Link from 'next/link';
import { Filter, Search, FileText, ChevronRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Pagination } from '@/components/ui/Pagination';
import { NOTIFICATIONS_DATA, NotificationItem } from '@/data/notifications';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'shareholder', label: 'Cổ đông' },
  { id: 'finance', label: 'Tài chính' },
  { id: 'internal', label: 'Nội bộ' },
  { id: 'general', label: 'Chung' },
] as const;

// Rule 7.4: Module-level cache for repeated badge class lookups
const badgeClassCache = new Map<string, string>();

function getBadgeClass(category: string): string {
  if (badgeClassCache.has(category)) {
    return badgeClassCache.get(category)!;
  }
  
  let classes = "inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ";
  switch (category) {
    case 'finance':
      classes += "bg-emerald-50 text-emerald-600 border border-emerald-100";
      break;
    case 'shareholder':
      classes += "bg-blue-50 text-blue-600 border border-blue-100";
      break;
    case 'internal':
      classes += "bg-amber-50 text-amber-600 border border-amber-100";
      break;
    case 'general':
      classes += "bg-teal-50 text-teal-600 border border-teal-100";
      break;
    default:
      classes += "bg-gray-50 text-gray-600 border border-gray-100";
  }
  
  badgeClassCache.set(category, classes);
  return classes;
}

export default function NotificationsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter & Search Logic
  const filteredNotifications = useMemo(() => {
    return NOTIFICATIONS_DATA.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredNotifications.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="flex-grow min-h-screen bg-slate-50/50">
      <InternalHero
        title="THÔNG BÁO &"
        highlightText="CÔNG BỐ"
        subtitle="Cập nhật chính thức các thông báo, báo cáo tài chính và nghị quyết từ Ban điều hành Công ty Cổ phần Xi măng Cẩm Phả."
      />

      {/* Control Panel: Search & Filter */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar">
              <span className="flex items-center text-viettel-dark font-bold text-xs uppercase tracking-widest mr-2 whitespace-nowrap">
                <Filter className="w-4 h-4 mr-2 text-viettel-red" /> Lọc thông báo:
              </span>
              <div className="flex gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={cn(
                      "px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 border uppercase tracking-wider whitespace-nowrap",
                      activeTab === cat.id
                        ? "bg-viettel-red text-white border-viettel-red shadow-md"
                        : "bg-white text-gray-500 border-gray-200 hover:border-viettel-red hover:text-viettel-red"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm thông báo..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-full text-xs font-medium focus:outline-none focus:border-viettel-red focus:bg-white transition-all"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Notifications Table / List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            {paginatedItems.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Không tìm thấy thông báo nào phù hợp với bộ lọc hiện tại.</p>
              </div>
            ) : (
              <div className="bg-transparent">
                
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left border-separate border-spacing-y-4">
                    <thead>
                      <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <th className="pb-2 px-8 w-44 whitespace-nowrap">Ngày đăng</th>
                        <th className="pb-2 px-6 w-40">Phân loại</th>
                        <th className="pb-2 px-6 w-80 md:w-96">Tên thông báo</th>
                        <th className="pb-2 px-6">Nội dung</th>
                        <th className="pb-2 px-8 text-center w-36 whitespace-nowrap"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedItems.map((item) => (
                        <tr 
                          key={item.id} 
                          onClick={() => router.push(`/notifications/${item.id}`)}
                          className="bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group shadow-sm rounded-2xl cursor-pointer"
                        >
                          {/* Col 1: Date */}
                          <td className="py-5 px-8 align-middle text-xs font-semibold text-gray-455 whitespace-nowrap rounded-l-2xl border-y border-l border-gray-100/80 group-hover:border-slate-200">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-viettel-red/75" />
                              {item.date}
                            </span>
                          </td>
                          
                          {/* Col 2: Category Badge */}
                          <td className="py-5 px-6 align-middle border-y border-gray-100/80 group-hover:border-slate-200">
                            <span className={getBadgeClass(item.category)}>
                              {item.categoryLabel}
                            </span>
                          </td>
                          
                          {/* Col 3: Title */}
                          <td className="py-5 px-6 align-middle border-y border-gray-100/80 group-hover:border-slate-200">
                            <h4 className="text-sm font-bold text-viettel-dark group-hover:text-viettel-red transition-colors line-clamp-2 leading-snug">
                              {item.title}
                            </h4>
                          </td>
                          
                          {/* Col 4: Content */}
                          <td className="py-5 px-6 align-middle border-y border-gray-100/80 group-hover:border-slate-200">
                            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </td>
                          
                          {/* Col 5: Actions */}
                          <td className="py-5 px-8 align-middle text-center whitespace-nowrap rounded-r-2xl border-y border-r border-gray-100/80 group-hover:border-slate-200">
                            <Link
                              href={`/notifications/${item.id}`}
                              className="inline-flex items-center justify-center px-5 py-2 bg-slate-100 group-hover:bg-viettel-red text-slate-700 group-hover:text-white rounded-xl text-xs font-bold transition-all uppercase tracking-wider gap-1 whitespace-nowrap"
                            >
                              Chi tiết
                              <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card List View */}
                <div className="md:hidden flex flex-col gap-4">
                  {paginatedItems.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => router.push(`/notifications/${item.id}`)}
                      className="p-6 bg-white border border-gray-100/80 rounded-2xl hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1 whitespace-nowrap">
                          <Calendar className="w-3 h-3 text-viettel-red" />
                          {item.date}
                        </span>
                        <span className={getBadgeClass(item.category)}>
                          {item.categoryLabel}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-bold text-viettel-dark mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-end border-t border-gray-50 pt-4 mt-2">
                        <Link
                          href={`/notifications/${item.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-viettel-red text-white font-bold text-[10px] rounded-lg shadow-sm uppercase tracking-wider whitespace-nowrap"
                        >
                          Xem Chi tiết
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </RevealOnScroll>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <RevealOnScroll className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </RevealOnScroll>
          )}
        </div>
      </section>
    </main>
  );
}
