'use client';

import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';

const CLIENTS = [
  { name: 'Vietcombank', logo: 'https://logolook.net/wp-content/uploads/2023/10/Vietcombank-Logo.png' },
  { name: 'Techcombank', logo: 'https://vinadesign.vn/uploads/images/2023/05/logo-techcombank-vinadesign-24-10-36-54.jpg' },
  { name: 'NCB', logo: 'https://static.wixstatic.com/media/76504a_745915d398f547c89f54784784e54854~mv2.png' },
  { name: 'MB Ageas', logo: 'https://www.mbageas.life/themes/mbageas/images/logo.png' },
  { name: 'MB', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_Bank.png' },
  { name: 'Viettel', logo: 'https://viettel.vn/Content/images/logo_viettel.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg' },
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
