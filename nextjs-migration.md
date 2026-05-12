# Kế hoạch chuyển đổi Website Viettel Software sang Next.js

## Overview
Chuyển đổi toàn bộ website tĩnh hiện tại (HTML/CSS/JS) của Viettel Software sang Next.js 15 App Router. Mục tiêu là tạo ra một kiến trúc module hóa, dễ bảo trì, với hiệu suất cao mà vẫn giữ nguyên giao diện UI/UX và các hiệu ứng animation cao cấp (từ file `main.js` và CSS) như hiện tại. Quá trình chuyển đổi sẽ sử dụng `index.html` làm trang chủ gốc và không thay đổi thư mục `site/` gốc.

## Project Type
**WEB** (Next.js, React web)

## Success Criteria
- Website chạy mượt mà trên môi trường Next.js App Router (không có lỗi Hydration hay lỗi build).
- Giao diện người dùng (UI) khớp 100% với phiên bản tĩnh hiện tại, đặc biệt là trang chủ sử dụng `index.html`.
- Các hiệu ứng animation (Scroll Reveal, Orbital Wheel, Counters, Carousel) hoạt động chuẩn xác bằng Framer Motion và React hooks.
- Cấu trúc thư mục được phân tách rõ ràng thành `(public)` cho khách truy cập và `(admin)` cho hệ thống quản trị sau này.
- Thư mục `site/` được giữ nguyên làm tư liệu đối chiếu, toàn bộ assets (CSS, images, fonts, JS) được sao chép vào `public/assets/`.

## Tech Stack
- **Framework:** Next.js 15 (App Router) - Tối ưu SEO, file-based routing.
- **Styling:** Tailwind CSS v3 - Ổn định, cấu hình tốt, và tương thích 100% với hệ sinh thái React.
- **UI Components:** shadcn/ui - Cung cấp các headless components tuỳ biến cao.
- **Animation:** Framer Motion - Thay thế Vanilla JS observer để thực hiện các hiệu ứng một cách tối ưu.
- **Language:** TypeScript - Đảm bảo code chặt chẽ và dễ debug.

## File Structure
```
g:\Source-code\website\
├── site/                          # (Bản gốc - Không sửa đổi)
├── src/
│   ├── app/
│   │   ├── (public)/              # Các trang công khai
│   │   │   ├── layout.tsx         # Header, Footer chung
│   │   │   ├── page.tsx           # Trang chủ (Từ index.html)
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── news/page.tsx
│   │   │   ├── products/page.tsx
│   │   │   └── careers/page.tsx
│   │   ├── (admin)/               # Dành cho hệ thống CMS sau này
│   │   │   └── layout.tsx
│   │   ├── layout.tsx             # Root Layout (Font, Provider)
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/                # Header.tsx, Footer.tsx
│   │   ├── sections/              # Các phần của trang chủ và trang phụ
│   │   ├── ui/                    # shadcn components
│   │   └── animations/            # RevealOnScroll, FramerMotion wrapper
│   └── lib/                       # utils.ts, constants.ts, fonts.ts
└── public/
    └── assets/                    # (Copy từ site/assets)
```

## Task Breakdown

### Phase 1: Foundation Setup
- **Task 1: Khởi tạo dự án Next.js & Cấu hình Tailwind v3**
  - **Agent:** `frontend-specialist` | **Skill:** `next-best-practices`, `app-builder`
  - **INPUT:** Thư mục gốc `g:\Source-code\website`.
  - **OUTPUT:** Dự án Next.js 15 với cấu trúc `src/`, config Tailwind v3.
  - **VERIFY:** `npm run dev` chạy thành công, không có lỗi cấu hình.
- **Task 2: Migration Assets & Fonts**
  - **Agent:** `frontend-specialist` | **Skill:** `frontend-design`
  - **INPUT:** Thư mục `site/assets/`.
  - **OUTPUT:** Các thư mục con nằm trong `public/assets/`. `src/lib/fonts.ts` cấu hình `next/font/local` cho FS Magistral và Roboto.
  - **VERIFY:** Font được tải thông qua `next/font` mà không gặp lỗi Network.
- **Task 3: Thiết lập Global CSS**
  - **Agent:** `frontend-specialist` | **Skill:** `tailwind-patterns`
  - **INPUT:** `site/assets/css/style.css`
  - **OUTPUT:** File `globals.css` được làm sạch, chuyển các class thành Tailwind classes hoặc giữ lại trong layer components/utilities.
  - **VERIFY:** Các UI tokens (màu sắc, font) có thể sử dụng thông qua Tailwind classes.

### Phase 2: Core Layout & Animations
- **Task 4: Xây dựng Layout Components (Header & Footer)**
  - **Agent:** `frontend-specialist` | **Skill:** `nextjs-react-expert`
  - **INPUT:** Header và Footer từ `master-layout.html`.
  - **OUTPUT:** Component `Header.tsx` (Client component cho scroll sticky) và `Footer.tsx` (Server component).
  - **VERIFY:** Layout hiển thị đúng trên mọi trang public.
- **Task 5: Thiết lập Hỗ trợ Animation cơ bản**
  - **Agent:** `frontend-specialist` | **Skill:** `frontend-design`
  - **INPUT:** File `main.js` chứa intersection observer logic.
  - **OUTPUT:** Wrapper components như `RevealOnScroll.tsx` sử dụng `framer-motion`.
  - **VERIFY:** Test component render đúng và tự kích hoạt khi scroll.

### Phase 3: Trang Chủ (`index.html`)
- **Task 6: Tái cấu trúc Hero Section & Stats**
  - **Agent:** `frontend-specialist`
  - **INPUT:** Code HTML phần Hero trong `index.html`.
  - **OUTPUT:** Component `HeroSection.tsx` tích hợp số đếm (Counter) bằng hook/framer-motion.
  - **VERIFY:** Khớp thiết kế gốc, số đếm chạy đúng.
- **Task 7: Xây dựng Interactive Wheel (Why Choose Us)**
  - **Agent:** `frontend-specialist`
  - **INPUT:** Đoạn code `.wheel-wrapper` từ HTML và hàm `initWheel()` từ JS.
  - **OUTPUT:** React component `OrbitalWheel.tsx` quản lý state xoay vòng thay cho requestAnimationFrame cũ (hoặc kết hợp logic React hooks).
  - **VERIFY:** Vòng quay xoay tự động, click vào các node sẽ tạm dừng và hiện thông tin.
- **Task 8: Hoàn thành các section còn lại (Services, Stories, News, Logos)**
  - **Agent:** `frontend-specialist`
  - **INPUT:** Code HTML từ trang chủ.
  - **OUTPUT:** Code được tách thành từng components trong `src/components/sections/`.
  - **VERIFY:** Toàn bộ trang `app/(public)/page.tsx` hoàn thiện 100%.

### Phase 4: Các Trang Phụ
- **Task 9: Chuyển đổi các trang còn lại (About, Services, News, Products, Careers)**
  - **Agent:** `frontend-specialist` | **Skill:** `next-best-practices`
  - **INPUT:** HTML tĩnh trong các file tương ứng.
  - **OUTPUT:** Các page.tsx mới trong các thư mục route tương ứng.
  - **VERIFY:** Routing hoạt động, thiết kế chuẩn pixel.

## Phase X: Verification
- [ ] **Lint & Type Check:** Chạy `npm run lint` và `npx tsc --noEmit` hoàn tất không lỗi.
- [ ] **Security:** Cấu hình chuẩn không rò rỉ keys.
- [ ] **Build:** `npm run build` build thành công, cấu hình Standalone/Server Actions rõ ràng.
- [ ] **UI/UX Checklist:** Không dùng giao diện "cliché" mặc định của template, bảo tồn đúng UI thương hiệu Viettel (không dùng màu Tím).
- [ ] **Animations Check:** Các animation đều sử dụng `useInView` / `framer-motion` mượt mà, không giật lag.
