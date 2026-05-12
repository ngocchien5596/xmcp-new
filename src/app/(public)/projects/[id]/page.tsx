import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, MapPin, Calendar, Building2, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';
import NextLink from 'next/link';

// Simulated Project Data (Should match the data in projects/page.tsx)
const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Cầu Cửa Lục 1 (Cầu Tình Yêu) - Quảng Ninh',
    description: 'Công trình trọng điểm với kiến trúc biểu tượng của Quảng Ninh, sử dụng xi măng mác cao cho các cấu kiện đúc sẵn và trụ cầu chịu lực.',
    fullDescription: 'Cầu Cửa Lục 1, còn được gọi là Cầu Tình Yêu, là một trong những công trình hạ tầng giao thông quan trọng nhất của tỉnh Quảng Ninh. Với thiết kế 6 làn xe và tổng chiều dài hơn 4,2km, công trình không chỉ giải quyết bài toán giao thông mà còn là điểm nhấn kiến trúc độc đáo bên bờ vịnh Hạ Long.',
    image: 'https://images.unsplash.com/photo-1545910668-e3251e39a3f2?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2023',
    location: 'TP. Hạ Long, Quảng Ninh',
    client: 'Sở Giao thông Vận tải Quảng Ninh',
    contractor: 'Liên danh nhà thầu uy tín',
    stats: [
      { label: 'Tổng mức đầu tư', value: '2.100 tỷ VNĐ' },
      { label: 'Lượng xi măng sử dụng', value: '150.000 tấn' },
      { label: 'Loại xi măng', value: 'PCB40 Cẩm Phả' },
      { label: 'Tiêu chuẩn', value: 'TCVN 6260:2020' }
    ],
    highlights: [
      'Cấu kiện đúc sẵn mác cao',
      'Trụ cầu chịu lực cường độ lớn',
      'Khả năng chống ăn mòn nước mặn',
      'Độ bền kết cấu trên 100 năm'
    ]
  },
  {
    id: '2',
    title: 'Sân bay Phan Thiết - Bình Thuận',
    description: 'Dự án hạ tầng hàng không quy mô lớn, yêu cầu tiêu chuẩn kỹ thuật khắt khe về cường độ nén và độ bền vững của nền đường cất hạ cánh.',
    fullDescription: 'Dự án đầu tư xây dựng Sân bay Phan Thiết là công trình hạ tầng hàng không trọng điểm quốc gia. Xi măng Cẩm Phả tự hào là nhà cung cấp chính cho các hạng mục nền đường cất hạ cánh, đường lăn và sân đỗ máy bay, nơi yêu cầu sự ổn định tuyệt đối về địa chất và cường độ nén.',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80',
    category: 'Hàng không',
    year: '2024',
    location: 'TP. Phan Thiết, Bình Thuận',
    client: 'Bộ Quốc phòng / UBND tỉnh Bình Thuận',
    contractor: 'Tổng công ty 319',
    stats: [
      { label: 'Diện tích dự án', value: '542 ha' },
      { label: 'Cấp sân bay', value: '4E (Tiêu chuẩn ICAO)' },
      { label: 'Cường độ bê tông', value: 'M400 - M500' },
      { label: 'Độ bền sunfat', value: 'Loại Type II' }
    ],
    highlights: [
      'Nền đường cất hạ cánh chịu lực siêu cao',
      'Kiểm soát độ sụt và thời gian đông kết tối ưu',
      'Hỗ trợ kỹ thuật tại hiện trường 24/7',
      'Đáp ứng tiến độ thi công khẩn trương'
    ]
  },
  {
    id: '3',
    title: 'Sun World Ocean Park Hạ Long',
    description: 'Tổ hợp vui chơi giải trí hàng đầu khu vực, sử dụng các sản phẩm xi măng chuyên dụng chống ăn mòn trong môi trường biển.',
    fullDescription: 'Sun World Ocean Park Hạ Long là tổ hợp giải trí ven biển quy mô lớn bậc nhất Việt Nam. Trong môi trường xâm thực mặn khắt khe, xi măng bền Sunfat của Cẩm Phả đã chứng minh được khả năng bảo vệ cốt thép và kết cấu bê tông vượt trội.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    category: 'Du lịch - Nghỉ dưỡng',
    year: '2022',
    location: 'Bãi Cháy, TP. Hạ Long',
    client: 'Sun Group',
    contractor: 'Tập đoàn Delta',
    stats: [
      { label: 'Quy mô dự án', value: '214 ha' },
      { label: 'Loại xi măng', value: 'Xi măng bền Sunfat' },
      { label: 'Chứng chỉ chất lượng', value: 'ASTM C150' },
      { label: 'Môi trường làm việc', value: 'Xâm thực mặn cao' }
    ],
    highlights: [
      'Bảo vệ kết cấu gần biển tuyệt đối',
      'Độ đặc chắc cao, ngăn thấm nước',
      'Thẩm mỹ bề mặt hoàn thiện mịn đẹp',
      'Đồng hành cùng kiến trúc vĩ đại'
    ]
  },
  {
    id: '4',
    title: 'Cao tốc TP.HCM – Long Thành – Dầu Giây',
    description: 'Tuyến huyết mạch giao thông phía Nam, khẳng định chất lượng xi măng Cẩm Phả trong các hạng mục bê tông nhựa và mặt đường.',
    fullDescription: 'Tuyến cao tốc TP.HCM - Long Thành - Dầu Giây là mạch máu giao thông kết nối trung tâm kinh tế phía Nam với các tỉnh miền Đông. Xi măng Cẩm Phả đã được tin dùng cho hàng loạt cầu lớn và cống hộp trên toàn tuyến.',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2015',
    location: 'TP.HCM - Đồng Nai',
    client: 'VEC (Tổng công ty Đầu tư phát triển đường cao tốc Việt Nam)',
    contractor: 'Nhiều nhà thầu quốc tế',
    stats: [
      { label: 'Chiều dài tuyến', value: '55.7 km' },
      { label: 'Số lượng cầu trên tuyến', value: '31 cầu' },
      { label: 'Cường độ bê tông cầu', value: 'M350 - M450' },
      { label: 'Thời gian thi công', value: '2009 - 2015' }
    ],
    highlights: [
      'Chất lượng ổn định trong thời gian dài',
      'Chịu tải trọng giao thông cực lớn',
      'Kháng nứt bề mặt hiệu quả',
      'Được kiểm định bởi các tư vấn quốc tế'
    ]
  },
  {
    id: '5',
    title: 'Vinhomes Dragon Bay Hạ Long',
    description: 'Khu đô thị biển cao cấp, yêu cầu sự kết hợp hoàn hảo giữa độ bền kết cấu và thẩm mỹ hoàn thiện bề mặt.',
    fullDescription: 'Vinhomes Dragon Bay là biểu tượng của cuộc sống thượng lưu bên vịnh di sản. Xi măng Cẩm Phả cung cấp giải pháp xây trát và bê tông dân dụng cao cấp, đảm bảo sự bền vững cho từng căn biệt thự và khu shophouse.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    category: 'Khu Đô thị',
    year: '2017',
    location: 'Bến Đoan, TP. Hạ Long',
    client: 'Vingroup',
    contractor: 'Coteccons',
    stats: [
      { label: 'Tổng diện tích', value: '68.35 ha' },
      { label: 'Loại sản phẩm', value: 'Xi măng Đa dụng' },
      { label: 'Độ dẻo xây trát', value: 'Tiêu chuẩn cao' },
      { label: 'Thời hạn bàn giao', value: 'Đúng tiến độ' }
    ],
    highlights: [
      'Bề mặt trát mịn, hạn chế nứt chân chim',
      'Tương thích tốt với các loại sơn phủ',
      'Độ bền trong môi trường hơi muối',
      'Đảm bảo vẻ đẹp sang trọng lâu dài'
    ]
  },
  {
    id: '6',
    title: 'Nhà máy Nhiệt điện Mông Dương 2',
    description: 'Công trình công nghiệp quy mô lớn tại Quảng Ninh, đòi hỏi xi măng có khả năng chịu nhiệt và cường độ chịu nén đặc biệt.',
    fullDescription: 'Dự án Nhiệt điện Mông Dương 2 là một trong những nhà máy điện lớn nhất Việt Nam. Các hạng mục móng máy phát điện và tháp làm mát đòi hỏi bê tông khối lớn mác cao với quy trình kiểm soát nhiệt thủy hóa nghiêm ngặt.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    category: 'Công trình Công nghiệp',
    year: '2015',
    location: 'Mông Dương, TP. Cẩm Phả',
    client: 'AES-VCM Mong Duong Power Co., Ltd',
    contractor: 'Doosan Heavy Industries',
    stats: [
      { label: 'Công suất nhà máy', value: '1.240 MW' },
      { label: 'Khối lượng bê tông', value: 'Hàng trăm nghìn m3' },
      { label: 'Tiêu chuẩn quốc tế', value: 'ASTM / ACI' },
      { label: 'Hệ thống kiểm soát', value: 'Quy trình quân đội' }
    ],
    highlights: [
      'Bê tông khối lớn, nhiệt thủy hóa thấp',
      'Cường độ chịu nén đặc biệt cao',
      'Độ ổn định hóa học trong môi trường nhiệt',
      'Khẳng định uy tín tại sân nhà Cẩm Phả'
    ]
  }
];

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
                className="flex items-center text-sm font-bold text-gray-400 hover:text-viettel-red transition-colors uppercase tracking-widest"
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
                <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-10 leading-tight tracking-tight uppercase">
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
                    {project.highlights.map((item, i) => (
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
                      {project.stats.map((stat, i) => (
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
                    <button className="w-full py-4 bg-white text-viettel-red font-black rounded-xl uppercase tracking-widest text-[10px] shadow-lg">
                      Liên hệ ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-viettel-dark uppercase tracking-tight">Dự án khác</h2>
              <NextLink href="/projects" className="text-xs font-bold text-viettel-red flex items-center hover:translate-x-2 transition-transform uppercase tracking-widest">
                Tất cả <ArrowRight className="w-4 h-4 ml-2" />
              </NextLink>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROJECTS_DATA.filter(p => p.id !== project.id).slice(0, 3).map(other => (
                <NextLink key={other.id} href={`/projects/${other.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-viettel-red uppercase tracking-widest mb-2 block">{other.category}</span>
                    <h3 className="text-sm font-bold text-viettel-dark group-hover:text-viettel-red transition-colors line-clamp-2 uppercase leading-snug">{other.title}</h3>
                  </div>
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
