import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, CheckCircle2, ShoppingCart, MessageSquare } from 'lucide-react';
import NextLink from 'next/link';
import { RelatedProducts } from '@/components/sections/RelatedProducts';

// Simulated Product Data
import { PRODUCTS_DATA } from '@/data/products';

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
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-viettel-gray aspect-square sticky top-32 flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain drop-shadow-2xl" 
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-6">
                <div className="mb-10">
                  <h1 className="text-3xl md:text-5xl font-black text-viettel-dark mb-6 leading-tight uppercase tracking-tight detail-title">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed italic">
                    {product.description}
                  </p>
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

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} products={PRODUCTS_DATA} />
    </main>
  );
}
