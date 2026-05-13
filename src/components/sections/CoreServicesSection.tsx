'use client';

import { motion, Variants } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const SERVICES = [
  {
    title: 'Xi măng PCB40',
    items: [
      'Cường độ nén cao',
      'Độ bền kết cấu tối ưu',
      'Chống thấm vượt trội',
      'Phù hợp đổ dầm, cột, sàn',
    ],
    image: '/assets/design/pcb40.png',
  },
  {
    title: 'Xi măng Hỗn hợp Bền Sunfat',
    items: [
      'Kháng xâm thực sunfat mạnh',
      'Bảo vệ cốt thép tối đa',
      'Chuyên dụng ven biển, đập',
      'Ngăn chặn ăn mòn hóa chất',
    ],
    image: '/assets/design/pcb40.png', // Using PCB40 as baseline or generic bag if sunfat image is missing
  },
  {
    title: 'Xi măng Đa dụng',
    items: [
      'Độ dẻo cao, dễ thi công',
      'Rút ngắn thời gian tháo khuôn',
      'Hạn chế tối đa nứt bề mặt',
      'Tiết kiệm chi phí vật liệu',
    ],
    image: '/assets/design/xi-mang-da-dung.png',
  },
  {
    title: 'Xi măng Xây trát Cao cấp',
    items: [
      'Tối ưu hóa khả năng giữ nước',
      'Độ bám dính cực tốt',
      'Bề mặt tường mịn, đẹp',
      'Hạn chế tình trạng thấm, ố',
    ],
    image: '/assets/design/xaytrat.png',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function CoreServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Sản phẩm tiêu biểu"
          subtitle="Danh mục sản phẩm xi măng chất lượng cao, đáp ứng mọi yêu cầu kỹ thuật khắt khe của các công trình trọng điểm."
          ghostText="SẢN PHẨM TIÊU BIỂU"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[420px] bg-[#FDFDFD] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] shadow-sm core-service-card border border-gray-100 hover:border-viettel-red/20"
            >
              {/* Product Image Layer */}
              <div className="absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ease-out z-10 group-hover:scale-110 group-hover:opacity-10 group-hover:translate-y-10">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-transform duration-500"
                />
              </div>

              {/* Content Layer */}
              <div className="p-8 h-full flex flex-col relative z-20">
                <div className="mb-6">
                  <h3 className="text-viettel-dark group-hover:text-viettel-red text-xl font-bold transition-all duration-300 relative font-sans leading-tight uppercase tracking-tight">
                    {service.title}
                    <span className="block w-12 h-[3px] bg-viettel-red mt-3 transition-all duration-500 transform origin-left"></span>
                  </h3>
                </div>

                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 w-full font-sans">
                  <ul className="space-y-3 text-gray-600">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-[13px] leading-tight font-medium">
                        <span className="text-viettel-red mr-2 mt-0.5 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <span className="inline-flex items-center text-viettel-red font-bold text-xs uppercase tracking-wider group/link">
                      Chi tiết sản phẩm
                      <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
