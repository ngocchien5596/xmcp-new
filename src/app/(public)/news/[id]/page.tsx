import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, Calendar, User, Share2, Globe, Send, Link as LinkIcon } from 'lucide-react';
import NextLink from 'next/link';
import { NEWS_DATA } from '@/data/news';
import { RelatedNews } from '@/components/sections/RelatedNews';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const news = NEWS_DATA.find(n => n.id === parseInt(id));
  if (!news) return { title: 'Tin tức | Xi măng Cẩm Phả' };
  
  return {
    title: `${news.title} | Xi măng Cẩm Phả`,
    description: news.description,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = NEWS_DATA.find(n => n.id === parseInt(id));
  
  if (!news) {
    notFound();
  }

  return (
    <main className="flex-grow bg-white">
      <InternalHero 
        title="CHI TIẾT"
        highlightText="TIN TỨC"
        subtitle="Cập nhật những thông tin chính thức, sự kiện và kiến thức chuyên sâu từ Xi măng Cẩm Phả."
      />

      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs & Back */}
            <div className="flex items-center justify-between mb-12">
              <NextLink 
                href="/news" 
                className="flex items-center text-sm font-bold text-gray-400 hover:text-viettel-red transition-colors uppercase tracking-widest"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Quay lại danh sách
              </NextLink>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-red-50 text-viettel-red text-[10px] font-bold rounded uppercase tracking-widest">
                  {news.categoryLabel}
                </span>
              </div>
            </div>

            {/* Title & Meta */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-10 leading-tight tracking-tight uppercase detail-title">
                {news.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400 border-y border-gray-100 py-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-viettel-red" />
                  {news.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-viettel-red" />
                  {news.author}
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-viettel-dark text-xs uppercase tracking-widest">Chia sẻ:</span>
                  <button className="p-2 hover:text-viettel-red transition-colors"><Globe className="w-4 h-4" /></button>
                  <button className="p-2 hover:text-viettel-red transition-colors"><Send className="w-4 h-4" /></button>
                  <button className="p-2 hover:text-viettel-red transition-colors"><LinkIcon className="w-4 h-4" /></button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl aspect-[16/9]">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <div
              className="news-content-body prose prose-lg max-w-none prose-headings:text-viettel-dark prose-headings:uppercase prose-p:text-gray-600 prose-blockquote:border-viettel-red prose-blockquote:bg-viettel-gray prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-img:rounded-3xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Tags & Footer */}
            <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-viettel-dark uppercase tracking-widest">Tags:</span>
                <span className="px-4 py-2 bg-viettel-gray rounded-full text-[10px] font-bold text-gray-500 hover:bg-viettel-red hover:text-white transition-colors cursor-pointer uppercase tracking-widest">#XiMangCamPha</span>
                <span className="px-4 py-2 bg-viettel-gray rounded-full text-[10px] font-bold text-gray-500 hover:bg-viettel-red hover:text-white transition-colors cursor-pointer uppercase tracking-widest">#BenVung</span>
                <span className="px-4 py-2 bg-viettel-gray rounded-full text-[10px] font-bold text-gray-500 hover:bg-viettel-red hover:text-white transition-colors cursor-pointer uppercase tracking-widest">#VILAS</span>
              </div>
              <button className="px-8 py-4 bg-viettel-red text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-all flex items-center uppercase tracking-widest text-xs">
                <Share2 className="w-4 h-4 mr-3" />
                Chia sẻ bài viết
              </button>
            </footer>
          </div>
        </div>
      </article>

      <RelatedNews currentNewsId={news.id} newsItems={NEWS_DATA} />
    </main>
  );
}
