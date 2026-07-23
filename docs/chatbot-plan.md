# KẾ HOẠCH TRIỂN KHAI: TÍCH HỢP CHATBOT BUBBLE WIDGET TỰ HOST (CPU-FRIENDLY)

Tài liệu này trình bày kế hoạch chi tiết để phát triển bong bóng chat (chat bubble) nổi trên website Công ty Cổ phần Xi măng Cẩm Phả. Hệ thống sử dụng mô hình AI siêu nhẹ chạy trực tiếp trên CPU thông qua Ollama kết hợp với cơ chế tìm kiếm thông tin cục bộ (Local RAG) trên Next.js 16 và React 19.

---

## 1. Kiến trúc hệ thống & Lựa chọn mô hình

### Lựa chọn mô hình AI
- **Mô hình:** `qwen2.5:3b` (mô hình text-only chạy cục bộ qua Ollama).
- **Yêu cầu tài nguyên:** Tiêu thụ chỉ khoảng **1.5GB - 2GB RAM** khi chạy thực tế (tối ưu hóa tối đa và an toàn tuyệt đối dưới giới hạn 4GB của bạn).
- **Phần cứng tương thích:** Chạy mượt mà trực tiếp trên **CPU thông thường**, không yêu cầu card đồ họa GPU rời.
- **Khả năng ngôn ngữ:** Đọc hiểu tiếng Việt tự nhiên và tuân thủ chặt chẽ tài liệu hướng dẫn được cung cấp.

### Kiến trúc luồng dữ liệu tách biệt (Decoupled Architecture)
```
[Trình duyệt của khách] <---> [Next.js API Proxy (Dự án 1)] <---> [Python FastAPI Server (Dự án 2)] <---> [Ollama Server (Localhost)]
                                                                               ^
                                                                               | (RAG Engine & Embeddings)
                                                                      [Tài liệu tri thức]
```
- **Dự án 1 (Website chính - Next.js 16):** Chịu trách nhiệm hiển thị giao diện bong bóng chat và làm proxy chuyển tiếp yêu cầu đến server AI thông qua địa chỉ API được cấu hình trong file `.env` (ví dụ: `AI_API_URL=http://localhost:8000/api/chat`).
- **Dự án 2 (AI Service - Python FastAPI):** Chạy độc lập trong thư mục `G:\Source-code\chatbot-server`. Chịu trách nhiệm quản lý tài liệu tri thức, tìm kiếm thông tin liên quan (RAG) và kết nối với Ollama để sinh câu trả lời.

---

## 2. Thiết kế giao diện (UI/UX Design Commitment)

Đảm bảo giao diện hiện đại, trực quan và đồng bộ với nhận diện thương hiệu của Công ty Xi măng Cẩm Phả (Viettel Group):
- **Màu sắc (Palette):** Sử dụng tông màu đỏ Viettel làm điểm nhấn (`#ED1C24`), kết hợp với nền trắng, chữ xám tối (`#111111`) và các đường viền mảnh tinh tế. *Tuyệt đối không sử dụng màu tím (Tuân thủ Purple Ban).*
- **Hình khối (Geometry):** Góc bo nhẹ sắc nét (`rounded-xl` / 12px), đường viền sắc nét 1px/2px tạo cảm giác chuyên nghiệp, cứng cáp của ngành công nghiệp xi măng.
- **Font chữ (Typography):** Tiêu đề dùng font hiển thị `Magistral` của công ty, văn bản hội thoại dùng font `Roboto` tiêu chuẩn dễ đọc.
- **Chuyển động (Motion):** Sử dụng `framer-motion` thiết lập hiệu ứng mở/đóng cửa sổ dạng lò xo (Spring physics). Tin nhắn mới xuất hiện dạng trượt nhẹ từ dưới lên. Bong bóng chat góc phải có hiệu ứng chấm đỏ nhấp nháy báo hiệu trạng thái sẵn sàng.

---

## 3. Các thành phần mã nguồn cần xây dựng/chỉnh sửa

### DỰ ÁN 1: Website chính (Next.js - Thư mục hiện tại)

#### 📝 [NEW] `src/app/api/chat/route.ts`
*   API Route Next.js đóng vai trò bảo mật. Nhận yêu cầu chat từ Client, đính kèm Token bảo mật và thực hiện gọi API dạng streaming sang Python FastAPI Server (Dự án 2).
*   Đọc luồng dữ liệu (Stream) từ FastAPI và chuyển tiếp nguyên vẹn về trình duyệt của khách hàng.

#### 📝 [NEW] `src/components/layout/ChatBubble.tsx`
*   Thành phần React Client Component chứa giao diện bong bóng chat nổi, khung chat, luồng tin nhắn và hiệu ứng chuyển động mượt mà bằng Framer Motion.
*   Hỗ trợ các câu hỏi gợi ý nhanh (Quick Reply Chips) và lưu lịch sử chat vào `localStorage` của trình duyệt.

#### 🛠️ [MODIFY] `src/app/layout.tsx`
*   Nhúng thẻ `<ChatBubble />` vào cuối layout chung để kích hoạt tính năng chat trên toàn bộ các trang con.

### DỰ ÁN 2: AI Service (Python FastAPI - Thư mục `G:\Source-code\chatbot-server` độc lập)

#### 📝 [NEW] `chatbot-server/main.py`
*   Khởi tạo FastAPI Server chạy trên cổng `http://127.0.0.1:8000`.
*   Cung cấp API Endpoint `POST /api/chat` hỗ trợ Streaming (Server-Sent Events) nhận lịch sử trò chuyện.
*   Thực hiện tìm kiếm tài liệu từ `rag.py`, tạo System Prompt và gọi đến Ollama API (`qwen2.5:3b`) để sinh câu trả lời.

#### 📝 [NEW] `chatbot-server/rag.py`
*   Xử lý tìm kiếm thông tin liên quan (RAG) từ file tri thức.
*   Thực hiện so khớp và tính toán độ tương đồng từ khóa (Lexical Search) để tìm ra 3-5 đoạn thông tin khớp nhất với câu hỏi.

#### 📝 [NEW] `chatbot-server/data/knowledge.json`
*   File dữ liệu văn bản lưu trữ toàn bộ thông tin chi tiết về Công ty Cổ phần Xi măng Cẩm Phả để phục vụ tra cứu.

#### 📝 [NEW] `chatbot-server/requirements.txt` & `run.bat`
*   Khai báo các thư viện Python cần thiết (`fastapi`, `uvicorn`, `requests`, `sse-starlette`).
*   Tạo file thực thi nhanh để chạy server Python cục bộ.

---

## 4. Kế hoạch xác minh & Chạy thử nghiệm

1.  **Cài đặt Ollama và tải mô hình:**
    ```bash
    # Tải và chạy mô hình Qwen 3 4B cục bộ
    ollama run qwen2.5:3b
    ```
2.  **Kiểm tra API kết nối:**
    Gửi request thử nghiệm đến cổng API `/api/chat` bằng PowerShell để xác nhận dữ liệu trả về dạng stream:
    ```powershell
    Invoke-RestMethod -Uri "http://localhost:3000/api/chat" -Method Post -Body '{"messages":[{"role":"user","content":"Xi măng Cẩm Phả ở đâu?"}]}' -ContentType "application/json"
    ```
3.  **Kiểm thử giao diện (Manual UX):**
    *   Mở trình duyệt truy cập `http://localhost:3000`.
    *   Click vào bong bóng chat, nhập câu hỏi và kiểm tra độ phản hồi, hiệu ứng chữ chạy thời gian thực.
    *   Thử ngắt kết nối Ollama để đảm bảo Chat UI hiển thị thông báo lỗi thân thiện thay vì bị crash.
