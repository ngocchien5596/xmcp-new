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
    image: '/assets/design/NguyenThaiHung_TGD.png'
  },
  {
    name: 'Hoàng Quang Thoa',
    role: 'Phó Tổng Giám đốc',
    quote: 'Sự hài lòng của khách hàng là thước đo chính xác nhất cho hiệu quả sản xuất kinh doanh.',
    image: '/assets/design/HoangQuangThoa_PTGD.png'
  },
  {
    name: 'Nguyễn Ngọc Tân',
    role: 'Phó Tổng Giám đốc',
    quote: 'Ứng dụng công nghệ Nhật Bản giúp tối ưu hiệu suất và đảm bảo tiêu chuẩn quốc tế.',
    image: '/assets/design/NguyenNgocTan_PTGD.png'
  },
  {
    name: 'Ngô Thế Hưng',
    role: 'Phó Tổng Giám đốc',
    quote: 'Trách nhiệm với cộng đồng và môi trường là cam kết không đổi của Xi măng Cẩm Phả.',
    image: '/assets/design/NgoTheHung_PTGD.png'
  }
];

const AWARDS = [
  {
    title: 'Giải thưởng chuyển đổi số Việt Nam',
    image: '/assets/design/chuyendoiso.jpg'
  },
  {
    title: 'Bảng vàng doanh nghiệp văn hóa',
    image: '/assets/design/bangvang.jpg'
  },
  {
    title: 'Cup thương hiệu Việt năm 2016',
    image: '/assets/design/cupthuonghieu.jpg'
  },
  {
    title: 'Giải thưởng Top Việt Nam 2011',
    image: '/assets/design/topvietnam.jpg'
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

      {/* Vision & Mission & Core Values */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-bold text-viettel-red uppercase tracking-widest mb-4">Định hướng chiến lược</div>
              <h2 className="text-3xl md:text-5xl font-bold text-viettel-dark mb-10 leading-tight">Khát vọng vươn tầm và kiến tạo những giá trị bền vững.</h2>
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-viettel-red flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-viettel-dark uppercase tracking-tight">Tầm nhìn</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Phấn đấu trở thành thương hiệu xi măng hàng đầu tại Việt Nam và là đơn vị tiên phong trong việc xuất khẩu xi măng Việt Nam ra thị trường thế giới.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-viettel-red flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-viettel-dark uppercase tracking-tight">Sứ mệnh</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trở thành đơn vị uy tín nhất trong lĩnh vực sản xuất xi măng về chất lượng sản phẩm và chất lượng dịch vụ; khẳng định vị thế thương hiệu Việt và nỗ lực đóng góp cho sự phát triển của xã hội.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-viettel-red flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-viettel-dark uppercase tracking-tight">Giá trị cốt lõi</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-viettel-red rounded-full"></div>
                        <span className="text-gray-600 text-sm font-medium">Chất lượng là hàng đầu</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-viettel-red rounded-full"></div>
                        <span className="text-gray-600 text-sm font-medium">Tin cậy & Bền vững</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-viettel-red rounded-full"></div>
                        <span className="text-gray-600 text-sm font-medium">Hợp tác & Đồng hành</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-viettel-red rounded-full"></div>
                        <span className="text-gray-600 text-sm font-medium">Tiên phong & Đổi mới</span>
                      </div>
                    </div>
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
                18+ Năm Kinh nghiệm
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

      {/* Organizational Model */}
      <section className="py-16 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark mb-4 uppercase">Mô hình tổ chức</h2>
            <div className="w-20 h-1 bg-viettel-red mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Cơ cấu tổ chức tinh gọn, chuyên nghiệp và hiệu quả của Xi măng Cẩm Phả.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-2 md:p-3 rounded-2xl shadow-xl max-w-5xl mx-auto border border-gray-100 overflow-hidden group"
          >
            <img
              src="/assets/design/MHTC.png"
              alt="Mô hình tổ chức Xi măng Cẩm Phả"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark mb-4 uppercase">Đội ngũ Lãnh đạo</h2>
            <div className="w-20 h-1 bg-viettel-red mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Những người dẫn đầu khát vọng kiến tạo tại Xi măng Cẩm Phả, đưa thương hiệu Việt vươn tầm quốc tế.</p>
          </div>

          <div className="space-y-10">
            {/* General Director - Top Row */}
            <div className="flex justify-center">
              {LEADERS.slice(0, 1).map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group w-full max-w-[200px] text-center"
                >
                  <div className="relative overflow-hidden rounded-xl mb-3 aspect-[3/4] shadow-md bg-gray-50">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-all duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-viettel-red/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 text-left">
                      <p className="text-white text-[10px] italic font-medium leading-tight">
                        "{leader.quote}"
                      </p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-viettel-dark group-hover:text-viettel-red transition-colors mb-0.5 uppercase tracking-tight">
                    {leader.name}
                  </h4>
                  <p className="text-viettel-red font-bold text-base uppercase tracking-widest">
                    {leader.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Deputy Directors - Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {LEADERS.slice(1).map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4] shadow-sm bg-gray-50">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-all duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-viettel-red/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 text-left">
                      <p className="text-white text-[9px] italic font-medium leading-tight">
                        "{leader.quote}"
                      </p>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-viettel-dark group-hover:text-viettel-red transition-colors mb-0.5 uppercase tracking-tight">
                    {leader.name}
                  </h4>
                  <p className="text-gray-500 font-medium text-base uppercase tracking-widest">
                    {leader.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-viettel-dark mb-4 uppercase">Danh hiệu & Giải thưởng</h2>
            <div className="w-20 h-1 bg-viettel-red mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Sự ghi nhận cho những nỗ lực không ngừng nghỉ trong hành trình khẳng định vị thế thương hiệu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {AWARDS.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] mb-4 overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500 p-3 md:p-4">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-sans text-sm md:text-base font-bold text-viettel-dark group-hover:text-viettel-red transition-colors leading-tight px-2">
                  {award.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
