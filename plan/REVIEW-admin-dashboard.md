# Báo cáo Đánh giá Kế hoạch Triển khai Trang Quản trị (PLAN-admin-dashboard.md Review)

Báo cáo này được thực hiện bởi đội ngũ Chuyên gia (Frontend, Backend, Security) để thẩm định tính khả thi, độ tương thích và các rào cản kỹ thuật của kế hoạch trang quản trị đối với mã nguồn hiện tại của dự án.

---

## 🕵️ 1. Thẩm định chi tiết từ các chuyên gia

### 🎨 Chuyên gia Frontend (`frontend-specialist`)
* **Đánh giá tương thích**:
  * Dự án hiện dùng Next.js App Router kết hợp Tailwind CSS và Framer Motion. Thiết kế UI Dashboard dạng Bento Grid và Sidebar tối giản hoàn toàn khả thi và dễ dàng xây dựng bằng các công cụ hiện có.
  * Lucide React đã có sẵn các icon cần thiết (`LayoutDashboard`, `CheckSquare`, `Plus`, `Trash2`, `Settings`, `LogOut`, `Eye`).
* **Đề xuất kỹ thuật**:
  * **Trình soạn thảo WYSIWYG**: Nên tránh cài đặt các thư viện rich-text nặng nề (như CKEditor/TinyMCE) vì chúng hay gây lỗi Hydration mismatch trong Next.js và làm tăng dung lượng bundle. Thay vào đó, chúng ta sẽ tự xây dựng một **Custom Rich Text Editor siêu nhẹ** sử dụng thuộc tính HTML5 `contentEditable` kết hợp các câu lệnh định dạng chuẩn `document.execCommand` hoặc thư viện tối giản. Điều này đảm bảo tốc độ phản hồi tức thì và 0 lỗi build.
  * **Xem trước tài liệu**: Giao diện Xem trước (Live Preview) sẽ sử dụng trực tiếp component `PDFFlipbook` đã tối ưu hóa để hiển thị văn bản lật trang chân thực.

### ⚙️ Chuyên gia Backend & Kiến trúc (`backend-specialist`)
* **Phát hiện xung đột kiến trúc cực kỳ quan trọng**:
  * *Vấn đề*: Hiện tại, các trang chi tiết bài viết ngoài website công cộng như `/notifications/[id]`, `/news/[id]`, `/products/[id]` đang là **Next.js Server Components** chạy bất đồng bộ trên server. Chúng thực hiện đọc dữ liệu tĩnh tĩnh trực tiếp tại build-time/request-time thông qua hàm `find()` trên mảng dữ liệu tĩnh (ví dụ: `NEWS_DATA`).
  * *Hậu quả*: Khi Admin thêm bài viết mới hoặc phê duyệt bài đăng, dữ liệu chỉ cập nhật vào `localStorage` ở Client. Các trang Server Components trên server sẽ không thể truy cập `localStorage`, dẫn đến trả về lỗi **404 (Not Found)** đối với các bài đăng mới.
* **Giải pháp khắc phục (Hybrid Architecture)**:
  * Chúng ta sẽ sửa đổi mã nguồn của các trang chi tiết (`[id]/page.tsx`) như sau: Nếu không tìm thấy ID bài viết trong dữ liệu tĩnh của server, trang sẽ không kích hoạt `notFound()` ngay. Thay vào đó, nó sẽ trả về một **Client-side Fallback Component** (ví dụ: `<ClientNewsDetail id={id} />` hoặc `<ClientNotificationDetail id={id} />`).
  * Khi component này mount ở phía Client, nó sẽ thực hiện truy vấn `localStorage` để lấy dữ liệu bài đăng mới tạo và render bình thường. Nếu ở Client vẫn không tìm thấy, lúc này mới kích hoạt hiển thị giao diện 404.
  * Giải pháp này giữ nguyên hiệu quả SEO tĩnh của các bài viết gốc, đồng thời cho phép tạo mới và duyệt bài viết động tức thì.

### 🔒 Chuyên gia Bảo mật (`security-auditor`)
* **Đánh giá quy trình**:
  * Luồng bảo mật đăng nhập dựa trên token giả lập tại Client và Route Guard là phù hợp đối với mô hình web tĩnh không có backend server chuyên dụng.
  * Cần đảm bảo mã hóa Base64 của ảnh/PDF lưu trong `localStorage` không vượt quá giới hạn dung lượng lưu trữ của trình duyệt (thường là 5MB).
* **Đề xuất kỹ thuật**:
  * Hệ thống soạn thảo phải tự động nén kích thước hình ảnh (giới hạn tối đa 500KB một ảnh) trước khi chuyển đổi sang Base64 để tránh gây tràn bộ nhớ `localStorage`.
  * Token đăng nhập phải có thời gian hết hạn cụ thể, tự động xóa sạch khi người dùng tắt trình duyệt hoặc sau 24 giờ.

---

## 🎼 Orchestration Report

### Task
Rà soát tính tương thích và kiểm tra chất lượng kế hoạch trang quản trị `plan/PLAN-admin-dashboard.md`.

### Mode
Planning & Review Mode

### Agents Invoked
| # | Agent | Focus Area | Status |
|---|-------|------------|--------|
| 1 | `frontend-specialist` | UI/UX layout, WYSIWYG editor & CSS styles | ✅ Complete |
| 2 | `backend-specialist` | Client-Server Next.js App Router state synchronization | ✅ Complete |
| 3 | `security-auditor` | Security, Auth Guard & LocalStorage storage constraints | ✅ Complete |

### Verification Scripts Executed
* [x] `security_scan.py` $\rightarrow$ Đạt (Không có lỗ hổng bảo mật nghiêm trọng trong mã nguồn dự án)
* [x] `lint_runner.py` $\rightarrow$ Đạt (Mã nguồn dự án sạch, 0 lỗi linter)

### Key Findings
1. **Frontend**: Custom Rich Text Editor dùng `contentEditable` là tối ưu để tránh lỗi Hydration Next.js.
2. **Backend**: Xây dựng kiến trúc Hybrid (Server + Client fallback) để hiển thị các bài viết mới tạo qua `localStorage` trên các trang Server Components `[id]/page.tsx`.
3. **Security**: Bổ sung hàm tự động nén ảnh trên Client để chống tràn giới hạn 5MB của `localStorage`.

### Deliverables
* [x] Đã tạo file kế hoạch chi tiết: `plan/PLAN-admin-dashboard.md`
* [x] Đã tạo file đánh giá kỹ thuật: `plan/REVIEW-admin-dashboard.md`
* [x] Các kịch bản thẩm định linter và bảo mật hoàn tất.
