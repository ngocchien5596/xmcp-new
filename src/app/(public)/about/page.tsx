'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';

const MILESTONES = [
  {
    year: '2002',
    title: 'Khởi đầu khát vọng',
    description: 'Thủ tướng Chính phủ phê duyệt dự án đầu tư xây dựng Nhà máy Xi măng Cẩm Phả, đặt nền móng cho một thương hiệu Việt vươn tầm.'
  },
  {
    year: '2008',
    title: 'Vận hành chính thức',
    description: 'Nhà máy đi vào hoạt động với công nghệ lò quay khô hiện đại từ Nhật Bản, cung cấp những tấn xi măng chất lượng cao đầu tiên.'
  },
  {
    year: '2013',
    title: 'Gia nhập Tập đoàn Viettel',
    description: 'Chuyển giao về Tập đoàn Công nghiệp – Viễn thông Quân đội (Viettel), mở ra kỷ nguyên mới về quản trị và chuyển đổi số.'
  }
];

const LEADERS = [
  {
    name: 'Nguyễn Thái Hưng',
    role: 'Tổng Giám đốc',
    quote: 'Chất lượng là nền tảng, kỷ luật là sức mạnh để chúng tôi kiến tạo những giá trị vững bền.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Hoàng Quang Thoa',
    role: 'Phó Tổng Giám đốc',
    quote: 'Sự hài lòng của khách hàng là thước đo chính xác nhất cho hiệu quả sản xuất kinh doanh.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Nguyễn Ngọc Tân',
    role: 'Phó Tổng Giám đốc',
    quote: 'Ứng dụng công nghệ Nhật Bản giúp tối ưu hiệu suất và đảm bảo tiêu chuẩn quốc tế.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Ngô Thế Hưng',
    role: 'Phó Tổng Giám đốc',
    quote: 'Trách nhiệm với cộng đồng và môi trường là cam kết không đổi của Xi măng Cẩm Phả.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  }
];

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <InternalHero
        title="VỀ CHÚNG TÔI"
        highlightText="Xi măng Cẩm Phả"
        subtitle="Hành trình kiến tạo những công trình bền vững, đồng hành cùng khát vọng vươn tầm thế giới của ngành vật liệu xây dựng Việt Nam."
      />

      {/* Vision & Mission */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-bold text-viettel-red uppercase tracking-widest mb-4">Tầm nhìn & Sứ mệnh</div>
              <h2 className="text-3xl md:text-5xl font-bold text-viettel-dark mb-8 leading-tight">Thương hiệu xi măng hàng đầu Việt Nam và vươn tầm quốc tế.</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-viettel-red flex items-center justify-center mr-4 flex-shrink-0 font-bold">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sứ mệnh</h3>
                    <p className="text-gray-600">Trở thành đơn vị uy tín nhất trong lĩnh vực sản xuất xi măng về chất lượng sản phẩm và chất lượng dịch vụ.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-viettel-red flex items-center justify-center mr-4 flex-shrink-0 font-bold">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Giá trị cốt lõi</h3>
                    <p className="text-gray-600">Gắn liền với kỷ luật Quân đội, sự tận tâm, sáng tạo và trách nhiệm với cộng đồng. Chúng tôi đặt chất lượng lên hàng đầu.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-viettel-red/5 rounded-full blur-3xl"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 aspect-video lg:aspect-square">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-viettel-red flex items-center justify-center text-white font-bold p-6 text-center text-sm md:text-base leading-tight rounded-2xl shadow-xl z-20"
              >
                20+ Năm Kinh nghiệm
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark">Dấu ấn thời gian</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {MILESTONES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-8 md:mb-0`}>
                    <div className="text-3xl md:text-5xl font-black text-viettel-red/20 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-3 text-viettel-dark">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-viettel-red rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark mb-4 uppercase">Đội ngũ Lãnh đạo</h2>
            <div className="w-20 h-1 bg-viettel-red mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Những người dẫn dắt khát vọng số tại Xi măng Cẩm Phả, đưa trí tuệ Việt vươn tầm quốc tế.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-viettel-red/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm italic font-medium leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-viettel-dark group-hover:text-viettel-red transition-colors mb-1 uppercase tracking-tight">
                  {leader.name}
                </h4>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-widest">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
