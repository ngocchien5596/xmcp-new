# PLAN: SOẠN TRƯỚC CÂU TRẢ LỜI CHO CÁC CÂU HỎI NHANH (QUICK QUESTIONS)

Tài liệu này đề xuất kế hoạch cấu hình sẵn các câu trả lời chuẩn cho danh sách các câu hỏi nhanh (Quick Questions) trên bong bóng chat. Giải pháp này giúp phản hồi hiển thị **ngay lập tức** (giả lập stream tốc độ cao) mà không cần gọi mô hình LLM qua cổng mạng, tối ưu hóa trải nghiệm người dùng và tài nguyên hệ thống.

---

## 1. Các câu hỏi cần cấu hình & Nội dung trả lời chuẩn

Chúng ta sẽ cấu hình câu trả lời tĩnh cho 4 câu hỏi nhanh mặc định hiển thị trên giao diện bong bóng chat:

### Câu hỏi 1: "Giới thiệu chung về Xi măng Cẩm Phả?"
**Nội dung phản hồi:**
> Nhà máy Xi măng Cẩm Phả do Tổng Công ty Cổ phần Xuất nhập khẩu và Xây dựng Việt Nam (Vinaconex) đầu tư. Đây là Nhà máy hiện đại và bậc nhất Việt Nam hiện nay (Áp dụng công nghệ sản xuất xi măng tiên tiến, hiện đại, thiết bị chính theo tiêu chuẩn Châu Âu), dây chuyền sản xuất được điều khiển tự động hóa cao từ công đoạn nhập nguyên liệu cho tới công đoạn xuất sản phẩm. Tháng 10/2013 Tập đoàn Công nghiệp Viễn thông Quân đội (Viettel) đã trở thành cổ đông chiến lược của Công ty Cổ phần Xi măng Cẩm Phả đánh dấu mốc quan trọng trong chiến lược phát triển của Viettel.
> Nhà máy được xây dựng tại Km6, Quốc lộ 18A, Phường Quang Hanh, Tỉnh Quảng Ninh, công suất thiết kế 6.000 tấn clinker/ 1 ngày, tương đương, 2,3 triệu tấn xi măng PCB40/năm.
> Chi nhánh phía Nam (Trạm nghiền Xi măng Cẩm Phả) được xây dựng tại Khu Công nghiệp Mỹ Xuân, Phường Phú Mỹ, Thành Phố Hồ Chí Minh trên diện tích 20ha, với công suất 1.480.000 tấn xi măng/năm.

### Câu hỏi 2: "Các dòng sản phẩm xi măng chính là gì?"
**Nội dung phản hồi:**
> Danh mục các sản phẩm xi măng chính của Xi măng Cẩm Phả bao gồm:
> - **Xi măng Econs 40:** Sử dụng đa dụng cho sàn, cột, dầm bê tông dân dụng.
> - **Xi măng PCB30 & PCB40:** Dòng sản phẩm phổ thông có cường độ cao, dẻo và chống rạn nứt tốt.
> - **Xi măng hỗn hợp bền sunfat PCB50:** Chuyên dụng chống ăn mòn trong môi trường xâm thực mặn/phèn.
> - **Xi măng Poóc lăng hỗn hợp PCB40 & PC50 rời:** Cung cấp cho các trạm trộn bê tông cường độ cao.
> - **Xi măng Xỉ lò cao:** Đáp ứng các tiêu chuẩn kỹ thuật đặc thù cho công trình thủy lợi và đê đập.

### Câu hỏi 3: "Xi măng bền Sun phát dùng ở đâu?"
**Nội dung phản hồi:**
> Xi măng bền sunfat (PCB50 bền sunfat) được khuyến nghị sử dụng tại:
> - Các công trình xây dựng trong môi trường biển, ven biển hoặc ngập mặn.
> - Các công trình đê đập thủy lợi, hệ thống thoát nước hoặc bể chứa nước nhiễm phèn/hóa chất ăn mòn.
> - Các cấu trúc bê tông ngầm dưới lòng đất hoặc công trình chịu tác động xâm thực mạnh của sunfat.

### Câu hỏi 4: "Địa chỉ nhà máy và số điện thoại liên hệ?"
**Nội dung phản hồi:**
> Thông tin liên hệ của Công ty Cổ phần Xi măng Cẩm Phả:
> - **Nhà máy chính:** Km 6, Quốc lộ 18A, Phường Quang Hanh, Tỉnh Quảng Ninh. ĐT: (0203) 3721995 / 3721996. Email: info@camphacement.vn / customer@camphacement.vn
> - **Văn phòng đại diện Hà Nội:** Tầng 4, tòa nhà TCC Tower, số 19 Duy Tân, quận Cầu Giấy, thành phố Hà Nội.
> - **Trạm nghiền phía Nam:** Khu Công nghiệp Mỹ Xuân, Phường Phú Mỹ, Thành Phố Hồ Chí Minh.

---

## 2. Phương án kỹ thuật thực hiện

Chúng ta sẽ can thiệp trực tiếp tại tầng API Route của Next.js ([route.ts](file:///g:/Source-code/website/src/app/api/chat/route.ts)):

1. Đọc tin nhắn mới nhất của người dùng (`lastUserMessage`).
2. So khớp không phân biệt hoa thường và khoảng trắng thừa với 4 câu hỏi mẫu.
3. Nếu khớp, bypass cuộc gọi đến FastAPI AI Server.
4. Trả về một `ReadableStream` tùy biến giả lập tốc độ gõ chữ (stream text chunks):
   - Cắt chuỗi câu trả lời thành các từ hoặc cụm từ nhỏ.
   - Trả về dưới định dạng SSE (`data: <chunk>\n\n`).
   - Sử dụng độ trễ nhỏ (`setTimeout` 10-15ms) để tạo hiệu ứng gõ phím siêu tốc mượt mà.

---

## 3. Kế hoạch xác minh (Verification)

- Truy cập khung chat, bấm thử các câu hỏi nhanh.
- Xác nhận câu trả lời trả về tức thì (dưới 1-2 giây) thay vì phải đợi 15-20 giây gọi sang LLM.
- Đảm bảo hiệu ứng chữ chạy vẫn hiển thị bình thường.
