import { HeroSection } from '@/components/sections/HeroSection';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { CustomerStoriesSection } from '@/components/sections/CustomerStoriesSection';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ | Xi măng Cẩm Phả',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <CoreServicesSection />
      <CustomerStoriesSection />
      <NewsSection />
      <ClientLogosSection />
    </>
  );
}
