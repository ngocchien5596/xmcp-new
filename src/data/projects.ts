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
    fullDescription: 'Cầu Cửa Hội là công trình biểu tượng nối liền hai bờ sông Lam giữa Nghệ An và Hà Tĩnh. Với tổng chiều dài hơn 5,2km, công trình đóng vai trò chiến lược trong việc liên kết vùng và thúc đẩy kinh tế biển miền Trung.',
    image: 'https://plus.unsplash.com/premium_photo-1675698552599-0c562f307450?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2021',
    location: 'Nghệ An - Hà Tĩnh',
    client: 'Bộ Giao thông Vận tải',
    contractor: 'Tổng công ty Công trình Giao thông 4 (Cienco4)',
    stats: [
      { label: 'Tổng chiều dài', value: '5.27 km' },
      { label: 'Vốn đầu tư', value: '1.898 tỷ VNĐ' },
      { label: 'Lượng xi măng', value: '95.000 tấn' },
      { label: 'Cấp công trình', value: 'Cấp đặc biệt' }
    ],
    highlights: [
      'Kết cấu nhịp chính dây văng hiện đại',
      'Bê tông cường độ cao M500-M600',
      'Thi công trong điều kiện gió bão khắc nghiệt',
      'Độ bền kết cấu vĩnh cửu'
    ]
  },
  {
    id: '8',
    title: 'Khu kinh tế Vân Đồn - Quảng Ninh',
    description: 'Đồng hành cùng sự phát triển của khu kinh tế trọng điểm phía Bắc với các dòng xi măng đa dụng chất lượng cao.',
    fullDescription: 'Khu kinh tế Vân Đồn là một trong những trọng điểm đầu tư hạ tầng lớn nhất miền Bắc. Xi măng Cẩm Phả tự hào cung cấp giải pháp vật liệu cho hàng loạt dự án thành phần, từ khu đô thị ven biển đến các trục đường xuyên đảo.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'Khu Đô thị',
    year: '2023',
    location: 'Vân Đồn, Quảng Ninh',
    client: 'Ban Quản lý KKT Vân Đồn',
    contractor: 'Nhiều tập đoàn lớn',
    stats: [
      { label: 'Diện tích quy hoạch', value: '2.171 km2' },
      { label: 'Số lượng dự án', value: 'Hơn 50 dự án' },
      { label: 'Xi măng cung ứng', value: '200.000 tấn/năm' },
      { label: 'Tốc độ tăng trưởng', value: 'Vượt bậc' }
    ],
    highlights: [
      'Hỗ trợ hạ tầng du lịch đẳng cấp',
      'Chống ăn mòn muối biển vượt trội',
      'Dễ thi công cho mọi loại công trình',
      'Chuỗi cung ứng nhanh chóng tại chỗ'
    ]
  },
  {
    id: '9',
    title: 'Nhà máy Lọc dầu Nghi Sơn - Thanh Hóa',
    description: 'Dự án công nghiệp năng lượng lớn nhất Việt Nam, yêu cầu xi măng có độ bền hóa học cao chống lại sự ăn mòn của hóa chất.',
    fullDescription: 'Liên hợp lọc hóa dầu Nghi Sơn là dự án công nghiệp có vốn đầu tư lớn nhất Việt Nam. Các hạng mục bể chứa dầu và hệ thống xử lý hóa chất đòi hỏi bê tông có độ đặc chắc tuyệt đối và khả năng kháng hóa chất nghiêm ngặt.',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80',
    category: 'Công trình Công nghiệp',
    year: '2018',
    location: 'Nghi Sơn, Thanh Hóa',
    client: 'Nghi Son Refinery and Petrochemical LLC',
    contractor: 'JGC / Chiyoda / Technip',
    stats: [
      { label: 'Vốn đầu tư', value: '9 tỷ USD' },
      { label: 'Công suất', value: '200.000 thùng/ngày' },
      { label: 'Mác bê tông', value: 'M400 kháng hóa chất' },
      { label: 'Tiêu chuẩn quốc tế', value: 'ASTM / JIS' }
    ],
    highlights: [
      'Khả năng kháng xâm thực hóa chất đặc biệt',
      'Độ đặc chắc bề mặt siêu cao',
      'Kiểm soát nghiêm ngặt quy trình sản xuất',
      'Đáp ứng tiêu chuẩn kỹ thuật quốc tế'
    ]
  },
  {
    id: '10',
    title: 'Cảng hàng không quốc tế Vân Đồn',
    description: 'Sân bay tư nhân đầu tiên tại Việt Nam, sử dụng xi măng Cẩm Phả cho hệ thống đường băng và nhà ga hành khách.',
    fullDescription: 'Sân bay Vân Đồn là cửa ngõ hàng không quốc tế mới của tỉnh Quảng Ninh. Với yêu cầu thi công thần tốc và chất lượng nền đường băng chịu tải lớn, xi măng Cẩm Phả đã được lựa chọn làm đối tác cung cấp chính.',
    image: 'https://images.unsplash.com/photo-1715268358642-fdab48114710?auto=format&fit=crop&w=1200&q=80',
    category: 'Hàng không',
    year: '2018',
    location: 'Vân Đồn, Quảng Ninh',
    client: 'Sun Group',
    contractor: 'Vietjet / Delta',
    stats: [
      { label: 'Chiều dài đường băng', value: '3.6 km' },
      { label: 'Lượng xi măng', value: '120.000 tấn' },
      { label: 'Cường độ bê tông', value: 'Pavement Quality Concrete' },
      { label: 'Thời gian thi công', value: '27 tháng' }
    ],
    highlights: [
      'Đường cất hạ cánh mác siêu cao',
      'Kiểm soát độ nứt bề mặt tuyệt đối',
      'Thi công xuyên đêm đảm bảo tiến độ',
      'Chất lượng được chuyên gia Hà Lan tư vấn'
    ]
  },
  {
    id: '11',
    title: 'Cầu Bạch Đằng - Hải Phòng - Quảng Ninh',
    description: 'Dự án cầu dây văng lớn với 3 trụ tháp là 3 chữ "H", biểu tượng kết nối vùng kinh tế trọng điểm Bắc Bộ.',
    fullDescription: 'Cầu Bạch Đằng là một trong những cây cầu dây văng phức tạp nhất Việt Nam với 3 trụ tháp cao 100m. Công trình sử dụng bê tông cường độ cao và công nghệ thi công hiện đại, kết nối cao tốc Hà Nội - Hải Phòng với Hạ Long.',
    image: 'https://images.unsplash.com/photo-1512187849-463fdb898f21?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2018',
    location: 'Hải Phòng - Quảng Ninh',
    client: 'Công ty Cổ phần BOT Cầu Bạch Đằng',
    contractor: 'Liên danh Cienco1 - Cienco4',
    stats: [
      { label: 'Tổng chiều dài', value: '5.4 km' },
      { label: 'Số tháp dây văng', value: '03 tháp' },
      { label: 'Mác bê tông tháp', value: 'M500' },
      { label: 'Vận tốc thiết kế', value: '100 km/h' }
    ],
    highlights: [
      'Trụ tháp hình chữ H độc đáo',
      'Bê tông dầm hộp đúc hẫng cường độ cao',
      'Kháng xâm thực trong môi trường cửa sông',
      'Biểu tượng liên kết vùng kinh tế'
    ]
  },
  {
    id: '12',
    title: 'Khu nghỉ dưỡng InterContinental Halong Bay',
    description: 'Công trình du lịch đẳng cấp 5 sao, sử dụng xi măng xây trát cao cấp cho bề mặt hoàn thiện hoàn hảo.',
    fullDescription: 'InterContinental Halong Bay Resort là kiệt tác nghỉ dưỡng bên bờ vịnh Hạ Long. Dự án đòi hỏi tiêu chuẩn thẩm mỹ cực cao cho các hạng mục hoàn thiện, nơi xi măng Cẩm Phả đã chứng minh sự vượt trội về độ dẻo và tính mỹ thuật.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    category: 'Du lịch - Nghỉ dưỡng',
    year: '2024',
    location: 'Hạ Long, Quảng Ninh',
    client: 'BIM Group',
    contractor: 'Hòa Bình Construction Group',
    stats: [
      { label: 'Số lượng phòng', value: '175 phòng & 60 biệt thự' },
      { label: 'Tiêu chuẩn', value: '5 sao quốc tế' },
      { label: 'Loại xi măng', value: 'Xi măng Đa dụng PCB40' },
      { label: 'Thời gian thi công', value: '2021 - 2024' }
    ],
    highlights: [
      'Bề mặt tường trát phẳng mịn tối ưu',
      'Độ bền kết cấu trong môi trường biển',
      'Sản phẩm thân thiện với môi trường',
      'Hợp tác cùng thương hiệu vận hành toàn cầu'
    ]
  },
  {
    id: '13',
    title: 'Cao tốc Vân Đồn - Móng Cái',
    description: 'Đoạn tuyến quan trọng hoàn thiện trục cao tốc xương sống của tỉnh Quảng Ninh, khẳng định vị thế thương hiệu.',
    fullDescription: 'Cao tốc Vân Đồn - Móng Cái là mảnh ghép cuối cùng của trục cao tốc dài nhất Việt Nam từ Lào Cai đến Móng Cái. Xi măng Cẩm Phả là nhà cung cấp chính cho hệ thống cầu và cống kỹ thuật trên toàn tuyến.',
    image: 'https://images.unsplash.com/photo-1502126324834-38f8e02d7160?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2022',
    location: 'Quảng Ninh',
    client: 'UBND Tỉnh Quảng Ninh / Sun Group',
    contractor: 'Tập đoàn Phương Thành / Lũng Lô',
    stats: [
      { label: 'Chiều dài toàn tuyến', value: '80.2 km' },
      { label: 'Vận tốc thiết kế', value: '120 km/h' },
      { label: 'Xi măng cung cấp', value: '110.000 tấn' },
      { label: 'Số lượng cầu', value: '32 cầu trên tuyến' }
    ],
    highlights: [
      'Thi công thần tốc trong 500 ngày',
      'Độ ổn định bê tông trong nền địa chất phức tạp',
      'Hệ thống thoát nước đúc sẵn mác cao',
      'Đóng góp vào trục kinh tế cửa khẩu'
    ]
  },
  {
    id: '14',
    title: 'Tòa nhà Viettel Asset Management - Hà Nội',
    description: 'Công trình văn phòng hiện đại với kết cấu bê tông vững chãi, sử dụng toàn bộ giải pháp xi măng từ Cẩm Phả.',
    fullDescription: 'Tòa nhà Viettel Asset Management là trụ sở làm việc hiện đại tại thủ đô Hà Nội. Dự án sử dụng các dòng xi măng PCB40 chất lượng cao của Cẩm Phả cho toàn bộ phần khung bê tông cốt thép và hoàn thiện.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'Khu Đô thị',
    year: '2020',
    location: 'Hà Nội',
    client: 'Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)',
    contractor: 'Tổng công ty MBLand',
    stats: [
      { label: 'Quy mô', value: '15 tầng nổi, 3 tầng hầm' },
      { label: 'Diện tích sàn', value: '25.000 m2' },
      { label: 'Loại bê tông', value: 'Bê tông thương phẩm mác cao' },
      { label: 'Thời hạn sử dụng', value: '100 năm' }
    ],
    highlights: [
      'Kết cấu khung chịu lực bền bỉ',
      'Khả năng kháng nứt bê tông sàn vượt trội',
      'Sản phẩm đồng hành cùng tập đoàn mẹ Viettel',
      'Tiêu chuẩn văn phòng hạng A'
    ]
  },
  {
    id: '15',
    title: 'Cầu Mỹ Thuận 2 - Tiền Giang - Vĩnh Long',
    description: 'Dự án hạ tầng giao thông chiến lược tại ĐBSCL, yêu cầu xi măng chịu mặn và cường độ nén cực cao.',
    fullDescription: 'Cầu Mỹ Thuận 2 là dự án trọng điểm trên tuyến cao tốc Bắc - Nam phía Đông. Đây là cây cầu dây văng do các kỹ sư Việt Nam tự thiết kế và thi công, sử dụng bê tông mác siêu cao chịu được môi trường nước lợ và xâm thực mạnh.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    category: 'Hạ tầng Giao thông',
    year: '2023',
    location: 'Tiền Giang - Vĩnh Long',
    client: 'Bộ Giao thông Vận tải',
    contractor: 'Liên danh Trung Nam - Trung Chính',
    stats: [
      { label: 'Tổng chiều dài', value: '6.6 km' },
      { label: 'Khổ thông thuyền', value: '110m x 37.5m' },
      { label: 'Lượng xi măng', value: '140.000 tấn' },
      { label: 'Cấp công trình', value: 'Cấp đặc biệt' }
    ],
    highlights: [
      'Làm chủ công nghệ dây văng nhịp lớn',
      'Bê tông chịu mặn mác siêu cao M600',
      'Đảm bảo độ bền trong môi trường ĐBSCL',
      'Mạch máu giao thông quan trọng phía Nam'
    ]
  }
];
