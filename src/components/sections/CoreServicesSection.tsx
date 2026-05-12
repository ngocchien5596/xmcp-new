'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const SERVICES = [
  {
    title: 'Dịch vụ gia công, phát triển phần mềm',
    items: [
      'Phát triển Web/Mobile App',
      'Hệ thống lõi Doanh nghiệp',
      'Bảo trì và Vận hành',
      'Nâng cấp hệ thống Legacy',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Dịch vụ điện toán đám mây',
    items: [
      'Cloud Migration & Strategy',
      'Managed Cloud Services',
      'Cloud Security & Compliance',
      'Hybrid/Multi-Cloud Solutions',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Dịch vụ ứng dụng Công nghệ mới',
    items: [
      'AI & Machine Learning',
      'Blockchain Solutions',
      'Internet of Things (IoT)',
      'Robotic Process Automation',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Tư vấn, đào tạo, dịch vụ chất lượng',
    items: [
      'Tư vấn ISO/CMMI Level 5',
      'Agile Coaching & Training',
      'Dịch vụ QA/QC Chuyên sâu',
      'Đào tạo CNTT Doanh nghiệp',
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21l-9-5 9-5 9 5-9 5z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
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
          title="Dịch vụ cốt lõi"
          subtitle="Hệ sinh thái giải pháp số toàn diện đáp ứng mọi nhu cầu chuyển đổi số của doanh nghiệp."
          ghostText="DỊCH VỤ CỐT LÕI"
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
