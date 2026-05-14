import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, MapPin, Calendar, Building2, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';
import NextLink from 'next/link';
import { RelatedProjects } from '@/components/sections/RelatedProjects';

import { PROJECTS_DATA } from '@/data/projects';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find(p => p.id === id);
  if (!project) return { title: 'Dự án | Xi măng Cẩm Phả' };
  
  return {
    title: `${project.title} | Xi măng Cẩm Phả`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS_DATA.find(p => p.id === id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="flex-grow bg-white">
      <InternalHero 
        title="CHI TIẾT"
        highlightText="DỰ ÁN"
        subtitle="Khẳng định chất lượng qua những công trình biểu tượng, kiến tạo giá trị bền vững cho tương lai."
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Navigation Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
              <NextLink 
                href="/projects" 
                className="flex items-center text-sm font-bold !font-sans text-gray-400 hover:text-viettel-red transition-colors uppercase tracking-widest"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Dự án tiêu biểu
              </NextLink>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center px-4 py-2 bg-viettel-gray rounded-lg text-[10px] font-bold text-viettel-dark uppercase tracking-widest border border-gray-100">
                  <MapPin className="w-3 h-3 mr-2 text-viettel-red" />
                  {project.location}
                </div>
                <div className="flex items-center px-4 py-2 bg-viettel-gray rounded-lg text-[10px] font-bold text-viettel-dark uppercase tracking-widest border border-gray-100">
                  <Calendar className="w-3 h-3 mr-2 text-viettel-red" />
                  Năm {project.year}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-10 leading-tight tracking-tight uppercase detail-title">
                  {project.title}
                </h1>
                
                <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl relative">
                  <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                  <div className="absolute top-8 right-8">
                    <div className="px-6 py-3 bg-viettel-red text-white text-xs font-bold rounded-xl shadow-lg backdrop-blur-md uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-16">
                  <h3 className="text-2xl font-black text-viettel-dark mb-6 uppercase">Tổng quan dự án</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {project.fullDescription}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Sự hiện diện của thương hiệu Xi măng Cẩm Phả tại công trình này không chỉ khẳng định chất lượng vượt trội của sản phẩm mà còn minh chứng cho năng lực cung ứng và hỗ trợ kỹ thuật chuyên nghiệp, đáp ứng các tiêu chuẩn xây dựng hiện đại nhất.
                  </p>
                </div>

                <div className="bg-viettel-gray rounded-3xl p-10 md:p-16 mb-16">
                  <h3 className="text-2xl font-black text-viettel-dark mb-12 text-center uppercase tracking-tight">Điểm nhấn kỹ thuật</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.highlights?.map((item, i) => (
                      <div key={i} className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-red-100 transition-all">
                        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <ShieldCheck className="w-5 h-5 text-viettel-red" />
                        </div>
                        <span className="text-sm font-bold text-gray-700 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  {/* Project Info Card */}
                  <div className="bg-viettel-dark text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-lg font-bold mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Thông tin dự án</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Building2 className="w-5 h-5 text-viettel-red mr-4 mt-1" />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Chủ đầu tư</p>
                          <p className="text-sm font-bold">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <HardHat className="w-5 h-5 text-viettel-red mr-4 mt-1" />
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Nhà thầu chính</p>
                          <p className="text-sm font-bold">{project.contractor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Table */}
                  <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                    <h3 className="text-sm font-bold text-viettel-dark mb-6 uppercase tracking-widest border-l-4 border-viettel-red pl-4">Thông số dự án</h3>
                    <div className="space-y-4">
                      {project.stats?.map((stat, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-tight">{stat.label}</span>
                          <span className="text-xs font-bold text-viettel-dark text-right">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-viettel-red rounded-3xl p-8 text-white text-center shadow-xl hover:scale-[1.02] transition-transform">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4">Bạn cần tư vấn giải pháp?</p>
                    <button className="w-full py-4 bg-white text-viettel-red font-black !font-sans uppercase tracking-widest text-sm shadow-lg hover:bg-gray-50 transition-colors">
                      Liên hệ ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <RelatedProjects currentProductId={project.id} projects={PROJECTS_DATA} />
    </main>
  );
}
