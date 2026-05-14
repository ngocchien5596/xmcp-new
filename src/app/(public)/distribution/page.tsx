'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Search, Building2, ChevronRight } from 'lucide-react';
import { DISTRIBUTORS, Distributor } from '@/data/distribution';
import { InternalHero } from '@/components/sections/InternalHero';
import { VietnamMap } from '@/components/distribution/VietnamMap';
import { cn } from '@/lib/utils';

export default function DistributionPage() {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'North' | 'Central' | 'South'>('All');
  const [hoveredDistributor, setHoveredDistributor] = useState<Distributor | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistributors = DISTRIBUTORS.filter(d =>
    (selectedRegion === 'All' || d.region === selectedRegion) &&
    (d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="flex-grow">
      <InternalHero
        title="HỆ THỐNG"
        highlightText="PHÂN PHỐI"
        subtitle="Mạng lưới nhà phân phối và đại lý rộng khắp cả nước, sẵn sàng đáp ứng nhu cầu xi măng chất lượng cao."
      />

      <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Sidebar & List */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm nhà phân phối..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-viettel-red/50 focus:bg-white transition-all text-sm font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['All', 'North', 'Central', 'South'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region as any)}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider",
                      selectedRegion === region
                        ? "bg-viettel-red text-white shadow-md shadow-red-100"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                  >
                    {region === 'All' ? 'Tất cả' : region === 'North' ? 'Miền Bắc' : region === 'Central' ? 'Miền Trung' : region === 'South' ? 'Miền Nam' : ''}
                  </button>
                ))}
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredDistributors.map((dist) => (
                  <motion.div
                    key={dist.id}
                    layout
                    onMouseEnter={() => setHoveredDistributor(dist)}
                    onMouseLeave={() => setHoveredDistributor(null)}
                    className={cn(
                      "p-4 rounded-xl border transition-all cursor-pointer group",
                      hoveredDistributor?.id === dist.id
                        ? "bg-white border-viettel-red shadow-md -translate-y-1"
                        : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200"
                    )}
                  >
                    <h4 className="font-bold text-viettel-dark text-sm group-hover:text-viettel-red transition-colors mb-1 uppercase tracking-tight">
                      {dist.name}
                    </h4>
                    <div className="flex items-start text-[12px] text-gray-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 mt-0.5 flex-shrink-0 text-viettel-red/70" />
                      <span>{dist.address}</span>
                    </div>
                    <div className="flex items-center text-[12px] text-viettel-red font-bold">
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      <span>{dist.phone}</span>
                    </div>
                  </motion.div>
                ))}
                {filteredDistributors.length === 0 && (
                  <div className="text-center py-12 text-gray-400 italic text-sm">
                    Không tìm thấy nhà phân phối nào phù hợp.
                  </div>
                )}
              </div>
            </div>

            <div className="bg-viettel-dark text-white rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-viettel-red opacity-10 blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
              <Building2 className="w-10 h-10 text-viettel-red mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Trở thành đối tác</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Hợp tác cùng Xi măng Cẩm Phả để mang đến những sản phẩm chất lượng cao nhất cho thị trường.
              </p>
              <button className="w-full py-3 bg-viettel-red text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                Gửi yêu cầu hợp tác
              </button>
            </div>
          </div>

          {/* Right: Map View */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center justify-center min-h-[1020px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ED1C24_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <VietnamMap
                hoveredDistributor={hoveredDistributor}
                onHoverDistributor={setHoveredDistributor}
              />

              {/* Tooltip logic moved to separate layer or kept here for global state */}
              <AnimatePresence>
                {hoveredDistributor && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute z-30 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64 md:w-72 pointer-events-none"
                    style={{
                      top: (hoveredDistributor.lat / 800) * 100 + "%",
                      left: (hoveredDistributor.lng / 800) * 100 > 60 ? ((hoveredDistributor.lng / 800) * 100 - 35) + "%" : ((hoveredDistributor.lng / 800) * 100 + 5) + "%"
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-viettel-red flex-shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-viettel-dark leading-tight uppercase text-xs">{hoveredDistributor.name}</h3>
                    </div>
                    <div className="space-y-2 text-[11px] text-gray-600 font-sans">
                      <div className="flex items-start">
                        <MapPin className="w-3.5 h-3.5 mr-2 mt-0.5 text-viettel-red/70 flex-shrink-0" />
                        <span>{hoveredDistributor.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3.5 h-3.5 mr-2 text-viettel-red/70 flex-shrink-0" />
                        <span className="font-bold text-viettel-dark">{hoveredDistributor.phone}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Khu vực {hoveredDistributor.region === 'North' ? 'Miền Bắc' : hoveredDistributor.region === 'Central' ? 'Miền Trung' : 'Miền Nam'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-viettel-red" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Administrative Labels */}
              {/* <div className="absolute top-[8%] left-[25%] text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] pointer-events-none hidden md:block">Bản đồ hành chính mới nhất</div> */}
              {/* <div className="absolute top-[15%] left-[20%] text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pointer-events-none">Miền Bắc</div> */}
              {/* <div className="absolute top-[45%] left-[60%] text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pointer-events-none">Miền Trung</div> */}
              {/* <div className="absolute bottom-[15%] left-[25%] text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pointer-events-none">Miền Nam</div> */}
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
