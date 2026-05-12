'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

const VALUES_DATA = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Công nghệ tiên tiến',
    description: 'Vận hành dây chuyền sản xuất hiện đại nhất Việt Nam với công nghệ lò quay khô từ Nhật Bản.',
    delay: 0,
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Kỷ luật Quân đội',
    description: 'Môi trường làm việc chính quy, kỷ luật và tận tâm theo tinh thần của Tập đoàn Viettel.',
    delay: 0.1,
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-0.382-3.016z" />
      </svg>
    ),
    title: 'Phúc lợi bền vững',
    description: 'Chính sách đãi ngộ hấp dẫn, bảo hiểm và các chế độ chăm sóc sức khỏe toàn diện cho nhân viên.',
    delay: 0.2,
  },
];

export default function CareersPage() {
  return (
    <main className="flex-grow">
      <InternalHero
        title="CƠ HỘI"
        highlightText="NGHỀ NGHIỆP"
        subtitle="Gia nhập đội ngũ nhân sự tài năng, cùng nhau kiến tạo những công trình bền vững và phát triển sự nghiệp vững chắc tại Xi măng Cẩm Phả."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-viettel-dark mb-6">Tại sao chọn chúng tôi?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Chúng tôi xây dựng môi trường làm việc chuyên nghiệp, sáng tạo, nơi mỗi cá nhân đều có cơ hội tỏa sáng và khẳng định giá trị bản thân.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {VALUES_DATA.map((value) => (
              <RevealOnScroll key={value.id} delay={value.delay}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-viettel-gray rounded-2xl h-full border border-transparent hover:border-red-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-red-50 text-viettel-red rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-viettel-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Additional "Open Positions" Placeholder */}
          <RevealOnScroll className="bg-viettel-dark rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-viettel-red opacity-10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Bạn đã sẵn sàng để bứt phá?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Khám phá các vị trí đang tuyển dụng và bắt đầu hành trình chinh phục những đỉnh cao mới cùng chúng tôi.
              </p>
              <button className="px-8 py-4 bg-viettel-red text-white font-bold rounded hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20">
                XEM CÁC VỊ TRÍ ĐANG TUYỂN
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
