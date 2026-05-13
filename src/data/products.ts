export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  isFeatured: boolean;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    title: 'Xi măng PCB40',
    description: 'Sản phẩm chủ lực có cường độ nén cao, tính công tác tốt, phù hợp cho các công trình hạ tầng và dân dụng yêu cầu độ bền vững cao.',
    longDescription: 'Xi măng Poóc lăng hỗn hợp PCB 40 Cẩm Phả được sản xuất theo tiêu chuẩn Việt Nam TCVN 6260:2020. Đây là loại xi măng phổ biến nhất, được thiết kế tối ưu cho các hạng mục bê tông kết cấu, xây trát trong các công trình dân dụng và công nghiệp.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: true,
    features: [
      'Cường độ nén cao và ổn định',
      'Độ dẻo cao, dễ thi công xây trát',
      'Khả năng giữ nước tốt, giảm thiểu nứt vỡ',
      'Phù hợp với nhiều loại phụ gia bê tông'
    ],
    specs: [
      { label: 'Cường độ nén (3 ngày)', value: '≥ 20 MPa' },
      { label: 'Cường độ nén (28 ngày)', value: '≥ 40 MPa' },
      { label: 'Thời gian đông kết bắt đầu', value: '≥ 45 phút' },
      { label: 'Thời gian đông kết kết thúc', value: '≤ 600 phút' },
      { label: 'Độ ổn định thể tích', value: '≤ 10 mm' }
    ],
    applications: [
      'Đổ bê tông móng, dột, sàn, dầm',
      'Xây tường, trát tường trong và ngoài',
      'Láng nền, ốp lát gạch',
      'Sản xuất bê tông đúc sẵn mác cao'
    ]
  },
  {
    id: '6',
    title: 'Xi măng Bền Sunfat',
    description: 'Dòng sản phẩm chuyên dụng cho các công trình ven biển, đập thủy điện hoặc môi trường xâm thực, chống ăn mòn hiệu quả.',
    longDescription: 'Xi măng Cẩm Phả bền Sunfat được thiết kế đặc biệt để chịu đựng sự tấn công của các ion sunfat trong đất và nước. Sản phẩm đáp ứng tiêu chuẩn ASTM C150 (Type II & V) hoặc TCVN 6067:2018, lý tưởng cho các công trình hạ tầng biển và xử lý nước thải.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: true,
    features: [
      'Kháng sunfat vượt trội',
      'Nhiệt thủy hóa thấp, giảm nứt nhiệt bê tông khối lớn',
      'Tăng tuổi thọ cho kết cấu bê tông cốt thép',
      'Độ đặc chắc cao, ngăn chặn thấm và ăn mòn'
    ],
    specs: [
      { label: 'Hàm lượng C3A', value: '≤ 5% (Type V)' },
      { label: 'Cường độ nén (28 ngày)', value: '≥ 45 MPa' },
      { label: 'Độ giãn nở Sunfat (6 tháng)', value: '≤ 0.05%' },
      { label: 'Tỷ diện bề mặt', value: '≥ 3200 cm2/g' }
    ],
    applications: [
      'Công trình ven biển, cầu cảng',
      'Đập thủy điện, hệ thống tưới tiêu',
      'Nhà máy xử lý nước thải',
      'Móng cọc trong vùng đất nhiễm mặn, nhiễm phèn'
    ]
  },
  {
    id: '2',
    title: 'Xi măng Đa dụng',
    description: 'Giải pháp tối ưu cho mọi công trình, dễ thi công, giúp tiết kiệm chi phí và đảm bảo tính thẩm mỹ cho bề mặt hoàn thiện.',
    longDescription: 'Xi măng Cẩm Phả Đa dụng là dòng sản phẩm linh hoạt, được điều chỉnh để cân bằng giữa tốc độ đông kết và độ dẻo. Sản phẩm giúp nhà thầu dễ dàng kiểm soát quá trình thi công, từ xây trát đến đổ bê tông các hạng mục nhỏ lẻ.',
    image: '/assets/design/xi-mang-da-dung.png',
    category: 'Xi măng',
    isFeatured: true,
    features: [
      'Tiết kiệm lượng xi măng trên mỗi m3 vữa/bê tông',
      'Bề mặt hoàn thiện mịn, thẩm mỹ cao',
      'Dễ thi công, rút ngắn thời gian hoàn thiện',
      'Giá thành hợp lý, tối ưu chi phí đầu tư'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 30 MPa' },
      { label: 'Độ mịn (tỷ diện)', value: '≥ 2800 cm2/g' },
      { label: 'Độ dẻo tiêu chuẩn', value: 'Rất tốt' },
      { label: 'Khả năng chống nứt', value: 'Cao' }
    ],
    applications: [
      'Xây, trát, ốp, lát dân dụng',
      'Bê tông nhà ở thấp tầng',
      'Sản xuất gạch không nung',
      'Trang trí nội ngoại thất'
    ]
  },
  {
    id: '3',
    title: 'Xi măng Xây trát Cao cấp',
    description: 'Sản phẩm tối ưu cho công tác xây trát, giúp bề mặt mịn màng, hạn chế nứt vỡ và tăng tính thẩm mỹ cho công trình.',
    longDescription: 'Xi măng Xây trát Cao cấp Cẩm Phả được tối ưu hóa khả năng giữ nước và độ dẻo, giúp công nhân dễ dàng thi công, tạo ra lớp vữa có độ bám dính cực tốt và bề mặt sau khi hoàn thiện cực kỳ mịn đẹp.',
    image: '/assets/design/xaytrat.png',
    category: 'Xi măng',
    isFeatured: true,
    features: [
      'Tối ưu hóa khả năng giữ nước',
      'Độ bám dính cực tốt trên mọi bề mặt',
      'Bề mặt tường mịn, đẹp, không ố vàng',
      'Hạn chế tối đa tình trạng rạn nứt chân chim'
    ],
    specs: [
      { label: 'Độ mịn (Sàng 0.08mm)', value: '≤ 10%' },
      { label: 'Độ dẻo tiêu chuẩn', value: 'Tối ưu' },
      { label: 'Thời gian đông kết', value: 'Ổn định' },
      { label: 'Khả năng giữ nước', value: '≥ 85%' }
    ],
    applications: [
      'Xây tường gạch đỏ, gạch block',
      'Trát tường trong và ngoài nhà',
      'Ốp lát các loại gạch đá tự nhiên',
      'Hoàn thiện các chi tiết trang trí đòi hỏi độ tinh xảo'
    ]
  },
  {
    id: '7',
    title: 'Xi măng Econs 40',
    description: 'Dòng sản phẩm kinh tế hiệu quả, chuyên dùng cho xây trát dân dụng và công nghiệp, tăng khả năng chống xâm thực.',
    longDescription: 'Xi măng Econs 40 là giải pháp vật liệu thông minh, giúp tối ưu hóa chi phí mà vẫn đảm bảo chất lượng công trình. Đặc biệt phù hợp cho các hạng mục hoàn thiện, giúp bề mặt tường phẳng mịn và bền màu.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Chống xâm thực tốt',
      'Hạn chế rạn nứt bề mặt',
      'Độ dẻo cao, dễ kéo bay',
      'Giá thành cực kỳ cạnh tranh'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 40 MPa' },
      { label: 'Độ mịn', value: 'Cao' },
      { label: 'Tỷ lệ pha trộn', value: 'Tối ưu' }
    ],
    applications: [
      'Xây tường nhà ở phổ thông',
      'Trát tường nội ngoại thất',
      'Láng nền nhà xưởng',
      'Sản xuất gạch vỉa hè'
    ]
  },
  {
    id: '8',
    title: 'Xi măng PCB30',
    description: 'Sản phẩm có độ mịn cao, thời gian đông kết hợp lý, lý tưởng cho công tác hoàn thiện và trang trí công trình.',
    longDescription: 'Xi măng PCB30 Cẩm Phả đáp ứng đầy đủ các tiêu chuẩn kỹ thuật cho xây dựng dân dụng. Với độ mịn vượt trội, PCB30 giúp lớp vữa trát bám dính tốt hơn và giảm thiểu hiện tượng thấm nước qua tường.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Độ mịn cực cao',
      'Bám dính tuyệt vời',
      'Thời gian thi công dài',
      'Bề mặt láng mịn'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 30 MPa' },
      { label: 'Thời gian đông kết', value: 'Dài (Dễ chỉnh sửa)' },
      { label: 'Độ ổn định thể tích', value: 'Tốt' }
    ],
    applications: [
      'Trát tường đòi hỏi độ mịn cao',
      'Ốp lát gạch men, đá trang trí',
      'Sản xuất bê tông mác thấp',
      'Phào chỉ, phù điêu'
    ]
  },
  {
    id: '9',
    title: 'Xi măng PCB40 Jumbo',
    description: 'Đóng gói quy cách lớn 1.5 tấn chuyên dụng cho các trạm trộn bê tông thương phẩm và dự án hạ tầng lớn.',
    longDescription: 'Giải pháp đóng bao Jumbo giúp tiết kiệm thời gian vận chuyển, bốc dỡ và giảm thiểu bụi bẩn tại công trường. Chất lượng PCB40 tiêu chuẩn quốc tế, phù hợp cho các dự án yêu cầu tiến độ nhanh và khối lượng lớn.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Quy cách lớn 1.5 tấn/bao',
      'Tiết kiệm chi phí bao bì',
      'Giảm thiểu hao hụt vật tư',
      'Dễ dàng quản lý kho bãi'
    ],
    specs: [
      { label: 'Tiêu chuẩn', value: 'TCVN 6260:2020' },
      { label: 'Khối lượng bao', value: '1500 kg' },
      { label: 'Chất lượng', value: 'Tương đương PCB40' }
    ],
    applications: [
      'Trạm trộn bê tông thương phẩm',
      'Dự án cầu cảng, đường cao tốc',
      'Nhà máy sản xuất bê tông đúc sẵn',
      'Xuất khẩu đường biển'
    ]
  },
  {
    id: '10',
    title: 'Xi măng Portland PC50',
    description: 'Xi măng Portland nguyên chất cường độ cao, chuyên dùng cho các kết cấu bê tông đặc biệt và bê tông mác cao.',
    longDescription: 'Xi măng PC50 Cẩm Phả được sản xuất từ Clinker chất lượng cao nhất, không chứa phụ gia hỗn hợp, mang lại cường độ nén cực lớn ngay từ những ngày đầu. Đây là sự lựa chọn số 1 cho các kết cấu đòi hỏi chịu tải trọng cực lớn.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Cường độ phát triển nhanh',
      'Khả năng chịu lực tuyệt vời',
      'Độ bền sunfat tự nhiên',
      'Tương thích hoàn hảo với phụ gia'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 50 MPa' },
      { label: 'Hàm lượng Clinker', value: '≈ 95%' },
      { label: 'Độ giãn nở', value: 'Rất thấp' }
    ],
    applications: [
      'Dầm cầu nhịp lớn, cầu vượt',
      'Nhà cao tầng trên 50 tầng',
      'Bê tông dự ứng lực',
      'Đường băng sân bay'
    ]
  },
  {
    id: '11',
    title: 'Xi măng PCB50 High-Grade',
    description: 'Dòng xi măng hỗn hợp cao cấp, duy trì độ sụt bê tông tốt nhất, chuyên dùng cho bê tông khối lớn và bê tông chảy.',
    longDescription: 'Sản phẩm được thiết kế để giải quyết bài toán thi công bê tông trong điều kiện thời tiết khắc nghiệt. PCB50 High-Grade giúp duy trì tính công tác của bê tông lâu hơn, giảm nguy cơ tắc ống bơm khi thi công nhà cao tầng.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Duy trì độ sụt lâu dài',
      'Nhiệt thủy hóa thấp',
      'Giảm thiểu vết nứt do nhiệt',
      'Độ chảy cao, dễ bơm'
    ],
    specs: [
      { label: 'Tiêu chuẩn', value: 'TCVN 6260:2009' },
      { label: 'Cường độ nén', value: 'Rất cao' },
      { label: 'Thời gian đông kết', value: 'Kiểm soát tốt' }
    ],
    applications: [
      'Bê tông khối lớn (móng bè, đập)',
      'Bê tông tự lèn',
      'Thi công nhà cao tầng bằng bơm',
      'Công trình thủy lợi lớn'
    ]
  },
  {
    id: '12',
    title: 'Xi măng Xỉ lò cao',
    description: 'Cải thiện khả năng chống ăn mòn trong môi trường nhiễm mặn và nhiễm phèn, gia cố nền móng yếu cực kỳ hiệu quả.',
    longDescription: 'Xi măng Xỉ lò cao là sự kết hợp giữa xi măng Portland và xỉ hạt lò cao nghiền mịn. Sản phẩm có tính bền hóa cao, ngăn chặn sự xâm thực của clo và sunfat, đặc biệt hiệu quả trong việc thi công cọc đất xi măng.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Kháng mặn, kháng phèn tuyệt đối',
      'Ngăn chặn ăn mòn cốt thép',
      'Gia tăng độ đặc chắc cho đất',
      'Thân thiện với môi trường'
    ],
    specs: [
      { label: 'Tiêu chuẩn', value: 'TCVN 4316:2007' },
      { label: 'Hàm lượng xỉ', value: '20% - 70%' },
      { label: 'Cường độ hậu kỳ', value: 'Phát triển ổn định' }
    ],
    applications: [
      'Gia cố nền móng (Cọc đất xi măng)',
      'Công trình ngầm, tầng hầm',
      'Vùng đất ngập mặn, ven sông',
      'Hệ thống thoát nước thải'
    ]
  },
  {
    id: '4',
    title: 'Clinker CPC50',
    description: 'Clinker chất lượng cao với hàm lượng C3S lớn, độ ổn định nhiệt tốt, là nguyên liệu lý tưởng cho các nhà máy sản xuất xi măng.',
    longDescription: 'Clinker Cẩm Phả được sản xuất bằng công nghệ lò quay phương pháp khô, đảm bảo chất lượng ổn định và tính tương thích cao với nhiều loại phụ gia khác nhau.',
    image: '/assets/design/bao-ximang.png',
    category: 'Clinker',
    isFeatured: false,
    features: [
      'Hàm lượng C3S cao',
      'Độ ổn định nhiệt tuyệt vời',
      'Dễ nghiền, tiết kiệm năng lượng',
      'Khả năng phản ứng hóa học mạnh'
    ],
    specs: [
      { label: 'Hàm lượng C3S', value: '≥ 58%' },
      { label: 'Độ ổn định (Lé Chatelier)', value: '≤ 2.0 mm' },
      { label: 'Cường độ nén Clinker', value: '≥ 50 MPa' }
    ],
    applications: [
      'Sản xuất xi măng Portland',
      'Nguyên liệu cho các trạm nghiền xi măng',
      'Xuất khẩu nguyên liệu thô'
    ]
  },
  {
    id: '13',
    title: 'Clinker Low Alkali',
    description: 'Clinker hàm lượng kiềm thấp, ngăn ngừa phản ứng kiềm-cốt liệu, tăng tuổi thọ vượt trội cho các công trình bê tông.',
    longDescription: 'Dòng sản phẩm chuyên dụng phục vụ cho các công trình yêu cầu tính bền vững cực cao, tránh các phản ứng hóa học có hại gây nứt vỡ bê tông từ bên trong theo thời gian.',
    image: '/assets/design/bao-ximang.png',
    category: 'Clinker',
    isFeatured: false,
    features: [
      'Hàm lượng kiềm (Na2O eq) < 0.6%',
      'Độ ổn định hóa học cao',
      'Ngăn ngừa phản ứng kiềm - đá',
      'Chất lượng Clinker đồng nhất'
    ],
    specs: [
      { label: 'Hàm lượng kiềm', value: '≤ 0.6%' },
      { label: 'Thành phần khoáng', value: 'Tối ưu' },
      { label: 'Độ chín', value: 'Hoàn hảo' }
    ],
    applications: [
      'Đường băng sân bay quốc tế',
      'Bê tông đập thủy điện khối lớn',
      'Trụ cầu vượt sông vượt biển',
      'Các công trình quan trọng quốc gia'
    ]
  },
  {
    id: '14',
    title: 'Clinker Loại 1',
    description: 'Sản phẩm trung gian chất lượng cao, đảm bảo các tiêu chuẩn hóa học khắt khe nhất cho việc nghiền xi măng PCB40.',
    longDescription: 'Nguyên liệu đầu vào hoàn hảo để nghiền thành các dòng xi măng PCB30, PCB40 đạt chuẩn chất lượng cao nhất của Xi măng Cẩm Phả.',
    image: '/assets/design/bao-ximang.png',
    category: 'Clinker',
    isFeatured: false,
    features: [
      'Độ mịn Clinker sau nghiền cao',
      'Tính tương thích phụ gia tốt',
      'Màu sắc đồng nhất',
      'Dễ bảo quản vận chuyển'
    ],
    specs: [
      { label: 'Chỉ số nghiền', value: '≥ 1.2' },
      { label: 'Thành phần MgO', value: 'Rất thấp' },
      { label: 'Lượng mất khi nung', value: '≤ 0.5%' }
    ],
    applications: [
      'Trạm nghiền nội bộ',
      'Cung cấp cho đối tác nghiền xi măng',
      'Sản xuất xi măng đóng bao'
    ]
  },
  {
    id: '15',
    title: 'Xi măng Ít Tỏa Nhiệt',
    description: 'Giải pháp hoàn hảo cho các khối bê tông lớn, giúp kiểm soát nhiệt độ thủy hóa và ngăn ngừa nứt nhiệt hiệu quả.',
    longDescription: 'Dòng sản phẩm chuyên biệt Low Heat Cement giúp quá trình đông kết diễn ra chậm và tỏa nhiệt ít hơn bình thường, ngăn chặn ứng suất nhiệt gây nứt khối bê tông.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Nhiệt thủy hóa cực thấp',
      'Khống chế nhiệt độ lõi bê tông',
      'Cường độ phát triển ổn định',
      'Chống nứt nhiệt tối ưu'
    ],
    specs: [
      { label: 'Nhiệt thủy hóa (7 ngày)', value: '≤ 250 kJ/kg' },
      { label: 'Tiêu chuẩn', value: 'ASTM C150 Type IV' },
      { label: 'Độ ổn định thể tích', value: 'Tuyệt đối' }
    ],
    applications: [
      'Móng bè nhà siêu cao tầng',
      'Thân đập thủy điện',
      'Trụ cầu nhịp lớn',
      'Bể chứa hóa chất lớn'
    ]
  },
  {
    id: '16',
    title: 'Xi măng Poóc lăng PCB50',
    description: 'Sản phẩm đạt cường độ cao sau 28 ngày, phù hợp cho bê tông dự ứng lực và các kết cấu chịu lực lớn.',
    longDescription: 'Được thiết kế với công thức đặc biệt giúp bê tông đạt mác thiết kế nhanh hơn, rút ngắn thời gian tháo dỡ ván khuôn cho các nhà thầu.',
    image: '/assets/design/pcb40.png',
    category: 'Xi măng',
    isFeatured: false,
    features: [
      'Cường độ nén cao 28 ngày',
      'Khả năng chống thấm tốt',
      'Độ dẻo tiêu chuẩn',
      'Bền vững theo thời gian'
    ],
    specs: [
      { label: 'Cường độ nén (28 ngày)', value: '≥ 50 MPa' },
      { label: 'Độ mịn', value: '≥ 3000 cm2/g' },
      { label: 'Thời gian đông kết', value: 'Tiêu chuẩn' }
    ],
    applications: [
      'Sàn dự ứng lực',
      'Cọc bê tông ly tâm',
      'Dầm cầu, đường cao tốc',
      'Cột nhà xưởng công nghiệp'
    ]
  }
];