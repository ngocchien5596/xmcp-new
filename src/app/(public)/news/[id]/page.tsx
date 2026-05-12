import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, Calendar, User, Share2, Globe, Send, Link as LinkIcon } from 'lucide-react';
import NextLink from 'next/link';

// Simulated News Data
const NEWS_DATA = [
  {
    id: '1',
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Xi măng Cẩm Phả công bố chiến lược Phát triển Xanh 2026: Hướng tới sản xuất bền vững.',
    description: 'Tại hội nghị khách hàng thường niên, Xi măng Cẩm Phả đã chính thức công bố lộ trình giảm phát thải carbon, tập trung vào việc tối ưu hóa dây chuyền sản xuất và ứng dụng nguyên liệu thay thế thân thiện với môi trường.',
    content: `
      <p>Ngày 20/05/2026, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức thành công Hội nghị Khách hàng thường niên với chủ đề "Kiến tạo tương lai xanh". Tại sự kiện, lãnh đạo công ty đã chính thức công bố Chiến lược Phát triển Xanh giai đoạn 2026 - 2030, đánh dấu một bước ngoặt quan trọng trong hành trình phát triển bền vững của doanh nghiệp.</p>
      
      <h3>Tối ưu hóa quy trình sản xuất</h3>
      <p>Trọng tâm của chiến lược là việc nâng cấp hệ thống lọc bụi và tận dụng nhiệt thừa khí thải để phát điện. Hệ thống này không chỉ giúp giảm thiểu bụi mịn phát tán ra môi trường mà còn cung cấp khoảng 30% lượng điện năng tiêu thụ cho toàn nhà máy, giúp tiết kiệm chi phí và giảm áp lực lên lưới điện quốc gia.</p>
      
      <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200&auto=format&fit=crop" alt="Quy trình sản xuất xanh" />
      <p className="caption">Dây chuyền sản xuất hiện đại tại Nhà máy Xi măng Cẩm Phả</p>
      
      <h3>Ứng dụng nguyên liệu thay thế</h3>
      <p>Xi măng Cẩm Phả cũng công bố các dự án nghiên cứu sử dụng rác thải công nghiệp và bùn thải làm nhiên liệu thay thế cho than đá trong quá trình nung clinker. Đây là giải pháp "kinh tế tuần hoàn" giúp xử lý triệt để chất thải cho các ngành công nghiệp khác, đồng thời giảm đáng kể lượng phát thải khí nhà kính.</p>
      
      <blockquote>
        "Chúng tôi không chỉ bán xi măng, chúng tôi cung cấp giải pháp xây dựng bền vững cho tương lai. Phát triển xanh không còn là lựa chọn, đó là trách nhiệm và là con đường duy nhất để trường tồn."
        <br />- Ông Nguyễn Thái Hưng, Tổng Giám đốc Xi măng Cẩm Phả phát biểu tại hội nghị.
      </blockquote>
      
      <h3>Cam kết với cộng đồng</h3>
      <p>Bên cạnh các giải pháp kỹ thuật, chiến lược xanh còn bao gồm các hoạt động trồng cây gây rừng xung quanh khu vực mỏ đá và nhà máy, tạo vành đai xanh bảo vệ môi trường sống cho cộng đồng dân cư địa phương. Xi măng Cẩm Phả cam kết sẽ tiếp tục đi đầu trong phong trào "Xanh hóa ngành vật liệu xây dựng" tại Việt Nam.</p>
    `,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    date: '20 Tháng 5, 2026',
    author: 'Phòng Truyền thông',
  },
  {
    id: '4',
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Khai trương phòng thí nghiệm VILAS tiêu chuẩn quốc tế tại Nhà máy Cẩm Phả.',
    description: 'Việc đạt chứng nhận VILAS giúp Xi măng Cẩm Phả chủ động kiểm soát chất lượng nghiêm ngặt và đáp ứng các tiêu chuẩn xuất khẩu khắt khe nhất.',
    content: `
      <p>Sáng ngày 05/05/2026, Công ty Cổ phần Xi măng Cẩm Phả đã chính thức cắt băng khánh thành Phòng thí nghiệm Trung tâm đạt tiêu chuẩn ISO/IEC 17025 (VILAS). Đây là một cột mốc quan trọng khẳng định năng lực kiểm soát chất lượng sản phẩm của công ty đạt tầm quốc tế.</p>
      
      <h3>Đầu tư công nghệ hiện đại</h3>
      <p>Phòng thí nghiệm mới được đầu tư trang thiết bị đồng bộ từ các nhà cung cấp hàng đầu thế giới như Thụy Sĩ, Đức và Nhật Bản. Hệ thống phân tích X-ray tự động cho phép kiểm soát thành phần hóa học của nguyên liệu và sản phẩm theo thời gian thực với độ chính xác tuyệt đối.</p>
      
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="Phòng thí nghiệm VILAS" />
      <p className="caption">Kỹ thuật viên đang vận hành hệ thống phân tích mẫu tự động</p>
      
      <h3>Đáp ứng tiêu chuẩn quốc tế</h3>
      <p>Với chứng chỉ VILAS, các kết quả thử nghiệm của Xi măng Cẩm Phả sẽ được thừa nhận quốc tế thông qua các hiệp ước đa phương. Điều này giúp đẩy nhanh quá trình thông quan khi xuất khẩu sang các thị trường khó tính như Mỹ, Châu Âu và Úc, nơi yêu cầu kiểm soát chất lượng cực kỳ nghiêm ngặt.</p>
      
      <p>Phát biểu tại buổi lễ, đại diện Văn phòng Công nhận Chất lượng cho biết: "Xi măng Cẩm Phả là một trong số ít các đơn vị sản xuất xi măng tại Việt Nam sở hữu phòng thí nghiệm có năng lực thử nghiệm toàn diện các chỉ tiêu vật lý và hóa học của xi măng, clinker và các loại phụ gia theo tiêu chuẩn ASTM và EN."</p>
    `,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    date: '05 Tháng 5, 2026',
    author: 'Ban Kiểm soát Chất lượng',
  }
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const news = NEWS_DATA.find(n => n.id === id);
  if (!news) return { title: 'Tin tức | Xi măng Cẩm Phả' };
  
  return {
    title: `${news.title} | Xi măng Cẩm Phả`,
    description: news.description,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = NEWS_DATA.find(n => n.id === id);
  
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
              <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-8 leading-tight tracking-tight uppercase">
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
              className="prose prose-lg max-w-none prose-headings:text-viettel-dark prose-headings:font-black prose-headings:uppercase prose-p:text-gray-600 prose-blockquote:border-viettel-red prose-blockquote:bg-viettel-gray prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-img:rounded-3xl prose-img:shadow-lg"
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

      {/* Related News Placeholder */}
      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-viettel-dark mb-12 uppercase tracking-tight">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {NEWS_DATA.filter(n => n.id !== news.id).slice(0, 2).map(item => (
                <NextLink key={item.id} href={`/news/${item.id}`} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-red-50">
                  <div className="h-48 rounded-xl overflow-hidden mb-6">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-bold text-viettel-red uppercase tracking-widest mb-3 block">{item.categoryLabel}</span>
                  <h3 className="text-lg font-bold text-viettel-dark group-hover:text-viettel-red transition-colors line-clamp-2 uppercase leading-tight mb-4">{item.title}</h3>
                  <div className="text-xs text-gray-400">{item.date}</div>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
