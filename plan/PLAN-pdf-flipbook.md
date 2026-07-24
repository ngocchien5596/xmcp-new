# PLAN - Notifications Feature with HTML5 Flipbook PDF Viewer

This document outlines the detailed architecture and step-by-step plan for implementing the **Notifications (Thông báo)** feature, integrated with a premium **HTML5 3D Page Flipbook** for viewing PDF documents.

---

## 1. Architectural Strategy for HTML5 PDF Flipbook

To achieve a smooth 3D page-flipping effect on both desktop and mobile, we will build a custom React component using the following strategy:

1. **PDF Rendering (PDF.js):**
   - We will use `pdfjs-dist` (PDF.js) to load the PDF dynamically on the client side.
   - Each page of the PDF will be rendered onto an HTML5 `<canvas>` element in the background.
2. **3D Flipbook Animation (CSS 3D Transforms):**
   - We will implement a responsive 3D Flipbook component using CSS properties:
     - `perspective: 1500px` (defines the 3D depth).
     - `transform-style: preserve-3d` (preserves child 3D positions).
     - `backface-visibility: hidden` (hides the back side of pages during flipping).
     - Transition transforms (`rotateY`) to simulate smooth page turns.
   - On **Desktop / Tablet:** Shows a double-page spread (Left Page + Right Page) simulating an open physical book.
   - On **Mobile:** Automatically transitions to a single-page flip layout or a responsive swipe viewer to optimize the small screen size.
3. **Controls Interface:**
   - Next/Previous page buttons (with keyboard navigation support).
   - Page counter (e.g., "Trang 3/20").
   - Fullscreen mode.
   - Download PDF button.

---

## 2. Proposed File Modifications & Additions

### Component Layout & Navigation
#### [MODIFY] [Header.tsx](file:///g:/Source-code/website/src/components/layout/Header.tsx)
- Add "Thông báo" link to the header `NAV_ITEMS` array:
  ```typescript
  { href: '/notifications', label: 'Thông báo' }
  ```

---

### Data Models & Static Assets
#### [NEW] [notifications.ts](file:///g:/Source-code/website/src/data/notifications.ts)
- Create a mock data store for notifications containing columns: Post Date, Category, Title, Description, PDF File Path, and File Size.
- Add mock entries, including one for `PTYC Chặn đơn hàng v1.6.pdf`.

#### [NEW] [PTYC_Chan_don_hang_v1_6.pdf](file:///g:/Source-code/website/public/documents/PTYC_Chan_don_hang_v1_6.pdf)
- Copy the file `G:\Source-code\website\PTYC Chặn đơn hàng v1.6.pdf` to the public assets directory.

---

### UI Components
#### [NEW] [PDFFlipbook.tsx](file:///g:/Source-code/website/src/components/ui/PDFFlipbook.tsx)
- Create the core 3D Flipbook renderer component.
- Implements:
  - Dynamic loading of PDF pages via PDF.js.
  - Rendering each page to a canvas.
  - HTML5 CSS 3D page flipping animations.
  - Interactive page-turn controls.

---

### Pages & Routes
#### [NEW] [page.tsx (List View)](file:///g:/Source-code/website/src/app/(public)/notifications/page.tsx)
- Render the search bar, category tabs, and table listing all notifications.
- Columns: Post Date (Ngày đăng), Notification Name (Tên thông báo), Content Description (Nội dung), and Detail Action button (Chi tiết).
- Responsive conversion to cards layout on mobile screens.

#### [NEW] [page.tsx (Detail View)](file:///g:/Source-code/website/src/app/(public)/notifications/[id]/page.tsx)
- Detailed notification view containing publication metadata and integrating the `<PDFFlipbook>` component.
- Fallback download card if the PDF fails to load or rendering is slow.

---

## 3. Implementation Workflow

### Phase 1: Setup & Dependencies
- Copy the PDF asset to `public/documents/`.
- Install `pdfjs-dist` library if not already installed, or configure a web worker path for optimal performance.

### Phase 2: Layout & Data Wiring
- Add "Thông báo" to `NAV_ITEMS` in `Header.tsx`.
- Populate mock data in `src/data/notifications.ts`.

### Phase 3: Notification List Page
- Implement the search & tab-filtering UI.
- Structure the desktop table and the mobile list cards.

### Phase 4: Flipbook Engine & Detail Page
- Develop the canvas-renderer and the CSS 3D page flip animation logic in `PDFFlipbook.tsx`.
- Wrap it with beautiful navigation controls.
- Integrate the component into the dynamic route `/notifications/[id]`.

### Phase 5: Verification & Polishing
- Perform responsiveness checks (Desktop, Tablet, Mobile layout transitions).
- Verify build compatibility on Next.js via `npm run build`.

---

## 4. Verification Checklist

- [ ] PDF copied successfully to `public/documents/`.
- [ ] "Thông báo" link is visible in the main navigation Header and redirects correctly.
- [ ] `/notifications` list page allows searching by title and filtering by category.
- [ ] Page-turn controls (Next, Prev) work smoothly.
- [ ] 3D Page flip transitions render at 60fps on Desktop.
- [ ] Mobile version falls back to single-page flip layout smoothly.
- [ ] Build compiles successfully on Vercel without typescript or worker errors.
