'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';
import { Globe, Users, Zap, Shield, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';

const WHEEL_ITEMS = [
  {
    id: 'why-1',
    icon: <Globe />,
    title: 'Mạng lưới Toàn cầu',
    description: 'Tự hào xuất khẩu xi măng tới hơn 20 quốc gia và vùng lãnh thổ, khẳng định vị thế và chất lượng sản phẩm Việt Nam trên bản đồ xây dựng thế giới.'
  },
  {
    id: 'why-2',
    icon: <Users />,
    title: 'Trách nhiệm Quân đội',
    description: 'Là thành viên của Tập đoàn Viettel, chúng tôi kế thừa văn hóa kỷ luật, sự tận tâm và uy tín tuyệt đối trong mọi cam kết với khách hàng và đối tác.'
  },
  {
    id: 'why-3',
    icon: <Zap />,
    title: 'Công nghệ Nhật Bản',
    description: 'Ứng dụng dây chuyền lò quay khô hiện đại nhất từ Nhật Bản, tối ưu hóa nhiệt năng (< 730 Kcal/kg clinker) và giảm thiểu tối đa phát thải môi trường.'
  },
  {
    id: 'why-4',
    icon: <Shield />,
    title: 'Tiêu chuẩn Quốc tế',
    description: 'Hệ thống quản lý đạt chuẩn ISO 9001, ISO 14001 và phòng thí nghiệm VILAS 354, đảm bảo chất lượng đồng nhất trong từng lô sản phẩm.'
  },
  {
    id: 'why-5',
    icon: <Layout />,
    title: 'Năng lực Sản xuất',
    description: 'Sở hữu nhà máy hiện đại tại Quảng Ninh và trạm nghiền lớn tại Bà Rịa - Vũng Tàu với tổng công suất cung ứng đạt 3.8 triệu tấn xi măng mỗi năm.'
  }
];

export function OrbitalWheel() {
  const [activeId, setActiveId] = useState(WHEEL_ITEMS[0].id);
  const [radius, setRadius] = useState(320);
  const [rotation, setRotation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(190); // 10px gap
      else if (window.innerWidth < 1024) setRadius(220); // 40px gap
      else setRadius(350); // 40px gap
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const rotationRef = useRef(0);

  // Auto-rotation & Auto-focus logic
  useAnimationFrame((_time) => {
    if (isAutoPlaying) {
      rotationRef.current = (rotationRef.current - 0.1) % 360;
      setRotation(rotationRef.current);

      // Auto-focus calculation
      let candidateId = activeId;
      let minDistance = Infinity;

      WHEEL_ITEMS.forEach((item, index) => {
        const angleOffset = (index / WHEEL_ITEMS.length) * 360 - 90;
        const currentAngle = ((angleOffset + rotationRef.current) % 360 + 360) % 360;

        // Focus Zone CCW: 3 o'clock (0°) to 12 o'clock (270°)
        // In CCW rotation, this corresponds to the arc between 270° and 360°/0°
        const isActive = currentAngle >= 270 || currentAngle <= 5;

        if (isActive) {
          // Distance from entrance (0°) in CCW direction:
          // An item at 359.9° just entered, so it's "closest" to the trigger point
          const dist = (360 - currentAngle) % 360;
          if (dist < minDistance) {
            minDistance = dist;
            candidateId = item.id;
          }
        }
      });

      if (candidateId !== activeId) {
        setActiveId(candidateId);
      }
    }
  });

  const handleItemClick = (id: string) => {
    setActiveId(id);
    setIsAutoPlaying(false);

    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);

    // Resume auto-play after 3 seconds of inactivity
    autoPlayTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const activeItem = WHEEL_ITEMS.find(item => item.id === activeId);

  return (
    <div className="relative w-full max-w-[1000px] aspect-square mx-auto flex items-center justify-center overflow-visible">
      {/* The Orbit Rings */}
      <div className="absolute pointer-events-none overflow-visible" style={{ width: radius * 2, height: radius * 2 }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Solid Outer Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-viettel-red/40"
            style={{ rotate: rotation, transformOrigin: 'center' }}
          />
          {/* Dashed Inner Ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeDasharray="12 6"
            className="text-viettel-red/20"
            style={{ rotate: -rotation * 0.5, transformOrigin: 'center' }}
          />
        </svg>

        {/* Decorative Dots (Absolute positioned over the SVG area) */}
        <div className="absolute inset-0">
          {/* Outer Dots (on the 49r SVG circle -> 98% of radius) */}
          <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
            {[0, 90, 180, 270].map((angle) => (
              <div
                key={`dot-outer-${angle}`}
                className="absolute w-3 h-3 bg-viettel-red/100 rounded-full shadow-[0_0_10px_rgba(238,0,51,0.3)]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius * 0.98}px)`
                }}
              />
            ))}
          </motion.div>
          {/* Inner Dots (on the 44r SVG circle -> 88% of radius) */}
          <motion.div className="absolute inset-0" style={{ rotate: -rotation * 0.5 }}>
            {[45, 135, 225, 315].map((angle) => (
              <div
                key={`dot-inner-${angle}`}
                className="absolute w-2 h-2 bg-viettel-red/70 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius * 0.88}px)`
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Rotating Items Container */}
      <div className="absolute inset-0 pointer-events-none">
        {WHEEL_ITEMS.map((item, index) => {
          const angleOffset = (index / WHEEL_ITEMS.length) * 360 - 90;
          const currentAngleDeg = angleOffset + rotation;
          const currentAngleRad = (currentAngleDeg * Math.PI) / 180;

          // Calculate X and Y coordinates
          const x = Math.cos(currentAngleRad) * radius;
          const y = Math.sin(currentAngleRad) * radius;

          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              {/* The Card - now upright by default as coordinate system is not rotated */}
              <motion.div
                className={cn(
                  "absolute w-[140px] lg:w-[220px] p-3 md:p-5 rounded-xl md:rounded-2xl cursor-pointer flex items-center gap-2 md:gap-4 transition-all duration-300 pointer-events-auto",
                  "border border-gray-100 shadow-xl",
                  activeId === item.id
                    ? "bg-viettel-red text-white border-viettel-red shadow-viettel-red/30 z-30 scale-105"
                    : "bg-white text-viettel-dark hover:bg-red-50 z-20"
                )}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                style={{
                  x: "-50%",
                  y: "-50%",
                  rotate: 0 // Explicitly keep upright
                }}
                onClick={() => handleItemClick(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-colors duration-300",
                  activeId === item.id ? "bg-white/20 text-white" : "bg-red-50 text-viettel-red"
                )}>
                  {item.icon}
                </div>
                <span className="text-[10px] md:text-sm font-bold font-sans leading-tight">
                  {item.title}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Center Content Box */}
      <motion.div
        className="relative z-50 w-[200px] lg:w-[350px] bg-white p-5 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-gray-50 text-center pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-base md:text-xl font-bold text-viettel-red mb-3 md:mb-5 uppercase tracking-wider font-display">
              {activeItem?.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[10px] md:text-sm">
              {activeItem?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
