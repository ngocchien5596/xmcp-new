'use client';

import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { CountUp } from '@/components/ui/CountUp';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section 
      className="hero-bg min-h-[90vh] flex items-center relative overflow-hidden" 
      style={{
        backgroundImage: "linear-gradient(rgba(237, 28, 36, 0.3), rgba(0, 0, 0, 0.4)), url('/assets/design/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 md:pt-0">
        <RevealOnScroll className="text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-tight mb-8 uppercase">
            VIETTEL SOFTWARE LÀ CÔNG TY TƯ VẤN VỀ CUNG CẤP DỊCH VỤ CNTT TOÀN CẦU.
          </h1>
          <p className="text-xl md:text-xl font-sans font-normal leading-relaxed mb-1 text-red-100">
            Chúng tôi cung cấp giải pháp sáng tạo và tin cậy đáp ứng nhu cầu của khách hàng với chất lượng
            cao nhất bằng sự chuyên nghiệp, chính trực và minh bạch.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 border-t border-red-500/30 pt-10 mb-12">
            <div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-widest mb-2">
                <CountUp end={2000} suffix="+" />
              </div>
              <div className="text-xl text-red-200">Chuyên gia IT</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-widest mb-2">
                <CountUp end={100} />
              </div>
              <div className="text-xl text-red-200">Khách hàng, Đối tác</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-medium tracking-widest mb-2">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="text-xl text-red-200">Quốc gia</div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-12">
            <div className="text-2xl md:text-3xl font-display font-medium tracking-widest mb-2">
              CMMI 5, ISO 27001, ISO 9001
            </div>
            <div className="text-xl text-red-200">Tiêu chuẩn quốc tế</div>
          </div>

          <div>
            <Link href="/contact" className="inline-block bg-white text-viettel-red px-10 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-50 transition-colors shadow-lg">
              Liên hệ ngay
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="relative flex justify-center items-center mt-12 md:mt-0">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white/10 backdrop-blur-md rounded-full absolute"></div>
          <motion.div 
            className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] absolute flex items-center justify-center z-20"
            animate={{ 
              y: [0, -20, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* Note: In legacy it was bao-ximang.png, keeping the original logic */}
            <img 
              src="/assets/design/bao-ximang.png" 
              alt="Sản phẩm" 
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            />
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
