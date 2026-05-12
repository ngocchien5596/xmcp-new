'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronRight } from 'lucide-react';

const SERVICES_DETAILED = [
  {
    id: '01',
    title: 'Chuyển đổi số & Hiện đại hóa Phần mềm',
    description: 'Chúng tôi giúp doanh nghiệp tái cấu trúc hệ thống cũ, xây dựng các ứng dụng Web và Mobile hiện đại dựa trên kiến trúc Microservices và Cloud-native.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    features: [
      'Phát triển Web đa nền tảng',
      'Mobile App (iOS & Android)',
      'Tích hợp API phức tạp',
      'Tối ưu hóa UI/UX'
    ]
  },
  {
    id: '02',
    title: 'Trí tuệ nhân tạo (AI) & Big Data',
    description: 'Khai phá sức mạnh từ dữ liệu. Chúng tôi xây dựng các mô hình Machine Learning giúp dự báo xu hướng và tự động hóa quy trình kinh doanh.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    quote: '"Dữ liệu là dầu mỏ mới, và AI là động cơ giúp chuyển hóa nó thành giá trị thực tế."',
    reverse: true
  },
  {
    id: '03',
    title: 'Giải pháp Cloud & Bảo mật',
    description: 'Tư vấn và triển khai hạ tầng đám mây an toàn, linh hoạt giúp doanh nghiệp tối ưu hóa chi phí vận hành và nâng cao tính sẵn sàng của hệ thống.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    features: [
      'Cloud Migration',
      'Managed Services',
      'Cyber Security Audit',
      'DevSecOps Implementation'
    ]
  }
];

const WORKFLOW = [
  { id: 1, title: 'Khảo sát', desc: 'Phân tích yêu cầu và tư vấn giải pháp tối ưu.' },
  { id: 2, title: 'Thiết kế', desc: 'Thiết kế hệ thống và trải nghiệm người dùng.' },
  { id: 3, title: 'Phát triển', desc: 'Lập trình và tích hợp liên tục (CI/CD).' },
  { id: 4, title: 'Bàn giao', desc: 'Kiểm thử kỹ lưỡng và vận hành thực tế.' }
];

export default function ServicesPage() {
  return (
    <main className="flex-grow">
      <InternalHero 
        title="GIẢI PHÁP"
        highlightText="ĐỘT PHÁ"
        subtitle="Chúng tôi kết hợp trí tuệ con người và công nghệ tiên tiến để tạo ra những giá trị khác biệt cho doanh nghiệp của bạn."
      />

      {/* Detailed Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ED1C24 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {SERVICES_DETAILED.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 last:mb-0`}>
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-6 ${service.reverse ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center text-viettel-red font-bold mb-6 tracking-widest uppercase text-sm">
                  <span className="w-12 h-[2px] bg-viettel-red mr-4"></span> Dịch vụ {service.id}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-viettel-dark mb-6 leading-tight uppercase tracking-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium group">
                        <div className="w-6 h-6 rounded-full bg-red-50 text-viettel-red flex items-center justify-center mr-3 group-hover:bg-viettel-red group-hover:text-white transition-colors duration-300">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {service.quote && (
                  <div className="p-8 bg-viettel-gray border-l-4 border-viettel-red rounded-r-2xl italic shadow-sm">
                    <p className="text-viettel-dark font-medium leading-relaxed">
                      {service.quote}
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: service.reverse ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className={`lg:col-span-6 ${service.reverse ? 'lg:order-1' : ''} relative`}
              >
                <div className="bg-viettel-gray rounded-[2rem] p-4 shadow-inner">
                  <div className="rounded-[1.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -z-10 w-64 h-64 bg-viettel-red/5 rounded-full blur-3xl ${service.reverse ? '-bottom-10 -left-10' : '-top-10 -right-10'}`}></div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-viettel-dark mb-6 uppercase tracking-tight">Quy trình chuyên nghiệp</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi áp dụng mô hình Agile/DevOps để đảm bảo tốc độ và chất lượng vượt trội cho mọi dự án.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 text-viettel-red rounded-xl flex items-center justify-center mb-8 font-bold text-xl group-hover:bg-viettel-red group-hover:text-white transition-colors duration-300">
                  {step.id}
                </div>
                <h4 className="text-xl font-bold mb-4 text-viettel-dark uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-viettel-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[40px] border-white rounded-full -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[20px] border-white rounded-full -ml-32 -mb-32"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter">Bạn đã sẵn sàng bứt phá công nghệ?</h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
              Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để nhận tư vấn miễn phí về giải pháp tối ưu cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-10 py-5 bg-white text-viettel-red font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-wider">
                Yêu cầu tư vấn
              </button>
              <a href="mailto:contact@viettelsoftware.com" className="px-10 py-5 bg-viettel-dark text-white font-bold rounded-xl shadow-2xl hover:bg-black transition-all duration-300 uppercase tracking-wider">
                Gửi Email liên hệ
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
