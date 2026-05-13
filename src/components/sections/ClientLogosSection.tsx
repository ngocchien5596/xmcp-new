'use client';

import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';

const CLIENTS = [
  { name: 'Bộ Quốc phòng', logo: '/assets/design/bqp.webp' },
  { name: 'Dịch vụ Thương mại', logo: '/assets/design/dv.webp' },
  { name: 'Viettel Group', logo: '/assets/design/vt.webp' },
  { name: 'Viettel FM', logo: '/assets/design/logo vtfml.webp' },
  { name: 'SI', logo: '/assets/design/si.webp' },
  { name: 'Omanco Viet Nam', logo: '/assets/design/Omanco Viet Nam.png' },
];

export function ClientLogosSection() {
  const doubledClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Khách hàng - Đối tác"
          ghostText="KHÁCH HÀNG - ĐỐI TÁC"
          className="mb-12"
        />
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-10">
          Hơn 150+ Đối tác và Khách hàng tin tưởng
        </p>
      </div>

      {/* Infinite Scrolling Row */}
      <div className="relative mt-12 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 md:before:w-40 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 md:after:w-40 after:bg-gradient-to-l after:from-white after:to-transparent">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center w-fit px-10"
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {doubledClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 md:h-28 w-auto grayscale-0 opacity-100 hover:scale-110 transition-transform duration-300 cursor-pointer object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
