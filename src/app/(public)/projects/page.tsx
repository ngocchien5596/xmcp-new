import { Metadata } from 'next';
import { ProjectsContent } from '@/components/sections/ProjectsContent';
import { PROJECTS_DATA } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Dự án Tiêu biểu | Xi măng Cẩm Phả',
  description: 'Khám phá các dự án hạ tầng trọng điểm quốc gia sử dụng xi măng Cẩm Phả.',
};

export default function ProjectsPage() {
  return <ProjectsContent projects={PROJECTS_DATA} />;
}