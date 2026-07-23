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
    id: 64,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Đồng chí Nguyễn Ngọc Tân vinh dự nhận quyết định thăng quân hàm Thượng tá Quân nhân chuyên nghiệp",
    description: "Ngày 21/7/2026, tại Hội nghị trao quyết định thăng quân hàm do Ban Thường vụ Đảng ủy Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel tổ chức, đồng chí Nguyễn Ngọc Tân – Phó Tổng Giám đốc Công ty Cổ phần Xi măng Cẩm Phả, vinh dự được trao quyết định thăng quân hàm và nâng lương Thượng tá Quân nhân chuyên nghiệp.",
    content: `<p><span><span><span><span>Ngày 21/7/2026, tại Hội nghị trao quyết định thăng quân hàm do Ban Thường vụ Đảng ủy Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel tổ chức, đồng chí Nguyễn Ngọc Tân – Phó Tổng Giám đốc Công ty Cổ phần Xi măng Cẩm Phả, vinh dự được trao quyết định thăng quân hàm và nâng lương Thượng tá Quân nhân chuyên nghiệp.</span></span></span></span></p>

<p><span><span><span><span>Chủ trì Hội nghị và trực tiếp trao quyết định, đồng chí Đại tá Đào Xuân Vũ – Ủy viên Ban Thường vụ Đảng ủy, Phó Tổng Giám đốc Tập đoàn đã chúc mừng các đồng chí được trao quyết định, ghi nhận những nỗ lực, đóng góp trong quá trình công tác; đồng thời yêu cầu các đồng chí tiếp tục giữ vững phẩm chất đạo đức, chấp hành nghiêm kỷ luật Quân đội, phát huy năng lực, kinh nghiệm, hoàn thành xuất sắc mọi nhiệm vụ được giao, góp phần xây dựng cơ quan, đơn vị vững mạnh, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/21.7.2026/1784681512823_8441313950489281095_g302660007515317585_8889e1ae28e22281f19f18f7471be707.webp"/></span></span></span></span><br/>
<br/>
<span><span><span><span>Việc được thăng quân hàm Thượng tá Quân nhân chuyên nghiệp là sự ghi nhận đối với những đóng góp, tinh thần trách nhiệm và nỗ lực của đồng chí Nguyễn Ngọc Tân trong quá trình thực hiện nhiệm vụ.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/21.7.2026/1784681512844_8441313950489281095_g302660007515317585_bba2b0e42b34b32c11fb922365c9879d.webp"/></span></span></span></span><br/>
<br/>
<span><span><span><span>Đây cũng là niềm vinh dự, động lực để đồng chí tiếp tục phát huy phẩm chất, năng lực, tinh thần trách nhiệm, hoàn thành tốt các nhiệm vụ được giao, góp phần vào sự phát triển của Công ty Cổ phần Xi măng Cẩm Phả và Tập đoàn.</span></span></span></span><br/>
 </p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/21.7.2026/nh đăng.webp"/><br/>
<br/>
<span><span><span><span><span><span><span>Nhân dịp này, tối cùng ngày, thay mặt toàn thể cán bộ, công nhân viên Công ty Cổ phần Xi măng Cẩm Phả, Ban Tổng Giám đốc Công ty đã trao tặng hoa chúc mừng đồng chí Nguyễn Ngọc Tân. Đây là tình cảm, sự ghi nhận và niềm vui chung của tập thể CBCNV Công ty trước dấu mốc đáng nhớ trong quá trình công tác của đồng chí.</span></span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/1784681512823_8441313950489281095_g302660007515317585_8889e1ae28e22281f19f18f7471be707.webp",
    date: "22 Tháng 7, 2026",
    author: "admin",
    featured: true,
    featuredInCategory: true
  },
  {
    id: 63,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả đồng thời khởi công công trình kho chứa phụ gia và khai trương Văn phòng Hà Nội",
    description: "Ngày 10/7/2026, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức đồng thời hai sự kiện quan trọng gồm Lễ khởi công công trình kho chứa phụ gia tại Nhà máy chính Quảng Ninh và khai trương Văn phòng Đại diện tại Hà Nội. Đây là những dấu mốc có ý nghĩa trong lộ trình đầu tư phát triển đồng bộ, vừa nâng cao năng lực sản xuất, vừa mở rộng mạng lưới hoạt động, tăng cường kết nối với khách hàng và đối tác.",
    content: `<p><span><span><span><span><span><span>Ngày 10/7/2026, Công ty Cổ phần Xi măng Cẩm Phả đã</span></span><span><span> long trọng</span></span><span><span> tổ chức đồng thời hai sự kiện quan trọng gồm Lễ khởi công công trình kho chứa phụ gia tại</span></span> <span><span>Nhà máy</span></span><span><span> chính</span></span> <span><span>Quảng</span></span><span><span> Ninh </span></span><span><span>và khai trương Văn phòng Đại</span></span><span><span> diện tại </span></span><span><span>Hà Nội. Đây là những dấu mốc có ý nghĩa trong lộ trình đầu tư phát triển đồng bộ, vừa nâng cao năng lực sản xuất, vừa mở rộng mạng lưới hoạt động, tăng cường kết nối với khách hàng và đối tác.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/10.7.2026/1.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Lễ khởi công công trình kho chứa phụ gia diễn ra với sự tham dự của lãnh đạo Công ty cùng các cán bộ, công nhân viên. </span></span><span><span>Sau nghi thức công bố, các đại biểu đã thực hiện nghi thức động thổ, chính thức khởi công xây dựng công trình. Việc đầu tư kho chứa phụ gia góp phần tăng cường năng lực lưu trữ nguyên vật liệu, nâng cao tính chủ động trong sản xuất, hướng tới tối ưu hiệu quả vận hành và đáp ứng yêu cầu phát triển trong giai đoạn mới.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/10.7.2026/2.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Cùng thời điểm, Công ty chính thức khai trương Văn phòng Đại diện đặt tại tầng 4, tòa nhà TCC Tower, số 19 Duy Tân, quận Cầu Giấy, thành phố Hà Nội. </span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/10.7.2026/4.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Văn phòng mới sẽ là đầu mối kết nối, giao dịch với khách hàng và đối tác, góp phần nâng cao chất lượng phục vụ, mở rộng thị trường và khẳng định vị thế thương hiệu Xi măng Cẩm Phả trên thị trường.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/10.7.2026/3.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Việc đồng thời triển khai hai hoạt động trong cùng một ngày thể hiện quyết tâm của Công ty Cổ phần Xi măng Cẩm Phả trong việc đầu tư phát triển toàn diện, kết hợp giữa nâng cao năng lực sản xuất và mở rộng hệ thống kinh doanh, tạo nền tảng vững chắc cho mục tiêu phát triển bền vững trong thời gian tới.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/3.webp",
    date: "11 Tháng 7, 2026",
    author: "admin"
  },
  {
    id: 62,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "ĐẢNG ỦY CÔNG TY TỔ CHỨC HỘI NGHỊ RA NGHỊ QUYẾT LÃNH ĐẠO THỰC HIỆN NHIỆM VỤ 6 THÁNG CUỐI NĂM 2026",
    description: "Ngày 08/7/2026, Đảng ủy Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức Hội nghị Đảng ủy mở rộng ra Nghị quyết lãnh đạo thực hiện nhiệm vụ 6 tháng cuối năm 2026.",
    content: `<p><span><span><span><span><span>Ngày 08/7/2026, Đảng ủy Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức Hội nghị Đảng ủy mở rộng ra Nghị quyết lãnh đạo thực hiện nhiệm vụ 6 tháng cuối năm 2026.</span></span></span></span></span></p>
<p><span><span><span><span><span>Hội nghị do đồng chí Bí thư Đảng ủy Công ty chủ trì, với sự tham dự của các đồng chí trong Đảng ủy, Ban Tổng Giám đốc, Ban Kiểm soát và Trưởng các cơ quan, đơn vị trong toàn Công ty.</span></span></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/09.7.2026/IMG_3756 (1).webp"/></p>
<p><span><span><span><span><span>Phát huy tinh thần dân chủ, trách nhiệm và trí tuệ tập thể, Hội nghị đã tập trung đánh giá khách quan, toàn diện kết quả lãnh đạo thực hiện nhiệm vụ 6 tháng đầu năm 2026; phân tích, làm rõ những kết quả đạt được, những tồn tại, hạn chế và nguyên nhân; đồng thời thống nhất ban hành Nghị quyết lãnh đạo thực hiện nhiệm vụ 6 tháng cuối năm 2026 với các mục tiêu, nhiệm vụ và giải pháp trọng tâm nhằm tiếp tục nâng cao hiệu quả sản xuất, kinh doanh, xây dựng Đảng bộ trong sạch, vững mạnh.</span></span></span></span></span></p>
<p><span><span><span><b><span><span>Đánh giá kết quả lãnh đạo thực hiện nhiệm vụ 6 tháng đầu năm 2026:</span></span></b></span></span></span></p>
<p><span><span><span><span><span>Hội nghị khẳng định, trong bối cảnh thị trường xi măng tiếp tục gặp nhiều khó khăn, cạnh tranh gay gắt, Đảng ủy Công ty đã tập trung lãnh đạo, chỉ đạo quyết liệt, đồng bộ các cấp ủy, tổ chức Đảng, cơ quan, đơn vị triển khai hiệu quả các nhiệm vụ chính trị, sản xuất, kinh doanh; giữ vững sự đoàn kết, thống nhất trong toàn Đảng bộ, tạo động lực để Công ty hoàn thành các mục tiêu, chỉ tiêu chủ yếu đã đề ra.</span></span></span></span></span></p>
<p><span><span><span><span><span>Dưới sự lãnh đạo của Đảng ủy, hầu hết các chỉ tiêu sản xuất, kinh doanh 6 tháng đầu năm đều đạt và vượt kế hoạch. So với cùng kỳ năm 2025, doanh thu đạt 114% kế hoạch, tăng 23%; sản lượng tiêu thụ xi măng tăng 61%; nhiều chỉ tiêu về năng suất, hiệu quả sản xuất được cải thiện rõ nét. Công ty đã tổ chức thành công đợt sửa chữa lớn dây chuyền sản xuất, bảo đảm tuyệt đối an toàn về người và thiết bị; triển khai hiệu quả các giải pháp tối ưu hóa chi phí, tiết kiệm nhiên liệu, giảm phát thải, nâng cao hiệu quả quản trị và từng bước cải thiện thu nhập, đời sống của cán bộ, người lao động.</span></span></span></span></span></p>
<p><span><span><span><span><span>Công tác xây dựng Đảng tiếp tục được quan tâm lãnh đạo, chỉ đạo toàn diện. Đảng ủy Công ty đã giữ vững ổn định chính trị tư tưởng; thực hiện nghiêm các nguyên tắc tổ chức và sinh hoạt Đảng; nâng cao chất lượng sinh hoạt cấp ủy, chi bộ; tăng cường công tác kiểm tra, giám sát; đẩy mạnh chuyển đổi số trong công tác Đảng thông qua ứng dụng Sổ tay Đảng viên điện tử, góp phần nâng cao năng lực lãnh đạo, sức chiến đấu của các tổ chức Đảng và chất lượng đội ngũ cán bộ, đảng viên.</span></span></span></span></span></p>
<p><span><span><span>Hội nghị thống nhất đánh giá, những kết quả đạt được trong 6 tháng đầu năm đã tiếp tục khẳng định vai trò lãnh đạo toàn diện của Đảng ủy Công ty trong việc định hướng chiến lược, lãnh đạo thực hiện hiệu quả nhiệm vụ sản xuất, kinh doanh và công tác xây dựng Đảng. Đồng thời, Hội nghị cũng thẳng thắn chỉ ra những tồn tại, hạn chế, phân tích nguyên nhân và rút ra bài học kinh nghiệm để tập trung lãnh đạo, chỉ đạo khắc phục trong thời gian tới.</span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/09.7.2026/IMG_3787.webp"/></p>
<p><span><span><span><b><span><span>Tập trung lãnh đạo thực hiện thắng lợi nhiệm vụ 6 tháng cuối năm 2026:</span></span></b></span></span></span></p>
<p><span><span><span><span><span>Phân tích bối cảnh, dự báo những thời cơ, thuận lợi và khó khăn trong thời gian tới, Hội nghị thống nhất xác định nhiệm vụ trọng tâm 6 tháng cuối năm là tiếp tục phát huy vai trò hạt nhân chính trị của tổ chức Đảng; nâng cao năng lực lãnh đạo, sức chiến đấu của toàn Đảng bộ; tập trung lãnh đạo thực hiện quyết liệt, đồng bộ các giải pháp nhằm hoàn thành toàn diện các mục tiêu, nhiệm vụ năm 2026.</span></span></span></span></span></p>
<p><span><span><span><span><span>Đảng ủy Công ty yêu cầu các cấp ủy, tổ chức Đảng, cơ quan, đơn vị tập trung lãnh đạo bảo đảm dây chuyền sản xuất vận hành an toàn, ổn định, liên tục; tăng cường quản trị chi phí, nâng cao hiệu quả sử dụng nguyên, nhiên liệu; chủ động bám sát diễn biến thị trường, điều hành linh hoạt chính sách bán hàng, mở rộng thị trường tiêu thụ, nâng cao năng lực cạnh tranh; đẩy mạnh nghiên cứu, ứng dụng khoa học công nghệ, chuyển đổi số và các sáng kiến cải tiến kỹ thuật nhằm nâng cao năng suất, chất lượng sản phẩm và hiệu quả sản xuất, kinh doanh, phấn đấu hoàn thành vượt mức các chỉ tiêu đã đề ra. </span></span></span></span></span></p>
<p><span><span><span><span><span>Đối với công tác xây dựng Đảng, Hội nghị xác định tiếp tục tập trung kiện toàn tổ chức bộ máy, nâng cao chất lượng đội ngũ cán bộ, đảng viên; tăng cường giáo dục chính trị, tư tưởng; nâng cao chất lượng sinh hoạt cấp ủy, chi bộ; thực hiện nghiêm công tác kiểm tra, giám sát; phát huy vai trò của các tổ chức quần chúng trong thực hiện nhiệm vụ chính trị; xây dựng Đảng bộ Công ty trong sạch, vững mạnh, đáp ứng yêu cầu lãnh đạo thực hiện nhiệm vụ trong giai đoạn mới.</span></span></span></span></span></p>
<p><span><span><span><span><span>Phát biểu kết luận Hội nghị, đồng chí Bí thư Đảng ủy Công ty đề nghị các cấp ủy, tổ chức Đảng, cơ quan, đơn vị khẩn trương quán triệt, cụ thể hóa Nghị quyết thành chương trình, kế hoạch hành động sát với chức năng, nhiệm vụ của từng đơn vị; phát huy tinh thần đoàn kết, trách nhiệm, đổi mới, sáng tạo, quyết tâm hoàn thành thắng lợi các mục tiêu, nhiệm vụ năm 2026, góp phần xây dựng Công ty Cổ phần Xi măng Cẩm Phả phát triển ổn định, bền vững.</span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3756 (1).webp",
    date: "9 Tháng 7, 2026",
    author: "admin"
  },
  {
    id: 61,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Nỗ lực được ghi nhận – XMCP hoàn thành toàn diện các chỉ tiêu, nhiệm vụ 6 tháng đầu năm 2026",
    description: "Ngày 6/7, Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel tổ chức Hội nghị Sơ kết 6 tháng đầu năm và triển khai phương hướng nhiệm vụ 6 tháng cuối năm 2026.",
    content: `<p><span><span><span><span><span><span><span>Ngày 6/7, Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel tổ chức Hội nghị Sơ kết 6 tháng đầu năm và triển khai phương hướng nhiệm vụ 6 tháng cuối năm 2026. </span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/7.7.2026/anh bài viết.webp"/></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span>Dự và chủ trì hội nghị có đồng chí Trung tướng Tào Đức Thắng, Chủ tịch kiêm Tổng Giám đốc Tập đoàn. Tham dự hội nghị có các đồng chí trong Ban Tổng Giám đốc Tập đoàn cùng Lãnh đạo, Chỉ huy các Tổng Công ty, Công ty, Trung tâm, Viện, Học viện, các đơn vị tại thị trường trong nước và các thị trường nước ngoài.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span>Tại Hội nghị Sơ kết công tác sản xuất kinh doanh 6 tháng đầu năm 2026, Công ty XMCP vinh dự là một trong những tập thể được Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel biểu dương và khen thưởng vì đã có thành tích xuất sắc trong đợt thi đua cao điểm với chủ đề “Chủ động hơn - Thần tốc hơn - Táo bạo hơn - Vượt trội hơn”, phong trào thi đua “Đổi mới sáng tạo, phát triển khoa học, công nghệ, chuyển đổi số, chuyển đổi xanh”. Cụ thể, so với cùng kỳ năm 2025, 6 tháng đầu năm doanh thu của Công ty đạt 116% kế hoạch, tăng 23%; sản lượng tiêu thụ xi măng tăng 61%; đồng thời Công ty đã chuyển từ trạng thái kinh doanh chưa có lợi nhuận sang có lãi trong hai tháng liên tiếp (tháng 5,6/2026). Những kết quả này không chỉ thể hiện việc hoàn thành xuất sắc các chỉ tiêu, nhiệm vụ được giao mà còn khẳng định hiệu quả của các giải pháp quản trị, điều hành, tạo nền tảng vững chắc để Công ty tiếp tục hoàn thành các mục tiêu sản xuất kinh doanh trong những tháng cuối năm.</span></span></span></span></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/7.7.2026/anh 2.webp"/></p>
<p><span><span><span><span><span><span><span>Đây là sự ghi nhận xứng đáng cho tinh thần đoàn kết, đổi mới và trách nhiệm của toàn thể CBCNV Công ty, đồng thời là động lực để XMCP tiếp tục phát huy kết quả đạt được, phấn đấu hoàn thành thắng lợi nhiệm vụ sản xuất kinh doanh năm 2026.</span></span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/anh 2.webp",
    date: "7 Tháng 7, 2026",
    author: "admin"
  },
  {
    id: 60,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức Hội nghị sơ kết hoạt động sản xuất kinh doanh 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2026",
    description: "Ngày 2/7/2026, Công ty Cổ phần Xi măng Cẩm Phả tổ chức Hội nghị sơ kết hoạt động sản xuất kinh doanh 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2026.",
    content: `<p><span><span><span><span><span><span><span>Ngày 2/7/2026, Công ty Cổ phần Xi măng Cẩm Phả tổ chức Hội nghị sơ kết hoạt động sản xuất kinh doanh 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2026.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/IMG_3683.webp"/></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span>Tham dự Hội nghị có Ban Tổng Giám đốc công ty, lãnh đạo các phòng ban, đơn vị và các tổ chức quần chúng toàn công ty.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span>Mở đầu Hội nghị, các đại biểu đã cùng theo dõi phim tài liệu tổng kết hoạt động sản xuất kinh doanh 6 tháng đầu năm 2026 của Công ty. Những hình ảnh chân thực cùng các kết quả nổi bật được phản ánh trong bộ phim đã khái quát toàn diện về quá trình nỗ lực đổi mới, vượt khó của Công ty, đồng thời tạo tiền đề để Hội nghị đánh giá khách quan những kết quả đạt được và xác định phương hướng, nhiệm vụ trong thời gian tới.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/IMG_3614.webp"/></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span>So với cùng kỳ năm 2025, trong 6 tháng đầu năm, doanh thu của Công ty đạt kết quả tích cực, đạt 106% kế hoạch đề ra và tăng 25%, sản lượng tiêu thụ xi măng tăng 64%. Kết quả này cho thấy doanh nghiệp không chỉ hoàn thành vượt mức kế hoạch mà còn duy trì được tốc độ tăng trưởng tốt, tạo nền tảng thuận lợi để hoàn thành các mục tiêu kinh doanh trong những tháng tiếp theo.</span></span></span></span> </span></span></span></span></p>
<p><span><span><span><span><span><span><span><span>Điểm nổi bật nhất là Công ty đã chuyển từ trạng thái kinh doanh chưa có lợi nhuận sang có lãi trong hai tháng liên tiếp.Việc ghi nhận lợi nhuận dương trở lại sau hơn 5 năm có ý nghĩa đặc biệt quan trọng, cho thấy các giải pháp tái cơ cấu hoạt động kinh doanh, kiểm soát chi phí, tối ưu định mức sản xuất và nâng cao hiệu quả tiêu thụ sản phẩm đã phát huy hiệu quả, tạo tiền đề thuận lợi để phấn đấu hoàn thành các mục tiêu sản xuất kinh doanh trong những tháng cuối năm.</span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/IMG_3641.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span>Tiếp nối chương trình, Hội nghị đã nghe các tham luận của lãnh đạo các phòng, ban đơn vị về kết quả thực hiện nhiệm vụ trong 6 tháng đầu năm, đồng thời đề xuất các giải pháp, phương hướng triển khai nhiệm vụ sản xuất kinh doanh 6 tháng cuối năm 2026.</span></span></span></span> <span><span><span><span>Trên cơ sở các nội dung tham luận, các đồng chí Phó Tổng Giám đốc đã phát biểu, phân tích, làm rõ những nhiệm vụ trọng tâm theo từng lĩnh vực phụ trách, đồng thời đưa ra các định hướng, giải pháp nhằm tiếp tục phát huy kết quả đạt được, khắc phục những tồn tại, tạo tiền đề hoàn thành thắng lợi nhiệm vụ sản xuất kinh doanh 6 tháng cuối năm. Kết luận nội dung thảo luận, Tổng Giám đốc Công ty ghi nhận các ý kiến đóng góp, yêu cầu các đơn vị tập trung triển khai đồng bộ các giải pháp, nâng cao tinh thần trách nhiệm, quyết tâm hoàn thành và vượt các chỉ tiêu kế hoạch năm 2026.</span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/IMG_3653.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span>Nhằm ghi nhận những tập thể, cá nhân có thành tích xuất sắc trong quá trình thực hiện nhiệm vụ, Hội nghị đã công bố các Quyết định khen thưởng tháng 6 và sơ kết 6 tháng đầu năm 2026. Nhiều tập thể, cá nhân tiêu biểu được biểu dương, khen thưởng vì những đóng góp nổi bật trong hoạt động sản xuất kinh doanh, góp phần quan trọng vào kết quả tích cực của Công ty trong thời gian qua. Đây không chỉ là sự ghi nhận đối với những nỗ lực, tinh thần trách nhiệm của người lao động mà còn là động lực để các đơn vị tiếp tục thi đua lao động sản xuất, hoàn thành thắng lợi các mục tiêu, nhiệm vụ đã đề ra trong 6 tháng cuối năm và cả năm 2026.</span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/snapedit_1782981704556.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/snapedit_1782981659053.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/snapedit_1782981692994.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/2.7.2026/snapedit_1782981368330.webp"/></span></span></span></span></span></span></span></span></p>
<p><span><span><span><span>Với quyết tâm cao, tinh thần đoàn kết và sự đồng lòng của toàn thể người lao động, Công ty Cổ phần Xi măng Cẩm Phả sẽ tiếp tục phát huy những kết quả đạt được, tập trung triển khai đồng bộ các giải pháp, phấn đấu hoàn thành và vượt các chỉ tiêu kế hoạch sản xuất kinh doanh năm 2026, tạo nền tảng vững chắc cho sự phát triển bền vững trong giai đoạn tiếp theo.</span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3683.webp",
    date: "2 Tháng 7, 2026",
    author: "admin"
  },
  {
    id: 59,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả tham gia trực tuyến Hội nghị toàn quốc nghiên cứu, học tập, quán triệt Nghị quyết về phát triển kinh tế có vốn đầu tư nước ngoài",
    description: "Sáng 30/6, thực hiện chương trình nghiên cứu, học tập, quán triệt các chủ trương, nghị quyết quan trọng của Đảng, Công ty Cổ phần Xi măng Cẩm Phả tổ chức kết nối điểm cầu trực tuyến tham dự Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết số 10-NQ/TW ngày 8/6/2026 của Bộ Chính trị về phát triển kinh tế có vốn đầu tư nước ngoài.",
    content: `<p><span><span><span><span>Sáng 30/6, thực hiện chương trình nghiên cứu, học tập, quán triệt các chủ trương, nghị quyết quan trọng của Đảng, Công ty Cổ phần Xi măng Cẩm Phả tổ chức kết nối điểm cầu trực tuyến tham dự Hội nghị toàn quốc nghiên cứu, học tập, quán triệt và triển khai thực hiện Nghị quyết số 10-NQ/TW ngày 8/6/2026 của Bộ Chính trị về phát triển kinh tế có vốn đầu tư nước ngoài.</span></span></span></span></p>

<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/30.6.2026/IMG_3602 (1).webp"/></span></span></span></span></p>

<p><span><span><span><span>Tham dự tại điểm cầu Công ty có đồng chí Phó Tổng Giám đốc Công ty cùng các cán bộ, công nhân viên đại diện các phòng, ban trực thuộc. Hội nghị được tổ chức nghiêm túc, góp phần giúp đội ngũ CBCNV nắm bắt những nội dung trọng tâm, quan điểm chỉ đạo và định hướng lớn trong Nghị quyết của Bộ Chính trị.</span></span></span></span></p>
<p><span><span><span><span>Tại Hội nghị, các đại biểu được nghe quán triệt những nội dung cốt lõi của Nghị quyết số 10-NQ/TW, trong đó tập trung vào quan điểm, mục tiêu, nhiệm vụ và giải pháp nhằm phát triển khu vực kinh tế có vốn đầu tư nước ngoài theo hướng bền vững, hiệu quả, gắn với nâng cao năng lực cạnh tranh, thúc đẩy đổi mới sáng tạo, chuyển giao công nghệ và đóng góp tích cực vào sự phát triển kinh tế - xã hội của đất nước.</span></span></span></span></p>

<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/30.6.2026/IMG_3594 (1).webp"/></span></span></span></span></p>

<p><span><span><span><span>Thông qua chương trình học tập, quán triệt nghị quyết, CBCNV Công ty có thêm nhận thức sâu sắc về vai trò, vị trí của khu vực kinh tế có vốn đầu tư nước ngoài trong nền kinh tế quốc dân; đồng thời hiểu rõ hơn trách nhiệm của doanh nghiệp trong việc chủ động thích ứng, nâng cao hiệu quả hoạt động sản xuất kinh doanh, tăng cường hội nhập và phát triển trong giai đoạn mới.</span></span></span></span></p>
<p><span><span><span><span>Việc tổ chức tham gia Hội nghị là hoạt động thiết thực nhằm nâng cao nhận thức chính trị, tư tưởng cho đội ngũ cán bộ, người lao động; góp phần đưa các chủ trương, định hướng lớn của Đảng sớm được triển khai vào thực tiễn, tạo động lực để Công ty Cổ phần Xi măng Cẩm Phả tiếp tục đổi mới, nâng cao năng lực cạnh tranh và phát triển bền vững.</span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3602 (1).webp",
    date: "30 Tháng 6, 2026",
    author: "admin"
  },
  {
    id: 58,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Dấu mốc mới trong hành trình cống hiến: Đồng chí Nguyễn Ngọc Tân được tuyển chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam",
    description: "Ngày 29/6/2026, Công ty tổ chức Hội nghị công tác cán bộ nhằm công bố kết quả tuyển chọn và giao nhiệm vụ đối với đồng chí Nguyễn Ngọc Tân – cán bộ được lựa chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam.",
    content: `<p><span><span><span><span>Ngày 29/6/2026, Công ty tổ chức Hội nghị công tác cán bộ nhằm công bố kết quả tuyển chọn và giao nhiệm vụ đối với đồng chí Nguyễn Ngọc Tân – cán bộ được lựa chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam.</span></span></span></span></p>
<p><span><span><span><span>Thực hiện chủ trương của Quân ủy Trung ương, Bộ Quốc phòng và Đảng ủy Tập đoàn Công nghiệp - Viễn thông Quân đội về xây dựng đội ngũ cán bộ có bản lĩnh chính trị vững vàng, phẩm chất đạo đức tốt, năng lực chuyên môn đáp ứng yêu cầu nhiệm vụ trong tình hình mới. Trên cơ sở kết quả tuyển chọn, đồng chí Nguyễn Ngọc Tân đã được cấp có thẩm quyền công nhận và cấp số hiệu sĩ quan dự bị theo quy định. Đồng chí vinh dự là một trong các đồng chí trong Tập đoàn Công nghiệp - Viễn thông Quân đội được tuyển chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam.</span></span></span></span></p>

<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/29.6.2026/IMG_3552 (1).webp"/></span></span></span></span></p>

<p><span><span><span><span>Tại Hội nghị, đại diện Ban Lãnh đạo Công ty đã trao quyết định, tặng hoa chúc mừng cho đồng chí Nguyễn Ngọc Tân. Đây không chỉ là sự ghi nhận đối với quá trình rèn luyện, phấn đấu, tinh thần trách nhiệm và những đóng góp của đồng chí, mà còn là niềm vinh dự, trách nhiệm trong việc tiếp tục phát huy phẩm chất người cán bộ Quân đội, hoàn thành tốt nhiệm vụ được giao.</span></span></span></span></p>

<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/29.6.2026/IMG_3564 (1).webp"/></span></span></span></span></p>

<p><span><span><span><span>Phát biểu chúc mừng tại Hội nghị, đồng chí Tổng Giám đốc Công ty ghi nhận những nỗ lực, đóng góp của đồng chí Nguyễn Ngọc Tân trong quá trình công tác; đồng thời mong muốn đồng chí tiếp tục giữ vững bản lĩnh chính trị, phát huy tinh thần trách nhiệm, không ngừng phấn đấu, rèn luyện, hoàn thành tốt nhiệm vụ trên cương vị được giao.</span></span></span></span></p>

<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/29.6.2026/IMG_3566 (1).webp"/></span></span></span></span></p>

<p><span><span><span><span>Bày tỏ niềm vinh dự khi được lựa chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam, đồng chí Nguyễn Ngọc Tân gửi lời cảm ơn tới Đảng ủy, Ban Lãnh đạo Công ty cùng các đồng nghiệp đã luôn quan tâm, tạo điều kiện trong quá trình công tác. Đồng chí khẳng định sẽ tiếp tục nỗ lực rèn luyện, phát huy tinh thần trách nhiệm, giữ gìn phẩm chất người cán bộ Quân đội, đóng góp vào sự phát triển của Công ty và hoàn thành tốt mọi nhiệm vụ được giao.</span></span></span></span></p>

<p><span><span><span><span>Việc đồng chí Nguyễn Ngọc Tân được tuyển chọn vào đội ngũ cán bộ Quân đội nhân dân Việt Nam là niềm vinh dự, tự hào của cá nhân đồng chí, đồng thời là sự ghi nhận đối với quá trình đào tạo, rèn luyện và phát triển đội ngũ cán bộ của Công ty. Đây cũng là minh chứng cho sự quan tâm, định hướng của Đảng ủy, Ban lãnh đạo Tập đoàn và Công ty trong công tác xây dựng nguồn cán bộ có bản lĩnh chính trị, phẩm chất đạo đức, năng lực chuyên môn và tinh thần trách nhiệm; góp phần bổ sung nguồn nhân lực chất lượng cho Quân đội, đáp ứng yêu cầu nhiệm vụ trong tình hình mới.</span></span></span></span></p>
<p><span><span><span>Xem toàn văn nội dung phát biểu tri ân của đồng chí Nguyễn Ngọc Tân: https://docs.google.com/document/d/1N-_vhe8FOQUhOvpc_2djEQUUOWEj6bUV/edit?usp=drive_link&amp;ouid=114644734947453696713&amp;rtpof=true&amp;sd=true</span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3552 (1).webp",
    date: "29 Tháng 6, 2026",
    author: "admin"
  },
  {
    id: 57,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả mở rộng kết nối quốc tế, đón đoàn công tác Silkroad Hà Nội và Bê tông JungSun (Hàn Quốc) đến tham quan và làm việc",
    description: "Ngày 25/6/2026, Công ty Cổ phần Xi măng Cẩm Phả đã đón tiếp đoàn công tác đến từ Công ty Cổ phần Silkroad Hà Nội và Công ty Bê tông JungSun (Hàn Quốc) tới tham quan, tìm hiểu và trao đổi về năng lực sản xuất, hệ thống quản lý chất lượng cũng như tiềm năng hợp tác trong thời gian tới.",
    content: `<p><span><span><span><span>Ngày 25/6/2026, Công ty Cổ phần Xi măng Cẩm Phả đã đón tiếp đoàn công tác đến từ Công ty Cổ phần Silkroad Hà Nội và Công ty Bê tông JungSun (Hàn Quốc) tới tham quan, tìm hiểu và trao đổi về năng lực sản xuất, hệ thống quản lý chất lượng cũng như tiềm năng hợp tác trong thời gian tới.</span></span></span></span></p>

<p><span><span><span><span>Silkroad Hà Nội là doanh nghiệp hoạt động trong lĩnh vực cung cấp phụ gia hóa học bê tông và vật liệu xây dựng thân thiện với môi trường, trong khi Công ty Bê tông JungSun là đơn vị sản xuất, cung cấp bê tông thương phẩm tại thị trường Hàn Quốc. Chuyến thăm lần này là dịp để đoàn công tác Hàn Quốc trực tiếp tìm hiểu về quy mô nhà máy, dây chuyền sản xuất, quy trình kiểm soát chất lượng, các chủng loại sản phẩm xi măng cũng như khả năng cung ứng của Xi măng Cẩm Phả đối với thị trường trong nước và quốc tế.</span></span></span></span><br/>
 </p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/25.6.2026/IMG_3360.webp"/></p>
<p><br/>
<span><span><span><span>Trong khuôn khổ chương trình làm việc, đoàn công tác đã được giới thiệu tổng quan về quá trình hình thành, phát triển, quy mô vận hành nhà máy, dây chuyền công nghệ sản xuất, hệ thống kiểm soát chất lượng và các hoạt động xuất khẩu của Xi măng Cẩm Phả thông qua phim tư liệu giới thiệu về Công ty.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/25.6.2026/IMG_3366.jpg"/><br/>
<br/>
Phát biểu tại buổi làm việc, ông Hoàng Quang Thoa – Phó.TGĐ Công ty CP Xi măng Cẩm Phả gửi lời cảm ơn sự quan tâm, tin tưởng của các đối tác dành cho Xi măng Cẩm Phả, đồng thời chia sẻ về năng lực sản xuất, định hướng phát triển và những lợi thế của Công ty trong việc đáp ứng nhu cầu của các đối tác trong nước và quốc tế. Công ty luôn sẵn sàng đồng hành cùng các đối tác trong việc tìm kiếm, mở rộng các cơ hội hợp tác trong thời gian tới.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/25.6.2026/IMG_3389.webp"/></span></span></span></span></p>
<p><br/>
<span><span><span><span>Đại diện Công ty Bê tông JungSun đánh giá cao về sự chuẩn bị chu đáo, tinh thần đón tiếp của Công ty Cổ phần Xi măng Cẩm Phả trong chương trình làm việc. Qua quá trình tìm hiểu, trao đổi, phía JungSun bày tỏ sự tin tưởng đối với chất lượng sản phẩm, quy trình sản xuất và công tác quản lý chất lượng của Xi măng Cẩm Phả. Đồng thời, đoàn công tác mong muốn tiếp tục duy trì trao đổi, tìm hiểu thêm các nội dung liên quan, từ đó mở ra những cơ hội hợp tác phù hợp giữa hai bên trong thời gian tới.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/25.6.2026/IMG_3415.webp"/><br/>
<br/>
Sau buổi làm việc, đoàn công tác đã trực tiếp tham quan Nhà máy Xi măng Cẩm Phả để tìm hiểu thực tế về quy trình vận hành, hệ thống sản xuất và các điều kiện phục vụ hoạt động sản xuất xi măng. Chuyến tham quan giúp đoàn có thêm góc nhìn trực quan về năng lực vận hành, công tác kiểm soát chất lượng cũng như sự chuyên nghiệp trong quá trình sản xuất của Công ty.</span></span></span></span><br/>
 </p>
<p><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/25.6.2026/IMG_3422.webp"/><br/>
<br/>
Chuyến thăm và làm việc của đoàn công tác Silkroad Hà Nội và Bê tông JungSun tại Công ty Cổ phần Xi măng Cẩm Phả đã góp phần tăng cường sự kết nối, trao đổi thông tin giữa các doanh nghiệp trong lĩnh vực vật liệu xây dựng. Đây cũng là cơ hội để Xi măng Cẩm Phả tiếp tục giới thiệu năng lực, chất lượng sản phẩm và định hướng phát triển tới các đối tác quốc tế, đồng thời mở ra những cơ hội hợp tác phù hợp trong tương lai.</span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3389.webp",
    date: "26 Tháng 6, 2026",
    author: "admin"
  },
  {
    id: 56,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Lễ ký kết quy chế phối hợp giữa UBND xã Hải Hòa và Công ty Cổ phần Xi măng Cẩm Phả",
    description: "Sáng ngày 16/6/2026, tại trụ sở UBND xã Hải Hòa đã diễn ra Lễ ký kết quy chế phối hợp giữa UBND xã Hải Hòa và Công ty Cổ phần Xi măng Cẩm Phả. Đây là hoạt động có ý nghĩa quan trọng, đánh dấu bước phát triển mới trong mối quan hệ hợp tác giữa chính quyền địa phương và doanh nghiệp, hướng tới mục tiêu cùng phát triển bền vững.",
    content: `<p><span><span><span>Sáng ngày 16/6/2026, tại trụ sở UBND xã Hải Hòa đã diễn ra Lễ ký kết quy chế phối hợp giữa UBND xã Hải Hòa và Công ty Cổ phần Xi măng Cẩm Phả. Đây là hoạt động có ý nghĩa quan trọng, đánh dấu bước phát triển mới trong mối quan hệ hợp tác giữa chính quyền địa phương và doanh nghiệp, hướng tới mục tiêu cùng phát triển bền vững.          </span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/16.6.2026 Hải Hòa/1.webp"/></p>

<p><span><span><span><span><span><span><span>Tham dự buổi lễ có đại diện lãnh đạo UBND xã Hải Hòa, đại diện Ban lãnh đạo Công ty Cổ phần Xi măng Cẩm Phả cùng các phòng, ban, đơn vị liên quan. Tại buổi lễ, hai bên đã trao đổi, thống nhất các nội dung phối hợp nhằm tăng cường mối quan hệ gắn kết giữa doanh nghiệp và địa phương, phát huy vai trò của doanh nghiệp trong việc đồng hành cùng sự phát triển kinh tế - xã hội trên địa bàn.</span></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/16.6.2026 Hải Hòa/2.webp"/></span></span></span></span></span></span></span><br/>
<br/>
<span><span><span><span><span><span><span>Phát biểu tại buổi lễ, đại diện lãnh đạo Công ty Cổ phần Xi măng Cẩm Phả khẳng định doanh nghiệp luôn quan tâm đến việc xây dựng mối quan hệ gắn bó với chính quyền địa phương và cộng đồng dân cư. Việc ký kết quy chế phối hợp là cơ sở để hai bên tăng cường trao đổi, phối hợp chặt chẽ trong các hoạt động, góp phần thúc đẩy sự phát triển chung.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span>Đại diện UBND xã Hải Hòa cũng đánh giá cao sự đồng hành của Công ty Cổ phần Xi măng Cẩm Phả trong thời gian qua, đồng thời mong muốn sự hợp tác giữa hai bên sẽ ngày càng được mở rộng, mang lại nhiều kết quả thiết thực, góp phần nâng cao chất lượng đời sống của nhân dân và thúc đẩy phát triển kinh tế - xã hội địa phương.</span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/16.6.2026 Hải Hòa/3.webp"/></span></span></span></span></span></span></span></p>
<p><span><span><span>Nhân dịp này, Công ty Cổ phần Xi măng Cẩm Phả đã trao tặng quà cho UBND xã Hải Hòa, thể hiện sự quan tâm và đồng hành của doanh nghiệp đối với địa phương trong quá trình phát triển.</span></span></span></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/16.6.2026 Hải Hòa/4.webp"/></span></span></span></p>
<p><span><span><span><span><span><span><span>Lễ ký kết quy chế phối hợp giữa UBND xã Hải Hòa và Công ty Cổ phần Xi măng Cẩm Phả là dấu mốc quan trọng, mở ra cơ hội hợp tác sâu rộng hơn giữa hai bên. Thông qua việc phối hợp chặt chẽ, doanh nghiệp có thêm điều kiện phát triển sản xuất kinh doanh, đồng thời địa phương và nhân dân có thêm cơ hội tiếp cận các chương trình hỗ trợ, hoạt động ý nghĩa, góp phần xây dựng mối quan hệ hài hòa, bền vững giữa doanh nghiệp và cộng đồng.</span></span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/z7942287674599_2caf374cbdbe76108d68d038c8a88667.webp",
    date: "16 Tháng 6, 2026",
    author: "admin"
  },
  {
    id: 55,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "18 NĂM XI MĂNG CẨM PHẢ: TỰ HÀO TRUYỀN THỐNG – VỮNG VÀNG KHÁT VỌNG VƯƠN XA",
    description: "Ngày 04/6/2026, trong không khí rực lửa thi đua hướng tới kỷ niệm 18 năm Ngày thành lập Công ty Cổ phần Xi măng Cẩm Phả (05/6/2008 – 05/6/2026), toàn thể cán bộ, công nhân viên (CBCNV) Công ty đã cùng nhau nhìn lại một chặng đường oanh liệt, đánh dấu bước trưởng thành vượt bậc và mở ra trang sử phát triển đầy hứa hẹn.",
    content: `<p><span><span><span>Ngày 04/6/2026, trong không khí rực lửa thi đua hướng tới kỷ niệm 18 năm Ngày thành lập Công ty Cổ phần Xi măng Cẩm Phả (05/6/2008 – 05/6/2026), toàn thể cán bộ, công nhân viên (CBCNV) Công ty đã cùng nhau nhìn lại một chặng đường oanh liệt, đánh dấu bước trưởng thành vượt bậc và mở ra trang sử phát triển đầy hứa hẹn.</span></span></span></p>
<p><span><span><span>Mở đầu chuỗi sự kiện lịch sử là Lễ phát động phong trào thi đua chào mừng 18 năm thành lập Công ty với sự hiện diện của Ban Tổng Giám đốc, lãnh đạo các đơn vị cùng đông đảo người lao động – những trái tim đang chung một nhịp đập cống hiến. Phong trào thi đua được lan tỏa mạnh mẽ, sâu rộng đến từng phòng ban, từng phân xưởng sản xuất. Đây không chỉ là cuộc phát động hành chính thông thường, mà là lời kêu gọi đánh thức tinh thần đổi mới, khơi nguồn sáng kiến cải tiến kỹ thuật, quyết tâm tiết kiệm chi phí, nâng cao chất lượng sản phẩm. Đi đôi với mục tiêu kinh tế, Xi măng Cẩm Phả tiếp tục kiên định giữ vững tiêu chuẩn xanh, sạch và bảo vệ môi trường – khẳng định tầm vóc của một doanh nghiệp phát triển bền vững. Sức mạnh đoàn kết, ý chí kiên cường của người lao động Cẩm Phả chính là bệ phóng vững chắc để hiện thực hóa thắng lợi các chỉ tiêu sản xuất kinh doanh năm 2026.</span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_2978.webp"/></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_2969.webp"/></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_1281.webp"/></span></span></span></p>
<p><span><span><span>Trong dòng chảy cảm xúc của ngày hội lớn, toàn thể CBCNV Xi măng Cẩm Phả đã lặng người đi vì xúc động khi được chào đón các đồng chí nguyên là thành viên Ban Dự án Xi măng Cẩm Phả về thăm lại "ngôi nhà chung". Họ là những người khai sơn phá thạch, những người đầu tiên đặt nền móng vững chắc cho sự hình thành và phát triển của Công ty ngày hôm nay. Cuộc gặp gỡ đầy nghĩa tình này là dịp để các thế hệ cán bộ lãnh đạo và nhân viên cùng nhau ôn lại những ký ức kiêu hùng, những cột mốc lịch sử thăng trầm nhưng đầy tự hào. Sự hiện diện của các bậc tiền bối là minh chứng hùng hồn cho truyền thống "uống nước nhớ nguồn", sợi chỉ đỏ gắn kết bền chặt giữa các thế hệ qua các thời kỳ, truyền lửa cho thế hệ hôm nay vững bước trên hành trình mới.</span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_3017 (2).webp"/></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_3055.webp"/></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/z7927289398808_5255b9121caa5fb83ace2fd5ad236f6a (1).webp"/><span><span><span>Đi qua những kỷ niệm tự hào ấy để thấy rằng, Xi măng Cẩm Phả đã kiên cường vượt qua biết bao thăng trầm của nền kinh tế. Có những giai đoạn, khó khăn chồng chất khó khăn, thách thức bủa vây tứ phía. Thế nhưng, bằng ý chí thép, sự đoàn kết một lòng của tập thể CBCNV cùng chiến lược chèo lái sáng suốt của Ban lãnh đạo qua các thời kỳ, Xi măng Cẩm Phả đã đạp bằng mọi sóng gió để kiêu hãnh bước sang tuổi 18. Đặc biệt, dưới sự chỉ đạo sát sao, đúng đắn của Ban lãnh đạo Công ty trong thời gian vừa qua, tháng 5/2026, sau hơn 5 năm Công ty đạt lợi nhuận dương. Bên cạnh những nỗ lực triệt để nhằm tiết kiệm và tối ưu hóa chi phí, bức tranh kinh doanh của Công ty đang khởi sắc mạnh mẽ hơn bao giờ hết, các chỉ số liên tục tăng trưởng vượt bậc, tạo tiền đề quan trọng cho một kỷ nguyên phát triển bền vững trong tương lai.</span></span></span></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_2405.webp"/></span></span></span></p>
<p><span><span><span>Dấu mốc vinh quang tuổi 18 càng trở nên thiêng liêng và tự hào hơn bao giờ hết khi tập thể Công ty đón nhận một niềm vui lớn mang tầm quốc gia. Hòa trong niềm hân hoan chiến thắng, toàn thể cán bộ, nhân viên vô cùng vinh dự và xúc động khi đồng chí Nguyễn Thái Hưng – Tổng Giám đốc Công ty Cổ phần Xi măng Cẩm Phả đã xuất sắc được Chủ tịch nước trao tặng Huân chương Lao động hạng Ba. Phần thưởng cao quý của Đảng và Nhà nước trao tặng chính là sự ghi nhận xứng đáng cho tâm huyết cháy bỏng, tầm nhìn chiến lược và những cống hiến vĩ đại của cá nhân người thuyền trưởng đối với sự đứng vững và vươn mình mạnh mẽ của doanh nghiệp. Vinh quang này không chỉ thuộc về cá nhân đồng chí Tổng Giám đốc, mà còn là niềm kiêu hãnh chung của toàn thể đại gia đình Xi măng Cẩm Phả. Đây là nguồn động lực tinh thần to lớn, thôi thúc tập thể tiếp tục đoàn kết, không ngừng đổi mới sáng tạo, vững vàng tiến công vào tương lai.</span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/z7903541785909_c00f9bd045deb4a1cd07a80ae3d68df2.webp"/></p>
<p><span><span><span>18 năm – một hành trình đầy thử thách nhưng cũng đầy vinh quang, được dệt nên từ mồ hôi, bản lĩnh và khát vọng cháy bỏng của các thế hệ con người Xi măng Cẩm Phả. Phát huy truyền thống thắp lửa anh hùng, tập thể CBCNV Xi măng Cẩm Phả hạ quyết tâm tiếp tục chinh phục những đỉnh cao mới, xây dựng Công ty ngày càng phát triển hùng mạnh, khẳng định vị thế vững chắc trên thị trường và đóng góp to lớn hơn nữa vào sự phồn vinh kinh tế - xã hội của đất nước.</span></span></span></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/18 năm/IMG_3123 (2).webp"/></span></span></span></p>
<p><span><span><span><b>Xi măng Cẩm Phả: 18 năm – Nỗ lực không ngừng, Kiến tạo tương lai!</b></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/IMG_3123 (2).webp",
    date: "5 Tháng 6, 2026",
    author: "admin"
  },
  {
    id: 54,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả sơ kết công tác Quý I năm 2026: Nỗ lực vượt khó - Khẳng định vị thế",
    description: "Ngày 31/03/2026 , tại trụ sở chính Công ty Cổ phần Xi măng Cẩm Phả, Hội nghị sơ kết công tác sản xuất kinh doanh Quý I và triển khai nhiệm vụ Quý II năm 2026 đã được tổ chức trong không khí nghiêm túc, khẩn trương với sự tham dự của Ban Lãnh đạo Công ty, cán bộ chủ chốt cùng đại diện CBCNV các đơn vị và và điểm cầu trực tuyến tại Chi nhánh Phía Nam.",
    content: `<p><span><span><span><span><span>Ngày 31/03/2026 , tại trụ sở chính Công ty Cổ phần Xi măng Cẩm Phả, Hội nghị sơ kết công tác sản xuất kinh doanh Quý I và triển khai nhiệm vụ Quý II năm 2026 đã được tổ chức trong không khí nghiêm túc, khẩn trương với sự tham dự của Ban Lãnh đạo Công ty, cán bộ chủ chốt cùng đại diện CBCNV các đơn vị và và điểm cầu trực tuyến tại Chi nhánh Phía Nam.</span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682301361860_94ef73bc591c73b82e00ba388cfb64fa.webp"/></span></span></span></span></span></p>
<p><span><span><span><span><span>Tại Hội nghị, đồng chí Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã tổng kết, đánh giá kết quả hoạt động sản xuất kinh doanh Quý I/2026, đồng thời định hướng các nhiệm vụ trọng tâm trong thời gian tới.</span></span></span></span></span></p>
<p><span><span><span><span><span>Trong bối cảnh thị trường tiếp tục đối mặt với nhiều thách thức từ dư cung và giá năng lượng tăng cao, Công ty đã chủ động điều hành sản xuất linh hoạt, đảm bảo duy trì hoạt động ổn định, an toàn và hiệu quả. Các dây chuyền sản xuất Clinker và xi măng vận hành liên tục, đồng bộ; chất lượng sản phẩm được kiểm soát chặt chẽ, đáp ứng tốt yêu cầu của thị trường. Tổng doanh thu toàn Công ty đạt 116% so với kế hoạch quý và tăng 10% so với cùng kỳ năm 2025.</span></span></span></span></span></p>
<p><span><span><span><span><span>Bên cạnh đó, Công ty tiếp tục triển khai các giải pháp tối ưu hóa chi phí sản xuất, đặc biệt trong việc sử dụng năng lượng và nguyên, nhiên liệu thay thế. Việc áp dụng các sáng kiến trong sản xuất đã góp phần giảm chi phí nguyên vật liệu sản xuất Clinker hướng tới mục tiêu phát triển bền vững, thân thiện với môi trường.</span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682301579584_92ac46eb3686ed26beaa1061d98954e6.webp"/></span></span></span></span></span></p>
<p><span><span><span><span><span>Ở lĩnh vực kinh doanh, Công ty duy trì tốt hoạt động tiêu thụ với tổng sản lượng xi măng đạt 146% kế hoạch, tăng 79% so với cùng kì năm 2025. Các sản phẩm chủ lực tiếp tục khẳng định vị thế trên thị trường. Thị trường nội địa được củng cố, đặc biệt tại khu vực Quảng Ninh, cùng với các chính sách bán hàng linh hoạt và sự hỗ trợ hiệu quả cho hệ thống phân phối thông qua việc mở mới 06 nhà phân phối, góp phần nâng cao sản lượng tiêu thụ và mở rộng thị phần.</span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682301805804_e5b287f534152b7ae74a5530518671be.webp"/></span></span></span></span></span><span><span><span><span><span>Phát biểu chỉ đạo tại Hội nghị, đồng chí Nguyễn Thái Hưng, Tổng Giám đốc Công ty đã ghi nhận và biểu dương tinh thần đoàn kết, nỗ lực vượt khó của toàn thể CBCNV trong Quý I năm 2026. Đồng chí nhấn mạnh, mặc dù còn nhiều khó khăn, tập thể Công ty vẫn giữ vững nhịp sản xuất, đảm bảo hiệu quả kinh doanh và từng bước củng cố vị thế thương hiệu trên thị trường.</span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682300222829_691464811a654f142422dd2f51c9ea44.webp"/></span></span></span></span></span><span><span><span><span><span>Ghi nhận những đóng góp tích cực, Ban Lãnh đạo Công ty đã khen thưởng 05 tập thể và 14  cá nhân có thành tích xuất sắc trong thực hiện nhiệm vụ Quý I năm 2026. Đây là sự động viên kịp thời, khích lệ tinh thần làm việc trách nhiệm, sáng tạo của người lao động trong toàn Công ty.</span></span></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682299108673_1672ca705e5c2950725bb2f905cd669e.webp"/><span>Bước sang Quý II năm 2026, Ban Lãnh đạo Công ty yêu cầu các đơn vị tập trung triển khai đồng bộ các nhiệm vụ trọng tâm, trong đó ưu tiên hàng đầu là huy động tối đa nguồn lực phục vụ công tác sửa chữa lớn năm 2026, đảm bảo tuyệt đối an toàn, chất lượng và tiến độ theo kế hoạch. Đồng thời, đẩy mạnh triển khai các giải pháp tối ưu chi phí sản xuất Clinker, xi măng; thực hành tiết kiệm, phấn đấu giảm tối đa 3% chi phí mua sắm.</span></p>
<p><span><span><span><span><span>Bên cạnh đó, các đơn vị cần chú trọng đảm bảo cân đối dòng tiền phục vụ hoạt động sản xuất kinh doanh; chủ động tối ưu nguồn cung ứng nguyên, nhiên, vật liệu đầu vào thông qua các phương thức linh hoạt, trong đó có hình thức hàng đổi hàng, góp phần nâng cao hiệu quả sử dụng nguồn lực và ổn định hoạt động sản xuất của Công ty.</span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/sơ kết QI.2026/z7682298399439_70225ccede47021f626d8b6a221944e6.webp"/></span></span></span></span></span><span><span><span><span><span>Hội nghị khép lại trong không khí đồng thuận và quyết tâm cao. Với tinh thần “Sát việc - Hiệu quả - Bền vững”, cùng tinh thần đoàn kết và chủ động đổi mới, tập thể CBCNV Công ty Cổ phần Xi măng Cẩm Phả quyết tâm chung sức – đồng lòng – bứt tốc hoàn thành tốt các mục tiêu Quý II, tạo đà thực hiện thắng lợi kế hoạch năm 2026.</span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/z7682301361860_94ef73bc591c73b82e00ba388cfb64fa.webp",
    date: "2 Tháng 4, 2026",
    author: "admin"
  },
  {
    id: 53,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức Hội nghị Người lao động năm 2026 với tinh thần đổi mới – đồng hành – phát triển bền vững",
    description: "Ngày 25/03/2026, tại trụ sở Nhà máy chính, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị Đại biểu Người lao động năm 2026 với sự tham dự của các đại biểu đại diện cho toàn thể cán bộ, công nhân viên trong Công ty.",
    content: `<p>Ngày 25/03/2026, tại trụ sở Nhà máy chính, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị Đại biểu Người lao động năm 2026 với sự tham dự của các đại biểu đại diện cho toàn thể cán bộ, công nhân viên trong Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Hội nghị người lao động/z7656350208252_9e5baae446332625dc9dc4e6a0e47d0e (1).webp"/></p>

<p>Tham dự Hội nghị còn có sự hiện diện của các khách mời: Đại tá Nguyễn Trọng Tiến – đại diện Ban Công đoàn Quốc phòng; Đại úy Đoàn Văn Hiếu – đại diện Cơ quan Chính trị Tập đoàn, cùng các đồng chí lãnh đạo, cán bộ chủ chốt trong Công ty.</p>

<p>Hội nghị là diễn đàn quan trọng nhằm phát huy quyền dân chủ của người lao động, tạo điều kiện để người lao động trực tiếp tham gia đóng góp ý kiến, đề xuất giải pháp, đồng thời cùng Ban lãnh đạo đánh giá kết quả hoạt động sản xuất kinh doanh năm 2025 và định hướng nhiệm vụ trọng tâm trong năm 2026.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Hội nghị người lao động/z7656350165148_693d2b631344108a5dfeb32ece2871da (1).webp"/></p>
<p>Phát biểu chỉ đạo tại Hội nghị, đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã ghi nhận và biểu dương tinh thần đoàn kết, nỗ lực vượt khó của tập thể CBCNV trong thời gian qua. Đồng chí nhấn mạnh, trong bối cảnh thị trường còn nhiều biến động, Công ty cần tiếp tục phát huy nội lực, nâng cao năng lực quản trị, đổi mới tư duy và linh hoạt trong điều hành để thích ứng hiệu quả, tạo đà tăng trưởng bền vững.</p>

<p>Tổng Giám đốc khẳng định mỗi người lao động chính là một mắt xích quan trọng trong chuỗi giá trị của Công ty. Năm 2026 sẽ là năm bản lề để Xi măng Cẩm Phả đẩy mạnh chuyển đổi, nâng cao hiệu quả sản xuất kinh doanh, đồng thời tiếp tục cải thiện môi trường làm việc, đảm bảo quyền lợi và đời sống cho người lao động.</p>

<p>Tại Hội nghị, các đại biểu đã được nghe báo cáo kết quả sản xuất kinh doanh năm 2025, phương hướng nhiệm vụ năm 2026; báo cáo tình hình thực hiện chế độ chính sách đối với người lao động; hoạt động công đoàn; kết quả giám sát của Ban Thanh tra nhân dân.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Hội nghị người lao động/z7656350254953_a10ce9c143b7c88c4cc3f3de458721b2 (1).webp"/></p>

<p>Đặc biệt, Hội nghị đã dành thời gian để đối thoại trực tiếp giữa lãnh đạo Công ty và người lao động. Nhiều ý kiến, kiến nghị xoay quanh các nội dung như tiền lương, thu nhập, điều kiện làm việc, an toàn lao động, chế độ phúc lợi… đã được Tổng Giám đốc và các phòng ban chức năng giải đáp cụ thể, thẳng thắn, thể hiện tinh thần cầu thị, trách nhiệm và sự đồng hành cùng người lao động.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Hội nghị người lao động/z7656350314153_a34dc4d0d626ad263afa4671bff120a5 (1).webp"/></p>

<p>Bám sát định hướng hoạt động năm 2026, Ban Thanh tra nhân dân tiếp tục tăng cường công tác giám sát việc thực hiện chủ trương, chính sách của Đảng, pháp luật của Nhà nước và các quy chế nội bộ; theo dõi việc thực hiện chế độ chính sách liên quan trực tiếp đến quyền lợi người lao động; giám sát công tác thi đua, khen thưởng, kỷ luật đảm bảo công khai, minh bạch. Đồng thời, phối hợp chặt chẽ với Công đoàn và các đơn vị liên quan trong việc tiếp nhận, giải quyết kiến nghị, phản ánh của người lao động; góp phần xây dựng môi trường làm việc an toàn, xanh, sạch, đẹp.</p>

<p>Một trong những nội dung quan trọng của Hội nghị là lễ ký kết Thỏa ước lao động tập thể năm 2026 giữa đại diện người sử dụng lao động và Ban Chấp hành Công đoàn. Đây là minh chứng rõ nét cho sự đồng thuận, hợp tác chặt chẽ giữa hai bên trong việc xây dựng quan hệ lao động hài hòa, ổn định và tiến bộ.</p>

<p>Với sự thống nhất cao, Hội nghị đã thông qua Nghị quyết Hội nghị Người lao động năm 2026, xác định rõ các mục tiêu, nhiệm vụ và giải pháp trọng tâm, thể hiện quyết tâm hoàn thành thắng lợi kế hoạch sản xuất kinh doanh, đồng thời nâng cao hơn nữa đời sống vật chất và tinh thần cho người lao động.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Hội nghị người lao động/z7656382319670_09ec646b616d6a27ffe5e2a5ff2d6121 (1).webp"/></p>

<p>Hội nghị khép lại trong không khí đoàn kết, tin tưởng và quyết tâm cao. Tinh thần đổi mới, đồng hành và phát triển sẽ tiếp tục lan tỏa mạnh mẽ trong toàn thể CBCNV, tạo nền tảng vững chắc để Xi măng Cẩm Phả vươn tới những thành công mới trong năm 2026 và các năm tiếp theo.</p>`,
    image: "https://ximangcampha.vn/storage/post/z7656350208252_9e5baae446332625dc9dc4e6a0e47d0e.webp",
    date: "25 Tháng 3, 2026",
    author: "admin"
  },
  {
    id: 52,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Trao giọt máu hồng – Lan tỏa trách nhiệm cộng đồng của Xi măng Cẩm Phả",
    description: "Sáng ngày 14/3, cán bộ, công nhân viên Công ty Cổ phần Xi măng Cẩm Phả (XMCP) đã tích cực tham gia chương trình \"Hiến máu tình nguyện – Giọt máu Xuân Hồng\" được tổ chức tại Bệnh viện Đa khoa khu vực Cẩm Phả. Đây là hoạt động ý nghĩa nhằm lan tỏa tinh thần nhân ái, sẻ chia vì cộng đồng và góp phần bổ sung nguồn máu phục vụ công tác cấp cứu, điều trị cho người bệnh.",
    content: `<p>Hưởng ứng lời kêu gọi của Ban tổ chức, đông đảo đoàn viên thanh niên và cán bộ, người lao động Xi măng Cẩm Phả đã tham gia với tinh thần trách nhiệm và nhiệt huyết. Mỗi đơn vị máu được hiến tặng không chỉ mang ý nghĩa cứu người mà còn thể hiện truyền thống tương thân tương ái, tinh thần vì cộng đồng của tập thể CBCNV Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/IMG_0434 (1).webp"/></p>

<p>Trong không khí ấm áp và đầy nhân văn của chương trình, các cán bộ, người lao động Xi măng Cẩm Phả đã nghiêm túc thực hiện các bước kiểm tra sức khỏe, xét nghiệm và hiến máu theo đúng quy trình của ngành y tế. Những giọt máu hồng trao đi chính là thông điệp của sự sẻ chia, là nghĩa cử cao đẹp góp phần mang lại cơ hội sống cho nhiều bệnh nhân đang cần được truyền máu.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/uploads/ckfinder/images/IMG_0434 (2)(1).jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/IMG_0453 (1).webp"/></p>

<p>Hoạt động hiến máu tình nguyện đã trở thành một trong những phong trào thường xuyên được <strong>Xi măng Cẩm Phả</strong> tích cực hưởng ứng. Thông qua chương trình, Công ty tiếp tục khẳng định vai trò và trách nhiệm xã hội của doanh nghiệp, đồng thời lan tỏa những giá trị nhân văn tốt đẹp tới cộng đồng và xã hội.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/uploads/ckfinder/images/IMG_0453 (1).jpg"/>Trong thời gian tới, Xi măng Cẩm Phả sẽ tiếp tục đồng hành cùng các hoạt động an sinh xã hội, góp phần xây dựng hình ảnh doanh nghiệp <strong>trách nhiệm – nhân văn – vì cộng đồng</strong>.</p>`,
    image: "https://ximangcampha.vn/storage/post/a6edfc12a0892ed77798.webp",
    date: "15 Tháng 3, 2026",
    author: "admin"
  },
  {
    id: 51,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Tri ân những \"bông hoa\" Xi măng Cẩm Phả nhân ngày Quốc tế Phụ nữ 8/3",
    description: "Nhân dịp kỷ niệm Ngày Quốc tế Phụ nữ 8/3, đại diện Ban Lãnh đạo Công ty Cổ phần Xi măng Cẩm Phả cùng Hội Phụ nữ Công ty đã tổ chức hoạt động thăm hỏi, chúc mừng và tặng quà nữ cán bộ, công nhân viên tại các phòng ban, phân xưởng trong toàn Công ty.",
    content: `<p>Nhân dịp kỷ niệm ngày quốc tế phụ nữ 8/3, đại diện Ban Lãnh đạo Công ty Cổ phần Xi măng Cẩm Phả cùng hội phụ nữ công ty đã tổ chức hoạt động thăm hỏi, chúc mừng và tặng quà nữ cán bộ, công nhân viên tại các phòng ban, phân xưởng trong toàn công ty.</p>

<p>Trong không khí ấm áp và thân tình, đoàn công tác đã trực tiếp đến từng đơn vị để gửi những lời chúc tốt đẹp cùng những phần quà ý nghĩa tới các chị em phụ nữ đang công tác tại xi măng cẩm phả. Hoạt động thể hiện sự quan tâm, trân trọng của ban lãnh đạo và các tổ chức đoàn thể đối với những đóng góp quan trọng của đội ngũ lao động nữ trong quá trình xây dựng và phát triển công ty.</p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/IMG_0256 (1) (2).webp"/></p>

<p>Không chỉ tại trụ sở chính, những lời chúc mừng và sự tri ân cũng được gửi tới các nữ cán bộ, công nhân viên đang công tác tại chi nhánh phía nam – những người luôn nỗ lực, trách nhiệm trong công việc, góp phần mở rộng thị trường và nâng cao vị thế thương hiệu xi măng cẩm phả tại nhiều khu vực.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/9ce5e336d7c2599c00d3 (2) (2).webp"/></p>

<p>Hiện nay, nữ cán bộ, công nhân viên của xi măng cẩm phả đang đảm nhiệm nhiều vị trí khác nhau, từ khối văn phòng đến các bộ phận sản xuất, kinh doanh. Dù ở bất kỳ vị trí nào, các chị em đều luôn tận tâm, trách nhiệm, đóng góp tích cực vào hoạt động sản xuất kinh doanh cũng như sự phát triển bền vững của công ty.</p>

<p>Hoạt động chúc mừng ngày 8/3 là dịp để xi măng cẩm phả bày tỏ sự trân trọng và tri ân đối với những đóng góp thầm lặng nhưng đầy ý nghĩa của các nữ cán bộ, công nhân viên – những “bông hoa” luôn tỏa hương trong đại gia đình xi măng cẩm phả. Đồng thời, đây cũng là nguồn động viên để các chị em tiếp tục phát huy năng lực, sự sáng tạo và tinh thần trách nhiệm, cùng tập thể công ty hoàn thành tốt các mục tiêu, nhiệm vụ trong thời gian tới.</p>

<p>Thông qua hoạt động ý nghĩa này, xi măng cẩm phả tiếp tục khẳng định sự quan tâm tới đời sống tinh thần của người lao động, góp phần xây dựng môi trường làm việc đoàn kết, nhân văn và gắn bó.</p>`,
    image: "https://ximangcampha.vn/storage/post/ce24482cdab654e80da7 (1).webp",
    date: "9 Tháng 3, 2026",
    author: "admin"
  },
  {
    id: 50,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả đón Xuân Bính Ngọ 2026: Giữ vững nhịp sản xuất – Sẵn sàng bứt phá",
    description: "Trong thời khắc thiêng liêng chuyển giao giữa năm cũ và năm mới, khi mọi nhà sum họp đón Giao thừa, tại các đơn vị của Xi măng Cẩm Phả, nhịp sản xuất vẫn được duy trì ổn định, liên tục. Vào đêm 16/02 rạng sáng 17/02/2026 (tức đêm Giao thừa Xuân Bính Ngọ), Ban lãnh đạo Công ty cùng Trưởng các phòng, ban đã có mặt tại Nhà máy chính để cùng cán bộ, công nhân viên đón thời khắc bước sang năm mới.",
    content: `<p><span><span><span><span><span><span>Trong thời khắc thiêng liêng chuyển giao giữa năm cũ và năm mới, khi mọi nhà sum họp đón Giao thừa, tại các đơn vị của Xi măng Cẩm Phả, nhịp sản xuất vẫn được duy trì ổn định, liên tục. Vào đêm 16/02 rạng sáng 17/02/2026 (tức đêm Giao thừa Xuân Bính Ngọ), Ban lãnh đạo Công ty cùng Trưởng các phòng, ban đã có mặt tại Nhà máy chính để cùng cán bộ, công nhân viên đón thời khắc bước sang năm mới.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image1.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image2.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Giữa ánh đèn rực sáng của dây chuyền sản xuất và âm thanh nhịp nhàng của thiết bị vận hành, lãnh đạo Công ty đã trực tiếp đến từng vị trí làm việc, thăm hỏi, động viên và gửi lời chúc Tết tới CBCNV đang thực hiện nhiệm vụ trực Tết. Những lời chúc đầu xuân, những cái bắt tay ấm áp và sự quan tâm kịp thời đã tiếp thêm động lực cho người lao động, đặc biệt là những bộ phận phải làm việc xuyên đêm để bảo đảm sản xuất an toàn, thông suốt. Hình ảnh lãnh đạo sát cánh cùng người lao động trong thời khắc Giao thừa đã thể hiện tinh thần trách nhiệm, sự sẻ chia và quyết tâm giữ vững nhịp sản xuất ngay từ những giờ phút đầu tiên của năm mới.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Rạng sáng ngày 17/02/2026 (mùng 1 Tết), những chuyến xe chở sản phẩm Xi măng Cẩm Phả đầu tiên của năm Bính Ngọ đã lăn bánh rời Nhà máy. Việc xuất những đơn hàng ngay trong ngày đầu xuân mang ý nghĩa đặc biệt, không chỉ đánh dấu sự khởi đầu thuận lợi mà còn khẳng định sự chủ động trong công tác điều hành sản xuất – tiêu thụ. Những chuyến xe đầu năm mang theo niềm tin, kỳ vọng và quyết tâm của tập thể Công ty về một năm mới tăng trưởng, hiệu quả và bền vững hơn.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image7.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Không chỉ tại Nhà máy chính, <strong>Chi nhánh phía Nam cũng duy trì hoạt động xuất hàng xuyên Tết</strong><b>,</b> bảo đảm nguồn cung ổn định cho hệ thống phân phối và các công trình đang thi công. Sự phối hợp nhịp nhàng giữa các đơn vị đã giúp hoạt động sản xuất – tiêu thụ được duy trì thông suốt trong những ngày nghỉ lễ, tạo đà tăng trưởng ngay từ những ngày đầu năm mới.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image8.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image9.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image10.webp"/></span></span></span></span></span></span></p>

<p><span><span><span>Sau kỳ nghỉ Tết Nguyên đán, sáng ngày 23/02/2026, toàn thể cán bộ, công nhân viên Công ty đã trở lại làm việc với tinh thần khẩn trương, phấn khởi và quyết tâm cao. Tại Nhà máy chính, buổi gặp mặt đầu xuân được tổ chức trang trọng và kết nối trực tuyến với Chi nhánh phía Nam qua cầu truyền hình, tạo không khí giao lưu, gắn kết giữa các đơn vị ngay trong ngày làm việc đầu tiên của năm mới.</span></span></span></p>
<p><span><span><span>Trong buổi gặp mặt, Tổng Giám đốc Nguyễn Thái Hưng đã gửi lời chúc mừng năm mới tới toàn thể CBCNV tại cả hai đầu cầu, ghi nhận và biểu dương tinh thần trách nhiệm của các đơn vị duy trì sản xuất, xuất hàng xuyên Tết. Tổng Giám đốc nhấn mạnh, năm 2026 đặt ra nhiều mục tiêu quan trọng, đòi hỏi toàn hệ thống tiếp tục phát huy tinh thần đoàn kết, chủ động, nâng cao hiệu quả quản trị, tối ưu chi phí, mở rộng thị trường và giữ vững nhịp tăng trưởng ngay từ những tháng đầu năm.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image11.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image12.webp"/></span></span></span></p>

<p><span><span><span><span><span><span>Ngay sau buổi gặp mặt, Công ty đã đồng loạt phát động phong trào <strong>“Tết trồng cây đời đời nhớ ơn Bác Hồ”</strong> tại Nhà máy chính và Chi nhánh phía Nam. Hoạt động diễn ra trong không khí sôi nổi, hưởng ứng lời dạy của Chủ tịch Hồ Chí Minh về trồng cây, bảo vệ môi trường. Những hàng cây xanh được trồng trong những ngày đầu xuân không chỉ góp phần xây dựng môi trường làm việc xanh – sạch – đẹp tại cả hai đơn vị mà còn tượng trưng cho sự sinh sôi, phát triển bền vững của doanh nghiệp.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image13.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image14.webp"/></span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image15new.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image16.webp"/></p>

<p><span><span><span><span><span><span>Đặc biệt, kết quả sản xuất kinh doanh tháng 02/2026 đã ghi nhận những tín hiệu tăng trưởng ấn tượng. Sản lượng tiêu thụ toàn Công ty đạt <strong>160% so với kế hoạch</strong>, tăng <strong>136% so với cùng kỳ năm 2025</strong>. Trong đó, Nhà máy chính đạt <strong>128% kế hoạch</strong>, Chi nhánh phía Nam đạt <strong>185% kế hoạch</strong>, cho thấy sự chủ động, linh hoạt trong tổ chức sản xuất và tiêu thụ ngay từ đầu năm. Doanh thu tháng 02 đạt <strong>110% kế hoạch</strong>, lợi nhuận thực hiện <strong>vượt kế hoạch 28 tỷ đồng</strong><b>,</b> tạo nền tảng vững chắc cho việc hoàn thành mục tiêu quý I và cả năm 2026.</span></span></span></span></span></span></p>
<p><span><span><span>Với khí thế khởi động mạnh mẽ, tinh thần trách nhiệm xuyên suốt từ đêm Giao thừa đến những ngày làm việc đầu xuân, cùng sự đồng lòng của toàn thể cán bộ, công nhân viên tại cả Nhà máy chính và Chi nhánh phía Nam, Xi măng Cẩm Phả bước vào Xuân Bính Ngọ 2026 với niềm tin vững chắc, sẵn sàng bứt phá, hoàn thành thắng lợi các mục tiêu sản xuất kinh doanh và tiếp tục khẳng định vị thế trên thị trường.</span></span></span></p>

<p><i><span><span><span>(Một số hình ảnh trong buổi lễ trồng cây Xuân Bính Ngọ) </span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image17.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image18.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image19.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image20.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image21.webp"/></span></span></span></i></p>


<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image22n.webp"/></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image23.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image24.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image25.webp"/></span></span></span></i></p>

<p><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Bài viết Xuân Bính Ngọ 2026-NMC+ CNPN/image26.webp"/></span></span></span></i></p>`,
    image: "https://ximangcampha.vn/storage/post/image1.webp",
    date: "26 Tháng 2, 2026",
    author: "admin"
  },
  {
    id: 49,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ",
    description: "Trong không khí chuẩn bị đón Tết Nguyên đán Bính Ngọ 2026, Công ty Cổ phần Xi măng Cẩm Phả đã ghi nhận những kết quả tích cực trong hoạt động sản xuất kinh doanh tháng đầu năm, đồng thời triển khai nhiều chương trình thiết thực nhằm chăm lo đời sống người lao động và tri ân khách hàng, đối tác đã đồng hành cùng Công ty trong suốt thời gian qua.",
    content: `<p><span><span><span><span><span><span>Trong không khí chuẩn bị đón Tết Nguyên đán Bính Ngọ 2026, Công ty Cổ phần Xi măng Cẩm Phả đã ghi nhận những kết quả tích cực trong hoạt động sản xuất kinh doanh tháng đầu năm, đồng thời triển khai nhiều chương trình thiết thực nhằm chăm lo đời sống người lao động và tri ân khách hàng, đối tác đã đồng hành cùng Công ty trong suốt thời gian qua.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Về kết quả sản xuất kinh doanh, tháng 1/2026, sản lượng tiêu thụ của Xi măng Cẩm Phả đạt 127% so với kế hoạch, tăng 132% so với cùng kỳ năm 2025. Trong đó, Nhà máy chính đạt 139% kế hoạch, Chi nhánh phía Nam đạt 118% kế hoạch, cho thấy sự chủ động và linh hoạt trong công tác tổ chức sản xuất, tiêu thụ ngay từ những ngày đầu năm. Doanh thu tháng 1 đạt 107% kế hoạch, tăng 4% so với cùng kỳ năm 2025; lợi nhuận vượt kế hoạch 29 tỷ đồng. Kết quả này cho thấy sự chủ động trong điều hành sản xuất, bám sát thị trường và nỗ lực của tập thể cán bộ, công nhân viên ngay từ những ngày đầu năm.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Tiếp nối đà tăng trưởng tích cực, kế hoạch sản xuất kinh doanh tháng 02/2026 được xây dựng với tinh thần quyết tâm cao. Dự kiến, doanh thu đạt 109% kế hoạch, tạo nền tảng thuận lợi để Công ty hoàn thành các mục tiêu trong quý I và cả năm 2026.</span></span></span></span></span></span></p>
<p><span><span><span>Bên cạnh việc tập trung cho hoạt động sản xuất kinh doanh, công tác chăm lo đời sống cho cán bộ, công nhân viên (CBCNV) luôn được Công ty đặc biệt quan tâm, nhất là trong dịp Tết đến, Xuân về. Nhân dịp năm mới 2026 và đón Xuân Bính Ngọ, Công ty đã chi trả đầy đủ lương, thưởng Tết cho người lao động, đồng thời triển khai nhiều chương trình ý nghĩa nhằm hỗ trợ CBCNV có một cái Tết yên tâm, ấm áp và trọn vẹn.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic.webp"/></span></span></span></p>


<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic11.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic12.webp"/></p>

<p><span><span><span><span><span><span>Nổi bật trong chuỗi hoạt động này là việc Xi măng Cẩm Phả phối hợp cùng Honda tổ chức chương trình bảo dưỡng, kiểm tra phương tiện cho CBCNV với chủ đề <i>“Đồng hành trên những chặng đường”</i>. Chương trình không chỉ góp phần đảm bảo an toàn cho người lao động trong quá trình di chuyển mà còn thể hiện sự quan tâm thiết thực của Công ty đối với đời sống thường nhật của CBCNV. Song song với đó, Công ty cũng tổ chức xe đưa CBCNV về quê đón Tết, tạo điều kiện thuận lợi để người lao động được sum họp cùng gia đình sau một năm làm việc, cống hiến.</span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic1.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic2.webp"/></p>

<p><span><span><span><span><span><span>Nhân dịp Tết Nguyên đán, 598 suất quà Tết với tổng trị giá hơn 400 triệu đồng, bao gồm các mặt hàng nhu yếu phẩm và hàng hóa thiết yếu, đã được Ban Chấp hành Công đoàn Công ty trao tận tay CBCNV tại Nhà máy chính và Chi nhánh phía Nam. Đây là hoạt động thường niên mang đậm nét đẹp văn hóa của con người Xi măng Cẩm Phả, thể hiện sự tri ân và ghi nhận những nỗ lực, đóng góp của người lao động trong suốt một năm qua, đồng thời tiếp thêm động lực để CBCNV yên tâm gắn bó, đồng hành cùng Công ty. Bên cạnh đó, bữa cơm tất niên dành cho CBCNV tại Nhà máy cũng được tổ chức trang trọng vào trưa ngày 09/02/2026, góp phần tạo không khí gắn kết, ấm cúng trước thềm năm mới.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Thể hiện sự quan tâm, đồng hành cùng khách hàng, trong dịp Tết Nguyên đán Bính Ngọ 2026, lãnh đạo và cán bộ Công ty Cổ phần Xi măng Cẩm Phả đã triển khai các hoạt động tri ân dành cho hệ thống nhà phân phối trên toàn quốc. Thông qua việc trao tặng những phần quà Tết ý nghĩa, Công ty gửi lời cảm ơn chân thành tới các nhà phân phối đã luôn tin tưởng, hợp tác chặt chẽ và đồng hành cùng Xi măng Cẩm Phả trong suốt thời gian qua. Hoạt động này không chỉ góp phần tăng cường sự gắn kết trong hệ thống phân phối, mà còn thể hiện cam kết hợp tác lâu dài, cùng hướng tới mục tiêu phát triển ổn định và bền vững trong năm mới. </span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic4.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic5.webp"/></p>
































<p><span><span><span><span><span><span>Tiếp nối tinh thần quan tâm, chăm sóc khách hàng, Xi măng Cẩm Phả cũng tổ chức các hoạt động thăm hỏi, chúc Tết và trao quà tới từng đại lý, trạm trộn tại nhiều khu vực. Những phần quà Tết được trao tận tay như lời tri ân đối với sự đồng hành, ủng hộ và đóng góp của các đại lý, trạm trộn trong việc đưa sản phẩm Xi măng Cẩm Phả đến với công trình và người tiêu dùng. Qua đó, Công ty tiếp tục thắt chặt mối quan hệ hợp tác gắn bó, tăng cường sự tin cậy và cùng các đơn vị trong hệ thống phân phối bước vào năm mới với tinh thần đồng hành và quyết tâm cao. </span></span></span></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/XMCP khép lại tháng đầu năm 2026 với kết quả kinh doanh tích cực đồng thời triển khai nhiều hoạt động chăm lo đời sống CBCNV và tri ân đối tác, khách hàng nhân dịp Tết Nguyên đán Bính Ngọ/pic9.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><span><span><span>Những kết quả đạt được trong tháng đầu năm cùng chuỗi hoạt động ý nghĩa nhân dịp Tết Nguyên đán Bính Ngọ 2026 đã thể hiện rõ định hướng phát triển hài hòa của Xi măng Cẩm Phả: vừa tập trung nâng cao hiệu quả sản xuất kinh doanh, vừa chú trọng chăm lo đời sống người lao động, đồng thời củng cố mối quan hệ hợp tác gắn bó, bền chặt với các đối tác, nhà phân phối và khách hàng, tạo nền tảng vững chắc cho chặng đường phát triển tiếp theo.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/pic4.webp",
    date: "12 Tháng 2, 2026",
    author: "admin"
  },
  {
    id: 48,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2025",
    description: "Ngày 21–23/01/2026, tại Khách sạn Pullman Đà Nẵng, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị tổng kết, tri ân khách hàng năm 2025 với sự tham dự của các Quý đối tác, Quý khách hàng, Nhà Phân phối và Nhà đầu tư tiêu biểu của Xi măng Cẩm Phả đến từ khu vực miền Bắc, miền Trung và miền Nam.",
    content: `<p><span><span><span><span><span><span>Ngày 21–23/01/2026, tại Khách sạn Pullman Đà Nẵng, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị tổng kết, tri ân khách hàng năm 2025 với sự tham dự của các Quý đối tác, Quý khách hàng, Nhà Phân phối và Nhà đầu tư tiêu biểu của Xi măng Cẩm Phả đến từ khu vực miền Bắc, miền Trung và miền Nam.</span></span></span></span></span></span></p>

<img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2025/xm1.webp"/>


<p><span><span><span><span><span><span>Tham dự Hội nghị có Ban Tổng Giám đốc Công ty, lãnh đạo các đơn vị trực thuộc, cùng đại diện các tổ chức đoàn thể trong Công ty và hơn 120 Quý đối tác, khách hàng. Hội nghị là dịp để Xi măng Cẩm Phả nhìn lại chặng đường hợp tác trong thời gian qua; bày tỏ sự tri ân sâu sắc tới Quý khách hàng, Quý đối tác, Nhà phân phối và các Nhà đầu tư đã luôn tin tưởng, đồng hành cùng Công ty; đồng thời tăng cường kết nối, chia sẻ định hướng phát triển và chiến lược hợp tác trong giai đoạn tiếp theo.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2025/xm2.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Năm 2025 tiếp tục được đánh giá là một năm nhiều biến động khi thị trường xi măng phục hồi chậm, tình trạng cung vượt cầu kéo dài; giá nguyên, nhiên liệu và năng lượng biến động mạnh; áp lực cạnh tranh gay gắt cả trong nước và xuất khẩu. Trong bối cảnh đó, việc duy trì sản xuất ổn định đã khó, nâng cao hiệu quả lại càng khó hơn. Tuy nhiên, vượt lên những thách thức, Xi măng Cẩm Phả đã kiên định mục tiêu, giữ vững nhịp độ sản xuất và từng bước bứt phá. Tổng doanh thu tăng trưởng 36%; Lợi nhuận tăng 50% so với năm 2024, h</span></span></span>iệu quả SXKD được cải thiện rõ rệt<span><span><span>; sản lượng tiêu thụ xi măng và clinker </span></span></span>đều vượt kế hoạch<span><span><span>, nhiều chỉ tiêu tăng trưởng ở mức cao nhất trong nhiều năm trở lại đây; Tại Hội nghị, đồng chí <strong>Nguyễn Thái Hưng – Tổng Giám đốc Công ty</strong> tiếp tục bày tỏ lời cảm ơn sâu sắc tới Quý khách hàng, Quý đối tác, Nhà phân phối và các Nhà đầu tư đã luôn tin tưởng, đồng hành cùng Công ty.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2025/xm3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span>Hội nghị đã dành thời gian tổng kết tình hình sản xuất kinh doanh của Xi măng Cẩm Phả trong năm 2025, đồng thời tôn vinh các Nhà phân phối, Quý đối tác tiêu biểu. Cũng tại Hội nghị, Công ty đã trao tặng những phần quà ý nghĩa như lời tri ân sâu sắc trước những đóng góp thiết thực của Quý khách hàng, Quý đối tác, Nhà phân phối và Nhà đầu tư, cùng hướng tới một năm 2026 <strong>Đoàn kết – Phát triển – Vươn mình cùng Đất nước</strong>.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2026/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2025/xm4.webp"/></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/xm1.webp",
    date: "28 Tháng 1, 2026",
    author: "admin"
  },
  {
    id: 47,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026",
    description: "Trong những ngày cuối tháng 12/2025, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức chuỗi hội nghị quan trọng nhằm đánh giá kết quả thực hiện nhiệm vụ năm 2025 và thống nhất định hướng, mục tiêu thực hiện nhiệm vụ năm 2026, tạo cơ sở chính trị và quản trị cho hoạt động sản xuất – kinh doanh của Công ty trong thời gian tới.",
    content: `<p><span><span><span><span><span><span>Trong những ngày cuối tháng 12/2025, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức chuỗi hội nghị quan trọng nhằm đánh giá kết quả thực hiện nhiệm vụ năm 2025 và thống nhất định hướng, mục tiêu thực hiện nhiệm vụ năm 2026, tạo cơ sở chính trị và quản trị cho hoạt động sản xuất – kinh doanh của Công ty trong thời gian tới.</span></span></span></span></span></span></p>

<p><span><span><span><b><span><span><span>Hội nghị Đảng ủy XMCP: Ra nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026</span></span></span></b></span></span></span></p>
<p><span><span><span><span><span><span>Chiều ngày 24/12/2025, Công ty tổ chức Hội nghị Đảng ủy ra Nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026. Hội nghị diễn ra trong không khí nghiêm túc, dân chủ, trách nhiệm, với sự tham dự và chỉ đạo của đồng chí Đào Xuân Vũ – Ủy viên Ban Thường vụ Đảng ủy, Phó Tổng Giám đốc Tập đoàn, Chủ tịch Hội đồng Quản trị Công ty, cùng đại diện các ban chuyên môn của Tập đoàn; Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc Công ty, các đồng chí trong Đảng ủy và lãnh đạo các đơn vị trực thuộc. </span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/1.webp"/></p>

<p><span><span><span><span><span><span>Tại Hội nghị, Đảng ủy đã thông qua Dự thảo Nghị quyết lãnh đạo năm 2026, tập trung đánh giá toàn diện kết quả thực hiện nhiệm vụ năm 2025 trong bối cảnh thị trường xi măng còn nhiều khó khăn. Dưới sự lãnh đạo, chỉ đạo quyết liệt của Đảng ủy, hoạt động sản xuất – kinh doanh của Công ty cơ bản được duy trì ổn định; nhiều chỉ tiêu chủ yếu có chuyển biến tích cực, doanh thu đạt 2.389 tỷ đồng, dòng tiền đạt </span></span></span><span><span><span><span><span>61,6</span></span></span></span></span><span><span><span> tỷ đồng, năng suất lao động và thu nhập người lao động tiếp tục được cải thiện.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Hội nghị đã thảo luận, cho ý kiến vào Dự thảo Nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026, tập trung làm rõ các nhiệm vụ trọng tâm và giải pháp chủ yếu trong thời gian tới. Trên cơ sở bám sát thực tiễn hoạt động của Công ty, Nghị quyết xác định tiếp tục giữ vững ổn định sản xuất, nâng cao hiệu quả hoạt động, tăng cường công tác quản trị tài chính, tối ưu chi phí, bảo đảm dòng tiền cho sản xuất – kinh doanh; đồng thời đẩy mạnh cải tiến kỹ thuật, chuyển đổi số, nâng cao năng lực quản lý và điều hành tại các đơn vị.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Phát biểu chỉ đạo tại Hội nghị, đồng chí Đào Xuân Vũ ghi nhận và đánh giá cao tinh thần đoàn kết, trách nhiệm và nỗ lực vượt khó của tập thể cán bộ, đảng viên và người lao động Công ty trong năm 2025; đồng thời yêu cầu Đảng ủy tiếp tục phát huy vai trò hạt nhân lãnh đạo, bám sát nhiệm vụ chính trị và nhiệm vụ sản xuất – kinh doanh, chủ động, linh hoạt trong chỉ đạo, điều hành, tạo sự thống nhất cao trong toàn Công ty, làm nền tảng thực hiện thắng lợi các mục tiêu, nhiệm vụ năm 2026.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/2.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Nghị quyết lãnh đạo năm 2026 xác định các mục tiêu và nhiệm vụ trọng tâm là giữ vững ổn định sản xuất, nâng cao hiệu quả, tăng cường công tác quản trị, xây dựng tổ chức Đảng trong sạch, vững mạnh, gắn chặt nhiệm vụ chính trị với hoạt động sản xuất – kinh doanh của Công ty. Hội nghị diễn ra thành công, thể hiện sự thống nhất cao và quyết tâm của toàn Đảng ủy XMCP trong việc thực hiện thắng lợi các nhiệm vụ năm 2026.</span></span></span></span></span></span></p>

<p><span><span><span><b><span><span><span><span>Hội nghị quân chính năm 2025: Tổng kết nhiệm vụ, triển khai phương hướng năm 2026</span></span></span></span></b></span></span></span></p>
<p><span><span><span><span><span><span>Chiều ngày 29/12/2025, Công ty CP Xi măng Cẩm Phả đã tổ chức Hội nghị quân chính năm 2025 nhằm tổng kết, đánh giá kết quả thực hiện nhiệm vụ năm 2025 và triển khai phương hướng, nhiệm vụ trọng tâm năm 2026.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Tại Hội nghị, Văn phòng Công ty đã trình bày Báo cáo kết quả thực hiện nhiệm vụ năm 2025 và phương hướng triển khai nhiệm vụ năm 2026. Báo cáo cho thấy Công ty duy trì vận hành an toàn, ổn định hệ thống thiết bị và dây chuyền sản xuất; sản lượng clinker năm 2025 đạt 1.929.145 tấn, sản lượng xi măng sản xuất đạt 1.747.266 tấn, sản lượng xi măng tiêu thụ đạt 1.863.007 tấn. Doanh thu, ebitda và dòng tiền đều vượt kế hoạch đồng thời tăng trưởng mạnh so với cùng kỳ, đặc biệt ebitda và dòng tiền cải thiện đột biến. Công tác quản trị sản xuất, kiểm soát chi phí, quản lý dòng tiền và công nợ được triển khai đồng bộ, góp phần nâng cao hiệu quả điều hành. Năng suất lao động và thu nhập người lao động tiếp tục được cải thiện, tạo tiền đề quan trọng cho việc triển khai nhiệm vụ trong năm 2026.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Phát biểu chỉ đạo tại Hội nghị, đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã ghi nhận những nỗ lực của tập thể CBCNV, đồng thời định hướng các nhiệm vụ trọng tâm trong thời gian tới, nhấn mạnh yêu cầu nâng cao hiệu quả sản xuất – kinh doanh, tăng cường kỷ luật, kỷ cương và phát huy tinh thần đoàn kết, trách nhiệm.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Bước sang năm 2026, Công ty xác định tập trung giữ vững ổn định sản xuất, tối ưu chi phí, bảo đảm an toàn và chất lượng sản phẩm; tăng cường quản trị tài chính, kiểm soát công nợ, bảo đảm dòng tiền cho hoạt động sản xuất – kinh doanh; đồng thời tiếp tục nâng cao năng suất lao động, cải thiện thu nhập và đời sống người lao động, tạo nền tảng cho sự phát triển bền vững của Công ty.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Nhằm ghi nhận và biểu dương các tập thể, cá nhân có thành tích xuất sắc trong năm 2025, Công ty đã tổ chức tổng kết phong trào thi đua và công tác khen thưởng, góp phần tạo động lực thi đua, khích lệ CBCNV tiếp tục phấn đấu hoàn thành tốt nhiệm vụ trong năm 2026. Công ty tặng danh hiệu “Tập thể Lao động tiên tiến” cho 05 tập thể, gồm 04 tập thể thuộc Nhà máy chính và 01 tập thể thuộc Chi nhánh Phía Nam, nhằm ghi nhận những đóng góp tích cực trong công tác sản xuất, quản lý và hoàn thành nhiệm vụ.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/7.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đối với cá nhân, 58 cá nhân được tặng danh hiệu “Chiến sĩ thi đua cơ sở”, trong đó có 43 cá nhân thuộc Nhà máy chính và 15 cá nhân thuộc Chi nhánh Phía Nam. Bên cạnh đó, 116 cá nhân được công nhận danh hiệu “Lao động tiên tiến”, gồm 83 cá nhân thuộc Nhà máy chính và 33 cá nhân thuộc Chi nhánh Phía Nam, thể hiện tinh thần trách nhiệm và ý thức thi đua lao động nghiêm túc trong toàn Công ty.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/8.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đặc biệt, Công ty đã khen thưởng “Tập thể Điển hình xuất sắc nhất Công ty” cho 02 tập thể, gồm Phân xưởng Cơ điện thuộc Nhà máy chính và Phòng Kinh doanh thuộc Chi nhánh Phía Nam; đồng thời tuyên dương 03 cá nhân đạt danh hiệu “Cá nhân Điển hình xuất sắc nhất Công ty”, góp phần lan tỏa phong trào thi đua và tạo động lực hoàn thành tốt nhiệm vụ trong thời gian tới.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Chuỗi hội nghị đã diễn ra nghiêm túc, thành công, thể hiện rõ sự thống nhất cao trong công tác lãnh đạo, chỉ đạo và tổ chức thực hiện nhiệm vụ. Đây là tiền đề quan trọng để Công ty CP Xi măng Cẩm Phả quyết tâm triển khai hiệu quả các mục tiêu, nhiệm vụ đã đề ra trong năm 2026.</span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Một số hình ảnh</span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/9.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/10.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/11.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/12.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả: Tổ chức Hội nghị Đảng ủy và Hội nghị quân chính, thống nhất mục tiêu thực hiện nhiệm vụ năm 2026/13.webp"/></span></span></span></i></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/so1.webp",
    date: "6 Tháng 1, 2026",
    author: "admin"
  },
  {
    id: 46,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển",
    description: "Chiều ngày 16/12/2025, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức chương trình Gặp mặt tri ân các Nhà cung cấp năm 2025 tại Nhà máy chính Công ty. Chương trình có sự tham dự của Ban Tổng Giám đốc, lãnh đạo đơn vị liên quan và hơn 40 đại diện Nhà cung cấp đã và đang đồng hành cùng Công ty trong thời gian qua.",
    content: `<p><span><span><span><span><span><span>Chiều ngày 16/12/2025, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức chương trình Gặp mặt tri ân các Nhà cung cấp năm 2025 tại Nhà máy chính Công ty. Chương trình có sự tham dự của Ban Tổng Giám đốc, lãnh đạo đơn vị liên quan và hơn 40 đại diện Nhà cung cấp đã và đang đồng hành cùng Công ty trong thời gian qua.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image1.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Phát biểu khai mạc chương trình, đồng chí Đặng Xuân Hùng - Trưởng Phòng Đầu tư và Quản lý tài sản đã giới thiệu chương trình các đại biểu, khách quý tham dự, qua đó nhấn mạnh ý nghĩa của buổi gặp mặt trong việc tăng cường kết nối và phối hợp giữa Công ty và các Nhà cung cấp. </span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image2.webp"/></p>

<p><span><span><span><span><span><span>Nối tiếp chương trình, đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã gửi lời cảm ơn chân thành tới các Nhà cung cấp vì sự đồng hành, tin tưởng và hợp tác hiệu quả trong suốt thời gian qua. Tổng Giám đốc Công ty khẳng định, sự ổn định và phát triển của Xi măng Cẩm Phả luôn gắn liền với mối quan hệ hợp tác bền chặt cùng các đối tác, nhà cung cấp.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Trong không khí cởi mở và thẳng thắn, các bên đã cùng trao đổi, thảo luận về tình hình hợp tác, chia sẻ những thuận lợi, khó khăn, đồng thời đề xuất các giải pháp nhằm nâng cao hiệu quả phối hợp trong thời gian tới. Những ý kiến đóng góp thiết thực từ phía Nhà cung cấp đã được Ban lãnh đạo Công ty lắng nghe và trao đổi, thể hiện tinh thần cởi mở và hợp tác lâu dài.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Chương trình khép lại bằng hoạt động trao quà tri ân và chụp ảnh lưu niệm cùng các Nhà cung cấp. Ban Tổng Giám đốc Công ty đã trực tiếp trao tặng quà lưu niệm tới các Nhà cung cấp. Thay mặt lãnh đạo Công ty, đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty giới thiệu ý nghĩa của món quà là bức tranh mang biểu tượng trụ sở Viettel - bức tranh thu nhỏ mô hình tòa nhà Viettel. Món quà thể hiện sự trân trọng, lời cảm ơn của Công ty đối với sự đồng hành của các đối tác, Nhà cung cấp, đồng thời gửi gắm thông điệp về tinh thần hợp tác lâu dài và phát triển bền vững.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image7.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Chương trình Gặp mặt tri ân Nhà cung cấp năm 2025 đã diễn ra trong không khí trang trọng, ấm áp và cởi mở, để lại nhiều ấn tượng tốt đẹp đối với các đại biểu tham dự. Thông qua chương trình, Công ty Cổ phần Xi măng Cẩm Phả tiếp tục khẳng định sự trân trọng đối với các đối tác, Nhà cung cấp, đồng thời thể hiện cam kết đồng hành, hợp tác lâu dài trên tinh thần tin cậy, chia sẻ và cùng phát triển trong thời gian tới.</span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Một số hình ảnh</span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image8.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image9.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image10.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image11.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image12.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả gặp mặt tri ân Nhà cung cấp năm 2025 – Thắt chặt hợp tác, đồng hành phát triển/image13.webp"/></span></span></span></i></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/imag1.webp",
    date: "19 Tháng 12, 2025",
    author: "admin"
  },
  {
    id: 45,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi",
    description: "Từ ngày 29/11 – 04/12/2025 tại Hàn Quốc, Chi nhánh Phía Nam – Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức thành công Hội nghị Tri ân Khách hàng năm 2025 với sự tham gia của 42 thành viên, đại diện cho các Nhà phân phối và khách hàng khu vực phía Nam",
    content: `<p><span><span><span><span><span><span>Từ ngày 29/11 – 04/12/2025 tại Hàn Quốc, Chi nhánh Phía Nam – Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức thành công Hội nghị Tri ân Khách hàng năm 2025 với sự tham gia của 42 thành viên, đại diện cho các Nhà phân phối và khách hàng khu vực phía Nam. Hành trình trải nghiệm từ Busan đến Seoul như một lời tri ân chân thành của Xi măng Cẩm Phả, thể hiện sự quan tâm của doanh nghiệp không chỉ trong hoạt động sản xuất kinh doanh mà còn trong việc đặt Khách hàng làm trung tâm, lắng nghe nguyện vọng, đồng hành, giao lưu và chia sẻ. Điều này góp phần xây dựng niềm tin vững chắc, củng cố cam kết gắn bó của các Nhà phân phối, tiếp tục lựa chọn đồng hành cùng Xi măng Cẩm Phả trong chặng đường tiếp theo.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/1.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/2.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Đoàn tham quan chụp ảnh lưu niệm tại Songdo Sky Park và Wine &amp; Digital Cave</span></span></span></i></span></span></span></p>

<p><span><span><span><span><span><span>Chuyến đi mang đến cho Quý Khách hàng cơ hội tham quan những địa danh nổi tiếng, khám phá văn hoá Hàn Quốc và trải nghiệm không khí mùa đông se lạnh đầy thơ mộng. Những con phố trở nên sống động với sắc màu mùa đông huyền ảo, là phông nền lý tưởng để thưởng thức các món ăn đặc trưng của “Xứ sở Kim chi” và khoác lên mình bộ trang phục truyền thống “Hanbok” đậm nét văn hoá đặc trưng.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/3.webp"/></span></span></span></span></span></span><span><span><span><i><span><span><span>Nét đẹp văn hoá trong trang phục truyền thống Hàn Quốc Hanbok</span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/4.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/5.webp"/></span></span></span></i></span></span></span></p>
<p><span><span><span><i><span><span><span>Đoàn tham quan trải nghiệm và học cách làm Kim chi</span></span></span></i></span></span></span></p>

<p><span><span><span><span><span><span>Những “bản tình ca mùa đông” cùng khoảnh khắc lãng mạn dưới sắc đỏ rực rỡ của “Cây Phong Đỏ” đã mang đến cảm xúc gần gũi, gắn kết và sự chân thành giữa các thành viên trong đoàn. Tất cả tạo nên một hành trình đầy cảm xúc và đáng nhớ.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Trong suốt những ngày tham quan tại Hàn Quốc, Quý Khách hàng đã có thật nhiều trải nghiệm thú vị và khoảnh khắc đáng trân trọng. Mỗi chuyến đi là một câu chuyện – và chúng tôi xin gửi lời cảm ơn chân thành đến Quý Nhà phân phối, Quý Khách hàng đã cùng Xi măng Cẩm Phả viết nên câu chuyện thật đẹp trong hành trình lần này.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Kính chúc Quý khách luôn giữ trọn nguồn năng lượng tích cực và tiếp tục phát triển bền vững cùng Xi măng Cẩm Phả.</span></span></span></span></span></span></p>

<p><span><span><span><b><i><span><span><span>Một số hình ảnh</span></span></span></i></b></span></span></span></p>

<p><span><span><span><b><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/7.webp"/></span></span></span></i></b></span></span></span></p>

<p><span><span><span><b><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/8.webp"/></span></span></span></i></b></span></span></span></p>

<p><span><span><span><b><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/9.webp"/></span></span></span></i></b></span></span></span></p>

<p><span><span><span><b><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/10.webp"/></span></span></span></i></b></span></span></span></p>

<p><span><span><span><b><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dấu ấn Xi măng Cẩm Phả tại xứ sở Kim Chi/11.webp"/></span></span></span></i></b></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/1.webp",
    date: "11 Tháng 12, 2025",
    author: "admin"
  },
  {
    id: 44,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc",
    description: "Chiều ngày 05/11/2025, Công ty Cổ phần Xi măng Cẩm Phả đã tổ chức Giải Pickleball mở rộng năm 2025 trong không khí tưng bừng, phấn khởi và tràn đầy năng lượng.",
    content: `<p><span><span><span>Chiều ngày <strong><span>05/11/2025</span></strong><b>, </b><strong><span>Công ty Cổ phần Xi măng Cẩm Phả</span></strong> đã tổ chức <strong><span>Giải Pickleball mở rộng năm 2025</span></strong> trong không khí tưng bừng, phấn khởi và tràn đầy năng lượng.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image1.webp"/></span></span></span></p>

<p><span><span><span>Tham dự sự kiện có đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty CP Xi măng Cẩm Phả cùng Ban Lãnh đạo Công ty; ông Tô Ngọc Hoàng – Tổng Giám đốc và các đại diện Ban Lãnh đạo Công ty CP Xi măng và Xây dựng Quảng Ninh; ông Mai Hồng Hải – Bí thư Đảng ủy, Chủ tịch HĐQT, Tổng Giám đốc cùng Ban Lãnh đạo Công ty CP Xi măng Hạ Long; ông Muhammad Yonanda – Tổng Giám đốc Công ty CP Xi măng Thăng Long. </span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image2.webp"/></span></span></span></p>

<p><span><span><span>Phát biểu khai mạc, <strong><span>đồng chí Nguyễn Thái Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty CP Xi măng Cẩm Phả </span></strong>nhấn mạnh: <em>“Giải Pickleball mở rộng năm 2025 không chỉ là sân chơi thể thao bổ ích mà còn là cơ hội để rèn luyện sức khỏe, nâng cao tinh thần đoàn kết, hợp tác và giao lưu giữa các đơn vị, góp phần xây dựng môi trường làm việc năng động, tích cực và gắn kết”.</em></span></span></span></p>
<p><span><span><span>Giải đấu mang ý nghĩa thiết thực, nhằm tạo ra một sân chơi lành mạnh và là dịp quan trọng để rèn luyện thể chất và nâng cao sức khỏe. Quan trọng hơn, giải Pickleball mở rộng năm 2025 là cơ hội để các đơn vị tham gia giao lưu, học hỏi, đồng thời nâng cao tinh thần giao lưu kinh nghiệm giữa các đơn vị. Qua đó, sự kiện góp phần tăng cường mạnh mẽ tinh thần đoàn kết, gắn bó giữa các doanh nghiệp xi măng khu vực tỉnh Quảng Ninh.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image3.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image4.webp"/></span></span></span></p>

<p><span><span><span>Với tinh thần <strong>“Đoàn kết – Trung thực – Cao thượng – Giao lưu học hỏi”</strong>, các vận động viên đã mang đến những trận đấu kịch tính, hấp dẫn, thể hiện tinh thần thể thao, bản lĩnh thi đấu và sự phối hợp nhịp nhàng giữa các đội. Mỗi pha bóng đẹp, mỗi tiếng reo hò cổ vũ đã góp phần tạo nên không khí vui tươi, sôi động và đầy nhiệt huyết.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image5.webp"/></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image6.webp"/></p>

<p><span><span><strong><span><span><span>Kết thúc giải, Ban Tổ chức đã trao thưởng cho các nội dung Đôi nam và Đôi nam nữ</span></span></span></strong><span><span>, ghi nhận sự nỗ lực, tinh thần thi đấu fair-play và những màn trình diễn ấn tượng của các vận động viên. <strong><span>Giải Pickleball mở rộng năm 2025</span></strong> đã khép lại thành công tốt đẹp, để lại nhiều cảm xúc, dấu ấn đẹp và tiếp tục khẳng định tinh thần thể thao, đoàn kết, gắn bó của <strong><span>Công ty CP Xi măng Cẩm Phả</span></strong><b>.</b></span></span></span></span></p>

<p><span><span><span><span><b><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image7.webp"/></b></span></span></span></span></p>

<p><span><span><span><span><b><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Giải Pickleball Công ty Cổ phần Xi măng Cẩm Phả mở rộng năm 2025 – Khi thể thao là cầu nối gắn kết và hợp tác trong công việc/image8.webp"/></b></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/thethao1.webp",
    date: "7 Tháng 11, 2025",
    author: "admin"
  },
  {
    id: 43,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Khát vọng – Trí tuệ – Bản lĩnh: Các tổ chức quần chúng Xi măng Cẩm Phả nhiệm kỳ 2025–2030",
    description: "Triển khai Chỉ thị số 1157-CT/ĐU, Công ty Cổ phần Xi măng Cẩm Phả (XMCP) đã tổ chức chuỗi Đại hội của \"ba tổ chức quần chúng nòng cốt\" tại đơn vị lần thứ IV, nhiệm kỳ 2025-2030, với các sự kiện: Đại hội Đoàn Cơ sở (08/10/2025), và Đại hội Đại biểu Công Đoàn cơ sở, Hội Phụ nữ (09/10/2025) đều đã diễn ra thành công tốt đẹp.",
    content: `<p><span><span><span><span><span>Triển khai Chỉ thị số 1157-CT/ĐU, Công ty Cổ phần Xi măng Cẩm Phả (XMCP) đã tổ chức chuỗi Đại hội của "<b><i>ba tổ chức quần chúng nòng cốt</i></b>" tại đơn vị lần thứ IV, nhiệm kỳ 2025-2030, với các sự kiện: Đại hội Đoàn Cơ sở (08/10/2025), và Đại hội Đại biểu Công Đoàn cơ sở, Hội Phụ nữ (09/10/2025) đều đã diễn ra thành công tốt đẹp.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image1.webp"/></span></span></span></span></span></p>
<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image2.webp"/></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đây là đợt sinh hoạt chính trị sâu rộng, thể hiện tinh thần đoàn kết – dân chủ – trí tuệ – đổi mới của tập thể CBCNV, đồng thời khẳng định vai trò to lớn của các tổ chức đoàn thể trong việc đồng hành cùng doanh nghiệp vượt qua khó khăn, hướng tới mục tiêu phát triển bền vững.</span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image3.webp"/></p>

<p><span><span><span><span><span><span>Các Đại hội vinh dự được đón nhận sự quan tâm, chỉ đạo của Đảng ủy, Ban Lãnh đạo Công ty cùng đại diện lãnh đạo các đơn vị trực thuộc. Những lời phát biểu động viên, chỉ đạo của lãnh đạo Công ty đã tiếp thêm động lực, củng cố niềm tin và khát vọng cống hiến cho toàn thể đoàn viên, hội viên trong nhiệm kỳ mới.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><b><span><span><span>Công đoàn cơ sở: Đồng hành, chăm lo và lan tỏa phong trào sáng tạo</span></span></span></b></span></span></span></p>
<p><span><span><span>Đại hội Công đoàn cơ sở nhiệm kỳ 2025–2030 được tổ chức trang trọng, với sự tham dự của 80 đại biểu đại diện cho hơn 600 CBCNV toàn Công ty. Đại hội đã thông qua khẩu hiệu hành động: “Đoàn kết – Dân chủ – Kỷ cương – Đổi mới – Phát triển. Đồng hành cùng người lao động, phát triển bền vững cùng Công ty.” Trong nhiệm kỳ qua, Công đoàn đã khẳng định vai trò là tổ chức đại diện, bảo vệ quyền và lợi ích hợp pháp, chính đáng của người lao động, trở thành cầu nối tin cậy giữa người lao động và Ban lãnh đạo.</span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Công đoàn đã chi hơn 1,2 tỷ đồng cho công tác thăm hỏi, hiếu hỷ, động viên người lao động, trong đó 578 triệu đồng hỗ trợ 78 trường hợp CBCNV bị ảnh hưởng bởi thiên tai như bão Yagi. Đại diện BCH Công đoàn tiếp tục tham gia tích cực vào các hội đồng quan trọng như Hội đồng tiền lương, Hội đồng kỷ luật và Hội đồng bảo hộ lao động, góp phần bảo đảm chính sách, quyền lợi và môi trường làm việc an toàn, minh bạch cho người lao động.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Cùng với đó, Đại hội Công đoàn Công ty Cổ phần Xi măng Cẩm Phả nhiệm kỳ 2025–2030 cũng đã diễn ra trong không khí dân chủ, đoàn kết và trách nhiệm. Đại hội đã bầu ra Ban Chấp hành Công đoàn nhiệm kỳ mới, quy tụ những cán bộ có năng lực, tâm huyết và tinh thần gắn bó với tập thể người lao động. Trong đó, đồng chí Vũ Thị Thoa được tín nhiệm bầu giữ chức vụ Chủ tịch Công đoàn Công ty, đồng chí Vũ Viết Văn giữ chức vụ Phó Chủ tịch Công đoàn Công ty. Ban Chấp hành Công đoàn nhiệm kỳ 2025–2030 hứa hẹn sẽ tiếp tục phát huy vai trò đại diện, chăm lo, bảo vệ quyền và lợi ích hợp pháp, chính đáng của người lao động; đồng thời đẩy mạnh các phong trào thi đua, góp phần xây dựng tập thể người lao động Xi măng Cẩm Phả đoàn kết, sáng tạo và phát triển bền vững.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Bước sang nhiệm kỳ mới, Công đoàn tập trung đẩy mạnh phong trào Sáng kiến – Ý tưởng, phấn đấu mỗi năm có từ 3–4 sáng kiến có giá trị làm lợi lớn, cải tiến kỹ thuật được công nhận và ứng dụng hiệu quả trong sản xuất – kinh doanh.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đồng thời, phong trào “Nói không với mất an toàn” tiếp tục được duy trì nghiêm túc, hướng tới mục tiêu xây dựng môi trường làm việc an toàn – văn minh – hạnh phúc, góp phần lan tỏa văn hóa doanh nghiệp đặc trưng của Xi măng Cẩm Phả.</span></span></span></span></span></span></p>
<p><span><span><span><b><span><span><span>Đoàn Thanh niên: Tiên phong trong chuyển đổi số, khơi dậy khát vọng sáng tạo</span></span></span></b></span></span></span></p>
<p><span><span><span><span><span><span>Với chủ đề “Đoàn kết – Đổi mới – Sáng tạo – Đột phá”, Đại hội Đoàn cơ sở Công ty nhiệm kỳ 2025–2030 đã diễn ra trong không khí sôi nổi, trẻ trung, đầy nhiệt huyết.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Đại hội đã đề ra 03 khâu đột phá trọng tâm:</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Xây dựng, lựa chọn, kiện toàn tổ chức Đoàn, đào tạo đội ngũ cán bộ có năng lực, kỹ năng và phương pháp tiến hành công tác Đoàn hiệu quả; Phát huy tinh thần xung kích, sáng tạo của tuổi trẻ, khích lệ đoàn viên thanh niên tích cực học tập, nghiên cứu bắt nhịp xu hướng Cách mạng công nghiệp 4.0, ứng dụng công nghệ AI và chương trình chuyển đổi trong công việc; Đẩy mạnh truyền thông và chiến lược bán hàng, với khẩu hiệu: “Mỗi đoàn viên Xi măng Cẩm Phả là một người bán hàng, một nhân viên truyền thông.”</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image7.webp"/></span></span></span></span></span></span></p>

<p><span><span><span>Song hành cùng các nhiệm vụ chuyên môn, tuổi trẻ Xi măng Cẩm Phả đã tích cực triển khai các chương trình phong trào đầy ý nghĩa, tiêu biểu như: tổ chức chuỗi hoạt động thể thao, văn hóa quần chúng; phối hợp tổ chức các hoạt động an sinh xã hội tại địa phương và buổi tọa đàm “Bồi dưỡng khát vọng, lý tưởng, đào tạo bản lĩnh, kỹ năng phát triển thanh niên”. Những hoạt động này không chỉ mang ý nghĩa giáo dục truyền thống sâu sắc, mà còn góp phần quan trọng trong việc tăng cường gắn kết tập thể, khơi dậy tinh thần cống hiến và sáng tạo trong đội ngũ đoàn viên.</span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image8.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image9.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Tuổi trẻ Xi măng Cẩm Phả đang từng bước khẳng định vai trò xung kích, tiên phong trong chuyển đổi số, ứng dụng công nghệ mới, đồng thời lan tỏa hình ảnh người lao động trẻ bản lĩnh, năng động, sẵn sàng thích ứng với mọi thay đổi.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image10.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Trong không khí phấn khởi, dân chủ và tràn đầy tinh thần đoàn kết, Đại hội đã tiến hành bầu Ban Chấp hành Đoàn Cơ sở Công ty Cổ phần Xi măng Cẩm Phả nhiệm kỳ 2025–2030. Trong đó, đồng chí Chu Công Trường được tín nhiệm bầu giữ chức vụ Bí thư Đoàn Cơ sở và đồng chí Lê Quốc Anh được bầu giữ chức vụ Phó Bí thư Đoàn Cơ sở. Kết quả bầu cử thể hiện sự đồng thuận, tin tưởng của toàn thể đoàn viên, thanh niên trong Công ty đối với đội ngũ cán bộ Đoàn nhiệm kỳ mới – những người mang trong mình tinh thần nhiệt huyết, tiên phong và khát vọng cống hiến, tiếp tục phát huy truyền thống, xây dựng tổ chức Đoàn ngày càng vững mạnh, xứng đáng là lực lượng xung kích trong mọi phong trào của đơn vị.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Đại hội Đoàn cơ sở nhiệm kỳ 2025–2030 là dấu mốc quan trọng, tiếp thêm sức mạnh và niềm tin cho thế hệ trẻ Công ty trên hành trình cùng Xi măng Cẩm Phả chinh phục những mục tiêu phát triển mới.</span></span></span></span></span></span></p>
<p><span><span><span><b><span><span><span>Hội Phụ nữ: Năng động, gắn kết và phát triển năng lực nữ giới </span></span></span></b></span></span></span></p>
<p><span><span><span><span><span><span>Đại hội đại biểu Hội Phụ nữ Công ty lần thứ IV, nhiệm kỳ 2025–2030, được tổ chức trang trọng với sự tham dự của 50 đại biểu ưu tú đại diện cho 3 Chi hội. Đại hội diễn ra trong không khí dân chủ, đoàn kết và tràn đầy khí thế thi đua, thể hiện tinh thần trách nhiệm, bản lĩnh và khát vọng vươn lên của tập thể nữ cán bộ, đoàn viên. Đây là dịp để nhìn lại chặng đường hoạt động của Hội Phụ nữ trong nhiệm kỳ qua, đánh giá những kết quả đã đạt được, rút ra bài học kinh nghiệm và đề ra phương hướng, nhiệm vụ trọng tâm cho giai đoạn mới, góp phần xây dựng tổ chức Hội ngày càng vững mạnh, đóng góp tích cực vào sự phát triển chung của Công ty.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image11.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đây là đội ngũ cán bộ nữ tiêu biểu, được kỳ vọng tiếp tục phát huy năng lực, bản lĩnh và tinh thần đoàn kết để đưa phong trào phụ nữ Công ty ngày càng phát triển vững mạnh.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Đại hội đã đánh giá nghiêm túc những kết quả đạt được trong nhiệm kỳ qua, đồng thời thẳng thắn nhìn nhận những hạn chế như công tác Hội chưa đồng bộ với nhiệm vụ sản xuất – kinh doanh, cơ chế phối hợp với các tổ chức đoàn thể chưa thật chặt chẽ. Từ đó, Hội Phụ nữ đã đề ra 06 nhóm giải pháp trọng tâm nhằm đổi mới hoạt động và nâng cao vai trò của nữ CBCNV trong giai đoạn mới: Gắn phong trào Hội với nhiệm vụ SXKD và chuyển đổi số, khuyến khích hội viên đề xuất sáng kiến, cải tiến kỹ thuật. Xây dựng cơ chế khen thưởng minh bạch, gắn kết quả hoạt động với hiệu quả SXKD và mức độ tham gia chuyển đổi số. Đẩy mạnh đào tạo chuyên sâu về ngoại ngữ, công nghệ thông tin, marketing số và quản lý dự án. Tăng cường phối hợp giữa Hội Phụ nữ – Công đoàn – Đoàn Thanh niên, tạo sức mạnh tổng hợp, cùng chăm lo đời sống tinh thần và phát triển năng lực cho người lao động nữ.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image12.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Với tinh thần dân chủ, đoàn kết và trách nhiệm cao, Đại hội đã bầu ra Ban Chấp hành Hội Phụ nữ nhiệm kỳ 2025–2030, thể hiện niềm tin và kỳ vọng vào đội ngũ nữ cán bộ đầy nhiệt huyết, sáng tạo. Đại hội đã bầu 07 đồng chí vào Ban Chấp hành mới, trong đó Đồng chí Nguyễn Thị Liên giữ chức Chủ tịch, Đồng chí Hoàng Thu Hằng làm Phó Chủ tịch.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Thành công rực rỡ của chuỗi Đại hội đoàn thể nhiệm kỳ 2025–2030 đã tạo nên khí thế thi đua sôi nổi, củng cố niềm tin và tinh thần đoàn kết trong toàn thể CBCNV Công ty Cổ phần Xi măng Cẩm Phả. Đây không chỉ là dịp tổng kết một nhiệm kỳ đầy nỗ lực, mà còn là bước khởi đầu cho giai đoạn mới – giai đoạn của khát vọng, trí tuệ và bản lĩnh.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Các tổ chức quần chúng XMCP cam kết tiếp thu sâu sắc ý kiến chỉ đạo của Đảng ủy và Ban Tổng Giám đốc, phát huy tinh thần đoàn kết – trách nhiệm – đổi mới – sáng tạo, thực hiện thắng lợi các mục tiêu nhiệm kỳ 2025–2030.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Dai hoi TCQC nhiem ky 2025-2030/image13.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Với sức mạnh tập thể, tinh thần chủ động, dám nghĩ dám làm và khát vọng vươn lên, tập thể Xi măng Cẩm Phả quyết tâm xây dựng doanh nghiệp mẫu mực, tiêu biểu, đóng góp tích cực vào sự phát triển chung của Tập đoàn Công nghiệp – Viễn thông Quân đội (Viettel), vì một Xi măng Cẩm Phả phát triển bền vững và tỏa sáng trong giai đoạn mới.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/ima1.webp",
    date: "14 Tháng 10, 2025",
    author: "admin"
  },
  {
    id: 42,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả sơ kết Quý III năm 2025: Vững vàng ổn định – Tăng tốc về đích",
    description: "Ngày 08/10/2025, tại trụ sở chính Công ty Cổ phần Xi măng Cẩm Phả, Hội nghị sơ kết công tác sản xuất kinh doanh Quý III và triển khai nhiệm vụ Quý IV năm 2025 đã diễn ra trong không khí nghiêm túc, trách nhiệm, với sự tham dự của Ban Lãnh đạo Công ty, các cán bộ chủ chốt, CBCNV tiêu biểu đại diện các đơn vị và điểm cầu trực tuyến tại Chi nhánh Phía Nam.",
    content: `<p><span><span><span><span><span><span>Ngày 08/11/2025, tại trụ sở chính Công ty Cổ phần Xi măng Cẩm Phả, Hội nghị sơ kết công tác sản xuất kinh doanh Quý III và triển khai nhiệm vụ Quý IV năm 2025 đã diễn ra trong không khí nghiêm túc, trách nhiệm, với sự tham dự của Ban Lãnh đạo Công ty, các cán bộ chủ chốt, CBCNV tiêu biểu đại diện các đơn vị và điểm cầu trực tuyến tại Chi nhánh Phía Nam.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Hoi nghi so ket Quy III nam 2025/image1.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Tại Hội nghị, đồng chí Nguyễn Thái Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã tổng kết, đánh giá kết quả hoạt động sản xuất kinh doanh Quý III/2025, đồng thời định hướng các nhiệm vụ trọng tâm trong thời gian tới.</span></span></span></span></span></span></p>
<p><span><span><span>Trong bối cảnh thị trường xi măng cạnh tranh gay gắt, Công ty đã điều hành sản xuất một cách chủ động và linh hoạt, bảo đảm hoạt động ổn định, an toàn, hiệu quả. Các dây chuyền Clinker và xi măng vận hành nhịp nhàng, chất lượng sản phẩm được giữ vững, tiến độ giao hàng đáp ứng đầy đủ yêu cầu của khách hàng. Sản lượng Clinker trong quý III tăng so với cùng kỳ, phản ánh năng lực quản lý và sự tận tâm của đội ngũ vận hành. Nhờ sự nỗ lực đồng bộ trong sản xuất – kinh doanh, tổng doanh thu của Công ty trong quý III tăng vượt trội so với mục tiêu đề ra tăng 106%, góp phần quan trọng vào kết quả chung của toàn Tập đoàn. Bên cạnh đó, Công ty tiếp tục chú trọng tối ưu hóa việc sử dụng năng lượng, đẩy mạnh áp dụng nhiên liệu thay thế từ rác thải và chất thải công nghiệp. Việc này đã giúp chi phí biến đổi sản xuất Clinker giảm 9.053 đồng/tấn so với kế hoạch quý, đồng thời mang lại doanh thu 3,3 tỷ cho Công ty từ hoạt động khai thác hiệu quả nguồn tài nguyên từ chất thải công nghiệp, qua đó giảm chi phí sản xuất và hướng tới mục tiêu phát triển bền vững, thân thiện với môi trường.</span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai Hoi nghi so ket Quy III nam 2025/image2.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Ở lĩnh vực kinh doanh, nhờ nỗ lực đồng bộ, tổng doanh thu Công ty với tổng sản lượng tiêu thụ xi măng đạt 112% kế hoạch quý đề ra. Các dòng sản phẩm chủ lực như xi măng rời, xi măng gián tiếp và xi măng bao đa dụng tiếp tục khẳng định uy tín thương hiệu. Cụ thể, sản phẩm Xi măng rời nội địa tại Nhà máy chính (NMC) có sự tăng trưởng vượt trội 53,5% và Xi măng gián tiếp tăng 51,5%. Trong đó, XMR PCB40 là sản phẩm chủ lực, chiếm ~55% tổng sản lượng tiêu thụ. Công ty chú trọng mở rộng thị trường nội địa, đặc biệt tại khu vực Phía Nam, cùng với chính sách giá linh hoạt và tăng cường hỗ trợ hệ thống phân phối, giúp mở rộng thị phần và nâng cao sản lượng. Sản lượng xi măng tiêu thụ tại Nhà máy chính đạt 129% kế hoạch và sản lượng Xi măng rời tại Chi nhánh Phía Nam đạt 106% so với kế hoạch.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image3.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><span>Phát biểu chỉ đạo tại Hội nghị, đồng chí Tổng Giám đốc Công ty biểu dương tinh thần đoàn kết, nỗ lực vượt khó của toàn thể người lao động trong 9 tháng đầu năm. Đồng chí nhấn mạnh, dù còn nhiều khó khăn, tập thể Xi măng Cẩm Phả vẫn thể hiện bản lĩnh vững vàng, kiên định trong sản xuất, duy trì hiệu quả kinh doanh và khẳng định uy tín thương hiệu trên thị trường. Đặc biệt, Công ty đã vinh dự được khen thưởng là đơn vị có thành tích xuất sắc, hoàn thành toàn diện các mục tiêu, chỉ tiêu trong Quý III năm 2025, nằm trong nhóm dẫn đầu phong trào thi đua của toàn Tập đoàn. Đó là minh chứng cho sự cố gắng, tinh thần sáng tạo và quyết tâm cao của tập thể cán bộ, công nhân viên. Thành tích này là nguồn động viên to lớn, khẳng định vị thế của Xi măng Cẩm Phả, đồng thời tiếp thêm động lực để toàn thể người lao động tiếp tục nỗ lực, phấn đấu hoàn thành tốt các mục tiêu nhiệm vụ trong thời gian tới.</span></span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image5.webp"/></p>

<p><span><span><span><span><span><span><span>Sau khi tổng kết báo cáo công tác thực hiện sản xuất kinh doanh Quý III năm 2025, Ban Lãnh đạo Công ty đã biểu dương và khen thưởng 3 tập thể cùng 11 cá nhân có thành tích xuất sắc trong thực hiện nhiệm vụ công tác. Đây là sự ghi nhận xứng đáng cho tinh thần làm việc tận tụy, trách nhiệm và những nỗ lực không ngừng của các tập thể, cá nhân trong toàn đơn vị. Trong bối cảnh yêu cầu ngày càng cao, toàn thể cán bộ, công nhân viên vẫn giữ vững tinh thần đoàn kết, chủ động khắc phục khó khăn, phát huy tinh thần sáng tạo trong lao động, thi đua hoàn thành tốt các chỉ tiêu, nhiệm vụ được giao. Thành tích đạt được trong Quý III không chỉ thể hiện kết quả của quá trình phấn đấu bền bỉ mà còn là minh chứng rõ nét cho tinh thần trách nhiệm, sự gắn bó và ý chí vươn lên của tập thể người lao động, góp phần quan trọng vào sự phát triển chung của đơn vị.</span></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image6.webp"/></span></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image7.webp"/></span></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Bước vào Quý IV – giai đoạn nước rút của năm 2025, Tổng Giám đốc yêu cầu toàn Công ty tập trung tăng tốc sản xuất và tiêu thụ, duy trì ổn định dây chuyền thiết bị, tiết giảm chi phí, hoàn thành các mục tiêu trọng tâm về tổng doanh thu, chỉ số Ebitda, dòng tiền và sản lượng sản xuất, tiêu thụ theo kế hoạch Quý IV, đồng thời nghiên cứu và phát triển các ngành nghề mới. Các đơn vị cần chủ động trong công tác thị trường, tăng cường thu hồi công nợ, quản lý tài chính chặt chẽ, đảm bảo dòng vốn phục vụ sản xuất kinh doanh, đồng thời tiếp tục triển khai các giải pháp sáng tạo nhằm hoàn thành vượt mức kế hoạch năm 2025.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Bai%20Hoi%20nghi%20so%20ket%20Quy%20III%20nam%202025/image8.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><span>Hội nghị khép lại trong không khí phấn khởi, tin tưởng và quyết tâm cao. Với truyền thống “Kỷ luật và Đồng tâm”, tinh thần đoàn kết và khát vọng vươn lên, tập thể CBCNV Công ty Cổ phần Xi măng Cẩm Phả quyết tâm đoàn kết – đồng lòng – tăng tốc về đích, hoàn thành xuất sắc kế hoạch năm 2025, tiếp tục củng cố vị thế của một doanh nghiệp xi măng uy tín, vững vàng và phát triển bền vững trên thị trường Việt Nam.</span></span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/xmcp1.webp",
    date: "9 Tháng 10, 2025",
    author: "admin"
  },
  {
    id: 41,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Lan tỏa niềm tự hào – Vinh danh con em CBCNV đạt thành tích học tập xuất sắc năm học 2024-2025",
    description: "Trong không khí tưng bừng của cả nước hân hoan hướng tới kỷ niệm Quốc khánh 2/9 – ngày lễ trọng đại của dân tộc, vào 22/08/2025 Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức chương trình khen thưởng con em cán bộ công nhân viên đạt thành tích học tập giỏi – xuất sắc năm học 2024–2025. Đây là hoạt động thường niên mang ý nghĩa nhân văn sâu sắc, không chỉ thể hiện sự quan tâm của Công ty đến đời sống tinh thần của CBCNV mà còn góp phần nuôi dưỡng, khích lệ tinh thần hiếu học của thế hệ trẻ – những chủ nhân tương lai của đất nước.",
    content: `<p><span><span><span><span><span><span>Trong không khí tưng bừng của cả nước hân hoan hướng tới kỷ niệm Quốc khánh 2/9 – ngày lễ trọng đại của dân tộc, vào 22/08/2025 Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức chương trình khen thưởng con em cán bộ công nhân viên đạt thành tích học tập giỏi – xuất sắc năm học 2024–2025. Đây là hoạt động thường niên mang ý nghĩa nhân văn sâu sắc, không chỉ thể hiện sự quan tâm của Công ty đến đời sống tinh thần của CBCNV mà còn góp phần nuôi dưỡng, khích lệ tinh thần hiếu học của thế hệ trẻ – những chủ nhân tương lai của đất nước. </span></span></span></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/1.webp"/></p>
<p><span><span><span><span><span><span>Năm học 2024–2025, tổng công ty có 450 cháu học sinh được khen thưởng nhờ những thành tích học tập nổi bật, trong đó có nhiều em đạt danh hiệu học sinh giỏi toàn diện, đoạt giải thưởng học sinh giỏi các cấp cũng như xuất sắc trong nhiều hoạt động ngoại khóa. Những phần thưởng này là sự ghi nhận xứng đáng cho những nỗ lực không ngừng của các em, đồng thời là niềm tự hào to lớn của gia đình, nhà trường và tập thể CBCNV trong toàn Công ty.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Ngay từ đầu chương trình, các đồng chí Chủ tịch Công đoàn, Chủ tịch Hội Phụ nữ, Bí thư Đoàn Thanh niên đã trực tiếp đón tiếp phụ huynh và gần 200 cháu, ổn định khu vực tổ chức và hướng dẫn chụp ảnh lưu niệm. Không khí hân hoan đã được lan tỏa khi Công ty trang trọng dựng phông nền Tết Độc lập 2/9 để chào mừng Quốc khánh. Trên nền cờ đỏ sao vàng rực rỡ cùng những hình ảnh lịch sử hào hùng, các em học sinh con em CBCNV đã có dịp lưu giữ những khoảnh khắc đáng nhớ thông qua hoạt động chụp ảnh kỷ niệm. Đây không chỉ là một góc trang trí đẹp mắt, mà còn là thông điệp đầy ý nghĩa: nhắc nhở thế hệ trẻ luôn tự hào, trân trọng truyền thống anh hùng dân tộc, từ đó nuôi dưỡng tinh thần phấn đấu, rèn luyện để tiếp bước cha anh trong chặng đường mới. </span></span></span></span></span></span></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/2.webp"/></p>
<p><span><span><span><span><span><span>Các em học sinh khối THPT còn được hướng dẫn, trải nghiệm chương trình tham quan nhà máy của Công ty, qua đó hiểu thêm về môi trường lao động, sản xuất, cũng như công việc hằng ngày của cha mẹ mình.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/3.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/4.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Song song với đó, khu vực sân cỏ và nhà ăn Công ty trở thành không gian hội vui nhộn với nhiều gian hàng tô tranh, tô tượng, ném vòng, phi tiêu…, kèm theo những phần quà nhỏ đầy hứng khởi dành cho các em. Tiệc ngọt và khu vui chơi cũng được bố trí chu đáo, mang lại bầu không khí gần gũi, rộn ràng.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/5.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Mở đầu chương trình là phần giới thiệu của các khách mời, phát biểu khai mạc và văn nghệ chào mừng của chính con em CBCNV Công ty CP Xi măng Cẩm Phả biểu diễn. Đây là những màn trình diễn giàu cảm xúc, thể hiện tài năng, sự tự tin và cũng chính là minh chứng sống động cho những mầm xanh tài năng đang từng ngày trưởng thành.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/6.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/7.webp"/></span></span></span></span></span></span></p>
<p><span><span><span>Đại diện Ban Lãnh đạo Công ty đã trao tặng giấy khen và phần quà động viên đến các em học sinh đạt thành tích xuất sắc. Không chỉ nhận phần thưởng, các em còn có cơ hội chia sẻ cảm nghĩ, lời cảm ơn đầy xúc động gửi tới cha mẹ, thầy cô và tập thể Công ty. Chương trình tiếp tục với bữa tiệc ấm cúng tại bàn, các trò chơi gameshow sôi động kèm phần quà hấp dẫn, tạo nên không gian gắn kết, giao lưu và để lại nhiều kỷ niệm đẹp. Buổi lễ đã khép lại trong niềm hân hoan, thành công rực rỡ, khẳng định sự chu đáo trong công tác tổ chức và ý nghĩa sâu sắc mà hoạt động mang lại.</span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/8.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/9.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Phát biểu tổng kết, đ/c Thượng tá Ngô Thế Hưng - Bí thư Đảng ủy, Phó Tổng Giám đốc Công ty nhấn mạnh: Sự quan tâm đến con em CBCNV không chỉ là sự khích lệ tinh thần học tập mà còn là một phần trong chiến lược xây dựng môi trường làm việc nhân văn, gắn bó và bền vững. Trong không khí thiêng liêng của ngày Tết Độc lập 2/9, những thành tích học tập của 450 cháu học sinh hôm nay chính là niềm tin, niềm tự hào và cũng là lời nhắn gửi về một thế hệ mới – bản lĩnh, trí tuệ, giàu khát vọng, tiếp bước cha anh xây dựng doanh nghiệp phát triển, đất nước phồn vinh.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Với tinh thần “Tự hào 2/9 – Vun đắp thế hệ vàng cho tương lai đất nước”, Công ty CP Xi măng Cẩm Phả tin tưởng rằng các em sẽ tiếp tục học tập, rèn luyện và trưởng thành, trở thành những công dân ưu tú, góp phần viết tiếp truyền thống vẻ vang của dân tộc và tạo dựng một Việt Nam ngày càng giàu mạnh.</span></span></span></span></span></span></p>
<p><i><span><span><span>Một số hình ảnh</span></span></span></i></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/10.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/11.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/LE TRAO THUONG HSG/12.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9.webp",
    date: "28 Tháng 8, 2025",
    author: "admin"
  },
  {
    id: 40,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Tri ân các Anh hùng Liệt sĩ – Xi măng Cẩm Phả hướng về cội nguồn",
    description: "Tháng Bảy lại về, mang theo những hồi ức thiêng liêng về một thời hoa lửa. Hướng tới kỷ niệm 78 năm Ngày Thương binh - Liệt sĩ (27/7/1947 – 27/7/2025), sáng ngày 24/7/2025, Công ty CP Xi măng Cẩm Phả đã long trọng tổ chức lễ dâng hương tưởng niệm Chủ tịch Hồ Chí Minh – vị lãnh tụ vĩ đại của dân tộc – tại phòng thờ đặt trang trọng trong trụ sở chính Công ty, đồng thời thành kính tưởng niệm các Anh hùng Liệt sĩ tại Nghĩa trang Liệt sĩ TP. Cẩm Phả.",
    content: `<p><span><span><span>Tháng Bảy lại về, mang theo những hồi ức thiêng liêng về một thời hoa lửa. Hướng tới kỷ niệm 78 năm Ngày Thương binh - Liệt sĩ (27/7/1947 – 27/7/2025), sáng ngày 24/7/2025, Công ty CP Xi măng Cẩm Phả đã long trọng tổ chức lễ dâng hương tưởng niệm Chủ tịch Hồ Chí Minh – vị lãnh tụ vĩ đại của dân tộc – tại phòng thờ đặt trang trọng trong trụ sở chính Công ty, đồng thời thành kính tưởng niệm các Anh hùng Liệt sĩ tại Nghĩa trang Liệt sĩ TP. Cẩm Phả.</span></span></span></p>


<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image1.webp"/></p>

<p><span><span><span>Tham dự buổi lễ có đại diện Đảng ủy, Ban Tổng Giám đốc Công ty, lãnh đạo các phòng, phân xưởng cùng đại diện các tổ chức đoàn thể Công đoàn, Đoàn Thanh niên, Hội Phụ nữ. Đây là hoạt động thường niên đầy ý nghĩa, thể hiện lòng tri ân sâu sắc đối với những người con ưu tú của dân tộc đã anh dũng hy sinh vì độc lập, tự do và toàn vẹn lãnh thổ của Tổ quốc.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image2.webp"/></span></span></span></p>

<p><span><span><span>Lễ dâng hương diễn ra trong không khí trang nghiêm và xúc động. Từng nén hương được thắp lên là biểu tượng cho lòng tưởng nhớ và biết ơn sâu sắc gửi đến các thế hệ đi trước – những người đã hiến dâng tuổi xuân, xương máu cho sự nghiệp cách mạng vẻ vang. Trong khoảnh khắc lặng mình trước anh linh các Liệt sĩ, mỗi thành viên trong đoàn càng cảm nhận sâu sắc hơn giá trị của sự hy sinh, ý nghĩa của hòa bình và trách nhiệm của thế hệ hôm nay trong công cuộc xây dựng và bảo vệ đất nước.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image3.webp"/></span></span></span></p>

<p><span><span><span>Chương trình không chỉ là dịp để tập thể CBCNV Công ty cùng nhau tưởng niệm và tri ân, mà còn là lời nhắc nhở về sứ mệnh kế thừa, phát huy truyền thống “Uống nước nhớ nguồn”, “Đền ơn đáp nghĩa” – những giá trị bền vững đã trở thành một phần văn hóa doanh nghiệp tại Xi măng Cẩm Phả. Qua đó, tinh thần yêu nước, tinh thần đoàn kết và trách nhiệm với cộng đồng tiếp tục được bồi đắp trong mỗi cán bộ, người lao động, trở thành động lực để hoàn thành tốt nhiệm vụ được giao, đóng góp tích cực vào sự phát triển bền vững của Công ty và xã hội.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image4.webp"/></span></span></span></p>

<p><span><span><span>Bên cạnh đó, Công ty cũng tổ chức các hoạt động thiết thực khác như thăm hỏi, động viên CBCNV là thân nhân Liệt sĩ và người có công với cách mạng. Những nghĩa cử cụ thể ấy không chỉ góp phần lan tỏa giá trị nhân văn sâu sắc mà còn thể hiện tinh thần trách nhiệm, sự gắn bó của doanh nghiệp với cộng đồng.</span></span></span></p>
<p><span><span><span><span><span><span>Lòng biết ơn được thắp sáng trong từng hành động, tiếp thêm niềm tin và quyết tâm để Xi măng Cẩm Phả không ngừng nỗ lực, phát huy những giá trị tốt đẹp đã được hun đúc qua nhiều thế hệ.</span></span></span></span></span></span></p>

<p><span><span><span><i><span><span><span>Một số hình ảnh</span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image5.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image6.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image7.webp"/></span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP tri an cac anh hung liet si/image8.webp"/></span></span></span></i></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/lietsi1.webp",
    date: "24 Tháng 7, 2025",
    author: "admin"
  },
  {
    id: 39,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích",
    description: "Ngày 14/7/2025, tại trụ sở chính Công ty CP Xi măng Cẩm Phả, Hội nghị sơ kết công tác 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2025 đã diễn ra trong không khí nghiêm túc, trách nhiệm, với sự tham dự của Ban Lãnh đạo Công ty, các cán bộ chủ chốt, CBCNV tiêu biểu từ các đơn vị và một điểm cầu trực tuyến tại Chi nhánh phía Nam.",
    content: `<p><span><span><span><span><span><span>Ngày 14/7/2025, tại trụ sở chính Công ty CP Xi măng Cẩm Phả, Hội nghị sơ kết công tác 6 tháng đầu năm và triển khai nhiệm vụ 6 tháng cuối năm 2025 đã diễn ra trong không khí nghiêm túc, trách nhiệm, với sự tham dự của Ban Lãnh đạo Công ty, các cán bộ chủ chốt, CBCNV tiêu biểu từ các đơn vị và một điểm cầu trực tuyến tại Chi nhánh phía Nam.</span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/1.webp"/></p>

<p><span><span><span><span><span><span>Tại Hội nghị, đồng chí Tổng Giám đốc Nguyễn Thái Hưng đã trình bày báo cáo kết quả hoạt động sản xuất kinh doanh 6 tháng đầu năm, đồng thời định hướng các nhiệm vụ trọng tâm trong thời gian tới.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Trong bối cảnh thị trường xi măng tiếp tục chịu áp lực từ dư cung, giá nguyên vật liệu biến động và cạnh tranh gay gắt, XMCP vẫn duy trì hoạt động sản xuất ổn định, an toàn, tối ưu định mức và chi phí. Một trong những dấu ấn nổi bật là việc triển khai hiệu quả mô hình tổ chức mới từ giữa tháng 2/2025, giúp rút gọn đầu mối, tinh giản quản trị, tăng hiệu quả xử lý công việc và nâng cao năng lực điều hành toàn diện.</span></span></span></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/2.webp"/></span></span></span></p>

<p><span><span><span><span><span><span>Kết quả 6 tháng đầu năm cho thấy nhiều tín hiệu tích cực: Tổng doanh thu đạt 100% kế hoạch và tăng trưởng 22% so với cùng kỳ. Chỉ số EBITDA tăng mạnh, gấp gần 5 lần cùng kỳ năm trước. Sản lượng sản xuất và tiêu thụ Clinker, xi măng trong 6 tháng đầu năm 2025 được duy trì ổn định, với một số chỉ tiêu đạt và vượt kế hoạch, cho thấy hiệu quả trong công tác điều hành, tiết kiệm nguyên vật liệu và tối ưu hiệu suất thiết bị.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/3.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Song song với sản xuất, XMCP đã triển khai đồng bộ các giải pháp giữ vững thị phần trọng điểm, phát triển kênh phân phối và gia tăng nhận diện thương hiệu. Công ty đã mở rộng thêm 17 nhà phân phối mới, ra mắt sản phẩm xi măng mới Econs40, đẩy mạnh cấp hàng vào nhiều công trình lớn tại cả hai miền. Tại Quảng Ninh và Bà Rịa – Vũng Tàu, hai thị trường chủ lực, XMCP tiếp tục giữ vững thị phần ở mức cao.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đặc biệt, công tác chuyển đổi số được chú trọng đầu tư. Hệ thống ERP đã chính thức đi vào hoạt động tại Chi nhánh Phía Nam, nâng cao hiệu quả quản trị và tích hợp dữ liệu. Hệ thống trạm cân, giám sát môi trường, và các công cụ hỗ trợ sản xuất cũng đang từng bước được số hóa, tạo nền tảng cho hoạt động vận hành linh hoạt, minh bạch và an toàn hơn.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Với tinh thần quyết liệt, XMCP đề ra kế hoạch sản xuất và tiêu thụ hơn 1 triệu tấn xi măng trong nửa cuối năm 2025, với quyết tâm giữ vững đà tăng trưởng và hoàn thành toàn diện các mục tiêu sản xuất kinh doanh. Công ty xác định tập trung vào các nhóm giải pháp lớn: Duy trì ổn định hệ thống thiết bị, tối ưu chi phí nguyên liệu, phát triển thị trường và mạng lưới phân phối, tăng cường tiếp cận các công trình lớn, đồng thời hoàn thiện các nhiệm vụ đầu tư và quản trị còn tồn đọng.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/6.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đồng chí Tổng Giám đốc Nguyễn Thái Hưng nhấn mạnh: “Ban Lãnh đạo và toàn thể CBCNV XMCP cam kết tập trung tối đa nguồn lực, linh hoạt điều hành, chủ động thích ứng và không ngừng đổi mới để hoàn thành xuất sắc các chỉ tiêu được giao, xây dựng nền tảng vững chắc cho chiến lược phát triển dài hạn.”</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Khép lại Hội nghị, Ban Lãnh đạo đã công bố quyết định và tổ chức khen thưởng cho 3 tập thể, 10 cá nhân có thành tích xuất sắc trong 6 tháng đầu năm. Đây là hoạt động thiết thực, nhằm ghi nhận những nỗ lực không ngừng và tiếp thêm động lực thi đua lao động, sản xuất cho toàn Công ty trong chặng đường phía trước.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Xi măng Cẩm Phả Sơ kết 6 tháng đầu năm 2025: Đoàn kết, đồng lòng – Tăng Tốc Về Đích/7.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Hội nghị sơ kết 6 tháng đầu năm 2025 đã khép lại thành công, đánh dấu tinh thần đồng lòng, quyết tâm và sẵn sàng tăng tốc về đích của Xi măng Cẩm Phả trong hành trình xây dựng doanh nghiệp ngày một vững mạnh, hiệu quả và hiện đại.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/2.soket.webp",
    date: "16 Tháng 7, 2025",
    author: "admin"
  },
  {
    id: 38,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Đại hội đại biểu Đảng bộ Công ty CP Xi măng Cẩm Phả lần IV: Dấu mốc quan trọng nhiệm kỳ 2025 – 2030",
    description: "Trong không khí thi đua sôi nổi chào mừng Đại hội đại biểu toàn quốc lần thứ XIV của Đảng, Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp – Viễn thông Quân đội lần thứ XI, ngày 27 – 28/5/2025, Đảng bộ Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Đại hội đại biểu lần thứ IV, nhiệm kỳ 2025 – 2030. Đây là sự kiện chính trị quan trọng, đánh dấu bước phát triển mới của Đảng bộ Công ty, khẳng định quyết tâm đổi mới, phát triển bền vững, xây dựng tổ chức Đảng trong sạch, vững mạnh toàn diện, góp phần thực hiện thắng lợi chiến lược phát triển của Công ty trong giai đoạn tới.",
    content: `<p><span><span><span>Trong không khí thi đua sôi nổi chào mừng Đại hội đại biểu toàn quốc lần thứ XIV của Đảng, Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp – Viễn thông Quân đội lần thứ XI, ngày 27 – 28/5/2025, Đảng bộ Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Đại hội đại biểu lần thứ IV, nhiệm kỳ 2025 – 2030. Đây là sự kiện chính trị quan trọng, đánh dấu bước phát triển mới của Đảng bộ Công ty, khẳng định quyết tâm đổi mới, phát triển bền vững, xây dựng tổ chức Đảng trong sạch, vững mạnh toàn diện, góp phần thực hiện thắng lợi chiến lược phát triển của Công ty trong giai đoạn tới.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai hoi dai bieu Dang bo Cong ty CP Xi mang Cam Pha 2025-2030/1.webp"/></span></span></span></p>

<p><span><span><span>Đại hội vinh dự được đón tiếp các đại biểu của Đảng ủy Tập đoàn Công nghiệp – Viễn thông Quân đội đến dự và chỉ đạo, gồm: Đại tá Dương Văn Toàn – Ủy viên Thường vụ Đảng ủy, Chủ nhiệm Chính trị Tập đoàn; Đại tá Nguyễn Anh Tuấn – Phó Chánh Văn phòng; Trung tá Trần Thị Tố Mỹ – Phó Trưởng Ban Đầu tư tài chính; Đại tá Đinh Duy Thinh – Trưởng phòng Bảo vệ An ninh, Cơ quan Chính trị; Thượng tá Lê Đức Hạnh – Trưởng phòng Tuyên huấn, Cơ quan Chính trị. Sự hiện diện của các đồng chí là nguồn động viên to lớn đối với toàn thể cán bộ, đảng viên và người lao động Công ty.</span></span></span></p>

<p><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai hoi dai bieu Dang bo Cong ty CP Xi mang Cam Pha 2025-2030/2-new.webp"/></span></span></p>

<p><span><span><span>Phát biểu tại Đại hội, đồng chí Đại tá Dương Văn Toàn ghi nhận và biểu dương những nỗ lực, tinh thần vượt khó và sự gắn bó, đoàn kết của tập thể CBCNV Công ty trong thời gian qua. Đồng chí khẳng định, Thường vụ Đảng ủy và các cơ quan Tập đoàn luôn thấu hiểu, chia sẻ khó khăn và sẽ tiếp tục đồng hành, hỗ trợ Công ty về mọi mặt. Đồng chí đề nghị Đảng bộ cần nhìn thẳng vào các tồn tại, từ đó xây dựng chiến lược phát triển dài hạn, đổi mới cách làm, đẩy mạnh chuyển đổi số, tăng thị phần bán hàng, tiếp tục đảm bảo thu nhập và đời sống cho người lao động. Đồng thời, phát huy tinh thần dân chủ, đoàn kết trong kỷ cương; cán bộ, đảng viên phải gương mẫu, tạo sự đồng thuận thống nhất cao; chú trọng phát triển nguồn nhân lực chất lượng cao, kết hợp hiệu quả giữa ngành nghề truyền thống với lĩnh vực mới.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/3.webp"/></span></span></span></p>
<p><span><span><i><span>Đồng chí Đại tá Dương Văn Toàn – Ủy viên Thường vụ Đảng ủy, Chủ nhiệm Chính trị Tập đoàn phát biểu chỉ đạo tại Đại hội</span></i></span></span></p>

<p><span><span><span>Tham dự Đại hội có 80 đại biểu chính thức, đại diện cho 7 chi bộ trực thuộc Đảng bộ Công ty. Đây là những đảng viên ưu tú, có phẩm chất chính trị, năng lực chuyên môn, trách nhiệm cao với tổ chức, được lựa chọn từ các Đại hội cấp cơ sở, đại diện cho ý chí, nguyện vọng và quyết tâm của toàn thể đảng viên trong toàn Đảng bộ.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/4.webp"/></span></span></span></p>

<p><span><span><span>Đại hội đã đánh giá kết quả thực hiện Nghị quyết Đại hội lần thứ III, nhiệm kỳ 2020 – 2025 <i>(đã điều chỉnh phù hợp với tình hình thực tế)</i>. Trong bối cảnh có nhiều khó khăn chung của ngành xi măng và nền kinh tế, Đảng bộ Công ty đã phát huy vai trò lãnh đạo toàn diện, linh hoạt, sáng tạo, hoàn thành cơ bản các mục tiêu trọng yếu: sản xuất xi măng đạt 100%, tiêu thụ xi măng đạt 100,6%, doanh thu đạt 100,14%, duy trì thị phần tại Quảng Ninh 30 – 35% và Bà Rịa – Vũng Tàu 40 – 45%. Công tác kỹ thuật được quan tâm, hệ thống thiết bị vận hành ổn định; đời sống người lao động được đảm bảo; tổ chức bộ máy được củng cố theo hướng tinh gọn, hiệu quả. Các tổ chức đoàn thể giữ vững danh hiệu vững mạnh, vững mạnh xuất sắc.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/5.webp"/></span></span></span></p>

<p><span><span><span>Đại hội cũng thẳng thắn nhìn nhận những tồn tại, hạn chế như công tác dự báo và kế hoạch chưa sát thực tế; hiệu quả khai thác nguồn lực vật tư còn thấp; hoạt động nghiên cứu sản phẩm mới chưa có đột phá. Trên cơ sở đó, Đại hội đã thảo luận, đề xuất các giải pháp cụ thể để khắc phục trong nhiệm kỳ tới.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/6.webp"/></span></span></span></p>
<p><span><span><i><span>Đồng chí Thượng tá Ngô Thế Hưng – Bí thư Đảng ủy, Phó Tổng Giám đốc Công ty phát biểu tại Đại hội</span></i></span></span></p>

<p><span><span><span>Đại hội đã thống nhất thông qua phương hướng phát triển Công ty giai đoạn 2025 – 2030, với tầm nhìn rõ ràng và khát vọng mạnh mẽ: xây dựng Công ty trở thành doanh nghiệp top đầu về chất lượng sản phẩm; dẫn đầu thị phần tại Quảng Ninh và Bà Rịa – Vũng Tàu; tiên phong trong ứng dụng công nghệ số vào sản xuất – kinh doanh; chuyển đổi mô hình sản xuất từ xi măng truyền thống sang xi măng xanh, thân thiện môi trường, đáp ứng yêu cầu thị trường trong nước và quốc tế.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/7.webp"/></span></span></span></p>
<p><span><span><i><span>Đồng chí Thiếu tá Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Đại hội</span></i></span></span></p>

<p><span><span><span>Ba khâu đột phá được Đại hội xác định gồm: Tham gia sâu vào chuỗi cung ứng hạ tầng trọng điểm quốc gia; đẩy mạnh áp dụng công nghệ số nhằm nâng cao hiệu quả hoạt động; nghiên cứu, phát triển sản phẩm xi măng ứng dụng công nghệ xanh phục vụ thị trường cao cấp và xuất khẩu.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/8.webp"/></span></span></span></p>
<p><span><span><i><span>Đồng chí Hoàng Quang Thoa – Ủy viên Thường vụ Đảng ủy, Phó Tổng Giám đốc Công ty phát biểu tại Đại hội</span></i></span></span></p>

<p><span><span><span>Trong không khí dân chủ, trách nhiệm và đoàn kết, Đại hội đã bầu ra Ban Chấp hành Đảng bộ Công ty nhiệm kỳ 2025 – 2030 gồm 11 đồng chí đủ tiêu chuẩn về phẩm chất, năng lực, uy tín. Đại hội cũng tiến hành bầu 05 đại biểu chính thức và 01 đại biểu dự khuyết đại diện cho Đảng bộ Công ty tham dự Đại hội Đại biểu Đảng bộ Tập đoàn lần thứ XI.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/9.webp"/></span></span></span></p>

<p><span><span><span>Phát biểu bế mạc, đồng chí Thượng tá Ngô Thế Hưng – Bí thư Đảng ủy, Phó Tổng Giám đốc Công ty thay mặt Ban Chấp hành mới bày tỏ quyết tâm: Toàn thể cán bộ, đảng viên và người lao động sẽ tiếp tục phát huy truyền thống đoàn kết, đổi mới mạnh mẽ, phát triển bền vững, xây dựng Đảng bộ trong sạch vững mạnh, Công ty vững mạnh toàn diện, hoàn thành xuất sắc nhiệm vụ được giao trong nhiệm kỳ 2025 – 2030.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/10.webp"/></span></span></span></p>

<p><span><span><span>Đại hội Đại biểu Đảng bộ Công ty CP Xi măng Cẩm Phả lần thứ IV đã thành công tốt đẹp, tạo khí thế mới, động lực mới cho toàn thể CBCNV hướng tới giai đoạn phát triển tiếp theo với niềm tin, khát vọng và trách nhiệm cao nhất.</span></span></span></p>

<p><span><span><span><i><span><span><span>Một số hình ảnh</span></span></span></i></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/11.webp"/></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai hoi dai bieu Dang bo Cong ty CP Xi mang Cam Pha 2025-2030/12-new.webp"/></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/13.webp"/></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/Dai%20hoi%20dai%20bieu%20Dang%20bo%20Cong%20ty%20CP%20Xi%20mang%20Cam%20Pha%202025-2030/14.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/1.webp",
    date: "29 Tháng 5, 2025",
    author: "admin"
  },
  {
    id: 37,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức Hội nghị Người lao động năm 2025 với tinh thần đoàn kết vượt khó, cùng nhau vươn tới tương lai",
    description: "Ngày 17/4/2025, tại trụ sở Nhà máy chính, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị Đại biểu Người lao động năm 2025, với sự tham dự của 89 đại biểu đại diện cho hơn 600 CBCNV trong toàn Công ty.",
    content: `<p><span><span><span><span><span>Ngày 17/4/2025, tại trụ sở Nhà máy chính, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị Đại biểu Người lao động năm 2025, với sự tham dự của 89 đại biểu đại diện cho hơn 600 CBCNV trong toàn Công ty.</span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP to chuc Hoi nghi NLD 2025/1.webp"/></p>

<p><span><span><span><span><span>Hội nghị là diễn đàn quan trọng để người lao động phát huy quyền dân chủ, trực tiếp tham gia đóng góp ý kiến, thể hiện nguyện vọng, đồng thời cùng Ban lãnh đạo đánh giá kết quả của một năm nỗ lực vượt khó và định hướng chiến lược phát triển cho chặng đường phía trước.</span></span></span></span></span></p>
<p><span><span><span><span><span>Phát biểu chỉ đạo tại Hội nghị, đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã ghi nhận và đánh giá cao tinh thần đoàn kết, trách nhiệm và sự nỗ lực bền bỉ của tập thể CBCNV trong suốt thời gian qua. Đồng chí khẳng định, trong bối cảnh môi trường kinh doanh luôn biến động, điều quan trọng không nằm ở việc lo ngại hay băn khoăn trước những khó khăn, mà ở cách chúng ta chủ động thích ứng, linh hoạt tìm hướng đi phù hợp, biến thách thức thành cơ hội để bứt phá.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP to chuc Hoi nghi NLD 2025/2.webp"/></span></span></span></span></span><span><span><span><i><span><span>Đồng chí Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Hội nghị</span></span></i></span></span></span></p>
<p><span><span><span><span><span>Tổng Giám đốc luôn tin tưởng rằng mỗi người lao động là một mắt xích quan trọng, góp phần tạo nên sức mạnh chung của Xi măng Cẩm Phả. Năm 2025 là thời điểm để Công ty không chỉ củng cố nội lực mà còn đổi mới tư duy, dám nghĩ, dám làm và dám chịu trách nhiệm. Chính tinh thần ấy sẽ là nền tảng để tập thể Công ty phát triển mạnh mẽ, vững vàng và bền vững trong những năm tiếp theo.</span></span></span></span></span></p>
<p><span><span><span><span><span>Tại Hội nghị, các đại biểu đã lắng nghe và thảo luận nhiều nội dung quan trọng: kết quả sản xuất kinh doanh năm 2024, phương hướng năm 2025, công tác chăm lo đời sống và thực hiện chế độ chính sách cho người lao động, công tác công đoàn và giám sát việc thực hiện thỏa ước lao động tập thể.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20to%20chuc%20Hoi%20nghi%20NLD%202025/3.webp"/></span></span></span></span></span></p>

<p><span><span><span><span><span>Đặc biệt, Hội nghị đã dành thời gian để Tổng Giám đốc trực tiếp giải đáp các ý kiến, kiến nghị của người lao động, tập trung vào những vấn đề liên quan đến tiền lương, thu nhập, điều kiện làm việc, an toàn lao động, chế độ chính sách,… Với tinh thần trách nhiệm, thấu hiểu và thượng tôn pháp luật, đồng chí Nguyễn Thái Hưng đã giải đáp cụ thể từng vấn đề được nêu ra, đồng thời cam kết Ban lãnh đạo sẽ tiếp tục lắng nghe và đồng hành cùng CBCNV nhằm từng bước thảo gỡ vướng mắc, đảm bảo quyền lợi chính đáng cho người lao động.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20to%20chuc%20Hoi%20nghi%20NLD%202025/4.webp"/></span></span></span></span></span></p>

<p><span><span><span><span><span>Một trong những nội dung trọng tâm của Hội nghị là lễ ký kết Thỏa ước lao động tập thể năm 2025 giữa đại diện người sử dụng lao động và Ban Chấp hành Công đoàn – khẳng định sự gắn bó, hợp tác và đồng thuận giữa hai bên trong xây dựng mối quan hệ lao động hài hòa, ổn định và tiến bộ.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20to%20chuc%20Hoi%20nghi%20NLD%202025/5.webp"/></span></span></span></span></span></p>

<p><span><span><span><span><span>Với sự đồng thuận cao, Hội nghị đã thông qua Nghị quyết Hội nghị Người lao động năm 2025, xác định rõ các mục tiêu trọng tâm, giải pháp cụ thể và tinh thần hành động quyết liệt nhằm hoàn thành tốt nhiệm vụ sản xuất kinh doanh và chăm lo ngày càng tốt hơn cho người lao động.</span></span></span></span></span></p>

<p><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20to%20chuc%20Hoi%20nghi%20NLD%202025/6.webp"/></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Hội nghị khép lại, nhưng tinh thần quyết tâm và sự gắn kết trong mỗi thành viên của Xi măng Cẩm Phả sẽ tiếp tục lan tỏa mạnh mẽ. Chính tinh thần đó sẽ là nền tảng vững chắc, giúp Công ty phát triển bền vững và đạt được những thành tựu lớn hơn trong tương lai.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/2.webp",
    date: "17 Tháng 4, 2025",
    author: "admin"
  },
  {
    id: 36,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP hưởng ứng Tết trồng cây đầu Xuân Ất Tỵ năm 2025",
    description: "Sáng ngày 08/02/2025, trong không khí phấn khởi đầu xuân, Công ty CP Xi măng Cẩm Phả tự hào là một trong ba đơn vị được Tập đoàn Công nghiệp - Viễn thông Quân đội lựa chọn tổ chức Lễ phát động “Tết trồng cây đời đời nhớ ơn Bác Hồ” Xuân Ất Tỵ 2025",
    content: `<p><span><span><span>Sáng ngày 08/02/2025, trong không khí phấn khởi đầu xuân, Công ty CP Xi măng Cẩm Phả </span></span></span><span><span><span>tự hào</span></span></span><span><span><span> là một trong ba đơn vị được Tập đoàn Công nghiệp - Viễn thông Quân đội lựa chọn tổ chức Lễ phát động <b><i>“Tết trồng cây đời đời nhớ ơn Bác Hồ”</i></b> Xuân Ất Tỵ 2025</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP hưởng ứng Tết trồng cây đầu Xuân Ất Tỵ năm 2025/1.webp"/></span></span></span></p>

<p><span><span><span>Buổi lễ </span></span></span><span><span><span>có sự hiện diện của</span></span></span><span><span><span> đ/c Đại tá Đào Xuân Vũ - Ủy viên Ban Thường vụ Đảng ủy, Phó Tổng Giám đốc Tập đoàn Công nghiệp - Viễn thông Quân đội, Chủ tịch HĐQT Công ty CP Xi măng Cẩm Phả; Đ/c Trung tá Nguyễn Đạt - Phó Tổng Giám đốc Tập đoàn; Đ/c Thiếu tá Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty;</span></span></span> <span><span><span>Đ/c Đinh Ngọc Chiến, Ủy viên Ban thường vụ Thành ủy, Phó chủ tịch thường trực thành phố Cẩm Phả;</span></span></span><span><span><span> Cùng lãnh đạo các Ban, ngành địa phương, Tập đoàn và CBCNV Công ty.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP hưởng ứng Tết trồng cây đầu Xuân Ất Tỵ năm 2025/2.webp"/></span></span></span></p>

<p><span><span><span><span><span><span>Phát biểu tại buổi lễ, đ/c Đại tá Đào Xuân Vũ nhấn mạnh: Tập đoàn Công nghiệp - Viễn thông Quân đội luôn đồng hành, tạo điều kiện để Công ty CP Xi măng Cẩm Phả không ngừng nâng cao năng lực và hiệu quả hoạt động. Sự vươn lên mạnh mẽ của Công ty không chỉ đóng góp vào thành công chung của Tập đoàn mà còn thể hiện ý chí, tinh thần đổi mới, sáng tạo của tập thể CBCNV. Bên cạnh nhiệm vụ sản xuất, kinh doanh, Công ty cần chú trọng công tác bảo vệ môi trường, xây dựng cảnh quan xanh – sạch – đẹp, hướng đến một mô hình doanh nghiệp hiện đại, hài hòa với thiên nhiên.</span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/3.webp"/><span><span><span><i><span><span><span>Đ/c Đại tá Đào Xuân Vũ - Ủy viên Ban Thường vụ Đảng ủy, Phó Tổng Giám đốc Tập đoàn, Chủ tịch HĐQT Công ty phát biểu tại Lễ phát động</span></span></span></i></span></span></span></p>

<p><span><span><span><span><span><span>Đồng thời, đ/c Đại tá Đào Xuân Vũ kêu gọi toàn thể CBCNV chung tay triển khai chương trình trồng cây với tinh thần trách nhiệm cao nhất. Đ/c khẳng định: “Mỗi cây xanh được trồng hôm nay không chỉ mang lại bóng mát, góp phần cải thiện chất lượng không khí mà còn là biểu tượng cho sự đoàn kết, ý chí bền bỉ và quyết tâm xây dựng một doanh nghiệp phát triển vững chắc.”</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Trong những năm qua, Tập đoàn Công nghiệp - Viễn thông Quân đội không chỉ đồng hành mà còn dành sự quan tâm đặc biệt đến Công ty CP Xi măng Cẩm Phả. Sự hỗ trợ từ Tập đoàn không chỉ thể hiện qua định hướng chiến lược, các nguồn lực tài chính, kỹ thuật, mà còn qua những giá trị cốt lõi mà Viettel mang đến. Với sự tham gia và đồng hành của các đơn vị trực thuộc Tập đoàn, chính quyền địa phương cùng toàn thể CBCNV, hơn 600 cây xanh, bao gồm lộc vừng, bàng Đài Loan, mít và xoài sẽ được trồng quanh khu vực nhà máy. Không chỉ làm đẹp cảnh quan, tạo không gian sinh thái trong lành, những hàng cây này còn thể hiện trách nhiệm của người Viettel đối với môi trường và cộng đồng.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/5.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Thay mặt Đảng ủy, Ban lãnh đạo và toàn thể CBCNV, đ/c Thiếu tá Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty gửi lời cảm ơn sâu sắc tới Tập đoàn Công nghiệp - Viễn thông Quân đội, đặc biệt là sự quan tâm, chỉ đạo sát sao của Đại tá Đào Xuân Vũ. Đ/c cam kết: “Công ty sẽ kế thừa những định hướng, giá trị cốt lõi mà Tập đoàn đã vun đắp, tiếp tục nỗ lực trong hoạt động sản xuất kinh doanh, không ngừng đổi mới để nâng cao hiệu quả, đảm bảo tăng trưởng bền vững, đáp lại sự tin tưởng và kỳ vọng của Tập đoàn.”</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/6.webp"/></span></span></span></span></span></span><i><span><span><span>Đ/c Thiếu tá Nguyễn Thái Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Lễ phát động</span></span></span></i></p>

<p><span><span><span><span><span><span>Lễ phát động “Tết trồng cây đời đời nhớ ơn Bác Hồ” tại Công ty CP Xi măng Cẩm Phả không chỉ là một truyền thống có ý nghĩa sâu sắc, thể hiện đạo lý “Uống nước nhớ nguồn”, mà còn góp phần lan tỏa tinh thần trồng cây gây rừng trong cộng đồng. Với sự đồng lòng của toàn thể CBCNV, Công ty hướng tới mục tiêu xây dựng môi trường làm việc xanh – sạch – đẹp, nâng cao chất lượng không gian sống và làm việc, đồng thời khẳng định vai trò của doanh nghiệp trong sự phát triển chung của xã hội.</span></span></span></span></span></span></p>

<p><span><span><span><i><span><span><span>Một số hình ảnh</span></span></span></i></span></span></span></p>

<p><span><span><span><i><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/7.webp"/></span></span></span></i></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/8.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/9.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/10.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2025/XMCP%20h%C6%B0%E1%BB%9Fng%20%E1%BB%A9ng%20T%E1%BA%BFt%20tr%E1%BB%93ng%20c%C3%A2y%20%C4%91%E1%BA%A7u%20Xu%C3%A2n%20%E1%BA%A4t%20T%E1%BB%B5%20n%C4%83m%202025/11.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/0.webp",
    date: "10 Tháng 2, 2025",
    author: "admin"
  },
  {
    id: 35,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Lễ ký kết hợp đồng giữa các nhà phân phối xi măng: Tạo nền tảng vững chắc cho thị trường tiêu thụ",
    description: "Sáng ngày 19/12/2024, tại Công ty Cổ phần Xi măng Cẩm Phả, lễ ký kết hợp đồng giữa Công ty với các nhà phân phối xi măng trong năm 2024 đã diễn ra trong bầu không khí trang trọng. Đây là thời điểm thích hợp mà Tập thể lãnh đạo Công ty mong muốn có cơ hội được cùng hội ngộ và tri ân những đại diện tiêu biểu trong hệ thống phân phối, được sẻ chia những thành công, những điều còn trăn trở, chưa thể hoàn thành và cùng nhau hướng đến những mục tiêu mới, thành công mới và thịnh vượng hơn.",
    content: `<p><span><span><span>Sáng ngày 19/12/2024, tại Công ty Cổ phần Xi măng Cẩm Phả, lễ ký kết hợp đồng giữa Công ty với các nhà phân phối xi măng trong năm 2024 đã diễn ra trong bầu không khí trang trọng. Đây là thời điểm thích hợp mà Tập thể lãnh đạo Công ty mong muốn có cơ hội được cùng hội ngộ và tri ân những đại diện tiêu biểu trong hệ thống phân phối, được sẻ chia những thành công, những điều còn trăn trở, chưa thể hoàn thành và cùng nhau hướng đến những mục tiêu mới, thành công mới và thịnh vượng hơn</span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Lễ ký kết hợp đồng giữa các nhà phân phối xi măng: Tạo nền tảng vững chắc cho thị trường tiêu thụ/Picture1.webp"/></p>

<p><em><span><span><span><span>Tham dự buổi lễ có đồng chí </span></span></span></span></em><span><span><span>Thiếu tá Nguyễn Thái Hưng - Tổng Giám đốc Công ty, đồng chí Thượng tá Ngô Thế Hưng – Bí thư Đảng ủy, Phó Giám đốc Công ty, đồng chí Hoàng Quang Thoa – Ủy viên Ban Thường vụ Đảng ủy, Phó Giám đốc Công ty, Chỉ huy các phòng ban, phân xưởng và đại diện Ban Giám đốc và bộ phận kinh doanh của hơn 20 Nhà phân phối đến từ các khu vực Hà Nội, Bắc Giang, Hải Dương, Quảng Ninh, Thái Bình, Nam Định, Hải Phòng</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Lễ ký kết hợp đồng giữa các nhà phân phối xi măng: Tạo nền tảng vững chắc cho thị trường tiêu thụ/Picture2.webp"/></span></span></span></p>

<p><span><span><span>Mở đầu buổi lễ, đồng chí Thiếu tá Nguyễn Thái Hưng - Tổng Giám đốc Công ty có đôi lời chia sẻ về hoạt động sản xuất kinh doanh trong năm 2024 - một năm đặc biệt khó khăn và thử thách. Với kinh nghiệm dày dặn và kiến thức chuyên sâu trong ngành xây dựng, <span>với những chiến lược, những nghiên cứu tìm hiểu về lĩnh vực xi măng, về cách hoạt động kinh doanh của các nhà máy xi măng khác</span>. Đồng chí Thiếu tá Nguyễn Thái Hưng quyết tâm đưa Công ty có những bước chuyển mình mới trong hoạt động sản xuất kinh doanh, cam kết đồng hành cùng với các nhà phân phối trong thời gian tới. Thay mặt toàn bộ đội ngũ CBCNV Công ty, đồng chí gửi lời cảm ơn chân thành và sâu sắc nhất tới Quý Nhà phân phối đã đồng hành, hợp tác, cũng như ủng hộ Công ty trong thời gian qua</span>. <span>Chính những sự yêu mến và niềm tin vào chất lượng và thương hiệu XMCP của Quý Nhà phân phối là niềm tự hào và thành công lớn nhất của XMCP, đồng thời cũng là động lực để XMCP tiếp tục phát triển trong tương lai.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture3.webp"/></span><i><span>Đồng chí Thiếu tá Nguyễn Thái Hưng - Tổng Giám đốc Công ty phát biểu tại buổi lễ</span></i></span></span></p>

<p><span><span><span>Tại buổi lễ, Ban điều hành của Công ty đã lắng nghe, tiếp thu các ý kiến đóng góp của các Nhà phân phối. Trong đó, ông Hoàng Ngọc Thảo – Đại diện Nhà phân phối Công ty TNHH SXKD Vật tư CNN và XD Trường Giang cảm thấy vui mừng và vinh dự là một trong những nhà phân phối đồng hành và gắn bó lâu năm với Công ty. Ông kỳ vọng Công ty sẽ có những phương án thúc đẩy hoạt động kinh doanh năm 2025, linh hoạt chính sách bán hàng ngắn hạn, vận dụng chính sách để áp dụng trên thị trường trong giai đoạn khó khăn này, để tạo ra một nền tảng vững chắc để gia tăng tiêu thụ xi măng trong các năm tiếp theo.</span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture4.webp"/></span></span></span></p>
<p><span><span><em><span>Ông Hoàng Ngọc Thảo – Đại diện Nhà phân phối Công ty TNHH SXKD Vật tư CNN và XD Trường Giang phát biểu tại buổi lễ</span></em></span></span></p>

<p><span><span><span>Công ty đã tiến hành ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2025. Ban lãnh đạo Công ty và đại diện các Nhà phân phối bày tỏ niềm vui mừng và tin tưởng sự kiện ký kết hợp tác sẽ mở ra cơ hội cho sự phát triển của các bên. Hy vọng trong thời gian sắp tới, mối quan hệ hợp tác của Công ty và các Quý Nhà phân phối càng lúc càng bền chặt. XMCP sẽ không ngừng phát triển, nâng cao chất lượng sản phẩm, dịch vụ để có thể phục vụ Quý khách hàng tốt hơn.</span></span></span></p>
<p><span><span><span>Một số hình ảnh</span></span></span></p>
<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture5.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture6.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture7.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture8.webp"/></span></span></span></p>

<p><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20gi%E1%BB%AFa%20c%C3%A1c%20nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20xi%20m%C4%83ng:%20T%E1%BA%A1o%20n%E1%BB%81n%20t%E1%BA%A3ng%20v%E1%BB%AFng%20ch%E1%BA%AFc%20cho%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20ti%C3%AAu%20th%E1%BB%A5/Picture9.webp"/></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/Picture9.webp",
    date: "20 Tháng 12, 2024",
    author: "admin"
  },
  {
    id: 34,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Chủ tịch Tập đoàn: Hy vọng vào sự chuyển mình của Xi măng Cẩm Phả",
    description: "Ngày 5/10/2024, Chủ tịch kiêm Tổng Giám đốc Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) Tào Đức Thắng, cùng Phó Tổng Giám đốc Tập đoàn Đào Xuân Vũ và lãnh đạo Văn phòng, Ban Đầu tư – Xây dựng, Ban Đầu tư tài chính, Ban Chiến lược, Ban Tổ chức Nhân lực, Ban Kỹ thuật của Tập đoàn đã có chuyến thăm và làm việc tại Công ty CP Xi măng Cẩm Phả. Đây là hoạt động quan trọng nhằm rà soát, đánh giá tình hình hoạt động của Xi măng Cẩm Phả cũng như thảo luận các giải pháp hỗ trợ Công ty phát triển mạnh mẽ trong thời gian tới.",
    content: `<p><span><span><span><span><span><span>Ngày 5/10/2024, Chủ tịch kiêm Tổng Giám đốc Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) Tào Đức Thắng, cùng Phó Tổng Giám đốc Tập đoàn Đào Xuân Vũ và lãnh đạo Văn phòng, Ban Đầu tư – Xây dựng, Ban Đầu tư tài chính, Ban Chiến lược, Ban Tổ chức Nhân lực, Ban Kỹ thuật của Tập đoàn đã có chuyến thăm và làm việc tại Công ty CP Xi măng Cẩm Phả. Đây là hoạt động quan trọng nhằm rà soát, đánh giá tình hình hoạt động của Xi măng Cẩm Phả cũng như thảo luận các giải pháp hỗ trợ Công ty phát triển mạnh mẽ trong thời gian tới.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu tich Tap doan den tham va lam viec tai XMCP/Picture1.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Giai đoạn 2021-2024 là giai đoạn khó khăn với ngành Xi măng nói riêng và nền kinh tế nói chung. Riêng ngành xi măng phải đối diện với khủng hoảng kép do chi phí sản xuất tăng, ngành xi măng hiện đang mất cân đối cung – cầu nghiêm trọng. Bất động sản trầm lắng, các dự án chậm triển khai, đầu tư công chậm giải ngân, tiêu thụ nội địa và kênh xuất khẩu liên tục sụt giảm dẫn đến ngành xi măng kinh doanh không hiệu quả.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu tich Tap doan den tham va lam viec tai XMCP/Picture2.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty CP Xi măng Cẩm Phả phát biểu tại buổi làm việc</span></span></span></i></span></span></span></p>
<p><span><span><span><span><span><span>Buổi làm việc là dịp để lãnh đạo các đơn vị trao đổi, lắng nghe những khó khăn, thách thức mà Xi măng Cẩm Phả đang gặp phải. Từ đó, Viettel sẽ đưa ra các giải pháp thiết thực, hỗ trợ Công ty vượt qua khó khăn, tiếp tục phát triển bền vững và giữ vững vị thế trên thị trường xi măng.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu%20tich%20Tap%20doan%20den%20tham%20va%20lam%20viec%20tai%20XMCP/Picture3.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Trong buổi làm việc, đ/c Thiếu tướng Tào Đức Thắng khẳng định Tập đoàn sẽ tiếp tục đồng hành cùng với Xi măng Cẩm Phả bằng thông điệp <b><i>"Một ngày ở Viettel thì mãi là người Viettel"</i></b> và cam kết không thoái vốn khỏi Công ty. Đây là một tín hiệu tích cực, tạo sự yên tâm cho đội ngũ CBCNV tại Xi măng Cẩm Phả trước những thách thức của thị trường.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu%20tich%20Tap%20doan%20den%20tham%20va%20lam%20viec%20tai%20XMCP/Picture4.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Đ/c Thiếu tướng Tào Đức Thắng - Chủ tịch kiêm Tổng Giám đốc Tập đoàn Công nghiệp - Viễn thông Quân đội chỉ đạo tại buổi làm việc</span></span></span></i></span></span></span></p>
<p><span><span><span><span><span><span>Chủ tịch Tập đoàn nhấn mạnh, Tập đoàn, Công ty cần tập trung vào các giải pháp ngắn hạn và dài hạn để thúc đẩy doanh thu, tăng cường hiệu quả sản xuất. Đ/c chỉ đạo thành lập một tổ công tác, do đ/c Đại tá Đào Xuân Vũ - Phó Tổng Giám đốc Tập đoàn, Chủ tịch Hội đồng quản trị Công ty chủ trì, nhằm xây dựng các phương án kinh doanh hiệu quả. Tổ công tác này sẽ tập trung vào việc xây dựng chính sách giá hợp lý, mở rộng kênh bán hàng, tập trung vào các khách hàng tiềm năng, đặc biệt là những dự án quy mô lớn của Nhà nước, tối ưu chi phí tài chính, đồng thời khai thác thêm các ngành nghề mới dựa trên thế mạnh của Xi măng Cẩm Phả. Tập đoàn sẽ giao nhiệm vụ cụ thể cho các đơn vị thành viên trong Tập đoàn để hỗ trợ Xi măng Cẩm Phả trong việc tiêu thụ sản phẩm, giúp đảm bảo nguồn tiêu thụ ổn định và nâng cao năng lực cạnh tranh.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu%20tich%20Tap%20doan%20den%20tham%20va%20lam%20viec%20tai%20XMCP/Picture5.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><i><span><span><span>Đ/c Đại tá Đào Xuân Vũ - Phó Tổng Giám đốc Tập đoàn, Chủ tịch Hội đồng quản trị Công ty CP Xi măng Cẩm Phả phát biểu tại buổi làm việc</span></span></span></i></span></span></span></p>
<p><span><span><span><span><span><span>Chủ tịch Tào Đức Thắng kêu gọi toàn thể CBCNV Xi măng Cẩm Phả phải đồng lòng, nỗ lực không ngừng, hăng say làm việc và tin tưởng vào đường lối lãnh đạo của Tập đoàn. Sự quyết tâm của mỗi cá nhân trong tập thể sẽ là yếu tố then chốt giúp Công ty vượt qua khó khăn hiện tại và đạt được những thành tựu mới trong tương lai.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Chu%20tich%20Tap%20doan%20den%20tham%20va%20lam%20viec%20tai%20XMCP/Picture6.webp"/></span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Cam kết của Chủ tịch Tập đoàn Tào Đức Thắng và những giải pháp trên đã mang đến sự tự tin và quyết tâm cho toàn thể CBCNV Xi măng Cẩm Phả, tạo động lực mạnh mẽ để Công ty vượt qua giai đoạn khó khăn, phát triển ổn định và bền vững trong tương lai.</span></span></span></span></span></span></p>
<p><span><span><span><span><span><span>Chuyến thăm không chỉ là sự quan tâm của lãnh đạo Tập đoàn mà còn là bước ngoặt quan trọng, mở ra nhiều cơ hội mới cho Xi măng Cẩm Phả trong việc ổn định sản xuất kinh doanh, mở rộng thị trường, tối ưu hóa sản xuất và khẳng định vị thế trên thị trường xi măng Việt Nam.</span></span></span></span></span></span></p>`,
    image: "https://ximangcampha.vn/storage/post/Picture6.webp",
    date: "5 Tháng 10, 2024",
    author: "admin"
  },
  {
    id: 33,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả và Xi măng Hạ Long ký kết hợp tác cùng phát triển",
    description: "Ngày 27/8/2024, Công ty CP Xi măng Cẩm Phả và Công ty CP Xi măng Hạ Long cùng ký kết thỏa thuận hợp tác về việc xuất khẩu xi măng và clinker. Buổi làm việc diễn ra tại trụ sở Công ty CP Xi măng Cẩm Phả trong không khí hợp tác toàn diện và cởi mở.",
    content: `<p>Ngày 27/8/2024, Công ty CP Xi măng Cẩm Phả và Công ty CP Xi măng Hạ Long cùng ký kết thỏa thuận hợp tác về việc xuất khẩu xi măng và clinker. Buổi làm việc diễn ra tại trụ sở Công ty CP Xi măng Cẩm Phả trong không khí hợp tác toàn diện và cởi mở.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Xi măng Cẩm Phả và Xi măng Hạ Long ký kết hợp tác cùng phát triển/Picture1.webp"/></p>

<p><span><span><span><span><span><span>Tại buổi làm việc, đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty CP Xi măng Cẩm Phả đã có bài phát biểu quan trọng. Đ/c nhấn mạnh: Công ty CP Xi măng Cẩm Phả tự hào với thế mạnh về vị trí địa lý nằm bên bờ Vịnh Bái Tử Long, cùng với hệ thống cảng biển hiện đại, thuận tiện cho các phương tiện đường thủy tiếp cận, nhập xuất hàng. Việc ký kết hợp tác giữa Xi măng Cẩm Phả và Xi măng Hạ Long chính là sự phối hợp của hai đơn vị có thế mạnh riêng biệt, tạo thành thế mạnh chung. Đồng thời, đ/c tin rằng sự hợp tác này sẽ góp phần đưa những sản phẩm chất lượng cao và trải nghiệm tốt nhất đến với khách hàng.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Xi%20m%C4%83ng%20C%E1%BA%A9m%20Ph%E1%BA%A3%20v%C3%A0%20Xi%20m%C4%83ng%20H%E1%BA%A1%20Long%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20t%C3%A1c%20c%C3%B9ng%20ph%C3%A1t%20tri%E1%BB%83n/Picture2.webp"/></span></span></span><i><span><span><span>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty CP Xi măng Cẩm Phả phát biểu tại buổi làm việc</span></span></span></i></span></span></span></p>

<p><span><span><span><span><span><span>Cuộc gặp gỡ giữa hai công ty không chỉ đơn thuần là một cuộc họp, mà còn là một cơ hội để chia sẻ kinh nghiệm, hỗ trợ lẫn nhau và thảo luận về những phương án hợp tác hiệu quả trong việc xuất khẩu xi măng và clinker. Sau thời gian làm việc và thảo luận chi tiết, hai bên đã đi đến thống nhất ký kết thỏa thuận hợp tác xuất khẩu xi măng và clinker.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Xi%20m%C4%83ng%20C%E1%BA%A9m%20Ph%E1%BA%A3%20v%C3%A0%20Xi%20m%C4%83ng%20H%E1%BA%A1%20Long%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20t%C3%A1c%20c%C3%B9ng%20ph%C3%A1t%20tri%E1%BB%83n/Picture3.webp"/></span></span></span></span></span></span><i><span><span><span>Đ/c Mai Hồng Hải – Chủ tịch Hội đồng quản trị kiêm Tổng Giám đốc Công ty CP Xi măng Hạ Long</span></span></span></i></p>

<p><span><span><span><span><span><span>Theo thỏa thuận, dự kiến trong tháng 10 năm 2024, Công ty CP Xi măng Cẩm Phả và Công ty CP Xi măng Hạ Long sẽ triển khai xuất khẩu đơn hàng xi măng PCB40 công nghiệp sang thị trường Nam Phi với tổng số lượng 40.000 tấn. Trong đó, Công ty CP Xi măng Cẩm Phả sẽ cung cấp 20.000 tấn, và Công ty CP Xi măng Hạ Long sẽ cung cấp 20.000 tấn.</span></span></span></span></span></span></p>

<p><span><span><span><span><span><span><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Xi%20m%C4%83ng%20C%E1%BA%A9m%20Ph%E1%BA%A3%20v%C3%A0%20Xi%20m%C4%83ng%20H%E1%BA%A1%20Long%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20t%C3%A1c%20c%C3%B9ng%20ph%C3%A1t%20tri%E1%BB%83n/Picture4.webp"/></span></span></span></span></span></span></p>

<p><span><span><span><span><span><span>Đây là bước khởi đầu quan trọng cho sự hợp tác giữa hai Công ty. Cả hai bên đều kỳ vọng rằng sự hợp tác này sẽ không ngừng mở rộng và trở nên lớn mạnh hơn theo thời gian, với mục tiêu triển khai các đơn hàng lớn sang các thị trường quốc tế khác. </span></span></span></span></span></span></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Xi%20m%C4%83ng%20C%E1%BA%A9m%20Ph%E1%BA%A3%20v%C3%A0%20Xi%20m%C4%83ng%20H%E1%BA%A1%20Long%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20t%C3%A1c%20c%C3%B9ng%20ph%C3%A1t%20tri%E1%BB%83n/Picture5.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/Picture5.webp",
    date: "30 Tháng 8, 2024",
    author: "admin"
  },
  {
    id: 32,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Công ty Cổ phần Xi măng Cẩm Phả tuyên truyền Tháng hành động phòng, chống ma túy năm 2024",
    description: "Trong những năm qua, tệ nạn ma tuý ở Việt Nam vẫn đang diễn biến hết sức phức tạp và có xu hướng gia tăng cùng với việc xuất hiện nhiều loại ma tuý mới như: Heroin, cần sa, ma tuý đá, thuốc lắc, bóng cười, viên ma túy tổng hợp...được đối tượng buôn bán ngụy trang một cách tinh vi; lôi kéo người sử dụng dẫn đến nghiện ngập. Đáng báo động, đối tượng sử dụng ma túy tập trung ở độ tuổi thanh niên, thậm chí đã bắt đầu trẻ hóa đến tuổi vị thành niên và học sinh.",
    content: `<p>Trong những năm qua, tệ nạn ma tuý ở Việt Nam vẫn đang diễn biến hết sức phức tạp và có xu hướng gia tăng cùng với việc xuất hiện nhiều loại ma tuý mới như: Heroin, cần sa, ma tuý đá, thuốc lắc, bóng cười, viên ma túy tổng hợp...được đối tượng buôn bán ngụy trang một cách tinh vi; lôi kéo người sử dụng dẫn đến nghiện ngập. Đáng báo động, đối tượng sử dụng ma túy tập trung ở độ tuổi thanh niên, thậm chí đã bắt đầu trẻ hóa đến tuổi vị thành niên và học sinh. Những kẻ buôn bán ma túy thường dụ dỗ các đối tượng học sinh, sinh viên bằng cách cho hút không mất tiền, khi đã nghiện thì các em sẽ trở thành công cụ để chúng kiếm tiền, đưa vào con đường: trộm cắp, cướp giật, mua bán ma túy... vấn nạn này trở thành một hiểm hoạ lớn đối với toàn xã hội, đe doạ trực tiếp tới cuộc sống của mỗi con người, cộng đồng xã hội. Theo báo cáo của Ủy ban quốc gia về phòng chống AIDS và tệ nạn ma túy, mại dâm thì có tới 70% các vụ án hình sự liên quan đến ma túy và người nghiện ma túy, hầu hết những vụ mất trật tự công cộng, đâm chém kinh hoàng liên quan tới người nghiện ma túy.</p>
<p>Đến nay, Công ty Cổ phần Xi măng Cẩm Phả vẫn thường xuyên tuyên truyền và kiểm soát các hoạt đông và hành vi sử dụng chất ma túy của CBCNV. Công ty ngoài việc thường xuyên tuyên truyền bằng các khẩu hiệu, bằng các buổi tuyên truyền pháp luật, tuyên truyền trên các phương tiện nội bộ… còn tổ chức các buổi khám sức khỏe định kỳ, khám sức khỏe đột xuất đối với các đối tượng trong diện nghi ngờ nhằm ngăn chặn kịp thời các hành vi sử dụng, buôn bán các chất ma túy.</p>
<p>Tháng hành động phòng, chống ma túy năm 2024 được triển khai trong tháng 6 với chủ đề <strong>“Chung tay xây dựng xã, phường, thị trấn sạch ma túy”. </strong>Mục tiêu Tháng hành động là tập trung đẩy mạnh công tác tuyên truyền, tạo nên một chiến dịch truyền thông phòng, chống ma túy trên phạm vi toàn tỉnh, tạo chuyển biến mạnh mẽ về ý thức trách nhiệm, hành động của cả hệ thống chính trị và các tầng lớp nhân dân trong công tác phòng, chống ma túy.</p>
<p>Đề nghị CBCNV Công ty Cổ phần Xi măng Cẩm Phả hãy tích cực tham gia vào việc phòng ngừa, ngăn chặn và đấu tranh với tệ nạn ma tuý bằng các hành động thiết thực:</p>
<p>- Giáo dục thành viên trong gia đình, thân nhân về tác hại của ma tuý và thực hiện quy định của pháp luật về phòng, chống ma tuý;</p>
<p>- Quản lý chặt chẽ, ngăn chặn thành viên trong gia đình tham gia tệ nạn ma tuý;</p>
<p>- Khi phát hiện các hành vi mua bán, sử dụng, trồng cây có chứa chất ma tuý cần báo ngay cho cơ quan công an hoặc cơ quan có thẩm quyền nơi gần nhất;</p>
<p>- Thực hiện đúng chỉ định của thầy thuốc về sử dụng thuốc gây nghiện, thuốc hướng thần để chữa bệnh (nếu có sử dụng);</p>
<p>- Tham gia, hỗ trợ hoạt động cai nghiện ma tuý tại các cơ sở cai nghiện và tại cộng đồng; theo dõi, giúp đỡ người đã cai nghiện ma tuý hoà nhập cộng đồng; phòng, chống tái nghiện.</p>
<p>Vì tương lai của bản thân và gia đình, vì thế hệ mai sau, vì sự tồn vong của dân tộc. Chúng ta quyết ngăn chặn, bài trừ tận gốc tệ nạn ma tuý ra khỏi cuộc sống đem lại sự bình yên cho mọi nhà và đảm bảo trật tự, an toàn xã hội./.</p>`,
    image: "https://ximangcampha.vn/frontend/images/no-images.jpg",
    date: "5 Tháng 7, 2024",
    author: "admin"
  },
  {
    id: 31,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Bế mạc giải thể thao truyền thống Công ty CP Xi măng Cẩm Phả lần thứ 16",
    description: "Chiều ngày 19/6/2024, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Lễ bế mạc Giải thể thao truyền thống Công ty lần thứ 16 tại sân bóng Công ty. Tham dự buổi lễ có sự tham gia của Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc, thành viên Hội đồng quản trị, Ban Kiểm soát, Trưởng phó các đơn vị, Ban chấp hành các Tổ chức quần chúng, các vận động viên tham gia thi đấu các môn và đông đảo các cổ động viên đến từ các đơn vị trong Công ty.",
    content: `<p>Chiều ngày 19/6/2024, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Lễ bế mạc Giải thể thao truyền thống Công ty lần thứ 16 tại sân bóng Công ty. Tham dự buổi lễ có sự tham gia của Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc, thành viên Hội đồng quản trị, Ban Kiểm soát, Trưởng phó các đơn vị, Ban chấp hành các Tổ chức quần chúng, các vận động viên tham gia thi đấu các môn và đông đảo các cổ động viên đến từ các đơn vị trong Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai The Thao lan 16/Picture2.webp"/></p>

<p>Nhằm hưởng ứng kỷ niệm 16 năm ngày thành lập Công ty <em>(05/06/2008 - 05/06/2024)</em>, chào mừng 35 năm ngày thành lập Tập đoàn <em>(01/06/1989 - 01/06/2024)</em> và Đại hội Thi đua Quyết thắng giai đoạn 2019 – 2024, giải thể thao Công ty diễn ra từ ngày 03/5/2024 đến ngày 19/6/2024 với 8 bộ môn: Bóng đá, Cầu lông, Tennis, Kéo co, Nhảy bao bố, Bóng chuyền nam, Bóng chuyền hơi nữ, Bóng bàn.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture3.webp"/></p>

<p>Sự kiện thể thao này đã thu hút đông đảo CBCNV toàn Công ty tham gia. Qua những ngày thi đấu sôi nổi và nhiệt tình, các vận động viên đã cống hiến cho khán giả những trận thi đấu hấp dẫn, đầy kịch tính, tạo không khí vui tươi, phấn khởi và thúc đẩy phong trào thể dục thể thao, rèn luyện thể lực, tinh thần đoàn kết trong toàn Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture4.webp"/></p>

<p>Tại buổi lễ bế mạc, cũng đã diễn ra trận chung kết bộ môn Đá bóng với phần thắng thuộc về Liên quân Phân xưởng Nghiền xi và Đóng bao kết hợp với phòng Điện. Sau hơn 1 tháng tranh tài sôi nổi, thi đấu hấp dẫn Ban tổ chức đã trao 13 giải nhất, 13 giải nhì, 13 giải ba, 2 giải phụ cho từng tập thể, cá nhân tham gia thi đấu xuất sắc nhất.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture5.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture6.webp"/></p>

<p>Giải thể thao truyền thống của Xi măng Cẩm Phả là dịp để các CBCNV, các đơn vị trong Công ty có cơ hội được giao lưu, học hỏi, nâng cao sức khỏe, tăng cường tình đoàn kết, xây dựng cơ quan, đơn vị vững mạnh toàn diện. Tạo không khí thi đua sôi nổi, xây dựng Công ty, đơn vị đạt chuẩn văn hóa. Đồng thời thể hiện quyết tâm hoàn thành xuất sắc nhiệm vụ đã đặt ra trong năm 2024. Tiếp tục phát huy truyền thống đoàn kết, đồng tâm, hiệp lực cùng nhau lập kế hoạch, cùng nhau triển khai thực hiện tốt mọi nhiệm vụ được giao, phát huy mạnh mẽ tinh thần bất diệt để ngọn lửa cháy mãi sáng mãi, cùng với niềm tin gặt hái được nhiều thắng lợi và thành công, góp phần xây dựng cơ quan, đơn vị vững mạnh toàn diện.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture7.webp"/></p>

<p>Được khởi tranh từ đầu tháng 5 với 8 bộ môn thi đấu, giải thể thao đã được diễn ra thành công tốt đẹp. Những màn trình diễn hết mình, quyết tâm chiến thắng, tinh thần đoàn kết giữa các đội chơi, những cái bắt tay thật chặt, những tiếng hò reo vang dội của các cổ động viên, và những nụ cười sảng khoái vui vẻ chính là những món quà tinh thần lớn lao mà Giải thể thao truyền thống Công ty lần thứ 16 đã mang đến cho từng CBCNV trong “Đại gia đình Xi măng Cẩm Phả”.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024./Giai%20The%20Thao%20lan%2016/Picture8.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/Picture2.webp",
    date: "21 Tháng 6, 2024",
    author: "admin"
  },
  {
    id: 30,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức thành công Đại hội Thi đua Quyết thắng giai đoạn 2019 - 2024",
    description: "Sáng ngày 18/6/2024, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Đại hội Thi đua Quyết thắng giai đoạn 2019 - 2024. Tham dự Đại hội có các đồng chí trong Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc, thành viên Hội đồng Quản trị, Ban Kiểm soát, trưởng các đơn vị, đại diện các tổ chức quần chúng và gần 50 đại biểu đại diện cho các tập thể, cá nhân có thành tích tiêu biểu xuất sắc trong phong trào Thi đua Quyết thắng của các đơn vị trực thuộc Công ty.",
    content: `<p>Sáng ngày 18/6/2024, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Đại hội Thi đua Quyết thắng giai đoạn 2019 - 2024. Tham dự Đại hội có các đồng chí trong Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc, thành viên Hội đồng Quản trị, Ban Kiểm soát, trưởng các đơn vị, đại diện các tổ chức quần chúng và gần 50 đại biểu đại diện cho các tập thể, cá nhân có thành tích tiêu biểu xuất sắc trong phong trào Thi đua Quyết thắng của các đơn vị trực thuộc Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture1.webp"/></p>

<p>Thấm nhuần lời dạy của Chủ tịch Hồ Chí Minh: <strong><em>“Thi đua là yêu nước, yêu nước thì phải thi đua. Và những người thi đua là những người yêu nước nhất”</em></strong>, trong giai đoạn từ năm 2019 – 2024, phong trào Thi đua Quyết thắng trong Tập đoàn Công nghiệp – Viễn thông Quân đội nói chung và Công ty CP Xi măng Cẩm Phả nói riêng luôn được coi trọng, thực hiện nghiêm túc, đạt hiệu quả thiết thực.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture2.webp"/></p>

<p>Nhận thức đúng vai trò của công tác thi đua, khen thưởng và phong trào Thi đua Quyết thắng, những năm qua, công tác này luôn được Công ty không ngừng đổi mới, sáng tạo, phát triển toàn diện, thực sự trở thành động lực cổ vũ, khích lệ cán bộ, đảng viên, quần chúng, người lao động hăng hái trong học tập, công tác, lao động, sản xuất, hoàn thành xuất sắc nhiệm vụ được giao. Để phong trào Thi đua Quyết thắng phát triển đúng hướng, lan tỏa sâu rộng và đạt kết quả thiết thực, Đảng ủy, Ban Tổng Giám đốc Công ty thường xuyên quán triệt sâu sắc quan điểm, chủ trương của Đảng, chính sách, pháp luật của Nhà nước, các nghị quyết, chỉ thị của cấp trên về công tác thi đua, khen thưởng. Trên cơ sở đó, cấp ủy, chỉ huy các cấp xây dựng và triển khai thực hiện kế hoạch công tác thi đua, khen thưởng gắn với các phong trào, cuộc vận động của các cấp, các ngành.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture3.webp"/></p>

<p>Với các chủ đề thi đua xuyên suốt qua các năm: <strong><em>“Đổi mới – Đột phá – Tiên phong”, “Thần tốc hơn – Quyết liệt hơn – Thành công hơn”, “Tập trung nguồn lực – Hiện thực mục tiêu”, “Đoàn kết – Đồng hành – Chinh phục những đỉnh cao”, “Đoàn kết – Sáng tạo – Tự tin – Bứt phá”, “Chung sức đồng lòng – Cộng hưởng giá trị - Kiến tạo tương lai”</em></strong>, 5 năm qua, phong trào Thi đua Quyết thắng của Công ty được triển khai thực hiện đồng bộ, sôi nổi, lan tỏa đến mọi cán bộ, đảng viên, quần chúng. Qua đó, ổn định tình hình sản xuất kinh doanh của Công ty, đảm bảo việc làm và thu nhập cho người lao động.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture4.webp"/></p>
<p><em>Đ/c Đặng Xuân Hùng, TP. Thanh tra – Pháp chế phát biểu tham luận tại Đại hội</em></p>

<p>Tại Đại hội, Công ty đã tuyên dương và khen thưởng đối với 01 tập thể, 20 cá nhân có thành tích xuất sắc, tiêu biểu trong phong trào Thi đua Quyết thắng giai đoạn 2019 – 2024 cấp Tập đoàn; 02 tập thể, 32 cá nhân có thành tích xuất sắc trong phong trào Thi đua Quyết thắng giai đoạn 2019 – 2024 cấp Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture5.webp"/></p>

<p>Phát biểu chỉ đạo tại Đại hội, đồng chí Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty nhiệt liệt biểu dương và chúc mừng những thành tích mà tập thể CBCNV Công ty đã đạt được trong thời gian qua, đồng thời định hướng một số nhiệm vụ trọng tâm trong thời gian tới. Đồng chí khẳng định, để có được thành công và kết quả như ngày hôm nay, cấp ủy, chỉ huy các cấp trong Công ty luôn quan tâm lãnh đạo, chỉ đạo và có nhiều giải pháp triển khai thực hiện đối với công tác thi đua, khen thưởng và phong trào Thi đua Quyết thắng, cùng với đó là tinh thần đoàn kết, khắc phục khó khăn của CBCNV trong đơn vị mà tiêu biểu là các tập thể, cá nhân điển hình tiên tiến, những tấm gương sáng trong lao động sản xuất và xây dựng đơn vị. Đồng chí cũng hy vọng trong giai đoạn tiếp theo, toàn thể CBCNV đồng sức đồng lòng, tiếp tục phát huy mối đoàn kết, chủ động khắc phục khó khăn, vững bước tiến lên lập nhiều thành tích mới, góp phần xây dựng Công ty ngày càng vững mạnh.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture6.webp"/></p>
<p><em>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu chỉ đạo tại Đại hội</em></p>

<p>Trong thời gian tới, Công ty CP Xi măng Cẩm Phả tiếp tục duy trì những biện pháp hay, cách làm mới trong xây dựng, nhân rộng điển hình tiên tiến, tạo bầu không khí thi đua cởi mở, hăng say trong toàn đơn vị. Đồng thời, quan tâm sâu sắc đến môi trường làm việc, thu nhập, đời sống văn hóa tinh thần cho người lao động kết hợp khen thưởng kịp thời, công khai, minh bạch để tạo thành sức mạnh tổng hợp đưa Phong trào Thi đua Quyết thắng đi vào chiều sâu, hiệu quả thiết thực.      </p>

<p><em>Một số hình ảnh</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture7.webp"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture8.webp"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture9.webp"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture10.webp"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/DH/Picture11.webp"/></em></p>`,
    image: "https://ximangcampha.vn/storage/post/Picture1.webp",
    date: "19 Tháng 6, 2024",
    author: "admin"
  },
  {
    id: 29,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2023",
    description: "Ngày 06-07/6/2024 tại Legacy Yên Tử - Quảng Ninh, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị tổng kết tri ân khách hàng năm 2023 với sự góp mặt của các Nhà Phân phối, các đối tác của Xi măng Cẩm Phả trong khu vực phía Bắc. Tham dự hội nghị có Ban Tổng Giám đốc, trưởng các đơn vị, cùng đại diện các tổ chức quần chúng trong Công ty",
    content: `<p>       Ngày 06-07/6/2024 tại Legacy Yên Tử - Quảng Ninh, Công ty Cổ phần Xi măng Cẩm Phả đã long trọng tổ chức Hội nghị tổng kết tri ân khách hàng năm 2023 với sự góp mặt của các Nhà Phân phối, các đối tác của Xi măng Cẩm Phả trong khu vực phía Bắc. Tham dự hội nghị có Ban Tổng Giám đốc, trưởng các đơn vị, cùng đại diện các tổ chức quần chúng trong Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2023/Picture3.webp"/></p>

<p>      Năm 2023 được đánh giá là năm khó khăn nhất trong lịch sử của ngành Xi măng Việt Nam nói chung và Công ty CP Xi măng Cẩm Phả nói riêng. Tuy nhiên, được sự chia sẻ gắn bó của các Nhà Phân phối nên Xi măng Cẩm Phả vẫn duy trì tốt hoạt động sản xuất kinh doanh, giữ vững thị phần bán hàng của các thị trường trọng điểm. Trong hội nghị, đồng chí Đại tá Trần Quang Hưng – Tổng Giám đốc Công ty gửi lời cảm ơn sâu sắc đến các quý Nhà Phân phối đã luôn tin tưởng và đồng hành cùng Công ty trong thời gian qua.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2023/Picture2.webp"/></p>

<p>   Hội nghị đã dành thời gian tổng kết tình hình sản xuất kinh doanh của Xi măng Cẩm Phả và tôn vinh các Nhà Phân phối trong năm 2023. Cũng tại Hội nghị, Xi măng Cẩm Phả đã dành tặng những món quà đầy ý nghĩa như lời tri ân sâu sắc vì những đóng góp của các Nhà Phân phối. Mong muốn các Nhà Phân phối cùng Xi măng Cẩm Phả hướng tới một năm 2024 <strong><em>“Chung sức đồng lòng”,</em></strong> vượt mọi khó khăn./.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Xi măng Cẩm Phả tổ chức thành công Hội nghị khách hàng năm 2023/Picture4.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/ta1.webp",
    date: "11 Tháng 6, 2024",
    author: "admin"
  },
  {
    id: 28,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức thành công Hội nghị Người lao động năm 2024",
    description: "Ngày 28/3/2024, Công ty CP Xi măng Cẩm Phả đã tổ chức Hội nghị Người lao động năm 2024. Đến dự và chỉ đạo Hội nghị có các đồng chí trong Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc và 61 đại biểu là cán bộ lãnh đạo, quản lý, người lao động tiêu biểu đại diện cho 643 CBCNV Công ty.",
    content: `<p>Ngày 28/3/2024, Công ty CP Xi măng Cẩm Phả đã tổ chức Hội nghị Người lao động năm 2024. Đến dự và chỉ đạo Hội nghị có các đồng chí trong Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc và 61 đại biểu là cán bộ lãnh đạo, quản lý, người lao động tiêu biểu đại diện cho 643 CBCNV Công ty. </p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/HNNLD2024/a1.jpg"/></p>

<p>Tại Hội nghị, các đại biểu đã được nghe đại diện người sử dụng lao động và đại diện BCH Công đoàn Công ty trình bày lần lượt báo cáo kết quả sản xuất, kinh doanh năm 2023; Báo cáo hoạt động Công đoàn năm 2023; Phương hướng, nhiệm vụ năm 2024. Đồng thời, hội nghị lắng nghe đại diện người sử dụng phúc đáp những đề xuất, kiến nghị của CBCNV về các vấn đề liên quan đến quyền, lợi ích của người lao động; Các chế độ, chính sách của Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/HNNLD2024/a2.jpg"/></p>

<p>Đ/c Vũ Thị Thoa - Chủ tịch Công đoàn mở đầu Hội nghị</p>

<p>Năm 2023, trong bối cảnh chung thế giới và trong nước có nhiều khó khăn thách thức, tình hình sản xuất kinh doanh của Công ty gặp nhiều khó khăn, đặc biệt về điều kiện tiêu thụ sản phẩm, do cung vượt cầu, thị trường xuất khẩu gặp khó khăn, một số nhà máy xi măng phải dừng dây chuyền sản xuất hoặc chạy cầm chừng. Được sự quan tâm của Lãnh đạo Tập đoàn Công nghiệp – Viễn thông Quân đội cùng với sự quyết liệt, linh hoạt trong công tác chỉ đạo điều hành, sự nỗ lực của tập thể CBCNV, Công ty đã duy trì ổn định sản xuất, cơ bản hoàn thành các chỉ tiêu kế hoạch đề ra, đảm bảo việc làm và thu nhập ổn định cho người lao động.</p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/HNNLD2024/a3.jpg"/></p>

<p>Phát biểu tại Hội nghị, đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty bày tỏ sự đánh giá cao những nỗ lực, đóng góp của CBCNV trong việc thực hiện các mục tiêu sản xuất kinh doanh năm 2023. Đồng thời, kêu gọi mỗi CBCNV sẽ tiếp tục nâng cao tinh thần trách nhiệm trong lao động sản xuất, chủ động sáng tạo vượt khó, tuân thủ các nội quy, quy định, quy trình sản xuất của công ty; Đồng lòng, sát cánh cùng ban lãnh đạo Công ty phấn đấu hoàn thành các chỉ tiêu, kế hoạch sản xuất kinh doanh năm 2024.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/HNNLD2024/a4.jpg"/></p>

<p>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Hội nghị</p>

<p>Thỏa ước lao động tập thể 2024 được 100% đại biểu người lao động biểu quyết nhất trí. Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đại diện người sử dụng lao động và đ/c Vũ Thị Thoa - Chủ tịch Công đoàn đại diện tập thể người lao động cùng thực hiện ký kết Thỏa ước lao động tập thể 2024.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/HNNLD2024/a5.jpg"/></p>

<p>Hội nghị Người lao động năm 2024 đã kết thúc tốt đẹp với sự thống nhất cao của tập thể người lao động trong Công ty thể hiện tinh thần đoàn kết, đồng lòng, quyết tâm chung sức vượt qua khó khăn, thách thức để hoàn thành các chỉ tiêu kế hoạch năm 2024, tạo đà vững chắc cho những năm tiếp theo; Tiếp tục xây dựng Công ty CP Xi măng Cẩm Phả ngày càng phát triển.</p>`,
    image: "https://ximangcampha.vn/storage/post/9/a5.jpg",
    date: "31 Tháng 3, 2024",
    author: "admin"
  },
  {
    id: 27,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Phó TGĐ Tập đoàn Đại tá Đào Xuân Vũ - Gặp mặt đầu xuân ấm áp và đặc biệt đối với Công ty Cổ phần Xi măng Cẩm phả",
    description: "Sáng ngày 16/02/2024, trong bầu không khí tưng bừng, phấn khởi của những ngày làm việc đầu năm mới Giáp Thìn 2024. Công ty Cổ Phần Xi măng Cẩm Phả vô cùng vinh dự khi là một trong những đơn vị được tiếp đón đoàn công tác của Ban lãnh đạo Tập đoàn tới thăm và chúc Tết Công ty.",
    content: `<p>Sáng ngày 16/02/2024, trong bầu không khí tưng bừng, phấn khởi của những ngày làm việc đầu năm mới Giáp Thìn 2024. Công ty Cổ Phần Xi măng Cẩm Phả vô cùng vinh dự khi là một trong những đơn vị được tiếp đón đoàn công tác của Ban lãnh đạo Tập đoàn tới thăm và chúc Tết Công ty.</p>
<p>Tham dự buổi gặp mặt có sự góp mặt của các đồng chí Đại tá Đào Xuân Vũ – Phó TGĐ Tập đoàn – Chủ tịch HĐQT; đồng chí Nguyễn Thị Hải Lý – Trưởng Ban Đầu tư Tài chính; đồng chí Lê Bá Tân – Trưởng Ban Kỹ thuật; Ban Tổng Giám đốc Công ty, Chỉ huy các phòng ban, phân xưởng, Chủ tịch Công đoàn, Hội phụ nữ, Bí thư Đoàn thanh niên Công ty Cổ phần Xi măng Cẩm Phả và Chi nhánh phía Nam tham dự qua cầu truyền hình.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p1.jpg"/></p>

<p>Trong buổi gặp mặt, đồng chí Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, TGĐ Công ty báo cáo những chính sách quan tâm, chu đáo của Tập đoàn đối với đời sống của toàn thể CBCNV trong Công ty. Tình hình hoạt động sản xuất kinh doanh, tiến độ xuất hàng của Công ty trong dịp Tết Nguyên đán. Qua đó thấy được dấu hiệu của sự khởi sắc sản lượng tiêu thụ trong kế hoạch SXKD được đặt ra. Công ty Cổ Phần Xi măng Cẩm Phả đã đảm bảo an ninh an toàn tuyệt đối, nghiêm túc chấp hành, công tác trực chỉ huy, trực ban được duy trì nghiêm. Đồng thời thay mặt tập thể CBCNV Công ty thể hiện quyết tâm hoàn thành xuất sắc nhiệm vụ SXKD đã đặt ra trong năm 2024. Tiếp tục phát huy truyền thống đoàn kết, đồng tâm, hiệp lực cùng nhau lập kế hoạch, cùng nhau triển khai thực hiện tốt mọi nhiệm vụ được giao, phát huy mạnh mẽ tinh thần bất diệt để ngọn lửa cháy mãi sáng mãi, cùng với niềm tin một năm mới với nhiều thắng lợi và thành công, góp phần xây dựng cơ quan, đơn vị vững mạnh toàn diện.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p2.jpg"/></p>

<p><em>Đồng chí Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu trong buổi gặp mặt</em></p>

<p>Thay mặt Ban lãnh đạo Tập đoàn, đồng chí Đại tá Đào Xuân Vũ – Phó TGĐ Tập đoàn – Chủ tịch HĐQT gửi lời chúc tới toàn thể CBCNV Công ty một năm mới tràn đầy sức khỏe, hạnh phúc và thành công. Đồng thời khẳng định Xi măng Cẩm Phả đã, đang và tiếp tục là một trong những đơn vị quan trọng đóng góp vào sự phát triển lớn mạnh của Tập đoàn Viettel.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p3.jpg"/></p>

<p><em>Đồng chí Đại tá Đào Xuân Vũ – Phó TGĐ Tập đoàn</em> <em>– Chủ tịch HĐQT gửi lời chúc tới toàn thể CBCNV Công ty</em></p>

<p>Sau phần chúc Tết của Phó TGĐ Tập đoàn, đồng chí Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, TGĐ Công ty Cổ Phần Xi măng Cẩm Phả đã bày tỏ sự biết ơn sâu sắc trước sự quan tâm của Ban Lãnh đạo Tập đoàn, đặc biệt là của đồng chí Đại tá Đào Xuân Vũ đối với Công ty.</p>
<p>Kết thúc buổi gặp mặt, đồng chí Đại tá Đào Xuân Vũ - Phó TGĐ Tập đoàn đã đến thăm trực tiếp từng phòng ban, phân xưởng để gặp gỡ, trò chuyện, gửi những phong bao lì xì như một lời chúc mừng năm mới, gửi sự may mắn đến các CBCNV trong Công ty. Sự quan tâm chu đáo của Ban Lãnh đạo Tập đoàn chính là nguồn động lực vô cùng to lớn đối với mọi CBCNV Công ty. Nét mặt rạng rỡ của các CBCNV chào đón đồng chí Phó TGĐ Tập đoàn và các thành viên của đoàn công tác là câu trả lời rõ ràng nhất cho sự nhiệt huyết, ý chí, tinh thần hoàn thành xuất sắc nhiệm vụ SXKD đã đặt ra trong năm 2024. Cũng như quyết tâm phấn đấu đưa Tập đoàn và Công ty ngày càng phát triển, vững mạnh hơn.</p>
<p><em>Một số hình ảnh</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p4.jpg"/></em></p>

<p><em>Đồng chí Phó TGĐ Tập đoàn trao lì xì đầu năm tới toàn thể CBCNV khối văn phòng</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p5.jpg"/></em></p>

<p><em>Nét mặt rạng rỡ của các CBCNV chào đón đồng chí Phó TGĐ Tập đoàn và các thành viên của đoàn công tác</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p6.jpg"/></em></p>

<p><em>Đoàn công tác của Ban lãnh đạo Tập đoàn trao lì xì đầu năm tới CBCNV khối sản xuất</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p7.jpg"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p8.jpg"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/PTGD TD/p9.jpg"/></em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/p5.jpg",
    date: "18 Tháng 2, 2024",
    author: "admin"
  },
  {
    id: 26,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Hội nghị trao quyết định bổ nhiệm Phó trưởng phòng Kỹ thuật Sản xuất",
    description: "Ngày 26/01/2024, Công ty CP Xi măng Cẩm Phả tổ chức Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất đối với đ/c Phạm Quang Vinh.",
    content: `<p>Ngày 26/01/2024, Công ty CP Xi măng Cẩm Phả tổ chức Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất đối với đ/c Phạm Quang Vinh.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture1.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture1.webp"/></p>

<p>Phát biểu giao nhiệm vụ, thay mặt Ban Tổng Giám đốc Công ty, đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã gửi lời chúc mừng và ghi nhận sự nỗ lực hoàn thành tốt nhiệm vụ trong công tác chuyên môn của đ/c Phạm Quang Vinh trong suốt quá trình công tác. Đ/c cũng hy vọng đ/c Vinh tiếp tục giữ vững phong độ, luôn nêu cao vai trò và trách nhiệm, giữ gìn đạo đức, phẩm chất của người lãnh đạo, tiếp tục cố gắng phấn đấu hơn nữa, đoàn kết, đồng lòng và gương mẫu để hoàn thành xuất sắc nhiệm vụ được giao.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture2.webp"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture2.png"/></p>
<p><em>Đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Hội nghị</em></p>

<p>Phát biểu nhận nhiệm vụ, đ/c Phạm Quang Vinh - Tân Phó Trưởng phòng Kỹ thuật Sản xuất trân trọng cảm ơn Ban Lãnh đạo Công ty, toàn thể CBCNV đã luôn tin tưởng, quan tâm và tạo điều kiện giúp đỡ trong quá trình công tác tại đơn vị và đã ghi nhận sự phấn đấu của đ/c. Đồng thời, đ/c Vinh khẳng định rằng sẽ luôn cố gắng hơn nữa trong công tác, quyết tâm phấn đấu, không ngừng học hỏi sáng tạo, giữ vững lập trường, bản lĩnh chính trị và phẩm chất đạo đức để hoàn thành xuất sắc nhiệm vụ được giao và thúc đẩy hoạt động SXKD của Công ty trong thời gian tới.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture3.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Kỹ thuật Sản xuất/Picture3.webp"/></p>
<p><em>Đ/c Phạm Quang Vinh - Tân Phó Trưởng phòng Kỹ thuật Sản xuất phát biểu tại Hội nghị</em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_35.jpg",
    date: "1 Tháng 2, 2024",
    author: "admin"
  },
  {
    id: 25,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024",
    description: "Ngày 20/12/2023, Công ty CP Xi măng Cẩm Phả đã tổ chức thành công Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của Xi măng Cẩm Phả năm 2024.",
    content: `<p>Ngày 20/12/2023, Công ty CP Xi măng Cẩm Phả đã tổ chức thành công Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của Xi măng Cẩm Phả năm 2024.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture1.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture1.webp"/></p>

<p>Tham dự buổi lễ ký kết có Đảng ủy, Ban Tổng Giám đốc Công ty, Ủy viên Hội đồng Quản trị, Trưởng các đơn vị tại nhà máy chính và đại diện Ban Giám đốc và bộ phận kinh doanh của 22 Nhà phân phối đến từ các khu vực Hà Nội, Bắc Giang, Hải Dương, Quảng Ninh, Thái Bình, Nam Định, Hải Phòng.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture2.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture2.webp"/></p>

<p>Mở đầu buổi lễ, đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã có đôi lời chia sẻ về hoạt động sản xuất kinh doanh trong năm 2023 - một năm đặc biệt khó khăn và thử thách. Thị trường bất động sản đóng băng trên toàn quốc; Thuế xuất khẩu clinker tăng từ 5% lên 10% gây sụt giảm lớn về sản lượng tiêu thụ, ảnh hưởng lớn đến hoạt động sản xuất kinh doanh của Công ty. Thay mặt toàn bộ đội ngũ CBCNV Công ty, đ/c gửi lời cảm ơn chân thành và sâu sắc nhất tới Quý Nhà phân phối đã đồng hành, hợp tác, cũng như ủng hộ Công ty trong thời gian qua. Chính những sự yêu mến và niềm tin vào chất lượng và thương hiệu XMCP của Quý Nhà phân phối là niềm tự hào và thành công lớn nhất của XMCP, đồng thời cũng là động lực để XMCP tiếp tục phát triển trong tương lai.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture3.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture3.webp"/></p>
<p><em>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại buổi lễ</em></p>

<p>Tại buổi lễ, Ban điều hành của Công ty đã lắng nghe, tiếp thu các ý kiến đóng góp của các Nhà phân phối. Trong đó, ông Hoàng Ngọc Thảo – Đại diện Nhà phân phối Công ty TNHH SXKD Vật tư CNN và XD Trường Giang phát biểu về phương án thúc đẩy hoạt động kinh doanh năm 2024, linh hoạt chính sách bán hàng ngắn hạn, vận dụng chính sách để áp dụng trên thị trường trong giai đoạn khó khăn này.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture4.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture4.webp"/></p>
<p><em>Ông Hoàng Ngọc Thảo – Đại diện Nhà phân phối Công ty TNHH SXKD Vật tư CNN và XD Trường Giang phát biểu tại buổi lễ</em></p>

<p>Công ty đã tiến hành ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024. Ban lãnh đạo Công ty và đại diện các Nhà phân phối bày tỏ niềm vui mừng và tin tưởng sự kiện ký kết hợp tác sẽ mở ra cơ hội cho sự phát triển của các bên.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture5.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture5.webp"/></p>

<p>Hy vọng trong thời gian sắp tới, mối quan hệ hợp tác của Công ty và các Quý Nhà phân phối càng lúc càng bền chặt. XMCP sẽ không ngừng phát triển, nâng cao chất lượng sản phẩm, dịch vụ để có thể phục vụ Quý khách hàng tốt hơn.</p>

<p><em>Một số hình ảnh</em></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture6.webp"/><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture6.jpg"/></em></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture7.webp"/></p>
<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture7.jpg"/></em></p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Lễ ký kết hợp đồng với các Nhà phân phối về việc tiêu thụ các sản phẩm của XMCP năm 2024/Picture8.webp"/></p>
<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/L%E1%BB%85%20k%C3%BD%20k%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20v%E1%BB%9Bi%20c%C3%A1c%20Nh%C3%A0%20ph%C3%A2n%20ph%E1%BB%91i%20v%E1%BB%81%20vi%E1%BB%87c%20ti%C3%AAu%20th%E1%BB%A5%20c%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20c%E1%BB%A7a%20XMCP%20n%C4%83m%202024/Picture8.jpg"/></em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_33.jpg",
    date: "21 Tháng 12, 2023",
    author: "admin"
  },
  {
    id: 24,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Phụ nữ XMCP gắn kết và lan tỏa tinh thần người phụ nữ hiện đại",
    description: "Chủ tịch Hồ Chí Minh sinh thời đã luôn đề cao vai trò, vị trí, tầm quan trọng của người phụ nữ Việt Nam trong quá trình phát triển của lịch sử dân tộc. Đặc biệt qua hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, phụ nữ Việt Nam đã trở thành lực lượng cách mạng quan trọng, chị em phụ nữ không quản khó khăn, hiểm nguy, người xung phong ra tiền tuyến, người nhiệt huyết ở hậu phương. Dù ở bất kể vị trí nào, phụ nữ Việt Nam luôn hoàn thành xuất sắc mọi nhiệm vụ được giao.",
    content: `<p>Chủ tịch Hồ Chí Minh sinh thời đã luôn đề cao vai trò, vị trí, tầm quan trọng của người phụ nữ Việt Nam trong quá trình phát triển của lịch sử dân tộc. Đặc biệt qua hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, phụ nữ Việt Nam đã trở thành lực lượng cách mạng quan trọng, chị em phụ nữ không quản khó khăn, hiểm nguy, người xung phong ra tiền tuyến, người nhiệt huyết ở hậu phương. Dù ở bất kể vị trí nào, phụ nữ Việt Nam luôn hoàn thành xuất sắc mọi nhiệm vụ được giao.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/1.jpg"/></p>

<p>Và hôm nay, dưới sự lãnh đạo của Đảng, cũng như sự phát triển của đất nước, phụ nữ Việt Nam thời kỳ mới đang ngày càng thể hiện được vai trò của mình trong xã hội. Trong xu thế hội nhập cùng thế giới, phụ nữ VN tiếp tục tiếp thu những nét tính cách thời đại, đồng thời vẫn luôn giữ vững và phát huy nét đẹp truyền thống dân tộc. Không chỉ dừng lại ở 8 chữ vàng <strong><em>“Đoàn kết, sáng tạo, hội nhập, phát triển”</em></strong>, phụ nữ Việt Nam ngày càng hiện đại, văn minh, giỏi giang</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/2.jpg"/></p>

<p>Nhằm phát huy và lan tỏa tinh thần người phụ nữ Việt Nam, nhân dịp kỷ niệm 93 năm ngày thành lập Hội Liên hiệp Phụ nữ Việt Nam (20/10/1930 – 20/10/2023), được sự ủng hộ của Đảng ủy, Ban Lãnh đạo Công ty, Hội Phụ nữ Công ty CP Xi măng Cẩm Phả đã tổ chức nhiều hoạt động sôi nổi, đầy ý nghĩa dành cho toàn thể nữ CBCNV Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/3.jpg"/></p>

<p>Chiếm tỷ lệ không nhỏ trong lực lượng lao động của Công ty, các CBCNV nữ Công ty CP Xi măng Cẩm Phả luôn tham gia vào mọi hoạt động SXKD, từ những công việc kinh doanh, gián tiếp đến quản lý, vận hành trực tiếp máy móc, thiết bị. Những công việc vất vả tưởng chừng như chỉ có nam giới thực hiện nhưng các chị em luôn sẵn sàng và hoàn thành nhiệm vụ được giao.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/4.jpg"/></p>

<p>Không chỉ làm tốt trong công tác chuyên môn, các hoạt động đoàn thể, phát động phong trào văn hóa, văn nghệ, thể dục, thể thao cũng được các chị em nhiệt tình hưởng ứng và tham gia.</p>
<p>Đến với cuộc thi <strong><em>“WOW Viettel”</em></strong>, với mục tiêu lan tỏa, ánh xạ giá trị văn hóa cốt lõi của Viettel, Công ty CP Xi măng Cẩm Phả gửi tới hội thi tiết mục nhảy dân vũ với chủ đề <strong><em>“Hãy vươn cao hơn”</em></strong> do chính các CBCNV nữ Công ty thể hiện tài năng. Qua đó, Xi măng Cẩm Phả muốn gửi gắm thông điệp về tầm quan trọng của việc xây dựng và thực hành giá trị văn hóa cốt lõi trong tổ chức, khích lệ sức mạnh tinh thần thành giá trị lao động, tạo ra giá trị mới, góp phần xây dựng Công ty CP Xi măng Cẩm Phả nói riêng và Tập đoàn Công nghiệp – Viễn thông Quân đội nói chung ngày càng phát triển vững mạnh.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/5.jpg"/></p>

<p><em>Dưới cái nắng hanh khô của mùa thu, những giọt mồ hôi thấm đẫm lưng áo nhưng cũng không thể làm giảm nhiệt huyết, hòa mình vào âm nhạc sôi động của bản mashup <strong>“Viettel ca”</strong> và <strong>“Hãy vươn cao hơn”</strong>.</em></p>
<p>Chiều ngày 19/10/2023, Công ty đã tổ chức giao lưu thể thao nội dung thi đấu “Bóng chuyền hơi nữ” giữa các đơn vị trong Công ty nhằm thúc đẩy tinh thần đoàn kết, tạo sự gắn kết trong Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/6.jpg"/></p>

<p>Các vận động viên đã thi đấu nhiệt tình, cống hiến nhiều pha bóng hay, nhiều trận đấu hấp dẫn cho khán giả hâm mộ. Đặc biệt màn so tài cân sức, gay cấn giữa Liên quân PX.Nghiền xi &amp; Đóng bao và PX.Lò nung với Liên quân phòng Kiểm soát Chất lượng và PX.Nghiền liệu, trong trận chung kết. Kết quả: Giải Nhất thuộc về Liên quân phòng Kiểm soát Chất lượng và PX.Nghiền liệu; Liên quân PX.Nghiền xi &amp; Đóng bao và PX.Lò nung đạt Giải Nhì; Giải Ba thuộc về đội Văn phòng.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/7.jpg"/></p>

<p><strong><em>“Đằng sau sự thành công của một người đàn ông luôn có hình bóng của một người phụ nữ và đằng sau sự bền vững của một Công ty cũng luôn cần có sự đóng góp của nhiều chị em phụ nữ”.</em></strong> Một lần nữa, xin chúc <strong><em>“một nửa không thể thiếu của Viettel nói chung và XMCP nói riêng”</em></strong> luôn vui vẻ, hạnh phúc, chúc chị em mãi mãi xinh đẹp, giỏi giang, hạnh phúc, luôn là những bông hoa rực rỡ và là động lực phấn đấu cho cánh mày râu.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/ngay phu nu 20-10/8.jpg"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9/1_2.jpg",
    date: "20 Tháng 10, 2023",
    author: "admin"
  },
  {
    id: 23,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Xi măng Cẩm Phả tổ chức tuyên truyền, thực tập phương án chữa cháy, cứu nạn cứu hộ năm 2023",
    description: "Nhằm trang bị kiến thức cho CBCNV thực hiện tốt công tác phòng cháy, chữa cháy và nâng cao sự phối hợp chỉ huy về kỹ thuật chữa cháy, cứu nạn, cứu hộ giữa lực lượng chữa cháy ở cơ sở với lực lượng chữa cháy chuyên nghiệp, sáng ngày 13/10/2023, Công ty CP Xi măng Cẩm Phả đã phối hợp với phòng Cảnh sát PCCC&CNCH - Công an tỉnh Quảng Ninh tổ chức tuyên truyền, thực tập phương án chữa cháy và cứu nạn, cứu hộ.",
    content: `<p>Nhằm trang bị kiến thức cho CBCNV thực hiện tốt công tác phòng cháy, chữa cháy và nâng cao sự phối hợp chỉ huy về kỹ thuật chữa cháy, cứu nạn, cứu hộ giữa lực lượng chữa cháy ở cơ sở với lực lượng chữa cháy chuyên nghiệp, sáng ngày 13/10/2023, Công ty CP Xi măng Cẩm Phả đã phối hợp với phòng Cảnh sát PCCC&amp;CNCH - Công an tỉnh Quảng Ninh tổ chức tuyên truyền, thực tập phương án chữa cháy và cứu nạn, cứu hộ.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP to chuc thuc tap phuong an PCCC&amp;CHCN/Picture1.jpg"/></p>

<p>8h00 sáng ngày 13/10/2023, tại phòng họp tầng 3, Công ty đã tổ chức lớp huấn luyện, đào tạo nghiệp vụ, phổ biến những kiến thức pháp luật cơ bản về công tác PCCC&amp;CNCH hiện hành; các biện pháp phòng ngừa sự cố cháy, nổ và tai nạn có thể xảy ra; tính năng, tác dụng của các loại trang thiết bị, phương tiện chữa cháy;... cho các thành viên trong đội PCCC&amp;CNCH cơ sở Công ty.</p>
<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture2.jpg"/></p>

<p>Tiếp nối chương trình, buổi thực tập phương án PCCC&amp;CNCH cũng được triển khai thực hiện trong buổi sáng cùng ngày. Buổi thực tập phương án có sự tham gia của đ/c Thượng tá Ngô Thế Hưng, Bí thư Đảng ủy, Phó Tổng Giám đốc, Trưởng Ban Chỉ huy PCCC&amp;CNCH Công ty, đ/c Nguyễn Văn Trang, Trưởng phòng Tổ chức – Chính trị, Phó Ban Chỉ huy PCCC&amp;CNCH Công ty. Cùng với đó là sự phối hợp chặt chẽ của đội CBCNV tham gia tập luyện, thực tập phương án chữa cháy cấp Công ty và các cán bộ, chiến sĩ thuộc phòng Cảnh sát PCCC&amp;CNCH – Công an tỉnh Quảng Ninh.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture3.jpg"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture4.jpg"/></p>
<p><em>Đ/c Nguyễn Văn Trang Trưởng phòng Tổ chức – Chính trị, Phó Ban Chỉ huy PCCC&amp;CNCH Công ty trực tiếp chỉ huy buổi thực tập phương án</em></p>

<p>Tình huống giả định cháy vào hồi 9h30 sáng ngày 13/10/2023, xảy ra cháy tại kho chứa vỏ bao xi măng, nguyên nhân do vi phạm nội quy an toàn PCCC trong kho. Ngọn lửa nhanh chóng lan sang khu vực kho chứa vỏ bao gây cháy lớn, khói khí độc từ đám cháy tỏa ra rất nhiều và bao trùm toàn bộ không gian kho chứa hàng. Do tâm lý hoảng loạn nên trong lúc di chuyển để thoát nạn, 02 người bị thương và mắc kẹt. Diện tích đám cháy ban đầu khoảng 20m2.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture5.jpg"/></p>

<p>Khi tình huống giả định cháy xảy ra, lực lượng phòng cháy chữa cháy cơ sở nhanh chóng triển khai các hoạt động chữa cháy, cứu người bị nạn, đồng thời báo cáo tới phòng Cảnh sát PCCC&amp;CNCH. Nhận được tin báo cháy, lực lượng, phương tiện của Cảnh sát PCCC&amp;CNCH nhanh chóng có mặt tại hiện trường, tổ chức triển khai các hoạt động chữa cháy, cứu hộ cứu nạn.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture6.jpg"/></p>

<p>Sau hơn 30 phút đám cháy giả định đã được khống chế và dập tắt hoàn toàn, toàn bộ người bị nạn đã được giải cứu. Buổi diễn tập đã được chuẩn bị kỹ lưỡng và thực hiện tuyệt đối nghiêm túc, an toàn, đảm bảo đúng yêu cầu, kỹ thuật đề ra. Lực lượng PCCC tại cơ sở đã thao tác thành thạo, nhanh gọn, phối hợp ăn ý, nhịp nhàng với lực lượng chuyên nghiệp.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture7.jpg"/></p>

<p>Thành công của buổi tuyên truyền và thực tập phương án PCCC&amp;CNCH đã góp phần nâng cao ý thức PCCC cho CBCNV Công ty và xây dựng các kỹ năng thoát hiểm khi có hỏa hoạn xảy ra, đồng thời tăng cường khả năng thường trực, sẵn sàng ứng phó, xử lý các tình huống cháy, nổ và cứu nạn, cứu hộ của lực lượng PCCC tại chỗ.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20to%20chuc%20thuc%20tap%20phuong%20an%20PCCC&amp;CHCN/Picture8.jpg"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_31.jpg",
    date: "17 Tháng 10, 2023",
    author: "admin"
  },
  {
    id: 22,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP ra quân tham dự Ngày Hội Văn hóa Thể thao năm 2023",
    description: "Sáng ngày 30/9/2023, tại Nhà thi đấu đa năng thành phố Cẩm Phả, ngày Hội Văn hóa Thể thao CNVCLĐ tỉnh Quảng Ninh lần thứ XI năm 2023 Cụm số 2 - Thành phố Cẩm Phả đã diễn ra sôi nổi với hơn 600 vận động viên đến từ 129 Công đoàn cơ sở, được tổ chức thành 44 đoàn thi đấu, tranh tài ở 4 bộ môn thi đấu: Cầu lông, bóng bàn, kéo co, nhảy bao bố.",
    content: `<p>Sáng ngày 30/9/2023, tại Nhà thi đấu đa năng thành phố Cẩm Phả, ngày Hội Văn hóa Thể thao CNVCLĐ tỉnh Quảng Ninh lần thứ XI năm 2023 Cụm số 2 - Thành phố Cẩm Phả đã diễn ra sôi nổi với hơn 600 vận động viên đến từ 129 Công đoàn cơ sở, được tổ chức thành 44 đoàn thi đấu, tranh tài ở 4 bộ môn thi đấu: Cầu lông, bóng bàn, kéo co, nhảy bao bố.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/NGAY HOI THE THAO/Picture1.jpg"/></p>

<p>Đây là hoạt động thiết thực tạo khí thế thi đua sôi nổi, phấn khởi trong CNVCLĐ thành phố Cẩm Phả chào mừng 60 năm Ngày thành lập tỉnh Quảng Ninh (30/10/1963 - 30/10/2023), 87 năm ngày Truyền thống công nhân Vùng mỏ - Truyền thống ngành Than (12/11/1936 - 12/11/2023). Qua đó, thu hút đông đảo sự quan tâm, tham gia của CNVCLĐ trong toàn thành phố, sự quan tâm cổ vũ của người dân, từ đó khẳng định vị trí, vai trò và nâng cao hơn nữa vị thế của tổ chức Công đoàn.</p>
<p>Nhằm phát huy phong trào truyền thống thể thao, tăng cường rèn luyện thể chất của CBCNV và giao lưu học hỏi kinh nghiệm giữa các doanh nghiệp khác trên địa bàn thành phố Cẩm Phả, được sự chấp thuận, ủng hộ của Ban Tổng Giám đốc Công ty, BCH Công đoàn cơ sở Công ty CP Xi măng Cẩm Phả đã tổ chức, triển khai vận động, khuyến khích các đoàn viên đăng ký và cùng tham gia Ngày Hội Văn hóa Thể thao CNVCLĐ tỉnh Quảng Ninh lần thứ XI năm 2023.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/NGAY%20HOI%20THE%20THAO/Picture2.jpg"/></p>

<p>Công ty ra quân với đội hình gồm 20 vận động viên ưu tú và xuất sắc nhất cùng với rất nhiều các cổ động viên nhiệt tình đến từ các phòng ban, phân xưởng Nhà máy chính. Tiếng hò reo, cổ vũ nhiệt tình của các cổ động viên Xi măng Cẩm Phả đã trở thành nguồn động lực to lớn để các VĐV thêm nhiệt huyết, cháy hết mình trong các trận thi đấu.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/NGAY%20HOI%20THE%20THAO/Picture3.jpg"/></p>

<p>Sau một ngày tranh tài đầy kịch tính và hấp dẫn, ngày Hội Văn hóa Thể thao CNVCLĐ tỉnh Quảng Ninh lần thứ XI năm 2023 đã kết thúc thành công rực rỡ. Với tinh thần <strong><em>“Kết sức mạnh, nối thành công”</em></strong>, đoàn Xi măng Cẩm Phả đã thi đấu đầy hứng khởi, tràn đầy quyết tâm, kết quả xuất sắc đứng thứ nhì toàn đoàn, trong đó giành giải nhất môn kéo co và giải ba đôi nữ nhảy bao bố.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/NGAY%20HOI%20THE%20THAO/Picture4.jpg"/></p>

<p>Niềm vui còn dư âm sau ngày thi đấu, giao lưu tại ngày Hội văn hóa Thể thao CNVCLĐ tỉnh Quảng Ninh lần thứ XI năm 2023 đã góp phần tạo động lực cho tập thể CBCNV Công ty CP Xi măng Cẩm Phả tiếp tục thi đua, hăng say lao động sản xuất hiệu quả, hoàn thành nhiệm vụ sản xuất kinh doanh của Công ty và xây dựng tổ chức Công đoàn ngày một lớn mạnh.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/NGAY%20HOI%20THE%20THAO/Picture5.jpg"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture2_4.jpg",
    date: "5 Tháng 10, 2023",
    author: "admin"
  },
  {
    id: 21,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Cùng XMCP tổ chức “Đêm tiệc trăng vàng năm 2023” – Giá trị truyền thống mang nét đẹp hiện đại",
    description: "Trung thu ngày nay hiện đại và đầy đủ hơn xưa nhưng có lẽ ai cũng từng khao khát được quay trở về với những ngày Tết Trung thu xưa tuy thiếu thốn nhưng lại tràn ngập niềm vui và tiếng cười. Nơi mà không có ánh điện nhưng lại có ánh trăng sáng ngời, có chị Hằng hiền dịu và chú Cuội tinh nghịch. Đến hẹn lại lên, mỗi mùa Trung thu đến, lòng người lại rộn ràng với nhiều cảm xúc khó tả, có kỷ niệm tuổi thơ bé xen lẫn cảm giác háo hức chờ đợi dịp quây quần bên gia đình.",
    content: `<p><strong><em>“Bóng trăng trắng ngà có cây đa to</em></strong></p>
<p><strong><em>Có thằng cuội già ôm một mối mơ…”</em></strong></p>
<p>Trung thu ngày nay hiện đại và đầy đủ hơn xưa nhưng có lẽ ai cũng từng khao khát được quay trở về với những ngày Tết Trung thu xưa tuy thiếu thốn nhưng lại tràn ngập niềm vui và tiếng cười. Nơi mà không có ánh điện nhưng lại có ánh trăng sáng ngời, có chị Hằng hiền dịu và chú Cuội tinh nghịch. Đến hẹn lại lên, mỗi mùa Trung thu đến, lòng người lại rộn ràng với nhiều cảm xúc khó tả, có kỷ niệm tuổi thơ bé xen lẫn cảm giác háo hức chờ đợi dịp quây quần bên gia đình.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung thu 2023/Picture1.jpg"/></p>

<p>Với mong muốn dành cho các cháu thiếu niên, nhi đồng một tuổi thơ trọn vẹn, vui tươi, hạnh phúc và có những ký ức tươi đẹp, rực rỡ nhất, tối ngày 27/9/2023, tại nhà hàng Hào Thảnh, Công ty CP Xi măng Cẩm Phả đã tổ chức chương trình <strong><em>“Đêm tiệc trăng vàng năm 2023”</em></strong> cho toàn thể các cháu thiếu nhi là con CBCNV trong Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung thu 2023/Picture2.jpg"/></p>

<p>Đến dự đêm hội có các đ/c trong Ban Tổng Giám đốc cùng các đ/c lãnh đạo phòng, ban, phân xưởng trong Công ty. Các bậc phụ huynh cùng hơn 400 cháu thiếu nhi là con CBCNV trong Công ty đã được thưởng thức một đêm hội đầy vui nhộn và ngập tràn cảm xúc.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture3.jpg"/></p>

<p>Phát biểu tại đêm hội, đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã dành những lời yêu thương, động viên, chia sẻ tới các cháu thiếu nhi nhân dịp Tết Trung thu đồng thời khẳng định Đảng ủy; Ban Tổng Giám đốc luôn dành tình cảm đặc biệt quan tâm đến đời sống tinh thần cho tất cả CBCNV cùng gia đình, con em CBCNV và luôn mong muốn không chỉ những CBCNV đang công tác tại Xi măng Cẩm Phả gắn bó, cống hiến nhiều hơn cho Công ty mà còn cả các thế hệ con em cũng gắn bó, xem Công ty là ngôi nhà chung của mình.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture4.jpg"/></p>
<p><em>Đ/c Đại tá Trần Quang Hưng – Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại đêm tiệc</em></p>

<p><em>Đáp lại tình cảm lớn lao đó, đại diện cho các bạn thiếu nhi là con của CBCNV toàn Công ty, cháu Phạm Bảo Hoàng, học sinh trường THCS Bái Tử Long đã gửi lời cảm ơn chân thành khi nhận được sự quan tâm của các bác lãnh đạo, các cô chú, các anh chị trong Công ty đã dành thời gian, công sức tổ chức cho các cháu một ngày lễ thật là vui tươi và bổ ích với nhiều quà bánh và đầy ắp tình yêu thương.</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture5.jpg"/></em></p>
<p><em>Cháu Phạm Bảo Hoàng, đại diện con CBCNV Công ty phát biểu tại đêm tiệc</em></p>

<p>Tham dự Đêm hội, các cháu thiếu niên, nhi đồng đã được hòa mình vào không khí tưng bừng, náo nhiệt của Ngày Tết Trung thu cổ truyền với các hoạt động như: Giao lưu văn nghệ; Chụp ảnh lưu niệm cùng chú hề vặn bóng, Tôn Ngộ Không, Trư Bát Giới, Đường Tăng, Chú Cuội; Hề xiếc bóng khổng lồ; Múa lân. Bên cạnh đó, các cháu được tham gia các trò chơi: Giải ô chữ bí mật – Tìm hiểu về sự tích Ngày Trung thu; Quay số may mắn – Trò chơi thương hiệu của Xi măng Cẩm Phả;… để dành được những phần quà xinh xắn, ý nghĩa do Ban Tổ chức chuẩn bị.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture6.jpg"/></p>

<p>Với cách thức tổ chức độc đáo, sáng tạo, thể hiện sự quan tâm, chia sẻ của Ban lãnh đạo Công ty đối với con em CBCNV trong Công ty cùng sự dẫn dắt chương trình hết sức vui nhộn và dí dỏm của Chú Cuội, <strong><em>“Đêm tiệc trăng vàng năm 2023”</em></strong> đã thực sự mang đến cho các cháu thiếu niên, nhi đồng một Ngày Tết Trung thu thật đầm ấm, ý nghĩa, tạo sân chơi lành mạnh, bổ ích. Qua đó, động viên các cháu thi đua học tập, phấn đấu luôn là con ngoan, trò giỏi tạo sự yên tâm cho bố mẹ công tác tốt, hoàn thành nhiệm vụ sản xuất kinh doanh, góp phần xây dựng Công ty phát triển bền vững.</p>
<p><em>Một số hình ảnh</em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture7.jpg"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture8.jpg"/></em></p>

<p><em><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/trung%20thu%202023/Picture9.jpg"/></em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_29.jpg",
    date: "28 Tháng 9, 2023",
    author: "admin"
  },
  {
    id: 20,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023",
    description: "Công ty CP Xi măng Cẩm Phả luôn coi nguồn nhân lực chính là tài sản quan trọng nhất, vì vậy việc quan tâm và tổ chức khám sức khỏe định kỳ cho CBCNV luôn được Ban Lãnh đạo Công ty rất chú trọng. Việc khám sức khỏe định kỳ hàng năm không chỉ giúp người lao động có thể chủ động theo dõi tình trạng sức khỏe của bản thân, phát hiện sớm, có các biện pháp đề phòng, chữa trị kịp thời, hiệu quả. Hơn nữa, thông qua hoạt động này còn giúp đánh giá được mức độ tương quan giữa sức khỏe và yêu cầu công việc. Từ đó, Công ty đưa ra những chính sách điều chỉnh hợp lý nhằm đảm bảo lợi ích đối với người lao động và sự phát triển của Công ty.",
    content: `<p>Công ty CP Xi măng Cẩm Phả luôn coi nguồn nhân lực chính là tài sản quan trọng nhất, vì vậy việc quan tâm và tổ chức khám sức khỏe định kỳ cho CBCNV luôn được Ban Lãnh đạo Công ty rất chú trọng. Việc khám sức khỏe định kỳ hàng năm không chỉ giúp người lao động có thể chủ động theo dõi tình trạng sức khỏe của bản thân, phát hiện sớm, có các biện pháp đề phòng, chữa trị kịp thời, hiệu quả. Hơn nữa, thông qua hoạt động này còn giúp đánh giá được mức độ tương quan giữa sức khỏe và yêu cầu công việc. Từ đó, Công ty đưa ra những chính sách điều chỉnh hợp lý nhằm đảm bảo lợi ích đối với người lao động và sự phát triển của Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/khám sức khỏe 2023/Picture1.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023/Picture1.webp"/></p>

<p>Hiểu rõ tầm quan trọng của hoạt động khám sức khỏe định kỳ trong công tác chăm sóc và bảo vệ sức khỏe người lao động, trong 02 ngày 27 và 28/9/2023, Công ty CP Xi măng Cẩm Phả đã phối hợp với Bệnh viện Đa khoa Hà Thành tổ chức khám sức khỏe định kỳ cho 476 CBCNV, trong đó khám bệnh nghề nghiệp cho 240 người.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/kh%C3%A1m%20s%E1%BB%A9c%20kh%E1%BB%8Fe%202023/Picture2.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023/Picture2.webp"/></p>

<p>Trong đợt khám sức khoẻ định kỳ lần này, toàn thể CBCNV đã được đội ngũ Y, Bác sỹ Bệnh viện Đa khoa Hà Thành có tay nghề cao, với các trang thiết bị hiện đại khám đầy đủ các nội dung: Khám thể lực (chiều cao, cân nặng, mạch, huyết áp,…), khám lâm sàng (nội khoa, mắt, tai mũi họng, răng hàm mặt, da liễu), khám cận lâm sàng, tiền sử bệnh/tật, sinh hóa máu, siêu âm, chụp X quang tổng quát,… Bên cạnh những danh mục khám lâm sàng, đối với người lao động làm công việc nặng nhọc, độc hại, nguy hiểm còn được khám bệnh nghề nghiệp (bụi phổi, điếc và khám sức khỏe lái xe), đối với lao động nữ được thăm khám sức khỏe sinh sản.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/kh%C3%A1m%20s%E1%BB%A9c%20kh%E1%BB%8Fe%202023/Picture3.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023/Picture3.webp"/></p>

<p>Kết quả khám bệnh của mỗi CBCNV sẽ được nhân viên y tế tổng hợp, phân loại, lập hồ sơ sức khỏe và ghi chú cụ thể những chỉ định của bác sĩ trong điều trị bệnh. Công ty cũng sẽ tổ chức buổi gặp mặt để các bác sĩ có những tư vấn dành cho từng đối tượng cụ thể về các phương pháp bảo vệ sức khoẻ như thay đổi chế độ ăn uống, thói quen sinh hoạt, làm việc, cải tạo môi trường sống, bảo hộ lao động, luyện tập thể dục, thể thao,… cũng như cách theo dõi, phương pháp điều trị trong trường hợp mắc bệnh. Từ kết quả khám sức khỏe sẽ bố trí công việc cho phù hợp với từng người, tạo điều kiện cho người lao động được điều trị bệnh sớm.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/kh%C3%A1m%20s%E1%BB%A9c%20kh%E1%BB%8Fe%202023/Picture4.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023/Picture4.webp"/></p>

<p>Hoạt động khám sức khỏe định kỳ cho CBCNV hàng năm là một việc làm thiết thực. Từ đó, giúp đảm bảo chế độ, quyền lợi, chăm sóc sức khỏe cho người lao động. Đồng thời, qua đó góp phần xây dựng nguồn nhân lực có sức khỏe tốt, hoàn thành tốt mọi nhiệm vụ SXKD của Công ty.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/khám sức khỏe 2023/Picture5.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/Công ty CP Xi măng Cẩm Phả tổ chức khám sức khỏe định kỳ cho CBCNV năm 2023/Picture5.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_27.jpg",
    date: "28 Tháng 9, 2023",
    author: "admin"
  },
  {
    id: 19,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Tôn vinh những ý tưởng, giải pháp sáng tạo và đặc biệt nhất của cuộc thi Innovative – me 2023",
    description: "14h ngày 17/8, những ý tưởng sáng tạo nhất, giải pháp khả thi nhất, những công nghệ đặc biệt nhất của cuộc thi Innovative-me 2023 đã được hé lộ trong Lễ công bố kết quả, tôn vinh và trao giải.",
    content: `<p>14h ngày 17/8, những ý tưởng sáng tạo nhất, giải pháp khả thi nhất, những công nghệ đặc biệt nhất của cuộc thi Innovative-me 2023 đã được hé lộ trong Lễ công bố kết quả, tôn vinh và trao giải.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/inovation-me/min-2055-3.jpg"/></p>

<p>Trong cảm xúc vỡ òa của cổ động viên và nhóm tác giả, đội thi đại diện cho TCT Viễn thông Viettel (VTT) được xướng tên là những <strong>nhà vô địch của Innovative-me 2023</strong>. Năm nay, VTT mang đến cuộc thi giải pháp về nhân sự AI được kỳ vọng trở thành siêu nhân sự của mỗi doanh nghiệp. Giải pháp của VTT được đánh giá cao ở tính thực tiễn và triển vọng phát triển trong tương lai.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/inovation-me/min-1989-3.jpg"/></p>
<p><strong>Hai đội thi về nhì</strong> đến từ TCT Công nghiệp công nghệ cao Viettel (VHT) và TCT Dịch vụ số Viettel (VDS). Nền tảng IOT toàn trình được Giám đốc trung tâm IOT của VHT trình bày là nền tảng hỗ trợ toàn trình, từ tư vấn giải pháp, hỗ trợ tích hợp, tối ưu giải pháp tới mở rộng thị trường, đem tới nhiều giá trị hơn cho khách hàng. Trong khi đó, nền tảng Testing Platform của VDS là giải pháp kiểm thử toàn trình, tập trung và được chuẩn hoá về mặt công cụ dựa trên nền tảng công nghệ của đội ngũ kỹ sư giỏi giúp tổ chức dễ dàng quản lý kiểm thử, tối ưu hoá nguồn lực và tri thức vận hành công cụ.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/inovation-me/min-1947-3.jpg"/></p>

<p><strong>Giải ba</strong> thuộc về các đội thi đến từ: TCT Giải pháp doanh nghiệp Viettel, Viettel Media và Xi măng Cẩm Phả. VTS mang đến chương trình Hệ thống phân tích dữ liệu hình ảnh thu nhận từ drone với tên gọi Viettel Drone Analytics. Hệ thống phục vụ công tác quản lý, giám sát ở các lĩnh vực, từ quân sự, nông nghiệp, tìm kiếm cứu nạn, xây dựng bản đồ, khảo sát địa hình, giám sát an ninh. Đại diện từ Viettel Media mang đến cuộc thi ý tưởng Private sim - ứng dụng cho phép khách hàng đăng ký và sử dụng thêm nhiều số điện thoại mà không cần khe SIM phụ hay sử dụng thêm điện thoại khác. Xuất phát từ nỗi đau của đơn vị cần phải tiết kiệm trong mọi hoạt động SXKD, đại diện Xi măng Cẩm phả tham gia cuộc thi với phương án cải tiến mở rộng vòm lò tại vị trí buồng khói, qua đó, giúp tối ưu nhiên liệu, tối ưu chi phí, góp phần đưa công ty vượt qua giai đoạn khó khăn, phát triển bền vững.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/inovation-me/min-1898-2.jpg"/></p>

<p>Trong khi đó, <strong>giải khuyến khích</strong> được trao cho đội thi Trung tâm Không gian mạng Viettel, Công ty Giao thông số Việt Nam, TCT Bưu chính Viettel và Công ty TM&amp;XNK Viettel. Giải pháp số hóa ngành gán dữ liệu được được đại diện của VTCC trình bày với mục tiêu thực hiện hoạt động gán nhãn dữ liệu phục vụ cho hoạt động huấn luyện mô hình trí tuệ nhân tạo. Đại diện VDTC trình bày giải pháp về tối ưu hậu kiểm tự động, luồng đẩy ra bất thường khi giao dịch giúp so sánh biển số đăng ký với biển số nhận dạng của giao dịch. Trước những khó khăn của những người đồng nghiệp bưu tá, đại diện VTPost mang đến cuộc thi ý tưởng xây dựng hệ thống lưu trữ và phân tích dữ liệu tập trung với hy vọng để những người đồng nghiệp tuyến đầu bớt phần nào vất vả và thay đổi hình ảnh Bưu chính Viettel trong mắt chính người Viettel cũng như trong tâm tưởng khách hàng. Trung tâm Bán lẻ - Viettel Commerce trình bày giải pháp kiểm soát dòng tiền tại hệ thống Viettel Store. Ý tưởng tiên phong trong chuỗi các siêu thị bán lẻ tại Việt Nam, phục vụ công tác theo dõi, quản lý, hạch toán kế toán diễn ra nhanh chóng, thuận lợi.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/inovation-me/min-1858-3.jpg"/></p>

<p>Cũng trong sự kiện, Ban tổ chức đã trao <strong>giải cổ động viên sáng tạo</strong> cho đội cổ vũ của Công ty TM&amp;XNK Viettel. Không chỉ cổ vũ chuyên nghiệp, máu lửa, các CĐV của VCM còn tiếp lửa cho tất cả đội thi khác, thể hiện tinh thần ngôi nhà chung Viettel.</p>
<p>Trước đó, Ban tổ chức cũng xác định đội thi được yêu thích nhất vòng online. Các tác giả từ TCT Bưu chính Viettel với hơn 4.000 bình chọn từ CBNV đã vượt qua 20 ứng viên còn lại để trở thành đội thi được yêu thích nhất.</p>

<p><em>Nguồn : ViettelFamily</em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/min-1947-3_1.jpg",
    date: "23 Tháng 8, 2023",
    author: "admin"
  },
  {
    id: 18,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/7/1947 – 27/7/2023)",
    description: "Nhân kỷ niệm 76 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2023), nhằm phát huy đạo lý \"Uống nước nhớ nguồn\", \" Đền ơn đáp nghĩa\", tri ân đối với gia đình liệt sĩ, gia đình có công với cách mạng và thần đoàn kết, xung kích, tình nguyện của các Tổ chức quần chúng trong việc thực hiện nhiệm vụ xây dựng và bảo vệ Tổ quốc, Công ty Cổ phần Xi măng Cẩm Phả đã tích cực đẩy mạnh tổ chức các hoạt động tri ân có ý nghĩa, tạo phong trào sâu rộng trong đơn vị và địa phương.",
    content: `<p>Nhân kỷ niệm 76 năm Ngày Thương binh - Liệt sĩ (27/7/1947 - 27/7/2023), nhằm phát huy đạo lý <em>"Uống nước nhớ nguồn", " Đền ơn đáp nghĩa", </em>tri ân đối với gia đình liệt sĩ, gia đình có công với cách mạng và thần đoàn kết, xung kích, tình nguyện của các Tổ chức quần chúng trong việc thực hiện nhiệm vụ xây dựng và bảo vệ Tổ quốc, Công ty Cổ phần Xi măng Cẩm Phả đã tích cực đẩy mạnh tổ chức các hoạt động tri ân có ý nghĩa, tạo phong trào sâu rộng trong đơn vị và địa phương.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ/1.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/1.webp"/></p>

<p>Trong không khí trang nghiêm, sáng ngày 27/7/2023, Ban lãnh đạo Công ty cùng gần 30 CBCNV là các đoàn viên, hội viên đến từ các Tổ chức quần chúng Công ty đã phối hợp cùng Đoàn thanh niên phường Cẩm Thạch thành kính dâng hoa, thắp hương tưởng niệm các Anh hùng liệt sĩ tại Nghĩa trang liệt sĩ Thành phố Cẩm Phả và Đài tưởng niệm các Anh hùng liệt sĩ cảng Vũng Đục.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20t%E1%BB%95%20ch%E1%BB%A9c%20nhi%E1%BB%81u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C3%BD%20ngh%C4%A9a%20k%E1%BB%B7%20ni%E1%BB%87m%2076%20n%C4%83m%20ng%C3%A0y%20Th%C6%B0%C6%A1ng%20binh%20%E2%80%93%20Li%E1%BB%87t%20s%C4%A9/2.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/2.webp"/></p>

<p>Cũng trong dịp này, chiều ngày 27/7/2023, đại diện Ban lãnh đạo, BCH Đoàn Thanh niên Công ty đã đến từng phòng, phân xưởng để thăm hỏi và trao tặng 64 suất quà với tổng trị giá 34,5 triệu đồng tới thân nhân CBCNV là thương binh, bệnh binh, người nhiễm chất độc màu da cam, gia đình liệt sĩ.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20t%E1%BB%95%20ch%E1%BB%A9c%20nhi%E1%BB%81u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C3%BD%20ngh%C4%A9a%20k%E1%BB%B7%20ni%E1%BB%87m%2076%20n%C4%83m%20ng%C3%A0y%20Th%C6%B0%C6%A1ng%20binh%20%E2%80%93%20Li%E1%BB%87t%20s%C4%A9/3.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/3.webp"/></p>

<p>Trước đó, ngày 21/7/2023, Đoàn Thanh niên Công ty đã phối hợp cùng các đơn vị trong Cụm đoàn phường Cẩm Thạch, phường Quang Hanh đến thăm và tặng 48 suất quà cho các gia đình thương binh, bệnh binh, thân nhân gia đình liệt sĩ, người có công với cách mạng trên địa bàn.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20t%E1%BB%95%20ch%E1%BB%A9c%20nhi%E1%BB%81u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C3%BD%20ngh%C4%A9a%20k%E1%BB%B7%20ni%E1%BB%87m%2076%20n%C4%83m%20ng%C3%A0y%20Th%C6%B0%C6%A1ng%20binh%20%E2%80%93%20Li%E1%BB%87t%20s%C4%A9/4.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/4.webp"/></p>

<p>Qua chuỗi các hoạt động thiết thực trên, bày tỏ lòng biết ơn sâu sắc của toàn thể CBCNV Xi măng Cẩm Phả đối với sự cống hiến, hy sinh của các Anh hùng liệt sỹ, các thương binh, bệnh binh, người có công với cách mạng. Đồng thời góp phần giáo dục, phát huy đạo lý “ Uống nước nhớ nguồn” của dân tộc, quyết tâm đưa công tác chăm sóc thương binh, bệnh binh, gia đình liệt sĩ, người có công với cách mạng trở thành một nét đẹp trong đời sống ngày thường của mỗi người. Đền đáp xứng đáng sự hy sinh to lớn của các thế hệ cha anh cho cuộc sống hoà bình, tự do, ấm no, hạnh phúc của dân tộc Việt Nam hôm nay và mai sau.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20t%E1%BB%95%20ch%E1%BB%A9c%20nhi%E1%BB%81u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C3%BD%20ngh%C4%A9a%20k%E1%BB%B7%20ni%E1%BB%87m%2076%20n%C4%83m%20ng%C3%A0y%20Th%C6%B0%C6%A1ng%20binh%20%E2%80%93%20Li%E1%BB%87t%20s%C4%A9/5.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/5.webp"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/XMCP%20t%E1%BB%95%20ch%E1%BB%A9c%20nhi%E1%BB%81u%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C3%BD%20ngh%C4%A9a%20k%E1%BB%B7%20ni%E1%BB%87m%2076%20n%C4%83m%20ng%C3%A0y%20Th%C6%B0%C6%A1ng%20binh%20%E2%80%93%20Li%E1%BB%87t%20s%C4%A9/6.jpg"/><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/10/2024/XMCP tổ chức nhiều hoạt động ý nghĩa kỷ niệm 76 năm ngày Thương binh – Liệt sĩ (27/6.webp"/></p>`,
    image: "https://ximangcampha.vn/storage/post/9/2.jpg",
    date: "28 Tháng 7, 2023",
    author: "admin"
  },
  {
    id: 17,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Hội nghị công bố và trao quyết định bổ nhiệm chức vụ Kế toán trưởng Công ty CP Xi măng Cẩm Phả",
    description: "Sáng ngày 21/7/2023, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Hội nghị công bố và trao quyết định bổ nhiệm cán bộ giữ chức vụ Kế toán trưởng Công ty đối với đ/c Đinh Thị Nhung, Phụ trách phòng Tài chính – Kế toán",
    content: `<p>Sáng ngày 21/7/2023, Công ty CP Xi măng Cẩm Phả long trọng tổ chức Hội nghị công bố và trao quyết định bổ nhiệm cán bộ giữ chức vụ Kế toán trưởng Công ty đối với đ/c Đinh Thị Nhung, Phụ trách phòng Tài chính – Kế toán</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị công bố và trao quyết định bổ nhiệm chức vụ Kế toán trưởng Công ty CP Xi măng Cẩm Phả/1.jpg"/></p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị công bố và trao quyết định bổ nhiệm chức vụ Kế toán trưởng Công ty CP Xi măng Cẩm Phả/2.jpg"/></p>

<p>Tại Hội nghị, sau khi đại diện Phòng Tổ chức – Chính trị công bố Quyết định số 350A/QĐ-XMCP ngày 10 tháng 7 năm 2023 của Hội đồng quản trị về việc bổ nhiệm Kế toán trưởng Công ty CP Xi măng Cẩm Phả; Thay mặt Ban Lãnh đạo Công ty, đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã trao Quyết định bổ nhiệm, hoa chúc mừng và phát biểu chỉ đạo, giao nhiệm vụ cho đ/c Đinh Thị Nhung. Đ/c đánh giá cao những nỗ lực và đóng góp của đ/c Nhung trong thời gian qua. Đ/c mong rằng trong thời gian tới, đ/c Nhung tiếp tục nâng cao trình độ chuyên môn, rèn luyện phẩm chất đạo đức, dẫn dắt phòng Tài chính – Kế toán, phối hợp cùng các phòng ban chuyên môn hoàn thành tốt nhiệm vụ được giao.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị công bố và trao quyết định bổ nhiệm chức vụ Kế toán trưởng Công ty CP Xi măng Cẩm Phả/3.jpg"/></p>
<p><em>Đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Hội nghị</em></p>

<p>Phát biểu nhận nhiệm vụ ở cương vị mới, đ/c Đinh Thị Nhung gửi lời cảm ơn sâu sắc đến Ban Lãnh đạo và tập thể CBCNV Công ty đã quan tâm, tin tưởng, giao trọng trách cho đ/c; Đồng thời khẳng định bản thân sẽ tiếp tục nỗ lực, cố gắng hơn nữa để phát huy những kết quả đã đạt được trong thời gian vừa qua, đáp ứng sự kỳ vọng, tin tưởng và giao nhiệm vụ của Ban Lãnh đạo Công ty, cũng như sự tín nhiệm, ủng hộ của toàn thể CBCNV.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị công bố và trao quyết định bổ nhiệm chức vụ Kế toán trưởng Công ty CP Xi măng Cẩm Phả/4.jpg"/></p>
<p><em>Đ/c Đinh Thị Nhung, Tân Kế toán trưởng Công ty phát biểu tại Hội nghị</em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/1.jpg",
    date: "24 Tháng 7, 2023",
    author: "admin"
  },
  {
    id: 16,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Tài chính – Kế toán",
    description: "Ngày 07/7/2023, Công ty CP Xi măng Cẩm Phả tổ chức Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Tài chính – Kế toán đối với đ/c Bùi Thị Hoàng.",
    content: `<p>Ngày 07/7/2023, Công ty CP Xi măng Cẩm Phả tổ chức Hội nghị công bố và trao Quyết định bổ nhiệm Phó Trưởng phòng Tài chính – Kế toán đối với đ/c Bùi Thị Hoàng.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Phó phòng tckt/Picture1.jpg"/></p>

<p>Phát biểu giao nhiệm vụ, thay mặt Ban Tổng Giám đốc Công ty, đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty chúc mừng phòng Tài chính – Kế toán đã được kiện toàn, bổ sung thêm Lãnh đạo; chúc mừng đ/c Bùi Thị Hoàng đã được Ban Lãnh đạo Tập đoàn, Công ty, tập thể CBCNV tin tưởng, tín nhiệm và bổ nhiệm giữ chức vụ quản lý, lãnh đạo cấp phòng. Đ/c mong muốn đ/c Hoàng luôn giữ vững phẩm chất chính trị, bản lĩnh vững vàng, không ngừng nâng cao ý thức, trách nhiệm, nỗ lực phấn đấu, rèn luyện và trau dồi kiến thức, nghiệp vụ chuyên môn cũng như kỹ năng quản lý, điều hành, đoàn kết nhất trí và gương mẫu để hoàn thành xuất sắc nhiệm vụ được giao.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Phó phòng tckt/Picture2.jpg"/></p>

<p><em>Đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty phát biểu tại Hội nghị</em></p>

<p>Phát biểu nhận nhiệm vụ, đ/c Bùi Thị Hoàng - Tân Phó Trưởng phòng Tài chính – Kế toán trân trọng cảm ơn Ban Lãnh đạo Công ty, toàn thể CBCNV đã luôn tin tưởng, quan tâm và tạo điều kiện giúp đỡ trong quá trình công tác tại đơn vị và đã ghi nhận sự phấn đấu của đ/c. Đồng thời, đ/c Hoàng khẳng định rằng sẽ luôn nỗ lực phấn đấu, không ngừng học hỏi, cố gắng hơn nữa trong công tác, giữ vững lập trường, bản lĩnh chính trị và phẩm chất đạo đức để hoàn thành xuất sắc nhiệm vụ được giao, cùng nhau đoàn kết và xây dựng phòng Tài chính – Kế toán và Công ty CP Xi măng Cẩm Phả ngày càng phát triển.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Phó phòng tckt/Picture3.jpg"/></p>

<p><em>Đ/c Bùi Thị Hoàng - Tân Phó Trưởng phòng Tài chính – Kế toán phát biểu tại Hội nghị</em></p>`,
    image: "https://ximangcampha.vn/storage/post/9/Picture1_26.jpg",
    date: "12 Tháng 7, 2023",
    author: "admin"
  },
  {
    id: 15,
    category: 'news',
    categoryLabel: 'Tin tức',
    title: "Hội nghị tổng kết công tác phòng chống thiên tai và tìm kiếm cứu nạn trên địa bàn xã Cộng Hòa năm 2022",
    description: "Ngày 30/06/2023, tại xã Cộng Hòa, thành phố Cẩm Phả, tỉnh Quảng Ninh, UBND xã Cộng Hòa tổ chức Hội nghị tổng kết công tác phòng chống thiên tai và tìm kiếm cứu nạn năm 2022, triển khai nhiệm vụ năm 2023",
    content: `<p>Ngày 30/06/2023, tại xã Cộng Hòa, thành phố Cẩm Phả, tỉnh Quảng Ninh, UBND xã Cộng Hòa tổ chức Hội nghị tổng kết công tác phòng chống thiên tai và tìm kiếm cứu nạn năm 2022, triển khai nhiệm vụ năm 2023</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị tổng kết công tác phòng chống thiên tai/1.jpg"/></p>

<p>Hội nghị tổng kết nhằm đánh giá lại những kết quả đạt được, đồng thời phân tích những nguyên nhân dẫn đến những tồn tại, hạn chế trong công tác phòng chống thiên tai, tìm kiếm cứu nạn của địa phương từ đó các đơn vị liên quan đề xuất, kiến nghị những giải pháp cụ thể để triển khai tốt hơn trong năm 2023.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị tổng kết công tác phòng chống thiên tai/2.jpg"/></p>

<p>Trong những năm qua, Công ty CP Xi măng Cẩm Phả luôn chủ động xây dựng kịch bản, phương án ứng phó với các tình huống thiên tai, sơ tán người, tài sản, đảm bảo an toàn, hạn chế tối đa rủi ro, thiệt hại do thiên tai; Kiện toàn cơ cấu tổ chức và phân công nhiệm vụ cho Ban Chỉ huy phòng chống thiên tai và tìm kiếm cứu nạn cấp Công ty; Thường xuyên nghiên cứu, cập nhật các quy định của Pháp luật cũng như các cấp, các ngành liên quan; Truyền thông CBCNV nghiêm túc thực hiện đầy đủ các quy định của Pháp luật, của Công ty về công tác phòng chống thiên tai và tìm kiếm cứu nạn; Tích cực phối hợp với chính quyền địa phương xã Cộng Hòa, thực hiện tốt công tác phòng chống thiên tai và tìm kiếm cứu nạn trên địa bàn xã; Hàng năm, đơn vị thực hiện tốt chính sách xã hội, ủng hộ xi măng với mục đích quyết tâm xóa nhà tạm, nhà dột nát cho các hộ nghèo tại xã.</p>

<p><img class="my-4 rounded-lg w-full max-h-[500px] object-cover shadow-sm" src="https://ximangcampha.vn/storage/photos/9/2023/Hội nghị tổng kết công tác phòng chống thiên tai/3.jpg"/></p>

<p>Tại Hội nghị, Công ty CP Xi măng Cẩm Phả vinh dự được Chủ tịch UBND xã Cộng Hòa trao tặng bằng khen cho tập thể và cá nhân là đ/c Đại tá Trần Quang Hưng, Phó Bí thư Đảng ủy, Tổng Giám đốc Công ty đã có thành tích xuất sắc trong việc phối hợp thực hiện công tác phòng chống thiên tai, tìm kiếm cứu nạn trên địa bàn xã Cộng Hòa năm 2022. Đây là sự ghi nhận của ban lãnh đạo và nhân dân địa phương đối với Công ty và cũng là động lực để Công ty tiếp tục phát huy, phấn đấu hoàn thành xuất sắc nhiệm vụ trong công tác phòng chống thiên tai, tìm kiếm cứu nạn giai đoạn tiếp theo.</p>`,
    image: "https://ximangcampha.vn/storage/post/9/3.jpg",
    date: "3 Tháng 7, 2023",
    author: "admin"
  },

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
      
      <img src="/assets/design/toan-canh-nld.webp" />
      <p class="caption">Toàn cảnh Hội nghị Người lao động năm 2026</p>
      
      <h3>Phương hướng năm 2026</h3>
      <p>Hội nghị đã thống nhất mục tiêu "Đổi mới - Đồng hành - Phát triển". Trọng tâm là đẩy mạnh chuyển đổi số, tối ưu hóa quy trình vận hành và nâng cao năng lực cạnh tranh trên thị trường vật liệu xây dựng.</p>
    `,
    image: '/assets/design/hoi-nghi-nguoi-lao-dong.webp',
    date: '25 Tháng 3, 2026',
    author: 'Phòng Hành chính',
    
    
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
