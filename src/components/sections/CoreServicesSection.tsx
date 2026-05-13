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
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Xi măng Hỗn hợp Bền Sunfat',
    items: [
      'Kháng xâm thực sunfat mạnh',
      'Bảo vệ cốt thép tối đa',
      'Chuyên dụng ven biển, đập',
      'Ngăn chặn ăn mòn hóa chất',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 1.612L9.45 5.061L12 3.5l2.55 1.561L12 6.612z" />
      </svg>
    ),
  },
  {
    title: 'Xi măng Đa dụng',
    items: [
      'Độ dẻo cao, dễ thi công',
      'Rút ngắn thời gian tháo khuôn',
      'Hạn chế tối đa nứt bề mặt',
      'Tiết kiệm chi phí vật liệu',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Xi măng Xây trát Cao cấp',
    items: [
      'Tối ưu hóa khả năng giữ nước',
      'Độ bám dính cực tốt',
      'Bề mặt tường mịn, đẹp',
      'Hạn chế tình trạng thấm, ố',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
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
              className="group relative h-[320px] bg-[#EE0000] hover:bg-[#F8F8F8] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl shadow-sm core-service-card"
            >
              <div className="p-10 h-full flex flex-col items-center justify-center group-hover:items-start group-hover:justify-start transition-all duration-300 relative z-10">
                <div className="w-16 h-16 text-white mb-6 transition-all duration-500 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:w-40 group-hover:h-40 group-hover:scale-150 group-hover:opacity-5 group-hover:text-viettel-red group-hover:mb-0">
                  {service.icon}
                </div>

                <h3 className="text-white group-hover:text-viettel-red text-xl font-bold text-center group-hover:text-left transition-all duration-300 relative font-sans">
                  {service.title}
                  <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-viettel-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </h3>

                <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-full font-sans">
                  <ul className="space-y-2 text-gray-600">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-viettel-red mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
