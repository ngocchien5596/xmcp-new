'use client';

import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';

const CLIENTS = [
  { name: 'Viettel Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Viettel_logo_2021.svg' },
  { name: 'Vingroup', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Vingroup.png' },
  { name: 'Sun Group', logo: 'https://upload.wikimedia.org/wikipedia/vi/a/a2/Logo_Sun_Group.png' },
  { name: 'Vinaconex', logo: 'https://upload.wikimedia.org/wikipedia/vi/0/0e/Logo_vinaconex.png' },
  { name: 'Tập đoàn Điện lực Việt Nam (EVN)', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_EVN.svg' },
  { name: 'Tập đoàn Hòa Bình', logo: 'https://upload.wikimedia.org/wikipedia/vi/5/52/Logo_Hoa_Binh_Group.png' },
  { name: 'Coteccons', logo: 'https://upload.wikimedia.org/wikipedia/vi/1/1e/Logo_Coteccons.png' },
  { name: 'VEC', logo: 'https://placehold.co/200x80/f3f4f6/ed1c24?text=VEC' },
  { name: 'Bộ Quốc phòng', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Logo_Bo_Quoc_phong.svg' },
  { name: 'QUACERT', logo: 'https://placehold.co/200x80/f3f4f6/ed1c24?text=QUACERT' },
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
          Hơn 500+ Đối tác và Khách hàng tin tưởng
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
              duration: 30,
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
                className="h-10 md:h-14 w-auto grayscale-0 opacity-100 hover:scale-110 transition-transform duration-300 cursor-pointer object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
