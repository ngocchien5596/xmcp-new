'use client';

import { motion } from 'framer-motion';
import { InternalHero } from '@/components/sections/InternalHero';
import { CountUp } from '@/components/ui/CountUp';
import ElectricBorder from '@/components/ui/ElectricBorder';

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
  },
  {
    year: '2018',
    title: 'Kỷ niệm 10 năm thành lập',
    description: 'Đánh dấu cột mốc 10 năm chính thức đi vào hoạt động, tự hào khẳng định vị thế và chất lượng trên thị trường vật liệu xây dựng.'
  },
  {
    year: '2020',
    title: 'Thay đổi nhận diện thương hiệu',
    description: 'Ra mắt hình ảnh thương hiệu mới thông qua chương trình Roadshow, tổ chức thành công Đại hội Đảng bộ lần thứ III và vinh dự nhận giải thưởng "Doanh nghiệp chuyển đổi số xuất sắc" (Vietnam Digital Awards).'
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
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-viettel-red/[0.02] skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-viettel-red/[0.03] rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
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
                  <div className="w-12 h-12 rounded-xl bg-viettel-red/10 text-viettel-red border border-viettel-red/20 flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-viettel-dark uppercase tracking-tight">Tầm nhìn</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Phấn đấu trở thành thương hiệu xi măng hàng đầu tại Việt Nam và là đơn vị tiên phong trong việc xuất khẩu xi măng Việt Nam ra thị trường thế giới.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-viettel-red/10 text-viettel-red border border-viettel-red/20 flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-viettel-dark uppercase tracking-tight">Sứ mệnh</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trở thành đơn vị uy tín nhất trong lĩnh vực sản xuất xi măng về chất lượng sản phẩm và chất lượng dịch vụ; khẳng định vị thế thương hiệu Việt và nỗ lực đóng góp cho sự phát triển của xã hội.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-viettel-red/10 text-viettel-red border border-viettel-red/20 flex items-center justify-center mr-5 flex-shrink-0 font-bold text-lg shadow-sm">03</div>
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
                <img src="/assets/design/anh-gioi-thieu-tong-quan.jpg" alt="Giới thiệu tổng quan" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-36 h-36 md:w-48 md:h-48 z-20"
              >
                <ElectricBorder
                  color="#EE0434"
                  speed={1.5}
                  chaos={0.08}
                  borderRadius={24}
                  outwardOffset={6}
                  className="w-full h-full"
                >
                  <div className="w-full h-full bg-gradient-to-br from-viettel-red to-[#b30022] flex flex-col items-center justify-center text-white p-4 md:p-6 text-center rounded-[inherit] shadow-2xl shadow-viettel-red/40 border border-white/20 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <span className="text-4xl md:text-5xl font-black tracking-tighter drop-shadow-md"><CountUp end={18} suffix="+" duration={2} /></span>
                      <div className="w-8 h-1 bg-white/40 rounded-full mt-1 mb-1"></div>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-wider leading-tight opacity-95 drop-shadow-sm">Năm<br/>Kinh nghiệm</span>
                    </div>
                  </div>
                </ElectricBorder>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 bg-viettel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-viettel-dark uppercase tracking-tight">Dấu ấn thời gian</h2>
            <div className="w-16 h-0.5 bg-viettel-red mx-auto mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-red-200/50 hidden md:block"></div>

            <div className="space-y-10 md:space-y-14">
              {MILESTONES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} mb-6 md:mb-0`}>
                    <div className="text-2xl md:text-4xl font-black text-viettel-red/10 mb-1 leading-none">{item.year}</div>
                    <h4 className="text-lg font-bold mb-2 text-viettel-dark leading-tight">{item.title}</h4>
                    <p className="text-gray-500 leading-snug text-sm">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-viettel-red rounded-full border-2 border-white shadow-md z-10 hidden md:block"></div>
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

          <div className="relative max-w-4xl mx-auto">
            {/* Visual Hierarchy Lines (Desktop only) */}
            <div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-full max-w-3xl hidden lg:block pointer-events-none z-0">
              {/* Vertical line from General Director down */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-black"></div>
              
              {/* Horizontal bar connecting deputies */}
              <div className="absolute top-[40px] left-0 w-full px-[calc((100%-4rem)/6)]">
                <div className="w-full h-[2px] bg-black"></div>
              </div>
              
              {/* Vertical lines down to each Deputy */}
              <div className="absolute top-[40px] left-0 w-full grid grid-cols-3 gap-x-8">
                <div className="flex justify-center"><div className="w-[2px] h-8 bg-black"></div></div>
                <div className="flex justify-center"><div className="w-[2px] h-8 bg-black"></div></div>
                <div className="flex justify-center"><div className="w-[2px] h-8 bg-black"></div></div>
              </div>
            </div>

            <div className="space-y-24">
              {/* General Director - Top Row */}
              <div className="flex justify-center relative z-10">
                {LEADERS.slice(0, 1).map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group w-full max-w-[160px] text-center"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-lg bg-gray-50 border-2 border-viettel-red/10">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transition-all duration-700 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-viettel-red/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 text-left">
                        <p className="text-white text-[10px] italic font-medium leading-tight">
                          &ldquo;{leader.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold !font-sans text-viettel-dark group-hover:text-viettel-red transition-colors mb-0.5 uppercase tracking-tight">
                      {leader.name}
                    </h4>
                    <p className="text-viettel-red font-bold !font-sans text-xs uppercase tracking-widest">
                      {leader.role}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Deputy Directors - Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-3xl mx-auto relative z-10">
                {LEADERS.slice(1).map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group text-center flex flex-col items-center"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4] w-full max-w-[140px] shadow-md bg-gray-50 border border-gray-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transition-all duration-700 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-viettel-red/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-2.5 text-left">
                        <p className="text-white text-[9px] italic font-medium leading-tight">
                          &ldquo;{leader.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                    <h4 className="text-[13px] font-bold !font-sans text-viettel-dark group-hover:text-viettel-red transition-colors mb-0.5 uppercase tracking-tight">
                      {leader.name}
                    </h4>
                    <p className="text-gray-500 font-bold !font-sans text-[11px] uppercase tracking-wider">
                      {leader.role}
                    </p>
                  </motion.div>
                ))}
              </div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {AWARDS.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] mb-3 overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 group-hover:shadow-xl transition-all duration-500 p-2 md:p-3">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-sans text-base font-bold text-viettel-dark group-hover:text-viettel-red transition-colors leading-tight px-1">
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
