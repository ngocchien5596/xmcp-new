export interface NotificationItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'finance' | 'shareholder' | 'internal' | 'general';
  categoryLabel: string;
  pdfUrl: string;
  fileSize: string;
}

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 1,
    title: "Yêu cầu kỹ thuật Chặn đơn hàng v1.6",
    description: "Tài liệu đặc tả yêu cầu kỹ thuật (PTYC) về chức năng chặn đơn hàng phiên bản 1.6 dành cho hệ thống phân phối và bán hàng của Xi măng Cẩm Phả.",
    date: "24 Tháng 7, 2026",
    category: "internal",
    categoryLabel: "Thông báo nội bộ",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.2 MB"
  },
  {
    id: 2,
    title: "Báo cáo tài chính tóm tắt Quý II năm 2026",
    description: "Công bố thông tin về báo cáo tài chính tóm tắt Quý II năm 2026 đã được phê duyệt bởi Ban kiểm soát và Hội đồng quản trị Công ty Cổ phần Xi măng Cẩm Phả.",
    date: "15 Tháng 7, 2026",
    category: "finance",
    categoryLabel: "Báo cáo tài chính",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf", // Using the same PDF as mock for other items
    fileSize: "2.4 MB"
  },
  {
    id: 3,
    title: "Nghị quyết Đại hội đồng cổ đông thường niên năm 2026",
    description: "Nghị quyết chính thức Đại hội đồng cổ đông thường niên năm 2026 của Công ty Cổ phần Xi măng Cẩm Phả họp ngày 25/06/2026.",
    date: "26 Tháng 6, 2026",
    category: "shareholder",
    categoryLabel: "Thông báo cổ đông",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "3.8 MB"
  },
  {
    id: 4,
    title: "Thông báo về việc thay đổi nhân sự Ban Tổng giám đốc",
    description: "Quyết định bổ nhiệm nhân sự mới trong Ban Tổng giám đốc Công ty Cổ phần Xi măng Cẩm Phả có hiệu lực kể từ ngày 01/07/2026.",
    date: "20 Tháng 6, 2026",
    category: "internal",
    categoryLabel: "Thông báo nội bộ",
    pdfUrl: "/images/news/1784681512823_8441313950489281095_g302660007515317585_8889e1ae28e22281f19f18f7471be707_cb5a1c18.webp",
    fileSize: "150 KB"
  },
  {
    id: 5,
    title: "Thông báo mời thầu gói mua sắm nguyên liệu sản xuất năm 2026-2027",
    description: "Mời các nhà thầu có đủ năng lực và kinh nghiệm tham gia đấu thầu gói thầu cung cấp nguyên nhiên liệu cho Nhà máy chính Quảng Ninh.",
    date: "10 Tháng 6, 2026",
    category: "general",
    categoryLabel: "Thông báo chung",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.5 MB"
  },
  {
    id: 6,
    title: "Báo cáo tình hình quản trị công ty 6 tháng đầu năm 2026",
    description: "Báo cáo định kỳ tình hình quản trị công ty và hoạt động của Hội đồng quản trị trong nửa đầu năm tài chính 2026.",
    date: "05 Tháng 6, 2026",
    category: "finance",
    categoryLabel: "Báo cáo tài chính",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "2.1 MB"
  },
  {
    id: 7,
    title: "Thông báo chi trả cổ tức đợt 1 năm 2025",
    description: "Chi tiết về tỷ lệ chi trả, thời gian đăng ký cuối cùng và thời gian thực hiện thanh toán cổ tức bằng tiền đợt 1 năm 2025 cho các cổ đông.",
    date: "28 Tháng 5, 2026",
    category: "shareholder",
    categoryLabel: "Thông báo cổ đông",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.8 MB"
  },
  {
    id: 8,
    title: "Thông báo lịch nghỉ lễ Quốc khánh 2/9/2026",
    description: "Thông báo chính thức về thời gian nghỉ lễ Quốc khánh 2/9 năm 2026 áp dụng cho toàn thể cán bộ nhân viên văn phòng và các nhà máy thành viên.",
    date: "25 Tháng 5, 2026",
    category: "internal",
    categoryLabel: "Thông báo nội bộ",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "450 KB"
  },
  {
    id: 9,
    title: "Quyết định ban hành Quy chế chi tiêu nội bộ mới năm 2026",
    description: "Quy chế chi tiêu nội bộ mới được sửa đổi bổ sung nhằm tối ưu hóa chi phí vận hành và nâng cao hiệu quả quản trị tài chính doanh nghiệp.",
    date: "20 Tháng 5, 2026",
    category: "internal",
    categoryLabel: "Thông báo nội bộ",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.1 MB"
  },
  {
    id: 10,
    title: "Báo cáo kiểm toán độc lập về báo cáo tài chính năm 2025",
    description: "Công bố toàn văn báo cáo tài chính năm 2025 của Công ty Cổ phần Xi măng Cẩm Phả đã được kiểm toán bởi Công ty Kiểm toán độc lập.",
    date: "15 Tháng 5, 2026",
    category: "finance",
    categoryLabel: "Báo cáo tài chính",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "4.5 MB"
  },
  {
    id: 11,
    title: "Thông báo về việc thay đổi địa điểm văn phòng đại diện tại TP.HCM",
    description: "Văn phòng đại diện tại Thành phố Hồ Chí Minh chính thức chuyển sang địa điểm làm việc mới khang trang và hiện đại hơn kể từ ngày 01/06/2026.",
    date: "10 Tháng 5, 2026",
    category: "general",
    categoryLabel: "Thông báo chung",
    pdfUrl: "/images/news/12-new_04a284da.webp",
    fileSize: "330 KB"
  },
  {
    id: 12,
    title: "Nghị quyết phê duyệt phương án sản xuất kinh doanh Quý III năm 2026",
    description: "Nghị quyết của Hội đồng quản trị thông qua kế hoạch sản xuất xi măng và các mục tiêu doanh thu, lợi nhuận trọng tâm cho Quý III/2026.",
    date: "05 Tháng 5, 2026",
    category: "shareholder",
    categoryLabel: "Thông báo cổ đông",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.4 MB"
  },
  {
    id: 13,
    title: "Thông báo tổ chức cuộc thi ý tưởng sáng tạo XMCP 2026",
    description: "Cuộc thi phát động phong trào hiến kế, đưa ra các giải pháp kỹ thuật và cải tiến quy trình sản xuất nhằm tiết kiệm năng lượng và tài nguyên.",
    date: "01 Tháng 5, 2026",
    category: "general",
    categoryLabel: "Thông báo chung",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "1.6 MB"
  },
  {
    id: 14,
    title: "Báo cáo tiến độ đầu tư dự án dây chuyền nghiền xi măng số 2",
    description: "Báo cáo cập nhật tiến độ xây dựng hạ tầng, lắp đặt máy móc thiết bị và kế hoạch chạy thử nghiệm dây chuyền nghiền xi măng mới tại miền Nam.",
    date: "25 Tháng 4, 2026",
    category: "finance",
    categoryLabel: "Báo cáo tài chính",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "3.2 MB"
  },
  {
    id: 15,
    title: "Thông báo tăng cường công tác phòng chống cháy nổ mùa nắng nóng",
    description: "Yêu cầu Giám đốc các Nhà máy, Trưởng các đơn vị triển khai ngay các phương án tự kiểm tra, diễn tập PCCC và bảo dưỡng hệ thống thiết bị phòng ngừa.",
    date: "18 Tháng 4, 2026",
    category: "internal",
    categoryLabel: "Thông báo nội bộ",
    pdfUrl: "/documents/PTYC_Chan_don_hang_v1_6.pdf",
    fileSize: "780 KB"
  }
];

// Module-level cache for lookups to follow Rule 7.2 (Build Index Maps) and 7.4 (Cache Repeated Function Calls)
const notificationsMap = new Map<number, NotificationItem>(
  NOTIFICATIONS_DATA.map(n => [n.id, n])
);

export function getNotificationById(id: number): NotificationItem | undefined {
  return notificationsMap.get(id);
}
