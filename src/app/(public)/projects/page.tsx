import { Metadata } from 'next';
import { ProjectsContent } from '@/components/sections/ProjectsContent';

export const metadata: Metadata = {
  title: 'Dự án Tiêu biểu | Xi măng Cẩm Phả',
  description: 'Khám phá các dự án hạ tầng trọng điểm quốc gia sử dụng Xi măng Cẩm Phả.',
};

const PROJECTS = [
  {
    id: '1',
    title: 'Cầu Cửa Lục 1 (Cầu Tình Yêu) - Quảng Ninh',
    description: 'Công trình trọng điểm với kiến trúc biểu tượng của Quảng Ninh, sử dụng xi măng mác cao cho các cấu kiện đúc sẵn và trụ cầu chịu lực.',
    image: 'https://images.unsplash.com/photo-1545910668-e3251e39a3f2?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2023'
  },
  {
    id: '2',
    title: 'Sân bay Phan Thiết - Bình Thuận',
    description: 'Dự án hạ tầng hàng không quy mô lớn, yêu cầu tiêu chuẩn kỹ thuật khắt khe về cường độ nén và độ bền vững của nền đường cất hạ cánh.',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80',
    category: 'Hàng không',
    year: '2024'
  },
  {
    id: '3',
    title: 'Sun World Ocean Park Hạ Long',
    description: 'Tổ hợp vui chơi giải trí hàng đầu khu vực, sử dụng các sản phẩm xi măng chuyên dụng chống ăn mòn trong môi trường biển.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    category: 'Du lịch - Nghỉ dưỡng',
    year: '2022'
  },
  {
    id: '4',
    title: 'Cao tốc TP.HCM – Long Thành – Dầu Giây',
    description: 'Tuyến huyết mạch giao thông phía Nam, khẳng định chất lượng xi măng Cẩm Phả trong các hạng mục bê tông nhựa và mặt đường.',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2015'
  },
  {
    id: '5',
    title: 'Vinhomes Dragon Bay Hạ Long',
    description: 'Khu đô thị biển cao cấp, yêu cầu sự kết hợp hoàn hảo giữa độ bền kết cấu và thẩm mỹ hoàn thiện bề mặt.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    category: 'Khu Đô thị',
    year: '2017'
  },
  {
    id: '6',
    title: 'Nhà máy Nhiệt điện Mông Dương 2',
    description: 'Công trình công nghiệp quy mô lớn tại Quảng Ninh, đòi hỏi xi măng có khả năng chịu nhiệt và cường độ chịu nén đặc biệt.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80',
    category: 'Công trình Công nghiệp',
    year: '2015'
  }
];

export default function ProjectsPage() {
  return <ProjectsContent projects={PROJECTS} />;
}
