# PLAN: TÍCH HỢP CHATBOT BUBBLE WIDGET TỰ HOST (DECOUPLED)

Tài liệu này là bản kế hoạch chi tiết, phân chia nhiệm vụ và các bước triển khai để phát triển bong bóng chat (chat bubble) nổi trên website và kết nối API đến một AI Service (Python FastAPI) độc lập chạy mô hình `qwen2.5:3b` thông qua Ollama.

---

## 📋 THÔNG TIN CHUNG & CẤU HÌNH
- **Dự án 1 (Website chính):** Next.js 16 (App Router), React 19, Tailwind CSS v3, Framer Motion.
  - **Đường dẫn thư mục:** `g:\Source-code\website`
- **Dự án 2 (AI Service):** Python 3.10+ (FastAPI), Uvicorn, sse-starlette, Ollama.
  - **Đường dẫn thư mục:** `g:\Source-code\chatbot-server`.
- **Mô hình AI:** `qwen2.5:3b` (text-only, chạy cục bộ qua Ollama).
- **Endpoint Ollama:** `http://127.0.0.1:11434` (Ollama chạy cục bộ).

---

## 🗺️ PHÂN RÃ HỆ THỐNG & NHIỆM VỤ CHI TIẾT

### PHÂN ĐOẠN 1: THIẾT LẬP MÔI TRƯỜNG & AI SERVICE (Python FastAPI)
*Mục tiêu: Xây dựng dự án AI chạy độc lập trên cổng 8000, hỗ trợ tìm kiếm tài liệu (RAG) và kết nối với Ollama để stream kết quả.*

- [ ] **Nhiệm vụ 1.1: Khởi tạo thư mục và cài đặt thư viện**
  - Tạo thư mục: `g:\Source-code\chatbot-server` và thư mục con `data/`.
  - Tạo file `requirements.txt` chứa: `fastapi`, `uvicorn`, `requests`, `sse-starlette`.
  - Tạo file `run.bat` để chạy nhanh máy chủ.
  - *Người thực hiện:* `devops-engineer`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 1.2: Thiết lập cơ sở dữ liệu tri thức**
  - Tạo file `g:\Source-code\chatbot-server\data\knowledge.json`.
  - Soạn thảo tri thức chi tiết về Công ty Cổ phần Xi măng Cẩm Phả bao gồm:
    - Giới thiệu chung (Thành viên Viettel, lịch sử).
    - Các dòng sản phẩm xi măng (PCB30, PCB40, bền sun phát, clinker) kèm đặc tính kỹ thuật.
    - Địa chỉ trụ sở chính (Cẩm Phả, Quảng Ninh) và văn phòng đại diện (Hà Nội, TP.HCM, Khánh Hòa).
    - Thông tin liên hệ (Hotline, Email).
  - *Người thực hiện:* `project-planner` / `documentation-writer`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 1.3: Lập trình thuật toán tìm kiếm tài liệu (RAG)**
  - Tạo file `g:\Source-code\chatbot-server\rag.py`.
  - Viết logic tìm kiếm so khớp từ khóa (Lexical Search) từ câu hỏi người dùng đối chiếu với nội dung trong `knowledge.json`.
  - Trả về danh sách 3 đoạn thông tin khớp nhất kèm theo điểm số tương thích.
  - *Người thực hiện:* `backend-specialist`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 1.4: Lập trình API Endpoint chính & Kết nối Ollama**
  - Tạo file `g:\Source-code\chatbot-server\main.py`.
  - Khởi tạo FastAPI app. Cấu hình CORS chặt chẽ (chỉ cho phép Next.js gọi API chéo).
  - **Bảo mật API:** Bổ sung Middleware/Dependency kiểm tra Header `X-API-Key` để xác thực, chỉ cho phép Next.js API Proxy gọi sang, ngăn chặn dò quét bên ngoài.
  - Tạo route `POST /api/chat` nhận vào lịch sử trò chuyện (`messages`).
  - Lấy nội dung câu hỏi cuối cùng của người dùng để truy vấn qua `rag.py`.
  - Tạo System Prompt hướng dẫn mô hình:
    ```
    Bạn là chatbot AI hỗ trợ khách hàng của Công ty Cổ phần Xi măng Cẩm Phả.
    Hãy sử dụng thông tin tham khảo dưới đây để trả lời câu hỏi một cách lịch sự, ngắn gọn và chính xác. 
    Nếu thông tin tham khảo không có câu trả lời, hãy nói rằng bạn không biết và khuyên khách hàng liên hệ hotline.
    Thông tin tham khảo:
    {RAG_CONTEXT}
    ```
  - Gọi API `/api/chat` của Ollama cục bộ với tham số `stream=true`, phân tích luồng JSON từ Ollama và định dạng lại thành luồng Server-Sent Events (SSE) trả về cho client.
  - *Người thực hiện:* `backend-specialist` / `security-auditor`
  - *Độ ưu tiên:* P0

---

### PHÂN ĐOẠN 2: TÍCH HỢP FRONTEND & API PROXY (Next.js 16)
*Mục tiêu: Xây dựng giao diện chat bong bóng và viết API Router Next.js làm proxy bảo mật gọi sang FastAPI.*

- [ ] **Nhiệm vụ 2.1: Cấu hình môi trường**
  - Cập nhật `.env.local` hoặc `.env`:
    ```env
    AI_API_URL=http://localhost:8000/api/chat
    AI_API_KEY=campha-cement-ai-secret-key-2026
    ```
  - *Người thực hiện:* `backend-specialist`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 2.2: Viết Next.js API Proxy**
  - Tạo file `src/app/api/chat/route.ts`.
  - Nhận yêu cầu POST từ trình duyệt của khách hàng, đính kèm header `X-API-Key` với giá trị lấy từ `process.env.AI_API_KEY` và gửi yêu cầu đến `process.env.AI_API_URL`.
  - Nhận luồng dữ liệu stream từ FastAPI và chuyển tiếp (pipe) trực tiếp về cho client Next.js.
  - Xử lý các trường hợp lỗi kết nối hoặc FastAPI server ngoại tuyến một cách an toàn.
  - *Người thực hiện:* `backend-specialist` / `security-auditor`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 2.3: Phát triển giao diện Bong bóng Chat**
  - Tạo file `src/components/layout/ChatBubble.tsx`.
  - **Thiết kế & Hiệu ứng:**
    - Sử dụng Tailwind CSS với tone đỏ Viettel làm màu chủ đạo (`#ED1C24`).
    - Nút bong bóng chat lơ lửng góc dưới bên phải có chấm đỏ nhấp nháy chuyển động nhẹ.
    - Cửa sổ chat rộng ~380px, bo góc sắc nét (`rounded-xl` / 12px), viền mảnh 1px xám đỏ, bóng đổ mịn màng.
    - Dùng **Framer Motion** để tạo chuyển động mở/đóng cửa sổ dạng lò xo (Spring physics) và chuyển động hiện tin nhắn mới mượt mà.
    - Trạng thái AI đang gõ (typing indicator) hiển thị 3 dấu chấm nhấp nháy.
  - **Tính năng & Khả năng tương thích React 19 / Next.js 16:**
    - Khai báo chỉ thị `'use client'` ở dòng đầu tiên.
    - **localStorage Hydration:** Khi khởi tạo tin nhắn từ `localStorage`, chỉ thực hiện trong `useEffect` (hoặc bọc kiểm tra `typeof window !== 'undefined'`) để tránh lỗi bất đồng nhất HTML giữa Client và Server (Hydration mismatch).
    - Hiển thị danh sách câu hỏi gợi ý nhanh (Quick Reply Chips) dưới dạng các nút bấm như: *"Các loại xi măng của Cẩm Phả?"*, *"Địa chỉ nhà máy ở đâu?"*, *"Hotline liên hệ là gì?"*.
    - Ô nhập văn bản hỗ trợ phím Enter để gửi.
  - *Người thực hiện:* `frontend-specialist`
  - *Độ ưu tiên:* P0

- [ ] **Nhiệm vụ 2.4: Nhúng Chat Bubble vào Layout hệ thống**
  - Chỉnh sửa `src/app/layout.tsx`.
  - Nhập thành phần `<ChatBubble />` và đặt dưới cùng của cấu trúc thẻ `<body>` để đảm bảo bong bóng chat xuất hiện trên tất cả các trang của website.
  - *Người thực hiện:* `frontend-specialist`
  - *Độ ưu tiên:* P1

---

## 🧪 KẾ HOẠCH XÁC MINH & KIỂM THỬ (VERIFICATION PLAN)

### 1. Xác minh API AI Service (FastAPI)
*   **Lệnh chạy server AI:** `cd G:\Source-code\chatbot-server && uvicorn main:app --port 8000`
*   **Lệnh Test bằng PowerShell:**
    ```powershell
    Invoke-RestMethod -Uri "http://localhost:8000/api/chat" -Method Post -Body '{"messages":[{"role":"user","content":"Xi măng Cẩm Phả là thành viên của tập đoàn nào?"}]}' -ContentType "application/json"
    ```
    *Tiêu chí đạt:* Phản hồi trả về dạng Stream, có nội dung khẳng định là thành viên của tập đoàn Viettel dựa trên dữ liệu mẫu trong `knowledge.json`.

### 2. Xác minh API Proxy (Next.js)
*   **Lệnh Test bằng PowerShell:**
    ```powershell
    Invoke-RestMethod -Uri "http://localhost:3000/api/chat" -Method Post -Body '{"messages":[{"role":"user","content":"Các sản phẩm chính?"}]}' -ContentType "application/json"
    ```
    *Tiêu chí đạt:* Next.js chuyển tiếp thành công luồng stream từ cổng 8000 về cổng 3000 không bị gián đoạn.

### 3. Kiểm thử giao diện & Trải nghiệm người dùng (UX/UI Manual Verification)
*   Mở trình duyệt truy cập `http://localhost:3000`.
*   Kiểm tra bong bóng chat có hiển thị đúng vị trí bên phải nửa dưới màn hình không.
*   Bấm vào các Quick Chips, kiểm tra tốc độ phản hồi và hiệu ứng hiển thị tin nhắn.
*   Ngắt kết nối server AI (tắt FastAPI) và gửi tin nhắn, kiểm tra xem UI có hiển thị lỗi thân thiện (ví dụ: *"Không thể kết nối với trợ lý ảo lúc này. Vui lòng thử lại sau hoặc liên hệ Hotline..."*) thay vì bị treo hoặc lỗi console.
