'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';
import LogoLoop from '@/components/ui/LogoLoop';

const CLIENTS = [
  { src: '/assets/design/bqp.webp', alt: 'Bộ Quốc phòng' },
  { src: '/assets/design/dv.webp', alt: 'Dịch vụ Thương mại' },
  { src: '/assets/design/vt.webp', alt: 'Viettel Group' },
  { src: '/assets/design/logo vtfml.webp', alt: 'Viettel FM' },
  { src: '/assets/design/si.webp', alt: 'SI' },
  { src: '/assets/design/Omanco Viet Nam.png', alt: 'Omanco Viet Nam' },
];

export function ClientLogosSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Khách hàng - Đối tác"
          ghostText="KHÁCH HÀNG - ĐỐI TÁC"
          className="mb-12"
        />
      </div>

      <div className="relative w-full">
        <LogoLoop
          logos={CLIENTS}
          speed={80}
          direction="left"
          logoHeight={90}
          gap={80}
          hoverSpeed={20}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Khách hàng và đối tác chiến lược"
        />
      </div>
    </section>
  );
}
