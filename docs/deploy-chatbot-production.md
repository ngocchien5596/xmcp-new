# Deploy website dùng được chatbot

## Mô hình khuyến nghị

Chạy website Next.js và `chatbot-server` trên cùng một VPS/server có Ollama:

- Public internet chỉ truy cập website Next.js qua domain.
- Next.js gọi backend nội bộ qua `http://127.0.0.1:8000/api/chat`.
- FastAPI và Ollama không mở public ra internet.

## Nếu website chạy trên Vercel

Vercel chỉ chạy website Next.js và route `/api/chat` làm proxy. `chatbot-server` và Ollama phải chạy ở một nơi khác có URL public HTTPS, ví dụ VPS, server công ty, Render, Railway, Fly.io hoặc một máy chủ có reverse proxy.

Luồng request sẽ là:

```text
Người dùng -> Vercel website -> /api/chat -> https://your-chatbot-server-domain.com/api/chat -> Ollama
```

Trên Vercel, cấu hình Environment Variables:

```env
AI_API_URL=https://your-chatbot-server-domain.com/api/chat
AI_API_KEY=change-this-secret-key
```

Không cấu hình `ORDER_STORAGE_MODE=next-local` trên Vercel. Luồng đặt hàng phải được xử lý và lưu ở `chatbot-server`, vì filesystem của Vercel Functions không phù hợp để lưu `order_requests.json` lâu dài.

Backend public nên đặt sau reverse proxy HTTPS. FastAPI vẫn có thể chạy nội bộ:

```powershell
python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

Reverse proxy public trỏ domain backend vào cổng `8000` nội bộ.

## Cấu trúc thư mục trên server

```text
G:\Source-code\
  website\
  chatbot-server\
```

Nếu dùng Linux VPS, có thể đặt tương tự:

```text
/opt/xmcp/
  website/
  chatbot-server/
```

## Biến môi trường frontend

Trong `website/.env.production`:

```env
AI_API_URL=http://127.0.0.1:8000/api/chat
AI_API_KEY=change-this-secret-key
```

`AI_API_KEY` phải trùng với backend.

## Biến môi trường backend

Trong `chatbot-server/.env`:

```env
AI_API_KEY=change-this-secret-key
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=qwen2.5:3b
OLLAMA_NUM_GPU=0
OLLAMA_NUM_CTX=512
OLLAMA_NUM_BATCH=8
OLLAMA_NUM_PREDICT=240
OLLAMA_KEEP_ALIVE=2m
```

## Chạy backend

```powershell
cd G:\Source-code\chatbot-server
pip install -r requirements.txt
python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

Kiểm tra:

```powershell
curl http://127.0.0.1:8000/health
```

## Chạy frontend

```powershell
cd G:\Source-code\website
npm install
npm run build
npm run start
```

Mặc định Next.js chạy cổng `3000`.

## Reverse proxy public

Trỏ domain public về Next.js, không trỏ trực tiếp vào backend.

Ví dụ Nginx:

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## Luồng request sau khi publish

```text
Người dùng -> https://domain.com -> Next.js /api/chat -> http://127.0.0.1:8000/api/chat -> Ollama
```

## Lưu ý quan trọng

- Không dùng `localhost`/`127.0.0.1` làm URL public trong trình duyệt. Ở đây `127.0.0.1` chỉ dùng nội bộ từ Next.js server sang FastAPI.
- Không expose cổng Ollama `11434` ra internet.
- Không expose FastAPI `8000` ra internet nếu không có authentication/reverse proxy riêng.
- Nếu deploy frontend lên Vercel/Sites còn backend nằm ở máy cá nhân, chatbot sẽ không hoạt động ổn định vì `127.0.0.1` lúc đó là máy chủ của nền tảng deploy, không phải máy của anh.
