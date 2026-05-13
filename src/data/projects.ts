export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  year: string;
  location?: string;
  client?: string;
  contractor?: string;
  stats?: ProjectStat[];
  highlights?: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Cầu Cửa Lục 1 (Cầu Tình Yêu) - Quảng Ninh',
    description: 'Công trình trọng điểm với kiến trúc biểu tượng của Quảng Ninh, sử dụng xi măng mác cao cho các cấu kiện đúc sẵn và trụ cầu chịu lực.',
    fullDescription: 'Cầu Cửa Lục 1, còn được gọi là Cầu Tình Yêu, là một trong những công trình hạ tầng giao thông quan trọng nhất của tỉnh Quảng Ninh. Với thiết kế 6 làn xe và tổng chiều dài hơn 4,2km, công trình không chỉ giải quyết bài toán giao thông mà còn là điểm nhấn kiến trúc độc đáo bên bờ vịnh Hạ Long.',
    image: '/assets/design/cau-cua-luc.jpg',
    category: 'Hạ tầng Giao thông',
    year: '2023',
    location: 'TP. Hạ Long, Quảng Ninh',
    client: 'Sở Giao thông Vận tải Quảng Ninh',
    contractor: 'Liên danh nhà thầu uy tín',
    stats: [
      { label: 'Tổng mức đầu tư', value: '2.100 tỷ VNĐ' },
      { label: 'Lượng xi măng sử dụng', value: '150.000 tấn' },
      { label: 'Loại xi măng', value: 'PCB40 Cẩm Phả' },
      { label: 'Tiêu chuẩn', value: 'TCVN 6260:2020' }
    ],
    highlights: [
      'Cấu kiện đúc sẵn mác cao',
      'Trụ cầu chịu lực cường độ lớn',
      'Khả năng chống ăn mòn nước mặn',
      'Độ bền kết cấu trên 100 năm'
    ]
  },
  {
    id: '2',
    title: 'Sân bay Phan Thiết - Bình Thuận',
    description: 'Dự án hạ tầng hàng không quy mô lớn, yêu cầu tiêu chuẩn kỹ thuật khắt khe về cường độ nén và độ bền vững của nền đường cất hạ cánh.',
    fullDescription: 'Dự án đầu tư xây dựng Sân bay Phan Thiết là công trình hạ tầng hàng không trọng điểm quốc gia. Xi măng Cẩm Phả tự hào là nhà cung cấp chính cho các hạng mục nền đường cất hạ cánh, đường lăn và sân đỗ máy bay, nơi yêu cầu sự ổn định tuyệt đối về địa chất và cường độ nén.',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80',
    category: 'Hàng không',
    year: '2024',
    location: 'TP. Phan Thiết, Bình Thuận',
    client: 'Bộ Quốc phòng / UBND tỉnh Bình Thuận',
    contractor: 'Tổng công ty 319',
    stats: [
      { label: 'Diện tích dự án', value: '542 ha' },
      { label: 'Cấp sân bay', value: '4E (Tiêu chuẩn ICAO)' },
      { label: 'Cường độ bê tông', value: 'M400 - M500' },
      { label: 'Độ bền sunfat', value: 'Loại Type II' }
    ],
    highlights: [
      'Nền đường cất hạ cánh chịu lực siêu cao',
      'Kiểm soát độ sụt và thời gian đông kết tối ưu',
      'Hỗ trợ kỹ thuật tại hiện trường 24/7',
      'Đáp ứng tiến độ thi công khẩn trương'
    ]
  },
  {
    id: '3',
    title: 'Sun World Ocean Park Hạ Long',
    description: 'Tổ hợp vui chơi giải trí hàng đầu khu vực, sử dụng các sản phẩm xi măng chuyên dụng chống ăn mòn trong môi trường biển.',
    fullDescription: 'Sun World Ocean Park Hạ Long là tổ hợp giải trí ven biển quy mô lớn bậc nhất Việt Nam. Trong môi trường xâm thực mặn khắt khe, xi măng bền Sunfat của Cẩm Phả đã chứng minh được khả năng bảo vệ cốt thép và kết cấu bê tông vượt trội.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    category: 'Du lịch - Nghỉ dưỡng',
    year: '2022',
    location: 'Bãi Cháy, TP. Hạ Long',
    client: 'Sun Group',
    contractor: 'Tập đoàn Delta',
    stats: [
      { label: 'Quy mô dự án', value: '214 ha' },
      { label: 'Loại xi măng', value: 'Xi măng bền Sunfat' },
      { label: 'Chứng chỉ chất lượng', value: 'ASTM C150' },
      { label: 'Môi trường làm việc', value: 'Xâm thực mặn cao' }
    ],
    highlights: [
      'Bảo vệ kết cấu gần biển tuyệt đối',
      'Độ đặc chắc cao, ngăn thấm nước',
      'Thẩm mỹ bề mặt hoàn thiện mịn đẹp',
      'Đồng hành cùng kiến trúc vĩ đại'
    ]
  },
  {
    id: '4',
    title: 'Cao tốc TP.HCM – Long Thành – Dầu Giây',
    description: 'Tuyến huyết mạch giao thông phía Nam, khẳng định chất lượng xi măng Cẩm Phả trong các hạng mục bê tông nhựa và mặt đường.',
    fullDescription: 'Tuyến cao tốc TP.HCM - Long Thành - Dầu Giây là mạch máu giao thông kết nối trung tâm kinh tế phía Nam với các tỉnh miền Đông. Xi măng Cẩm Phả đã được tin dùng cho hàng loạt cầu lớn và cống hộp trên toàn tuyến.',
    image: '/assets/design/cao-toc-long-thanh-dau-giay.webp',
    category: 'Hạ tầng Giao thông',
    year: '2015',
    location: 'TP.HCM - Đồng Nai',
    client: 'VEC (Tổng công ty Đầu tư phát triển đường cao tốc Việt Nam)',
    contractor: 'Nhiều nhà thầu quốc tế',
    stats: [
      { label: 'Chiều dài tuyến', value: '55.7 km' },
      { label: 'Số lượng cầu trên tuyến', value: '31 cầu' },
      { label: 'Cường độ bê tông cầu', value: 'M350 - M450' },
      { label: 'Thời gian thi công', value: '2009 - 2015' }
    ],
    highlights: [
      'Chất lượng ổn định trong thời gian dài',
      'Chịu tải trọng giao thông cực lớn',
      'Kháng nứt bề mặt hiệu quả',
      'Được kiểm định bởi các tư vấn quốc tế'
    ]
  },
  {
    id: '5',
    title: 'Vinhomes Dragon Bay Hạ Long',
    description: 'Khu đô thị biển cao cấp, yêu cầu sự kết hợp hoàn hảo giữa độ bền kết cấu và thẩm mỹ hoàn thiện bề mặt.',
    fullDescription: 'Vinhomes Dragon Bay là biểu tượng của cuộc sống thượng lưu bên vịnh di sản. Xi măng Cẩm Phả cung cấp giải pháp xây trát và bê tông dân dụng cao cấp, đảm bảo sự bền vững cho từng căn biệt thự và khu shophouse.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    category: 'Khu Đô thị',
    year: '2017',
    location: 'Bến Đoan, TP. Hạ Long',
    client: 'Vingroup',
    contractor: 'Coteccons',
    stats: [
      { label: 'Tổng diện tích', value: '68.35 ha' },
      { label: 'Loại sản phẩm', value: 'Xi măng Đa dụng' },
      { label: 'Độ dẻo xây trát', value: 'Tiêu chuẩn cao' },
      { label: 'Thời hạn bàn giao', value: 'Đúng tiến độ' }
    ],
    highlights: [
      'Bề mặt trát mịn, hạn chế nứt chân chim',
      'Tương thích tốt với các loại sơn phủ',
      'Độ bền trong môi trường hơi muối',
      'Đảm bảo vẻ đẹp sang trọng lâu dài'
    ]
  },
  {
    id: '6',
    title: 'Nhà máy Nhiệt điện Mông Dương 2',
    description: 'Công trình công nghiệp quy mô lớn tại Quảng Ninh, đòi hỏi xi măng có khả năng chịu nhiệt và cường độ chịu nén đặc biệt.',
    fullDescription: 'Dự án Nhiệt điện Mông Dương 2 là một trong những nhà máy điện lớn nhất Việt Nam. Các hạng mục móng máy phát điện và tháp làm mát đòi hỏi bê tông khối lớn mác cao với quy trình kiểm soát nhiệt thủy hóa nghiêm ngặt.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    category: 'Công trình Công nghiệp',
    year: '2015',
    location: 'Mông Dương, TP. Cẩm Phả',
    client: 'AES-VCM Mong Duong Power Co., Ltd',
    contractor: 'Doosan Heavy Industries',
    stats: [
      { label: 'Công suất nhà máy', value: '1.240 MW' },
      { label: 'Khối lượng bê tông', value: 'Hàng trăm nghìn m3' },
      { label: 'Tiêu chuẩn quốc tế', value: 'ASTM / ACI' },
      { label: 'Hệ thống kiểm soát', value: 'Quy trình quân đội' }
    ],
    highlights: [
      'Bê tông khối lớn, nhiệt thủy hóa thấp',
      'Cường độ chịu nén đặc biệt cao',
      'Độ ổn định hóa học trong môi trường nhiệt',
      'Khẳng định uy tín tại sân nhà Cẩm Phả'
    ]
  },
  {
    id: '7',
    title: 'Cầu Cửa Hội - Nghệ An - Hà Tĩnh',
    description: 'Cây cầu dây văng hiện đại nối liền hai tỉnh Nghệ An và Hà Tĩnh, sử dụng bê tông cường độ siêu cao để đảm bảo tuổi thọ công trình.',
    image: 'https://plus.unsplash.com/premium_photo-1675698552599-0c562f307450?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2021'
  },
  {
    id: '8',
    title: 'Khu kinh tế Vân Đồn - Quảng Ninh',
    description: 'Đồng hành cùng sự phát triển của khu kinh tế trọng điểm phía Bắc với các dòng xi măng đa dụng chất lượng cao.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    category: 'Khu Đô thị',
    year: '2023'
  },
  {
    id: '9',
    title: 'Nhà máy Lọc dầu Nghi Sơn - Thanh Hóa',
    description: 'Dự án công nghiệp năng lượng lớn nhất Việt Nam, yêu cầu xi măng có độ bền hóa học cao chống lại sự ăn mòn của hóa chất.',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800&q=80',
    category: 'Công trình Công nghiệp',
    year: '2018'
  },
  {
    id: '10',
    title: 'Cảng hàng không quốc tế Vân Đồn',
    description: 'Sân bay tư nhân đầu tiên tại Việt Nam, sử dụng xi măng Cẩm Phả cho hệ thống đường băng và nhà ga hành khách.',
    image: 'https://images.unsplash.com/photo-1715268358642-fdab48114710?auto=format&fit=crop&w=800&q=80',
    category: 'Hàng không',
    year: '2018'
  },
  {
    id: '11',
    title: 'Cầu Bạch Đằng - Hải Phòng - Quảng Ninh',
    description: 'Dự án cầu dây văng lớn với 3 trụ tháp là 3 chữ \"H\", biểu tượng kết nối vùng kinh tế trọng điểm Bắc Bộ.',
    image: 'https://images.unsplash.com/photo-1512187849-463fdb898f21?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2018'
  },
  {
    id: '12',
    title: 'Khu nghỉ dưỡng InterContinental Halong Bay',
    description: 'Công trình du lịch đẳng cấp 5 sao, sử dụng xi măng xây trát cao cấp cho bề mặt hoàn thiện hoàn hảo.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    category: 'Du lịch - Nghỉ dưỡng',
    year: '2024'
  },
  {
    id: '13',
    title: 'Cao tốc Vân Đồn - Móng Cái',
    description: 'Đoạn tuyến quan trọng hoàn thiện trục cao tốc xương sống của tỉnh Quảng Ninh, khẳng định vị thế thương hiệu.',
    image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2022'
  },
  {
    id: '14',
    title: 'Tòa nhà Viettel Asset Management - Hà Nội',
    description: 'Công trình văn phòng hiện đại với kết cấu bê tông vững chãi, sử dụng toàn bộ giải pháp xi măng từ Cẩm Phả.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    category: 'Khu Đô thị',
    year: '2020'
  },
  {
    id: '15',
    title: 'Cầu Mỹ Thuận 2 - Tiền Giang - Vĩnh Long',
    description: 'Dự án hạ tầng giao thông chiến lược tại ĐBSCL, yêu cầu xi măng chịu mặn và cường độ nén cực cao.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2023'
  }
];
