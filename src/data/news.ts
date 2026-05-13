export interface NewsItem {
  id: number;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  featured?: boolean;
  featuredInCategory?: boolean;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 2,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'XMCP tổ chức Hội nghị Người lao động năm 2026.',
    description: 'Hội nghị tập trung đánh giá kết quả hoạt động sản xuất kinh doanh năm 2025 và đề ra phương hướng, nhiệm vụ trọng tâm cho năm 2026 với tinh thần đổi mới, đồng hành và phát triển bền vững.',
    content: `
      <p>Sáng ngày 25/03/2026, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị Người lao động năm 2026. Tham dự hội nghị có Ban Lãnh đạo công ty cùng hơn 200 đại biểu đại diện cho cán bộ công nhân viên toàn đơn vị.</p>
      
      <h3>Đánh giá kết quả năm 2025</h3>
      <p>Năm 2025 ghi nhận những nỗ lực vượt bậc của tập thể XMCP trong bối cảnh thị trường vật liệu xây dựng có nhiều biến động. Công ty đã hoàn thành và vượt mức các chỉ tiêu về sản lượng, doanh thu và lợi nhuận, đảm bảo thu nhập và đời sống cho người lao động.</p>
      
      <img src="public\assets\design\hoi-nghi-nguoi-lao-dong.webp" />
      <p class="caption">Toàn cảnh Hội nghị Người lao động năm 2026</p>
      
      <h3>Phương hướng năm 2026</h3>
      <p>Hội nghị đã thống nhất mục tiêu "Đổi mới - Đồng hành - Phát triển". Trọng tâm là đẩy mạnh chuyển đổi số, tối ưu hóa quy trình vận hành và nâng cao năng lực cạnh tranh trên thị trường vật liệu xây dựng.</p>
    `,
    image: '/assets/design/hoi-nghi-nguoi-lao-dong.webp',
    date: '25 Tháng 3, 2026',
    author: 'Phòng Hành chính',
    featured: true,
    featuredInCategory: true,
  },
  {
    id: 1,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Thông báo tuyển dụng tại Chi nhánh Phía Nam tháng 5/2026.',
    description: 'Công ty Cổ phần Xi măng Cẩm Phả thông báo tuyển dụng nhân sự cho Chi nhánh Phía Nam (CNPN) with các vị trí và yêu cầu chuyên môn cụ thể nhằm bổ sung lực lượng lao động chất lượng cao.',
    content: `
      <p>Công ty Cổ phần Xi măng Cẩm Phả thông báo kế hoạch tuyển dụng nhân sự bổ sung cho Chi nhánh Phía Nam (CNPN). Đây là một phần trong chiến lược mở rộng quy mô sản xuất và nâng cao năng lực phục vụ khách hàng tại thị trường trọng điểm phía Nam.</p>
      
      <h3>Các vị trí tuyển dụng</h3>
      <p>Chúng tôi đang tìm kiếm các ứng viên năng động, có chuyên môn và tâm huyết cho các vị trí sau:</p>
      <ul>
        <li>Kỹ sư Vận hành Trung tâm</li>
        <li>Kỹ thuật viên Sửa chữa Cơ khí</li>
        <li>Nhân viên Kinh doanh & Tiếp thị</li>
        <li>Nhân viên Logistics</li>
      </ul>
      
      <h3>Quyền lợi và Môi trường làm việc</h3>
      <p>Gia nhập Xi măng Cẩm Phả, bạn sẽ được làm việc trong môi trường chuyên nghiệp, năng động với lộ trình thăng tiến rõ ràng. Chúng tôi cam kết mức lương cạnh tranh, các chế độ phúc lợi hấp dẫn và chương trình đào tạo chuyên sâu từ các chuyên gia trong ngành.</p>
      
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Môi trường làm việc tại XMCP" />
      <p class="caption">Cán bộ công nhân viên Xi măng Cẩm Phả trong giờ làm việc</p>
      
      <h3>Cách thức ứng tuyển</h3>
      <p>Ứng viên quan tâm vui lòng gửi hồ sơ trực tiếp tại Văn phòng Chi nhánh Phía Nam hoặc qua email của Phòng Tổ chức Nhân sự. Thời hạn nhận hồ sơ đến hết ngày 31/05/2026.</p>
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    date: '13 Tháng 5, 2026',
    author: 'Phòng Tổ chức',
  },
  {
    id: 3,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Trao giọt máu hồng – Lan tỏa trách nhiệm cộng đồng của Xi măng Cẩm Phả.',
    description: 'Chương trình hiến máu nhân đạo thường niên của cán bộ công nhân viên Xi măng Cẩm Phả, thể hiện sâu sắc trách nhiệm xã hội và tinh thần tương thân tương ái vì cộng đồng.',
    content: `
      <p>Tiếp nối truyền thống "Tương thân tương ái", ngày 15/03/2026, Đoàn Thanh niên Công ty Cổ phần Xi măng Cẩm Phả đã phối hợp với Viện Huyết học - Truyền máu Trung ương tổ chức ngày hội hiến máu tình nguyện "Trao giọt máu hồng".</p>
      
      <h3>Lan tỏa yêu thương</h3>
      <p>Sự kiện đã thu hút đông đảo cán bộ, công nhân viên từ các phòng ban, xưởng sản xuất tham gia. Mỗi giọt máu trao đi là một tấm lòng gửi đến những bệnh nhân đang cần giúp đỡ, thể hiện nét đẹp văn hóa và trách nhiệm của người lính trên mặt trận kinh tế.</p>
      
      <img src="/assets/design/hien-mau.webp" />
      <p class="caption">Cán bộ công nhân viên XMCP tham gia hiến máu tình nguyện</p>
      
      <p>Kết thúc ngày hội, ban tổ chức đã thu được hơn 150 đơn vị máu an toàn. Đây là món quà ý nghĩa góp phần khắc phục tình trạng khan hiếm máu tại các bệnh viện, đồng thời giáo dục tinh thần nhân văn cho thế hệ trẻ của công ty.</p>
    `,
    image: '/assets/design/hien-mau.webp',
    date: '15 Tháng 3, 2026',
    author: 'Đoàn Thanh niên',
  },
  {
    id: 4,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Tri ân những "bông hoa" Xi măng Cẩm Phả nhân ngày Quốc tế Phụ nữ 8/3.',
    description: 'Ban Lãnh đạo công ty đã tổ chức các hoạt động thăm hỏi, chúc mừng và tặng quà cho nữ cán bộ công nhân viên nhằm tôn vinh những đóng góp quan trọng đối với sự phát triển của công ty.',
    content: `
      <p>Nhân kỷ niệm ngày Quốc tế Phụ nữ 8/3, Công đoàn và Ban Nữ công Xi măng Cẩm Phả đã tổ chức buổi gặp mặt tri ân nữ cán bộ công nhân viên trong toàn công ty.</p>
      
      <h3>Tôn vinh phái đẹp</h3>
      <p>Tại buổi lễ, đại diện Ban Lãnh đạo đã gửi những lời chúc tốt đẹp và những bó hoa tươi thắm đến các chị em. Phụ nữ XMCP không chỉ đảm đang việc nhà mà còn khẳng định được vai trò quan trọng trong sản xuất kinh doanh, góp phần tạo nên những thành công chung của đơn vị.</p>
      
      <img src="/assets/design/phu-nu.webp" />
      <p class="caption">Đại diện Ban Lãnh đạo tặng quà chúc mừng nữ CBNV</p>
      
      <p>Các hoạt động văn nghệ và tọa đàm cũng được diễn ra sôi nổi, tạo không gian giao lưu ấm cúng, giúp thắt chặt tình đoàn kết và động viên tinh thần chị em tiếp tục nỗ lực vươn lên trong công việc và cuộc sống.</p>
    `,
    image: '/assets/design/phu-nu.webp',
    date: '09 Tháng 3, 2026',
    author: 'Công đoàn XMCP',
  },
  {
    id: 5,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Xi măng Cẩm Phả đón Xuân Bính Ngọ 2026: Giữ vững nhịp sản xuất – Sẵn sàng bứt phá.',
    description: 'Không khí ra quân sản xuất đầy khí thế tại nhà máy trong những ngày đầu năm mới, thể hiện quyết tâm hoàn thành vượt mức các chỉ tiêu sản xuất kinh doanh ngay từ quý đầu năm.',
    content: `
      <p>Trong không khí hân hoan của những ngày đầu năm mới Bính Ngọ, Nhà máy Xi măng Cẩm Phả đã nhanh chóng bắt nhịp sản xuất với tinh thần quyết tâm cao nhất.</p>
      
      <h3>Ra quân đầy khí thế</h3>
      <p>Tất cả các dây chuyền sản xuất clinker và trạm nghiền xi măng đều vận hành ổn định 24/7 xuyên Tết để đảm bảo nguồn cung cho các công trình trọng điểm. Các chuyến tàu xuất hàng đầu năm đã khởi hành suôn sẻ, báo hiệu một năm mới kinh doanh thuận lợi.</p>
      
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Sản xuất đầu năm" />
      <p class="caption">Không khí làm việc hăng say tại xưởng sản xuất những ngày đầu xuân</p>
      
      <h3>Mục tiêu bứt phá</h3>
      <p>Năm 2026 được xác định là năm bản lề cho chiến lược chuyển đổi số và phát triển bền vững. Ban Lãnh đạo XMCP đã đề ra các mục tiêu cụ thể về sản lượng và chất lượng, tập trung vào việc làm hài lòng khách hàng thông qua những giải pháp vật liệu xây dựng tối ưu nhất.</p>
    `,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
    date: '26 Tháng 2, 2026',
    author: 'Phòng Sản xuất',
  },
  {
    id: 6,
    category: 'knowledge',
    categoryLabel: 'Kiến thức ngành',
    title: 'Xu hướng sử dụng xi măng bền vững trong xây dựng hiện đại.',
    description: 'Tìm hiểu cách các loại xi măng hỗn hợp giúp tăng độ bền cho công trình ven biển và giảm thiểu tác động đến môi trường tự nhiên.',
    content: `
      <p>Xây dựng bền vững đang trở thành xu hướng tất yếu toàn cầu. Việc lựa chọn loại xi măng phù hợp đóng vai trò quyết định đến tuổi thọ công trình và khả năng bảo vệ môi trường.</p>
      <h3>Xi măng hỗn hợp - Giải pháp tương lai</h3>
      <p>Các loại xi măng được pha trộn phụ gia hoạt tính giúp giảm lượng clinker, từ đó giảm phát thải CO2 mà vẫn đảm bảo cường độ chịu nén vượt trội cho bê tông.</p>
    `,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    date: '18 Tháng 5, 2026',
    author: 'Ban Kỹ thuật',
    featuredInCategory: true,
  },
  {
    id: 7,
    category: 'pr',
    categoryLabel: 'Báo chí',
    title: 'Xi măng Cẩm Phả đồng hành cùng các dự án hạ tầng trọng điểm phía Nam.',
    description: 'Ký kết thỏa thuận cung ứng xi măng cho các gói thầu quan trọng tại dự án sân bay quốc tế Long Thành và hệ thống đường cao tốc ven biển.',
    content: `
      <p>Chất lượng Xi măng Cẩm Phả tiếp tục được khẳng định thông qua việc tham gia cung ứng cho hàng loạt dự án hạ tầng chiến lược quốc gia.</p>
      <h3>Đối tác tin cậy</h3>
      <p>Chúng tôi tự hào là đơn vị cung cấp vật liệu chính cho dự án Sân bay Long Thành và các tuyến cao tốc Bắc-Nam, đáp ứng các tiêu chuẩn kỹ thuật khắt khe nhất của tư vấn giám sát.</p>
    `,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
    date: '12 Tháng 5, 2026',
    author: 'Phòng Kinh doanh',
    featuredInCategory: true,
  },
  {
    id: 8,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: 'Khai trương phòng thí nghiệm VILAS tiêu chuẩn quốc tế tại Nhà máy Cẩm Phả.',
    description: 'Việc đạt chứng nhận VILAS giúp Xi măng Cẩm Phả chủ động kiểm soát chất lượng nghiêm ngặt và đáp ứng các tiêu chuẩn xuất khẩu khắt khe nhất.',
    content: `
      <p>Sáng ngày 05/05/2026, Công ty Cổ phần Xi măng Cẩm Phả đã chính thức cắt băng khánh thành Phòng thí nghiệm Trung tâm đạt tiêu chuẩn ISO/IEC 17025 (VILAS).</p>
      <h3>Đầu tư công nghệ</h3>
      <p>Phòng thí nghiệm mới được đầu tư trang thiết bị đồng bộ từ các nhà cung cấp hàng đầu thế giới, đảm bảo kết quả thử nghiệm chính xác và tin cậy.</p>
    `,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    date: '05 Tháng 5, 2026',
    author: 'Ban Kiểm soát Chất lượng',
  },
  {
    id: 9,
    category: 'knowledge',
    categoryLabel: 'Kiến thức ngành',
    title: 'Hướng dẫn bảo quản xi măng đúng cách để đảm bảo chất lượng công trình.',
    description: 'Nắm vững các nguyên tắc lưu kho và bảo quản xi măng tại công trường để tránh hiện tượng vón cục và giảm cường độ chịu lực.',
    content: `
      <p>Bảo quản xi măng sai cách là một trong những nguyên nhân hàng đầu dẫn đến hư hỏng vật liệu trước khi sử dụng. Dưới đây là các quy tắc vàng từ chuyên gia XMCP.</p>
      <h3>Nguyên tắc 5 không trong lưu kho</h3>
      <p>1. Không xếp trực tiếp xuống sàn. 2. Không xếp quá cao. 3. Không để sát tường. 4. Không để nơi ẩm ướt. 5. Không lưu kho quá lâu (trên 60 ngày).</p>
    `,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    date: '10 Tháng 5, 2026',
    author: 'Ban Kỹ thuật',
  },
  {
    id: 10,
    category: 'knowledge',
    categoryLabel: 'Kiến thức ngành',
    title: 'Tại sao xi măng bền sunfat là lựa chọn số 1 cho các công trình ven biển?',
    description: 'Khám phá khả năng chống ăn mòn vượt trội của dòng xi măng chuyên dụng XMCP trong môi trường xâm nhập mặn.',
    content: `
      <p>Với đường bờ biển dài, Việt Nam đối mặt với thách thức lớn về ăn mòn cốt thép do muối mặn. Xi măng bền sunfat của XMCP được thiết kế đặc biệt để giải quyết vấn đề này.</p>
    `,
    image: '/assets/design/coastal-cement.png',
    date: '05 Tháng 5, 2026',
    author: 'Phòng R&D',
  },
  {
    id: 11,
    category: 'knowledge',
    categoryLabel: 'Kiến thức ngành',
    title: 'Vai trò của phụ gia hoạt tính trong việc nâng cao mác bê tông.',
    description: 'Tìm hiểu cách XMCP ứng dụng công nghệ phụ gia hiện đại để tạo ra dòng xi măng có cường độ sớm cao và độ bền lâu dài.',
    content: `
      <p>Phụ gia không chỉ là thành phần bổ sung mà là chìa khóa để thay đổi cấu trúc vi mô của bê tông, giúp tăng mật độ và giảm độ rỗng.</p>
    `,
    image: '/assets/design/concrete-additives.png',
    date: '01 Tháng 5, 2026',
    author: 'Ban Kỹ thuật',
  },
  {
    id: 12,
    category: 'pr',
    categoryLabel: 'Báo chí',
    title: 'XMCP nhận giải thưởng "Doanh nghiệp vì cộng đồng" năm 2026.',
    description: 'Ghi nhận những đóng góp không ngừng nghỉ trong công tác an sinh xã hội và hỗ trợ xây dựng cơ sở hạ tầng tại các địa phương khó khăn.',
    content: `
      <p>Giải thưởng là minh chứng cho cam kết phát triển bền vững đi đôi với trách nhiệm xã hội của Xi măng Cẩm Phả trong suốt nhiều năm qua.</p>
    `,
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop',
    date: '15 Tháng 5, 2026',
    author: 'Ban Truyền thông',
  },
  {
    id: 13,
    category: 'pr',
    categoryLabel: 'Báo chí',
    title: 'Lễ ký kết hợp tác chiến lược giữa XMCP và đối tác Nhật Bản.',
    description: 'Mở rộng hợp tác về chuyển giao công nghệ lò quay khô thế hệ mới, hướng tới mục tiêu sản xuất xi măng xanh không phát thải.',
    content: `
      <p>Sự kiện đánh dấu bước tiến quan trọng của XMCP trong việc làm chủ công nghệ sản xuất tiên tiến hàng đầu thế giới.</p>
    `,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600&auto=format&fit=crop',
    date: '12 Tháng 5, 2026',
    author: 'Văn phòng Công ty',
  },
  {
    id: 14,
    category: 'pr',
    categoryLabel: 'Báo chí',
    title: 'Hành trình 20 năm khẳng định vị thế thương hiệu Xi măng Cẩm Phả.',
    description: 'Từ một nhà máy tại Quảng Ninh đến thương hiệu xi măng hàng đầu Việt Nam vươn tầm quốc tế với mạng lưới xuất khẩu rộng khắp.',
    content: `
      <p>Nhìn lại chặng đường 20 năm hình thành và phát triển, XMCP tự hào đã góp phần xây dựng hàng triệu công trình trên khắp mọi miền tổ quốc.</p>
    `,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    date: '08 Tháng 5, 2026',
    author: 'Ban Giám đốc',
  },
];
