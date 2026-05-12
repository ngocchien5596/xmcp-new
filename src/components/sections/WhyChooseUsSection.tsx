import { OrbitalWheel } from '@/components/ui/OrbitalWheel';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Tại sao chọn Xi măng Cẩm Phả?"
          ghostText="TẠI SAO CHỌN Xi măng Cẩm Phả?"
          className="mb-0"
        />

        <div className="-mt-12 md:-mt-20">
          <OrbitalWheel />
        </div>
      </div>
    </section>
  );
}
