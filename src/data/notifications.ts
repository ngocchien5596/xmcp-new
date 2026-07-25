export interface NotificationItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'finance' | 'shareholder' | 'internal' | 'general';
  categoryLabel: string;
  pdfUrl: string;
  fileSize: string;
  content?: string;
}

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    "id": 1,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Dịch vụ cắt cỏ, vệ sinh mương thoát nước",
    "date": "25 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_1.pdf",
    "fileSize": "295.3 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/shares/2026/BG802.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 2,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu Cung cấp băng tải cao su",
    "date": "25 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_2.pdf",
    "fileSize": "529.6 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/shares/2026/KQ801.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 3,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu Cung cấp đá vôi phục vụ sản xuất",
    "date": "25 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_3.pdf",
    "fileSize": "290.6 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/shares/2026/KQ82.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 4,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu Cung cấp màn hình điều khiển máy bắn bao số 5",
    "date": "23 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_4.pdf",
    "fileSize": "305.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/shares/2026/KQ788.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 5,
    "title": "Thông báo gia hạn thời điểm đóng thầu",
    "description": "Thông báo gia hạn thời điểm đóng thầu gói thầu Cung cấp bảo hộ lao động năm 2026",
    "date": "23 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_5.pdf",
    "fileSize": "276.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/shares/2026/GH83.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 6,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp băn tải các loại",
    "date": "23 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_6.pdf",
    "fileSize": "301.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG786.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 7,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp Dao gạt liệu máy nghiền",
    "date": "17 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_7.pdf",
    "fileSize": "579.4 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG752.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 8,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp Dây hàn vỏ con lăn máy nghiền",
    "date": "17 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_8.pdf",
    "fileSize": "315.7 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG753.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 9,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp nguyên liệu dùng cho máy in phun",
    "date": "17 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_9.pdf",
    "fileSize": "296.8 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG751.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 10,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp vật tư băng tải",
    "date": "15 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_10.pdf",
    "fileSize": "515.7 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX1507.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 11,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp thép tấm, thép hình phục vụ sản xuất",
    "date": "15 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_11.pdf",
    "fileSize": "534.5 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX1157.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 12,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp vật tư truyền thông Profibus/UMC phục vụ sửa chữa mất kết nối DCS tại LS09",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_12.pdf",
    "fileSize": "616.2 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG849.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 13,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp dịch vụ đo kiểm hệ thống tiếp địa chống sét",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_13.pdf",
    "fileSize": "605.4 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG850.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 14,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp vật tư bơm dầu, gioăng phớt, lọc dầu",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_14.pdf",
    "fileSize": "614.4 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG703N.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 15,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu gói thầu Cung cấp bộ seal kích thủy lực máy nghiền",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_15.pdf",
    "fileSize": "304.5 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/KQ743.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 16,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp bảo hộ lao động năm 2026",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_16.pdf",
    "fileSize": "526.3 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT734.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 17,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Dịch vụ khảo sát, thiết kế silo chứa tro bay 300T",
    "date": "14 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_17.pdf",
    "fileSize": "1.4 MB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG876.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 18,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp Động cơ và Hộp giảm tốc cho các hạng mục 111AC01, 113GC01, 115GC01",
    "date": "13 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_18.pdf",
    "fileSize": "532.3 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX81.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 19,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Dịch vụ thay vành răng cẩu xuất clinker 173BS01 và doa lỗ, phun phủ trục chủ động xoay vành răng cẩu 115GC01",
    "date": "11 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_19.pdf",
    "fileSize": "1.7 MB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG844.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 20,
    "title": "Thông báo gia hạn thời điểm đóng thầu",
    "description": "Thông báo gia hạn thời điểm đóng thầu gói thầu Cung cấp vỏ bao Jumbo 1,5 tấn",
    "date": "9 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_20.pdf",
    "fileSize": "204.3 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH78.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 21,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu gói thầu Cung cấp Xỷ hạt lò cao (nghiền mịn)",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_21.pdf",
    "fileSize": "255.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/KQ72A.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 22,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp vỏ con lăn máy nghiền xi măng",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_22.pdf",
    "fileSize": "526.5 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT708.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 23,
    "title": "Thông báo gia hạn thời điểm đóng thầu",
    "description": "Thông báo gia hạn thời điểm đóng thầu gói thầu Cung cấp đá vôi phục vụ sản xuất",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_23.pdf",
    "fileSize": "661.7 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH77.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 24,
    "title": "Thông báo gia hạn thời điểm nộp HSĐX",
    "description": "Thông báo gia hạn thời điểm nộp HSĐX gói thầu Cung cấp dầu máy nén khí",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_24.pdf",
    "fileSize": "242.5 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH173.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 25,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp xỉ lò cao dùng để sản xuất xi măng",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_25.pdf",
    "fileSize": "656.4 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG828.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 26,
    "title": "Thông báo gia hạn thời điểm nộp HSĐX",
    "description": "Thông báo gia hạn thời điểm nộp HSĐX gói thầu Cung cấp dầu bôi trơn, dầu thủy lực",
    "date": "7 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_26.pdf",
    "fileSize": "242.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH172.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 27,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Dịch vụ dán nối băng tải năm 2026",
    "date": "6 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_27.pdf",
    "fileSize": "526.8 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT700.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 28,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp dịch vụ kiểm định, hiệu chuẩn và lập báo cáo đánh giá, kiểm soát chất lượng hệ thống quan trắc khí thải tự động, liên tục Nhà máy",
    "date": "3 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_28.pdf",
    "fileSize": "372.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX1569.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 29,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp xỷ thép Fe2O3 (25%) làm phụ gia",
    "date": "2 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_29.pdf",
    "fileSize": "423.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX200.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 30,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu cung cấp dầu máy nén khí",
    "date": "2 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_30.pdf",
    "fileSize": "982.2 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX3006.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 31,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp vật tư, thiết bị phục vụ sửa chữa, thay thế cho buồng đốt tháp sấy, cyclone lắng hạng mục 141PH01, 122CN01",
    "date": "1 Tháng 7, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_31.pdf",
    "fileSize": "382.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX1538.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 32,
    "title": "Thông báo mời tham gia đề xuất",
    "description": "Thông báo mời tham gia đề xuất gói thầu Cung cấp dầu bôi trơn, dầu thủy lực",
    "date": "30 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_32.pdf",
    "fileSize": "377.7 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/DX1533.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 33,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp đá vôi phục vụ sản xuất",
    "date": "30 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_33.pdf",
    "fileSize": "530.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT689.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 34,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu gói thầu Cung cấp vỏ bao PP dán phục vụ sản xuất",
    "date": "30 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_34.pdf",
    "fileSize": "220.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/KQ71CN.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 35,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp vỏ bao Jumbo 1,5 tấn",
    "date": "30 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_35.pdf",
    "fileSize": "306.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT683.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 36,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu gói thầu Cung cấp dịch vụ xe cuốc và xe ben vận chuyển hàng hóa nội bộ",
    "date": "30 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_36.pdf",
    "fileSize": "266.6 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/KQ689.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 37,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp Puzolan (nghiền mịn)",
    "date": "25 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_37.pdf",
    "fileSize": "368.4 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT95.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 38,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp áo mưa tặng khách hàng năm 2026",
    "date": "25 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_38.pdf",
    "fileSize": "497.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG794.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 39,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp con lăn băng tải",
    "date": "22 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_39.pdf",
    "fileSize": "526.2 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT644.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 40,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp băng tải cao su",
    "date": "22 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_40.pdf",
    "fileSize": "524.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT643.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 41,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp vật tư sửa phân ly máy nghiền Bản vẽ",
    "date": "20 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_41.pdf",
    "fileSize": "655.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG662.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 42,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp bộ đồ bảo hộ lao động",
    "date": "20 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_42.pdf",
    "fileSize": "484.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG660.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 43,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp màn hình điều khiển máy bắn bao số 5",
    "date": "19 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_43.pdf",
    "fileSize": "302.2 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT613.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 44,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp bộ seal kích thủy lực máy nghiền",
    "date": "19 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_44.pdf",
    "fileSize": "302.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT603.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 45,
    "title": "Yêu cầu báo giá",
    "description": "Yêu cầu báo giá Cung cấp vật tư bộ giải nhiệt máy nén khí",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_45.pdf",
    "fileSize": "624.7 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/BG747.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 46,
    "title": "Thông báo gia hạn thời điểm đóng thầu",
    "description": "Thông báo gia hạn thời điểm đóng thầu gói thầu Cung cấp dịch vụ đo và phân tích rung động năm 2026",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_46.pdf",
    "fileSize": "695.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH622.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 47,
    "title": "Thông báo kết quả đấu thầu",
    "description": "Thông báo kết quả đấu thầu gói thầu Cung cấp thiết bị phòng thí nghiệm",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_47.pdf",
    "fileSize": "528.0 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/KQ590.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 48,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp Xỉ đáy phục vụ sản xuất",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_48.pdf",
    "fileSize": "531.1 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT589.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 49,
    "title": "Thông báo mời thầu",
    "description": "Thông báo mời thầu gói thầu Cung cấp Xỷ hạt lò cao (nghiền mịn)",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_49.pdf",
    "fileSize": "632.6 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GT581.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  },
  {
    "id": 50,
    "title": "Thông báo gia hạn thời điểm đóng thầu",
    "description": "Thông báo gia hạn thời điểm đóng thầu gói thầu Cung cấp dịch vụ vận chuyển Clinker rời bằng đường biển",
    "date": "15 Tháng 6, 2026",
    "category": "general",
    "categoryLabel": "Thông báo chung",
    "pdfUrl": "/documents/notifications/notif_50.pdf",
    "fileSize": "336.9 KB",
    "content": "<div class=\"content-news\">\n<!-- <embed src=\"public/frontend/images/Supper-trade-in.pdf\" type=\"application/pdf\" width=\"600\" height=\"500\"> -->\n<!-- <iframe src=\"https://drive.google.com/file/d/1PGFWr66VimrLDS8i6Lod93HjXk7mL0D6/view?usp=sharing\" width=\"100%\" height=\"600px\"></iframe> -->\n<!-- <a href=\"public/frontend/images/Supper-trade-in.pdf\" download>Download PDF</a> -->\n<!-- <canvas id=\"pdfCanvas\"></canvas> -->\n<!-- <iframe src=\"https://docs.google.com/viewer?url=https://example.com/public/frontend/images/Supper-trade-in.pdf&embedded=true\" width=\"100%\" height=\"600\"></iframe> -->\n<div class=\"hidden\" id=\"input-pdf\"><p><iframe sandbox=\"allow-scripts allow-same-origin\" src=\"/storage/files/10/2026/GH109.pdf\" style=\"width: 100%; height: 1200px; border: none;\"></iframe></p></div>\n<div id=\"pdfViewer\">\n<canvas id=\"pdfCanvas\"></canvas>\n</div>\n<div id=\"pageInfo\">\n<button class=\"navBtn\" id=\"prev\">Prev</button>\n<span id=\"page_num\"></span> of <span id=\"page_count\"></span>\n<button class=\"navBtn\" id=\"next\">Next</button>\n</div>\n</div>"
  }
];

// Module-level cache for lookups to follow Rule 7.2 (Build Index Maps) and 7.4 (Cache Repeated Function Calls)
const notificationsMap = new Map<number, NotificationItem>(
  NOTIFICATIONS_DATA.map(n => [n.id, n])
);

export function getNotificationById(id: number): NotificationItem | undefined {
  return notificationsMap.get(id);
}
