import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, CheckCircle2, ShieldCheck, Zap, Factory, ShoppingCart, MessageSquare } from 'lucide-react';
import NextLink from 'next/link';

// Simulated Product Data
const PRODUCTS_DATA = [
  {
    id: '1',
    title: 'Xi măng Cẩm Phả PCB40',
    description: 'Sản phẩm chủ lực có cường độ nén cao, tính công tác tốt, phù hợp cho các công trình hạ tầng và dân dụng yêu cầu độ bền vững cao.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1200&auto=format&fit=crop',
    longDescription: 'Xi măng Poóc lăng hỗn hợp PCB 40 Cẩm Phả được sản xuất theo tiêu chuẩn Việt Nam TCVN 6260:2020. Đây là loại xi măng phổ biến nhất, được thiết kế tối ưu cho các hạng mục bê tông kết cấu, xây trát trong các công trình dân dụng và công nghiệp.',
    features: [
      'Cường độ nén cao và ổn định',
      'Độ dẻo cao, dễ thi công xây trát',
      'Khả năng giữ nước tốt, giảm thiểu nứt vỡ',
      'Phù hợp với nhiều loại phụ gia bê tông'
    ],
    specs: [
      { label: 'Cường độ nén (3 ngày)', value: '≥ 20 MPa' },
      { label: 'Cường độ nén (28 ngày)', value: '≥ 40 MPa' },
      { label: 'Thời gian đông kết bắt đầu', value: '≥ 45 phút' },
      { label: 'Thời gian đông kết kết thúc', value: '≤ 600 phút' },
      { label: 'Độ ổn định thể tích', value: '≤ 10 mm' }
    ],
    applications: [
      'Đổ bê tông móng, dột, sàn, dầm',
      'Xây tường, trát tường trong và ngoài',
      'Láng nền, ốp lát gạch',
      'Sản xuất bê tông đúc sẵn mác cao'
    ]
  },
  {
    id: '2',
    title: 'Xi măng Bền Sunfat (Type II & V)',
    description: 'Dòng sản phẩm chuyên dụng cho các công trình ven biển, đập thủy điện hoặc môi trường xâm thực, chống ăn mòn hiệu quả.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
    longDescription: 'Xi măng Cẩm Phả bền Sunfat được thiết kế đặc biệt để chịu đựng sự tấn công của các ion sunfat trong đất và nước. Sản phẩm đáp ứng tiêu chuẩn ASTM C150 (Type II & V) hoặc TCVN 6067:2018, lý tưởng cho các công trình hạ tầng biển và xử lý nước thải.',
    features: [
      'Kháng sunfat vượt trội',
      'Nhiệt thủy hóa thấp, giảm nứt nhiệt bê tông khối lớn',
      'Tăng tuổi thọ cho kết cấu bê tông cốt thép',
      'Độ đặc chắc cao, ngăn chặn thấm và ăn mòn'
    ],
    specs: [
      { label: 'Hàm lượng C3A', value: '≤ 5% (Type V)' },
      { label: 'Cường độ nén (28 ngày)', value: '≥ 45 MPa' },
      { label: 'Độ giãn nở Sunfat (6 tháng)', value: '≤ 0.05%' },
      { label: 'Tỷ diện bề mặt', value: '≥ 3200 cm2/g' }
    ],
    applications: [
      'Công trình ven biển, cầu cảng',
      'Đập thủy điện, hệ thống tưới tiêu',
      'Nhà máy xử lý nước thải',
      'Móng cọc trong vùng đất nhiễm mặn, nhiễm phèn'
    ]
  },
  {
    id: '3',
    title: 'Xi măng Cẩm Phả Đa dụng',
    description: 'Giải pháp tối ưu cho mọi công trình, dễ thi công, giúp tiết kiệm chi phí và đảm bảo tính thẩm mỹ cho bề mặt hoàn thiện.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop',
    longDescription: 'Xi măng Cẩm Phả Đa dụng là dòng sản phẩm linh hoạt, được điều chỉnh để cân bằng giữa tốc độ đông kết và độ dẻo. Sản phẩm giúp nhà thầu dễ dàng kiểm soát quá trình thi công, từ xây trát đến đổ bê tông các hạng mục nhỏ lẻ.',
    features: [
      'Tiết kiệm lượng xi măng trên mỗi m3 vữa/bê tông',
      'Bề mặt hoàn thiện mịn, thẩm mỹ cao',
      'Dễ thi công, rút ngắn thời gian hoàn thiện',
      'Giá thành hợp lý, tối ưu chi phí đầu tư'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 30 MPa' },
      { label: 'Độ mịn (tỷ diện)', value: '≥ 2800 cm2/g' },
      { label: 'Độ dẻo tiêu chuẩn', value: 'Rất tốt' },
      { label: 'Khả năng chống nứt', value: 'Cao' }
    ],
    applications: [
      'Xây, trát, ốp, lát dân dụng',
      'Bê tông nhà ở thấp tầng',
      'Sản xuất gạch không nung',
      'Trang trí nội ngoại thất'
    ]
  }
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return { title: 'Sản phẩm | Xi măng Cẩm Phả' };
  
  return {
    title: `${product.title} | Xi măng Cẩm Phả`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS_DATA.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="flex-grow bg-white">
      <InternalHero 
        title="CHI TIẾT"
        highlightText="SẢN PHẨM"
        subtitle="Cung cấp giải pháp vật liệu tối ưu cho mọi quy mô công trình, từ dân dụng đến hạ tầng quốc gia."
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <NextLink 
              href="/products" 
              className="flex items-center text-sm font-bold text-gray-400 hover:text-viettel-red transition-colors uppercase tracking-widest mb-12"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Tất cả sản phẩm
            </NextLink>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Product Visuals */}
              <div className="lg:col-span-6">
                <div className="bg-viettel-gray rounded-3xl p-8 sticky top-32">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-square mb-8">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-white rounded-xl border-2 border-transparent hover:border-viettel-red transition-all cursor-pointer overflow-hidden shadow-sm">
                        <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-6">
                <div className="mb-10">
                  <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-6 leading-tight uppercase tracking-tight">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center px-4 py-2 bg-red-50 text-viettel-red rounded-lg text-xs font-bold uppercase tracking-widest border border-red-100">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Đạt chuẩn ISO/IEC
                  </div>
                  <div className="flex items-center px-4 py-2 bg-viettel-gray text-viettel-dark rounded-lg text-xs font-bold uppercase tracking-widest border border-gray-200">
                    <Zap className="w-4 h-4 mr-2" />
                    Cường độ cao
                  </div>
                  <div className="flex items-center px-4 py-2 bg-viettel-gray text-viettel-dark rounded-lg text-xs font-bold uppercase tracking-widest border border-gray-200">
                    <Factory className="w-4 h-4 mr-2" />
                    Công nghệ Nhật Bản
                  </div>
                </div>

                <div className="space-y-12">
                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-xl font-bold text-viettel-dark mb-4 border-l-4 border-viettel-red pl-4 uppercase tracking-tight">Mô tả sản phẩm</h3>
                    <p className="text-gray-500 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div>
                    <h3 className="text-xl font-bold text-viettel-dark mb-4 border-l-4 border-viettel-red pl-4 uppercase tracking-tight">Đặc tính ưu việt</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <button className="flex-grow px-10 py-5 bg-viettel-red text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center uppercase tracking-widest text-sm">
                      <ShoppingCart className="w-5 h-5 mr-3" />
                      Yêu cầu báo giá
                    </button>
                    <button className="px-10 py-5 bg-viettel-dark text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center uppercase tracking-widest text-sm">
                      <MessageSquare className="w-5 h-5 mr-3" />
                      Tư vấn kỹ thuật
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-viettel-dark uppercase tracking-tight">Thông số kỹ thuật</h2>
              <div className="w-16 h-1 bg-viettel-red mx-auto mt-4"></div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-viettel-dark text-white">
                    <th className="p-6 text-sm font-bold uppercase tracking-widest">Chỉ tiêu kỹ thuật</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-widest">Giá trị công bố</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-red-50/30 transition-colors">
                      <td className="p-6 text-viettel-dark font-bold text-sm uppercase tracking-tight">{spec.label}</td>
                      <td className="p-6 text-gray-500 font-medium">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-8 text-center text-xs text-gray-400 italic font-medium">
              * Các chỉ tiêu trên được thử nghiệm tại phòng thí nghiệm VILAS của Nhà máy Xi măng Cẩm Phả.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-viettel-dark mb-16 text-center uppercase tracking-tight">Ứng dụng thực tế</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.applications.map((app, i) => (
                <div key={i} className="p-8 bg-viettel-gray rounded-2xl text-center group hover:bg-viettel-red transition-all duration-500">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-8 h-8 text-viettel-red" />
                  </div>
                  <p className="text-sm font-bold text-viettel-dark group-hover:text-white transition-colors uppercase tracking-tight leading-snug">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
