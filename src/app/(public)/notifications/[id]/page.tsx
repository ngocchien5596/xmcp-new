import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InternalHero } from '@/components/sections/InternalHero';
import { ChevronLeft, Calendar, User, FileText } from 'lucide-react';
import NextLink from 'next/link';
import { getNotificationById, NOTIFICATIONS_DATA } from '@/data/notifications';
import { PDFFlipbook } from '@/components/ui/PDFFlipbook';
import { cn } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  // Rule 7.2: O(1) indexed lookup helper
  const notification = getNotificationById(parseInt(id));
  if (!notification) return { title: 'Thông báo | Xi măng Cẩm Phả' };
  
  return {
    title: `${notification.title} | Xi măng Cẩm Phả`,
    description: notification.description,
  };
}

export default async function NotificationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Rule 7.2: O(1) indexed lookup helper
  const notification = getNotificationById(parseInt(id));
  
  if (!notification) {
    notFound();
  }

  // Get other/related notifications
  const relatedNotifications = NOTIFICATIONS_DATA
    .filter(n => n.id !== notification.id)
    .slice(0, 3);

  return (
    <main className="flex-grow bg-white min-h-screen">
      <InternalHero 
        title="CHI TIẾT"
        highlightText="THÔNG BÁO"
        subtitle="Xem nội dung chi tiết, tải tài liệu đính kèm và cập nhật các thông tin chính thức."
      />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumbs & Back */}
            <div className="flex items-center justify-between mb-10">
              <NextLink 
                href="/notifications" 
                className="flex items-center text-xs font-bold text-gray-400 hover:text-viettel-red transition-colors uppercase tracking-widest"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Quay lại danh sách
              </NextLink>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-red-50 text-viettel-red text-[10px] font-bold rounded uppercase tracking-widest border border-red-100">
                  {notification.categoryLabel}
                </span>
              </div>
            </div>

            {/* Title & Metadata */}
            <header className="mb-10">
              <h1 className="text-2xl md:text-4xl font-extrabold text-viettel-dark mb-6 leading-tight tracking-tight uppercase">
                {notification.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 border-y border-gray-100 py-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-viettel-red" />
                  Ngày đăng: {notification.date}
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-viettel-red" />
                  Dung lượng file: {notification.fileSize}
                </div>
              </div>
            </header>

            {/* Main PDF Flipbook Reader */}
            <div className="mb-16">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-viettel-red" />
                  Nội dung tài liệu
                </h2>
              </div>
              
              {/* HTML5 Flipbook Component */}
              <PDFFlipbook 
                pdfUrl={notification.pdfUrl} 
                title={notification.title} 
              />
            </div>

            {/* Document Description */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 mb-16">
              <h3 className="text-sm font-bold text-viettel-dark uppercase tracking-wider mb-3">Tóm tắt nội dung:</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {notification.description}
              </p>
            </div>

            {/* Related Notifications List */}
            {relatedNotifications.length > 0 && (
              <section className="pt-10 border-t border-gray-150">
                <h3 className="text-md font-bold text-viettel-dark uppercase tracking-widest mb-8">
                  Thông báo khác
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNotifications.map((item) => (
                    <NextLink 
                      key={item.id} 
                      href={`/notifications/${item.id}`}
                      className="group block bg-white border border-gray-150 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[9px] font-semibold text-gray-400">{item.date}</span>
                          <span className="text-[9px] font-bold text-viettel-red uppercase tracking-wider">{item.categoryLabel}</span>
                        </div>
                        <h4 className="text-xs font-bold text-viettel-dark group-hover:text-viettel-red transition-colors line-clamp-2 leading-snug mb-3">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-viettel-red transition-colors mt-4 flex items-center gap-1">
                        Xem chi tiết <ChevronLeft className="w-3 h-3 rotate-180 transition-transform group-hover:translate-x-1" />
                      </span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </article>
    </main>
  );
}
